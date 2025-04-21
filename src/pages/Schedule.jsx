import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Calendar, BarChart3, User } from 'lucide-react';

function Schedule() {
  return (
    <div className="min-h-screen relative" style={{ 
      backgroundImage: `url(/src/assets/calendar.jpeg)`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}>
      <div className="p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-6 mb-4"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Schedule</h1>
          <p className="text-blue-200">Hello from the Schedule page! Your calendar and schedule information will appear here with a beautiful background image.</p>
        </motion.div>
      </div>
      
      {/* Bottom Navigation */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 glass-effect"
      >
        <div className="flex justify-around items-center py-4 px-6">
          <Link to="/" className="bottom-nav-link">
            <HomeIcon className="w-6 h-6 bottom-nav-item" />
          </Link>
          <Link to="/schedule" className="bottom-nav-link">
            <Calendar className="w-6 h-6 bottom-nav-item active" />
          </Link>
          <Link to="/grades" className="bottom-nav-link">
            <BarChart3 className="w-6 h-6 bottom-nav-item" />
          </Link>
          <Link to="/profile" className="bottom-nav-link">
            <User className="w-6 h-6 bottom-nav-item" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Schedule;