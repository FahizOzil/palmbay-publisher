import { font } from '@/app/Components/font/font'
import React from 'react'

const Simplify = () => {
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
            How Silver Gate Simplifies the Process
            </h1>

            <p className="mt-6 text-lg md:text-2xl max-w-4xl text-center tracking-wide leading-relaxed">
            At Silver Gate, we understand that self-publishing can be overwhelming. That’s why we’ve developed a streamlined process to simplify the experience for our authors. By setting our authors up with a dedicated publishing consultant & project manager, a personalized publishing plan, and organizing regular check-ins and digital proofs, we ensure they are fully guided through the process, even as they keep complete creative control.
            </p>
            <p className="mt-6 text-lg md:text-2xl max-w-4xl text-center tracking-wide leading-relaxed">
            Ready to get started on your self-publishing journey with Silver Gate? Contact us today to connect with a publishing consultant and learn more about how we can help bring your book to life. We’re excited to work with you!
            </p>
    
          </div>
          <div className="customorange flex justify-end">
            <img src="/star.png" alt="Star" className="w-24 md:w-32" />
          </div>
    
        </div>
  )
}

export default Simplify