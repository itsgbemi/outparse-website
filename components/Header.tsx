'use client'

import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const featuresItems = [
    'Grammar Checker',
    'Paraphrasing Tool',
    'Spell Checker',
  ]

  const resourcesItems = [
    'Writing Tips',
    'Phrase of the Day',
    'Misspelled Words',
    'Confused Words',
  ]

  const navigation = [
    {
      name: 'Features',
      items: featuresItems,
    },
    {
      name: 'Resources',
      items: resourcesItems,
    },
    {
      name: 'Pricing',
      items: null,
    },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-green-500"></div>
              <span className="text-xl font-bold text-gray-900">Outparse</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.items && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                    <span>{item.name}</span>
                    {item.items && <ChevronDown className="h-4 w-4" />}
                  </button>

                  {item.items && activeDropdown === item.name && (
                    <div className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="rounded-lg bg-gradient-to-r from-yellow-400 to-green-500 px-6 py-2 font-medium text-gray-900 hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button className="rounded-lg bg-gradient-to-r from-yellow-400 to-green-500 px-4 py-2 text-sm font-medium text-gray-900">
                Sign Up
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  )
}
