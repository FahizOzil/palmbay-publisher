import { font } from '@/app/Components/font/font'
import React from 'react'

const Sell = () => {
  return (
    <div className={`${font.className} mt-24`}>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[45rem] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/leather.jpg')" }}
      >
        <div className="text-white px-8 py-12 text-center">
          <p className="text-3xl mt-12 md:text-6xl">How to Sell Your Book Through a Distribution Network</p>
            <hr className='border-2 border-yellow-600 w-[30%] mx-auto mt-12'/>
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
          <p className='mt-12 text-xl px-12 text-left'><span className='text-teal-300 text-3xl'>1 &#x2022;&nbsp;</span>After the author grants approval for their book, we compile a distribution information form, which encompasses details such as book description, contributor information, pricing, and additional relevant data.</p>
          <p className='mt-12 text-xl px-12 text-left'><span className='text-teal-300 text-3xl'>2 &#x2022;&nbsp;</span>Using the completed form and accompanying files, we initiate the distribution setup process. This involves uploading the files to our catalog, from which the information seamlessly circulates to various retailers.</p>
          <p className='mt-12 text-xl px-12 text-left'><span className='text-teal-300 text-3xl'>3 &#x2022;&nbsp;</span>Retailers are promptly notified of the book’s availability, and they proceed to construct detailed pages on their websites. It’s worth noting that certain retailers may take up to two weeks to complete this page-building process.</p>
          <p className='mt-12 text-xl px-12 text-left'><span className='text-teal-300 text-3xl'>4 &#x2022;&nbsp;</span>The book is made accessible for pre-sale leading up to its official release date, providing eager readers with an opportunity to secure their copies in advance.</p>
          <p className='mt-12 text-xl px-12 text-left'><span className='text-teal-300 text-3xl'>5 &#x2022;&nbsp;</span>Following the pre-sale period, the general public gains the ability to make direct purchases, marking the official release of the book for widespread distribution.</p>
        </div>

       
      </div>
    </div>
  )
}

export default Sell
