import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LearnPage.css';

const LearnPage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('4-6');
  const [activeTab, setActiveTab] = useState('flashcards');

  // Mock subjects data
  const subjects = [
    { id: 1, name: 'Math', icon: '🔢', color: '#58cc02' },
    { id: 2, name: 'Science', icon: '🔬', color: '#ce82ff' },
    { id: 3, name: 'English', icon: '📚', color: '#fa6400' },
    { id: 4, name: 'Art', icon: '🎨', color: '#1cb0f6' },
    { id: 5, name: 'Music', icon: '🎵', color: '#ff9600' },
  ];

  // Mock flashcards data
  const flashcards = [
    {
      id: 1,
      subject: 'Math',
      title: 'Addition',
      ageGroup: '4-6',
      cards: [
        { id: 1, front: '1 + 1 = ?', back: '2', image: '📊' },
        { id: 2, front: '2 + 2 = ?', back: '4', image: '📊' },
        { id: 3, front: '3 + 2 = ?', back: '5', image: '📊' },
      ]
    },
    {
      id: 2,
      subject: 'Science',
      title: 'Animals',
      ageGroup: '4-6',
      cards: [
        { id: 1, front: 'Which animal has a long neck?', back: 'Giraffe', image: '🦒' },
        { id: 2, front: 'Which animal says "Moo"?', back: 'Cow', image: '🐄' },
        { id: 3, front: 'Which animal has a trunk?', back: 'Elephant', image: '🐘' },
      ]
    },
    {
      id: 3,
      subject: 'English',
      title: 'Alphabet',
      ageGroup: '4-6',
      cards: [
        { id: 1, front: 'A is for...', back: 'Apple', image: '🍎' },
        { id: 2, front: 'B is for...', back: 'Ball', image: '⚽' },
        { id: 3, front: 'C is for...', back: 'Cat', image: '🐱' },
      ]
    }
  ];

  // Mock lessons data
  const lessons = [
    {
      id: 1,
      subject: 'Math',
      title: 'Counting',
      ageGroup: '4-6',
      duration: '10 mins',
      description: 'Learn to count from 1 to 10 with fun examples!',
      image: '🔢'
    },
    {
      id: 2,
      subject: 'Science',
      title: 'Animals',
      ageGroup: '4-6',
      duration: '15 mins',
      description: 'Discover different animals and the sounds they make!',
      image: '🦁'
    },
    {
      id: 3,
      subject: 'English',
      title: 'Letters',
      ageGroup: '4-6',
      duration: '12 mins',
      description: 'Learn the first 5 letters of the alphabet!',
      image: '📝'
    }
  ];

  // Filter content based on selected subject and age group
  const filteredFlashcards = flashcards.filter(
    card => (!selectedSubject || card.subject === selectedSubject) && card.ageGroup === selectedAgeGroup
  );

  const filteredLessons = lessons.filter(
    lesson => (!selectedSubject || lesson.subject === selectedSubject) && lesson.ageGroup === selectedAgeGroup
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="learn-page">
      <header className="learn-header">
        <h1>Learn & Explore</h1>
        <div className="robot-mascot">🤖</div>
      </header>

      {/* Age group selector */}
      <div className="age-selector">
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

      {/* Subject filters */}
      <section className="subject-filters">
        <motion.button 
          className={!selectedSubject ? 'active' : ''}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedSubject(null)}
        >
          All
        </motion.button>
        {subjects.map(subject => (
          <motion.button 
            key={subject.id}
            className={selectedSubject === subject.name ? 'active' : ''}
            style={{ 
              backgroundColor: selectedSubject === subject.name ? subject.color : 'white',
              color: selectedSubject === subject.name ? 'white' : '#333'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSubject(subject.name)}
          >
            <span>{subject.icon}</span>
            {subject.name}
          </motion.button>
        ))}
      </section>

      {/* Content tabs */}
      <div className="content-tabs">
        <button 
          className={activeTab === 'flashcards' ? 'active' : ''}
          onClick={() => setActiveTab('flashcards')}
        >
          Flashcards
        </button>
        <button 
          className={activeTab === 'lessons' ? 'active' : ''}
          onClick={() => setActiveTab('lessons')}
        >
          Lessons
        </button>
      </div>

      {/* Content area */}
      <AnimatePresence mode="wait">
        {activeTab === 'flashcards' ? (
          <motion.section 
            key="flashcards"
            className="flashcards-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2>Flashcards</h2>
            <div className="flashcards-grid">
              {filteredFlashcards.length > 0 ? (
                filteredFlashcards.map(flashcard => (
                  <motion.div 
                    key={flashcard.id}
                    className="flashcard-set"
                    variants={itemVariants}
                  >
                    <div className="flashcard-header">
                      <span className="flashcard-icon">{flashcard.cards[0].image}</span>
                      <h3>{flashcard.title}</h3>
                    </div>
                    <p>{flashcard.cards.length} cards</p>
                    <div className="flashcard-subject">{flashcard.subject}</div>
                    <motion.button 
                      className="practice-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Practice Now
                    </motion.button>
                  </motion.div>
                ))
              ) : (
                <motion.div className="no-content" variants={itemVariants}>
                  <div className="no-content-icon">📝</div>
                  <p>No flashcards available for this selection. Try another subject or age group!</p>
                </motion.div>
              )}
            </div>
          </motion.section>
        ) : (
          <motion.section 
            key="lessons"
            className="lessons-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2>Lessons</h2>
            <div className="lessons-grid">
              {filteredLessons.length > 0 ? (
                filteredLessons.map(lesson => (
                  <motion.div 
                    key={lesson.id}
                    className="lesson-card"
                    variants={itemVariants}
                  >
                    <div className="lesson-image">{lesson.image}</div>
                    <div className="lesson-content">
                      <h3>{lesson.title}</h3>
                      <div className="lesson-meta">
                        <span className="lesson-subject">{lesson.subject}</span>
                        <span className="lesson-duration">{lesson.duration}</span>
                      </div>
                      <p>{lesson.description}</p>
                      <motion.button 
                        className="start-lesson-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Start Lesson
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div className="no-content" variants={itemVariants}>
                  <div className="no-content-icon">🔍</div>
                  <p>No lessons available for this selection. Try another subject or age group!</p>
                </motion.div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Learning progress */}
      <section className="learning-progress">
        <h2>Your Progress</h2>
        <div className="progress-stats">
          <div className="progress-stat">
            <div className="progress-icon">⭐</div>
            <div className="progress-value">42</div>
            <div className="progress-label">Stars Earned</div>
          </div>
          <div className="progress-stat">
            <div className="progress-icon">📚</div>
            <div className="progress-value">7</div>
            <div className="progress-label">Lessons Completed</div>
          </div>
          <div className="progress-stat">
            <div className="progress-icon">📝</div>
            <div className="progress-value">12</div>
            <div className="progress-label">Flashcards Mastered</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnPage;