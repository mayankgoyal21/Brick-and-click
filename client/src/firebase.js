// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "brickandclick-d2253.firebaseapp.com",
  projectId: "brickandclick-d2253",
  storageBucket: "brickandclick-d2253.firebasestorage.app",
  messagingSenderId: "411730509281",
  appId: "1:411730509281:web:05f8287818fc75da7be6a0",
  measurementId: "G-H9LS570FLR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
