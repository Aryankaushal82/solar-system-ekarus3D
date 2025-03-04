import React, { useState, useEffect } from 'react';
import SolarSystem from './components/SolarSystem';
import ControlPanel from './components/ControlPanel';
import { PlanetConfig, SolarSystemConfig } from './types';
import { defaultPlanets, defaultSolarSystem } from './data/defaultPlanets';
import { Info } from 'lucide-react';

function App() {
  const [planets, setPlanets] = useState<PlanetConfig[]>(defaultPlanets);
  const [showInfo, setShowInfo] = useState(false);

  const handlePlanetChange = (updatedPlanet: PlanetConfig) => {
    setPlanets(planets.map(planet => 
      planet.id === updatedPlanet.id ? updatedPlanet : planet
    ));
  };

  const handleLoadConfig = (config: SolarSystemConfig) => {
    setPlanets(config.planets);
  };

  const handleReset = () => {
    setPlanets(defaultPlanets);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <header className="bg-gray-900 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Interactive 3D Solar System</h1>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded flex items-center"
          >
            <Info size={18} className="mr-1" />
            Info
          </button>
          <button 
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
          >
            Reset
          </button>
        </div>
      </header>
      
      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1 relative">
          <SolarSystem planets={planets} />
          
          {showInfo && (
            <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-90 p-4 rounded-lg max-w-md">
              <h2 className="text-xl font-bold mb-2">How to Use</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use mouse to rotate, zoom, and pan the view</li>
                <li>Adjust planet properties using the control panel</li>
                <li>Save your custom configurations to Firebase</li>
                <li>Load previously saved configurations</li>
              </ul>
              <button 
                onClick={() => setShowInfo(false)}
                className="mt-3 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          )}
        </div>
        
        <div className="w-80 border-l border-gray-800">
          <ControlPanel 
            planets={planets} 
            onPlanetChange={handlePlanetChange}
            onLoadConfig={handleLoadConfig}
          />
        </div>
      </main>
      
      <footer className="bg-gray-900 p-2 text-center text-sm text-gray-400">
        Interactive 3D Solar System with Firebase Integration | {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;