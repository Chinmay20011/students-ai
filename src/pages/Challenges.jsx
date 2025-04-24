import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare, Star } from 'lucide-react';

export default function Challenges() {
  // Dummy progress values
  const quests = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-blue-300" />,
      label: "Complete a task",
      progress: 30,
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-300" />,
      label: "Participate in discussion",
      progress: 40,
    },
    {
      icon: <Star className="w-8 h-8 text-blue-300" />,
      label: "Earn XP Points",
      progress: 25,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{
      backgroundImage: `url('/src/assets/challenges.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      <div className="relative z-10 w-full max-w-3xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Quests and Challenges
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Daily Quests */}
            <div className="bg-blue-900 bg-opacity-30 rounded-xl p-4 border border-blue-400">
              <h2 className="text-xl font-semibold text-white mb-4 text-center">Daily Quests</h2>
              {quests.map((q, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div>{q.icon}</div>
                    <span className="text-white text-lg">{q.label}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-blue-200/40 border border-blue-400 overflow-hidden">
                    <div
                      className="h-full bg-blue-400"
                      style={{ width: `${q.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Weekly Quests */}
            <div className="bg-blue-900 bg-opacity-30 rounded-xl p-4 border border-blue-400">
              <h2 className="text-xl font-semibold text-white mb-4 text-center">Weekly Quests</h2>
              {quests.map((q, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div>{q.icon}</div>
                    <span className="text-white text-lg">{q.label}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-blue-200/40 border border-blue-400 overflow-hidden">
                    <div
                      className="h-full bg-blue-400"
                      style={{ width: `${q.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}