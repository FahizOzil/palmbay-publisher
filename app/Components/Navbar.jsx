"use client";

import React, { useState } from "react";
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { font } from "./font/font";
import Link from "next/link";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { 
      title: "Publishing Services", 
      items: [
        { name: "Cover Design", href: "/services/cover-design" },
        { name: "Book Editing", href: "/services/book-editing" },
        { name: "Book Printing", href: "/services/book-printing" },
        { name: "Audiobook Publishing", href: "/services/audiobook-publishing" },
        // { name: "Social Media Consulting", href: "/services/social-media" },
        { name: "Illustrations", href: "/services/illustrations" },
        { name: "Interior Formatting", href: "/services/interior-formatting" },
        { name: "Book Distribution", href: "/services/book-distribution" },
        { name: "Marketing", href: "/services/marketing" }
      ]
    },
    { 
      title: "Guides", 
      items: [
        { name: "Self-Publishing Guide", href: "/guides/self-publishing" },
        { name: "Marketing Tips", href: "/guides/marketing-tips" },
        { name: "Writing Tips", href: "/guides/writing-tips" }
      ]
    },
    { 
      title: "About Us", 
      items: [
        { name: "Our Story", href: "/about/our-story" },
        { name: "Team", href: "/about/team" },
        { name: "Contact Us", href: "/about/contact" }
      ]
    },
    { 
      title: "Genres", 
      items: [
        { name: "Fiction", href: "/genres/fiction" },
        { name: "Non-Fiction", href: "/genres/non-fiction" },
        { name: "Sci-Fi", href: "/genres/sci-fi" },
        { name: "Romance", href: "/genres/romance" }
      ]
    }
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
        <Link href={"/"}>
          <img src="/logo1.png" alt="Logo" className="w-40 cursor-pointer md:w-60 h-12 md:h-16" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((menu, index) => (
            <li key={index} className="relative group">
              <button className="flex items-center text-xl hover:text-gray-300">
                {menu.title}
              </button>

              {/* Dropdown */}
              <ul 
                className="absolute left-0 top-full bg-white text-black shadow-lg p-4 w-60 rounded-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible"
              >
                {menu.items.map((item, i) => (
                  <li key={i} className="p-2 hover:bg-gray-100 rounded-md">
                    <a href={item.href} className="block text-lg">{item.name}</a>
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

      {/* Mobile Menu */}
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
              {menu.title} <FaChevronDown className={`ml-2 transform ${openDropdown === index ? "rotate-180" : "rotate-0"} transition-transform`} />
            </button>
            
            {/* Mobile Dropdown */}
            <ul
              className={`overflow-hidden bg-gray-800 rounded-md mt-2 p-2 transition-all duration-300 ${
                openDropdown === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {menu.items.map((item, i) => (
                <li key={i} className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md">
                  <a href={item.href} className="block w-full">{item.name}</a>
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
