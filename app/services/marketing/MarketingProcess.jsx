import React from 'react'
import { font } from '@/app/Components/font/font'

const MarketingProcess = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center`}>
            <hr className='text-yellow-600 border-2 w-[70%] mt-20' />
            <h1 className='text-3xl mt-10 md:text-5xl text-center'>How Silver Gate's Marketing Process Work</h1>
            <p className='mt-6 text-xl text-center max-w-4xl'>When you partner with Silver Gate Publishing for your book marketing services, you open the door to a dynamic process that propels your creation into the spotlight.</p>
    
            {/* Ensure h2 starts immediately below h1 */}
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">1. Initial Consultation </h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Your journey begins with a consultation call with your dedicated publishing consultant. We’re not just interested in your book; we’re invested in your vision. By delving into your goals, genre nuances, target audience aspirations, and the essence of your creation, we lay the foundation for a marketing strategy tailored uniquely to you.</p>
    
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">2. Material Creation</h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>With insights gathered and a firm understanding of your goals, our creative artists roll up their sleeves to create eye-catching marketing materials for your book. This may include compelling book descriptions, intriguing press releases, and relatable author biographies that allow readers to get a better sense of where the book came from. Together, these materials go a long way to excite readers and media members alike.</p>
        
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">3. Distribution and Promotion</h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Utilizing our vast web of carefully selected media contacts, Silver Gate Publishing unveils your masterpiece to the world. By distributing and presenting our marketing materials to just the right media outlets, we can get your book in front of eager readers most likely to engage with it and drum up the buzz it needs to succeed.</p>
            
            <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">4. Author Involvement</h2>
            <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Your journey with us is collaborative. Every step of the way, we value your insights, champion your creativity, and encourage your active participation. Together, we can achieve success that resonates with readers and beyond.</p>
    
        </div>
  )
}

export default MarketingProcess