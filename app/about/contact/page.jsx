import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'
import ContactBanner from '@/app/Components/ContactBanner'
import Footer from '@/app/Components/Footer'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative w-full min-h-[25rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute left-0 h-full flex flex-col justify-center items-center text-black px-4">
          <p className="text-3xl text-center pl-20 md:text-6xl">Contact Silver Gate Publishing</p>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default page