import Apart from '@/app/Components/Apart'
import ContactBanner from '@/app/Components/ContactBanner'
import { font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import Solutions from '@/app/Components/Solutions'
import React from 'react'
// import CustomBookPrinting from './CustomBookPrinting'
// import HowWePrepare from './HowWePrepare'
// import Binding from './Binding'
// import WhyPrint from './WhyPrint'

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div className="relative  w-full min-h-[40rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Book Distributing Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Elevate your writing to the next level with a professionally designed and formatted book interior.
          </p>
          <p className="pt-6 text-xl max-w-3xl">Silver Gate Publishing draws from decades of collective experience to help you develop the layout of your interior pages so they perfectly speak to your readers. Learn more about how we can unlock your manuscript’s potential, transforming it into a polished masterpiece.</p>   
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
      <Solutions word={"Distributing"}/>
      {/* <CustomBookPrinting/>
      <HowWePrepare/>
      <Binding/>
      <WhyPrint/> */}
      <Apart/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page