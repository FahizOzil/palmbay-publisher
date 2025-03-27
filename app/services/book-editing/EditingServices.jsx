"use client";

import React, { useState, useEffect } from "react";
import { font } from "@/app/Components/font/font";
import ContactForm from "@/app/Components/ContactForm"; // Adjust the path if necessary

const EditingServices = () => {
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
    <div className={`${font.className} flex flex-col mt-20 justify-center items-center text-black px-4 text-center`}>
      <p className="text-3xl md:text-4xl">Book Editing Services</p>
      <div className="flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center">
        <img data-aos="fade-right" src="/edit1.webp" className="w-96 h-96" alt="Copy Editing" />
        <div className="flex flex-col justify-start items-start p-2">
          <h1 data-aos="fade-left" className="text-3xl md:text-5xl mt-6 md:max-w-xl text-left">
            Copy Editing
          </h1>
          <p data-aos="fade-up" className="green-text text-3xl md:max-w-xl mt-4 text-left">
            Starting at $360
          </p>
          <div className="space-y-2 mt-4 text-xl text-left">
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> for up to 10k words, then $.036 per word
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Sentence-level edits to improve clarity
            </p>
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> Technical edit highlighting grammar, punctuation, and spelling
            </p>
            <button
              onClick={openModal}
              className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400"
            >
              Get Started!
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center">
        <div className="flex flex-col justify-start items-start p-2">
          <h1 data-aos="fade-left" className="text-3xl md:text-5xl mt-6 md:max-w-xl text-left">
            Line Editing
          </h1>
          <p data-aos="fade-up" className="green-text text-3xl md:max-w-xl mt-4 text-left">
            Starting at $440
          </p>
          <div className="space-y-2 mt-4 text-xl text-left">
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> for up to 10k words, then $.044 per word
            </p>
            <p data-aos="fade-up-left" className="max-w-xl">
              <span className="green-text">•</span> Stylistic editing looking at high-level structural, organizational, and content concerns
            </p>
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> Suggestions for improving tone and organization
            </p>
            <p data-aos="fade-up-left" className="max-w-xl">
              <span className="green-text">•</span> A look at spelling, grammar, and punctuation but not a complete focus
            </p>
            <button
              onClick={openModal}
              className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400"
            >
              Get Started!
            </button>
          </div>
        </div>
        <img data-aos="fade-right" src="/edit3.webp" className="w-96 h-96" alt="Line Editing" />
      </div>
      <div className="flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center">
        <img data-aos="fade-right" src="/edit2.webp" className="w-96 h-96" alt="Developmental Editing" />
        <div className="flex flex-col justify-start items-start p-2">
          <h1 data-aos="fade-left" className="text-3xl md:text-5xl mt-6 md:max-w-xl text-left">
            Developmental Editing
          </h1>
          <p data-aos="fade-up" className="green-text text-3xl md:max-w-xl mt-4 text-left">
            Starting at $900
          </p>
          <div className="space-y-2 mt-4 text-xl text-left">
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> for up to 10k words, then $.09 per word
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Manuscript assessment on plot, structure, and point of view
            </p>
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> A look at recurring themes
            </p>
            <p data-aos="fade-up-left" className="max-w-xl">
              <span className="green-text">•</span> Receive actionable advice on how to tighten the language and focus on the message for the intended audience. This may be beneficial if you want to increase or reduce the word count.
            </p>
            <button
              onClick={openModal}
              className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400"
            >
              Get Started!
            </button>
          </div>
        </div>
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

export default EditingServices;