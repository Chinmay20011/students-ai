import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  const [stars, setStars] = useState([]);
  const [planets, setPlanets] = useState([]);
  
  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 3,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5
    }));
    
    setStars(newStars);
    
    // Generate planets
    const newPlanets = [
      {
        id: 1,
        size: 60,
        color: '#3366ff',
        top: '10%',
        left: '80%',
        duration: 100,
        delay: 0
      },
      {
        id: 2,
        size: 30,
        color: '#9C27B0',
        top: '85%',
        left: '15%',
        duration: 80,
        delay: 2
      },
      {
        id: 3,
        size: 20,
        color: '#4CAF50',
        top: '60%',
        left: '90%',
        duration: 60,
        delay: 1
      }
    ];
    
    setPlanets(newPlanets);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-medium to-space-dark"></div>
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Planets */}
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          className="absolute rounded-full"
          style={{
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            top: planet.top,
            left: planet.left,
            backgroundColor: planet.color,
            boxShadow: `0 0 20px ${planet.color}80`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              `0 0 20px ${planet.color}80`,
              `0 0 30px ${planet.color}90`,
              `0 0 20px ${planet.color}80`,
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            delay: planet.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;