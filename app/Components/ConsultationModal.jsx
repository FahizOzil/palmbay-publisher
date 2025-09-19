import React, { useState, useEffect } from 'react';

const ConsultationModal = ({ isOpen, onClose }) => {
  // Form state management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    bookDescription: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Example: Send data to your API
    // await fetch('/api/consultation', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    // Close modal after submission
    onClose();
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      contactNumber: '',
      bookDescription: ''
    });
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Don't render if modal is not open
  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose} // Close modal when clicking backdrop
      >
        {/* Modal Container */}
        <div 
          className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-auto relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            
            {/* Left Side - Form Content */}
            <div className="p-6 md:p-8 lg:p-12 order-2 lg:order-1">
              
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Speak With <span className="text-red-600">Our Publishing</span> Experts Today!
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg mb-4">
                  Receive expert advice on publishing your book in just call!
                </p>
                
                {/* Special Offer */}
                <div className="mb-6">
                  <p className="text-gray-700">
                    Unlock <span className="text-red-600 font-bold italic">Grand Black Friday Bundles</span> – Limited-Time Offer!
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Best Email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    required
                  />
                </div>

                {/* Contact Number Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Contact Number"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                    required
                  />
                </div>

                {/* Book Description Textarea */}
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <textarea
                    name="bookDescription"
                    value={formData.bookDescription}
                    onChange={handleInputChange}
                    placeholder="Tell Us About Your Book"
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-md font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Request a Free Consultation</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 relative overflow-hidden rounded-t-lg lg:rounded-t-none lg:rounded-r-lg">
              {/* 
                Replace with your actual popup image URL
                Your image should be at /popup.webp in the public folder
              */}
              <img
                src="/popup.webp"
                alt="Published books showcase - consultation offer"
                className="w-full h-full object-cover min-h-[250px] lg:min-h-full"
              />
              
              {/* Optional overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Hook to manage modal state - Use this in your parent components
export const useConsultationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
    ConsultationModal: (props) => (
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        {...props} 
      />
    )
  };
};

export default ConsultationModal;