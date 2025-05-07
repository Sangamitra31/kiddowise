// src/components/chatbot/RobotAvatar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RobotAvatar = ({ isAnimating = false, size = 'medium' }) => {
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  
  useEffect(() => {
    if (isAnimating) {
      setCurrentAnimation('talking');
    } else {
      setCurrentAnimation('idle');
    }
  }, [isAnimating]);

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  const robotAnimations = {
    idle: {
      y: [0, -5, 0],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }
    },
    talking: {
      y: [0, -3, 0, -5, 0, -2, 0],
      rotate: [-2, 0, 2, 0, -2],
      transition: {
        y: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse'
        },
        rotate: {
          duration: 0.3,
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }
    }
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} bg-blue-200 rounded-full overflow-hidden flex items-center justify-center`}
      animate={robotAnimations[currentAnimation]}
    >
      <div className="relative w-full h-full">
        {/* Robot Face */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Eyes */}
            <div className="flex space-x-2">
              <motion.div 
                className="w-3 h-3 bg-blue-600 rounded-full"
                animate={currentAnimation === 'talking' ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3, repeat: Infinity }}
              />
              <motion.div 
                className="w-3 h-3 bg-blue-600 rounded-full"
                animate={currentAnimation === 'talking' ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }}
              />
            </div>
            
            {/* Mouth */}
            <motion.div 
              className="w-8 h-2 bg-blue-600 rounded-full mt-2"
              animate={
                currentAnimation === 'talking' 
                  ? { 
                      height: [2, 4, 2, 5, 2],
                      width: [8, 6, 8, 7, 8]
                    } 
                  : {}
              }
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RobotAvatar;