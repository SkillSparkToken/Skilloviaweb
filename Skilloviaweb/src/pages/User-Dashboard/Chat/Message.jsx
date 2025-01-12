import React, { useState } from 'react';
import { Search, Send, Menu, ArrowLeft } from 'lucide-react';
import UserLayout from '../UserLayout/UserLayout';

const MessagingInterface = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);

  const chatList = [
    {
      id: 1,
      name: 'Schowalter LLC',
      lastMessage: 'You:Thank you...',
      time: '11:37am',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 2,
      name: 'Wuckert - Price',
      lastMessage: 'Soluta natus quisquam omnis...',
      time: '11:37am',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 3,
      name: 'Johnston and Sons',
      lastMessage: 'Doloremque fugiat maxime r...',
      time: '11:37am',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 4,
      name: 'Treutel Group',
      lastMessage: 'Pariatur perferendis corporis...',
      time: '11:37am',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 5,
      name: 'Bradtke Group',
      lastMessage: 'Fugiat eligendi et eunique do...',
      time: '11:37am',
      avatar: '/api/placeholder/32/32'
    }
  ];

  const messages = [
    {
      id: 1,
      text: 'Hi, Good Morning',
      sender: 'them',
      time: '11:37am'
    },
    {
      id: 2,
      text: "Alright, I've received your order\nI'll see you tomorrow at 8am",
      sender: 'them',
      time: '11:38am'
    },
    {
      id: 3,
      text: 'Hi, Good Morning\nI just booked you for tomorrow',
      sender: 'me',
      time: '11:39am'
    },
    {
      id: 4,
      text: 'Thank you,\nI look forward to see you',
      sender: 'me',
      time: '11:40am'
    }
  ];

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    // On mobile, hide sidebar when chat is selected
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  const Sidebar = () => (
    <div className={`${showSidebar ? 'flex' : 'hidden'} md:flex w-full md:w-80 border-r flex-col h-full`}>
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search messages"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1">
        {chatList.map((chat) => (
          <div 
            key={chat.id} 
            className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer"
            onClick={() => handleChatSelect(chat)}
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h3 className="font-medium truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ChatArea = () => (
    <div className={`${!showSidebar ? 'flex' : 'hidden'} md:flex flex-1 flex-col h-full`}>
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center gap-3">
        <button 
          onClick={() => setShowSidebar(true)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft size={20} />
        </button>
        <img
          src="/api/placeholder/40/40"
          alt="Schowalter LLC"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h2 className="font-medium">Schowalter LLC</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] ${
                message.sender === 'me'
                  ? 'bg-green-600 text-white rounded-l-lg rounded-tr-lg'
                  : 'bg-gray-100 rounded-r-lg rounded-tl-lg'
              } p-3`}
            >
              <p className="whitespace-pre-line">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Write a message"
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button className="p-3 bg-green-50 rounded-lg">
            <Send className="text-green-600" size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <UserLayout>

    <div className="flex h-screen max-h-kscreen ">
      <div className="flex w-full">
        <Sidebar />
        <ChatArea />
      </div>
    </div>
    </UserLayout>
  );
};

export default MessagingInterface;