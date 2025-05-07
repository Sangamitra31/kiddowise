// src/pages/LearnPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { subjects, activities } from '../data/staticData';
import { BookOpen, Award } from 'lucide-react';

const LearnPage = ({ setActivePage }) => {
  const location = useLocation();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [filteredActivities, setFilteredActivities] = useState([]);
  
  useEffect(() => {
    setActivePage('learn');
    
    // Check if a subject was selected from the home page
    if (location.state?.selectedSubject) {
      const subject = subjects.find(s => s.id === location.state.selectedSubject);
      if (subject) {
        setSelectedSubject(subject);
      }
    }
  }, [location, setActivePage]);
  
  useEffect(() => {
    if (selectedSubject) {
      const subjectActivities = activities.filter(
        activity => activity.subjectId === selectedSubject.id
      );
      setFilteredActivities(subjectActivities);
    } else {
      setFilteredActivities(activities);
    }
  }, [selectedSubject]);
  
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="pb-16"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-6">
        <h1 className="text-2xl font-comic text-gray-800">
          {selectedSubject ? `Learn ${selectedSubject.name}` : 'Learn'}
        </h1>
        <p className="text-sm text-gray-600">
          {selectedSubject 
            ? selectedSubject.description 
            : 'Choose an activity to start learning!'}
        </p>
      </motion.div>
      
      {/* Subject Selection (if no subject is selected) */}
      {!selectedSubject && (
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-lg font-comic text-gray-800 mb-3">Choose a Subject</h2>
          <div className="flex overflow-x-auto pb-2 space-x-3">
            {subjects.map(subject => (
              <motion.div
                key={subject.id}
                className="flex-shrink-0 w-32 rounded-lg p-3 cursor-pointer"
                style={{ backgroundColor: subject.color }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedSubject(subject)}
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <img 
                    src={`/assets/images/subjects/${subject.icon}`} 
                    alt={subject.name} 
                    className="w-8 h-8"
                  />
                </div>
                <p className="text-white text-center font-comic text-sm">
                  {subject.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Activities List */}
      <motion.div variants={itemVariants}>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-comic text-gray-800">Activities</h2>
          
          {selectedSubject && (
            <Button 
              onClick={() => setSelectedSubject(null)}
              size="small"
              color="#54A0FF"
              className="text-white"
            >
              All Subjects
            </Button>
          )}
        </div>
        
        <div className="space-y-4">
          {filteredActivities.map(activity => (
            <motion.div
              key={activity.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              whileHover={{ y: -3, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center mr-3"
                    style={{ 
                      backgroundColor: subjects.find(s => s.id === activity.subjectId)?.color || '#54A0FF'
                    }}
                  >
                    <img 
                      src={`/assets/images/activities/${activity.icon}`} 
                      alt={activity.name} 
                      className="w-8 h-8"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-comic text-gray-800">{activity.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.description}
                    </p>
                    
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center space-x-3">
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {activity.ageGroup}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center">
                          <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          {activity.duration}
                        </span>
                      </div>
                      
                      <span className="text-yellow-600 text-xs font-bold">
                        {activity.points} pts
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-4">
                  <Button
                    size="small"
                    color="#E5E7EB"
                    className="text-gray-700"
                    icon={<BookOpen size={16} />}
                  >
                    Preview
                  </Button>
                  
                  <Button
                    size="small"
                    color="#54A0FF"
                    className="text-white"
                    icon={<Award size={16} />}
                  >
                    Start Activity
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LearnPage;