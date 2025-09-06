"use client";

import React, { useState, useEffect } from 'react';
import { font } from './font/font';

const Hero = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'success' or 'error'
  const [mounted, setMounted] = useState(false);
  const [emailjs, setEmailjs] = useState(null);
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
  const EMAILJS_PUBLIC_KEY = 'uN-2O3nbFXI273dvI'; 

  // Handle mounting and EmailJS import
  useEffect(() => {
    setMounted(true);
    
    // Dynamically import EmailJS only on client side
    const loadEmailJS = async () => {
      try {
        console.log('Loading EmailJS...');
        const emailjsModule = await import('@emailjs/browser');
        console.log('EmailJS module loaded:', emailjsModule);
        
        setEmailjs(emailjsModule.default);
        emailjsModule.default.init(EMAILJS_PUBLIC_KEY);
        console.log('EmailJS initialized with key:', EMAILJS_PUBLIC_KEY);
      } catch (error) {
        console.error('Failed to load EmailJS:', error);
      }
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
      setStep(2);
    } else {
      alert('Please fill out both fields to proceed.');
    }
  };

  // Send email using EmailJS
  // Replace your sendEmail function with this enhanced version for better debugging:

const sendEmail = async (formData) => {
  if (!emailjs) {
    console.error('EmailJS not loaded');
    throw new Error('EmailJS not loaded');
  }

  const templateParams = {
    to_email: 'fahizozil17@gmail.com',
    cc_email: 'pakalone8@gmail.com',
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone: formData.phone,
    zip_code: formData.zipCode,
    manuscript_ready: formData.manuscriptReady,
    genre: formData.genre,
    subject: 'New Publishing Inquiry - Palm Bay Publishers',
    message: `
      New publishing inquiry received:
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Zip Code: ${formData.zipCode}
      
      Manuscript Ready: ${formData.manuscriptReady}
      Genre: ${formData.genre}
      
      Please follow up with this potential client.
    `
  };

  console.log('Attempting to send email with params:', templateParams);
  console.log('Service ID:', EMAILJS_SERVICE_ID);
  console.log('Template ID: template_default');

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_default', // Make sure this template exists in your EmailJS account
      templateParams
    );
    
    console.log('EmailJS Success Response:', response);
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error Details:', {
      message: error.message,
      status: error.status,
      text: error.text,
      error: error
    });
    return { success: false, error };
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

    if (!emailjs) {
      setModalType('error');
      setShowModal(true);
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setModalType('success');
        setShowModal(true);
        // Reset form after successful submission
        setFormData({
          manuscriptReady: '',
          genre: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          zipCode: '',
        });
        setStep(1);
      } else {
        setModalType('error');
        setShowModal(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setModalType('error');
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Go back to step 1
  const handleBack = () => {
    setStep(1);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setModalType('');
  };

  // Success Modal Component
  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            Your publishing inquiry has been submitted successfully. Our team will review your information and get back to you within 24 hours.
          </p>
          <p className="text-sm text-gray-500">
            We're excited to help you bring your story to life!
          </p>
        </div>
        <button
          onClick={closeModal}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );

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
            You can call us at <strong>850 588-0888</strong> for immediate assistance.
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={closeModal}
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
            </div>
            <p className="mt-4 text-lg">Or Give Us A Call At</p>
            <p className="text-xl mt-1 font-bold tracking-wider">850 588-0888</p>
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
            <h1 className="text-2xl md:text-3xl text-center">
              {step === 1 ? 'Start Publishing Today!' : 'Start Your Publishing Journey'}
            </h1>

            {/* Step 1: Initial Questions */}
            {step === 1 && (
              <form onSubmit={handleStep1Submit} className="space-y-4 mt-6 w-full">
                {/* Manuscript Dropdown */}
                <select
                  name="manuscriptReady"
                  value={formData.manuscriptReady}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Is Your Manuscript Ready?*</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Need Help">Need Help</option>
                </select>

                {/* Genre Dropdown */}
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">What is the Genre Of Your Book?</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Romance">Romance</option>
                  <option value="Other">Other</option>
                </select>

                {/* Button */}
                <button
                  type="submit"
                  className="button-gradient mt-6 w-full px-6 py-3 rounded-md font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition-all"
                >
                  Get Started!
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
                    className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name*"
                    className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400"
                  required
                />

                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Zip Code*"
                  className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <p className="text-sm text-white">
                  Please enter a number from 00000 to 99999.
                </p>

                <p className="text-sm text-white">
                  Submitting your information indicates that you have read our{' '}
                  <a href="/privacy-policy" className="underline hover:text-yellow-400">
                    privacy policy
                  </a>{' '}
                  and give us permission to call, email, and send text messages.
                </p>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-full px-6 py-3 rounded-md font-bold text-black button-gradient transition-all"
                    disabled={isLoading}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-md font-bold text-black button-gradient transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}

            {/* Contact Info */}
            <p className="mt-4 text-lg">Or Give Us A Call At</p>
            <p className="text-xl mt-1 font-bold tracking-wider">850 588-0888</p>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && modalType === 'success' && <SuccessModal />}
      {showModal && modalType === 'error' && <ErrorModal />}
    </>
  );
};

export default Hero;