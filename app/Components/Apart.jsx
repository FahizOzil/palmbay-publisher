import React from 'react'
import { font } from './font/font'

const Apart = () => {
  return (
    <div className={`${font.className} relative mt-12 w-full`}>
      <img src='/whitewood.png' className='w-full h-screen object-cover' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-black px-4'>
        <h1 className='text-5xl text-center font-bold'>What Sets Us Apart</h1>
        <hr className="w-24 md:w-32 mt-6 border-2 border-yellow-600" />
        <p className='pt-8 text-xl max-w-2xl text-center'>
          At Silver Gate Publishing, we put authors first and strive to give you the best publishing experience possible. By working with us, you’re guaranteed:
        </p>
        <div className='flex flex-col justify-center items-center mt-12'>
            <div className='flex space-x-8'>
                <div className='bg-white flex rounded-tl-4xl rounded-br-4xl p-8'>
                  <div className='w-[50%] flex flex-col'>
                    <p className='text-4xl font-bold text-teal-600'>Individualized <br/>Communication</p>
                    <p className='text-xl text-black mt-4'>throughout the entire  publishing process</p>
                  </div>
                  <div className='w-[50%] flex justify-center items-center'>
                      <img src='/comms.webp' className='w-40 h-36'/>
                  </div>
                </div>
                <div className='bg-white flex rounded-tl-4xl rounded-br-4xl p-8'>
                  <div className='w-[50%] flex flex-col'>
                    <p className='text-4xl font-bold text-teal-600'>World Class  <br/>Publishing</p>
                    <p className='text-xl text-black mt-4'>to help your book stand out in the marketplace</p>
                  </div>
                  <div className='w-[50%] flex justify-center items-center'>
                      <img src='/publish.webp' className='w-40 h-36'/>
                  </div>
                </div>
            </div>
            <div className='flex space-x-8 p-8 pt-6'>
                <div className='bg-white flex rounded-tl-4xl rounded-br-4xl p-8'>
                  <div className='w-[50%] flex flex-col'>
                    <p className='text-4xl font-bold text-teal-600'>100% </p>
                    <p className='text-xl text-black '>Satisfaction</p>
                  </div>
                  <div className='w-[50%] flex justify-end items-center'>
                      <img src='/satisfy.webp' className='w-60 h-36'/>
                  </div>
                </div>
                <div className='bg-white flex rounded-tl-4xl rounded-br-4xl p-8'>
                  <div className='w-[50%] flex flex-col'>
                    <p className='text-4xl font-bold text-teal-600'>Highest Quality </p>
                    <p className='text-xl text-black mt-4'>hardcover and paperback printing</p>
                  </div>
                  <div className='w-[50%] flex justify-center items-center'>
                      <img src='/quality.webp' className='w-40 h-36'/>
                  </div>
                </div>
                <div className='bg-white flex rounded-tl-4xl rounded-br-4xl p-8'>
                  <div className='w-[50%] flex flex-col'>
                    <p className='text-4xl font-bold text-teal-600'>100% </p>
                    <p className='text-xl text-black'>Creative Control</p>
                  </div>
                  <div className='w-[50%] flex justify-center items-center'>
                      <img src='/creative.webp' className='w-40 h-36'/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Apart
