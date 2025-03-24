import ContactBanner from '@/app/Components/ContactBanner';
import { font } from '@/app/Components/font/font';
import Footer from '@/app/Components/Footer';
import Navbar from '@/app/Components/Navbar';
import Solutions from '@/app/Components/Solutions';
import React from 'react';

// Importing icons (you can use SVGs or icon libraries like react-icons)
import { FaUser, FaEdit, FaEye, FaPaintBrush, FaPrint } from 'react-icons/fa';

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
            Non-Fiction Genre Book Writing
          </h1>
          <p className="text-lg md:text-xl text-center mt-4 max-w-3xl">
            Publishing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of design choices, marketing strategies, and printing options that you need to navigate before your book finds its audience. Count on Palmetto Publishing to guide you along the way.
          </p>
        </div>
      </div>
      <Solutions />

      {/* What Counts as Non-Fiction Section with Blue Background */}
      <div
        className="w-full min-h-[40rem] bg-[#1A2A44] bg-cover bg-center"
        style={{ backgroundImage: "url('/dark-blue-texture.png')" }}
      >
        <div className="h-full flex flex-col md:flex-row justify-center items-start text-white px-4 md:px-8 py-12">
          {/* Left Column: Text Content (Heading, Paragraph, First List) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Counts as Non-Fiction?
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mt-4"></div>
            <p className="text-lg md:text-xl mt-6 max-w-md">
              Non-fiction is one of the broadest categories of writing. It includes every kind of writing except fictional stories and poetry. Some of the most popular types of non-fiction books include:
            </p>

            {/* First Column of List */}
            <ul className="mt-6 space-y-4 text-lg w-full">
              <li>
                <span className="">• Art:</span> Art books contain pictures of different art forms, typically with descriptions or explanations of the images.
              </li>
              <li>
                <span className="">• Business:</span> Books explaining business topics or instructions on how to become better business people are common.
              </li>
              <li>
                <span className="">• Cooking:</span> Cookbooks and recipe collections remain popular, particularly specially books focused on specific cuisines or diets.
              </li>
              <li>
                <span className="">• Guides:</span> How-to guides cover every imaginable subject, from gardening to traveling to electrical engineering.
              </li>
              <li>
                <span className="">• Health:</span> These books range from simple explanations of common conditions to in-depth resources for medical experts.
              </li>
            </ul>
          </div>

          {/* Right Column: Image and Second List */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-center mt-8 md:mt-0">
            {/* Image */}
            <div className="relative">
              <img
                src="/non-fiction-main.webp"
                alt="Non-Fiction"
                className="w-full max-w-md rounded-lg"
              />
            </div>

            {/* Second Column of List (Below Image) */}
            <ul className="mt-6 space-y-4 text-lg w-full max-w-md">
              <li>
                <span className="">• Humor:</span> Joke books, collections of funny anecdotes, and humorous essays are all popular non-fiction books.
              </li>
              <li>
                <span className="">• Memoirs and biographies:</span> Authors recount their lives in these books, usually from a specific point of view. If someone else writes about a person’s life, it’s a biography.
              </li>
              <li>
                <span className="">• Relationships:</span> Everyone can benefit from understanding how relationships work. These books focus on specific types of conflict, like parent-child or romantic relationships.
              </li>
              <li>
                <span className="">• Self-help:</span> These books give the reader advice on improving problems in their life, from alcoholism to social anxiety.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Non-Fiction Books Section with Reddish-Brown Background */}
      <div className="w-full min-h-[30rem] bg-[#8B3A2A] py-12">
        <div className="flex flex-col justify-center items-center text-white px-4 md:px-8">
          {/* Heading and Underline */}
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            The Non-Fiction Books
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mt-4"></div>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-center mt-6 max-w-3xl">
            Writing non-fiction books is a rewarding way to share your knowledge with other people. If you’re an expert on something, you can write a non-fiction book explaining it. Examples of some excellent self-published non-fiction books include:
          </p>

          {/* Two-Column List */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8 w-full max-w-3xl">
            {/* Left Column */}
            <ul className="space-y-4 text-lg w-full md:w-1/2">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>
                  <span className="">Business genre:</span> A Business Roadmap for Professional Photo Organizers, by Cathi Nelson and Jill B. Yesko
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>
                  <span className="">History genre:</span> Victory Day, by Kenneth Scarlett
                </span>
              </li>
            </ul>

            {/* Right Column */}
            <ul className="space-y-4 text-lg w-full md:w-1/2">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>
                  <span className="">Self-help genre:</span> Ballad of my Fearless Heroine, by Vladimir Tsesis
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>
                  You can find other examples of great non-fiction books by exploring Palmetto Publishing’s non-fiction genre collection.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Benefits of Self-Publishing Non-Fiction Section with Whitewood Background */}
      <div
        className="w-full min-h-[30rem] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="flex flex-col justify-center items-center text-black px-4 md:px-8 py-12">
          {/* Heading and Underline */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A2A44]">
            The Benefits of Self-Publishing Non-Fiction
          </h2>
          <div className="w-28 h-1 bg-[#D4AF37] mt-12"></div>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-center mt-12 max-w-4xl">
            If you’ve written a non-fiction book, the next step is publishing it. For many authors, self-publishing their non-fiction work is the best solution. When you self-publish, you’ll see benefits like:
          </p>

          {/* Two-Column List */}
          <div className="mt-12 flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-16 w-full max-w-3xl">
            {/* Left Column */}
            <ul className="space-y-8 text-lg w-full md:w-1/2">
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>Maintaining control over your work</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>Avoiding the hassle of finding an agent and a publishing contract</span>
              </li>
            </ul>

            {/* Right Column */}
            <ul className="space-y-4 text-lg w-full md:w-1/2">
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>Retaining a significantly larger percentage of your royalties</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00C4B4] mr-2">•</span>
                <span>Marketing your book to the exact audience you had in mind when you wrote it</span>
              </li>
            </ul>
          </div>

          {/* Final Paragraph */}
          <p className="text-lg md:text-xl text-center mt-12 max-w-3xl">
            Self-publishing is a fast, effective way to take your book from a file on your computer to a physical object you can sell without giving up your rights to a publisher.
          </p>
        </div>
      </div>

      {/* Publish Your Non-Fiction Book with Silvergate Section */}
      <div className="w-full min-h-[40rem] bg-white py-12">
        <div className="flex flex-col justify-center items-center text-black px-4 md:px-8">
          {/* Heading and Underline */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A2A44]">
            Publish Your Non-Fiction Book with Silvergate
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mt-4"></div>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-center mt-6 max-w-3xl">
            Once you’ve decided to publish your book, it’s time to find the right self-publishing platform. Silvergate Publishing is a top-tier self-publishing service that will support your book every step of the way from conception and publication to marketing. With Silvergate Publishing, you can make the most of our services, such as:
          </p>

          {/* List with Icons */}
          <div className="mt-6 space-y-6 w-full max-w-3xl">
            {/* Writing Resources */}
            <div className="flex items-start">
              <div>
              <FaUser className="text-[#00C4B4] text-3xl mr-4 mt-1" />
                <h3 className="text-xl font-bold mt-2 text-[#00C4B4]">Writing Resources</h3>
                <p className="text-lg mt-2">
                  While writing the book remains your responsibility, looking for encouragement or advice never hurts. If you’re still finishing your non-fiction book(s), Silvergate offers a variety of writing resources. You can read The Complete Guide to the Book Writing Process or explore Silvergate’s wide range of blog posts on how to write books. These resources can help you stay on track and develop a solid first draft.
                </p>
              </div>
            </div>

            {/* Excellent Editing */}
            <div className="flex items-start">
              <div>
              <FaEdit className="text-[#00C4B4] text-3xl mr-4 mt-1" />
                <h3 className="text-xl font-bold mt-2 text-[#00C4B4]">Excellent Editing</h3>
                <p className="text-lg mt-2">
                  Once a book is written, it’s time to polish it up. Editing your work can be difficult. You may be too attached to your work to edit it effectively, or you may have spent so much time working on the book that you’ve become blind to typos and mistakes. That’s where Silvergate’s book editing services can help. You can work with one of our experienced book editors to polish and prepare your book for publication. Whether you need simple line editing to spot mistakes or in-depth developmental editing to tighten up your book, Silvergate’s book editors will help make your writing the best it can be.
                </p>
              </div>
            </div>

            {/* Final Formatting */}
            <div className="flex items-start">
              <div>
              <FaEye className="text-[#00C4B4] text-3xl mr-4 mt-1" />
                <h3 className="text-xl font-bold mt-2 text-[#00C4B4]">Final Formatting</h3>
                <p className="text-lg mt-2">
                  Books must be carefully formatted to create a cohesive structure before publishing—specific formatting depends on your preferred publishing methods (and how you want the final product to look). Non-fiction books often require in-depth formatting. For instance, cookbooks, art books, and self-help books all need specific layouts to make them legible and functional. Work with Silvergate book design services to format your book for your chosen publication method.
                </p>
              </div>
            </div>

            {/* Creative Covers */}
            <div className="flex items-start">
              <div>
              <FaPaintBrush className="text-[#00C4B4] text-3xl mr-4 mt-1" />
                <h3 className="text-xl font-bold mt-2 text-[#00C4B4]">Creative Covers</h3>
                <p className="text-lg mt-2">
                  Many people do judge a book by its cover. You need a high-quality cover to make your book appealing to your target audience. The graphic designers at Silvergate Publishing provide top-tier book cover design services for non-fiction books like yours. This service ensures that your book makes a great first impression on potential readers.
                </p>
              </div>
            </div>

            {/* Print Publishing */}
            <div className="flex items-start">
              <div>
              <FaPrint className="text-[#00C4B4] text-3xl mr-4 mt-1" />
                <h3 className="text-xl font-bold mt-2 text-[#00C4B4]">Print Publishing</h3>
                <p className="text-lg mt-2">
                  After all of the editing and book design tasks are complete, you can publish your book. Whether interested in softcover or hardcover book printing, Silvergate’s book publishing services can help you get your book into physical form. You’ll have complete control over everything from the size of the book to the type of paper used, so your final product will always live up to your expectations. Plus, you can order hardcover books, softcover books, or both.
                </p>
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