import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Calendar, BarChart3, Trophy, User } from 'lucide-react';
// import BackgroundEffect from '../components/BackgroundEffect';
import UserGreeting from '../components/UserGreeting';

const Home = () => {
  const menuItems = [
    {
      title: 'Home',
      subtitle: 'Welcome to your dashboard',
      link: '/',
      background: '/src/assets/home.jpg',
      className: 'bg-home',
      icon: <HomeIcon className="w-6 h-6 text-primary" />
    },
    {
      title: 'Assignments',
      subtitle: '3 due today',
      link: '/assignments',
      background: '/src/assets/assignments-bg.jpg',
      className: 'bg-assignments',
      icon: <HomeIcon className="w-6 h-6 text-primary" />
    },
    {
      title: 'Schedule',
      subtitle: 'View your schedule',
      link: '/schedule',
      background: '/src/assets/calendar-bg.jpg',
      className: 'bg-calendar',
      icon: <Calendar className="w-6 h-6 text-primary" />
    },
    {
      title: 'Grades',
      subtitle: 'Avg. 86%',
      link: '/grades',
      background: '/src/assets/grades-bg.jpg',
      className: 'bg-grades',
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    },
    {
      title: 'Rewards',
      subtitle: 'Check your rewards',
      link: '/rewards',
      background: '/src/assets/rewards-bg.jpg',
      className: 'bg-rewards',
      icon: <Trophy className="w-6 h-6 text-primary" />
    },
    {
      title: 'Profile',
      subtitle: 'Update your info',
      link: '/profile',
      background: '/src/assets/profile-bg.jpg',
      className: 'bg-profile',
      icon: <User className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ 
      backgroundImage: `url(/src/assets/home.jpg)`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}>
      {/* Navigation Bar */}
 

      <div className="pt-24">
        <UserGreeting 
          name="Alden"
          newAssignments={5}
          avatarUrl="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150"
        />
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {menuItems.map((item, index) => (
              <Link to={item.link} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-effect rounded-2xl p-6 card-hover ${item.className} cursor-pointer hover:scale-105 transition-transform duration-200`}
                  style={{ backgroundImage: `url(${item.background})` }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-blue-200">{item.subtitle}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 glass-effect"
        >
          <div className="flex justify-around items-center py-4 px-6">
            <Link to="/" className="bottom-nav-link">
              <HomeIcon className="w-6 h-6 bottom-nav-item active" />
            </Link>
            <Link to="/schedule" className="bottom-nav-link">
              <Calendar className="w-6 h-6 bottom-nav-item" />
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
    </div>
  );
};

export default Home;