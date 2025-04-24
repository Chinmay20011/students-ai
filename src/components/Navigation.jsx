import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Calendar, Trophy, User, Puzzle } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const activePage = location.pathname;

  const menuItems = [
    {
      path: '/',
      icon: <HomeIcon className="w-6 h-6 bottom-nav-item" />,
      label: 'Home'
    },
    {
      path: '/schedule',
      icon: <Calendar className="w-6 h-6 bottom-nav-item" />,
      label: 'Schedule'
    },
    {
      path: '/games',
      icon: <Puzzle className="w-6 h-6 bottom-nav-item" />,
      label: 'Games'
    },
    {
      path: '/rewards',
      icon: <Trophy className="w-6 h-6 bottom-nav-item" />,
      label: 'Rewards'
    },
    {
      path: '/profile',
      icon: <User className="w-6 h-6 bottom-nav-item" />,
      label: 'Profile'
    }
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="flex justify-around items-center py-4 px-6">
        {menuItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path}
            className={`bottom-nav-link ${activePage === item.path ? 'active' : ''}`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Navigation;