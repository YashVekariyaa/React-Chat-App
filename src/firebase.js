import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyD_U6cWSD-9wwd9iEDIo_9iGjqjKXIieRs",
  authDomain: "chat-21e05.firebaseapp.com",
  projectId: "chat-21e05",
  storageBucket: "chat-21e05.appspot.com",
  messagingSenderId: "256541285159",
  appId: "1:256541285159:web:37bb3723f92b4ae9866702"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
