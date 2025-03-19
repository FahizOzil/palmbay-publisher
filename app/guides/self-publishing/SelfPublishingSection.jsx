import React from 'react'

const SelfPublishingSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row w-full px-4 lg:px-16 py-12 gap-8">
      
      {/* Left Side - Table of Contents */}
      <div className="w-full md:w-1/4 bg-gray-100 rounded-lg p-6 shadow-md">
        <h3 className="text-teal-600 font-bold text-lg uppercase border-b pb-2">
          Table of Contents
        </h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li className="font-semibold">Traditional Publishing vs. Self-Publishing</li>
          <li>Benefits of Self-Publishing</li>
          <li>How to Self-Publish a Book</li>
          <li>What Does It Cost to Self-Publish a Book?</li>
          <li>Pricing Your Book</li>
          <li>How Much Do Authors Make?</li>
          <li>Get Started With Publication</li>
          <li>More Resources</li>
        </ul>
      </div>

      {/* Middle Section - Main Content */}
      <div className="w-full md:w-2/4">
        <p className="text-gray-700">
          As technology continues to reshape how we consume literature, self-publishing has become a powerful avenue for writers...
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mt-6">
          Traditional Publishing vs. Self-Publishing
        </h2>
        <p className="mt-4 text-gray-700">
          When it comes to publishing your book, authors can use traditional publishing or self-publishing services...
        </p>
        <h3 className="text-xl font-bold text-teal-600 mt-6">
          What Is Traditional Publishing?
        </h3>
        <p className="mt-4 text-gray-700">
          Traditional publishing is the time-tested method where authors submit their manuscripts to literary agents...
        </p>
      </div>

      {/* Right Side - Call to Action */}
      <div className="w-full md:w-1/4 bg-teal-700 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <h3 className="text-xl font-bold">Get Started On Your Publishing Journey</h3>
        <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-md font-bold hover:bg-yellow-400">
          GET STARTED!
        </button>
        <p className="mt-4">Or call us</p>
        <p className="text-2xl font-bold">888 408 8965</p>
      </div>
    </div>
  )
}

export default SelfPublishingSection;
