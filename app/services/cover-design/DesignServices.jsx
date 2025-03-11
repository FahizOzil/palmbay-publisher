import { font } from '@/app/Components/font/font'
import React from 'react'

const DesignServices = () => {
  return (
    <div className={`${font.className
    } flex flex-col mt-12 justify-center items-center text-black px-4 text-center`}>
          <p className="text-3xl md:text-6xl">Book Cover Design Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Check out our services below to find the right fit for your needs!
        </p>
          <p className="pt-8 text-xl italic max-w-3xl">*Cover Design and Interior Formatting are required services.</p>   
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>
  )
}

export default DesignServices