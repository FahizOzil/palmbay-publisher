import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'
import DesignServices from './DesignServices'
import BookCoverDesign from './BookCoverDesign'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative  w-full min-h-[30rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Cover Design</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
            Silver Gate Publishing offers four different professional book cover design services tailored to meet the needs of any independent author based on their budget and design preferences. Learn more about our services below and how we can help you design a captivating book cover.
          </p>
          <p className="pt-8 text-xl italic max-w-3xl">*Cover Design and Interior Formatting are required services.</p>   
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
      <DesignServices/>
      <BookCoverDesign/>
    </div>
  )
}

export default page
