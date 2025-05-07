// src/components/home/RecentActivities.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { formatDate } from '../../utils/helpers';
import { activities, quizzes } from '../../data/staticData';

const RecentActivities = ({ userActivities }) => {
  // Get activity details from the data
  const getActivityDetails = (activity) => {
    if (activity.type === 'activity') {
      return activities.find(a => a.id === activity.id);
    } else {
      return quizzes.find(q => q.id === activity.id);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-comic text-gray-800 mb-3">Recent Activities</h3>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        {userActivities.slice(0, 3).map((activity) => {
          const details = getActivityDetails(activity);
          
          return (
            <motion.div 
              key={`${activity.type}-${activity.id}`}
              variants={item}
              className="bg-white rounded-lg p-3 shadow-sm flex items-center"
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: details ? details.subjectId === 1 ? '#FF9F43' : 
                                              details.subjectId === 2 ? '#54A0FF' :
                                              details.subjectId === 3 ? '#FF6B6B' : 
                                              '#5F27CD' : '#54A0FF' }}
              >
                <img 
                  src={`/assets/images/${activity.type === 'activity' ? 'activities' : 'quizzes'}/${details?.icon || 'default.svg'}`}
                  alt={details?.name || 'Activity'}
                  className="w-6 h-6"
                />
              </div>
              
              <div className="flex-grow">
                <h4 className="font-comic text-sm text-gray-800">
                  {details?.name || 'Activity'}
                </h4>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">
                    {formatDate(activity.date)}
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 rounded-full">
                    +{activity.points} pts
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default RecentActivities;