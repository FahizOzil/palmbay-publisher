import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar/>
      <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}></div>
      <div className='flex relative flex-col pt-20 justify-center items-center'>
          <p className='text-6xl'>Book Cover Design</p>
          <p className='pt-4 text-xl max-w-3xl text-center'>Silver Gate Publishing offers four different professional book cover design services tailored to meet the needs of any independent author based on their budget and design preferences. Learn more about our services below and how we can help you design a captivating book cover.</p>
          <p className='pt-8 text-xl italic max-w-3xl text-center'>*Cover Design and Interior Formatting are required services.</p>
          <button className="hidden md:block mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
      </div>
    </div>
  )
}

export default page