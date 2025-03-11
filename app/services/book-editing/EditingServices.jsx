import { font } from '@/app/Components/font/font'
import React from 'react'

const EditingServices = () => {
  return (
    <div className={`${font.className} flex flex-col mt-20 justify-center items-center text-black px-4 text-center`}>
          <p className="text-3xl md:text-4xl">Book Editing Services</p>
          <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
            <img data-aos="fade-right" src='/edit1.webp' className='w-96 h-96' />
            <div className='flex flex-col justify-start items-start p-2'>
                <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Copy Editing</h1>
                <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting at $360
                </p>
                <div className='space-y-2 mt-4 text-xl text-left'>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;for up to 10k words, then $.036 per word</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Sentence-level edits to improve clarity</p>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Technical edit highlighting grammar, punctuation, and spelling</p>
                {/* <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Popular for poetry, business, and religious books</p> */}
                <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
          Get Started!
        </button>
                </div>
            </div>
        </div>
          <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
            <div className='flex flex-col justify-start items-start p-2'>
                <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Line Editing</h1>
                <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting at $440
                </p>
                <div className='space-y-2 mt-4 text-xl text-left'>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;for up to 10k words, then $.044 per word</p>
                <p data-aos="fade-up-left" className='max-w-xl'><span className='green-text'>&#x2022;</span>&nbsp;Stylistic editing looking at high-level structural, organizational, and content concerns</p>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Suggestions for improving tone and organization</p>
                <p data-aos="fade-up-left" className='max-w-xl'><span className='green-text'>&#x2022;</span>&nbsp;A look at spelling, grammar, and punctuation but not a complete focus</p>
                <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
          Get Started!
        </button>
                </div>
            </div>
            <img data-aos="fade-right" src='/edit3.webp' className='w-96 h-96' />
        </div>
          <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
            <img data-aos="fade-right" src='/edit2.webp' className='w-96 h-96' />
            <div className='flex flex-col justify-start items-start p-2'>
                <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Developmental Editing</h1>
                <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting at $900
                </p>
                <div className='space-y-2 mt-4 text-xl text-left'>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;for up to 10k words, then $.09 per word</p>
                <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Manuscript assessment on plot, structure, and point of view</p>
                <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;A look at recurring themes</p>
                <p data-aos="fade-up-left" className=' max-w-xl'><span className='green-text'>&#x2022;</span>&nbsp;Receive actionable advice on how to tighten the language and focus on the message for the intended audience. This may be beneficial if you want to increase or reduce the word count.</p>
                <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
          Get Started!
        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditingServices