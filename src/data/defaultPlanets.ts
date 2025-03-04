
import { PlanetConfig } from '../types';

export const defaultPlanets: PlanetConfig[] = [
  {
    id: 'sun',
    name: 'Sun',
    radius: 5,
    distance: 0,
    speed: 0,
    color: '#FDB813',
    texture: '../../public/sun.jpg', 
  },
  {
    id: 'mercury',
    name: 'Mercury',
    radius: 0.38,
    distance: 10,
    speed: 4.74,
    color: '#B7B8B9',
    texture: '../../public/mercury.jpg',
  },
  {
    id: 'venus',
    name: 'Venus',
    radius: 0.95,
    distance: 15,
    speed: 3.5,
    color: '#E5E5E5',
    texture: '../../public/venus.jpg',
  },
  {
    id: 'earth',
    name: 'Earth',
    radius: 1,
    distance: 20,
    speed: 2.98,
    color: '#0089FF',
    texture: '../../public/earth.jpg',
    hasMoons: true,
    moons: [
      {
        id: 'moon',
        name: 'Moon',
        radius: 0.27,
        distance: 2,
        speed: 5.4,
        color: '#E5E5E5',
        texture: '../../public/moon.jpg',
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
    texture: '../../public/mars.jpg',
    hasMoons: true,
    moons: [
      {
        id: 'phobos',
        name: 'Phobos',
        radius: 0.1,
        distance: 1.5,
        speed: 7.5,
        color: '#C0C0C0',
        texture: '../../public/moon.jpg',
      },
      {
        id: 'deimos',
        name: 'Deimos',
        radius: 0.08,
        distance: 2.5,
        speed: 6.5,
        color: '#C0C0C0',
        texture: '../../public/moon.jpg',
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
    texture: '../../public/jupiter.jpg',
  },
  {
    id: 'saturn',
    name: 'Saturn',
    radius: 2.2,
    distance: 45,
    speed: 0.97,
    color: '#F4A460',
    texture: '../../public/jupiter.jpg',
  },
  {
    id: 'uranus',
    name: 'Uranus',
    radius: 1.8,
    distance: 55,
    speed: 0.68,
    color: '#ADD8E6',
    texture: '../../public/uranus.jpg',
  },
  {
    id: 'neptune',
    name: 'Neptune',
    radius: 1.7,
    distance: 65,
    speed: 0.54,
    color: '#4169E1',
    texture: '../../public/neptune.jpg',
  },
];

export const defaultSolarSystem = {
  name: 'Default Solar System',
  planets: defaultPlanets,
};
