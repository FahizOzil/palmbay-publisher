import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { font } from "./font/font";

const Footer = () => {
  return (
    <footer className={`${font.className} bg-[#1A2539] text-white py-10`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="flex flex-col items-start">
            <img src="/logo-2.png" alt="Logo" className="w-60 mb-4" />
          </div>    

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm text-left">
            <div className="text-xl">
              <h3 className="mb-4 hover:text-gray-400 cursor-pointer">About</h3>
              <ul className="space-y-4">
                <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Our Process</li>
              </ul>
            </div>

            <div className="text-xl">
              <h3 className="hover:text-gray-400 cursor-pointer mb-4">Services</h3>
              <ul className="space-y-4">
                <li className="hover:text-gray-400 cursor-pointer">Cover Design</li>
                <li className="hover:text-gray-400 cursor-pointer">Editing</li>
              </ul>
            </div>

            <div className="text-xl">
              <h3 className="hover:text-gray-400 cursor-pointer mb-4">Genres</h3>
              {/* <ul className="space-y-4">
                <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                <li className="hover:text-gray-400 cursor-pointer">Reviews & Testimonials</li>
              </ul> */}
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2 mb-4">
                <FaPhoneAlt className="text-lg" />
                <a href="tel:+850 588-0888"><span className="font-bold text-lg">850 588-0888</span></a>
              </div>
              <div className="flex space-x-4">
                <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
                <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
                <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-400" />
                <FaTiktok className="text-xl cursor-pointer hover:text-gray-400" />
                <FaYoutube className="text-xl cursor-pointer hover:text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl text-left text-gray-400">
          © 2025 Palm Bay Publishing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
