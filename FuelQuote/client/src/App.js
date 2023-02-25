import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CPM from './components/CPM/cpm.js';
import FuelPrice from './components/FuelPrice/fuel';
import LOGIN from './components/Login/login.js';
import REGISTER from './components/Register/register.js';



function App() {
  return (
   
      
    <Router>
      <Routes>

        <Route  path="/fuelprice" element={<FuelPrice/>} />
        <Route  path="/cpm" element={<CPM/>} />
        <Route  path="/login" element={<LOGIN/>} />
        <Route  path="/register" element={<REGISTER/>} />

      </Routes>

    </Router>
  );
}

export default App;
