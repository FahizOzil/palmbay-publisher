import React from 'react'
import { font } from '@/app/Components/font/font'

const YouHaveAStory = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center p-20`}>
        <p className='text-center text-xl'>We recognize that no two books or authors are the same, so we give each project the individual care and attention it deserves. Our meticulous process ensures that your published book can stand toe-to-toe with any book on the market, including traditionally published books. While some companies use one size fits all templates, we offer completely custom solutions. In fact, we’re so confident in our services that we back our award-winning quality with a 100% satisfaction guarantee, giving you the peace of mind that a reliable partnership brings.</p>
        <h1 className='text-5xl text-center mt-12'>You Have a Story to Tell.<br/>
        Let Us Bring It to Life.</h1>
        <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
          Get Started!
        </button>
    </div>
  )
}

export default YouHaveAStory