import React from 'react'
import { font } from './font/font'

const Process = () => {
  return (
    <div className={`${font.className} relative mt-12 w-full`}>
        <img src='/whitewood.png' className='w-full h-[25rem] object-cover' />
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-black px-4'>
                <div className='w-[50%] flex justify-center items-center'>
                    <img src='/process.webp'/>
                </div>
                <div className='w-[50%] flex flex-col items-center justify-center'>
                    <h1 className='text-5xl text-center font-bold'>The Silver Gate Process</h1>
                    <hr className="w-24 md:w-32 mt-6 border-2 border-yellow-600" />
                    <p className='pt-8 text-xl max-w-2xl text-center'>
                    Every author’s journey is unique, which is why we offer a customizable self-publishing process that puts you in the driver’s seat.
                    </p>
                    <button className="button-gradient mt-8 cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
                        Our Process!
                    </button>
                </div>
            <div/>
        </div>
    </div>
  )
}

export default Process