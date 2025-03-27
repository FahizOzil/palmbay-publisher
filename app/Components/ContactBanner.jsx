"use client";

import React, { useState, useEffect } from "react";
import { font } from "./font/font";
import ContactForm from "./ContactForm"; // Adjust the path if necessary

const ContactBanner = () => {
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
    <div className="customgreen px-6 py-16 md:py-24">
      {/* Top Image (Position Adjusted for Responsiveness) */}
      <div className="flex justify-center md:justify-start">
        <img src="/ring.png" className="w-20 md:w-32" alt="Decorative Ring" />
      </div>

      {/* Main Content (Text + Button) */}
      <div className={`${font.className} flex flex-col text-white justify-center items-center text-center px-4`}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Contact Us Today to Start The Process
        </h1>
        <button
          onClick={openModal}
          className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400"
        >
          Get Started!
        </button>
      </div>

      {/* Bottom Star Image (Right-Aligned) */}
      <div className="flex justify-center md:justify-end mt-6">
        <img src="/star.png" className="w-20 md:w-32" alt="Decorative Star" />
      </div>

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

export default ContactBanner;