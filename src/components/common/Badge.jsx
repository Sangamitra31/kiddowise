// src/components/common/Badge.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  icon, 
  count,
  color = '#FF9F43'
}) => {
  return (
    <motion.div
      className="inline-flex items-center justify-center"
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div 
        className="w-8 h-8 flex items-center justify-center rounded-full"
        style={{ backgroundColor: color }}
      >
        {icon ? (
          <img src={`/assets/images/badges/${icon}`} alt="Badge" className="w-6 h-6" />
        ) : count}
      </div>
    </motion.div>
  );
};

export default Badge;