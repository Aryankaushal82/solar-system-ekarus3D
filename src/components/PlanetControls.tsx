// import React from 'react';
// import { PlanetConfig } from '../types';

// interface PlanetControlsProps {
//   planet: PlanetConfig;
//   onChange: (updatedPlanet: PlanetConfig) => void;
// }

// const PlanetControls: React.FC<PlanetControlsProps> = ({ planet, onChange }) => {
//   const handleChange = (property: keyof PlanetConfig, value: number) => {
//     onChange({
//       ...planet,
//       [property]: value
//     });
//   };

//   // Don't show controls for the Sun
//   if (planet.id === 'sun') {
//     return (
//       <div className="bg-gray-800 rounded-lg p-4 mb-2">
//         <h3 className="text-xl font-bold text-yellow-400">{planet.name}</h3>
//         <p className="text-gray-300">The center of our solar system</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-800 rounded-lg p-4 mb-2">
//       <h3 className="text-lg font-bold text-white">{planet.name}</h3>
      
//       <div className="mt-2">
//         <label className="block text-sm font-medium text-gray-300">
//           Size: {planet.radius.toFixed(2)}
//         </label>
//         <input
//           type="range"
//           min="0.1"
//           max="5"
//           step="0.1"
//           value={planet.radius}
//           onChange={(e) => handleChange('radius', parseFloat(e.target.value))}
//           className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
//         />
//       </div>
      
//       <div className="mt-2">
//         <label className="block text-sm font-medium text-gray-300">
//           Distance: {planet.distance.toFixed(2)}
//         </label>
//         <input
//           type="range"
//           min="5"
//           max="100"
//           step="1"
//           value={planet.distance}
//           onChange={(e) => handleChange('distance', parseFloat(e.target.value))}
//           className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
//         />
//       </div>
      
//       <div className="mt-2">
//         <label className="block text-sm font-medium text-gray-300">
//           Speed: {planet.speed.toFixed(2)}
//         </label>
//         <input
//           type="range"
//           min="0.1"
//           max="10"
//           step="0.1"
//           value={planet.speed}
//           onChange={(e) => handleChange('speed', parseFloat(e.target.value))}
//           className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// };

// export default PlanetControls;


import React from 'react';
import { PlanetConfig } from '../types';

interface PlanetControlsProps {
  planet: PlanetConfig;
  onChange: (updatedPlanet: PlanetConfig) => void;
}

const PlanetControls: React.FC<PlanetControlsProps> = ({ planet, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...planet, [name]: parseFloat(value) });
  };

  return (
    <div className="bg-gray-800 p-2 rounded mb-2">
      <h4 className="text-lg font-semibold mb-2">{planet.name}</h4>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Radius</label>
        <input
          type="number"
          name="radius"
          value={planet.radius}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-700 rounded border border-gray-600"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Distance</label>
        <input
          type="number"
          name="distance"
          value={planet.distance}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-700 rounded border border-gray-600"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Speed</label>
        <input
          type="number"
          name="speed"
          value={planet.speed}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-700 rounded border border-gray-600"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Color</label>
        <input
          type="color"
          name="color"
          value={planet.color}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-700 rounded border border-gray-600"
        />
      </div>
    </div>
  );
};

export default PlanetControls;