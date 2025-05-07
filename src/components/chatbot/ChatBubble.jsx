// src/components/chatbot/ChatBubble.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RobotAvatar from './RobotAvatar';

const ChatBubble = ({ 
  message, 
  isBot = true, 
  isNew = false,
  onAnimationComplete
}) => {
  const [isPlaying, setIsPlaying] = useState(isNew && isBot);

  useEffect(() => {
    let timeout;
    if (isNew && isBot) {
      timeout = setTimeout(() => {
        setIsPlaying(false);
        if (onAnimationComplete) onAnimationComplete();
      }, message.length * 50); // Duration based on message length
    }
    return () => clearTimeout(timeout);
  }, [isNew, isBot, message, onAnimationComplete]);

  const bubbleVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        type: 'spring',
        stiffness: 120
      }
    }
  };

  return (
    <motion.div 
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      initial="hidden"
      animate="visible"
      variants={bubbleVariants}
    >
      {isBot && (
        <div className="mr-2">
          <RobotAvatar isAnimating={isPlaying} size="small" />
        </div>
      )}
      
      <motion.div 
        className={`rounded-xl p-3 max-w-xs shadow-sm ${isBot ? 'bg-blue-100' : 'bg-green-100'}`}
      >
        <p className="font-comic text-sm">{message}</p>
      </motion.div>
    </motion.div>
  );
};

export default ChatBubble;