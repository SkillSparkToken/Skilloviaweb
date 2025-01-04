import React, { useState, useEffect } from 'react';
import Button from '../../componets/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY > 30) {
        setScroll(true);
      }else{
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  return (
    <header className={`py-4 px-6 fixed w-full left-0 right-0 z-50 h-[4rem]  shadow-s ${scroll ? "bg-slate-100 h-[5rem] ": " "}`} >
      <nav className="lg:px-[5rem] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1735327781/WHT_Horiz._Logo_bbkq77.png" alt=""  className=' w-[200px] h-[50px]  object-contain'/>
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
        <div className="hidden md:flex items-center gap-12">
          <a href="/" className="text-secondary font-semibold hover:text-gray-900">Home</a>
          <a href="/blog" className="text-secondary font-semibold hover:text-gray-900">Blog</a>
          <a href="/contact" className="text-secondary font-semibold hover:text-gray-900">Contact</a>
          <a href="/faqs" className="text-secondary font-semibold hover:text-gray-900">FAQs</a>

         
          <button className="bg-primary text-secondary font-semibold px-6 py-3 rounded-full hover:bg-green-500 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#f8fdf3] shadow-lg md:hidden">
            <div className="flex flex-col items-center gap-4 py-4">
              <a href="/blog" className="text-secondary hover:text-gray-900">Blog</a>
              <a href="/contact" className="text-secondary hover:text-gray-900">Contact</a>
              <a href="/faqs" className="text-secondary hover:text-gray-900">FAQs</a>
              
              <button className="bg-primary text-secondary px-6 py-2 rounded-full hover:bg-green-500 transition-colors">
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