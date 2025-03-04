import { collection, addDoc, getDocs, doc, getDoc, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { SolarSystemConfig } from '../types';

const COLLECTION_NAME = 'solarSystems';

export const saveSolarSystem = async (config: SolarSystemConfig): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...config,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving solar system:', error);
    throw error;
  }
};

export const getSolarSystems = async (): Promise<SolarSystemConfig[]> => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as SolarSystemConfig[];
  } catch (error) {
    console.error('Error getting solar systems:', error);
    throw error;
  }
};

export const getSolarSystemById = async (id: string): Promise<SolarSystemConfig | null> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as SolarSystemConfig;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting solar system:', error);
    throw error;
  }
};