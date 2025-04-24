import React from 'react';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url(/src/assets/profile.jpeg)`, 
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
            <h1 className="text-3xl font-bold text-white mb-4">Profile</h1>
            <p className="text-blue-200">Your profile information will appear here with a beautiful background image.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Profile;