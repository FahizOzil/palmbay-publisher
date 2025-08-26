import { font } from '@/app/Components/font/font'
import React from 'react'

const IllustrationPackages = () => {
  return (
    <div className={`${font.className} mt-24`}>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[40rem] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/leather.jpg')" }}
      >
        <div className="text-white px-4 text-center">
          <p className="text-3xl mt-12 md:text-6xl">Illustration Services</p>
          
        </div>

        {/* Card Section - Positioned Below the Button */}
        <div className="mt-12 flex justify-center space-x-8">
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg  text-center">
            <img src='/spot-illustrations.png.webp' className='w-[24rem]'/>
            <p className="text-black text-4xl pt-8 font-semibold">Spot Illustration</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>Small illustration with plenty of room for text</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>Usually takes up a third of the page or less</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>Great for chapter headings and vignettes</p>
            {/* <p className='text-3xl text-center button-gradient py-4 rounded-full max-w-sm mt-8'>From $199</p> */}
          </div>
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg  text-center">
            <img src='/half-page-illustration.png.webp' className='w-[24rem]'/>
            <p className="text-black text-4xl pt-8 font-semibold">Half Page Illustration</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>Illustration fills about half of a page based on the selected trim size</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>Illustrators leave room for text on these pages</p>
            {/* <p className='text-3xl text-center button-gradient py-4 rounded-full max-w-sm mt-8'>From $249</p> */}
          </div>
        </div>
        <div className="mt-12 flex justify-center mb-12 space-x-8">
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg  text-center">
            <img src='/full-page-illustration.png.webp' className='w-[24rem]'/>
            <p className="text-black text-4xl pt-8 font-semibold">Full Page Illustration</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>A large single scene or a series of smaller illustrations that fill one page</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>Illustrators can leave room on the top or bottom of the page for text, or text can be placed on the opposite page</p>
            {/* <p className='text-3xl text-center button-gradient py-4 rounded-full max-w-sm mt-8'>From $349</p> */}
          </div>
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg  text-center">
            <img src='/two-page-spread.png.webp' className='w-[24rem]'/>
            <p className="text-black text-4xl pt-8 font-semibold">Two Page Spread Illustration</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>A single illustration across two pages</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>The spread will cover both left- and right-facing pages</p>
            <p className='text-xl text-left max-w-sm pt-4'><span className='text-4xl text-teal-600'>&#x2022;&nbsp;</span>Illustrators can leave room on one or both sides for text</p>
            {/* <p className='text-3xl text-center button-gradient py-4 rounded-full max-w-sm mt-8'>From $499</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IllustrationPackages
