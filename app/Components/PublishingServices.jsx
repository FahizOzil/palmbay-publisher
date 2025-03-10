import React from 'react'
import { font } from './font/font'

const PublishingServices = () => {
  return (
    <div className={`${font.className} flex justify-center items-center flex-col p-12 bg-white`}>
        <h1 className='text-5xl mt-12'>Publishing Services</h1>
        <hr className="w-24 md:w-32 mt-6 border-2 border-yellow-600" />
        <div className='flex justify-center space-x-6 mt-12 items-center'>
            <div className='bg-white flex flex-col rounded-lg justify-center items-center shadow-lg p-6 px-12'>
                <img src='/coverdesign.webp'/>
                <h1 className='green-text mt-4 text-2xl'>Cover <br/> Design</h1>
            </div>
            <div className='bg-white flex flex-col rounded-lg justify-center items-center shadow-lg p-6 px-12'>
                <img src='/T.webp'/>
                <h1 className='green-text mt-4 text-2xl'>Interior <br/> Design</h1>
            </div>
            <div className='bg-white flex flex-col rounded-lg justify-center items-center shadow-lg py-9 px-12'>
                <img src='/ill.webp'/>
                <h1 className='green-text mt-4 text-2xl'>Illustration</h1>
            </div>
            <div className='bg-white flex flex-col rounded-lg justify-center items-center shadow-lg py-9 px-12'>
                <img src='/edit.webp'/>
                <h1 className='green-text mt-4 text-2xl'>Editing</h1>
            </div>
            <div className='bg-white flex flex-col rounded-lg justify-center items-center shadow-lg py-9 px-12'>
                <img src='/print.webp'/>
                <h1 className='green-text mt-4 text-2xl'>Print</h1>
            </div>
            <div className='bg-white flex flex-col rounded-lg justify-center items-center shadow-lg py-8 px-12'>
                <img src='/mark.webp'/>
                <h1 className='green-text mt-4 text-2xl'>Marketing</h1>
            </div>
        </div>
        <button className="button-gradient mt-8 cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
          Get Started!
        </button>
    </div>
  )
}

export default PublishingServices