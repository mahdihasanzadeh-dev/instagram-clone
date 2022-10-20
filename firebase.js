// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBRZKYlM5wAtR-bO2W_u-FYop7f4xnLZo",
  authDomain: "instagram-clone-66869.firebaseapp.com",
  projectId: "instagram-clone-66869",
  storageBucket: "instagram-clone-66869.appspot.com",
  messagingSenderId: "483108539310",
  appId: "1:483108539310:web:1065cbe4bfdc06b6e2d63f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage};
