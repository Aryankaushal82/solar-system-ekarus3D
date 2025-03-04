// export interface PlanetConfig {
//   id: string;
//   name: string;
//   radius: number;
//   distance: number;
//   speed: number;
//   color: string;
//   texture?: string;
//   hasMoons?: boolean;
//   moons?: MoonConfig[];
// }

// export interface MoonConfig {
//   id: string;
//   name: string;
//   radius: number;
//   distance: number;
//   speed: number;
//   color: string;
//   texture?: string;
// }

// export interface SolarSystemConfig {
//   id?: string;
//   name: string;
//   planets: PlanetConfig[];
//   createdAt?: Date;
// }


export interface MoonConfig {
  id: string;
  name: string;
  radius: number;
  distance: number;
  speed: number;
  color: string;
}

export interface PlanetConfig {
  id: string;
  name: string;
  radius: number;        
  distance: number;      
  speed: number;        
  color: string;        
  texture?: string;      
  moons?: MoonConfig[]; 
  roughness?: number;    
  emissive?: string;     
  emissiveIntensity?: number; 
}


export interface SolarSystemConfig {
  id?: string;
  name: string;
  planets: PlanetConfig[];
}