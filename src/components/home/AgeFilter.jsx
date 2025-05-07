// src/components/home/AgeFilter.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AgeFilter = ({ activeFilter, onFilterChange }) => {
  const ageGroups = ['All Ages', '4-6', '7-10'];

  return (
    <div className="flex justify-center space-x-2 mb-6">
      {ageGroups.map(age => (
        <motion.button
          key={age}
          onClick={() => onFilterChange(age)}
          className={`px-4 py-2 rounded-full font-comic text-sm shadow-sm ${
            activeFilter === age 
              ? 'bg-blue-500 text-white' 
              : 'bg-white text-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {age}
        </motion.button>
      ))}
    </div>
  );
};

export default AgeFilter;