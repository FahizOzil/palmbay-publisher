import React from 'react'
import { font } from '@/app/Components/font/font'

const IllustrationProcess = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center`}>
            <hr className='text-yellow-600 border-2 w-[70%] mt-20' />
            <h1 className='text-3xl mt-10 md:text-5xl text-center'>How Palm Bay Publishing Prepares For Your Book</h1>
            <p className='mt-6 text-xl text-center max-w-4xl'>We stand by our authors side as your work nears publication, ensuring every element aligns with your vision. The culmination of your dedication and creativity deserves nothing less than excellence, and we orchestrate the final steps with unwavering precision. Before deeming your work ready for publication, we’ll work with you to complete the following steps:</p>
    
            {/* Ensure h2 starts immediately below h1 */}
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">1. Initial Consultation </h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Our book illustration services start with a thorough discussion about your work and goals to give us insight into your vision and preferences. Along with personalized guidance, we’ll also send a detailed questionnaire for you to provide details like chapter description, scene details, and color requests for each illustration you purchase.</p>
    
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">2. Illustrator Recommendations</h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Based on what we learn about your creative vision, our project managers will pair you with an illustrator whose artistic style is the right fit. If you prefer to choose or narrow down the options, we’re happy to provide examples of our artists’ work. We’ll always offer guidance and an initial sketch so that you can feel confident in your illustrations</p>
        
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">3. Pair With an Illustrator</h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Our talented illustrators have a track record for creating imaginative book illustrations that captivate readers. Once we’ve matched you with the right illustrator for your project, they’ll create an initial sketch to give you an idea of how your characters will look. After you receive the initial sketch, we provide two rounds of unlimited changes, so you can make adjustments as needed until the illustration aligns with your vision. If you need to switch illustrators or make additional rounds of changes, we’ll work together to decide the right path to move forward.</p>
            
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">4. Black-and-White Sketches</h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>After you approve the initial sketch, we’ll move forward with the black-and-white phase. This phase includes a rough sketch of every illustration you purchased. You’ll receive a proof of the full set and have the opportunity to make two rounds of changes. If a third round is needed, we’ll discuss how to move forward with the final round of changes. At that time, we may require additional fees for complex changes or to restart an illustration. However, we want to keep you moving forward without extra costs, so we’ll communicate with you to avoid roadblocks and fees before they happen!</p>
            
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">5. Color Illustrations</h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Once you feel satisfied with your sketches, we’ll move on to the color phase. This phase is for both full-color and greyscale coloring. Illustrators ink lines and add color or shading. You’ll also have two rounds of changes to request color, shading, and minor detail changes. If you request additional or complex changes after the two rounds, your project manager will discuss these changes with you in more detail. After the final approval, we’ll transition from the illustration service to the formatting services, starting with your cover concept.</p>
    
        </div>
  )
}

export default IllustrationProcess