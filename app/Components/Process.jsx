import React from 'react'
import { font } from './font/font'
import Link from 'next/link'

const Process = () => {
  return (
    <div className={`${font.className} relative mt-12 w-full`}>

      {/* Background Image */}
      <img src='/whitewood.png' className='w-full h-[25rem] object-cover' alt="Background" />

      {/* Content Wrapper */}
      <div className='absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-center items-center text-black px-4'>

        {/* Left: Process Image */}
        <div className='w-full md:w-[50%] flex justify-center items-center'>
          <img src='/process.webp' className='w-[80%] md:w-auto max-w-sm' alt="Process" />
        </div>

        {/* Right: Text & Button */}
        <div className='w-full md:w-[50%] flex flex-col items-center justify-center text-center px-4'>
          <h1 className='text-3xl md:text-5xl font-bold'>The Palm Bay Process</h1>
          <hr className="w-24 md:w-32 mt-6 border-2 border-yellow-600" />
          <p className='pt-6 text-lg md:text-xl max-w-2xl'>
            Every author’s journey is unique, which is why we offer a customizable self-publishing process that puts you in the driver’s seat.
          </p>
          <Link href="/about/our-process"><button className="button-gradient mt-8 px-6 py-3 text-lg md:text-xl rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
            Our Process!
          </button></Link>
        </div>

      </div>

    </div>
  )
}

export default Process
