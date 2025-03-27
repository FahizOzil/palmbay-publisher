"use client";

import React, { useState } from 'react';
import { font } from './font/font';
import ContactForm from './ContactForm'; // Adjust the path if necessary

const TruePublishingPartner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`${font.className} flex flex-col text-white justify-center items-center customgreen p-8`}>
      <h1 className="text-5xl pt-12">Work With a True Publishing Partner</h1>
      <p className="text-xl max-w-5xl text-center pt-8">
        Silver Gate isn’t just a self publisher – our goal is to be your partner, helping you step-by-step from raw manuscript to publishing success. When it comes to value and experience, Silver Gate Publishing is the best in the industry.
      </p>
      <p className="text-xl pt-8 max-w-5xl text-center">
        It’s time to share your work with the world. Contact Silver Gate Publishing through the button below or call us at{' '}
        <span className="text-xl font-bold">310 564 9107</span> to begin your publishing journey today!
      </p>
      <button
        onClick={openModal}
        className="button-gradient mt-8 cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400"
      >
        Get Started!
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="relative">
            <ContactForm onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TruePublishingPartner;