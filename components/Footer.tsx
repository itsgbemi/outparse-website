'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const footerLinks = {
    Features: ['Grammar Checker', 'Paraphrasing Tool', 'Spell Checker', 'Tone Detection'],
    Resources: ['Writing Tips', 'Phrase of the Day', 'Misspelled Words', 'Confused Words'],
    Company: ['About Us', 'Careers', 'Terms of Use', 'Privacy Policy'],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-400 to-green-500"></div>
              <span className="text-2xl font-bold text-gray-900">Outparse</span>
            </div>
            <p className="text-gray-600">
              AI-powered writing assistant that helps you write better, faster, and with confidence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-lg border border-gray-300 p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Footer Links */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:col-span-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
