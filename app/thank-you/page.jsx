"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { font } from './font/font';

const ThankYouPage = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    setMounted(true);
    
    // Redirect countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleBackToHome = () => {
    router.push('/');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className={`font-sans min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4`}>
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        
        {/* Success Icon */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You! 🎉
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Your Publishing Journey Begins Now!
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Your publishing inquiry has been submitted successfully. Our expert team at Palm Bay Publishers 
            will review your information and get back to you within <strong className="text-green-600">24 hours</strong>.
          </p>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What happens next?</h3>
            <div className="text-left max-w-md mx-auto space-y-3">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-gray-700">Our publishing consultant reviews your manuscript details</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-gray-700">We'll call you to discuss your publishing goals</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-gray-700">Receive a personalized publishing plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Need Immediate Assistance?</h3>
          <p className="text-gray-600 mb-4">
            Can't wait to get started? Our publishing experts are standing by to help!
          </p>
          <a 
            href="tel:850-588-0888"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call 850-588-0888
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleBackToHome}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Back to Home
          </button>
          
          <a
            href="/services"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Explore Our Services
          </a>
        </div>

        {/* Auto-redirect notice */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            You'll be automatically redirected to the homepage in <strong>{countdown}</strong> seconds
          </p>
        </div>

        {/* Footer Message */}
        <div className="mt-6 text-sm text-gray-500">
          <p>✨ We're excited to help you bring your story to life! ✨</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;