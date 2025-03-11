import { font } from '@/app/Components/font/font'
import React from 'react'

const DesignServices = () => {
  return (
    <div className={`${font.className
    } flex flex-col mt-20 justify-center items-center text-black px-4 text-center`}>
          <p className="text-3xl md:text-4xl">Book Cover Design Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Check out our services below to find the right fit for your needs!</p>
          <p className="pt-8 text-xl italic max-w-3xl">*Our cover design services are automatically formatted for paperback books. Additional fees are required for converting to hardcover and/or e-book.</p>   
    </div>
  )
}

export default DesignServices