// Simplified hero component with single form (no steps)
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { font } from './font/font';

const Hero = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [mounted, setMounted] = useState(false);
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

  // EmailJS configuration - MATCH YOUR CONTACT FORM
  const EMAILJS_SERVICE_ID = 'service_5fdp7dx';
  const EMAILJS_TEMPLATE_ID = 'template_gk147gk';
  const EMAILJS_PUBLIC_KEY = 'uN-2O3nbFXI273dvI';

  // Load EmailJS script
  useEffect(() => {
    setMounted(true);
    
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
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
      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        zip_code: formData.zipCode,
        manuscript_ready: formData.manuscriptReady,
        genre: formData.genre,
        to_name: 'Publishing Team',
        message: `New publishing inquiry from ${formData.firstName} ${formData.lastName}. 
        
Contact Details:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Zip Code: ${formData.zipCode}

Manuscript Information:
- Manuscript Ready: ${formData.manuscriptReady}
- Genre: ${formData.genre}`,
      };

      // Send email using EmailJS
      const result = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
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
      
      // Redirect to thank you page
      router.push('/thankyou.html');
      
    } catch (error) {
      console.error('Error sending email:', error);
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Close error modal
  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  // Error Modal Component
  const ErrorModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
          <p className="text-gray-600 mb-4">
            We encountered an issue while submitting your inquiry. Please try again or contact us directly.
          </p>
          <p className="text-sm text-gray-500">
            You can call us at <strong>850-588-0888</strong> for immediate assistance.
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={closeErrorModal}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.open('tel:850-588-0888')}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Call Us
          </button>
        </div>
      </div>
    </div>
  );

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex flex-col md:flex-row text-white justify-center items-center py-12 px-6 md:px-16 custombg">
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
          <img
            src="/Books-covers.png.webp"
            alt="Books Covers"
            className="w-full max-w-md md:max-w-lg object-cover"
          />
          <h1 className="text-3xl md:text-5xl mt-6 font-semibold leading-tight">
            Trusted Book Publishing Services in the USA
          </h1>
          <p className="mt-4 text-lg max-w-md md:max-w-lg mr-auto">
            At Palm Bay Publishers, we believe every exceptional story deserves to be shared. Whether you're an emerging writer or an established author, our expert book publishing services are here to help you publish with ease. As one of the top publishing companies in the USA, we manage everything—from editing and cover design to distribution and marketing—allowing you to focus on your craft. Trust our experienced book publisher team to bring your work to life with professionalism and dedication.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
          <div className="customgreen w-full max-w-md rounded-br-4xl rounded-tl-4xl py-8 px-6 md:px-8 flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl text-center">Start Publishing Today!</h1>
            <div className="space-y-4 mt-6 w-full">
              <div className="w-full p-3 border rounded-lg bg-gray-200 animate-pulse h-12"></div>
              <div className="w-full p-3 border rounded-lg bg-gray-200 animate-pulse h-12"></div>
              <div className="w-full p-3 border rounded-lg bg-gray-200 animate-pulse h-12"></div>
              <div className="w-full p-3 border rounded-lg bg-gray-200 animate-pulse h-12"></div>
              <div className="w-full p-3 border rounded-lg bg-gray-200 animate-pulse h-12"></div>
              <div className="w-full p-3 border rounded-lg bg-gray-200 animate-pulse h-12"></div>
              <div className="w-full p-3 border rounded-lg bg-gray-200 animate-pulse h-12"></div>
            </div>
            <p className="mt-4 text-lg">Or Give Us A Call At</p>
            <p className="text-xl mt-1 font-bold tracking-wider">850-588-0888</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`${font.className} flex flex-col md:flex-row text-white justify-center items-center py-12 px-6 md:px-16 custombg`}>
        {/* Left Section (Image & Text) */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
          <img
            src="/Books-covers.png.webp"
            alt="Books Covers"
            className="w-full max-w-md md:max-w-lg object-cover"
          />
          <h1 className="text-3xl md:text-5xl mt-6 font-semibold leading-tight">
            Trusted Book Publishing Services in the USA
          </h1>
          <p className="mt-4 text-lg max-w-md md:max-w-lg mr-auto">
            At Palm Bay Publishers, we believe every exceptional story deserves to be shared. Whether you're an emerging writer or an established author, our expert book publishing services are here to help you publish with ease. As one of the top publishing companies in the USA, we manage everything—from editing and cover design to distribution and marketing—allowing you to focus on your craft. Trust our experienced book publisher team to bring your work to life with professionalism and dedication.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
          <div className="customgreen w-full max-w-md rounded-br-4xl rounded-tl-4xl py-8 px-6 md:px-8 flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl text-center mb-6">Start Publishing Today!</h1>

            {/* Single Form with All Fields */}
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              {/* Manuscript Dropdown */}
              <select
                name="manuscriptReady"
                value={formData.manuscriptReady}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              >
                <option value="">Is Your Manuscript Ready?*</option>
                <option value="Yes">Yes, it's complete</option>
                <option value="No">No, still writing</option>
                <option value="Need Help">I need help finishing it</option>
              </select>

              {/* Genre Dropdown */}
              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
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

              {/* Name Fields */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              />

              {/* Zip Code */}
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Zip Code*"
                pattern="[0-9]{5}"
                maxLength="5"
                className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
                required
              />

              {/* Privacy Notice */}
              <p className="text-sm text-white/80 bg-white/10 p-3 rounded-lg border border-white/20">
                📋 By submitting, you agree to our{' '}
                <a href="/privacy-policy" className="underline hover:text-yellow-400 transition-colors">
                  privacy policy
                </a>{' '}
                and consent to be contacted by phone, email, and text.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md font-bold text-black button-gradient bg-yellow-500 hover:bg-yellow-400 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isLoading || !emailjsLoaded}
              >
                {isLoading ? 'Sending...' : emailjsLoaded ? 'Get Started! →' : 'Loading...'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 text-center border-t border-white/20 pt-4">
              <p className="text-lg">📞 Or Give Us A Call At</p>
              <a 
                href="tel:850-588-0888"
                className="text-2xl mt-1 font-bold tracking-wider text-yellow-400 hover:text-yellow-300 transition-colors block"
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

export default Hero;