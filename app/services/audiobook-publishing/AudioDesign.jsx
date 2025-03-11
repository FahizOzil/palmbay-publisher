import { font } from '@/app/Components/font/font'
import React from 'react'

const AudioDesign = () => {
  return (
    <div className={`${font.className} flex flex-col mt-20 justify-center items-center text-black px-4 text-center`}>
          <p className="text-3xl md:text-4xl">Silver Gate Publishing Audiobook Service</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Discover the transformative power of turning your written words into captivating audio experiences that connect with a broader audience.</p>
          {/* <p className="pt-8 text-xl italic max-w-3xl">*Our cover design services are automatically formatted for paperback books. Additional fees are required for converting to hardcover and/or e-book.</p>    */}
          <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
            <img data-aos="fade-right" src='/audio-book.webp' className='w-96 h-96' />
            <div className='flex flex-col justify-start items-start p-2'>
                <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Audiobook Publishing</h1>
                <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting at $700
                </p>
                <div className='space-y-2 mt-4 text-xl text-left'>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;for up to 10k words, then $.07 per word</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Professional narrator</p>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Recording, editing, mixing, and mastering services</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Licensed music for your intro and outro</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Distribution to Audible and Apple</p>
                <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
          Get Started!
        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AudioDesign