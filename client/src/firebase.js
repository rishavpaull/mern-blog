// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-81a36.firebaseapp.com",
  projectId: "mern-blog-81a36",
  storageBucket: "mern-blog-81a36.appspot.com",
  messagingSenderId: "42218990852",
  appId: "1:42218990852:web:cf0125f4e47a7f3d093451"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);