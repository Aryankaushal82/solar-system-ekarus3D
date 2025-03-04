

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { PlanetConfig } from '../types';

interface PlanetProps {
  planet: PlanetConfig;
  globalSpeed: number;
}

const Planet: React.FC<PlanetProps> = ({ planet, globalSpeed }) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  // Memoize orbit points for performance
  const orbitPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 100;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * planet.distance, 
          0, 
          Math.sin(angle) * planet.distance
        )
      );
    }
    return points;
  }, [planet.distance]);

  useFrame((_, delta) => {
    if (orbitRef.current && planet.id !== 'sun') {
      // Adjust rotation based on global speed and planet's individual speed
      const rotationSpeed = planet.speed * globalSpeed * 0.5;
      orbitRef.current.rotation.y += rotationSpeed * delta;

      // Add self-rotation for the planet
      if (planetRef.current) {
        planetRef.current.rotation.y += 0.005;
      }
    }
  });

  // Skip rendering for sun
  if (planet.id === 'sun') {
    return (
      <Sphere args={[planet.radius, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={planet.color} 
          emissive={planet.color} 
          emissiveIntensity={1.5} 
        />
      </Sphere>
    );
  }

  return (
    <group ref={orbitRef}>
      {/* Orbital Path */}
      <Line 
        points={orbitPoints}
        color="white"
        transparent
        opacity={0.2}
      />

      {/* Planet */}
      <Sphere 
        ref={planetRef}
        args={[planet.radius, 64, 64]} 
        position={[planet.distance, 0, 0]}
      >
        <meshStandardMaterial 
          color={planet.color} 
          specular={0x111111} 
          shininess={10} 
        />
      </Sphere>
    </group>
  );
};

export default Planet;