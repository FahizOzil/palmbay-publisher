import React from 'react'
import { font } from '@/app/Components/font/font'

const AuthorCentric = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center p-20`}>
            <h1 className='text-5xl text-center'>Our Author-Centric Publishing Process At<br/>
            <span className='green-text'>Palm Bay Publishing</span></h1>
            <hr className='w-[10%] border-2 border-yellow-600 mt-8'/>
            <p className='text-center mt-8 text-xl max-w-4xl'>Every author’s journey is unique, which is why we offer a customizable self-publishing process that puts you in the driver’s seat. Here’s a breakdown of the steps involved in publishing your book with us:</p>
            <div className='flex mt-24 justify-center items-center space-x-8'>
                <img src='/Communication.png'/>
                <div className='flex flex-col'>
                    <h1 className='text-5xl green-text'>Learn</h1>
                    <p className='text-xl mt-6 max-w-md'>You’ll connect with your personal publishing consultant to create a custom-built publishing plan that meets your unique needs. We can move on from this phase whenever you’re ready. For most authors, this research phase lasts about a month.</p>
                </div>
            </div>
            <div className='flex mt-24 justify-center items-center space-x-8'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl green-text'>Discovery & Onboarding</h1>
                    <p className='text-xl mt-6 max-w-xl'>Your dedicated publishing manager will onboard you to the publishing process. Fill out questionnaires and provide feedback on your project to ensure that your vision is realized from the very beginning. We’ll also assign an ISBN to your book at this stage. This phase usually lasts about a week.</p>
                </div>
                <img src='/Discovery.png' className='h-56'/>
            </div>
            <div className='flex mt-24 justify-center items-center space-x-8'>
                <img src='/Your-Words.webp'/>
                <div className='flex flex-col'>
                    <h1 className='text-4xl max-w-md green-text'>Editing</h1>
                    <p className='text-xl mt-6 max-w-md'>Our team of professional editors will review your manuscript thoroughly, providing you with developmental, line, and copy edits wherever needed. The timeline of your editing process will be determined based on the word count of your manuscript and the required review rounds. Generally, manuscripts under 20,000 words will require a minimum of seven business days, with an additional business day for every additional 10,000 words.</p>
                </div>
            </div>
            <div className='flex mt-24 justify-center items-center space-x-8'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl green-text'>Design</h1>
                    <p className='text-xl mt-6 max-w-xl'>From cover design to interior formatting, illustration, and eBook conversion, our design experts create a book that looks as good as it reads.</p>
                </div>
                <img src='/Design-img.png.png' className='h-56'/>
            </div>
            <div className='flex mt-24 justify-center items-center space-x-8'>
                <img src='/prepare-content.png'/>
                <div className='flex flex-col'>
                    <h1 className='text-4xl max-w-md green-text'>Proofing
                    </h1>
                    <p className='text-xl mt-6 max-w-xl'>You’ll be able to review and approve your personalized designs through each step of the journey. Once the digital proof is available, you’ll review it again to be extra sure the book is ready for readers.</p>
                </div>
            </div>
            <div className='flex mt-24 justify-center items-center space-x-8'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl green-text'>Distribution</h1>
                    <p className='text-xl mt-6 max-w-xl'>We’ll set up your book for print-on-demand and e-book distribution through thousands of online retailers, ensuring that your book is available to readers worldwide.</p>
                </div>
                <img src='/Distribution.png' className='h-56'/>
            </div>
            <div className='flex mt-24 justify-center items-center space-x-8'>
                <img src='/printing.png'/>
                <div className='flex flex-col'>
                    <h1 className='text-4xl max-w-md green-text'>Printing
                    </h1>
                    <p className='text-xl mt-6 max-w-xl'>Chat with your publishing consultant about various print options, including paper quality, binding, and more. We’ll help you choose the best option for your book, ensuring that it looks and feels as good as it reads.</p>
                </div>
            </div>
            <div className='flex mt-24 justify-center items-center space-x-8'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl green-text'>Marketing</h1>
                    <p className='text-xl mt-6 max-w-xl'>Use our marketing services to create awareness about your book and get tips on a long-term marketing plan. We’ll work with you to ensure that your book is marketed to the right audience, helping you to reach your readers and build your brand.</p>
                </div>
                <img src='/goals.webp' className='h-56'/>
            </div>
        </div>
  )
}

export default AuthorCentric