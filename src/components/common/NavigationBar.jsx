import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();
  
  // Navigation items with emojis (would be replaced with proper SVG icons)
  const navItems = [
    {
      name: 'Home',
      icon: '🏠',
      path: '/',
    },
    {
      name: 'Learn',
      icon: '📚',
      path: '/learn',
    },
    {
      name: 'Quiz',
      icon: '❓',
      path: '/quiz',
    },
    {
      name: 'Profile',
      icon: '👤',
      path: '/profile',
    },
  ];

  return (
    <nav className="navigation-bar">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        
        return (
          <Link 
            to={item.path} 
            key={item.name}
            className="nav-item-link"
          >
            <motion.div
              className={`nav-item ${isActive ? 'active' : ''}`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="nav-icon">{item.icon}</div>
              <div className="nav-name">{item.name}</div>
              
              {isActive && (
                <motion.div 
                  className="active-indicator"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationBar;