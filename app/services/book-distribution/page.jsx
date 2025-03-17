import Apart from '@/app/Components/Apart'
import ContactBanner from '@/app/Components/ContactBanner'
import { font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import Solutions from '@/app/Components/Solutions'
import React from 'react'
import DistributionServices from './DistributionServices'
import Sell from './Sell'
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
          With Silver Gate Publishing, your book can be available to readers across every major platform in hardcover, paperback, audiobook, and eBook formats. In addition to traditional bulk printing, we offer print-on-demand services that allow authors to sell more books without the risks of maintaining inventory. Best of all, you get to keep 100% of your hard-earned royalties
          </p>
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
      <Solutions word={"Distributing"}/>
      <DistributionServices/>
      <Sell/>
      <Apart/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}

export default page