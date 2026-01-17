'use client';

import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openSections, setOpenSections] = useState({
    features: false,
    company: false,
    connect: false
  });

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    features: [
      "Grammar Checker",
      "Word Counter", 
      "Translator",
      "Word Puzzle",
      "Vocabulary Builder",
      "Crossword",
      "Spell Checker"
    ],
    company: [
      "About Us",
      "Contact Us", 
      "Privacy Policy",
      "Terms of Service"
    ],
    connect: [
      "Facebook",
      "Instagram",
      "LinkedIn", 
      "Twitter",
      "YouTube"
    ]
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Newsletter - Takes 2x width on desktop */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z"></path>
                  <path d="M5 3L6 5L8 6L6 7L5 9L4 7L2 6L4 5L5 3Z"></path>
                  <path d="M19 15L20 17L22 18L20 19L19 21L18 19L16 18L18 17L19 15Z"></path>
                </svg>
                <span className="text-2xl font-black lowercase">outparse</span>
              </div>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest updates, writing tips, and exclusive offers.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-green text-white rounded-lg font-medium hover:bg-[#23966d] transition-colors whitespace-nowrap"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div>

          {/* Mobile Accordion Sections */}
          <div className="lg:hidden space-y-4">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(section)}
                  className="flex justify-between items-center w-full py-4 text-left"
                >
                  <span className="font-medium text-gray-900 capitalize">
                    {section === 'connect' ? 'Connect With Us' : section}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      openSections[section] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSections[section] ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-600 hover:text-primary-green">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Footer Links */}
          <div className="hidden lg:grid lg:col-span-6 grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                {footerLinks.features.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-primary-green">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-primary-green">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Connect</h3>
              <ul className="space-y-2">
                {footerLinks.connect.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-primary-green">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {currentYear} Outparse. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 underline">
                Sitemap
              </a>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 underline">
                LLM.txt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
