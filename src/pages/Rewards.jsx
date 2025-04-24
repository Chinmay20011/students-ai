import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Calendar, Trophy, User } from 'lucide-react';

function Rewards() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url(/src/assets/reward.jpeg)`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.8
      }}>
      </div>
      <div className="relative min-h-screen">
        <div className="pt-24 p-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-2xl p-6 mb-4"
          >
            <div className="flex flex-col items-center text-center">
              <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
              <h1 className="text-3xl font-bold text-white mb-4">Rewards</h1>
              <p className="text-blue-200 mb-6">Your rewards will appear here with a beautiful background image.</p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Achievements', value: '15', icon: <Trophy className="w-6 h-6 text-yellow-400" /> },
                  { title: 'Badges', value: '8', icon: <Calendar className="w-6 h-6 text-yellow-400" /> },
                  { title: 'Points', value: '2,500', icon: <User className="w-6 h-6 text-yellow-400" /> },
                  { title: 'Rank', value: '#3', icon: <HomeIcon className="w-6 h-6 text-yellow-400" /> }
                ].map((reward, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-4 text-center"
                  >
                    <div className="text-yellow-400 mb-2">{reward.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-1">{reward.title}</h3>
                    <p className="text-2xl font-bold text-yellow-400">{reward.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;