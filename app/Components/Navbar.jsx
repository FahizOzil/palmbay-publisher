"use client";

import React, { useState } from "react";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { font } from "./font/font";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

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
      <div className="customgreen w-full md:h-12 h-6 py-4 md:py-0 flex md:justify-end justify-center items-center px-4">
        <FaPhoneAlt className="text-xl mr-2" />
        <p className="text-xl font-extrabold tracking-wider">+310 564 9107</p>
      </div>

      <div className="custombg shadow-black shadow-sm w-full py-4 flex justify-between items-center px-6 relative">
        <img src="/logo1.png" alt="Logo" className="w-60 h-16" />

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

              <ul
                className={`absolute left-0 mt-2 w-72 bg-white flex flex-col text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4  gap-4`}
              >
                <img src="/thread-img.png.webp"/>
                {menu.items.map((item, i) => (
                  <li key={i} className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <button className="button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
          Get Started!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
