import { font } from '@/app/Components/font/font'
import React from 'react'

const MarketingServices = () => {
  return (
    <div className={`${font.className} flex flex-col mt-20 justify-center items-center text-black px-4 text-center`}>
              <p className="text-3xl md:text-6xl max-w-xl">A Collaborative Approach to
              Marketing Your Book</p>
              <p className="pt-4 text-md md:text-xl max-w-3xl">
              When you work with Palm Bay Publishing, you can expect a personalized and collaborative book promotion experience. We’ll start with a 30-minute call with your dedicated publishing consultant to create a strategy unique to your goals, genre, and skills. Our expert guidance, combined with your passion and drive, form the foundation for a winning marketing plan that showcases your book to the world. Here are just a few of our book marketing options, with pricing.</p>
              <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <img data-aos="fade-right" src='/marketing-package.png.webp' className='w-96 h-96' />
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Marketing Copy</h1>
                    {/* <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                        Starting at $249
                    </p> */}
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    {/* <p className='max-w-xl' data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Long and Short Back Cover Texts: We create two versions of the back cover synopsis to entice readers, one 250 words and another 75 words, depending on your needs and the space available.</p>
                    <p className='max-w-xl' data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Online Book Description: These are search-engine-optimized book descriptions, perfect for online platforms like Amazon.</p>
                    <p className='max-w-xl' data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Searchable Keywords and BISACs: We ensure your book gets marketed, shelved, and categorized appropriately, providing BISAC categorizations and five appropriate keywords to ensure your book is easy to search.</p>
                    <p className='max-w-xl' data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Author Biography: A personal touch for your book, with an engaging author bio and photo to help readers connect with you and your work.</p> */}
                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
            </div>
              <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Press Release & Distribution</h1>
                    <p data-aos="fade-up" className=' text-xl md:max-w-xl mt-4 text-left'>
                    The Palm Bay team will craft a targeted press release that effectively presents your book to the appropriate media channels and gets the word out. With over 780,000 available media connections, we have ample opportunities to get your book in front of people who can help raise awareness for your book.
                    </p>
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    {/* <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;100 outlets — $729</p>
                    <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;500 outlets — $929</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;1,000 outlets — $1029</p> */}
                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
                <img data-aos="fade-right" src='/author-website.png.webp' className='w-96 h-96' />
            </div>
              <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <img data-aos="fade-right" src='/press-release.png.webp' className='w-96 h-96' />
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Newswire Article</h1>
                    {/* <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                        Starting at $1,299
                    </p> */}
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    <p data-aos="fade-up-right" className='max-w-xl'><span className='green-text'>&#x2022;</span>&nbsp;This is a paid media article blast sent to hundreds of newsrooms for guaranteed coverage. We’ll help you reach dozens of local papers and online sites. Though we can’t guarantee which outlets will pick up the article, it’s very common for it to be posted on outlets like Yahoo News, local affiliates of Fox, ABC, and NBC, and hundreds of other high-traffic sites. After the article is published, we’ll provide a report detailing article placements, views, and clicks to your Amazon book listing.</p>

                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
            </div>
              <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Publishers Weekly Ad</h1>
                    <p data-aos="fade-up" className=' text-xl md:max-w-xl mt-4 text-left'>
                    The foremost authority in the book publishing industry, Publisher’s Weekly is a highly influential brand that can effectively signal boost your book. We’ll design a customized advertisement for your book for placement in an upcoming issue.
Choose one of three design sizes:
                    </p>    
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    {/* <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Whole Page — $3,300</p>
                    <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Half Page — $2,200</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Third Page Vertical — $1,600</p> */}
                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
                <img data-aos="fade-right" src='/publisher-weekly.webp' className='w-96 h-96' />
            </div>
            <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <img data-aos="fade-right" src='/qa.webp' className='w-96 h-96' />
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Publishers Weekly Q&A</h1>
                    <p data-aos="fade-up" className=' text-xl md:max-w-xl mt-4 text-left'>
                    Get up close and personal with your potential readers, giving a sneak peek at your book with a professional Q&A style article with your author photo and book cover.
                    </p>
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    {/* <p data-aos="fade-up-right" className='max-w-xl'><span className='green-text'>&#x2022;</span>&nbsp;Whole Page — $3,600</p>
                    <p data-aos="fade-up-right" className='max-w-xl'><span className='green-text'>&#x2022;</span>&nbsp;Half Page — $2,700</p> */}

                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Author Website</h1>
                    {/* <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting From $1,599
                    </p>     */}
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;An author biography section</p>
                    <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;A sales page linking to your book’s Amazon listing</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;A contact page</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;An editable blog</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Other pages advertising the book (if needed)</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Input in the design process</p>
                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
                <img data-aos="fade-right" src='/author-website.webp' className='w-96 h-96' />
            </div>
            <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <img data-aos="fade-right" src='/marketing-package-press-release.webp' className='w-96 h-96' />
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Marketing Package With Press Release</h1>
                    {/* <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting From $1,999
                    </p>     */}
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Press release & distribution</p>
                    <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Marketing Copy</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;20 softcover books</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;100 custom-designed postcards</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;250 custom-designed business cards</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;50 custom-designed bookmarks</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;2 posters for book signings</p>
                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Marketing Package With Newswire</h1>
                    {/* <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Starting From $2,299
                    </p>     */}
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Newswire Article</p>
                    <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Marketing Copy</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;20 softcover books</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;100 custom-designed postcards</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;200 custom-designed business cards</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;50 custom-designed bookmarks</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;2 posters for book signings</p>
                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
                <img data-aos="fade-right" src='/marketing-package-newswire.webp' className='w-96 h-96' />
            </div>
            <div className='flex flex-col md:space-x-8 md:flex-row mt-16 justify-center items-center'>
                <img data-aos="fade-right" src='/Social-Media-Package.webp' className='w-96 h-96' />
                <div className='flex flex-col justify-start items-start p-2'>
                    <h1 data-aos="fade-left" className='text-3xl md:text-5xl mt-6 md:max-w-xl text-left'>Marketing Package With Press Release</h1>
                    {/* <p data-aos="fade-up" className='green-text text-3xl md:max-w-xl mt-4 text-left'>
                    Ranges From $1,500 - $2,000
                    </p>     */}
                    <p data-aos="fade-up" className=' text-xl md:max-w-xl mt-4 text-left'>
                    Our social media service plans offer a comprehensive and strategic approach to establishing, growing, and sustaining your online presence. Designed to ensure consistent engagement and long-term brand development, these plans help authors connect with their audience and strengthen their visibility across various platforms. Services are available one-time or on a recurring monthly basis.
                    </p>    
                    <div className='space-y-2 mt-4 text-xl text-left'>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Five tailored content pieces</p>
                    <p data-aos="fade-up-left"><span className='green-text'>&#x2022;</span>&nbsp;Two strategy session calls</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;In-depth social media audit</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Performance review</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Access to recorded calls</p>
                    <p data-aos="fade-up-right"><span className='green-text'>&#x2022;</span>&nbsp;Dedicated support</p>
                    <button className="button-gradient mt-6 md:mt-8 px-6 sm:px-8 py-3 rounded-md font-bold text-black transition duration-300 hover:bg-yellow-400">
              Get Started!
            </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MarketingServices