import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';
import { PlanetConfig } from '../types';

interface SolarSystemProps {
  planets: PlanetConfig[];
}

const Scene: React.FC<SolarSystemProps> = ({ planets }) => {
  const timeRef = useRef(0);
  
  useFrame((_, delta) => {
    timeRef.current += delta;
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />
      
      {planets.map(planet => (
        <Planet key={planet.id} planet={planet} time={timeRef.current} />
      ))}
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};

const SolarSystem: React.FC<SolarSystemProps> = ({ planets }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 30, 60], fov: 60 }}>
        <Scene planets={planets} />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={10}
          maxDistance={100}
        />
      </Canvas>
    </div>
  );
};

export default SolarSystem;



