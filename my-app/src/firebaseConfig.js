// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBohPRJnQ3HMzfW1uHboBdaoVr871TnXj0",
    authDomain: "project-7938996574693039937.firebaseapp.com",
    projectId: "project-7938996574693039937",
    storageBucket: "project-7938996574693039937.appspot.com",
    messagingSenderId: "144219403649",
    appId: "1:144219403649:web:33604b0c7a323def99e480",
    measurementId: "G-BR398CQ1J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
