import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM9sE_vuF-F3T83tsr9Vr0e3O6CwS3f7s",
  authDomain: "solar-system-5667e.firebaseapp.com",
  projectId: "solar-system-5667e",
  storageBucket: "solar-system-5667e.firebasestorage.app",
  messagingSenderId: "856170873043",
  appId: "1:856170873043:web:bb62d2a8799d88d94b5426",
  measurementId: "G-H1MBRRG83J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };