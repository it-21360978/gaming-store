import React from 'react'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Dashboard from './pages/dashboard';
/* import Slider from './pages/slider'; */
import Ga from './components/addGame';


export default function App() {
  return (
    <div>

<BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/dash" element={<Dashboard/>}/>
         {/*  <Route exact path="/s" element={<Slider/>}/> */}
          <Route exact path="/a" element={<Ga/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  )
}