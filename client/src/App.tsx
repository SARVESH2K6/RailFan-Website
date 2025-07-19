import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Locomotives from './pages/Locomotives';
import Steam from './pages/Steam';
import Diesel from './pages/Diesel';
import Electric from './pages/Electric';
import LocomotiveDetail from './pages/LocomotiveDetail';
import Trains from './pages/Trains';
import TrainDetail from './pages/TrainDetail';
import Zones from './pages/Zones';
import ZoneDetail from './pages/ZoneDetail';
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
          <Route path="/steam/:id" element={<LocomotiveDetail />} />
          <Route path="/diesel/:id" element={<LocomotiveDetail />} />
          <Route path="/electric/:id" element={<LocomotiveDetail />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/trains/:id" element={<TrainDetail />} />
          <Route path="/zones" element={<Zones />} />
          <Route path="/zones/:id" element={<ZoneDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 