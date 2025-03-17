import React from 'react'
import { font } from '@/app/Components/font/font'

const PrintOnDemand = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center p-20`}>
        <h1 className='text-3xl md:text-5xl'>Available Print-on-Demand Trim Sizes</h1>
        <hr className='border-2 border-yellow-600 w-[20%] mt-8'/>
        <div className='flex justify-center items-center p-20 pb-4 pt-12 space-x-4'>
            <div className='flex flex-col'>
                <img src='/8585.webp'/>
                <p className='text-2xl text-center pt-2'>8.5" x 8.5"</p>
            </div>
            <div className='flex flex-col'>
                <img src='/710.webp'/>
                <p className='text-2xl text-center pt-2'>7" x 10"</p>
            </div>
            <div className='flex flex-col'>
                <img src='/58.webp'/>
                <p className='text-2xl text-center pt-2'>5" x 8"</p>
            </div>
            <div className='flex flex-col'>
                <img src='/5585.webp'/>
                <p className='text-2xl text-center pt-2'>5.5" x 8.5"</p>
            </div>
        </div>
        <div className='flex justify-center items-center p-20 pt-0 space-x-4'>
            <div className='flex flex-col'>
                <img src='/810.webp'/>
                <p className='text-2xl text-center pt-2'>8" x 10"</p>
            </div>
            <div className='flex flex-col'>
                <img src='/8511.webp'/>
                <p className='text-2xl text-center pt-2'>8.5" x 11"</p>
            </div>
            <div className='flex flex-col'>
                <img src='/1185.webp'/>
                <p className='text-2xl text-center pt-2'>11" x 8.5"</p>
            </div>
            <div className='flex flex-col'>
                <img src='/69.webp'/>
                <p className='text-2xl text-center pt-2'>6" x 9"</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-5xl'>Contact Us To Get Started!</h1>
            <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
        </div>
    </div>
  )
}

export default PrintOnDemand