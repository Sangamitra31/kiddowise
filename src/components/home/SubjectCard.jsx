// src/components/home/SubjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/learn', { state: { selectedSubject: subject.id } });
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-md cursor-pointer"
      style={{ backgroundColor: subject.color }}
      whileHover={{ scale: 1.03, y: -5, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      <div className="p-4">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
          <img 
            src={`/assets/images/subjects/${subject.icon}`} 
            alt={subject.name} 
            className="w-10 h-10"
          />
        </div>
        
        <h3 className="text-white text-center font-comic text-xl mb-2">{subject.name}</h3>
        
        <p className="text-white opacity-90 text-center text-sm font-comic">
          {subject.description}
        </p>
        
        <div className="mt-3 flex justify-center space-x-2">
          {subject.ageGroups.map(age => (
            <span 
              key={age} 
              className="text-xs bg-white bg-opacity-30 text-white px-2 py-1 rounded-full"
            >
              Ages {age}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SubjectCard;