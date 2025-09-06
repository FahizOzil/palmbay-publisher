"use client";

import React, { useState, useEffect } from 'react';
import { font } from './font/font'; // Adjust the path if necessary

const ContactForm = ({ onClose }) => {
  const [step, setStep] = useState(1); // Track the current step
  const [showThankYou, setShowThankYou] = useState(false); // Track thank you modal
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [emailjsLoaded, setEmailjsLoaded] = useState(false); // Track EmailJS loading
  const [formData, setFormData] = useState({
    manuscriptReady: '',
    genre: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });

  // EmailJS configuration
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

  // Handle form submission for step 1
  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (formData.manuscriptReady && formData.genre) {
      setStep(2); // Move to step 2 if both fields are filled
    } else {
      alert('Please fill out both fields to proceed.');
    }
  };

  // Handle form submission for step 2
  const handleStep2Submit = async (e) => {
    e.preventDefault();
    
    // Basic validation for step 2
    const { firstName, lastName, email, phone, zipCode } = formData;
    if (!firstName || !lastName || !email || !phone || !zipCode) {
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

    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
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
      setShowThankYou(true); // Show thank you modal
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or call us directly at 850-588-0888.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Go back to step 1
  const handleBack = () => {
    setStep(1);
  };

  // Handle thank you modal close
  const handleThankYouClose = () => {
    setShowThankYou(false);
    onClose(); // Close the main modal
  };

  // Thank You Modal Component with enhanced design
  const ThankYouModal = () => (
    <div className={`${font.className} relative customgreen rounded-tl-4xl rounded-br-4xl text-white p-8 rounded-lg max-w-md w-full text-center shadow-2xl`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-300"></div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleThankYouClose}
        className="absolute top-4 right-4 text-white text-3xl focus:outline-none hover:text-yellow-400 transition-all duration-300 hover:rotate-90 z-10"
      >
        &times;
      </button>

      {/* Success Icon with Animation */}
      <div className="relative mb-8">
        <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg animate-bounce">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        {/* Celebration particles */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping absolute -top-2 -left-4"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping absolute -top-3 left-4 delay-100"></div>
          <div className="w-1 h-1 bg-white rounded-full animate-ping absolute -top-1 -left-6 delay-200"></div>
          <div className="w-1 h-1 bg-white rounded-full animate-ping absolute -top-4 left-6 delay-300"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent animate-pulse">
          Thank You!
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded-full mb-6"></div>
        
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          🎉 Your information has been submitted successfully! 
          <br />
          <span className="text-yellow-400 font-semibold">Our publishing experts</span> will contact you soon to discuss your manuscript and publishing journey.
        </p>
      </div>

      {/* Enhanced Contact Info Section */}
      <div className="border-t border-white/20 pt-6 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        
        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
          <p className="text-lg mb-3 flex items-center justify-center">
            <span className="mr-2">📞</span>
            Need immediate assistance?
          </p>
          <a 
            href="tel:850-588-0888"
            className="block text-3xl md:text-4xl font-bold tracking-wider text-yellow-400 hover:text-yellow-300 transition-colors duration-300 mb-3"
          >
            850-588-0888
          </a>
          <p className="text-sm opacity-90 flex items-center justify-center">
            <span className="mr-2">✨</span>
            Our team is here to help you succeed!
            <span className="ml-2">✨</span>
          </p>
        </div>
      </div>

      {/* Enhanced Close Button */}
      <button
        onClick={handleThankYouClose}
        className="mt-8 w-full px-8 py-4 rounded-xl font-bold text-lg text-black bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-yellow-500/25"
      >
        Continue Your Journey →
      </button>

      {/* Subtle footer message */}
      <p className="text-xs opacity-75 mt-4">
        We're excited to be part of your publishing story! 📚
      </p>
    </div>
  );

  // Show thank you modal if submission is successful
  if (showThankYou) {
    return <ThankYouModal />;
  }

  return (
    <div className={`${font.className} relative customgreen rounded-tl-4xl rounded-br-4xl text-white p-6 rounded-lg max-w-md w-full shadow-2xl`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white text-2xl focus:outline-none hover:text-yellow-400 transition-colors duration-300"
      >
        &times;
      </button>

      <h1 className="text-2xl md:text-3xl text-center font-bold mb-2">
        {step === 1 ? 'Start Publishing Today!' : 'Start Your Publishing Journey'}
      </h1>
      
      {/* Progress indicator */}
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2">
          <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-yellow-400' : 'bg-white/30'} transition-colors`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-yellow-400' : 'bg-white/30'} transition-colors`}></div>
        </div>
      </div>

      {/* Step 1: Initial Questions */}
      {step === 1 && (
        <form onSubmit={handleStep1Submit} className="space-y-4 mt-6 w-full">
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

          {/* Button */}
          <button
            type="submit"
            className="button-gradient mt-6 w-full px-6 py-3 rounded-md font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition-all transform hover:scale-105"
          >
            Get Started! →
          </button>
        </form>
      )}

      {/* Step 2: Contact Information */}
      {step === 2 && (
        <form onSubmit={handleStep2Submit} className="space-y-4 mt-6 w-full">
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

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address*"
            className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number*"
            className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400 transition-all"
            required
          />

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
          <p className="text-sm text-white/80">
            Please enter a valid 5-digit zip code (00000 to 99999).
          </p>

          <p className="text-sm text-white/80 bg-white/10 p-3 rounded-lg border border-white/20">
            📋 By submitting, you agree to our{' '}
            <a href="/privacy-policy" className="underline hover:text-yellow-400 transition-colors">
              privacy policy
            </a>{' '}
            and consent to be contacted by phone, email, and text.
          </p>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="w-full px-6 py-3 rounded-md font-bold text-black bg-white/20 hover:bg-white/30 transition-all transform hover:scale-105"
              disabled={isSubmitting}
            >
              ← Back
            </button>
            
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-md font-bold text-black button-gradient bg-yellow-500 hover:bg-yellow-400 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={isSubmitting || !emailjsLoaded}
            >
              {isSubmitting ? 'Sending...' : emailjsLoaded ? 'Submit →' : 'Loading...'}
            </button>
          </div>
        </form>
      )}

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
  );
};

export default ContactForm;