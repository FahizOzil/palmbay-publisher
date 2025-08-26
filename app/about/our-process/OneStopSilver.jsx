"use client"

import React from 'react'
import { font } from '@/app/Components/font/font'
import { useState, useEffect } from 'react'
import ContactForm from '@/app/Components/ContactForm'

const OneStopSilver = () => {


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
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <div className={`${font.className} flex flex-col justify-center items-center p-20`}>
        <p className=' text-xl'>Palm Bay is a one-stop, full-service publisher dedicated to independent writers. Our process starts with you: we take the time to learn about you, your book, and your goals, and we develop a smooth, personalized plan to take you from a rough draft to a published book. We believe that your book deserves professional editorial, design, distribution, and marketing support. These four pillars are the backbone of our publishing process.</p>
        <p className=' mt-12 text-xl'>Ready to take the first step toward becoming a published author? Contact us today to learn more about our self-publishing process.</p>
        
        <button onClick={openModal} className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
          Get Started!
        </button>

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
  )
}

export default OneStopSilver