import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Assignments from './pages/Assignments';
import Schedule from './pages/Schedule';
import Grades from './pages/Grades';
import Rewards from './pages/Rewards';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;