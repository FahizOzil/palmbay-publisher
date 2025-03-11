import { font } from '@/app/Components/font/font'
import React from 'react'

const DesignServices = () => {
  return (
    <div className={`${font.className} flex flex-col mt-20 justify-center items-center text-black px-4 text-center`}>
          <p className="text-3xl md:text-4xl">Book Cover Design Services</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Check out our services below to find the right fit for your needs!</p>
          <p className="pt-8 text-xl italic max-w-3xl">*Our cover design services are automatically formatted for paperback books. Additional fees are required for converting to hardcover and/or e-book.</p>   
          <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
            <img data-aos="fade-right" src='/cover1.webp' className='w-96 h-96' />
            <div className='flex flex-col justify-start items-start p-2'>
                <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Silver Gate Cover</h1>
                <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting at $599
                </p>
                <div className='space-y-2 mt-4 text-xl text-left'>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;1 Cover concept with front, spine, and back design</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;1 Fully licensed premium stock image or author provided image</p>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;1 Round of changes</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Popular for poetry, business, and religious books</p>
                </div>
            </div>
        </div>
          <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
            <div className='flex flex-col justify-start items-start p-2'>
                <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Custom Cover</h1>
                <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting at $699
                </p>
                <div className='space-y-2 mt-4 text-xl text-left'>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;2 Cover concepts with front, spine, and back design</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Up to 2 fully licensed premium stock images per concept</p>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;2 Round of changes</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Appropriate for all genres</p>
                </div>
            </div>
            <img data-aos="fade-right" src='/cover2.webp' className='w-96 h-96' />
        </div>
          <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
            <img data-aos="fade-right" src='/cover3.webp' className='w-96 h-96' />
            <div className='flex flex-col justify-start items-start p-2'>
                <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Complex Cover</h1>
                <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting at $899
                </p>
                <div className='space-y-2 mt-4 text-xl text-left'>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;3 Cover concepts with front, spine, and back design</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Up to 2 fully licensed premium stock images per concept</p>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;2 Round of changes</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Appropriate for all genres</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesignServices