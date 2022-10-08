// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs6z4FJTAE0t1AKYrphv326HmAQsOYKg4",
  authDomain: "keepalive-login-db.firebaseapp.com",
  projectId: "keepalive-login-db",
  storageBucket: "keepalive-login-db.appspot.com",
  messagingSenderId: "759820483335",
  appId: "1:759820483335:web:f1b09396b03dc9ed51e3a2",
  measurementId: "G-DCLXZZ1JQL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth();