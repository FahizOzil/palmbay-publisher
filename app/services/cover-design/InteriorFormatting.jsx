import { font } from '@/app/Components/font/font'
import React from 'react'

const InteriorFormatting = () => {
  return (
    <div className={`${font.className} mt-20`}>
        <div className="relative  w-full min-h-[30rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Interior Formatting</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Interior Formatting goes hand in hand with our Cover Design Services. This service ensures your manuscript is professionally formatted and optimized for publishing. Utilizing both services gives you a seamless publishing experience, letting us handle all the technical aspects of layout, typography, and design.
          </p>
          <p className="pt-8 text-xl italic max-w-3xl">*Cover Design and Interior Formatting are required services.</p>   
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
      </div>
    </div>
  )
}

export default InteriorFormatting