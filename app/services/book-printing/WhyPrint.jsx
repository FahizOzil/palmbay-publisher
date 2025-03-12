import { font } from '@/app/Components/font/font'
import React from 'react'

const WhyPrint = () => {
  return (
    <div className={`${font.className} mt-20`}>
        <div className="relative  w-full min-h-[25rem] bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-4 text-center">
          <p className="text-3xl md:text-6xl">Superior Qua</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
          Our service helps you publish a high-quality audiobook without breaking the bank. You can also set your narrator preferences based on gender, accent, and tone of voice. We pair you with the perfect narrator to bring your book to life. Once complete, Silver Gate helps you sell your audiobook through Audible and Apple.
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