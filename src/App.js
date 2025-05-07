// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import QuizPage from './pages/QuizPage';
import ProfilePage from './pages/ProfilePage';
import NavigationBar from './components/common/NavigationBar';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <Router>
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage setActivePage={setActivePage} />} />
            <Route path="/learn" element={<LearnPage setActivePage={setActivePage} />} />
            <Route path="/quiz" element={<QuizPage setActivePage={setActivePage} />} />
            <Route path="/profile" element={<ProfilePage setActivePage={setActivePage} />} />
          </Routes>
        </AnimatePresence>
        <NavigationBar activePage={activePage} setActivePage={setActivePage} />
      </div>
    </Router>
  );
}

export default App;