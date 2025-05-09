import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [showChatbot, setShowChatbot] = useState(false);
  
  // Mock data for subjects
  const subjects = [
    { id: 1, name: 'Math', icon: '🔢', color: '#58cc02', progress: 65 },
    { id: 2, name: 'Science', icon: '🔬', color: '#ce82ff', progress: 40 },
    { id: 3, name: 'English', icon: '📚', color: '#fa6400', progress: 75 },
    { id: 4, name: 'Art', icon: '🎨', color: '#1cb0f6', progress: 30 },
    { id: 5, name: 'Music', icon: '🎵', color: '#ff9600', progress: 20 },
    { id: 6, name: 'History', icon: '🏛️', color: '#ff4b4b', progress: 15 },
  ];
  
  // Mock data for recent activities
  const recentActivities = [
    { id: 1, title: 'Completed Animal Quiz', subject: 'Science', icon: '🔬', score: '8/10' },
    { id: 2, title: 'Learned Addition', subject: 'Math', icon: '🔢' },
    { id: 3, title: 'Read Story: "The Big Tree"', subject: 'English', icon: '📚' },
  ];

  return (
    <div className="homepage-container">
      {/* Header with streak */}
      <header className="homepage-header">
        <div className="welcome-message">
          <h1>Hello, Explorer!</h1>
          <p>Continue your learning adventure</p>
        </div>
        <div className="streak-container">
          <div className="streak-icon">🔥</div>
          <div className="streak-count">5</div>
        </div>
      </header>
      
      {/* Age filter */}
      <div className="age-filter">
        <button 
          className={selectedAgeGroup === 'all' ? 'active' : ''} 
          onClick={() => setSelectedAgeGroup('all')}
        >
          All Ages
        </button>
        <button 
          className={selectedAgeGroup === '4-6' ? 'active' : ''} 
          onClick={() => setSelectedAgeGroup('4-6')}
        >
          Ages 4-6
        </button>
        <button 
          className={selectedAgeGroup === '7-10' ? 'active' : ''} 
          onClick={() => setSelectedAgeGroup('7-10')}
        >
          Ages 7-10
        </button>
      </div>
      
      {/* Subjects grid */}
      <section className="subjects-section">
        <h2>Choose a Subject</h2>
        <div className="subjects-grid">
          {subjects.map(subject => (
            <motion.div 
              key={subject.id}
              className="subject-card"
              style={{ backgroundColor: subject.color }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="subject-icon">{subject.icon}</div>
              <div className="subject-info">
                <h3>{subject.name}</h3>
                <div className="progress-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{subject.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent activities */}
      <section className="activities-section">
        <h2>Recent Activities</h2>
        <div className="activities-list">
          {recentActivities.map(activity => (
            <motion.div 
              key={activity.id}
              className="activity-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="activity-icon">{activity.icon}</div>
              <div className="activity-info">
                <h3>{activity.title}</h3>
                <p>{activity.subject}</p>
              </div>
              {activity.score && (
                <div className="activity-score">{activity.score}</div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chat bot fab button */}
      <motion.button 
        className="chat-fab"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <span className="robot-icon">🤖</span>
      </motion.button>

      {/* Simple chat modal (would be expanded in a real implementation) */}
      {showChatbot && (
        <div className="chat-modal">
          <div className="chat-header">
            <h3>EduBot</h3>
            <button onClick={() => setShowChatbot(false)}>✕</button>
          </div>
          <div className="chat-messages">
            <div className="bot-message">
              <div className="bot-avatar">🤖</div>
              <div className="message-bubble">
                Hi there! I'm EduBot. How can I help you learn today?
              </div>
            </div>
          </div>
          <div className="chat-input">
            <button className="voice-input">🎤</button>
            <input type="text" placeholder="Type your question here..." />
            <button className="send-button">📤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;