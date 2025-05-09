import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subjects } from '../data/educationalContent';
import './ProfilePage.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user profile data - would come from database in real app
  const userProfile = {
    name: 'Alex',
    age: 6,
    avatar: '/assets/images/avatars/kid_1.svg',
    level: 12,
    totalStars: 87,
    totalPoints: 1250,
    streakDays: 5,
    memberSince: 'January 15, 2025',
    badges: [
      {
        id: 1,
        name: 'Math Whiz',
        icon: '🔢',
        description: 'Completed 10 Math quizzes',
        dateEarned: '2025-04-15',
      },
      {
        id: 2,
        name: 'Science Explorer',
        icon: '🔬',
        description: 'Completed 5 Science lessons',
        dateEarned: '2025-04-10',
      },
      {
        id: 3,
        name: '5-Day Streak',
        icon: '🔥',
        description: 'Logged in for 5 days in a row',
        dateEarned: '2025-05-08',
      },
      {
        id: 4,
        name: 'Spelling Bee',
        icon: '📚',
        description: 'Got perfect score on 3 English quizzes',
        dateEarned: '2025-03-20',
      },
      {
        id: 5,
        name: 'Art Apprentice',
        icon: '🎨',
        description: 'Completed 5 Art activities',
        dateEarned: '2025-04-02',
      },
    ],
    progress: [
      {
        subject: 'Math',
        completed: 12,
        total: 18,
        progress: 67,
        color: '#58cc02',
      },
      {
        subject: 'Science',
        completed: 8,
        total: 15,
        progress: 53,
        color: '#ce82ff',
      },
      {
        subject: 'English',
        completed: 14,
        total: 16,
        progress: 88,
        color: '#fa6400',
      },
      {
        subject: 'Art',
        completed: 6,
        total: 12,
        progress: 50,
        color: '#1cb0f6',
      },
      {
        subject: 'Music',
        completed: 3,
        total: 9,
        progress: 33,
        color: '#ff9600',
      },
    ],
    recentActivities: [
      {
        id: 1,
        type: 'quiz',
        title: 'Counting Quiz',
        subject: 'Math',
        score: '8/10',
        date: '2025-05-08',
        icon: '🔢',
      },
      {
        id: 2,
        type: 'lesson',
        title: 'Animal Friends',
        subject: 'Science',
        date: '2025-05-07',
        icon: '🔬',
      },
      {
        id: 3,
        type: 'quiz',
        title: 'ABC Adventure',
        subject: 'English',
        score: '10/10',
        date: '2025-05-06',
        icon: '📚',
      },
      {
        id: 4,
        type: 'lesson',
        title: 'Color Mixer',
        subject: 'Art',
        date: '2025-05-05',
        icon: '🎨',
      },
      {
        id: 5,
        type: 'quiz',
        title: 'Musical Instruments',
        subject: 'Music',
        score: '7/10',
        date: '2025-05-04',
        icon: '🎵',
      },
    ],
    nextLessonSuggestions: [
      {
        id: 1,
        title: 'Addition Fun',
        subject: 'Math',
        icon: '🔢',
        difficulty: 'easy',
      },
      {
        id: 2,
        title: 'Plant Life',
        subject: 'Science',
        icon: '🔬',
        difficulty: 'easy',
      },
      {
        id: 3,
        title: 'Rhyme Time',
        subject: 'English',
        icon: '📚',
        difficulty: 'easy',
      },
    ],
    settings: {
      parentControls: {
        enabled: true,
        screenTimeLimit: 60, // minutes per day
        safeMode: true,
        allowedSubjects: ['Math', 'Science', 'English', 'Art', 'Music'],
      },
      preferences: {
        soundEffects: true,
        musicVolume: 70, // percent
        voiceAssistant: true,
      },
    },
  };

  // Calculate stars percentage (for circular progress)
  const starsPercentage = Math.min(100, (userProfile.totalStars / 100) * 100);
  
  // Calculate average progress across subjects
  const averageProgress = Math.round(
    userProfile.progress.reduce((sum, subject) => sum + subject.progress, 0) / userProfile.progress.length
  );

  // Get a date string for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Find subject data by name
  const getSubjectData = (subjectName) => {
    return subjects.find(s => s.name === subjectName);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Parent mode toggle (just for demo)
  const [parentMode, setParentMode] = useState(false);

  return (
    <div className="profile-page">
      {/* Header with user info and stats */}
      <header className="profile-header">
        <div className="profile-user-info">
          <div className="profile-avatar-container">
            <div className="profile-avatar">
              <img src={userProfile.avatar} alt="User avatar" />
            </div>
            <div className="profile-level">Level {userProfile.level}</div>
          </div>
          <div className="profile-details">
            <h1>{userProfile.name}</h1>
            <p>Age: {userProfile.age}</p>
            <p className="member-since">Member since {userProfile.memberSince}</p>
            <div className="streak-badge">
              <span className="streak-icon">🔥</span>
              <span className="streak-count">{userProfile.streakDays}-day streak</span>
            </div>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat-box">
            <div className="circular-progress"
              style={{ 
                background: `conic-gradient(#58cc02 ${starsPercentage * 3.6}deg, #eee 0deg)`
              }}
            >
              <div className="circular-progress-inner">
                <span className="stat-icon">⭐</span>
                <span className="stat-value">{userProfile.totalStars}</span>
              </div>
            </div>
            <span className="stat-label">Stars</span>
          </div>
          <div className="stat-box">
            <div className="circular-progress"
              style={{ 
                background: `conic-gradient(#1cb0f6 ${averageProgress * 3.6}deg, #eee 0deg)`
              }}
            >
              <div className="circular-progress-inner">
                <span className="stat-value">{averageProgress}%</span>
              </div>
            </div>
            <span className="stat-label">Progress</span>
          </div>
          <div className="stat-box">
            <div className="points-display">
              <span className="points-icon">🏆</span>
              <span className="points-value">{userProfile.totalPoints}</span>
            </div>
            <span className="stat-label">Points</span>
          </div>
        </div>
      </header>
      
      {/* Parent mode toggle */}
      <div className="parent-mode-toggle">
        <button 
          className={`parent-mode-button ${parentMode ? 'active' : ''}`}
          onClick={() => setParentMode(!parentMode)}
        >
          {parentMode ? 'Exit Parent Mode' : 'Parent Mode'}
        </button>
      </div>

      {/* Content tabs */}
      <div className="profile-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'progress' ? 'active' : ''}
          onClick={() => setActiveTab('progress')}
        >
          Progress
        </button>
        <button 
          className={activeTab === 'badges' ? 'active' : ''}
          onClick={() => setActiveTab('badges')}
        >
          Badges
        </button>
        <button 
          className={activeTab === 'activities' ? 'active' : ''}
          onClick={() => setActiveTab('activities')}
        >
          Activities
        </button>
        {parentMode && (
          <button 
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        )}
      </div>

      {/* Overview tab */}
      {activeTab === 'overview' && (
        <motion.div 
          className="profile-overview"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subject progress section */}
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Learning Progress</h2>
            <div className="subject-progress-list">
              {userProfile.progress.map((subject) => (
                <div className="subject-progress-item" key={subject.subject}>
                  <div className="subject-info">
                    <div className="subject-icon" style={{ backgroundColor: subject.color }}>
                      {getSubjectData(subject.subject)?.emoji || '📚'}
                    </div>
                    <div className="subject-name">{subject.subject}</div>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-background">
                      <div 
                        className="progress-bar-fill" 
                        style={{ 
                          width: `${subject.progress}%`,
                          backgroundColor: subject.color
                        }}
                      ></div>
                    </div>
                    <div className="progress-text">
                      <span>{subject.completed}/{subject.total} completed</span>
                      <span className="progress-percentage">{subject.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Recent activities section */}
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Recent Activities</h2>
            <div className="recent-activities-list">
              {userProfile.recentActivities.slice(0, 3).map((activity) => (
                <div className="activity-item" key={activity.id}>
                  <div className="activity-icon" style={{ 
                    backgroundColor: getSubjectData(activity.subject)?.color || '#1cb0f6' 
                  }}>
                    {activity.icon}
                  </div>
                  <div className="activity-info">
                    <div className="activity-title">{activity.title}</div>
                    <div className="activity-details">
                      <span className="activity-subject">{activity.subject}</span>
                      <span className="activity-date">{formatDate(activity.date)}</span>
                    </div>
                  </div>
                  {activity.score && (
                    <div className="activity-score">{activity.score}</div>
                  )}
                </div>
              ))}
              <button 
                className="view-all-button"
                onClick={() => setActiveTab('activities')}
              >
                View All Activities
              </button>
            </div>
          </motion.section>

          {/* Featured badges section */}
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Recent Badges</h2>
            <div className="badges-grid featured-badges">
              {userProfile.badges.slice(0, 3).map((badge) => (
                <div className="badge-card" key={badge.id}>
                  <div className="badge-icon">{badge.icon}</div>
                  <div className="badge-info">
                    <div className="badge-name">{badge.name}</div>
                    <div className="badge-date">{formatDate(badge.dateEarned)}</div>
                  </div>
                </div>
              ))}
              <button 
                className="view-all-button"
                onClick={() => setActiveTab('badges')}
              >
                View All Badges
              </button>
            </div>
          </motion.section>

          {/* Suggested next activities */}
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Suggested Next Activities</h2>
            <div className="suggestions-grid">
              {userProfile.nextLessonSuggestions.map((suggestion) => (
                <div className="suggestion-card" key={suggestion.id}>
                  <div className="suggestion-icon" style={{ 
                    backgroundColor: getSubjectData(suggestion.subject)?.color || '#1cb0f6' 
                  }}>
                    {suggestion.icon}
                  </div>
                  <div className="suggestion-info">
                    <div className="suggestion-title">{suggestion.title}</div>
                    <div className="suggestion-subject">{suggestion.subject}</div>
                    <div className="suggestion-difficulty">
                      {suggestion.difficulty.charAt(0).toUpperCase() + suggestion.difficulty.slice(1)}
                    </div>
                  </div>
                  <button className="start-button">Start</button>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      )}

      {/* Progress tab */}
      {activeTab === 'progress' && (
        <motion.div 
          className="profile-progress"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Detailed Progress by Subject</h2>
            
            {/* Full subject progress bars and details */}
            <div className="detailed-progress">
              {userProfile.progress.map((subject) => (
                <div className="detailed-subject-card" key={subject.subject}>
                  <div className="detailed-subject-header" style={{ backgroundColor: subject.color }}>
                    <div className="detailed-subject-icon">
                      {getSubjectData(subject.subject)?.emoji || '📚'}
                    </div>
                    <h3>{subject.subject}</h3>
                  </div>
                  <div className="detailed-subject-content">
                    <div className="circular-progress-large"
                      style={{ 
                        background: `conic-gradient(${subject.color} ${subject.progress * 3.6}deg, #eee 0deg)`
                      }}
                    >
                      <div className="circular-progress-inner">
                        <span className="progress-value-large">{subject.progress}%</span>
                      </div>
                    </div>
                    <div className="detailed-stats">
                      <div className="detailed-stat-item">
                        <span className="detailed-stat-label">Completed:</span>
                        <span className="detailed-stat-value">{subject.completed} items</span>
                      </div>
                      <div className="detailed-stat-item">
                        <span className="detailed-stat-label">Remaining:</span>
                        <span className="detailed-stat-value">{subject.total - subject.completed} items</span>
                      </div>
                      <div className="detailed-stat-item">
                        <span className="detailed-stat-label">Total:</span>
                        <span className="detailed-stat-value">{subject.total} items</span>
                      </div>
                    </div>
                  </div>
                  <button className="continue-button">Continue Learning</button>
                </div>
              ))}
            </div>
          </motion.section>
          
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Daily Activity</h2>
            <div className="activity-calendar">
              {/* Mock calendar visualization */}
              <div className="mock-calendar">
                <div className="calendar-header">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
                <div className="calendar-grid">
                  {Array(28).fill().map((_, i) => {
                    // Random activity level for demo
                    const activityLevel = i % 7 === 5 || i % 7 === 6 ? 
                      Math.floor(Math.random() * 2) : 
                      Math.floor(Math.random() * 4);
                    
                    let activityClass = '';
                    if (activityLevel === 1) activityClass = 'low-activity';
                    if (activityLevel === 2) activityClass = 'medium-activity';
                    if (activityLevel === 3) activityClass = 'high-activity';
                    
                    return (
                      <div 
                        key={i} 
                        className={`calendar-day ${activityClass}`}
                        title={`${activityLevel ? activityLevel * 10 : 0} minutes of learning`}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div className="calendar-legend">
                <div className="legend-item">
                  <div className="legend-color no-activity"></div>
                  <span>No activity</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color low-activity"></div>
                  <span>10 min</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color medium-activity"></div>
                  <span>20 min</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color high-activity"></div>
                  <span>30+ min</span>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}

      {/* Badges tab */}
      {activeTab === 'badges' && (
        <motion.div 
          className="profile-badges"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>All Badges</h2>
            <p className="badges-intro">You've earned {userProfile.badges.length} badges so far. Keep learning to collect them all!</p>
            
            <div className="badges-grid all-badges">
              {userProfile.badges.map((badge) => (
                <motion.div 
                  className="badge-card-large" 
                  key={badge.id}
                  variants={itemVariants}
                >
                  <div className="badge-icon-large">{badge.icon}</div>
                  <div className="badge-info-large">
                    <div className="badge-name-large">{badge.name}</div>
                    <div className="badge-description">{badge.description}</div>
                    <div className="badge-date">Earned on {formatDate(badge.dateEarned)}</div>
                  </div>
                </motion.div>
              ))}
              
              {/* Locked badges (examples) */}
              <motion.div 
                className="badge-card-large locked" 
                variants={itemVariants}
              >
                <div className="badge-icon-large">🎯</div>
                <div className="badge-info-large">
                  <div className="badge-name-large">Perfect Score</div>
                  <div className="badge-description">Get 100% on 5 quizzes</div>
                  <div className="badge-lock-info">Progress: 2/5 quizzes</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="badge-card-large locked" 
                variants={itemVariants}
              >
                <div className="badge-icon-large">🎵</div>
                <div className="badge-info-large">
                  <div className="badge-name-large">Music Master</div>
                  <div className="badge-description">Complete all Music quizzes</div>
                  <div className="badge-lock-info">Progress: 3/9 quizzes</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="badge-card-large locked" 
                variants={itemVariants}
              >
                <div className="badge-icon-large">🔥</div>
                <div className="badge-info-large">
                  <div className="badge-name-large">10-Day Streak</div>
                  <div className="badge-description">Log in for 10 days in a row</div>
                  <div className="badge-lock-info">Progress: 5/10 days</div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      )}

      {/* Activities tab */}
      {activeTab === 'activities' && (
        <motion.div 
          className="profile-activities"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Learning History</h2>
            <div className="activities-list">
              {userProfile.recentActivities.map((activity) => (
                <div className="activity-item-large" key={activity.id}>
                  <div className="activity-date-large">{formatDate(activity.date)}</div>
                  <div className="activity-content">
                    <div className="activity-icon-large" style={{ 
                      backgroundColor: getSubjectData(activity.subject)?.color || '#1cb0f6' 
                    }}>
                      {activity.icon}
                    </div>
                    <div className="activity-info-large">
                      <div className="activity-title-large">
                        {activity.title}
                        <span className="activity-type-badge">
                          {activity.type === 'quiz' ? 'Quiz' : 'Lesson'}
                        </span>
                      </div>
                      <div className="activity-details-large">
                        <span className="activity-subject-large">{activity.subject}</span>
                        {activity.score && (
                          <span className="activity-score-large">Score: {activity.score}</span>
                        )}
                      </div>
                    </div>
                    <button className="review-button">
                      {activity.type === 'quiz' ? 'Review Quiz' : 'Continue Lesson'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Stats Summary</h2>
            <div className="stats-grid">
              <div className="stats-card">
                <div className="stats-icon">📊</div>
                <div className="stats-value">{userProfile.recentActivities.filter(a => a.type === 'quiz').length}</div>
                <div className="stats-label">Quizzes Taken</div>
              </div>
              <div className="stats-card">
                <div className="stats-icon">📚</div>
                <div className="stats-value">{userProfile.recentActivities.filter(a => a.type === 'lesson').length}</div>
                <div className="stats-label">Lessons Completed</div>
              </div>
              <div className="stats-card">
                <div className="stats-icon">⭐</div>
                <div className="stats-value">{userProfile.totalStars}</div>
                <div className="stats-label">Stars Earned</div>
              </div>
              <div className="stats-card">
                <div className="stats-icon">🔥</div>
                <div className="stats-value">{userProfile.streakDays}</div>
                <div className="stats-label">Day Streak</div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}

      {/* Settings tab (parent mode only) */}
      {activeTab === 'settings' && parentMode && (
        <motion.div 
          className="profile-settings"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Parent Controls</h2>
            <div className="settings-group">
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-name">Screen Time Limit</div>
                  <div className="setting-description">Limit daily app usage</div>
                </div>
                <div className="setting-control">
                  <select defaultValue={userProfile.settings.parentControls.screenTimeLimit}>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="90">1.5 hours</option>
                    <option value="120">2 hours</option>
                    <option value="-1">No limit</option>
                  </select>
                </div>
              </div>
              
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-name">Safe Mode</div>
                  <div className="setting-description">Filter content for young children</div>
                </div>
                <div className="setting-control">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      defaultChecked={userProfile.settings.parentControls.safeMode}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-name">Allowed Subjects</div>
                  <div className="setting-description">Control accessible subjects</div>
                </div>
                <div className="setting-control subject-checkboxes">
                  {subjects.map(subject => (
                    <label key={subject.id} className="subject-checkbox">
                      <input 
                        type="checkbox" 
                        defaultChecked={userProfile.settings.parentControls.allowedSubjects.includes(subject.name)}
                      />
                      <span className="subject-name">{subject.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Child's Preferences</h2>
            <div className="settings-group">
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-name">Sound Effects</div>
                  <div className="setting-description">Enable game sounds</div>
                </div>
                <div className="setting-control">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      defaultChecked={userProfile.settings.preferences.soundEffects}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-name">Music Volume</div>
                  <div className="setting-description">Background music level</div>
                </div>
                <div className="setting-control">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue={userProfile.settings.preferences.musicVolume}
                  />
                </div>
              </div>
              
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-name">Voice Assistant</div>
                  <div className="setting-description">Enable voice instructions</div>
                </div>
                <div className="setting-control">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      defaultChecked={userProfile.settings.preferences.voiceAssistant}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </motion.section>
          
          <motion.section 
            className="section-card"
            variants={itemVariants}
          >
            <h2>Parent Reports</h2>
            <div className="report-options">
              <button className="report-button">
                <span className="report-icon">📊</span>
                Weekly Progress Report
              </button>
              <button className="report-button">
                <span className="report-icon">📈</span>
                Monthly Activity Summary
              </button>
              <button className="report-button">
                <span className="report-icon">📋</span>
                Learning Assessment
              </button>
            </div>
            <div className="setting-item email-setting">
              <div className="setting-info">
                <div className="setting-name">Email Reports</div>
                <div className="setting-description">Send weekly reports to parent email</div>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </div>
  );
};

export default ProfilePage;