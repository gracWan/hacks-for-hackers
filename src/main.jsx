import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import App from './App.jsx'
import Profile from './components/Profile.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyBigaCtThpdxPVOPWAGpKgGVrZIkaS4RNI",
  authDomain: "hack-for-hacks.firebaseapp.com",
  projectId: "hack-for-hacks",
  storageBucket: "hack-for-hacks.firebasestorage.app",
  messagingSenderId: "163144478239",
  appId: "1:163144478239:web:2fe35adcac3e50aa6b6f2a",
  measurementId: "G-C7PLSTXB2W"
};

const app = initializeApp(firebaseConfig);

export default app;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
