"use client"

import React, { useEffect } from 'react';
import ContactBanner from '@/app/Components/ContactBanner';
import { font } from '@/app/Components/font/font';
import Footer from '@/app/Components/Footer';

const WritingSection = () => {
  // Ensure scrollToSection only runs on the client side
  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Log to check if the component mounts
  useEffect(() => {
    console.log("WritingSection component mounted successfully");
  }, []);

  return (
    <div>
      {/* Main Content Container */}
      <div className={`${font?.className || ''} relative mt-48 flex flex-col md:flex-row w-full px-4 lg:px-16 py-12 gap-8`}>
        
        {/* Left Side - Table of Contents (Sticky) */}
        <div className="w-full h-fit md:w-1/4 bg-gray-100 rounded-lg p-6 shadow-md sticky top-24 max-h-[80vh] overflow-auto table-of-contents">
          <h3 className="text-teal-600 text-lg uppercase border-b pb-2">
            Table of Contents
          </h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('embrace-identity')}
            >
              Embrace Your Identity as a Writer
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('writing-space')}
            >
              Set Up Your Writing Space
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('writing-schedule')}
            >
              Create a Writing Schedule
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('develop-idea')}
            >
              Develop Your Book Idea
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('research-genre')}
            >
              Research Your Genre
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('first-draft')}
            >
              Write Your First Draft
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('revise-edit')}
            >
              Revise and Edit Your Manuscript
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('get-feedback')}
            >
              Get Feedback from Readers
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('professional-editor')}
            >
              Work with a Professional Editor
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('design-book')}
            >
              Design Your Book’s Interior and Cover
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('publish-book')}
            >
              Publish Your Book
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('collaborate-experts')}
            >
              Collaborate With Publishing Experts
            </li>
          </ul>
        </div>

        {/* Middle Section - Main Content */}
        <div className="w-full text-xl md:w-2/4">
          <p className="text-gray-700">
            Writing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of creative decisions, editing stages, and publishing options to navigate before your book reaches its readers. Count on Palmetto Publishing to guide you along the way.
          </p>
          <p className="mt-4 text-gray-700">
            To bring your story to life in today’s competitive literary world, it’s essential to understand the writing process. You’ve got a story to tell, and now it’s time to turn that idea into a manuscript that captivates your audience.
          </p>
          <p className="mt-4 text-gray-700">
            As an author, writing might come naturally, but structuring your process and seeing it through to publication can seem daunting. Luckily, writing is a craft that can be honed with the right steps—turning your ideas into a story that resonates with readers.
          </p>
          <p className="mt-4 text-gray-700">
            In this complete guide to writing a book, we’ll break down everything you need to know to create your work. From developing your idea to publishing your book, keep reading to learn how to bring your story into readers’ hands.
          </p>

          <h2 id="embrace-identity" className="text-5xl text-gray-900 mt-12">
            Embrace Your Identity as a Writer
          </h2>
          <p className="mt-4 text-gray-700">
            The first step in mastering how to write books is to embrace your identity as a writer. Announce it to yourself and others: “I am a writer.” This simple act can help you get into the mindset of being a writer.
          </p>
          <p className="mt-4 text-gray-700">
            There’s one quality that defines a writer—they write. It’s easy to think about writing, but you need to create the habit of writing to make real progress. Embracing your identity as a writer sets the foundation for the journey ahead.
          </p>

          <h2 id="writing-space" className="text-5xl text-gray-900 mt-12">
            Set Up Your Writing Space
          </h2>
          <p className="mt-4 text-gray-700">
            When you think about the physical act of writing, what do you envision? What does your ideal office look like, and what tools do you need? Carve out a writing space for yourself.
          </p>
          <p className="mt-4 text-gray-700">
            Some people do their best work among others, and other writers require absolute privacy. Whether it’s a quiet corner of your home or a bustling café, find a space that inspires you to write consistently.
          </p>

          <h2 id="writing-schedule" className="text-5xl text-gray-900 mt-12">
            Create a Writing Schedule
          </h2>
          <p className="mt-4 text-gray-700">
            It is crucial for the book writing process to settle on a schedule that allows you to write consistently. Assign yourself blocks of writing time and pencil them into your schedule. Treat them with the respect you’d give any other commitment.
          </p>
          <p className="mt-4 text-gray-700">
            Remember, frequency matters as much as duration when writing a book. It isn’t easy to finish a book when you only work in fits and starts. If you have a busy schedule, try writing for fifteen minutes at the same time every day. You’ll still need to find larger blocks of time, but stay in touch with your project between them.
          </p>

          <h2 id="develop-idea" className="text-5xl text-gray-900 mt-12">
            Develop Your Book Idea
          </h2>
          <p className="mt-4 text-gray-700">
            Figuring out how to write a book—your particular book—is hard. You need to find the space in your world and the resources to help you stay on track. Start by developing a clear idea for your book.
          </p>
          <p className="mt-4 text-gray-700">
            Whether you’re writing fiction, nonfiction, or a memoir, take the advice of a top-tier publishing company: it’s time to put pen to paper and start writing that book you’ve imagined for years. Jot down your ideas, outline your story, and define the core message or theme you want to convey.
          </p>

          <h2 id="research-genre" className="text-5xl text-gray-900 mt-12">
            Research Your Genre
          </h2>
          <p className="mt-4 text-gray-700">
            Researching your primary chosen genre will provide you with inspiration as to how to write a compelling story. Though your novel will likely fall into a distinct genre, you don’t need to feel bound to every convention of that genre; many novels contain elements typical of multiple genres.
          </p>
          <p className="mt-4 text-gray-700">
            Read books like yours to understand what readers expect. What do you find when you open a book from that aisle of the library? Palmetto’s authors write in a wide range of genres, and you can find their titles in our bookstore for inspiration.
          </p>

          <h2 id="first-draft" className="text-5xl text-gray-900 mt-12">
            Write Your First Draft
          </h2>
          <p className="mt-4 text-gray-700">
            Once you’ve got a story idea in your head, it’s time to learn how to put it into the proper words. Whether you’re a beginner or a fairly seasoned writer, following a structured process will help keep you on track to a beautiful, publish-ready work.
          </p>
          <p className="mt-4 text-gray-700">
            Don’t try to write your book all at once—break it into sections. Remember that your book doesn’t have to be perfect the first time. Don’t worry about what others will think. Just focus on getting your ideas down on the page.
          </p>

          <h2 id="revise-edit" className="text-5xl text-gray-900 mt-12">
            Revise and Edit Your Manuscript
          </h2>
          <p className="mt-4 text-gray-700">
            A writer’s novel is only as good as their edits. Putting your eyes—and others’—on your words several times over is the best way to improve your story’s readability, grammar, spelling, and more.
          </p>
          <p className="mt-4 text-gray-700">
            Book editing is an iterative process, not a single box you can check on the way to publication. You may need another draft—or three. That’s okay and perfectly normal. Set your manuscript aside for a few days, then revisit it with fresh eyes to refine your work.
          </p>

          <h2 id="get-feedback" className="text-5xl text-gray-900 mt-12">
            Get Feedback from Readers
          </h2>
          <p className="mt-4 text-gray-700">
            After meticulously combing through your manuscript, give it to someone else to read and review. Ask for feedback on spelling, grammar, and overall development. If possible, give it to someone with editing experience or a natural talent for writing to further refine your manuscript.
          </p>
          <p className="mt-4 text-gray-700">
            Once family and friends have read it, pass it along to an acquaintance, new friend, or stranger—someone who isn’t closely connected to you. Ask them to read it and tell you what worked, what didn’t, and what was confusing. While your story is your baby, accepting constructive feedback is critical.
          </p>

          <h2 id="professional-editor" className="text-5xl text-gray-900 mt-12">
            Work with a Professional Editor
          </h2>
          <p className="mt-4 text-gray-700">
            Now that your book has gone through several people for feedback, it’s time to pass your manuscript to a professional editor. A professional editor will look at your manuscript and turn it into a polished product.
          </p>
          <p className="mt-4 text-gray-700">
            Editors know industry standards and what resonates with readers, and they’ll make sure your book is as good as it can be. They’ll also catch errors that a writer or beta reader can easily miss. Palmetto Publishing offers various editing services, from comprehensive developmental editing to copy editing.
          </p>

          <h2 id="design-book" className="text-5xl text-gray-900 mt-12">
            Design Your Book’s Interior and Cover
          </h2>
          <p className="mt-4 text-gray-700">
            You’re not done quite yet. After all, your goal was writing a book, not a manuscript. Technically, you can convert a text document into an e-book on your own, but a professional book design gives your book an edge.
          </p>
          <p className="mt-4 text-gray-700">
            Covers matter—amateurish designs can deter readers from investing their time and money in your book. Palmetto’s book interior formatting ensures the best reading experience for all your soon-to-be fans. Add any necessary images to the book, and consider using a professional illustrator for high-impact areas like the title page.
          </p>

          <h2 id="publish-book" className="text-5xl text-gray-900 mt-12">
            Publish Your Book
          </h2>
          <p className="mt-4 text-gray-700">
            You’re ready to send your baby out into the world. Self-publishing can be a nerve-wracking process, but there are things you can do to increase your chances of success. Publishing with Palmetto also gives you access to our on-demand book printing.
          </p>
          <p className="mt-4 text-gray-700">
            Order only the copies you want for yourself, and then let us handle printing needs as they arise. If you want people to love your book, you have to let them know it exists first. Palmetto’s book marketing packages prepare you for a successful launch.
          </p>

          <h2 id="collaborate-experts" className="text-5xl text-gray-900 mt-12">
            Collaborate With Publishing Experts
          </h2>
          <p className="mt-4 text-gray-700">
            When you partner with Palmetto Publishing, you open the door to a dynamic process that brings your creation to life. Your journey begins with a consultation call with your dedicated publishing consultant. We’re not just interested in your book; we’re invested in your vision.
          </p>
          <p className="mt-4 text-gray-700">
            Palmetto Publishing is a top-tier publishing company offering quality services for independent authors—including editing, cover design, formatting, distribution, and printing. We collaborate closely with authors to bring their literary dreams to life through tailored packages.
          </p>
          <p className="mt-4 text-gray-700">
            Your journey with us is collaborative. Every step of the way, we value your insights, champion your creativity, and encourage your active participation. Writing a book can be challenging, but you don’t have to do it alone. Reach out to Palmetto Publishing today to get started.
          </p>
        </div>

        {/* Right Side - Call to Action (Sticky) */}
        <div className="w-full h-fit md:w-1/4 customgreen text-white p-6 rounded-lg shadow-md 
          sticky top-24 max-h-[80vh] overflow-auto call-box flex flex-col items-center text-center">
          <h3 className="text-2xl">Get Started On Your Publishing Journey</h3>
          <button className="mt-4 button-gradient text-black px-6 py-2 rounded-md hover:bg-yellow-400">
            GET STARTED!
          </button>
          <p className="mt-4">Or call us</p>
          <p className="text-2xl">888 408 8965</p>
        </div>
      </div>

      {/* Add fallbacks for ContactBanner and Footer */}
      {ContactBanner ? <ContactBanner /> : <div className="text-gray-700 p-4">ContactBanner failed to load</div>}
      {Footer ? <Footer /> : <div className="text-gray-700 p-4">Footer failed to load</div>}
    </div>
  );
};

export default WritingSection;