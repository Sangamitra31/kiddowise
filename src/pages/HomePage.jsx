// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SubjectCard from '../components/home/SubjectCard';
import AgeFilter from '../components/home/AgeFilter';
import RecentActivities from '../components/home/RecentActivities';
import DailyStreak from '../components/home/DailyStreak';
import ChatInterface from '../components/chatbot/ChatInterface';
import { subjects, userData } from '../data/staticData';

const HomePage = ({ setActivePage }) => {
  const [filteredSubjects, setFilteredSubjects] = useState(subjects);
  const [ageFilter, setAgeFilter] = useState('All Ages');
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    setActivePage('home');
  }, [setActivePage]);

  useEffect(() => {
    if (ageFilter === 'All Ages') {
      setFilteredSubjects(subjects);
    } else {
      setFilteredSubjects(
        subjects.filter(subject => subject.ageGroups.includes(ageFilter))
      );
    }
  }, [ageFilter]);

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
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-comic text-gray-800">
            Hi, {userData.name}! 👋
          </h1>
          <p className="text-sm text-gray-600">
            Ready to learn something new today?
          </p>
        </div>
        
        <div className="flex items-center">
          <div className="bg-blue-100 rounded-lg px-3 py-1 mr-2">
            <span className="text-blue-800 font-bold text-sm">{userData.points} pts</span>
          </div>
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            {userData.level}
          </div>
        </div>
      </motion.div>
      
      {/* Daily Streak */}
      <motion.div variants={itemVariants}>
        <DailyStreak 
          currentStreak={userData.streak.current} 
          longestStreak={userData.streak.longest} 
        />
      </motion.div>
      
      {/* Subject Filters */}
      <motion.div variants={itemVariants} className="mt-6">
        <h2 className="text-xl font-comic text-gray-800 mb-4">Learning Subjects</h2>
        <AgeFilter 
          activeFilter={ageFilter} 
          onFilterChange={setAgeFilter} 
        />
      </motion.div>
      
      {/* Subject Grid */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-2 gap-4"
      >
        {filteredSubjects.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </motion.div>
      
      {/* Recent Activities */}
      <motion.div variants={itemVariants}>
        <RecentActivities userActivities={userData.recentActivities} />
      </motion.div>
      
      {/* Chat Button */}
      <motion.div 
        className="fixed bottom-20 right-4 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <motion.button
          className="w-14 h-14 bg-blue-500 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowChatbot(prev => !prev)}
        >
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
            />
          </svg>
        </motion.button>
      </motion.div>
      
      {/* Chatbot Modal */}
      {showChatbot && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl overflow-hidden w-full max-w-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="flex justify-end p-2">
              <button 
                className="p-1 rounded-full hover:bg-gray-200"
                onClick={() => setShowChatbot(false)}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            <ChatInterface />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomePage;