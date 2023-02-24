import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CPM from './components/CPM/cpm.js';

function App() {
  return (
   
      
    <Router>
      <Routes>

        <Route  path="/cpm" element={<CPM/>} />

      </Routes>

    </Router>

  );
}

export default App;
