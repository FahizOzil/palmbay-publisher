import { font } from '@/app/Components/font/font'
import React from 'react'

const Binding = () => {
  return (
    <div className={`${font.className} mt-24`}>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[40rem] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/leather.jpg')" }}
      >
        <div className="text-white px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Binding</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
            As you print your own book, we’ll help you find the ideal bookbinding option that best resonates with your book’s character and style and fulfills its purpose.
          </p>
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>

        {/* Card Section - Positioned Below the Button */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white p-6 rounded-tl-4xl rounded-br-4xl shadow-lg w-[90%] md:w-[50%] text-center">
            <p className="text-black text-lg font-semibold">Custom Binding Options Available</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Binding
