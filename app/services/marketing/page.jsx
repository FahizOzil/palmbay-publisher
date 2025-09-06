import Apart from '@/app/Components/Apart'
import ContactBanner from '@/app/Components/ContactBanner'
import { font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import Solutions from '@/app/Components/Solutions'
import React from 'react'
import MarketingServices from './MarketingServices'
import MarketingProcess from './MarketingProcess'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative  w-full min-h-[25rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-white text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Marketing Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          You’ve poured your heart and soul into your book, crafting every sentence with care and precision. Now that your masterpiece is finished, we want to ensure all your hard work pays off. Our expert book marketing services and vital marketing materials can help you get your book noticed by readers, media outlets, and new audiences.
          </p>
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
      <Solutions word={"Marketing"}/>
      <MarketingServices/>
      <MarketingProcess/>
      <Apart/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page