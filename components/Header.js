'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  
  const featuresItems = [
    "Grammar Checker",
    "Quiz",
    "Word Puzzle",
    "Vocabulary Builder",
    "Crossword",
    "Spell Checker"
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (mobileMenu && 
          !mobileMenu.contains(event.target) && 
          !menuButton.contains(event.target) &&
          isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="logo flex items-center gap-2">
            <div className="group">
              <svg className="w-8 h-8 text-black transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z"></path>
                <path d="M5 3L6 5L8 6L6 7L5 9L4 7L2 6L4 5L5 3Z"></path>
                <path d="M19 15L20 17L22 18L20 19L19 21L18 19L16 18L18 17L19 15Z"></path>
              </svg>
            </div>
            <span className="text-2xl font-black lowercase">outparse</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative"
                 onMouseEnter={() => setIsFeaturesOpen(true)}
                 onMouseLeave={() => setIsFeaturesOpen(false)}>
              <button className="text-gray-700 hover:text-primary-green font-medium flex items-center gap-1">
                Features
                <svg className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isFeaturesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {featuresItems.map((item, index) => (
                    <a key={index} href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-green">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#" className="text-gray-700 hover:text-primary-green font-medium">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-primary-green font-medium">Blog</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 bg-primary-green text-white rounded-lg font-medium hover:bg-[#23966d] transition-colors shadow-sm">
              Create account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            id="menu-button"
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            aria-label="Toggle menu"
          >
            <span className={`bg-black h-0.5 w-6 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`bg-black h-0.5 w-6 rounded-full my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-black h-0.5 w-6 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-200 transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <button 
                    onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                    className="flex justify-between items-center w-full text-gray-700 font-medium"
                  >
                    Features
                    <svg className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isFeaturesOpen && (
                    <div className="mt-3 pl-4 space-y-2">
                      {featuresItems.map((item, index) => (
                        <a key={index} href="#" className="block py-2 text-gray-600 hover:text-primary-green">
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                <a href="#" className="block py-2 text-gray-700 font-medium">Pricing</a>
                <a href="#" className="block py-2 text-gray-700 font-medium">Blog</a>
              </div>
              
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="w-full py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                  Log in
                </button>
                <button className="w-full py-3 bg-primary-green text-white rounded-lg font-medium hover:bg-[#23966d]">
                  Create account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
