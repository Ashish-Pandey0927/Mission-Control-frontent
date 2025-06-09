import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
// import Dashboard from './pages/Dashboard';
// import MissionDetails from './pages/MissionDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/missions/:id" element={<MissionDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
