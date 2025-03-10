import React from 'react'
import { font } from './font/font'

const ContactBanner = () => {
  return (
    <div className='customgreen mt-24'>
        <div>
        <img src='/ring.png' className='w-32'/>

        </div>
        <div className={`${font.className} flex flex-col text-white justify-center items-center customgreen`}>
            <h1 className='text-7xl max-w-4xl text-center'>Contact Us Today to Start The Process</h1>
            <button className="button-gradient mt-8 cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
                Get Started!
            </button>
        </div>
        <div className=' flex justify-end items-center'>
            <img src='/star.png' className='w-32'/>
        </div>
    </div>
  )
}

export default ContactBanner