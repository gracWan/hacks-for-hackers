import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Login from './components/Login'
import Register from "./components/Register"
import Navbar from './components/Navbar'

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
