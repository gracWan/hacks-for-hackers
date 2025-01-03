import { useState } from 'react'
import './App.css'
import GuestNavBar from './components/GuestNavBar'
import Login from './components/Login'
import Register from "./components/Register"

export default function App() {

  return (
    <>
      <GuestNavBar/>
      <Login/>
      <Register/>
    </>
  )
}