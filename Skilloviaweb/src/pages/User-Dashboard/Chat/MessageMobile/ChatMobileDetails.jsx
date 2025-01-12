import React, { useState } from 'react';
import MessagingInterface from '../Message';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const messages = [
    {
      id: 1,
      text: 'Hi, Good Morning',
      sender: 'user',
      timestamp: 'Today'
    },
    {
      id: 2,
      text: 'Hi, Good Morning\nI just booked you for tomorrow',
      sender: 'other',
      timestamp: ''
    },
    {
      id: 3,
      text: 'Alright, Ive received your order\nIll see you tomorrow at 8pm',
      sender: 'user',
      timestamp: ''
    },
    {
      id: 4,
      text: 'Thank you.\nI look forward to see you',
      sender: 'other',
      timestamp: ''
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission here
      setMessage('');
    }
  };

  return (
    <>
    {/* <MessagingInterface /> */}

    <div className="max-w-md mx-auto h-screen block lg:hidden">
      {/* Header */}
      <div className="bg-gray-200 p-4 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          S
        </div>
        <span className="font-medium">Schowalter LLC</span>
      </div>

      {/* Chat Container */}
      <div className="p-4 space-y-4 h-[calc(100vh-132px)] overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.sender === 'other' ? 'items-end' : ''}`}>
            {msg.timestamp && (
              <div className="text-xs text-gray-500 mb-1 text-center w-full">
                {msg.timestamp}
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl p-3 whitespace-pre-line ${
                msg.sender === 'other'
                  ? 'bg-green-600 text-white'
                  : 'bg-input text-black'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-gray-400"
          />
          <button
            type="submit"
            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5 transform rotate-90 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ChatInterface;