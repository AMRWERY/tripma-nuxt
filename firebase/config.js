import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTlIUxtXq-f0_ADqT2UsK4mZlz8GFyQMQ",
  authDomain: "todo-362dc.firebaseapp.com",
  projectId: "todo-362dc",
  storageBucket: "todo-362dc.appspot.com",
  messagingSenderId: "532045916013",
  appId: "1:532045916013:web:e6fe2436225403804a5c64",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };
