'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{
    name: string
    items: string[] | null
  }>
}

export default function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleItem = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="p-6">
            {/* Logo */}
            <div className="mb-8 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-green-500"></div>
              <span className="text-xl font-bold text-gray-900">Outparse</span>
            </div>

            {/* Navigation */}
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div>
                      <button
                        onClick={() => toggleItem(item.name)}
                        className="flex w-full items-center justify-between py-3 text-lg font-medium text-gray-900"
                      >
                        <span>{item.name}</span>
                        {expandedItems.includes(item.name) ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      
                      {expandedItems.includes(item.name) && (
                        <div className="ml-4 space-y-2 border-l border-gray-200 pl-4">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block py-2 text-gray-600 hover:text-gray-900"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href="#"
                      className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-8 space-y-4 border-t border-gray-200 pt-8">
              <button className="w-full rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 hover:bg-gray-50">
                Login
              </button>
              <button className="w-full rounded-lg bg-gradient-to-r from-yellow-400 to-green-500 px-6 py-3 font-medium text-gray-900 hover:opacity-90">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
