// src/components/chatbot/VoiceInput.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';

const VoiceInput = ({ onVoiceInput }) => {
  const [isListening, setIsListening] = useState(false);
  const [recordingAnimation, setRecordingAnimation] = useState(false);

  const handleVoiceClick = () => {
    if (isListening) {
      // Stop listening
      setIsListening(false);
      setRecordingAnimation(false);
      // Simulate speech recognition ending
      setTimeout(() => {
        onVoiceInput("What is 2 plus 3?");
      }, 500);
    } else {
      // Start listening
      setIsListening(true);
      setRecordingAnimation(true);
      // Simulate recording for 3 seconds
      setTimeout(() => {
        setIsListening(false);
        setRecordingAnimation(false);
        onVoiceInput("What is 2 plus 3?");
      }, 3000);
    }
  };

  const rippleVariants = {
    start: {
      scale: 1,
      opacity: 0.8
    },
    end: {
      scale: 2,
      opacity: 0,
      transition: {
        repeat: Infinity,
        duration: 1.5
      }
    }
  };

  return (
    <div className="relative">
      {recordingAnimation && (
        <motion.div
          className="absolute inset-0 rounded-full bg-red-400"
          initial="start"
          animate="end"
          variants={rippleVariants}
        />
      )}
      
      <motion.button
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md ${isListening ? 'bg-red-500' : 'bg-blue-500'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleVoiceClick}
      >
        {isListening ? (
          <MicOff size={24} color="white" />
        ) : (
          <Mic size={24} color="white" />
        )}
      </motion.button>
    </div>
  );
};

export default VoiceInput;