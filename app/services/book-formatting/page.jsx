"use client";

import React, { useState, useEffect } from "react";
import Apart from "@/app/Components/Apart";
import ContactBanner from "@/app/Components/ContactBanner";
import { font } from "@/app/Components/font/font";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Solutions from "@/app/Components/Solutions";
import BookFormattingServices from "./BookFormattingServices";
import ContactForm from "@/app/Components/ContactForm"; // Adjust the path if necessary

const Page = () => {
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
    <div className={`${font.className}`}>
      <Navbar />
      <div
        className="relative w-full min-h-[40rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-white text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Formatting Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
            Elevate your writing to the next level with a professionally designed and formatted book interior.
          </p>
          <p className="pt-6 text-xl max-w-3xl">
            Palm Bay Publishing draws from decades of collective experience to help you develop the layout of your interior pages so they perfectly speak to your readers. Learn more about how we can unlock your manuscript’s potential, transforming it into a polished masterpiece.
          </p>
          <button
            onClick={openModal}
            className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold bg-white text-black hover:bg-yellow-400"
          >
            Get Started!
          </button>
        </div>
      </div>
      <Solutions word={"Formatting"} />
      <BookFormattingServices />
      <Apart />
      <ContactBanner />
      <Footer />

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

export default Page;