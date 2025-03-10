"use client";

import React, { useState } from "react";
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { font } from "./font/font";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { 
      title: "Publishing Services", 
      items: [
        "Cover Design", "Book Editing", "Book Printing", "Audiobook Publishing", 
        "Social Media Consulting", "Illustrations", "Interior Formatting", 
        "Book Distribution", "Marketing"
      ] 
    },
    { title: "Guides", items: ["Self-Publishing Guide", "Marketing Tips", "Writing Tips"] },
    { title: "About Us", items: ["Our Story", "Team", "Contact Us"] },
    { title: "Genres", items: ["Fiction", "Non-Fiction", "Sci-Fi", "Romance"] },
  ];

  return (
    <nav className={`${font.className} sticky top-0 z-50 w-full text-white`}>
      
      {/* Top Bar with Phone */}
      <div className="customgreen w-full h-10 md:h-12 flex items-center justify-center md:justify-end px-4">
        <FaPhoneAlt className="text-lg md:text-xl mr-2" />
        <p className="text-sm md:text-xl font-extrabold tracking-wider">+310 564 9107</p>
      </div>

      {/* Navbar Container */}
      <div className="custombg shadow-black shadow-sm w-full py-4 flex justify-between items-center px-6 relative">
        
        {/* Logo */}
        <img src="/logo1.png" alt="Logo" className="w-40 md:w-60 h-12 md:h-16" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg relative">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center cursor-pointer hover:text-gray-300 focus:outline-none">
                {menu.title} <FaChevronDown className="ml-1 text-sm" />
              </button>

              {/* Dropdown */}
              <ul
                className={`absolute left-0 mt-2 w-72 bg-white text-black rounded shadow-lg transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible p-4 gap-4 ${
                  openDropdown === index ? "opacity-100 visible" : ""
                }`}
              >
                <img src="/thread-img.png.webp" alt="Thread" className="w-full h-20 object-cover rounded-md" />
                {menu.items.map((item, i) => (
                  <li key={i} className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Get Started Button */}
        <button className="hidden md:block button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
          Get Started!
        </button>

      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col space-y-4 px-6 py-4 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {menuItems.map((menu, index) => (
          <div key={index} className="relative">
            <button
              className="flex items-center justify-between w-full py-2 text-lg focus:outline-none"
              onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
            >
              {menu.title} <FaChevronDown className="ml-2" />
            </button>
            
            {/* Mobile Dropdown */}
            <ul
              className={`bg-gray-800 rounded-md mt-2 p-2 transition-all duration-300 ${
                openDropdown === index ? "block" : "hidden"
              }`}
            >
              {menu.items.map((item, i) => (
                <li key={i} className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Mobile Get Started Button */}
        <button className="button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
          Get Started!
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
