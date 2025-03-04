import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { PlanetConfig, MoonConfig } from '../types';

interface PlanetProps {
  planet: PlanetConfig;
  time: number;
}

interface MoonProps {
  moon: MoonConfig;
  time: number;
  planetRadius: number;
}

const Moon: React.FC<MoonProps> = ({ moon, time, planetRadius }) => {
  const moonRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (moonRef.current) {
      const angle = time * moon.speed * 0.1;
      moonRef.current.position.x = Math.cos(angle) * moon.distance;
      moonRef.current.position.z = Math.sin(angle) * moon.distance;
      moonRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={moonRef} args={[moon.radius * 0.1, 32, 32]}>
      <meshStandardMaterial color={moon.color} />
    </Sphere>
  );
};

const Planet: React.FC<PlanetProps> = ({ planet, time }) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Line>(null);
  
  // Load texture if available
  const texture = planet.texture ? useTexture(planet.texture) : null;
  
  // Create orbit path
  const orbitGeometry = new THREE.BufferGeometry().setFromPoints(
    new Array(64).fill(0).map((_, i) => {
      const angle = (i / 64) * Math.PI * 2;
      return new THREE.Vector3(
        Math.cos(angle) * planet.distance,
        0,
        Math.sin(angle) * planet.distance
      );
    })
  );

  useFrame(() => {
    if (planetRef.current && planet.id !== 'sun') {
      // Update planet position based on time and speed
      const angle = time * planet.speed * 0.05;
      planetRef.current.position.x = Math.cos(angle) * planet.distance;
      planetRef.current.position.z = Math.sin(angle) * planet.distance;
      
      // Rotate planet
      planetRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* Orbit line */}
      {planet.id !== 'sun' && (
        <line ref={orbitRef}>
          <bufferGeometry attach="geometry" {...orbitGeometry} />
          <lineBasicMaterial attach="material" color="#666666" opacity={0.3} transparent />
        </line>
      )}
      
      {/* Planet */}
      <Sphere 
        ref={planetRef} 
        args={[planet.radius, 32, 32]} 
        position={planet.id === 'sun' ? [0, 0, 0] : [planet.distance, 0, 0]}
      >
        <meshStandardMaterial 
          color={planet.color} 
          map={texture} 
          emissive={planet.id === 'sun' ? planet.color : undefined}
          emissiveIntensity={planet.id === 'sun' ? 0.5 : 0}
        />
      </Sphere>
      
      {/* Moons */}
      {planet.hasMoons && planet.moons && planet.moons.map(moon => (
        <group key={moon.id} position={planetRef.current ? planetRef.current.position : [planet.distance, 0, 0]}>
          <Moon moon={moon} time={time} planetRadius={planet.radius} />
        </group>
      ))}
    </group>
  );
};

export default Planet;