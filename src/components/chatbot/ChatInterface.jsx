// src/components/chatbot/ChatInterface.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChatBubble from './ChatBubble';
import VoiceInput from './VoiceInput';
import TextInput from './TextInput';
import { MessageSquare, Mic } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm EduBot. How can I help you learn today?", isBot: true }
  ]);
  const [inputMode, setInputMode] = useState('text'); // 'text' or 'voice'
  const [isProcessing, setIsProcessing] = useState(false);
  
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate bot response
  const getBotResponse = (question) => {
    // Simple pattern matching for demonstration
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi')) {
      return "Hello! I'm EduBot. I'm here to help you learn!";
    }
    
    if (lowerQuestion.includes('name')) {
      return "My name is EduBot! I'm your learning buddy.";
    }
    
    if (lowerQuestion.includes('how are you')) {
      return "I'm doing great! Ready to help you learn something new today!";
    }
    
    if (lowerQuestion.includes('2') && lowerQuestion.includes('3') && 
        (lowerQuestion.includes('plus') || lowerQuestion.includes('+'))) {
      return "2 plus 3 equals 5! Great job asking about math!";
    }
    
    // Default response
    return "That's an interesting question! Would you like to learn more about math, science, English, or art?";
  };

  // Handle user messages (both voice and text)
  const handleUserMessage = (text) => {
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text,
      isBot: false,
      isNew: true
    };
    setMessages(prev => [...prev, newUserMessage]);
    
    // Process and add bot response
    setIsProcessing(true);
    
    // Simulate thinking delay
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const newBotMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        isNew: true
      };
      setMessages(prev => [...prev, newBotMessage]);
      setIsProcessing(false);
      
      // Simulate voice playback for bot message
      // This would be replaced with actual text-to-speech in a real implementation
      const synth = window.speechSynthesis;
      if (synth) {
        const utterance = new SpeechSynthesisUtterance(botResponse);
        utterance.rate = 0.9; // Slightly slower for kids
        utterance.pitch = 1.2; // Slightly higher pitch for friendly robot
        synth.speak(utterance);
      }
    }, 1000);
  };

  // Toggle between voice and text input
  const toggleInputMode = () => {
    setInputMode(prev => prev === 'text' ? 'voice' : 'text');
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden">
      {/* Chat Header */}
      <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
        <h2 className="text-lg font-comic">EduBot Chat</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleInputMode}
          className="p-2 bg-blue-600 rounded-full"
        >
          {inputMode === 'text' ? <Mic size={20} /> : <MessageSquare size={20} />}
        </motion.button>
      </div>
      
      {/* Messages Area */}
      <div className="flex-grow p-4 overflow-y-auto max-h-96">
        {messages.map((msg) => (
          <ChatBubble 
            key={msg.id}
            message={msg.text}
            isBot={msg.isBot}
            isNew={msg.isNew}
            onAnimationComplete={() => {
              // Mark message as not new anymore after animation
              setMessages(prev => 
                prev.map(m => m.id === msg.id ? {...m, isNew: false} : m)
              );
            }}
          />
        ))}
        
        {/* Show typing indicator when processing */}
        {isProcessing && (
          <div className="flex items-center ml-12 mb-4">
            <motion.div 
              className="w-2 h-2 rounded-full bg-blue-500 mr-1"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-blue-500 mr-1"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-blue-500"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
            />
          </div>
        )}
        
        {/* Invisible element for auto-scrolling */}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        {inputMode === 'text' ? (
          <TextInput onSendMessage={handleUserMessage} />
        ) : (
          <div className="flex justify-center">
            <VoiceInput onVoiceInput={handleUserMessage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;