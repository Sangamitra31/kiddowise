// src/pages/QuizPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { subjects, quizzes } from '../data/staticData';
import { Award, Check, X } from 'lucide-react';

const QuizPage = ({ setActivePage }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  useEffect(() => {
    setActivePage('quiz');
  }, [setActivePage]);
  
  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };
  
  const handleAnswerSelect = (answer) => {
    if (selectedAnswer !== null) return; // Prevent changing answer
    
    setSelectedAnswer(answer);
    const currentQuestionData = selectedQuiz.questions[currentQuestion];
    const correct = answer === currentQuestionData.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestion < selectedQuiz.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };
  
  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };
  
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
      {!selectedQuiz ? (
        // Quiz Selection Screen
        <>
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-2xl font-comic text-gray-800">Quizzes</h1>
            <p className="text-sm text-gray-600">
              Test your knowledge with fun quizzes!
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            {quizzes.map(quiz => {
              const subject = subjects.find(s => s.id === quiz.subjectId);
              
              return (
                <motion.div
                  key={quiz.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover={{ y: -3, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="p-4">
                    <div className="flex items-start">
                      <div 
                        className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center mr-3"
                        style={{ backgroundColor: subject?.color || '#54A0FF' }}
                      >
                        <img 
                          src={`/assets/images/quizzes/${quiz.icon}`} 
                          alt={quiz.name} 
                          className="w-8 h-8"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-comic text-gray-800">{quiz.name}</h3>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {subject?.name || 'General'}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-600 mt-1">
                          {quiz.description}
                        </p>
                        
                        <div className="flex justify-between items-center mt-3">
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            Ages {quiz.ageGroup}
                          </span>
                          
                          <span className="text-yellow-600 text-xs font-bold">
                            {quiz.points} pts
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button
                        size="small"
                        color="#54A0FF"
                        className="text-white"
                        icon={<Award size={16} />}
                        onClick={() => startQuiz(quiz)}
                      >
                        Start Quiz
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      ) : !quizCompleted ? (
        // Quiz In Progress
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-comic text-lg text-gray-800">
              {selectedQuiz.name}
            </h2>
            
            <div className="text-sm">
              Question {currentQuestion + 1}/{selectedQuiz.questions.length}
            </div>
          </div>
          
          <div className="h-2 bg-gray-200 rounded-full mb-6">
            <div 
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-center font-comic text-xl mb-4">
              {selectedQuiz.questions[currentQuestion].question}
            </h3>
            
            <div className="flex justify-center mb-6">
              <img 
                src={`/assets/images/quiz-questions/${selectedQuiz.questions[currentQuestion].image}`}
                alt="Question"
                className="w-40 h-40 object-contain"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`p-3 rounded-lg font-comic text-center relative ${
                    selectedAnswer === option
                      ? isCorrect
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-red-100 border-2 border-red-500'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                  
                  {selectedAnswer === option && (
                    <motion.div
                      className="absolute top-2 right-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring' }}
                    >
                      {isCorrect ? (
                        <Check className="text-green-500" size={20} />
                      ) : (
                        <X className="text-red-500" size={20} />
                      )}
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        // Quiz Results
<motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="text-center">
            <h2 className="font-comic text-2xl text-gray-800 mb-2">
              Quiz Complete!
            </h2>
            
            <div className="mb-4">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                >
                  <Award size={48} className="text-blue-600" />
                </motion.div>
              </div>
            </div>
            
            <p className="text-lg mb-1">Your score:</p>
            <p className="text-3xl font-bold mb-4 text-blue-600">
              {score}/{selectedQuiz.questions.length}
            </p>
            
            <motion.div
              className="mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${(score / selectedQuiz.questions.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>0</span>
                <span>{selectedQuiz.questions.length}</span>
              </div>
            </motion.div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                {score === selectedQuiz.questions.length
                  ? "Perfect score! You're amazing!"
                  : score >= selectedQuiz.questions.length / 2
                  ? "Great job! Keep practicing!"
                  : "Good try! Let's practice more!"}
              </p>
              
              <div className="bg-yellow-50 rounded-lg p-3 text-yellow-700 text-sm">
                <p className="font-comic">You earned {Math.round((score / selectedQuiz.questions.length) * selectedQuiz.points)} points!</p>
              </div>
              
              <div className="flex space-x-3 justify-center mt-6">
                <Button
                  onClick={resetQuiz}
                  color="#E5E7EB"
                  className="text-gray-700"
                >
                  Back to Quizzes
                </Button>
                
                <Button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setScore(0);
                    setQuizCompleted(false);
                    setSelectedAnswer(null);
                    setIsCorrect(null);
                  }}
                  color="#54A0FF"
                  className="text-white"
                >
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizPage;
