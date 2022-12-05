import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsZM5aFi9vK7ufIZ9XMkQc2Mvvbk35tus",
  authDomain: "house-marketplace-app-76f62.firebaseapp.com",
  projectId: "house-marketplace-app-76f62",
  storageBucket: "house-marketplace-app-76f62.appspot.com",
  messagingSenderId: "875337874808",
  appId: "1:875337874808:web:b6d7f5d75560628f985c8d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
