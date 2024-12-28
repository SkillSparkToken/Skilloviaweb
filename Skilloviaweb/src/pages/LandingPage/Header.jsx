import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#f8fdf3] py-4 px-6 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-800">⚡</span>
          <span className="text-2xl font-bold text-green-800">Skillovia</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          <a href="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</a>
          <button className="bg-green-400 text-gray-900 px-6 py-2 rounded-full hover:bg-green-500 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#f8fdf3] shadow-lg md:hidden">
            <div className="flex flex-col items-center gap-4 py-4">
              <a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
              <a href="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</a>
              <button className="bg-green-400 text-gray-900 px-6 py-2 rounded-full hover:bg-green-500 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;