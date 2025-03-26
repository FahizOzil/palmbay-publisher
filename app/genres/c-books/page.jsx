import { font } from '@/app/Components/font/font'
import Navbar from '@/app/Components/Navbar'
import Solutions from '@/app/Components/Solutions'
import React from 'react'

const page = () => {
  return (
    <div className={`${font.className} min-h-screen flex flex-col`}>
      <Navbar />

      {/* Main Section with Whitewood Background */}
      <div
        className="relative w-full min-h-[30rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="relative h-full flex flex-col justify-center items-center text-black px-4">
          <h1 className="text-3xl md:text-5xl mt-36 text-center">
            Children Genre Book Publishing
          </h1>
          <h2 className="green-text text-4xl mt-2 max-w-4xl text-center">
            Share your wisdom and grow your brand with industry specific books.
          </h2>
          <p className="text-lg md:text-xl text-center mt-2 max-w-3xl">
            Publishing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of design choices, marketing strategies, and printing options that you need to navigate before your book finds its audience. Count on Silver Gate Publishing to guide you along the way.
          </p>
        </div>
      </div>

      <Solutions />
      <section className="mb-12 mt-12 px-14 flex flex-col justify-center items-center">
        <h2 className="text-5xl text-center">What is the Children Genre?</h2>
        <hr className='w-[70%] border-2 border-yellow-600 my-4'/>
        <p className="text-black text-center max-w-4xl mt-4 text-lg leading-relaxed">
        From Alice in Wonderland to Harry Potter, children’s books have amused and educated young readers for centuries. These imaginative stories often feature heroic child protagonists who overcome obstacles and save the day
        </p>
        <p className="text-black text-center max-w-4xl text-lg leading-relaxed mt-4">
        Children’s books may target kid audiences, but that doesn’t mean that they’re easy or quick to produce. To write a quality children’s book, you will need commitment, time, and insight into which stories will resonate with young audiences. You will also need to design, edit, and publish your book.
        </p>
        <p className="text-black text-center max-w-4xl text-lg leading-relaxed mt-4">
        Self-publishing makes it easier than ever to get your children’s book into the hands of young readers. The experts at Palmetto Publishing offer a range of services to help streamline the publishing process.
        </p>
      </section>
    </div>
  )
}

export default page