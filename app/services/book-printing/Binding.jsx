import { font } from '@/app/Components/font/font'
import React from 'react'

const Binding = () => {
  return (
    <div className={`${font.className} mt-24`}>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[40rem] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/leather.jpg')" }}
      >
        <div className="text-white px-4 text-center">
          <p className="text-3xl mt-12 md:text-6xl">Book Binding</p>
          <p className="pt-4 text-md md:text-xl max-w-3xl">
            As you print your own book, we’ll help you find the ideal bookbinding option that best resonates with your book’s character and style and fulfills its purpose.
          </p>
          <button className="mt-8 button-gradient cursor-pointer px-8 py-3 rounded-md font-bold text-black hover:bg-yellow-400">
            Get Started!
          </button>
        </div>

        {/* Card Section - Positioned Below the Button */}
        <div className="mt-12 flex justify-center space-x-8">
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg  text-center">
            <img src='/binding1.webp' className='w-[24rem]'/>
            <p className="text-black text-4xl pt-8 font-semibold">Perfect Binding</p>
            <p className='text-xl text-center max-w-sm pt-4'>Ideal for most paperbacks, this method involves gathering and trimming individual pages, creating a uniform edge that encourages a reader’s exploration. The pages are glued together using a strong adhesive at the spine of the book, then the inner pages are glued to a thick paper or cardstock cover wrapped around the spine and outer pages. The result is a masterpiece that boasts a sleek, professional finish, embodying the very essence of elegance.</p>
          </div>
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg  text-center">
            <img src='/case.webp' className='w-[24rem]'/>
            <p className="text-black text-4xl pt-8 font-semibold">Case Binding</p>
            <p className='text-xl text-center max-w-sm pt-4'>The meticulous case binding process elevates your book to a higher level of distinction. With this method, the pages are united along the spine, which is then reinforced with a strong fabric lining to ensure longevity. This assembly is encased within a sturdy cardboard or paperboard cover, offering both protection and aesthetic appeal. Creative embellishments like foil stamping or embossing add a final artistic touch. Choose case binding for a book that’s as enduring as the stories it holds.</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center mb-12 space-x-8">
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg  text-center">
            <img src='/spiral.webp' className='w-[24rem]'/>
            <p className="text-black text-4xl pt-8 font-semibold">Spiral Binding</p>
            <p className='text-xl text-center max-w-sm pt-4'>The spiral binding method offers the ultimate user-friendly experience, often gracing the pages of notebooks, planners, and interactive books. A sturdy plastic or metal coil threads through evenly spaced holes along the spine, lending a flexible quality that allows both sides to lay flat when the book is open. This binding method is tailored for frequent use, easy writing, and personalization. It’s the ideal blend of convenience and engagement, perfectly suited for the books that accompany you on your creative journey.</p>
          </div>
          <div className="bg-white p-6 rounded-tl-4xl w-[80%] rounded-br-4xl shadow-lg  text-center">
            <img src='/saddle.webp' className='w-[24rem]'/>
            <p className="text-black text-4xl pt-8 font-semibold">Saddle Stitch</p>
            <p className='text-xl text-center max-w-sm pt-4'>Saddle stitching, a minimalist method also known as “stapling,” is a simplistic choice ideal for slim creations like booklets, brochures, and slim paperback books of 100 pages or less. The binding process is graceful in its simplicity — all pages lie flat and are gently folded at the center. A union of staples along the fold binds the book, creating a seamless finish. Saddle stitching is cost-effective, minimalist, and well-suited to shorter books. However, if you’re after grandeur or long-lasting appeal, alternate binding methods may better suit your preferences</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Binding
