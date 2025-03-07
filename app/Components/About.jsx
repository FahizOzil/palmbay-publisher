import React from 'react'
import { font } from './font/font'

const About = () => {
  return (
    <div>
        <div className='customorange'>
            <img src='/ring.png' className='w-32'/>
        </div>
        <div className={`${font.className}  text-white customorange flex flex-col justify-center items-center`}>
            <div>
                <img src='aboutus.webp'/>
            </div>
            <h1 className='text-5xl mt-8'>About Us</h1>
            <p className='mt-8 text-2xl font-bold max-w-xl text-center tracking-wider'>We’re book lovers who are here to help you with every aspect of publishing your work.</p>   
            <p className='mt-8 text-2xl max-w-4xl text-center tracking-wider'>We’re a self-publishing company that provides independent authors with the publishing solutions, tools, and expertise they need to succeed. We help bring your work into the hands and screens of readers by assisting you with all of your publishing and marketing needs. We transform your manuscript into a world class book that can be enjoyed and shared across a multitude of platforms. We strongly believe your book should reflect your words your way, so our authors retain full creative control and 100% of royalties.</p>   
        </div>
        <div className='customorange flex justify-end items-center'>
            <img src='/star.png' className='w-32'/>
        </div>
    </div>
  )
}

export default About