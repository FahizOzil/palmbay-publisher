import React from 'react'
import { font } from './font/font'

const TruePublishingPartner = () => {
  return (
    <div className={`${font.className} flex flex-col text-white justify-center items-center customgreen p-8`}>
        <h1 className='text-5xl pt-12'>Work With a True Publishing Partner</h1>
        <p className='text-xl max-w-5xl text-center pt-8'>Silver Gate isn’t just a self publisher – our goal is to be your partner, helping you step-by-step from raw manuscript to publishing success. When it comes to value and experience, Silver Gate Publishing is the best in the industry.</p>
        <p className='text-xl pt-8 max-w-5xl text-center'>It’s time to share your work with the world. Contact Silver Gate Publishing through the button below or call us at <span className='text-xl font-bold'>310 564 9107</span> to begin your publishing journey today!</p>
        <button className="button-gradient mt-8 cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
          Get Started!
        </button>
    </div>
  )
}

export default TruePublishingPartner