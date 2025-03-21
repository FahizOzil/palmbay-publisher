import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'
import ContactBanner from '@/app/Components/ContactBanner'
import Footer from '@/app/Components/Footer'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative w-full min-h-[25rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute left-0 h-full flex flex-col justify-center items-center text-black px-4">
          <p className="text-3xl text-center pl-20 md:text-6xl">Contact Silver Gate Publishing</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
            <p className="text-teal-500 mb-6">(888) 408-8965</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Address</h2>
            <p className="text-gray-600 mb-6">
              1501 Bell Isle Avenue<br />
              Suite 220<br />
              Mount Pleasant, SC 29464
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Office Hours</h2>
            <p className="text-gray-600 mb-2">Monday-Friday: 9am to 5pm EST</p>
            <p className="text-gray-600 mb-6">Saturday-Sunday: Closed</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Social</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-500 hover:text-teal-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Instagram Icon */}
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-3.043.44-4.142 1.54-1.1 1.1-1.467 2.516-1.54 4.142-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.627.44 3.043 1.54 4.142 1.1 1.1 2.516 1.467 4.142 1.54 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 3.043-.44 4.142-1.54 1.1-1.1 1.467-2.516 1.54-4.142.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.44-3.043-1.54-4.142-1.1-1.1-2.516-1.467-4.142-1.54-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4.958-10.958c-.774 0-1.4-.626-1.4-1.4s.626-1.4 1.4-1.4 1.4.626 1.4 1.4-.626 1.4-1.4 1.4z"/>
                </svg>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Facebook Icon */}
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* LinkedIn Icon */}
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-teal-500 hover:text-teal-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* YouTube Icon */}
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.247 31.247 0 0 0 0 12a31.247 31.247 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136A31.247 31.247 0 0 0 24 12a31.247 31.247 0 0 0-.502-5.814zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Have a question for us? Ask away!</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Have a question for us? Ask away!"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page