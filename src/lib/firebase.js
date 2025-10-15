import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJzXWSFBGYWxq99_9VD2Evr78rXYHffeQ",
  authDomain: "syrena-wedding-rsvp.firebaseapp.com",
  projectId: "syrena-wedding-rsvp",
  storageBucket: "syrena-wedding-rsvp.firebasestorage.app",
  messagingSenderId: "767285021437",
  appId: "1:767285021437:web:148220daf9bab052424c94",
  measurementId: "G-TTZ7YWWBT0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);