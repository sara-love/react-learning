// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDALln8XF-LzgGKoD20V5dN5HjH9s7SaDM",
  authDomain: "trading-dashboard-77305.firebaseapp.com",
  projectId: "trading-dashboard-77305",
  storageBucket: "trading-dashboard-77305.firebasestorage.app",
  messagingSenderId: "445658791134",
  appId: "1:445658791134:web:4d239b3cfb9a0165e4564f",
  measurementId: "G-WJ6XYDG826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);