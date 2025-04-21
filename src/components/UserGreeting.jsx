import React from 'react';
import { motion } from 'framer-motion';

const UserGreeting = ({ name, newAssignments, avatarUrl }) => {
  return (
    <div className="flex items-center justify-between w-full px-6 pt-8 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white glow-text mb-1">
          Hey, {name},
        </h1>
        <h2 className="text-3xl font-bold text-white glow-text mb-3">
          ready to crush today?
        </h2>
        <p className="text-lg text-blue-200">
          {newAssignments} new assignments today
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="avatar float-animation"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg">
          <img 
            src={avatarUrl} 
            alt={`${name}'s avatar`} 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default UserGreeting;