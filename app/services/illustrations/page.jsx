import Apart from '@/app/Components/Apart'
import ContactBanner from '@/app/Components/ContactBanner'
import { font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import Solutions from '@/app/Components/Solutions'
import React from 'react'
import IllustrationPackages from './IllustrationPackages'
import IllustrationProcess from './IllustrationProcess'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative  w-full min-h-[25rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-white text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Illustration Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Bring your book to life with captivating illustrations created by one of our talented illustrators. Our artists are here to convey your story with a diverse range of illustration styles. Learn more about our book illustration services and find the best one for you!
          </p>
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
      <Solutions word={"Publishing"}/>
      {/* <CustomBookPrinting/>
      <HowWePrepare/>
      <Binding/>
      <WhyPrint/> */}
      <IllustrationPackages/>
      <IllustrationProcess/>
      <Apart/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page