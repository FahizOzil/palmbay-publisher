import React from 'react'
import { font } from './font/font'

const Culture = () => {
  return (
    <section className={`${font.className} hidden md:block`}>
        <div className={` bg-white flex justify-center items-center p-12`}>
            <h1 className='text-5xl font-bold tracking-wider'>Our Culture</h1>
        </div>
        <div className='flex'>
            <div className='flex flex-col p-36 pb-8 pr-4 pt-0'>
                <h1 className='text-teal-700 text-4xl'>500 Books</h1>
                <p>Our employees collectively read in 2024</p>
                <img src='/people.webp' className='w-96 mt-4'/>
            </div>
            <div>
                <img src='/culture2.webp' className='h-56'/>
            </div>
            <div className='flex flex-col'>
                <div className='flex pl-4 pt-0'>
                    <div className='flex flex-col'>
                        <h1 className='text-teal-700 text-4xl'>150+</h1>
                        <p className='w-40'>collective years in the book, print and marketing industry</p>
                    </div>
                    <img src='/culture3.webp' className='h-24 w-40'/>
                </div>
                <div className='flex pl-4 pt-4'>
                    <img src='/culture4.webp' className='h-24  w-40'/>
                    <div className='flex flex-col'>
                        <h1 className='text-teal-700 pl-4 text-4xl'>30%</h1>
                        <p className='pl-4 w-52'>of palmbay publishers employees have their own website and books.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='flex pl-36 flex-col'>
                <div className='flex pl-4 pt-0'>
                    <div className='flex flex-col'>
                        <h1 className='text-teal-700 text-4xl'>50%</h1>
                        <p className='w-40'>Of Palm Bay Publishing Employees are pet owners</p>
                    </div>
                    <img src='/culture3.webp' className='h-24 pr-2 w-40'/>
                </div>
                <div className='flex pl-4 pt-4'>
                    <div className='flex flex-col'>
                        <h1 className='text-teal-700  text-4xl'>33%</h1>
                        <p className=' w-40'>of palmbay publishers employees have a cat.</p>
                    </div>
                    <img src='/culture4.webp' className='h-24 pr-2 w-40'/>
                </div>
            </div>
            <div className="flex flex-col items-center pl-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Outside of work our employees are...</h2>
            <div className="w-full max-w-lg">
                <div className="flex items-center mb-2">
                    <span className="w-32 text-right pr-4 font-semibold">Writers</span>
                    <div className="w-full bg-gray-200 rounded-md">
                        <div className="bg-teal-700 text-white text-right pr-2 py-1 rounded-md" style={{ width: '61%' }}>61%</div>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <span className="w-32 text-right pr-4 font-semibold">Musicians</span>
                    <div className="w-full bg-gray-200 rounded-md">
                        <div className="bg-teal-700 text-white text-right pr-2 py-1 rounded-md" style={{ width: '39%' }}>39%</div>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <span className="w-32 text-right pr-4 font-semibold">Artists/Designers</span>
                    <div className="w-full bg-gray-200 rounded-md">
                        <div className="bg-teal-700 text-white text-right pr-2 py-1 rounded-md" style={{ width: '56%' }}>56%</div>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <span className="w-32 text-right pr-4 font-semibold">Athletes</span>
                    <div className="w-full bg-gray-200 rounded-md">
                        <div className="bg-teal-700 text-white text-right pr-2 py-1 rounded-md" style={{ width: '22%' }}>22%</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Culture
