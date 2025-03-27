import ContactBanner from '@/app/Components/ContactBanner'
import { font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import Solutions from '@/app/Components/Solutions'
import React from 'react'
import { FaBook, FaEdit, FaBullhorn } from 'react-icons/fa' // Importing icons from react-icons

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
          Self-publishing makes it easier than ever to get your children’s book into the hands of young readers. The experts at Silver Gate Publishing offer a range of services to help streamline the publishing process.
        </p>
      </section>

      <section className="py-12 px-14 custombg text-white">
        <div className="flex flex-col md:flex-row items-start">
          {/* Text Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Characteristics of Children’s Literature
            </h2>
            <div className="border-b-2 border-yellow-600 w-40 mb-6"></div>
            <p className="text-lg leading-relaxed mb-4">
              Children’s literature is a broad term that encompasses all books written for young readers. You can write fiction or non-fiction books in a variety of genres.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">Accessible language tailored toward developing readers</li>
              <li className="mb-2">Attractive illustrations</li>
              <li className="mb-2">Humor</li>
              <li className="mb-2">Imaginative narratives</li>
              <li className="mb-2">Memorable characters</li>
              <li className="mb-2">Educational Value</li>
              <li className="mb-2">Being written for and about children</li>
              <li className="mb-2">Empowered young protagonists</li>
              <li className="mb-2">Depicting a range of human experiences and perspectives</li>
              <li className="mb-2">Portraying dark topics like death or the Holocaust in child-appropriate stories</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Historically, children’s literature has mostly centered on narratives about white characters. Increasingly, children’s authors, educators, and publishers have recognized the need for more diverse stories that include a range of experiences and people. For example, Jessica Love’s picture book Julián Is A Mermaid centers on a queer, brown-skinned boy who fantasizes about becoming a mermaid.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 p-6">
            <img
              src="/red-child.webp"
              alt="Person holding a cookbook with food ingredients"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section
        className="py-20 px-20 text-white customgreen bg-cover bg-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">
          Age Category In Children's Literature
        </h2>
        <div className="border-b-2 border-yellow-500 w-16 mb-6 "></div>
        <p className="text-lg leading-relaxed mb-4 text-left">
          These books address young readers aged 2 to 7. Typically 32 pages long, they blend accessible text and bright illustrations. Developing readers can use these texts with the help of an adult or on their own
        </p>
        <p className="text-lg leading-relaxed mb-4 text-left">
          Also known as “easy readers,” beginning reader books target children aged 5 to 8. They usually include more text than a picture book, but they still use simple language and sentence structures.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-left">
          Books targeted at children aged 8 to 12 fall into this category. These books have longer chapters with more sophisticated language, and they contain few or no illustrations. They are often published in series.
        </p>
        
        <p className="text-lg leading-relaxed mt-4 text-left">
          These stories are aimed at children aged 12 to 18. They explore heavier issues like mental illness, social injustices, and suicide, but they are often somewhat less explicit than adult narratives. Young adult fiction typically portrays the transition between childhood and adulthood, depicting teenage characters who experience their first romances and start high school.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-left">
          Of course, these age categories are simply loose guidelines. Children frequently read books above or below their age level, and many adults also read children’s literature. Books like Harry Potter and Stephanie Meyer’s Twilight series have huge appeal for crossover audiences.
        </p>
      </section>

      {/* Section: Popular Genres in Children's Literature */}
      <section
        className="py-20 px-14 text-black bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Popular Genres in Children’s Literature
        </h2>
        <div className="border-b-2 border-yellow-600 w-40 mx-auto mb-6"></div>
        <p className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Children’s literature includes many formats and genres. Some of the most popular genres and examples of well-known children’s books found within them include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="mb-2">
              <span className="font-bold">Biography:</span> Brown Girl Dreaming, March, Turning Pages: My Life Story
            </li>
            <li className="mb-2">
              <span className="font-bold">Dystopian:</span> Divergent, The Hunger Games, The Maze Runner
            </li>
            <li className="mb-2">
              <span className="font-bold">Fairy Tales and Folktales:</span> Aesop’s Fables, Cinderella, The Little Mermaid
            </li>
            <li className="mb-2">
              <span className="font-bold">Fantasy:</span> Graceling, Harry Potter and the Sorcerer’s Stone, The Magic Treehouse series
            </li>
            <li className="mb-2">
              <span className="font-bold">Graphic Novels:</span> The Diary of a Wimpy Kid, The Tea Dragon Society, Captain Underpants
            </li>
          </ul>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="mb-2">
              <span className="font-bold">Historical Fiction:</span> I Survived series, Little House on the Prairie, We Were There
            </li>
            <li className="mb-2">
              <span className="font-bold">Non-Fiction:</span> Escape This Book! Tombs of Egypt, If You Take Away an Otter, Locomotive
            </li>
            <li className="mb-2">
              <span className="font-bold">Poetry:</span> The Cuckoo’s Haiku: and Other Birding Poems, Where the Sidewalk Ends
            </li>
            <li className="mb-2">
              <span className="font-bold">Picture Books:</span> The Cat in the Hat, Bread, and Jam for Frances, The Very Hungry Caterpillar
            </li>
            <li className="mb-2">
              <span className="font-bold">Science Fiction:</span> Animorphs, Ender’s Game, A Wrinkle in Time
            </li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed mt-6 text-center max-w-4xl mx-auto">
          If you’re looking for inspiration for your own children’s book, you may find it helpful to read a broad sample of stories from genres that interest you.
        </p>
      </section>

      {/* New Section: Get Started With Silver Gate */}
      <section className="py-20 px-14 customorange text-black">
        <h2 className="text-4xl md:text-5xl text-white font-bold mb-4 text-center">
          Get Started With Silver Gate
        </h2>
        <p className="text-lg leading-relaxed text-white mb-6 text-center max-w-4xl mx-auto">
          After you write your book, the next step is to publish your story and get it into the hands of interested readers. If you want to retain maximum control over your book, consider self-publishing it. This method allows you to make the final decisions about everything from the cover design to printing. Additionally, you can earn higher royalties than you would if you published your book with a traditional publisher. Self-publishing may sound intimidating, but the process can be easy and fast with the help of a top-tier publishing company like Silver Gate Publishing. We offer a variety of services to support writers through the self-publishing process, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Book Cover Design */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaBook className="text-4xl text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Book Cover Design</h3>
            <p className="text-base leading-relaxed mb-4">
              We create genre-appropriate book covers that will catch readers’ attention. We offer several different packages to fit every budget and artistic need.
            </p>
           
          </div>
          {/* Editing Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaEdit className="text-4xl text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Editing Services</h3>
            <p className="text-base leading-relaxed mb-4">
              After you have spent countless hours writing and revising your book, your familiarity with the text can make it difficult to pick out content and grammar errors. Our book editing team will provide comprehensive feedback, from copyediting to in-depth developmental editing.
            </p>
           
          </div>
          {/* Marketing */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaBullhorn className="text-4xl text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Marketing</h3>
            <p className="text-base leading-relaxed mb-4">
              One of the most challenging aspects of publishing is making sure that readers can find and purchase your book. We provide book marketing services that make it easy for you to share your book with a diverse audience. For example, we can design intriguing back cover text and produce a custom author website.
            </p>
           
          </div>
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </div>
  )
}

export default page