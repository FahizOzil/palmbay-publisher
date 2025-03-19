import React from 'react'
import { font } from '@/app/Components/font/font';

const SelfPublishingSection = () => {
  return (
    <div className={`${font.className} relative mt-48 flex flex-col md:flex-row w-full px-4 lg:px-16 py-12 gap-8`}>
      
      {/* Left Side - Table of Contents */}
      <div className="w-full h-fit md:w-1/4 bg-gray-100 rounded-lg p-6 shadow-md">
        <h3 className="text-teal-600  text-lg uppercase border-b pb-2">
          Table of Contents
        </h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li className="">Traditional Publishing vs. Self-Publishing</li>
          <li>Benefits of Self-Publishing</li>
          <li>How to Self-Publish a Book</li>
          <li>What Does It Cost to Self-Publish a Book?</li>
          <li>Pricing Your Book</li>
          <li>How Much Do Authors Make?</li>
          <li>Get Started With Publication</li>
          {/* <li>More Resources</li> */}
        </ul>
      </div>

      {/* Middle Section - Main Content */}
      <div className="w-full text-xl md:w-2/4">
        <p className="text-gray-700">
        As technology continues to reshape how we consume literature, self-publishing has become a powerful avenue for writers looking for greater control, flexibility, and direct access to their audience. However, publishing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of design choices, marketing strategies, and printing options that you need to navigate before your book finds its audience. Count on Palmetto Publishing to guide you along the way. In this complete guide, we’ll explore how to publish your own book and how Palmetto can help every step of the way.
        </p>
        <h2 className="text-4xl text-gray-900 mt-6">
          Traditional Publishing vs. Self-Publishing
        </h2>
        <p className="mt-4 text-gray-700">
        When it comes to publishing your book, authors can use traditional publishing or self-publishing services. Here’s what these processes entail and how they differ.
        </p>
        <h3 className="text-3xl  text-teal-600 mt-6">
          What Is Traditional Publishing?
        </h3>
        <p className="mt-4 text-gray-700">
        Traditional publishing is the time-tested method where authors submit their manuscripts to literary agents who act as intermediaries between authors and publishers. If accepted, the publisher handles the entire publishing process, including editing, cover design, printing, distribution, and marketing. Authors usually receive an advance against royalties, but a significant portion of the book’s earnings go to the publisher, literary agent, and intermediaries. While traditional publishing provides the support of an experienced team, it often involves a longer timeframe and less control for the author.
        </p>
      </div>

      {/* Right Side - Call to Action */}
      <div className="w-full h-fit md:w-1/4 customgreen text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <h3 className="text-2xl ">Get Started On Your Publishing Journey</h3>
        <button className="mt-4 button-gradient text-black px-6 py-2 rounded-md  hover:bg-yellow-400">
          GET STARTED!
        </button>
        <p className="mt-4">Or call us</p>
        <p className="text-2xl ">888 408 8965</p>
      </div>
    </div>
  )
}

export default SelfPublishingSection;
