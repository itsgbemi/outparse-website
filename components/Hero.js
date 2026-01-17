'use client';

import { useState, useEffect, useRef } from 'react';
import Editor from './Editor';

const Hero = () => {
  const demoText = `Had governments taken climate change seriously decades ago, the world might not be facing such severe environmental problems today. While some countries is making progress, others continues to ignore scientific warnings, which put future generations at risk. Many scientists believes that if action was took earlier, these problems will not became so serious. However, few governments has done enough to change the situation.`;

  return (
    <section className="gradient-hero">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Elevate Your Writing with AI-Powered Grammar Checker
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Outparse uses advanced AI to detect grammar mistakes, improve sentence structure, and enhance your writing style. Perfect for professionals, students, and writers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-primary-green text-white rounded-lg font-medium hover:bg-[#23966d] transition-colors shadow-sm">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Pricing
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green">99%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green">25+</div>
                <div className="text-gray-600">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green">50K+</div>
                <div className="text-gray-600">Users</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Editor */}
          <div className="lg:w-1/2 w-full">
            <Editor demoText={demoText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
