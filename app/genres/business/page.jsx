import ContactBanner from '@/app/Components/ContactBanner';
import { font } from '@/app/Components/font/font';
import Footer from '@/app/Components/Footer';
import Navbar from '@/app/Components/Navbar';
import Solutions from '@/app/Components/Solutions';
import React from 'react';

// Importing icons (using react-icons for simplicity)
import { FaBook, FaEdit, FaEye, FaPaintBrush, FaPrint, FaBullhorn } from 'react-icons/fa';

const page = () => {
  return (
    <div className={`${font.className} min-h-screen flex flex-col`}>
      <Navbar />

      {/* Main Section with Whitewood Background */}
      <div
        className="relative w-full min-h-[30rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="relative h-full flex flex-col justify-center items-center text-black px-4">
          <h1 className="text-3xl md:text-5xl mt-36 font-bold text-center">
            Business Genre Book Publishing
          </h1>
          <p className="text-lg md:text-xl text-center mt-4 max-w-3xl">
            Publishing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of design choices, marketing strategies, and printing options that you need to navigate before your book finds its audience. Count on Silver Gate Publishing to guide you along the way.
          </p>
        </div>
      </div>

      <section className="mb-12 mt-12 px-14">
        <p className="text-black text-lg leading-relaxed">
          Share your wisdom and grow your brand by publishing business books. Palmetto Publishing is the perfect partner for writers of all levels of experience. We help authors find self-publishing success and are proud of our work with clients who’ve published business books.
        </p>
        <p className="text-black text-lg leading-relaxed mt-4">
          Take advantage of our expertise at any stage of the writing journey. We believe you have something important to say. And we can’t wait to hear it and help you share it with the world.
        </p>
      </section>

      <Solutions />

      {/* Business Books for Busy Authors Section with Dark Blue Background */}
      <div
        className="w-full min-h-[40rem] bg-[#1A2A44] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/dark-blue-texture.png')" }}
      >
        <div className="h-full flex flex-col md:flex-row justify-center items-start text-white px-4 md:px-8 py-12">
          {/* Left Column: Text Content (Heading, Paragraphs, First List) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Business Books for Busy Authors
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mt-4"></div>

            <p className="text-lg md:text-xl mt-6 max-w-md">
              The popularity of business books is on the rise. Readers want to learn from industry experts and are willing to invest their time and money to do so.
            </p>
            <p className="text-lg md:text-xl mt-4 max-w-md">
              But you can benefit even more by approaching the business genre from the writer’s side. In addition to providing you with an extra source of income, writing a book is one of the best ways to grow your brand.
            </p>

            {/* First List */}
            <p className="text-lg md:text-xl mt-6 max-w-md">
              Writers gain multiple advantages over their competitors. A business book can:
            </p>
            <ul className="mt-4 space-y-4 text-lg w-full">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Establish you as an industry expert</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Build consumer trust</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Grow your followers</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Image and Second List */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-center mt-8 md:mt-0">
            {/* Image */}
            <div className="relative">
              <img
                src="/business.webp"
                alt="Business Books"
                className="w-full max-w-md rounded-lg"
              />
              {/* Decorative Element */}
              <div className="absolute top-2 right-2 w-6 h-6 text-[#00C4B4] text-2xl">✨</div>
            </div>

            {/* Second List (Below Image) */}
            <ul className="mt-6 space-y-4 text-lg w-full max-w-md">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Increase your marketing channels</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Lead to speaking events and other opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Earn money</span>
              </li>
            </ul>

            {/* Final Paragraph */}
            <p className="text-lg md:text-xl mt-6 max-w-md">
              The average length of a business book runs from 30,000 to 70,000 words. The project requires commitment, but the potential pay-off is enormous.
            </p>
          </div>
        </div>
      </div>

      {/* The Benefits of Self-Publishing Section with Whitewood Background */}
      <div
        className="w-full min-h-[30rem] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="flex flex-col justify-center items-center text-black px-4 md:px-8 py-12">
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-32 h-32 border-4 border-b-cyan-300 border-t-yellow-600 border-l-yellow-600 border-r-cyan-300 rounded-full opacity-50"></div>
          {/* <div className="absolute bottom-8 left-8 w-6 h-6 text-[#00C4B4] text-2xl">✨</div> */}

          {/* Heading and Underline */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A2A44]">
            The Benefits of Self-Publishing
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mt-4"></div>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-center mt-6 max-w-3xl">
            Once you’ve written the book, you have an important decision to make. Here’s why self-publishing trumps traditional book publishing — particularly for entrepreneurs:
          </p>

          {/* Two-Column List */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8 w-full max-w-3xl">
            {/* Left Column */}
            <ul className="space-y-4 text-lg w-full md:w-1/2">
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>You’re guaranteed publication</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>You keep creative control</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>You can address either general or niche audiences</span>
              </li>
            </ul>

            {/* Right Column */}
            <ul className="space-y-4 text-lg w-full md:w-1/2">
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>There’s a faster turnaround to advertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>You retain a much higher percentage of royalties</span>
              </li>
            </ul>
          </div>

          {/* Final Paragraph */}
          <p className="text-lg md:text-xl text-center mt-6 max-w-3xl">
            Self-publishing your business books will allow you to realize greater gains more quickly.
          </p>
        </div>
      </div>

      {/* How Silver Gate Publishing Can Help You Master the Business Genre Section */}
      <div className="w-full min-h-[40rem] bg-white py-12">
        <div className="flex flex-col justify-center items-center text-black px-4 md:px-8">
          {/* Heading and Underline */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A2A44]">
            How Silver Gate Publishing Can Help You Master the Business Genre
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mt-4"></div>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-center mt-6 max-w-3xl">
            We help you whether you’re just starting a project or are in the final stages of your book. We’re here to help you master the business genre. Work with Silver Gate Publishing to take your business book from concept to reality. We have the expertise to help you succeed.
          </p>

          {/* List with Icons */}
          <div className="mt-6 space-y-6 w-full max-w-3xl">
            {/* Book Writing */}
            <div className="flex items-start">
              <FaBook className="text-[#00C4B4] text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#00C4B4]">Book Writing</h3>
                <p className="text-lg mt-2">
                  We can help you stay on track to complete your book. Though we’re happy to help, we don’t ghostwrite or check your work for plagiarism. We can help you stay on track to complete your book by providing you with writing resources and blog posts on how to write books that can be read on our website or printed on the best business books of all time. Here’s what we can help you with:
                </p>
                <ul className="mt-2 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>A few tips to keep you on track while you write your first draft</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Provide you with book ideas if you’re stuck</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Give you a type of genre and reader. What knowledge can you impart to your reader—to help them succeed in business, and how can you create a process to help them succeed?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Offer tips on writing a business book before the writing process is done. A few tips are a part of the process</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Book Editing */}
            <div className="flex items-start">
              <FaEdit className="text-[#00C4B4] text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#00C4B4]">Book Editing</h3>
                <p className="text-lg mt-2">
                  Publishing offers a variety of editing tactics to find the right one. Consider what you need for your book to be the best it can be. We offer editing services to help you polish your book for the business genre. We offer:
                </p>
                <ul className="mt-2 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Developmental editing: If you’re in the business genre with complex topics, we can help you with a comprehensive book that’s clear and concise. We can help you with your plot, structure, and character development to ensure maximum readability and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Line editing: We can help you with your business book to ensure that your message is clear and concise. We can help you with your sentence structure, grammar, and punctuation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Copyediting: We can help you with your business book to ensure that your message is clear and concise. We can help you with your grammar, spelling, and punctuation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Take your book and polish the book for you. We can help you with grammar, spelling, and punctuation to ensure maximum readability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Book Cover Design */}
            <div className="flex items-start">
              <FaPaintBrush className="text-[#00C4B4] text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#00C4B4]">Book Cover Design</h3>
                <p className="text-lg mt-2">
                  Your book cover design is a critical part of your book. We can help you with a high-quality cover that will attract readers. We can help you with a cover that will attract readers and help you with the process and design to complete your book. We can help you with:
                </p>
                <ul className="mt-2 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>A cover that will attract readers and help you with the process and design to complete your book</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Book Formatting */}
            <div className="flex items-start">
              <FaEye className="text-[#00C4B4] text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#00C4B4]">Book Formatting</h3>
                <p className="text-lg mt-2">
                  Your book needs to be formatted from the first page to the last. A Palmetto Publishing book layout ensures that your book will be formatted correctly. We can help you with:
                </p>
                <ul className="mt-2 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Formatting for business books. We can help you with the layout of your book to ensure that your book is formatted correctly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Our formatting services can help you with the layout of your book to ensure that your book is formatted correctly</span>
                  </li>
                </ul>
                <p className="text-lg mt-2">
                  If you need the business genre for your book, we can take care of that for you.
                </p>
              </div>
            </div>

            {/* Book Printing */}
            <div className="flex items-start">
              <FaPrint className="text-[#00C4B4] text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#00C4B4]">Book Printing</h3>
                <p className="text-lg mt-2">
                  Palmetto Publishing partners with high-quality printers for the best print-on-demand publishing. We can help you with the option of printing your book in hardcover or softcover. We can help you with:
                </p>
                <ul className="mt-2 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Printing your book in hardcover or softcover. We can help you with the option of printing your book in hardcover or softcover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>We can help you with the printing of your book to ensure that your book is printed correctly</span>
                  </li>
                </ul>
                <p className="text-lg mt-2">
                  We can help you with the printing of your book to ensure that your book is printed correctly. It’s a good option for business books.
                </p>
              </div>
            </div>

            {/* Book Marketing */}
            <div className="flex items-start">
              <FaBullhorn className="text-[#00C4B4] text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#00C4B4]">Book Marketing</h3>
                <p className="text-lg mt-2">
                  Writing and publishing a book is only part of the work. We can help you with marketing your book to ensure that more people will read your book. We can help you with:
                </p>
                <ul className="mt-2 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-[#00C4B4] mr-2">•</span>
                    <span>Marketing your book to ensure that more people will read your book</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactBanner />
      <Footer />
    </div>
  );
};

export default page;