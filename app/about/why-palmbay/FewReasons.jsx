import { font } from '@/app/Components/font/font'
import React from 'react'

const FewReasons = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center p-20`}>
        <h1 className='text-5xl text-center'>A Few Reasons To Choose<br/>
        <span className='green-text'>Palm Bay Publishing</span></h1>
        <hr className='w-[10%] border-2 border-yellow-600 mt-8'/>
        <p className='text-center mt-8 text-xl max-w-4xl'>At Palm Bay, we are committed to making your publishing journey as smooth and successful as possible. Here are a few reasons why you should choose us:</p>
        <div className='flex mt-24 justify-center items-center space-x-8'>
            <img src='/Your-Words.webp'/>
            <div className='flex flex-col'>
                <h1 className='text-5xl green-text'>Your Words, Your Way</h1>
                <p className='text-xl mt-6 max-w-md'>One of the greatest benefits of self publishing is maintaining full creative control over your book. Our expert publishing consultants and production managers will educate you on best practices and publishing requirements, but we’re not here to stuff your story into a box. We’ll make sure your book reaches your readers in the best format possible that honors your vision.</p>
            </div>
        </div>
        <div className='flex mt-24 justify-center items-center space-x-8'>
            <div className='flex flex-col'>
                <h1 className='text-4xl green-text'>Your Work, Available To The World</h1>
                <p className='text-xl mt-6 max-w-xl'>If you want to reach the full extent of your potential audience, your book needs to be available across multiple online platforms. That means eBook format for Kindle and Apple Bookstore, and print editions on websites like Amazon, Barnes & Noble, Walmart and Target. Palm Bay Publishing offers the distribution channels to get your book onto all of these platforms so you can maximize your readership.</p>
            </div>
            <img src='/reading-couple-.webp' className='h-56'/>
        </div>
        <div className='flex mt-24 justify-center items-center space-x-8'>
            <img src='/Publishing-Experts-img.png.webp'/>
            <div className='flex flex-col'>
                <h1 className='text-4xl max-w-md green-text'>Publishing Experts Who Genuinely Care About Your Work</h1>
                <p className='text-xl mt-6 max-w-md'>Palm Bay Publishing takes a personal approach from the start. Authors are assigned a personal publishing consultant from the first call to answer your questions and chart a path to publication. From there, you’re assigned a dedicated project manager to guide your manuscript through editing, formatting, publishing, printing, and distribution. There’s no such thing as a dumb question — we’re here to help and clarify anything whenever you need us.</p>
            </div>
        </div>
        <div className='flex mt-24 justify-center items-center space-x-8'>
            <div className='flex flex-col'>
                <h1 className='text-4xl green-text'>Your One-Stop Shop</h1>
                <p className='text-xl mt-6 max-w-xl'>Trying to hire and coordinate efforts with freelance editors, designers, and other professionals can be costly and exhausting. We make it easy by handling all of that for you, and we can tailor the process to be as simple or complex as your book requires.</p>
            </div>
            <img src='/Your-One-Stop.webp' className='h-56'/>
        </div>
        <div className='flex mt-24 justify-center items-center space-x-8'>
            <img src='/World-Class.webp'/>
            <div className='flex flex-col'>
                <h1 className='text-4xl max-w-md green-text'>Every Genre in All Popular
                Trim Sizes</h1>
                <p className='text-xl mt-6 max-w-xl'>Whether it’s a straightforward biography, meditative poetry, or a wild sci-fi plot, we’ve helped enough authors in your genre to navigate the nuances of the publishing process. We’ve published paperback novels, image-rich art books, hardcover children’s books, and everything in between. As a print-first publisher, we’re uniquely positioned to ensure your printed book is indistinguishable from traditionally published books.</p>
            </div>
        </div>
        <div className='flex mt-24 justify-center items-center space-x-8'>
            <div className='flex flex-col'>
                <h1 className='text-4xl green-text'>Keep 100% of Your Royalties</h1>
                <p className='text-xl mt-6 max-w-xl'>Authors who work with Palm Bay Publishing maintain 100% creative control of their book as well as 100% of the royalties and rights associated with it. We provide competitive payouts to our authors as compared to industry standards, putting more capital in your pocket to market your book and expand your audience.</p>
            </div>
            <img src='/Your-Royalties.webp' className='h-56'/>
        </div>
    </div>
  )
}

export default FewReasons