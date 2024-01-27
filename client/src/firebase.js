// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d0172.firebaseapp.com",
  projectId: "mern-blog-d0172",
  storageBucket: "mern-blog-d0172.appspot.com",
  messagingSenderId: "968868940918",
  appId: "1:968868940918:web:50c1d7d8380fb6b5d3e357"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);