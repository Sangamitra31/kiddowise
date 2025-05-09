// src/pages/ProfilePage.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../components/common/ProgressBar';
import { userData, achievements, subjects } from '../data/staticData';
import { Flame, Lock, Unlock, BarChart2, Settings, Star, Trophy } from 'lucide-react';
import { FireIcon } from '@heroicons/react/solid'; // or '@heroicons/react/24/solid' depending on version

const ProfilePage = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage('profile');
  }, [setActivePage]);

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
      {/* Profile Header */}
      <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
            <img 
              src={`/assets/images/${userData.avatar}`} 
              alt="Avatar"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="font-comic text-xl text-gray-800">{userData.name}</h1>
            <p className="text-sm text-gray-600">Age: {userData.age}</p>
            
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                <Trophy size={12} className="mr-1" />
                <span>Level {userData.level}</span>
              </div>
              
              <div className="flex items-center bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                <FireIcon size={12} className="mr-1" />
                <span>{userData.streak.current} day streak</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Total Points: {userData.points}</span>
            <span>Next Level: {userData.level + 1}</span>
          </div>
          
          <ProgressBar 
            progress={0.7} 
            color="#8A63D2" 
            height={8} 
            showPercentage={false} 
          />
        </div>
      </motion.div>
      
      {/* Subject Progress */}
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="font-comic text-lg text-gray-800 mb-3">
          Learning Progress
        </h2>
        
        <div className="space-y-4">
          {subjects.map(subject => {
            const progress = userData.progressBySubject[subject.id] || { progress: 0 };
            
            return (
              <div key={subject.id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div 
                      className="w-8 h-8 rounded-full mr-2 flex items-center justify-center"
                      style={{ backgroundColor: subject.color }}
                    >
                      <img 
                        src={`/assets/images/subjects/${subject.icon}`}
                        alt={subject.name}
                        className="w-5 h-5"
                      />
                    </div>
                    <h3 className="font-comic text-gray-800">{subject.name}</h3>
                  </div>
                  
                  <div className="text-xs text-gray-600">
                    {Math.round(progress.progress * 100)}%
                  </div>
                </div>
                
                <ProgressBar 
                  progress={progress.progress} 
                  color={subject.color} 
                  height={8}
                  showPercentage={false}
                />
                
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  <span>{progress.activitiesCompleted || 0} Activities</span>
                  <span>{progress.quizzesCompleted || 0} Quizzes</span>
                  <span>{progress.totalPoints || 0} Points</span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      
      {/* Achievements */}
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="font-comic text-lg text-gray-800 mb-3">
          Achievements
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className={`bg-white rounded-lg p-3 shadow-sm ${!achievement.unlocked ? 'opacity-60' : ''}`}
            >
              <div className="flex items-center mb-2">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-2 ${
                    achievement.unlocked ? 'bg-yellow-100' : 'bg-gray-100'
                  }`}
                >
                  {achievement.unlocked ? (
                    <Star className="text-yellow-500" size={20} />
                  ) : (
                    <Lock className="text-gray-400" size={16} />
                  )}
                </div>
                
                <h3 className="font-comic text-sm text-gray-800">
                  {achievement.name}
                </h3>
              </div>
              
              <p className="text-xs text-gray-600 mb-2">
                {achievement.description}
              </p>
              
              {!achievement.unlocked && achievement.progress !== undefined && (
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{achievement.progress}/{achievement.total}</span>
                    <span>{Math.round((achievement.progress / achievement.total) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Parental Controls */}
      <motion.div variants={itemVariants}>
        <h2 className="font-comic text-lg text-gray-800 mb-3">
          Parental Controls
        </h2>
        
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Settings className="text-gray-600 mr-2" size={20} />
              <h3 className="font-comic text-gray-800">Safe Mode</h3>
            </div>
            
            <div className="relative">
              <input 
                type="checkbox" 
                id="safeMode"
                className="sr-only"
                defaultChecked={userData.parentalControls.safeMode}
              />
              <label 
                htmlFor="safeMode"
                className={`block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${
                  userData.parentalControls.safeMode ? 'bg-green-400' : 'bg-gray-300'
                }`}
              >
                <span 
                  className={`block w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-300 ease-in-out ${
                    userData.parentalControls.safeMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </label>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <BarChart2 className="text-gray-600 mr-2" size={20} />
              <div>
                <h3 className="font-comic text-gray-800">Screen Time Limit</h3>
                <p className="text-xs text-gray-600">
                  {userData.parentalControls.screenTimeLimit} minutes per day
                </p>
              </div>
            </div>
            
            <div className="text-sm text-blue-500 font-comic">
              Change
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <button className="font-comic text-sm text-blue-500">
              Enter Parent Mode
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;