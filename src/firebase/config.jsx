import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMlfl5k0oXdoC9Y5Ck-7FmpQIf2q8w4_8",
  authDomain: "auction-pal.firebaseapp.com",
  projectId: "auction-pal",
  storageBucket: "auction-pal.appspot.com",
  messagingSenderId: "812904428169",
  appId: "1:812904428169:web:98ae05e43c39c950170c58",
  measurementId: "G-R5S2XH5JZX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
