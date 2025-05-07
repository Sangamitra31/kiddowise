// src/components/chatbot/TextInput.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const TextInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your question..."
        className="flex-grow py-2 px-4 rounded-l-full font-comic text-sm focus:outline-none border-2 border-blue-300"
      />
      <motion.button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={!message.trim()}
      >
        <Send size={20} />
      </motion.button>
    </form>
  );
};

export default TextInput;