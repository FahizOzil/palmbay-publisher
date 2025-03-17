import { font } from '@/app/Components/font/font'
import React from 'react'

const DistributionServices = () => {
  return (
    <div className={`${font.className} flex flex-col mt-20 justify-center items-center text-black px-4 text-center`}>
              <p className="text-3xl md:text-6xl max-w-xl">Silver Gate Publishing Book
              Distribution Services</p>
              <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <img data-aos="fade-right" src='/reading-book-man.webp' className='w-96 h-auto' />
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Features:</h1>
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    <p data-aos="fade-up-right" className='max-w-md'><span className='green-text'>&#x2022;</span>&nbsp;Claim 100% royalties from your books, deposited quarterly to authors.</p>
                    <p data-aos="fade-up-left" className='max-w-md'><span className='green-text'>&#x2022;</span>&nbsp;Gain global visibility with listings on tens of thousands of retailer websites worldwide.</p>
                    <p data-aos="fade-up-right" className='max-w-md'><span className='green-text'>&#x2022;</span>&nbsp;Use print-on-demand distribution, eliminating the need for inventory.</p>
                    <p data-aos="fade-up-right" className='max-w-md'><span className='green-text'>&#x2022;</span>&nbsp;Benefit from up to two free cover or interior file uploads after publication.</p>
                    <p data-aos="fade-up-right" className='max-w-md'><span className='green-text'>&#x2022;</span>&nbsp;Receive dedicated email and phone support during standard business hours during your entire publishing and distribution experience.</p>
                    <p data-aos="fade-up-right" className='max-w-md'><span className='green-text'>&#x2022;</span>&nbsp;Author royalty payments are deposited quarterly.</p>
                    <p data-aos="fade-up-right" className='max-w-md'><span className='green-text'>&#x2022;</span>&nbsp;Seize the opportunity to list your book for online preorder at Amazon, B&N, and other prominent retail outlets.</p>
                    <p data-aos="fade-up-right" className='max-w-md'><span className='green-text'>&#x2022;</span>&nbsp;Explore additional distribution pathways with our E-book and audiobook distribution services.</p>
                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
            </div>
             <div className='mt-12 flex flex-col w-full justify-center items-center'>
                <hr className='border-2 border-yellow-600 w-[70%]'/>
                <p className='mt-12 text-3xl md:text-5xl'>Distribution with Silver Gate Publishing</p>
                <p className='text-xl pt-4 max-w-xl'>We understand the significant time and effort invested in creating your manuscript, so we make distribution easy for you. After collaborating with our team on your editing, cover design, and formatting, it’s time to get your book into the hands of your readers. We’re dedicated to delivering your book to the right audience, making the transition from your desk to readers a smooth and gratifying experience.</p>
             </div>
        </div>
  )
}

export default DistributionServices