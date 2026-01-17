'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How accurate is Outparse's grammar checking?",
      answer: "Outparse uses advanced AI models with 99% accuracy for common grammar errors. It continuously learns from user corrections and updates to improve its suggestions."
    },
    {
      question: "What types of documents can I check?",
      answer: "You can check essays, reports, emails, blog posts, academic papers, business documents, and more. Outparse supports various formats including plain text and will soon support document uploads."
    },
    {
      question: "Is my content private and secure?",
      answer: "Yes, we take privacy seriously. Your content is encrypted in transit and at rest. We don't store your text for longer than needed to provide the service, and we never use your content for training without explicit permission."
    },
    {
      question: "Which languages does Outparse support?",
      answer: "Currently, Outparse supports 25+ languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Japanese, Chinese, Korean, and more."
    },
    {
      question: "What AI technology does Outparse use?",
      answer: "Outparse uses Google's Gemini AI combined with custom NLP models specifically trained for grammar correction. This combination provides both accuracy and context-aware suggestions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
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
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
