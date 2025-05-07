// src/components/common/NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, BookOpenIcon, PuzzleIcon, UserIcon } from 'lucide-react';

const NavigationBar = ({ activePage, setActivePage }) => {
  const navItems = [
    { icon: <HomeIcon />, label: 'Home', path: '/' },
    { icon: <BookOpenIcon />, label: 'Learn', path: '/learn' },
    { icon: <PuzzleIcon />, label: 'Quiz', path: '/quiz' },
    { icon: <UserIcon />, label: 'Profile', path: '/profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg">
      <div className="flex justify-around items-center h-16 max-w-3xl mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex flex-col items-center"
            onClick={() => setActivePage(item.label.toLowerCase())}
          >
            <motion.div
              className={`p-2 rounded-full ${activePage === item.label.toLowerCase() ? 'bg-blue-100' : ''}`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="text-2xl" style={{ color: activePage === item.label.toLowerCase() ? '#54A0FF' : '#999' }}>
                {item.icon}
              </div>
            </motion.div>
            <span 
              className="text-xs font-comic mt-1"
              style={{ color: activePage === item.label.toLowerCase() ? '#54A0FF' : '#999' }}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;