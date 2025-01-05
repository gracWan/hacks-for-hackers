import { useEffect, useState } from "react";
import app from "./main";
import { getDatabase, ref, onValue } from "firebase/database";
import './App.css'
import { Route, Routes } from "react-router-dom"
import Login from './components/Login'
import Register from "./components/Register"
import Home from "./components/Home";
import Meeting from './components/Meeting.jsx';
import Message from "./components/Message.jsx";
import Learn from "./components/Learn.jsx";
import Teach from "./components/Teach.jsx";
import Dashboard from "./components/Dashboard.jsx";

export default function App() {
  return (
    <>
      <Routes>
      <Route path = "/hacks-for-hackers" element ={<Login/>}/>
      <Route path = "/hacks-for-hackers/Register" element ={<Register/>}/>
      <Route  path = "/hacks-for-hackers/Home" element ={<Home/>}>
        <Route path = "Learn" element = {<Learn/>}/>
        <Route path = "Teach" element = {<Teach/>}/>
        <Route path = "Dashboard" element = {<Dashboard/>}/>
      </Route>
      <Route  path = "/hacks-for-hackers/Meeting" element ={<Meeting/>}/>
      <Route  path = "/hacks-for-hackers/Message" element ={<Message/>}/>
      </Routes>
    </>
    
  )
}

