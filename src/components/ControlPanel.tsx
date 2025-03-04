import React, { useState } from 'react';
import { Save, Upload, Settings } from 'lucide-react';
import PlanetControls from './PlanetControls';
import { PlanetConfig, SolarSystemConfig } from '../types';
import { saveSolarSystem, getSolarSystems } from '../services/firebaseService';

interface ControlPanelProps {
  planets: PlanetConfig[];
  onPlanetChange: (updatedPlanet: PlanetConfig) => void;
  onLoadConfig: (config: SolarSystemConfig) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ planets, onPlanetChange, onLoadConfig }) => {
  const [configName, setConfigName] = useState('My Solar System');
  const [savedConfigs, setSavedConfigs] = useState<SolarSystemConfig[]>([]);
  const [showSavedConfigs, setShowSavedConfigs] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setMessage('');
      
      const config: SolarSystemConfig = {
        name: configName,
        planets: planets,
      };
      
      await saveSolarSystem(config);
      setMessage('Solar system saved successfully!');
    } catch (error) {
      console.error('Error saving configuration:', error);
      setMessage('Error saving configuration. Please check your Firebase setup.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLoadConfigs = async () => {
    try {
      setIsLoading(true);
      setMessage('');
      
      const configs = await getSolarSystems();
      setSavedConfigs(configs);
      setShowSavedConfigs(true);
    } catch (error) {
      console.error('Error loading configurations:', error);
      setMessage('Error loading configurations. Please check your Firebase setup.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-y-auto max-h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <Settings className="mr-2" size={24} />
          Control Panel
        </h2>
      </div>
      
      {message && (
        <div className="bg-blue-900 text-white p-2 rounded mb-4">
          {message}
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Save Configuration</h3>
        <div className="flex items-center">
          <input
            type="text"
            value={configName}
            onChange={(e) => setConfigName(e.target.value)}
            placeholder="Configuration Name"
            className="flex-grow p-2 bg-gray-800 rounded-l border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r flex items-center"
          >
            <Save size={18} className="mr-1" />
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Load Configuration</h3>
        <button
          onClick={handleLoadConfigs}
          disabled={isLoading}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded flex items-center"
        >
          <Upload size={18} className="mr-1" />
          {isLoading ? 'Loading...' : 'Load Saved Configurations'}
        </button>
        
        {showSavedConfigs && (
          <div className="mt-2 bg-gray-800 p-2 rounded">
            {savedConfigs.length === 0 ? (
              <p>No saved configurations found.</p>
            ) : (
              <ul>
                {savedConfigs.map((config) => (
                  <li key={config.id} className="mb-1">
                    <button
                      onClick={() => onLoadConfig(config)}
                      className="text-blue-400 hover:text-blue-300 text-left w-full p-1 hover:bg-gray-700 rounded"
                    >
                      {config.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Planet Controls</h3>
        <div className="space-y-2">
          {planets.map((planet) => (
            <PlanetControls
              key={planet.id}
              planet={planet}
              onChange={onPlanetChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;