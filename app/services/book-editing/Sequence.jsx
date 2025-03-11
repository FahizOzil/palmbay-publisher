import { font } from '@/app/Components/font/font'
import React from 'react'

const Sequence = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center`}>
        <hr className='text-yellow-600 border-2 w-[70%] mt-20' />
        <h1 className='text-3xl mt-10 md:text-5xl text-center'>Professional Book Cover Designs</h1>

        {/* Ensure h2 starts immediately below h1 */}
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Silver Gate Cover</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Our Silver Gate Cover service is a clean and minimalistic design for genres like poetry, business, or religion, where emphasizing the text is paramount. It’s also a great choice for authors using existing artwork from a third-party designer or illustrator. This service option assumes minimal photo editing work but still packs a punch and effectively conveys your book’s tone to potential readers. </p>

        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Custom Cover</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Our Custom Cover service is appropriate for all genres and offers more choice and flexibility. This service is our most popular option, giving our authors more creative freedom to choose between two unique concepts. Your book is one of a kind, and we want the same for your cover! With our talented designers and collaborative approach, we’ll bring your book to life with a cover that matches your vision. </p>
    
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Complex Cover</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Complex Covers are also suitable for all genres, with fiction being the most common. With this service, we offer three distinct concepts that utilize more advanced image manipulation in order to capture a multifaceted vision.  </p>
    
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Illustrated Cover</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Our Illustrated cover is most popular for fantasy, sci-fi, and children’s book genres. With this service, our illustrators can create a custom piece of cover art that serves as a powerful storytelling tool for your readers. Whether you’re looking to showcase a custom character or bring a place in your fictional world to life, we can create a striking cover that will leave a lasting impression.</p>
        
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">E-book Conversion</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>If you purchase this service, we create the cover and interior design for paperback, then convert both files to e-book for $399. This service includes the EPUB file to make your e-book available on all major platforms.</p>
    </div>
  )
}

export default Sequence
