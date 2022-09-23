// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3iM2G_r1ULPZ4yi7BMZOKWuef4hIPZmM",
  authDomain: "e-commerce-pf.firebaseapp.com",
  projectId: "e-commerce-pf",
  storageBucket: "e-commerce-pf.appspot.com",
  messagingSenderId: "526977674976",
  appId: "1:526977674976:web:a7e1beb8b4ec9e41476a85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
