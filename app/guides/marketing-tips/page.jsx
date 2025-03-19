import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'
import SelfPublishingSection from '../self-publishing/SelfPublishingSection'

const page = () => {
  return (
    <div>
    <div className={`${font.className} relative`}>
      <Navbar />
      <div className="relative w-full min-h-[30rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl mb-12 md:text-6xl">
          The Complete Guide to: <br /> Book Marketing
          </p>
        </div>
      </div>

      {/* Left-side image */}
      <img 
        src="/weird-moon.webp" 
        className="rounded-md h-64 absolute bottom-[-200px] left-[120px] z-10" 
      />

      {/* Centered Image */}
      <div className="relative w-full flex justify-center">
        <img 
          src="/book-marketing.webp" 
          className="rounded-md h-96 absolute bottom-[-200px] z-20" 
        />
      </div>

      {/* Right-side image FIXED */}
      <div className="w-full relative">
        <img 
          src="/weird.png" 
          className="rounded-md h-64 absolute bottom-[-200px] right-[120px] z-10" 
        />
      </div>
    </div>
      <SelfPublishingSection/>
    </div>
  )
}

export default page;
