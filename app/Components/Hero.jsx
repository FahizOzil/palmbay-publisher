import React from 'react'
import { font } from './font/font'

const Hero = () => {
  return (
    <div className={`${font.className} flex text-white justify-center items-center py-16 custombg`}>
        <div className='w-[50%] px-16 leading-relaxed flex flex-col justify-center items-center'>
            <div>
                <img src='/Books-covers.png.webp'/>
            </div>
            <h1 className='text-5xl mt-8 font-semibold'>Bring Your Publishing Dream to Life with Palmetto</h1>
            <p className='mt-5'>Palmetto Publishing empowers you to publish your words, your way. Our independent authors maintain full creative control, keep 100% of royalties, and have a dedicated publishing consultant and project manager to guide you every step of the journey.</p>
        </div>
        <div className='w-[50%] flex flex-col justify-center items-center'>
            <div className='customgreen w-[80%] rounded-br-4xl rounded-tl-4xl py-8 px-8 flex flex-col justify-center items-center'>
                <h1 className='text-3xl'>Start Publishing Today !</h1>
                <div className='space-y-4 mt-4'>
                    <select
                        name="condition"
                        className="w-full p-2 border rounded-lg  textwhite"
                        required
                        >
                        <option value=""  className="text-gray-400">
                            Is Your Manuscript Ready?*
                        </option>
                        <option value="Peripheral Neuropathy">Peripheral Neuropathy</option>
                        <option value="Spine Related Pain">Spine Related Pain</option>
                        <option value="Joint Pain">Joint Pain</option>
                        <option value="Joint Pain">Diabetes</option>
                        <option value="Other">Other</option>
                    </select>
                
                    <select
                        name="condition"
                        className="w-full p-2 border rounded-lg  text-white"
                        required
                        >
                        <option value=""  className="text-black">
                            What is the Genre Of Your Book?
                        </option>
                        <option value="Peripheral Neuropathy">Peripheral Neuropathy</option>
                        <option value="Spine Related Pain">Spine Related Pain</option>
                        <option value="Joint Pain">Joint Pain</option>
                        <option value="Joint Pain">Diabetes</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button className="button-gradient mt-4 w-full cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
                    Get Started!
                    </button>
                    <p className='mt-4'>Or Give Us A Call At</p>
                    <p className='text-xl mt-1 font-bold tracking-wider'>+(310) 564 9107</p>
            </div>
        </div>
    </div>
  )
}

export default Hero