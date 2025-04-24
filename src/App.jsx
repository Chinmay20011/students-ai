import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Assignments from './pages/Assignments';
import Schedule from './pages/Schedule';
import Grades from './pages/Grades';
import Rewards from './pages/Rewards';
import Profile from './pages/Profile';
import Challenges from './pages/Challenges';
import MemoryGame from './games/MemoryGame';
import Games from './pages/Games';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen relative">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/games" element={<Games />} />
            <Route path="/memory-game" element={<MemoryGame />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;