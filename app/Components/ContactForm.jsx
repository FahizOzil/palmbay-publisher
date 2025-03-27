"use client";

import React, { useState } from 'react';
import { font } from './font/font'; // Adjust the path if necessary

const ContactForm = ({ onClose }) => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    manuscriptReady: '',
    genre: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });

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
  const handleStep2Submit = (e) => {
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
    // Here you can handle the form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    onClose(); // Close the modal after successful submission
  };

  // Go back to step 1
  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className={`${font.className} relative customgreen rounded-tl-4xl rounded-br-4xl text-white p-6 rounded-lg max-w-md w-full`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white text-2xl focus:outline-none"
      >
        &times;
      </button>

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
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-md font-bold text-black button-gradient transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      )}

      {/* Contact Info */}
      <p className="mt-4 text-lg text-center">Or Give Us A Call At</p>
      <p className="text-xl mt-1 font-bold tracking-wider text-center">888 408 8965</p>
    </div>
  );
};

export default ContactForm;