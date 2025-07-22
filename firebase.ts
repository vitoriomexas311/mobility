// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCJuEPl96xwNlqU5NeysqTt8OgU-rl1PY",
  authDomain: "mobility-ad78a.firebaseapp.com",
  projectId: "mobility-ad78a",
  storageBucket: "mobility-ad78a.firebasestorage.app",
  messagingSenderId: "1091988812174",
  appId: "1:1091988812174:web:c9349694dcc25bb31674df",
  measurementId: "G-DN8J8TJ7XY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
