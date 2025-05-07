// src/components/common/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  color = 'white', 
  onClick,
  className = ''
}) => {
  return (
    <motion.div
      className={`rounded-xl p-4 shadow-md ${className}`}
      style={{ backgroundColor: color }}
      whileHover={onClick ? { scale: 1.03, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;