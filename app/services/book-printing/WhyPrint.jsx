import { font } from '@/app/Components/font/font'
import React from 'react'

const WhyPrint = () => {
  return (
    <div className={`${font.className}`}>
        <div className="relative  w-full min-h-[40rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Why Print With Us</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          At Palm Bay Publishing, we love the passion and artistry that is so common among self-publishing authors. We put our authors first and take pride in bringing your amazing stories to life. 
          </p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          By turning to us for your book printing services, you’ll be equipped to bring your book to life with stunning results. We’re dedicated to excellence and ensure every book we print lives up to the author’s vision and meets our high standards of quality and craftsmanship.
          </p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          It’s important that your book makes a good — and accurate — first impression on possible readers, so we offer a wide variety of cover styles, binding options, and finishes to give your work its own unique flair. With years of experience and hard-won expertise in publishing, Palm Bay Publishing knows the journey you are on, and we have all of the tools and knowledge needed to help you succeed.
          </p>
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Learn More!
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhyPrint