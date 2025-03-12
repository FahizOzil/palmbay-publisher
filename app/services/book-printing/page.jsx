import Apart from '@/app/Components/Apart'
import ContactBanner from '@/app/Components/ContactBanner'
import { font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import Solutions from '@/app/Components/Solutions'
import React from 'react'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative  w-full min-h-[40rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Printing Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Ask any published author and they’ll tell you that few life experiences can beat the excitement of holding your book in your hands for the first time. After all of the work that goes into writing, editing, and designing, it feels like Christmas morning unboxing the first shipment of books hot off the press.
          </p>
          <p className="pt-8 text-xl max-w-3xl">When you’re ready to transform your words into a tangible work of art, Palmetto Publishing is your trusted partner for premium book printing services. We take pride in printing the highest-quality books and provide a seamless and exceptional printing experience for independent authors, bringing your words to life on the canvas of a professionally printed book.</p>   
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
      <Solutions word={"Printing"}/>
      {/* <AudioDesign/>
      <AudioSequence/>
      <AudioFormatting/> */}
      <Apart/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page