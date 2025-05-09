/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Main theme colors
          primary: '#54A0FF', // Blue for primary actions/elements
          secondary: '#FF9F43', // Orange for accent elements
          accent: '#5F27CD', // Purple for emphasis
          success: '#10AC84', // Green for success states
          warning: '#FFDA79', // Yellow for warnings
          danger: '#FF6B6B', // Red for errors/destructive actions
          
          // Subject-specific colors
          'math-color': '#FF9F43', // Orange for Math
          'science-color': '#54A0FF', // Blue for Science  
          'english-color': '#FF6B6B', // Red for English
          'art-color': '#5F27CD', // Purple for Art
          
          // Background and UI colors
          'bg-light': '#F7F9FC', // Light background
          'text-primary': '#2E3A59', // Primary text color
          'text-secondary': '#8395A7', // Secondary text color
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'comic': ['"Comic Sans MS"', 'Poppins', 'cursive', 'sans-serif'],
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
        },
        boxShadow: {
          'card': '0 4px 8px rgba(0, 0, 0, 0.1)',
          'card-hover': '0 8px 16px rgba(0, 0, 0, 0.1)',
        },
        animation: {
          'bounce-slow': 'bounce 2s infinite',
          'pulse-slow': 'pulse 3s infinite',
          'spin-slow': 'spin 3s linear infinite',
        },
      },
    },
    plugins: [],
  }