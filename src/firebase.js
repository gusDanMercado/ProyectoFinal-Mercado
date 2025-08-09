// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// usa variables de entorno (Vite: VITE_..., CRA: REACT_APP_...)
const firebaseConfig = {
  /*
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  */
  apiKey: "AIzaSyCBPASJb4tFrzkF86VEtB5UDFmMdr9gAfI",
  authDomain: "mi-ecommerse.firebaseapp.com",
  projectId: "mi-ecommerse",
  storageBucket: "mi-ecommerse.firebasestorage.app",
  messagingSenderId: "471079144784",
  appId: "1:471079144784:web:1e08c58d3fb539a7f5b055",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
