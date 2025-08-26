import { font } from '@/app/Components/font/font'
import React from 'react'

const HowWePrepare = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center`}>
        <hr className='text-yellow-600 border-2 w-[70%] mt-20' />
        <h1 className='text-3xl mt-10 md:text-5xl text-center'>How Palm Bay Publishing   Prepares For Your Book</h1>
        <p className='mt-6 text-xl text-center max-w-4xl'>We stand by our authors side as your work nears publication, ensuring every element aligns with your vision. The culmination of your dedication and creativity deserves nothing less than excellence, and we orchestrate the final steps with unwavering precision. Before deeming your work ready for publication, we’ll work with you to complete the following steps:</p>

        {/* Ensure h2 starts immediately below h1 */}
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">1. Finalize Your Manuscript </h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>The content of your book should flow seamlessly and be exactly how you want it. The writing process should be finished, and you’ll want to have the whole work polished, proofread, and edited to perfection.</p>

        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">2. Design Your Cover</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>We’ll help you create a stunning, eye-catching book cover that reflects the soul of your story and attracts your target audience.</p>
    
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">3. Formatting and Layout</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>We will make sure your book’s interior layout is arranged to your preferences using font choices, headers, and page numbers that keep the reader totally immersed.</p>
        
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">4. Choose Book Specifications</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>We’ll recommend the trim size, paper stock, and binding type that best matches your work.</p>
        
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">5. Convert to Print-Ready Files</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Finally, we’ll convert the manuscript to a PDF file to make it easy to send to the printer.</p>

    </div>
  )
}

export default HowWePrepare
