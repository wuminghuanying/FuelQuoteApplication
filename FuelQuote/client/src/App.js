import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CPM from './components/CPM/cpm.js';
import FuelPrice from './components/FuelPrice/fuel';
import LOGIN from './components/Login/login.js';
import REGISTER from './components/Register/register.js';
import HISTORY from './components/FuelQuoteHistory/history.js';
import HOMEPAGE from './components/Homepage/HOMEPAGE';
import Navbar from './components/Navbar/navbar.js';


function App() {
  return (
   
      
    <Router>
      <Navbar/>
      <Routes>        
        <Route path ="/" element={<HOMEPAGE/>}/>
        <Route  path="/fuelprice" element={<FuelPrice/>} />
        <Route  path="/cpm" element={<CPM/>} />
        <Route  path="/login" element={<LOGIN/>} />
        <Route  path="/register" element={<REGISTER/>} />
        <Route  path="/history" element={<HISTORY/>} />

      </Routes>

    </Router>
  );
}

export default App;
