"use client";

import React, { useState, useEffect } from "react";
import { font } from "@/app/Components/font/font";
import ContactForm from "@/app/Components/ContactForm"; // Adjust the path if necessary

const DesignServices = () => {
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
    <div className={`${font.className} flex flex-col mt-20 justify-center items-center bg-white text-black px-4 text-center`}>
      <p className="text-3xl md:text-4xl">Book Cover Design Services</p>
      <p className="pt-4 text-md md:text-xl max-w-3xl">
        Check out our services below to find the right fit for your needs!
      </p>
      <p className="pt-8 text-xl italic max-w-3xl">
        *Our cover design services are automatically formatted for paperback books. Additional fees are required for converting to hardcover and/or e-book.
      </p>
      <div className="flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center">
        <img data-aos="fade-right" src="/cover1.webp" className="w-96 h-96" alt="Palm Bay Cover" />
        <div className="flex flex-col justify-start items-start p-2">
          <h1 data-aos="fade-left" className="text-3xl md:text-5xl mt-6 md:max-w-xl text-left">
            Palm Bay Cover
          </h1>
          {/* <p data-aos="fade-up" className="green-text text-3xl md:max-w-xl mt-4 text-left">
            Starting at $599
          </p> */}
          <div className="space-y-2 mt-4 text-xl text-left">
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> 1 Cover concept with front, spine, and back design
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> 1 Fully licensed premium stock image or author provided image
            </p>
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> 1 Round of changes
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Popular for poetry, business, and religious books
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
            Custom Cover
          </h1>
          {/* <p data-aos="fade-up" className="green-text text-3xl md:max-w-xl mt-4 text-left">
            Starting at $699
          </p> */}
          <div className="space-y-2 mt-4 text-xl text-left">
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> 2 Cover concepts with front, spine, and back design
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Up to 2 fully licensed premium stock images per concept
            </p>
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> 2 Rounds of changes
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Appropriate for all genres
            </p>
            <button
              onClick={openModal}
              className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400"
            >
              Get Started!
            </button>
          </div>
        </div>
        <img data-aos="fade-right" src="/cover2.webp" className="w-96 h-96" alt="Custom Cover" />
      </div>
      <div className="flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center">
        <img data-aos="fade-right" src="/cover3.webp" className="w-96 h-96" alt="Complex Cover" />
        <div className="flex flex-col justify-start items-start p-2">
          <h1 data-aos="fade-left" className="text-3xl md:text-5xl mt-6 md:max-w-xl text-left">
            Complex Cover
          </h1>
          {/* <p data-aos="fade-up" className="green-text text-3xl md:max-w-xl mt-4 text-left">
            Starting at $899
          </p> */}
          <div className="space-y-2 mt-4 text-xl text-left">
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> 3 Cover concepts with front, spine, and back design
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Up to 4 fully licensed premium stock images per concept
            </p>
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> 3 Rounds of changes
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Appropriate for all genres, especially fiction
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
            Illustrated Cover
          </h1>
          {/* <p data-aos="fade-up" className="green-text text-3xl md:max-w-xl mt-4 text-left">
            Starting at $899
          </p> */}
          <div className="space-y-2 mt-4 text-xl text-left">
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> 1 Cover concept & Illustration with front, spine, and back design
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Black & white sketch phase with 2 rounds of changes
            </p>
            <p data-aos="fade-up-right">
              <span className="green-text">•</span> Color illustration phase with 2 rounds of changes
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Design phase with 1 round of changes (this round includes text placement)
            </p>
            <p data-aos="fade-up-left">
              <span className="green-text">•</span> Popular for fantasy, sci-fi, and children’s books
            </p>
            <button
              onClick={openModal}
              className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400"
            >
              Get Started!
            </button>
          </div>
        </div>
        <img data-aos="fade-right" src="/cover4.webp" className="w-96 h-96" alt="Illustrated Cover" />
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

export default DesignServices;