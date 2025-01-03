import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './components/Login'
import Register from "./components/Register"
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Navbar/>
    /*<BrowserRouter> 
      <Routes>
        <Route path = "/hacks-for-hackers" element ={<Login/>}/>
      </Routes>
    </BrowserRouter>*/
  )
}
