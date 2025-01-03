import { useEffect, useState } from "react";
import app from "./main";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import './App.css'
import { Route, Routes } from "react-router-dom"
import Login from './components/Login'
import Register from "./components/Register"
import Navbar from './components/Navbar'
import User from './components/User'

export default function App() {
  return (
    <>
      <Routes>
      <Route path = "/hacks-for-hackers" element ={<Login/>}/>
      <Route path = "/hacks-for-hackers/Register" element ={<Register/>}/>
      </Routes>
    </>
    
  )
}

