'use client';

import { useState, useRef, useEffect } from 'react';

const Editor = ({ demoText }) => {
  const [text, setText] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [errors, setErrors] = useState([]);
  const [selectedError, setSelectedError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const editorRef = useRef(null);
  const errorRefs = useRef({});

  const sampleText = demoText || `Had governments taken climate change seriously decades ago, the world might not be facing such severe environmental problems today. While some countries is making progress, others continues to ignore scientific warnings, which put future generations at risk. Many scientists believes that if action was took earlier, these problems will not became so serious. However, few governments has done enough to change the situation.`;

  // Mock grammar errors for demo
  const mockErrors = [
    { word: "is", index: sampleText.indexOf("is making"), reason: "Subject-verb agreement error. Should be 'are' to match plural 'countries'.", suggestion: "are" },
    { word: "continues", index: sampleText.indexOf("continues to ignore"), reason: "Subject-verb agreement error. Should be 'continue' to match plural 'others'.", suggestion: "continue" },
    { word: "believes", index: sampleText.indexOf("believes that if"), reason: "Subject-verb agreement error. Should be 'believe' to match plural 'scientists'.", suggestion: "believe" },
    { word: "was took", index: sampleText.indexOf("was took earlier"), reason: "Incorrect verb form. Should be 'was taken' or 'had been taken'.", suggestion: "had been taken" },
    { word: "will not became", index: sampleText.indexOf("will not became so"), reason: "Incorrect verb tense. Should be 'would not have become'.", suggestion: "would not have become" },
    { word: "has", index: sampleText.indexOf("governments has done"), reason: "Subject-verb agreement error. Should be 'have' to match plural 'governments'.", suggestion: "have" }
  ];

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const handleTrySample = () => {
    setText(sampleText);
  };

  const handleCopy = async () => {
    if (text.trim()) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDelete = () => {
    setText('');
    setErrors([]);
    setSelectedError(null);
  };

  const handleCheckGrammar = async () => {
    if (!text.trim()) return;
    
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would call the Gemini API here
      // For demo, we'll use mock errors
      const foundErrors = mockErrors.filter(error => 
        text.toLowerCase().includes(error.word.toLowerCase())
      );
      
      setErrors(foundErrors);
      setIsChecking(false);
    }, 1500);
  };

  const handleAcceptSuggestion = (errorIndex) => {
    const error = errors[errorIndex];
    if (!error) return;
    
    // Replace the error word with suggestion
    const newText = text.substring(0, error.index) + 
                   error.suggestion + 
                   text.substring(error.index + error.word.length);
    
    setText(newText);
    
    // Remove the error from the list
    const newErrors = [...errors];
    newErrors.splice(errorIndex, 1);
    setErrors(newErrors);
    setSelectedError(null);
  };

  const handleIgnoreError = (errorIndex) => {
    const newErrors = [...errors];
    newErrors.splice(errorIndex, 1);
    setErrors(newErrors);
    setSelectedError(null);
  };

  const handleWordClick = (error, index) => {
    setSelectedError({ ...error, listIndex: index });
    
    // Scroll to error
    if (errorRefs.current[index]) {
      errorRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const renderTextWithHighlights = () => {
    if (!text || errors.length === 0) return text;
    
    let lastIndex = 0;
    const segments = [];
    const sortedErrors = [...errors].sort((a, b) => a.index - b.index);
    
    sortedErrors.forEach((error, i) => {
      // Add text before error
      segments.push(text.substring(lastIndex, error.index));
      
      // Add error text
      segments.push(
        <span
          key={`error-${i}`}
          ref={el => errorRefs.current[i] = el}
          onClick={() => handleWordClick(error, i)}
          className="relative cursor-pointer border-b-2 border-error-border bg-error-bg px-1 rounded-sm hover:bg-red-50 transition-colors"
        >
          {error.word}
          {selectedError?.listIndex === i && (
            <div className="absolute left-0 top-full mt-2 z-50 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
              <div className="text-sm font-medium text-gray-900 mb-2">Grammar Issue</div>
              <div className="text-sm text-gray-600 mb-3">{error.reason}</div>
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAcceptSuggestion(i);
                  }}
                  className="flex-1 px-3 py-1.5 bg-primary-green text-white text-sm rounded-md hover:bg-[#23966d]"
                >
                  Accept ({error.suggestion})
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIgnoreError(i);
                  }}
                  className="flex-1 px-3 py-1.5 border border-gray-300 text-sm rounded-md hover:bg-gray-50"
                >
                  Ignore
                </button>
              </div>
            </div>
          )}
        </span>
      );
      
      lastIndex = error.index + error.word.length;
    });
    
    // Add remaining text
    segments.push(text.substring(lastIndex));
    
    return segments;
  };

  return (
    <div className="bg-white rounded-3xl editor-shadow p-6 md:p-8 w-full max-w-2xl mx-auto">
      {/* Editor Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <div className="text-lg font-medium text-gray-900">Grammar Checker</div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            title={copied ? "Copied!" : "Copy"}
          >
            {copied ? (
              <svg className="w-5 h-5 text-primary-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="style=stroke">
                  <g id="check-circle">
                    <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill="#2ba37b"></path>
                    <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L11.9041 14.6566C11.2207 15.34 10.1126 15.34 9.42923 14.6566L7.46967 12.697C7.17678 12.4041 7.17678 11.9292 7.46967 11.6363C7.76256 11.3434 8.23744 11.3434 8.53033 11.6363L10.4899 13.5959C10.5875 13.6935 10.7458 13.6935 10.8434 13.5959L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="#2ba37b"></path>
                  </g>
                </g>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 4.63V17.25c0 1.8 1.46 3.25 3.25 3.25h8.62c-.31.88-1.15 1.5-2.13 1.5H8.75A4.75 4.75 0 014 17.25V6.75c0-.98.63-1.81 1.5-2.12zM17.75 2C18.99 2 20 3 20 4.25v13c0 1.24-1 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.5 2 8.75 2h9zm0 1.5h-9a.75.75 0 00-.75.75v13c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75v-13a.75.75 0 00-.75-.75z" fill="currentColor"></path>
              </svg>
            )}
          </button>
          
          <button
            onClick={handleDelete}
            className="p-2 text-gray-500 hover:text-error-border hover:bg-red-50 rounded-lg transition-colors active:text-red-600"
            title="Delete"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5h4a2 2 0 10-4 0zM8.5 5a3.5 3.5 0 117 0h5.75a.75.75 0 010 1.5h-1.32l-1.17 12.11A3.75 3.75 0 0115.03 22H8.97a3.75 3.75 0 01-3.73-3.39L4.07 6.5H2.75a.75.75 0 010-1.5H8.5zm2 4.75a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zM14.25 9c.41 0 .75.34.75.75v7.5a.75.75 0 01-1.5 0v-7.5c0-.41.34-.75.75-.75zm-7.52 9.47a2.25 2.25 0 002.24 2.03h6.06c1.15 0 2.12-.88 2.24-2.03L18.42 6.5H5.58l1.15 11.97z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Editor Area */}
      <div className="mb-6">
        <div 
          ref={editorRef}
          className="min-h-[300px] max-h-[400px] overflow-y-auto p-4 border border-gray-300 rounded-xl focus-within:border-primary-green focus-within:ring-2 focus-within:ring-primary-green/20 transition-all"
        >
          {text ? (
            <div className="whitespace-pre-wrap leading-relaxed text-gray-800">
              {renderTextWithHighlights()}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="text-gray-400 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500 mb-8">Start typing or paste text here...</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleTrySample}
                  className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="#1C274C" strokeWidth="1.5"></path>
                    <path d="M8 10H16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M8 14H13" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                  Try sample text
                </button>
                <button
                  className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M15 19H21M18 16V22" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Upload document
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Error Summary */}
        {errors.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-error-border"></div>
              <div className="font-medium text-gray-900">
                {errors.length} grammar issue{errors.length !== 1 ? 's' : ''} found
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Click on highlighted words to see suggestions
            </div>
          </div>
        )}
      </div>
      
      {/* Editor Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Characters: <span className={charCount > 900 ? 'text-error-border font-medium' : ''}>
            {charCount}/1000
          </span>
        </div>
        
        <button
          onClick={handleCheckGrammar}
          disabled={!text.trim() || isChecking}
          className="px-8 py-3 bg-primary-green text-white rounded-lg font-medium hover:bg-[#23966d] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm flex items-center gap-2"
        >
          {isChecking ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              Checking…
            </>
          ) : (
            'Fix Grammar'
          )}
        </button>
      </div>
    </div>
  );
};

export default Editor;
