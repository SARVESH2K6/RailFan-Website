import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Locomotives from './pages/Locomotives';
import Steam from './pages/Steam';
import Diesel from './pages/Diesel';
import Electric from './pages/Electric';
import LocomotivePage from './pages/LocomotivePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/locomotives" element={<Locomotives />} />
          <Route path="/locomotives/steam" element={<Steam />} />
          <Route path="/locomotives/diesel" element={<Diesel />} />
          <Route path="/locomotives/electric" element={<Electric />} />
          <Route path="/locomotives/:slug" element={<LocomotivePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 