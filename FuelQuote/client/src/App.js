import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CPM from './components/CPM/cpm.js';
import FuelPrice from './components/FuelPrice/fuel';



function App() {
  return (
   
      
    <Router>
      <Routes>

        <Route  path="/fuelprice" element={<FuelPrice/>} />
        <Route  path="/cpm" element={<CPM/>} />

      </Routes>

    </Router>
  );
}

export default App;
