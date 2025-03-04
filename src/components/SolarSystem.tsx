

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./Planet";
import { PlanetConfig } from "../types";

interface SolarSystemProps {
  planets: PlanetConfig[];
}

const Scene: React.FC<SolarSystemProps & { speed: number }> = ({ planets, speed }) => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight 
        position={[0, 0, 0]} 
        intensity={10} 
        color="#FDB813" 
        castShadow 
      />

      {/* Render Planets */}
      {planets.map((planet) => (
        <Planet 
          key={planet.id} 
          planet={planet} 
          globalSpeed={speed} 
        />
      ))}

      {/* Star Background */}
      <Stars 
        radius={200} 
        depth={100} 
        count={8000} 
        factor={8} 
        saturation={0} 
        fade 
        speed={2} 
      />
    </>
  );
};

const SolarSystem: React.FC<SolarSystemProps> = ({ planets }) => {
  const [speed, setSpeed] = useState(1);
  const [visualMode, setVisualMode] = useState<'default' | 'minimal'>('default');

  return (
    <div className="relative w-full h-full">
      {/* Control Panel */}
      <div className="absolute top-4 left-4 p-3 bg-black bg-opacity-60 text-white rounded-lg shadow-lg z-10">
        <div className="mb-2">
          <label className="block text-sm font-semibold">🌍 Speed Control</label>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-48 mt-2"
          />
          <span className="block text-sm mt-1">Speed: {speed.toFixed(1)}x</span>
        </div>

        <div>
          <label className="block text-sm font-semibold mt-2">🎨 Visual Mode</label>
          {/* <select
            value={visualMode}
            onChange={(e) => setVisualMode(e.target.value as 'default' | 'minimal')}
            className="w-48 mt-2 bg-gray-800 text-white p-1 rounded"
          >
            <option value="default">Default</option>
            <option value="minimal">Minimal</option>
          </select> */}
        </div>
      </div>

      {/* 3D Scene */}
      <Canvas 
        camera={{ 
          position: visualMode === 'default' ? [0, 80, 150] : [0, 200, 250], 
          fov: visualMode === 'default' ? 60 : 45 
        }}
      >
        <Scene planets={planets} speed={speed} />
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true} 
          minDistance={20} 
          maxDistance={300} 
        />
      </Canvas>
    </div>
  );
};

export default SolarSystem;