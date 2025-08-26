"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { font } from "./font/font";
import Link from "next/link";
import ContactForm from "./ContactForm"; // Adjust the path if necessary

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const menuItems = [
    {
      title: "Publishing Services",
      items: [
        { name: "Cover Design", href: "/services/cover-design.html", icon: "/cd-icon.png" },
        { name: "Book Editing", href: "/services/book-editing.html", icon: "/ed-icon.png" },
        { name: "Book Printing", href: "/services/book-printing.html", icon: "/bp-icon.png" },
        { name: "Audiobook Publishing", href: "/services/audiobook-publishing.html", icon: "/ab-icon.png" },
        { name: "Illustrations", href: "/services/illustrations.html", icon: "/il-icon.png" },
        { name: "Interior Formatting", href: "/services/book-formatting.html", icon: "/itf-icon.png" },
        { name: "Book Distribution", href: "/services/book-distribution.html", icon: "/bd-icon.webp" },
        { name: "Marketing", href: "/services/marketing.html", icon: "/m.png" },
      ],
    },
    {
      title: "Guides",
      items: [
        { name: "How To Self-Publish A Book: The Complete Guide", href: "/guides/self-publishing.html", icon: "/yellow-dress.webp" },
        { name: "The Complete Guide To Marketing A Book", href: "/guides/marketing-tips.html", icon: "/book-marketing-2.jpg.webp" },
        { name: "The Complete Guide To Writing A Book", href: "/guides/book-writing-guide.html", icon: "/complete.webp" },
      ],
    },
    {
      title: "About Us",
      items: [
        { name: "Our Process", href: "/about/our-process.html", icon: "/op-icon.png" },
        { name: "Why Palm Bay?", href: "/about/why-palmbay.html", icon: "/ws-icon.png" },
        { name: "FAQs", href: "/about/faqs.html", icon: "/fa-icon.png" },
        { name: "Contact Us", href: "/about/contact.html", icon: "/cu-icon.png" },
      ],
    },
    {
      title: "Genres",
      items: [
        { name: "Fiction", href: "/genres/fiction.html", icon: "/f-icon.png" },
        { name: "Non-Fiction", href: "/genres/non-fiction.html", icon: "/nf-icon.png" },
        { name: "Business", href: "/genres/business.html", icon: "/b-icon.png" },
        { name: "How-To", href: "/genres/how-to.html", icon: "/ht-icon.png" },
        { name: "Self Help", href: "/genres/self-help.html", icon: "/sh-icon.png" },
        { name: "Religious", href: "/genres/religious.html", icon: "/r-icon.png" },
        { name: "Inspirational", href: "/genres/inspirational.html", icon: "/i-icon.png" },
        { name: "Cook Books", href: "/genres/cook-book.html", icon: "/cb-icon'.png" },
        { name: "Children's Books", href: "/genres/c-books.html", icon: "/cb-icon.png" },
        { name: "Autobiographies", href: "/genres/autobiography.html", icon: "/abio-icon.png" },
        { name: "Art", href: "/genres/art.html", icon: "/art-icon.png" },
      ],
    },
  ];

  return (
    <nav className={`${font.className} sticky top-0 z-50 w-full text-white`}>
      {/* Top Bar with Phone */}
      <div className="customgreen w-full h-10 md:h-12 flex items-center justify-center md:justify-end px-4">
        <FaPhoneAlt className="text-lg md:text-xl mr-2" />
       <a href="tel:+8505880888"><p className="text-sm md:text-xl font-extrabold tracking-wider">+850 588-0888</p></a>
      </div>

      {/* Navbar Container */}
      <div className="custombg shadow-black shadow-sm w-full py-4 flex justify-between items-center px-6 relative">
        {/* Logo */}
        <Link href={"/"}>
          <img src="/logo-2.png" alt="Logo" className="w-40 cursor-pointer md:w-[150px] h-12 md:h-24" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((menu, index) => (
            <li key={index} className="relative group">
              <button className="flex items-center text-xl hover:text-gray-300">
                {menu.title}
              </button>

              {/* Desktop Dropdown */}
              <div
                className="fixed left-2 mt-8 right-2 top-[calc(2.5rem+48px)] bg-white text-black shadow-lg rounded-b-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible"
              >
                <div className="max-w-7xl mx-auto p-6">
                  <ul className="grid grid-cols-3 lg:grid-cols-3 gap-6">
                    {menu.items.map((item, i) => (
                      <li key={i} className="p-2 hover:bg-gray-100 rounded-md">
                        <a
                          href={item.href}
                          className={`block text-lg ${
                            menu.title === "Guides" ? "flex flex-col items-center" : "flex items-center"
                          }`}
                        >
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt={`${item.name} icon`}
                              className={`${
                                menu.title === "Guides" ? "w-80 h-56 mb-2" : "w-10 h-9 mr-2"
                              }`}
                            />
                          )}
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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

        {/* Get Started Button (Desktop) */}
        <button
          onClick={openModal}
          className="hidden md:block button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400"
        >
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
              {menu.title}{" "}
              <FaChevronDown
                className={`ml-2 transform ${
                  openDropdown === index ? "rotate-180" : "rotate-0"
                } transition-transform`}
              />
            </button>

            {/* Mobile Dropdown */}
            <div
              className={`overflow-hidden bg-gray-800 rounded-md mt-2 transition-all duration-300 ${
                openDropdown === index ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {menu.items.map((item, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md">
                      <a href={item.href} className="block w-full">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Get Started Button (Mobile) */}
        <button
          onClick={openModal}
          className="button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400"
        >
          Get Started!
        </button>
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
    </nav>
  );
};

export default Navbar;
