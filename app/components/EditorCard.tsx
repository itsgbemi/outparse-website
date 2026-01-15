'use client'

import { CheckCircle, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'

export default function EditorCard() {
  const [text, setText] = useState('This is an example of text that could contain grammatical errors or need improvments.')

  const suggestions = [
    'Could contain grammatical errors',
    'Need improvements',
    'Consider using "improvement" instead of "improvments"',
  ]

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      {/* Card Header */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-green-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-4">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            <Zap className="h-5 w-5 text-green-500" />
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="p-6">
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">AI Writing Assistant</h3>
            <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              <CheckCircle className="inline-block h-4 w-4 mr-1" />
              92% Score
            </div>
          </div>

          {/* Text Area */}
          <div className="rounded-lg border border-gray-300 p-4 min-h-[200px]">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full min-h-[150px] resize-none border-none focus:outline-none text-gray-700"
              placeholder="Paste your text here to check for grammar and style..."
            />
          </div>

          {/* Word Count */}
          <div className="mt-2 text-right text-sm text-gray-500">
            {text.length} characters • {text.split(' ').length} words
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Suggestions ({suggestions.length})</h4>
          <div className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 hover:bg-yellow-100 transition-colors cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 rounded-full bg-yellow-100 p-1">
                    <Sparkles className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">{suggestion}</p>
                    <div className="mt-2 flex space-x-2">
                      <button className="rounded-md bg-white px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                        Accept
                      </button>
                      <button className="rounded-md bg-white px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                        Ignore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="flex-1 rounded-lg bg-gradient-to-r from-yellow-400 to-green-500 px-4 py-3 font-medium text-gray-900 hover:opacity-90">
            Check Grammar
          </button>
          <button className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 hover:bg-gray-50">
            Paraphrase
          </button>
        </div>
      </div>
    </div>
  )
        }
