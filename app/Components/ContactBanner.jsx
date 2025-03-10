import React from 'react'
import { font } from './font/font'

const ContactBanner = () => {
  return (
    <div className={`${font.className} flex flex-col mt-24 text-white justify-center items-center customgreen p-8`}>
            <h1 className='text-7xl max-w-4xl text-center pt-12'>Contact Us Today to Start The Process</h1>
            <button className="button-gradient mt-8 cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
              Get Started!
            </button>
        </div>
  )
}

export default ContactBanner