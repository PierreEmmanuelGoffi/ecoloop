import Constants from "expo-constants";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants?.expoConfig?.extra?.firebase?.apiKey,
  authDomain: Constants?.expoConfig?.extra?.firebase?.authDomain,
  projectId: Constants?.expoConfig?.extra?.firebase?.projectId,
  storageBucket: Constants?.expoConfig?.extra?.firebase?.storageBucket,
  messagingSenderId: Constants?.expoConfig?.extra?.firebase?.messagingSenderId,
  appId: Constants?.expoConfig?.extra?.firebase?.appId,
  measurementId: Constants?.expoConfig?.extra?.firebase?.measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
