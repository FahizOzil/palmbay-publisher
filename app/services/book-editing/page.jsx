import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'

import InteriorFormatting from '../cover-design/InteriorFormatting'
import ContactBanner from '@/app/Components/ContactBanner'
import Footer from '@/app/Components/Footer'
import Apart from '@/app/Components/Apart'
import EditingServices from './EditingServices'
import Sequence from './Sequence'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative  w-full min-h-[30rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Editing Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Elevate your book with Silver Gate’s comprehensive book editing services. Our experienced editors proofread and edit your manuscript, carefully reviewing its structure, tone, and textual flow to ensure a polished outcome. With a keen eye for detail, they also thoroughly check for grammar, punctuation, and spelling errors, resulting in a professional, high-quality manuscript ready to be printed. Learn more about all of our professional editing services below!
          </p>
          {/* <p className="pt-8 text-xl italic max-w-3xl">*Cover Design and Interior Formatting are required services.</p>    */}
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
      <EditingServices/>
      <Sequence/>
      <InteriorFormatting/>
      <Apart/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page
