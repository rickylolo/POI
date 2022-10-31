// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKa7pY-1ToPzOdRbVQjEh8lsMxSRV31pc",
  authDomain: "teams-proyecto.firebaseapp.com",
  projectId: "teams-proyecto",
  storageBucket: "teams-proyecto.appspot.com",
  messagingSenderId: "185062850843",
  appId: "1:185062850843:web:e5cce93c94490702e913be",
  measurementId: "G-MJX3JY494K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()