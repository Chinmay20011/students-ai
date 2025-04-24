import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Calendar, BarChart3, Trophy, User, Puzzle } from 'lucide-react';
import UserGreeting from '../components/UserGreeting';

const Home = () => {
  const menuItems = [
    {
      title: 'Home',
      subtitle: 'Welcome to your dashboard',
      link: '/',
      // background: '/src/assets/home.jpg',
      className: 'bg-home',
      icon: <HomeIcon className="w-6 h-6 text-primary" />
    },
    {
      title: 'Assignments',
      subtitle: '3 due today',
      link: '/assignments',
      // background: '/src/assets/assignments-bg.jpg',
      className: 'bg-assignments',
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    },
    {
      title: 'Schedule',
      subtitle: 'Your calendar',
      link: '/schedule',
      // background: '/src/assets/calendar.jpeg',
      className: 'bg-schedule',
      icon: <Calendar className="w-6 h-6 text-primary" />
    },
    {
      title: 'Games',
      subtitle: 'Play fun games',
      link: '/games',
      // background: '/src/assets/games.jpeg',
      className: 'bg-games',
      icon: <Puzzle className="w-6 h-6 text-primary" />
    },
    {
      title: 'Rewards',
      subtitle: 'Check your rewards',
      link: '/rewards',
      // background: '/src/assets/rewards.jpeg',
      className: 'bg-rewards',
      icon: <Trophy className="w-6 h-6 text-primary" />
    },
    {
      title: 'Profile',
      subtitle: 'Your account',
      link: '/profile',
      // background: '/src/assets/profile.jpeg',
      className: 'bg-profile',
      icon: <User className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: 'url(/src/assets/home.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: 0.8
      }}>
      </div>
      <div className="relative container mx-auto px-4 py-8">
        <UserGreeting 
          name="Alden"
          newAssignments={5}
          avatarUrl="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {menuItems.map((item, index) => (
            <Link to={item.link} key={item.title} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-effect rounded-xl p-4 card-hover ${item.className} cursor-pointer hover:scale-105 transition-all duration-200 h-[150px] flex flex-col items-center justify-between`}
                style={{ backgroundImage: `url(${item.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="pt-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-black/50 rounded-full">
                    <div className="text-white">{item.icon}</div>
                  </div>
                </div>
                <div className="pb-2 w-full text-center">
                  <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                  <p className="text-sm text-blue-200 mx-auto max-w-[140px] leading-tight">{item.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;