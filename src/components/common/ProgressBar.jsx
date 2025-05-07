// src/components/common/ProgressBar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ 
  progress, 
  color = '#FF9F43',
  height = 12,
  showPercentage = true,
  className = ''
}) => {
  // Ensure progress is between 0 and 1
  const normalizedProgress = Math.max(0, Math.min(1, progress));
  const percentage = Math.round(normalizedProgress * 100);

  return (
    <div className={`w-full ${className}`}>
      <div 
        className="w-full rounded-full overflow-hidden bg-gray-200"
        style={{ height: `${height}px` }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      {showPercentage && (
        <div className="text-xs mt-1 text-center font-comic">
          {percentage}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;