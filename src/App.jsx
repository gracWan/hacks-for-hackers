import { useEffect, useState } from "react";
import app from "./main";
import { getDatabase, ref, onValue } from "firebase/database";
import './App.css'
import { Route, Routes } from "react-router-dom"
import Login from './components/Login'
import Register from "./components/Register"
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Routes>
      <Route path = "/hacks-for-hackers" element ={<Login/>}/>
      <Route path = "/hacks-for-hackers/Register" element ={<Register/>}/>
      <Route  path = "/hacks-for-hackers/Home" element ={<Home/>}/>
      </Routes>
    </>
    
  )
}

