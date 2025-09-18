"use client";

import React, { useState, useEffect } from 'react';

const DiscountPopup = ({ 
  showDelay = 15000, // 15 seconds default
  redirectUrl = '/thankyou.html' // Thank you page redirect
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    manuscriptReady: '',
    genre: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });

  // EmailJS configuration - MATCH YOUR HERO COMPONENT
  const EMAILJS_SERVICE_ID = 'service_5fdp7dx';
  const EMAILJS_TEMPLATE_ID = 'template_gk147gk';
  const EMAILJS_PUBLIC_KEY = 'uN-2O3nbFXI273dvI';

  // Load EmailJS script
  useEffect(() => {
    const loadEmailJS = () => {
      if (window.emailjs) {
        setEmailjsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        setEmailjsLoaded(true);
        console.log('EmailJS loaded and initialized successfully');
      };
      script.onerror = () => {
        console.error('Failed to load EmailJS');
      };
      document.head.appendChild(script);
    };

    loadEmailJS();
  }, []);

  // Show popup every 15 seconds continuously
  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
    };

    // Initial timer
    const initialTimer = setTimeout(showPopup, showDelay);
    
    // Recurring timer every 15 seconds
    const recurringTimer = setInterval(showPopup, showDelay);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(recurringTimer);
    };
  }, [showDelay]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission - EXACT SAME AS HERO COMPONENT
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation for all fields
    const { manuscriptReady, genre, firstName, lastName, email, phone, zipCode } = formData;
    if (!manuscriptReady || !genre || !firstName || !lastName || !email || !phone || !zipCode) {
      alert('Please fill out all required fields.');
      return;
    }
    if (!/^\d{5}$/.test(zipCode)) {
      alert('Please enter a valid 5-digit zip code (00000 to 99999).');
      return;
    }

    if (!emailjsLoaded) {
      alert('Email service is still loading. Please try again in a moment.');
      return;
    }

    setIsLoading(true);

    try {
      // Prepare template parameters - SAME AS HERO
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        zip_code: formData.zipCode,
        manuscript_ready: formData.manuscriptReady,
        genre: formData.genre,
        to_name: 'Publishing Team',
        message: `New publishing inquiry from POPUP from ${formData.firstName} ${formData.lastName}. 
        
Contact Details:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Zip Code: ${formData.zipCode}

Manuscript Information:
- Manuscript Ready: ${formData.manuscriptReady}
- Genre: ${formData.genre}

Source: Discount Popup (70% off offer)`,
      };

      // Send email using EmailJS - SAME AS HERO
      const result = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully from popup:', result);
      
      // Reset form data
      setFormData({
        manuscriptReady: '',
        genre: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: '',
      });
      
      // Close popup and redirect
      setIsVisible(false);
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert('Thank you! Your request has been submitted successfully. We\'ll contact you soon with your 70% discount offer!');
      }
      
    } catch (error) {
      console.error('Error sending email from popup:', error);
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Close popup
  const closePopup = () => {
    setIsVisible(false);
  };

  // Close error modal
  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  // Error Modal Component - Fully Responsive
  const ErrorModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
      <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md w-full mx-4 text-center">
        <div className="mb-4 sm:mb-6">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            We encountered an issue while submitting your inquiry. Please try again or contact us directly.
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            You can call us at <strong>850-588-0888</strong> for immediate assistance.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            onClick={closeErrorModal}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
          >
            Try Again
          </button>
          <button
            onClick={() => window.open('tel:850-588-0888')}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
          >
            Call Us
          </button>
        </div>
      </div>
    </div>
  );

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Full screen overlay with responsive padding */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
        {/* Popup Container - Fully responsive with proper max heights */}
        <div className="bg-white rounded-br-2xl rounded-tl-2xl sm:rounded-br-4xl sm:rounded-tl-4xl w-full max-w-xs sm:max-w-md lg:max-w-2xl mx-2 sm:mx-4 relative overflow-hidden shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          
          {/* Close button - Responsive sizing */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Header Section - Responsive text and spacing */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
              Don't Leave Yet, <span className="text-yellow-400">Wait!</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 leading-tight">
              Save Further <span className="bg-yellow-400 text-black px-2 py-1 sm:px-3 sm:py-2 rounded-lg font-bold shadow-lg text-sm sm:text-base lg:text-lg">70% off</span> Coupon, Use Anytime
            </p>
            <p className="text-green-100 text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 leading-relaxed">
              Complete your publishing inquiry and get instant access to our discount!
            </p>
          </div>

          {/* Form Section - Responsive padding and spacing */}
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-white">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-900 mb-4 sm:mb-6">Start Publishing Today!</h2>
            
            {/* Form with All Fields - Responsive spacing */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 w-full">
              
              {/* Manuscript Dropdown - Responsive text size */}
              <select
                name="manuscriptReady"
                value={formData.manuscriptReady}
                onChange={handleChange}
                className="w-full p-2.5 sm:p-3 border rounded-lg bg-white text-black text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              >
                <option value="">Is Your Manuscript Ready?*</option>
                <option value="Yes">Yes, it's complete</option>
                <option value="No">No, still writing</option>
                <option value="Need Help">I need help finishing it</option>
              </select>

              {/* Genre Dropdown - Responsive text size */}
              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full p-2.5 sm:p-3 border rounded-lg bg-white text-black text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              >
                <option value="">What is the Genre Of Your Book?*</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Mystery/Thriller">Mystery/Thriller</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi/Fantasy">Sci-Fi/Fantasy</option>
                <option value="Biography/Memoir">Biography/Memoir</option>
                <option value="Self-Help">Self-Help</option>
                <option value="Children's Book">Children's Book</option>
                <option value="Poetry">Poetry</option>
                <option value="Other">Other</option>
              </select>

              {/* Name Fields - Responsive layout and spacing */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full p-2.5 sm:p-3 border rounded-lg bg-white text-black text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className="w-full p-2.5 sm:p-3 border rounded-lg bg-white text-black text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                />
              </div>

              {/* Email - Responsive sizing */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                className="w-full p-2.5 sm:p-3 border rounded-lg bg-white text-black text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              />

              {/* Phone - Responsive sizing */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full p-2.5 sm:p-3 border rounded-lg bg-white text-black text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              />

              {/* Zip Code - Responsive sizing */}
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Zip Code*"
                pattern="[0-9]{5}"
                maxLength="5"
                className="w-full p-2.5 sm:p-3 border rounded-lg bg-white text-black text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              />

              {/* Privacy Notice - Responsive text and padding */}
              <p className="text-xs sm:text-sm text-white/80 bg-white/10 p-2.5 sm:p-3 rounded-lg border border-white/20 leading-relaxed" style={{backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.2)', color: 'rgb(34, 197, 94)'}}>
                📋 By submitting, you agree to our{' '}
                <a href="/privacy-policy" className="underline hover:text-yellow-400 transition-colors">
                  privacy policy
                </a>{' '}
                and consent to be contacted by phone, email, and text.
              </p>

              {/* Submit Button - Responsive sizing and text */}
              <button
                type="submit"
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base lg:text-lg"
                disabled={isLoading || !emailjsLoaded}
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                }}
              >
                {isLoading ? 'Sending...' : emailjsLoaded ? 'Get Your 70% Discount! →' : 'Loading...'}
              </button>
            </form>

            {/* Contact Info - Responsive text and spacing */}
            <div className="mt-4 sm:mt-6 text-center border-t border-green-200 pt-4 sm:pt-6">
              <p className="text-sm sm:text-base lg:text-lg text-green-700">📞 Or Give Us A Call At</p>
              <a 
                href="tel:850-588-0888"
                className="text-lg sm:text-xl lg:text-2xl mt-1 font-bold tracking-wider text-green-600 hover:text-green-700 transition-colors block"
              >
                850-588-0888
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && <ErrorModal />}
    </>
  );
};

export default DiscountPopup;