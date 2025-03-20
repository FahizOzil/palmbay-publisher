import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'
import ContactBanner from '@/app/Components/ContactBanner'
import Footer from '@/app/Components/Footer'
import OneStopSilver from './OneStopSilver'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative w-full min-h-[30rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute left-0 w-[50%] h-full flex flex-col justify-center items-center text-black px-4">
          <p className="text-3xl pl-20 md:text-6xl">The Self-Publishing Process with Silver Gate</p>
        </div>
        <div className="absolute right-0 w-[50%] h-full flex flex-col justify-center items-center text-black px-4">
          <img src='/process.webp' className='h-80'/>
        </div>
      </div>
      <OneStopSilver/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page