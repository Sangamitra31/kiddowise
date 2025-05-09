import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { subjects, quizzes, getContentBySubjectAndAge } from '../data/educationalContent';
import './QuizPage.css';

const QuizPage = () => {
  // State for filtering and displaying quizzes
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('4-6');
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  
  // State for quiz interaction
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Load quizzes whenever subject or age group changes
  useEffect(() => {
    const content = getContentBySubjectAndAge(selectedSubjectId, selectedAgeGroup);
    setFilteredQuizzes(content.quizzes);
    
    // Reset active quiz when filters change
    setActiveQuiz(null);
    setQuizCompleted(false);
  }, [selectedSubjectId, selectedAgeGroup]);
  
  // Start a quiz
  const handleStartQuiz = (quizId) => {
    const quiz = filteredQuizzes.find(q => q.id === quizId);
    if (quiz) {
      setActiveQuiz(quiz);
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setQuizCompleted(false);
    }
  };
  
  // Handle option selection in quiz
  const handleSelectAnswer = (answer) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };
  
  // Submit answer and check if correct
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setIsAnswerSubmitted(true);
    
    const currentQuestion = activeQuiz.questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };
  
  // Move to next question or complete quiz
  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  // Return to quiz selection
  const handleBackToQuizzes = () => {
    setActiveQuiz(null);
    setQuizCompleted(false);
  };
  
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
  
  // Current question during active quiz
  const currentQuestion = activeQuiz?.questions[currentQuestionIndex];
  
  return (
    <div className="quiz-page">
      {/* Page header */}
      <header className="quiz-header">
        <h1>Fun Quizzes</h1>
        <div className="robot-mascot">🤖</div>
      </header>
      
      {/* Quiz Selection View */}
      {!activeQuiz && (
        <>
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
              className={!selectedSubjectId ? 'active' : ''}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSubjectId(null)}
            >
              All
            </motion.button>
            {subjects.map(subject => (
              <motion.button 
                key={subject.id}
                className={selectedSubjectId === subject.id ? 'active' : ''}
                style={{ 
                  backgroundColor: selectedSubjectId === subject.id ? subject.color : 'white',
                  color: selectedSubjectId === subject.id ? 'white' : '#333'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSubjectId(subject.id)}
              >
                <span>{subject.emoji}</span>
                {subject.name}
              </motion.button>
            ))}
          </section>
          
          {/* Quiz list */}
          <motion.section 
            className="quizzes-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>Choose a Quiz</h2>
            <div className="quizzes-grid">
              {filteredQuizzes.length > 0 ? (
                filteredQuizzes.map(quiz => {
                  const subject = subjects.find(s => s.id === quiz.subjectId);
                  return (
                    <motion.div 
                      key={quiz.id}
                      className="quiz-card"
                      variants={itemVariants}
                    >
                      <div 
                        className="quiz-card-header" 
                        style={{ backgroundColor: subject?.color }}
                      >
                        <span className="quiz-emoji">{subject?.emoji}</span>
                        <h3>{quiz.title}</h3>
                      </div>
                      <div className="quiz-card-content">
                        <p>{quiz.description}</p>
                        <div className="quiz-meta">
                          <span className="quiz-questions">{quiz.questions.length} Questions</span>
                          <span className="quiz-difficulty">{quiz.difficulty}</span>
                        </div>
                        <motion.button 
                          className="start-quiz-button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleStartQuiz(quiz.id)}
                        >
                          Start Quiz
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div className="no-content" variants={itemVariants}>
                  <div className="no-content-icon">❓</div>
                  <p>No quizzes available for this selection. Try another subject or age group!</p>
                </motion.div>
              )}
            </div>
          </motion.section>
        </>
      )}
      
      {/* Active Quiz View */}
      {activeQuiz && !quizCompleted && (
        <AnimatePresence mode="wait">
          <motion.div 
            key={`question-${currentQuestionIndex}`}
            className="quiz-active"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Quiz header */}
            <div className="quiz-active-header">
              <button 
                className="back-button"
                onClick={handleBackToQuizzes}
              >
                ← Back
              </button>
              <h2>{activeQuiz.title}</h2>
              <div className="quiz-progress">
                Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
              </div>
            </div>
            
            {/* Question */}
            <div className="question-container">
              <motion.div 
                className="question-content"
                variants={itemVariants}
              >
                <h3 className="question-text">{currentQuestion.question}</h3>
                
                {currentQuestion.image && (
                  <div className="question-image">
                    <img src={currentQuestion.image} alt="" />
                  </div>
                )}
                
                {/* Multiple choice options */}
                <div className="answer-options">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`answer-option ${selectedAnswer === option ? 'selected' : ''} ${
                        isAnswerSubmitted 
                          ? option === currentQuestion.correctAnswer 
                            ? 'correct' 
                            : selectedAnswer === option && selectedAnswer !== currentQuestion.correctAnswer 
                              ? 'incorrect' 
                              : ''
                          : ''
                      }`}
                      variants={itemVariants}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectAnswer(option)}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="option-text">{option}</span>
                      
                      {/* Show check/x icon after submission */}
                      {isAnswerSubmitted && option === currentQuestion.correctAnswer && (
                        <span className="answer-icon correct-icon">✓</span>
                      )}
                      {isAnswerSubmitted && selectedAnswer === option && option !== currentQuestion.correctAnswer && (
                        <span className="answer-icon incorrect-icon">✗</span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Feedback and navigation */}
            <div className="quiz-action-container">
              {!isAnswerSubmitted ? (
                <motion.button
                  className="submit-answer-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                >
                  Check Answer
                </motion.button>
              ) : (
                <div className="answer-feedback">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <div className="feedback-correct">
                      <span className="feedback-icon">🎉</span>
                      Correct! Well done!
                    </div>
                  ) : (
                    <div className="feedback-incorrect">
                      <span className="feedback-icon">📝</span>
                      The correct answer is: {currentQuestion.correctAnswer}
                    </div>
                  )}
                  
                  {currentQuestion.explanation && (
                    <div className="answer-explanation">
                      <p>{currentQuestion.explanation}</p>
                    </div>
                  )}
                  
                  <motion.button
                    className="next-question-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextQuestion}
                  >
                    {currentQuestionIndex < activeQuiz.questions.length - 1 
                      ? "Next Question" 
                      : "Finish Quiz"}
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      
      {/* Quiz Results View */}
      {activeQuiz && quizCompleted && (
        <motion.div 
          className="quiz-results"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="results-header">
            <h2>Quiz Completed!</h2>
          </div>
          
          <div className="results-content">
            <div className="results-score">
              <div className="score-circle">
                <div className="score-number">
                  {correctAnswers}/{activeQuiz.questions.length}
                </div>
                <div className="score-label">
                  {correctAnswers === activeQuiz.questions.length 
                    ? "Perfect!" 
                    : correctAnswers >= activeQuiz.questions.length / 2 
                      ? "Good job!" 
                      : "Keep practicing!"}
                </div>
              </div>
            </div>
            
            <div className="results-message">
              {correctAnswers === activeQuiz.questions.length && (
                <div className="perfect-score">
                  <div className="trophy-icon">🏆</div>
                  <p>Congratulations! You got a perfect score!</p>
                </div>
              )}
              
              {correctAnswers >= activeQuiz.questions.length / 2 && correctAnswers < activeQuiz.questions.length && (
                <div className="good-score">
                  <div className="star-icon">⭐</div>
                  <p>Well done! You did great!</p>
                </div>
              )}
              
              {correctAnswers < activeQuiz.questions.length / 2 && (
                <div className="improve-score">
                  <div className="book-icon">📚</div>
                  <p>Good effort! Let's practice more to improve.</p>
                </div>
              )}
            </div>
            
            <div className="results-actions">
              <motion.button
                className="retake-quiz-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStartQuiz(activeQuiz.id)}
              >
                Try Again
              </motion.button>
              
              <motion.button
                className="back-to-quizzes-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackToQuizzes}
              >
                Back to Quizzes
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuizPage;