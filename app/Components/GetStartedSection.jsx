import React from 'react'
import { font } from './font/font'

const GetStartedSection = () => {
  return (
    <div className={`${font.className} bg-white text-black mt-24 flex flex-col justify-center items-center`}>
        <h1 className='text-2xl md:text-5xl mt-3'>
            How To Get Started
        </h1>
        <hr className="w-24 md:w-32 mt-6 border-2 border-yellow-600" />
        <p className='text-center text-black mt-10 max-w-3xl md:max-w-5xl text-md md:text-xl'>If you’re ready to start publishing your work, Palm Bay Publishing can help! With customized feedback and attentive customer service, we help your publishing dreams come to fruition. Together, we will:</p>
        <div className='flex flex-col mb-12 md:flex-row justify-center md:space-x-16 mt-16 items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src='/goals.webp' className='w-40 h-36'/>
                    <p className='green-text mt-2 text-2xl max-w-xs text-center'>Discuss your goals and expectations to create a publishing plan.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src='/preparecontent.webp' className='w-40 h-36'/>
                    <p className='green-text mt-2 text-2xl max-w-xs text-center'>Prepare your content for publishing with editing and creative services.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src='/experts.webp' className='w-40 h-36'/>
                    <p className='green-text mt-2 text-2xl max-w-xs text-center'>Discuss marketing solutions to inform audiences about your book’s release.</p>
                </div>
        </div>
    </div>
  )
}

export default GetStartedSection
