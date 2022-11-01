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
  apiKey: "AIzaSyD25QZGKJmf5mDFdMYExW6nxnFiumcBWLs",
  authDomain: "fcfmteams.firebaseapp.com",
  projectId: "fcfmteams",
  storageBucket: "fcfmteams.appspot.com",
  messagingSenderId: "44702078608",
  appId: "1:44702078608:web:dfb577678db6e21ecc2a15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()