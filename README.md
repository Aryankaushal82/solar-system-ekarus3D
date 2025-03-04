# Interactive 3D Solar System with Firebase Integration

This project is a fully interactive 3D solar system web application built with React, Three.js, and Firebase Firestore. It allows users to visualize and interact with a realistic 3D model of our solar system, customize various parameters, and save/load configurations.

## Features

- Realistic 3D solar system model with the Sun and 8 planets
- Accurate orbital mechanics with varying speeds, distances, and sizes
- Interactive UI to modify planet properties in real-time
- Firebase Firestore integration for saving and loading configurations
- Responsive design for various screen sizes
- Performance-optimized Three.js rendering

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Firebase account

### Firebase Setup

1. Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Firestore Database in your project
3. Go to Project Settings > General > Your apps > Web app
4. Register a new web app and copy the Firebase configuration
5. Replace the placeholder configuration in `src/firebase/config.ts` with your actual Firebase config

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

### Installation and Running

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Usage

- **View the Solar System**: The 3D solar system is displayed in the main area of the application.
- **Navigate**: Use your mouse to rotate, zoom, and pan around the solar system.
- **Customize Planets**: Use the control panel on the right to adjust the size, distance, and speed of each planet.
- **Save Configurations**: Enter a name for your custom configuration and click "Save" to store it in Firebase.
- **Load Configurations**: Click "Load Saved Configurations" to view and load your previously saved solar system setups.
- **Reset**: Click the "Reset" button to return to the default solar system configuration.

## Project Structure

- `/src/components`: React components for the UI and 3D rendering
- `/src/firebase`: Firebase configuration and setup
- `/src/services`: Firebase service functions for data operations
- `/src/types`: TypeScript interfaces and types
- `/src/data`: Default data for the solar system

## Technologies Used

- React
- TypeScript
- Three.js
- React Three Fiber
- Firebase Firestore
- Tailwind CSS