import React from 'react'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'
import { font } from '@/app/Components/font/font'
import Solutions from '@/app/Components/Solutions'
import ContactBanner from '@/app/Components/ContactBanner'

const FictionGenrePage = () => {
  return (
    <div className={`${font.className} min-h-screen flex flex-col`}>
      <Navbar />
      <div
        className="relative w-full min-h-[20rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="absolute inset-0 h-full flex flex-col justify-center items-center text-black px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Fiction Genre Book Writing
          </h1>
          <p className="text-lg md:text-xl text-center mt-4 max-w-3xl">
            The fiction genre allows writers to share creative stories with readers. Fiction books feature imaginary characters, plot elements, or settings.
          </p>
        </div>
      </div>
      <Solutions />
      <div className="mx-auto py-6">
        <section className="mb-12 px-14">
          <p className="text-black text-lg leading-relaxed">
            The fiction genre allows writers to share creative stories with readers. Fiction books feature imaginary characters, plot elements, or settings. This flexible genre can depict invented characters falling in love, retell historical events, or take readers on a tour of a fantastical world — sometimes all in the same book.
          </p>
          <p className="text-black text-lg leading-relaxed mt-4">
            How to write a fiction novel and publishing that novel requires creativity, effort, and time. Luckily, there are plenty of resources available to help you develop your book from a simple idea to a polished product. The experts at Palmetto Publishing can assist you with every step of the publishing process for your fiction book.
          </p>
        </section>

        {/* Fiction vs Nonfiction Section */}
        <section className="relative bg-sky-950 text-white py-12 px-8">
          {/* Decorative Graphic (Placeholder) */}
          <div className="absolute top-4 right-4 hidden md:block">
            {/* You can add an SVG or image here for the teal and gold starburst graphic */}
            <div className="w-12 h-12 bg-teal-500 rounded-full opacity-50"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full absolute top-0 right-0 transform translate-x-2 -translate-y-2"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Fiction vs Nonfiction
                <div className="w-16 h-1 bg-yellow-500 mt-2"></div>
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Fiction books include imaginary elements invented by the writer. The narratives typically have made-up characters, events, objects, and places. For example, Christopher Paolini’s fantasy fiction novel <em>Eragon</em> takes place in the imaginary country of Alagaësia, and the narrative includes dragons and other unreal creatures.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                By contrast, nonfiction books provide factual accounts of actual events, people, or subjects. Writing a nonfiction book requires writers conduct extensive research and interview witnesses to ensure that they tell a reliable and unbiased narrative. Fiction writers also frequently draw on research, but they build on and often manipulate these facts to develop their creative story.
              </p>
              <p className="text-lg leading-relaxed">
                Many books blend aspects of fiction and nonfiction, which can make it challenging for readers to tell the difference between the two genres. For instance, F. Scott Fitzgerald set <em>The Great Gatsby</em> in the actual locations of Long Island and New York City, but the plot centers on the characters and events he imagined. Generally, if a book includes any invented elements that exist only in the writer’s imagination, publishers and readers classify it as fiction.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/Design-img.png"
                alt="Person working on a laptop"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* The Fundamentals of Fiction Section */}
        <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-14">
          <h2 className="text-4xl font-bold text-black mb-6">
            The Fundamentals of Fiction
          </h2>
          <p className="text-lg text-black leading-relaxed mb-8">
            While fiction books can cover a variety of scenarios and topics, texts in this genre share several fundamental elements. By creatively incorporating these fundamentals in your fiction writing, you can create an engaging and unique book.
          </p>

          {/* Characters Subsection */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              {/* Characters Icon (Placeholder) */}
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  className="w-full h-full text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black">Characters</h3>
            </div>
            <p className="text-lg text-black leading-relaxed mb-4">
              Characters are an essential element of any fiction book. You can include animals, humans, imaginary creatures, or even trees as characters. Because fiction allows you to exercise your creativity, the options for inventing unique characters are limitless. Characters typically play particular roles in a fiction book. Common types of characters include:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>Antagonist:</strong> The main villain or opposing force that the hero must overcome.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>Protagonist:</strong> The main character who primarily drives the book’s plot.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>Narrator:</strong> The perspective that tells the story. Sometimes, the narrator and the protagonist are the same character. In other cases, another person — such as an external observer — recounts the narrative.
                </span>
              </li>
            </ul>
          </div>

          {/* Plot Subsection */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              {/* Plot Icon (Placeholder) */}
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  className="w-full h-full text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black">Plot</h3>
            </div>
            <p className="text-lg text-black leading-relaxed mb-4">
              The plot refers to the series of conflicts or events that occur in the story. The plot often follows a cause-and-effect structure: A happens, so the characters do B, which results in C. Many fiction writers structure their books around a few basic plot components:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>Exposition:</strong> An introduction to the characters and the world where the story takes place.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>Rising action:</strong> Conflict between the characters leads to a series of incidents and interactions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>Climax:</strong> The peak of the story when the protagonist usually confronts and overcomes their chief antagonist.
                </span>
              </li>
            </ul>
          </div>

          {/* Point of View Subsection */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              {/* Point of View Icon (Placeholder) */}
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  className="w-full h-full text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black">Point of View</h3>
            </div>
            <p className="text-lg text-black leading-relaxed mb-4">
              The perspective(s) from which the writer tells the story. There are three main points of view:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>First-person:</strong> The narrator recounts the story from their own internal perspective, using the “I” pronoun.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>Second-person:</strong> These books are told from the perspective of “you.”
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-black">
                  <strong>Third-person:</strong> The narrator tells the story from a more distanced perspective, using third-person pronouns like “she” and “they” to refer to all of the characters.
                </span>
              </li>
            </ul>
          </div>

          {/* Setting Subsection */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              {/* Setting Icon (Placeholder) */}
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  className="w-full h-full text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black">Setting</h3>
            </div>
            <p className="text-lg text-black leading-relaxed">
              The setting refers to the context, location, and time in which the story takes place. Fiction gives writers the flexibility to reinvent real-world settings or to imagine completely new worlds.
            </p>
          </div>

          {/* Theme Subsection */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              {/* Theme Icon (Placeholder) */}
              <div className="w-8 h-8 mr-3 flex-shrink-0">
                <svg
                  className="w-full h-full text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7zM2 2v20h20V2H2zm18 18H4V4h16v16z" />
                  <path d="M12 8l4 4-4 4-1.41-1.41L13.17 12l-2.58-2.59L12 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black">Theme</h3>
            </div>
            <p className="text-lg text-black leading-relaxed">
              Fiction stories explore abstract concepts and convey deeper messages about life. For example, fairy tales often include themes like the dangers of the wilderness and the importance of obeying parental figures.
            </p>
          </div>
        </section>

        {/* Common Characteristics of Fiction Section */}
        <section
          className="relative py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
          style={{ backgroundImage: "url('/whitewood.png')" }}
        >
          {/* Decorative Graphic (Placeholder) */}
          <div className="absolute top-4 left-4 hidden md:block">
            {/* You can add an SVG or image here for the teal and gold circle graphic */}
            <div className="w-16 h-16 bg-teal-500 rounded-full opacity-50 relative">
              <div className="w-4 h-4 bg-yellow-500 rounded-full absolute top-2 left-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full absolute bottom-2 right-2"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-4">
              Common Characteristics of Fiction
              <div className="w-16 h-1 bg-yellow-500 mt-2"></div>
            </h2>
            <p className="text-lg text-black leading-relaxed mb-8">
              While all fiction books share some common characteristics, you can further divide these texts into genres. Each genre has certain conventions, styles, and tropes that readers recognize and expect. For example, romance books typically feature tropes like a happy ending, love triangles, and marriage. Popular fiction genres include:
            </p>

            {/* Genres List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Action-adventure books</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Fantasy books</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Horror books</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Literary, or realistic, fiction books</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Mystery books</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Romance books</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Science fiction books</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Thriller books</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Young adult books</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Historical fiction</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-black leading-relaxed mb-8">
              Each genre also includes subgenres or smaller clusters of texts that share more specific characteristics. For instance, the mystery genre includes these subgenres:
            </p>

            {/* Subgenres List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Cozy mystery</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Forensic thriller</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Medical thriller</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-lg text-black">Police procedural</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-black leading-relaxed">
              By learning the conventions of your chosen genre, you can more effectively advertise your book to interested readers. For instance, you can follow trends in cover designs for your genre to create an eye-catching cover that will attract the right audience.
            </p>
          </div>
        </section>
      </div>
      <ContactBanner />
      <Footer />
    </div>
  )
}

export default FictionGenrePage