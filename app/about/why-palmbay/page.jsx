import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import React from 'react'
import YouHaveAStory from './YouHaveAStory'
import Pics from './Pics'
import ContactForm from './ContactForm'
import FewReasons from './FewReasons'
import Alli from './Alli'
import Numbers from './Numbers'
import ContactBanner from '@/app/Components/ContactBanner'
import Footer from '@/app/Components/Footer'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative w-full min-h-[30rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute left-0 w-[50%] h-full flex flex-col justify-center items-center text-black px-4">
          <p className="text-3xl pl-20 md:text-7xl">Why Publish with Palm Bay</p>
        </div>
        <div className="absolute right-0 w-[50%] h-full flex flex-col justify-center items-center text-black px-4">
          <img src='/why-silvergate.webp'/>
        </div>
      </div>
      <YouHaveAStory/>
      <Pics/>
      <ContactForm/>
      <FewReasons/>
      <Alli/>
      <Numbers/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page