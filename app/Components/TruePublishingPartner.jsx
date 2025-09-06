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
      <h1 className="text-4xl pt-12 text-center">Ready to Publish Your Book? Let's Bring Your Story to the World!</h1>
      <p className="text-xl max-w-5xl text-center pt-8">
        Palm Bay is more than just a self-publisher—we’re your dedicated partner, guiding you every step of the way from raw manuscript to publishing success. With our unmatched value and industry expertise, Palm Bay Publishing is the best choice for turning your vision into reality.
      </p>
      <p className="text-xl pt-8 max-w-5xl text-center">
        It’s time to share your work with the world. 
        Contact Palm Bay Publishing today through the
         button below or call us at <span className="text-xl font-bold">850 588-0888</span> to start 
         your publishing journey and get a book published! 
         Whether you want to publish your book or are looking for professional self-publishing services, we’re here to help.

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
