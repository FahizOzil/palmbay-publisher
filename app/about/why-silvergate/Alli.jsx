import { font } from '@/app/Components/font/font'
import React from 'react'

const Alli = () => {
  return (
    <div className={`${font.className} text-white`}>
          
          {/* Top Decoration */}
          <div className="customorange flex justify-start">
            <img src="/ring.png" alt="Ring" className="w-24 md:w-32" />
          </div>
    
          {/* About Us Section */}
          <div className="customorange flex flex-col justify-center items-center px-6 py-12 md:py-20">
    
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl mt-8 font-bold text-center">
            Excellent Rating With ALLi
            </h1>

            <p className="mt-6 text-lg md:text-2xl max-w-4xl text-center tracking-wide leading-relaxed">
            Silver Gate Publishing has been thoroughly vetted by the Alliance of Independent Authors (ALLi). Our services have received an “Excellent (Partner Member)” rating from ALLi, endorsing the high quality of our services and the ethical standards of our business practices. Learn more about ALLi’s self-publishing industry standards here.
            </p>
    
          </div>
          <div className="customorange flex justify-end">
            <img src="/star.png" alt="Star" className="w-24 md:w-32" />
          </div>
    
        </div>
  )
}

export default Alli