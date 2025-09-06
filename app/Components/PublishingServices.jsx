"use client";

import React, { useState, useEffect } from 'react';
import { font } from './font/font';
import ContactForm from './ContactForm'; // Adjust the path if necessary

const PublishingServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  return (
    <div className={`${font.className} flex flex-col items-center p-12 bg-white`}>
      {/* Section Title */}
      <h1 className="text-3xl md:text-5xl mt-12 text-black text-center">Publishing Services</h1>
      <hr className="w-24 md:w-32 mt-6 border-2 border-yellow-600" />

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white flex flex-col rounded-lg items-center shadow-lg p-6">
          <img src="/coverdesign.webp" className="w-20 h-20 md:w-24 md:h-24" alt="Cover Design" />
          <h1 className="green-text mt-4 text-lg md:text-2xl text-center">Cover <br /> Design</h1>
        </div>

        {/* Card 2 */}
        <div className="bg-white flex flex-col rounded-lg items-center shadow-lg p-6">
          <img src="/T.webp" className="w-20 h-20 md:w-24 md:h-24" alt="Interior Design" />
          <h1 className="green-text mt-4 text-lg md:text-2xl text-center">Interior <br /> Design</h1>
        </div>

        {/* Card 3 */}
        <div className="bg-white flex flex-col rounded-lg items-center shadow-lg p-6">
          <img src="/ill.webp" className="w-20 h-20 md:w-24 md:h-24" alt="Illustration" />
          <h1 className="green-text mt-4 text-lg md:text-2xl text-center">Illustration</h1>
        </div>

        {/* Card 4 */}
        <div className="bg-white flex flex-col rounded-lg items-center shadow-lg p-6">
          <img src="/edit.webp" className="w-20 h-20 md:w-24 md:h-24" alt="Editing" />
          <h1 className="green-text mt-4 text-lg md:text-2xl text-center">Editing</h1>
        </div>

        {/* Card 5 */}
        <div className="bg-white flex flex-col rounded-lg items-center shadow-lg p-6">
          <img src="/print.webp" className="w-20 h-20 md:w-24 md:h-24" alt="Print" />
          <h1 className="green-text mt-4 text-lg md:text-2xl text-center">Print</h1>
        </div>

        {/* Card 6 */}
        <div className="bg-white flex flex-col rounded-lg items-center shadow-lg p-6">
          <img src="/mark.webp" className="w-20 h-20 md:w-24 md:h-24" alt="Marketing" />
          <h1 className="green-text mt-4 text-lg md:text-2xl text-center">Marketing</h1>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={openModal}
        className="button-gradient mt-8 px-6 py-3 text-lg md:text-xl rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400"
      >
        Get Started!
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <ContactForm onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishingServices;