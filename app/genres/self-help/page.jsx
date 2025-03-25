import ContactBanner from '@/app/Components/ContactBanner';
import { font } from '@/app/Components/font/font';
import Footer from '@/app/Components/Footer';
import Navbar from '@/app/Components/Navbar';
import Solutions from '@/app/Components/Solutions';
import React from 'react';

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
          <h1 className="text-3xl md:text-5xl mt-36 font-bold text-center">
            How-To Genre Book Publishing
          </h1>
          <h2 className="green-text text-4xl mt-2 max-w-4xl text-center">
            Share your wisdom and grow your brand with industry specific books.
          </h2>
          <p className="text-lg md:text-xl text-center mt-2 max-w-3xl">
            Publishing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of design choices, marketing strategies, and printing options that you need to navigate before your book finds its audience. Count on Silver Gate Publishing to guide you along the way.
          </p>
        </div>
      </div>

      <section className="mb-12 mt-12 px-14">
        <p className="text-black text-lg leading-relaxed">
          Share your wisdom and grow your brand by publishing How-To books. Silver Gate Publishing is the perfect partner for writers of all levels of experience. We help authors find self-publishing success and are proud of our work with clients who’ve published books.
        </p>
        <p className="text-black text-lg leading-relaxed mt-4">
          Take advantage of our expertise at any stage of the writing journey. We believe you have something important to say. And we can’t wait to hear it and help you share it with the world.
        </p>
      </section>

      <Solutions />

      {/* "Your Guide to Writing and Publishing Self-Help Books" Section */}
      <section className="py-12 bg-white text-black relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Top Gold Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[35rem] h-0.5 bg-[#d4af37]"></div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Your Guide to Writing and Publishing Self-Help Books
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Books in the self-help genre are popular choices for readers everywhere, bringing assistance and advice to numerous aspects of life. From mental health to finance books, self-help books bring real insight that readers can apply to their everyday lives, helping them reach their goals, overcome challenges, and more. Writing and publishing a self-help book is a challenging yet rewarding process, with the potential to help thousands of people and help you grow your career.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            While self-publishing a self-help book have many benefits, including total creative control, it can be hard to know where to start. Luckily, Silver Gate Publishing offers numerous publishing services for independent authors to guide them through the entire book publishing process.
          </p>
          <p className="text-lg leading-relaxed">
            Read on to learn more about the self-help book genre, as well as how to publish self-help books and an overview of the industry-leading publishing services that Silver Gate Publishing offers.
          </p>

          {/* Decorative Elements on the Right */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden md:block">
            <div className="relative">
              {/* Large Teal Circle */}
              <div className="w-28 h-28 customgreen rounded-full opacity-70"></div>
              {/* Gold Circle Outline */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-[#d4af37] rounded-full"></div>
              {/* Small Dots */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#d4af37] rounded-full"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-[#d4af37] rounded-full"></div>
              <div className="absolute top-4 right-0 w-1 h-1 bg-[#d4af37] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* "What Is the Self-Help Book Genre?" Section */}
      <section className="relative bg-[#1a2a44] text-white py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-6xl font-bold relative mb-6">
                What Is the Self-Help Book Genre?
                <span className="absolute left-0 md:left-0 bottom-[-10px] w-28 h-0.5 bg-[#d4af37]"></span>
              </h1>
              <p className="text-lg leading-relaxed">
                Self-help books are nonfiction guides that help readers solve problems or improve different areas of their lives. Also known as “self-improvement” books, they often give advice on how to improve yourself mentally, physically, financially, etc. Common self-help topics include mental health, finances, personal organization, confidence boosting, and strengthening relationships.
                <br /><br />
                As seen from these examples, many self-help books can also fall into other genres, like how-to, inspirational, or memoir. Yet, the overarching similarity among them all is that they are nonfiction books providing guidance on how to improve an area of the reader’s life or inspire them to try something new. Self-help books also typically relay knowledge from the author’ lived experiences, sharing guidance that worked for them personally.
              </p>
            </div>
            {/* Image Content */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/business.webp"
                alt="Self-Help Books"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-5 z-10 right-5">
          <svg
            className="w-8 h-8 text-[#d4af37]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
          </svg>
        </div>
        <div className="absolute top-7 right-10 rounded-full w-14 h-4 bg-[#00c4b4] transform rotate-45"></div>
      </section>

      {/* "Writing a Self-Help Book" Section */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center relative mb-6">
            Writing a Self-Help Book
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-0.5 bg-[#d4af37]"></span>
          </h1>
          <p className="text-lg text-center mb-10 max-w-4xl mx-auto">
            Writing a self-help book is more than just sharing advice — it’s about guiding readers toward meaningful change. To be successful, you must provide clear solutions to common problems your readers can relate to. Here are some steps to help you write a self-help book.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl green-text font-semibold">Identify a topic:</h2>
              <p className="text-base mt-4">
                Pick a topic you’re passionate about and have experience with. Your book should address a specific issue or challenge readers are facing.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Research:</h2>
              <p className="text-base mt-4">
                Dive deep into your topic to make sure your advice is backed by reliable information and best practices.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Define your audience:</h2>
              <p className="text-base mt-4">
                Understand who your readers are and what they’re looking for. Tailoring your message to a specific audience makes your book more impactful.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Create an outline:</h2>
              <p className="text-base mt-4">
                Arrange your ideas in a clear and organized way. This will help your book flow logically from one section to the next.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Define the problem:</h2>
              <p className="text-base mt-4">
                Clearly explain your book’s issue. Readers should quickly understand what problem you’re helping them solve.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Describe the history of the problem:</h2>
              <p className="text-base mt-4">
                Provide background on why the issue exists. This helps readers see the bigger picture and why solving it is so important.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Set up the audience to take action:</h2>
              <p className="text-base mt-4">
                Encourage your readers to take practical steps. Use motivating language to inspire action and change.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Give the reader action steps:</h2>
              <p className="text-base mt-4">
                Break down the steps readers can take to overcome the problem. Clear, actionable advice is key to a successful self-help book.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Review problems or issues the reader might encounter:</h2>
              <p className="text-base mt-4">
                Prepare your readers for potential obstacles and offer solutions to overcome them. Anticipate challenges to keep your readers motivated.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Include real-life examples:</h2>
              <p className="text-base mt-4">
                Add personal stories from your own experience to demonstrate how your advice works in real situations.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Make a promise:</h2>
              <p className="text-base mt-4">
                Set an expectation for what readers will gain by following your advice. A defined promise will keep readers motivated to keep reading.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Make a list:</h2>
              <p className="text-base mt-4">
                Use lists to break down complex ideas into easy-to-follow steps. They help readers follow along and stay engaged.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Motivate:</h2>
              <p className="text-base mt-4">
                End with an encouraging message. Remind your readers of their potential and keep them engaged throughout the book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "Publishing Self-Help Books" Section */}
      <section
        className="py-12 text-black bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Image Content */}
            <div className="flex-1 flex justify-center md:justify-start">
              <img
                src="/blackgirl.webp"
                alt="Girl Writing"
                className="max-w-full h-auto rounded-3xl"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold relative mb-6">
                Publishing Self-Help Books
                <span className="absolute left-1/2 md:left-0 transform md:transform-none -translate-x-1/2 bottom-[-10px] w-12 h-0.5 bg-[#d4af37]"></span>
              </h1>
              <p className="text-lg leading-relaxed mb-4">
                Every book genre has its own approach when it comes to publishing, marketing, and formatting, and self-help books are no exception. For self-help books, you’ll want a captivating title and an eye-catching cover to attract readers. Overall, the publishing process for self-help books involves:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed teal-bullets mb-4">
                <li>Editing the book for grammatical errors, cohesiveness, etc.</li>
                <li>Designing the front and back cover of the book</li>
                <li>Professionally formatting the book’s interior</li>
                <li>Printing physical copies</li>
                <li>Marketing your book</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Self-help books are usually self-published, which is a great way new authors to start their careers and reach niche audiences. Independent authors can follow these steps for self-publishing themselves or partner with experts to guide them through the process. Working with a professional publishing company like Silver Gate Publishing ensures your self-help book stands out from genre competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "Benefits of Self-Publishing" Section */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold relative mb-6">
                Benefits of Self-Publishing
                <span className="absolute left-1/2 md:left-0 transform md:transform-none -translate-x-1/2 bottom-[-10px] w-12 h-0.5 bg-[#d4af37]"></span>
              </h1>
              <p className="text-lg leading-relaxed mb-4">
                Compared to traditional publishing, self-publishing your self-help book comes with a lot of perks. While going the traditional route can offer some credibility, it often means long wait times, lower royalties, changes to your content, and less control. Self-publishing, on the other hand, lets you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed teal-bullets mb-4">
                <li>Publish your work quickly</li>
                <li>Retain full control over creativity, content, and design</li>
                <li>Publish books for niche audiences</li>
                <li>Start marketing whenever you’re ready</li>
                <li>Earn higher royalties from your sales</li>
                <li>Be a published author</li>
              </ul>
              <p className="text-lg leading-relaxed">
                While self-publishing is no easy feat, the rewards make the process worth it. Plus, professional publishing service providers for independent authors are here to help make the process a breeze.
              </p>
            </div>
            {/* Image Content */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/asiangirl.webp"
                alt="Girl with Book"
                className="max-w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* "How Silver Gate Can Help" Section */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center relative mb-6">
            How Silver Gate Can Help
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-0.5 bg-[#d4af37]"></span>
          </h1>
          <p className="text-lg text-center mb-10 max-w-4xl mx-auto">
            Self-publishing your self-help book can be challenging because there are so many steps to get it just right. Not only do you have to write your book, but you must also learn how to format, print, and advertise it. Working with a professional publishing company like Silver Gate Publishing takes you through each of these steps with ease, helping your book succeed. Take a look at our industry-leading publishing services below to learn how we can help get your book into the hands of your readers fast.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl green-text font-semibold">Writing:</h2>
              <p className="text-base mt-4">
                Silver Gate Publishing supports you right from the start. We provide countless free writing resources to guide you through the writing process for any genre, including self-help books. You can find helpful information on content writing, organization, storytelling, plot development, working through writer’s block, and so much more. Our guide, “Book Writing Process 101,” is a great place to start, as it provides many helpful tips for becoming a better writer.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Editing:</h2>
              <p className="text-base mt-4">
                Calling on a second pair of eyes to edit your book is essential for a self-published author. Silver Gate provides book editing services to refine your self-help book. With this service, our team of professional editors will polish your work, checking for grammar, cohesion, tone, and typos, and assessing your work compared to market research for your genre.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Cover Design:</h2>
              <p className="text-base mt-4">
                It’s no secret that people judge books by their covers — literally. Having an eye-catching cover on your self-help book is essential to reach more readers, and working with an expert cover designer can help. Silver Gate’s cover design services help authors create the perfect covers for their finished works, with consultations, revisions, and premium stock images included.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Interior Formatting:</h2>
              <p className="text-base mt-4">
                Interior formatting is what makes your book look professional and legible, so it’s important to get it right. Silver Gate’s interior formatting services ensure your self-help book is up to the genre’s standards. We offer à la carte services for your unique formatting needs, from e-books to custom formatting packages.
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Illustrations:</h2>
              <p className="text-base mt-4">
                Silver Gate’s book illustration services are excellent for self-publishers who are looking to bring their stories to life. With this service, authors can choose from a variety of in-house illustrators to match their ideal artists. After consultations and revisions, the completed work is ready to be added to your page(s).
              </p>
            </div>
            <div>
              <h2 className="text-xl green-text font-semibold">Printing:</h2>
              <p className="text-base mt-4">
                Once your self-help book is ready, it’s time to get it into your readers’ hands. Silver Gate Publishing takes pride in printing the highest quality books and providing a seamless, exceptional printing experience for independent authors, bringing your words to life on the canvas of a professionally printed book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New "Write Your Book and Let Us Handle the Rest" Section */}
      <section className="py-12 bg-[#1a2a44] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold relative mb-6">
            Write Your Book and Let Us Handle the Rest
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-0.5 bg-[#d4af37]"></span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Self-publishing a self-help book can be challenging, but the potential benefits make it worth your while. Partnering with a professional publishing company like Silver Gate Publishing allows you to focus on what you do best — writing. We take care of the editing, formatting, printing, and marketing processes for you so you can reap the rewards of your written work.
          </p>
          <button className="button-gradient text-black font-semibold py-3 px-6 rounded-md hover:bg-[#b8972f] transition-colors">
            Get Started!
          </button>
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </div>
  );
};

export default page;