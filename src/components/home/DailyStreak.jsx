// src/components/home/DailyStreak.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import FireIcon from '@heroicons/react/24/solid/FireIcon';

const DailyStreak = ({ currentStreak, longestStreak }) => {
  const fireVariants = {
    idle: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <div className="bg-orange-100 rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-comic text-lg text-orange-800">Daily Streak</h3>
          <p className="text-orange-700 text-sm mt-1">
            Keep learning every day!
          </p>
        </div>
        
        <motion.div
          className="w-16 h-16 flex items-center justify-center"
          variants={fireVariants}
          animate="idle"
        >
          <div className="relative">
            <FireIcon size={32} className="text-orange-500" />
            <div className="absolute top-1 left-0 right-0 text-center text-white font-bold text-sm">
              {currentStreak}
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-2 flex justify-between text-sm">
        <span className="text-orange-700">Current Streak: {currentStreak} days</span>
        <span className="text-orange-700">Best: {longestStreak} days</span>
      </div>
    </div>
  );
};

export default DailyStreak;