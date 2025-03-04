


import { PlanetConfig } from '../types';

export const defaultPlanets: PlanetConfig[] = [
  {
    id: 'sun',
    name: 'Sun',
    radius: 6,
    distance: 0,
    speed: 0,
    color: '#FDB813',
    texture: '/textures/sun.jpg',
    emissive: '#FDB813',
    emissiveIntensity: 2, 
  },
  {
    id: 'mercury',
    name: 'Mercury',
    radius: 0.38,
    distance: 10,
    speed: 4.74,
    color: '#B7B8B9',
    texture: '/textures/mercury.jpg',
    roughness: 1.0, 
  },
  {
    id: 'venus',
    name: 'Venus',
    radius: 0.95,
    distance: 15,
    speed: 3.5,
    color: '#E5E5E5',
    texture: '/textures/venus.jpg',
    roughness: 0.8,
  },
  {
    id: 'earth',
    name: 'Earth',
    radius: 1,
    distance: 20,
    speed: 2.98,
    color: '#0089FF',
    texture: '/textures/earth.jpg',
    roughness: 0.6,
    hasMoons: true,
    moons: [
      {
        id: 'moon',
        name: 'Moon',
        radius: 0.27,
        distance: 2,
        speed: 5.4,
        color: '#E5E5E5',
        texture: '/textures/moon.jpg',
        roughness: 0.9,
      }
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    radius: 0.53,
    distance: 25,
    speed: 2.41,
    color: '#FF6B6B',
    texture: '/textures/mars.jpg',
    roughness: 0.7,
    hasMoons: true,
    moons: [
      {
        id: 'phobos',
        name: 'Phobos',
        radius: 0.1,
        distance: 1.5,
        speed: 7.5,
        color: '#C0C0C0',
        texture: '/textures/moon.jpg',
      },
      {
        id: 'deimos',
        name: 'Deimos',
        radius: 0.08,
        distance: 2.5,
        speed: 6.5,
        color: '#C0C0C0',
        texture: '/textures/moon.jpg',
      }
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    radius: 2.5,
    distance: 35,
    speed: 1.31,
    color: '#F5DEB3',
    texture: '/textures/jupiter.jpg',
    roughness: 0.4,
  },
  {
    id: 'saturn',
    name: 'Saturn',
    radius: 2.2,
    distance: 45,
    speed: 0.97,
    color: '#F4A460',
    texture: '/textures/saturn.jpg',
    roughness: 0.5,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    radius: 1.8,
    distance: 55,
    speed: 0.68,
    color: '#ADD8E6',
    texture: '/textures/uranus.jpg',
    roughness: 0.4,
  },
  {
    id: 'neptune',
    name: 'Neptune',
    radius: 1.7,
    distance: 65,
    speed: 0.54,
    color: '#4169E1',
    texture: '/textures/neptune.jpg',
    roughness: 0.3,
  },
];

export const defaultSolarSystem = {
  name: 'Default Solar System',
  planets: defaultPlanets,
};
