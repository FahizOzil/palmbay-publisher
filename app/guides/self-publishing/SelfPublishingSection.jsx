"use client"

import React from 'react'
import { font } from '@/app/Components/font/font';

const SelfPublishingSection = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${font.className} relative mt-48 flex flex-col md:flex-row w-full px-4 lg:px-16 py-12 gap-8`}>
      
      {/* Left Side - Table of Contents (Sticky) */}
      <div className="w-full h-fit md:w-1/4 bg-gray-100 rounded-lg p-6 shadow-md 
        sticky top-24 max-h-[80vh] overflow-auto table-of-contents">
        <h3 className="text-teal-600 text-lg uppercase border-b pb-2">
          Table of Contents
        </h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li 
            className="cursor-pointer hover:text-teal-600 transition-colors"
            onClick={() => scrollToSection('traditional-vs-self')}
          >
            Traditional Publishing vs. Self-Publishing
          </li>
          <li 
            className="cursor-pointer hover:text-teal-600 transition-colors"
            onClick={() => scrollToSection('benefits')}
          >
            Benefits of Self-Publishing
          </li>
          <li 
            className="cursor-pointer hover:text-teal-600 transition-colors"
            onClick={() => scrollToSection('how-to')}
          >
            How to Self-Publish a Book
          </li>
          <li 
            className="cursor-pointer hover:text-teal-600 transition-colors"
            onClick={() => scrollToSection('costs')}
          >
            What Does It Cost to Self-Publish a Book?
          </li>
          <li 
            className="cursor-pointer hover:text-teal-600 transition-colors"
            onClick={() => scrollToSection('pricing')}
          >
            Pricing Your Book
          </li>
          <li 
            className="cursor-pointer hover:text-teal-600 transition-colors"
            onClick={() => scrollToSection('earnings')}
          >
            How Much Do Authors Make?
          </li>
          <li 
            className="cursor-pointer hover:text-teal-600 transition-colors"
            onClick={() => scrollToSection('get-started')}
          >
            Get Started With Publication
          </li>
        </ul>
      </div>

      {/* Middle Section - Main Content */}
      <div className="w-full text-xl md:w-2/4">
        <p className="text-gray-700">
          As technology continues to reshape how we consume literature, self-publishing has become a powerful avenue for writers looking for greater control...
        </p>
        <h2 id="traditional-vs-self" className="text-4xl text-gray-900 mt-6">
          Traditional Publishing vs. Self-Publishing
        </h2>
        <p className="mt-4 text-gray-700">
          When it comes to publishing your book, authors can use traditional publishing or self-publishing services...
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          What Is Traditional Publishing?
        </h3>
        <p className="mt-4 text-gray-700">
          Traditional publishing is the time-tested method where authors submit their manuscripts to literary agents...
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          What Is Self-Publishing?
        </h3>
        <p className="mt-4 text-gray-700">
          Self-publishing is a more independent approach where the author takes charge of the entire publishing process...
        </p>
        <h2 id="benefits" className="text-5xl text-gray-900 mt-6">
          Benefits of Self-Publishing
        </h2>
        <p className="mt-4 text-gray-700">
          It’s not always easy to decide between traditional publishing and self-publishing a book...
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          No Gatekeepers
        </h3>
        <p className="mt-4 text-gray-700">
          In the traditional publishing space, authors often must convince literary agents or publishing houses...
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          Higher Margins
        </h3>
        <p className="mt-4 text-gray-700">
          Self-published authors tend to enjoy higher profit margins compared to traditional publishing...
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          More Control
        </h3>
        <p className="mt-4 text-gray-700">
          Self-publishing not only provides higher profit margins but also gives authors more control...
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          Maintain Rights
        </h3>
        <p className="mt-4 text-gray-700">
          In addition to creative control, authors retain full rights over their works when they self-publish...
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          Timeline
        </h3>
        <p className="mt-4 text-gray-700">
          Traditional publishing processes involve submission, review, editing, and production...
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          Equal Quality
        </h3>
        <p className="mt-4 text-gray-700">
          The perception that self-published books don’t match the quality of traditionally published ones...
        </p>
        <h2 id="how-to" className="text-5xl text-gray-900 mt-6">
          How to Self-Publish a Book
        </h2>
        <p className="mt-4 text-gray-700">
          The appeal of self-publishing has made it the fastest-growing segment in book publishing...
        </p>
        <p className='text-yellow-600 mt-12 text-3xl text-center'>Step</p>
        <p className='text-yellow-600 mt-2 text-5xl text-center'>— 01 —</p>
        <h3 className="text-3xl text-center text-teal-600 mt-6">
          Equal Quality
        </h3>
        <p className="mt-4 text-gray-700">
        If you have a finished book ready for publication, congratulations! You’re ready to move on to editing. If not, that’s okay. It’s easy for authors to get excited and start thinking about publishing before the book is finished — or even started. Here are some tips for finishing your book.
        </p>
        <h3 className="text-2xl text-yellow-600 mt-6">
          KEEP THE MOMENTUM
        </h3>
        <p className="mt-2 text-gray-700">
        Use your excitement to fuel your writing. Focus on why you want to publish a book and what you want to communicate with it. Clearly define the purpose behind your book — whether it’s to share a compelling story, inspire change, or offer valuable advice. By maintaining a sharp focus on your purpose, each word becomes significant, and your narrative gains a compelling direction.
        </p>
        <h3 className="text-2xl text-yellow-600 mt-6">
          MAKE AN OUTLINE
        </h3>
        <p className="mt-2 text-gray-700">
        If you’re struggling to make progress, create an outline. List the sections you want to include. It’s for your eyes only, so don’t worry about formatting or structure. Just get your ideas on the page, Then, take it one piece at a time. Set goals for yourself, like finishing a chapter by a specific date or writing a certain number of pages per day.
        </p>
        <h3 className="text-2xl text-yellow-600 mt-6">
        Ask For Help
        </h3>
        <p className="mt-2 text-gray-700">
        Some people find it helpful to have “writing buddies” who can check in on progress and offer feedback on artistic choices. Having someone read an excerpt of your book can calm lingering doubts and show you the book’s next step.
        </p>
        <p className="mt-6 text-gray-700">
        If you want more professional support, there are several avenues to explore. Joining a writing group provides a collaborative environment where you can share your work, receive fresh perspectives, and engage in constructive discussions. Attending a writing camp or workshop offers an immersive experience to refine your craft, learn new skills, and connect with fellow writers. For a personalized approach, hiring a writing coach can provide targeted guidance, tailored feedback, and mentorship that aligns with your specific writing goals.
        </p>
        <p className="mt-6 text-gray-700">
        Feedback during the writing process is optional, but you’ll definitely need someone to read your finished draft.
        </p>

        <p className='text-yellow-600 mt-12 text-3xl text-center'>Step</p>
        <p className='text-yellow-600 mt-2 text-5xl text-center'>— 02 —</p>
        <h3 className="text-3xl text-center text-teal-600 mt-6">
        Book Editing
        </h3>
        <p className="mt-4 text-gray-700">
        A first draft is never ready for publication, nor is a second. It takes multiple read-throughs and various degrees of re-writing before a book should go to print. Here’s the process the pros use.
        </p>
        <h3 className="text-2xl text-yellow-600 mt-6">
        Self-Editing
        </h3>
        <p className="mt-2 text-gray-700">
        Your first draft should be for your eyes only. It’s possible to give your raw first draft to a beta reader, but you’ll get more useful feedback if you’ve given it a self-edit first. However, you shouldn’t self-edit right away. Instead, put your manuscript aside for at least a few days. A week is even better. (According to The Write Life, Stephen King waits for six weeks!) By giving yourself some time, you ensure that when you pick your book back up again, you’ll be looking at it with fresh eyes. <br/> When Self-Editing, make sure:
        </p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>The first few pages grab the reader’s attention.</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>The language is vivid (show, don’t tell!).</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>You don’t overuse certain words..</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>You don’t use complex words where simple ones would do.</p>

        <h3 className="text-2xl text-yellow-600 mt-6">
        BETA TESTING
        </h3>
        <p className="mt-2 text-gray-700">
        Beta readers are volunteers who read your manuscript and offer feedback. We don’t provide beta readers at Palmetto, but if you can find one, they can provide valuable feedback to refine your final draft. The Write Life recommends beta readers who are:
        </p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>Part of your target audience. If you wrote a YA novel, ask a friend’s teenager to be your beta reader. If you wrote a nonfiction book for entrepreneurs, choose a business owner.</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>Not too close to you. Family members and friends make enthusiastic beta readers. But they’re inclined to boost your ego. Acquaintances, coworkers, and friends of friends are more objective.</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>Willing to be honest. Only take beta readers who are explicitly okay with offering constructive feedback.</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>Not too busy. Reading an entire book takes time. You want someone who will get back to you in a timeframe that works for you.</p>

        <p className='text-yellow-600 mt-12 text-3xl text-center'>Step</p>
        <p className='text-yellow-600 mt-2 text-5xl text-center'>— 03 —</p>
        <h3 className="text-3xl text-center text-teal-600 mt-6">
          Professional Book Editing
        </h3>
        <p className="mt-2 text-gray-700">
        Don’t underestimate the power of a great book design concept. When in the market for a new book, your audience will be faced with hundreds of choices.
        </p>
        <h3 className="text-2xl text-yellow-600 mt-6">
        BOOK COVER DESIGN
        </h3>
        <p className="mt-2 text-gray-700">
        Everyone says, “Don’t judge a book by its cover,” but we all do — including your future audiences. If your book doesn’t look professional and polished, discerning readers may pass it by. A professional book cover design helps you put your best foot forward, capturing the attention of potential readers and signaling the care and quality they can expect within the pages of your book.
        </p>
        <h3 className="text-2xl text-yellow-600 mt-6">
        INTERIOR BOOK DESIGN
        </h3>
        <p className="mt-2 text-gray-700">
        Book interior formatting matters, too, especially if you publish digitally. Your book needs to be readable across a range of devices. Proper formatting makes that happen.
        </p>
        <p className="mt-6 text-gray-700">
        Readers also look for signs of quality in print books. That includes:
        </p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>Page size</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>Paragraph construction and line spacing</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>Font size and type</p>
        <p className='mt-4 text-xl text-gray-700'><span className='text-yellow-600 text-3xl'>&#x2022;&nbsp;</span>Chapter title styling</p>
        <h3 className="text-2xl text-yellow-600 mt-6">
        IMAGES
        </h3>
        <p className="mt-2 text-gray-700">
        If you want to use your own images or illustrations for your book, ensure they’re high-quality. You’ll also want to ensure you own the rights to all the images you use. Consider your book’s trim size as well. Check out our Complete Guide to the Perfect Book Layout to learn more about trim sizes and book dimensions.
        </p>
      <p className='text-yellow-600 mt-12 text-3xl text-center'>Step</p>
        <p className='text-yellow-600 mt-2 text-5xl text-center'>— 04 —</p>
        <h3 className="text-3xl text-center text-teal-600 mt-6">
        Book Metadata
        </h3>
        <p className="mt-2 text-gray-700">
        Paying attention to your book’s metadata is a critical step that can impact your book’s discoverability and appeal to readers. The metadata consists of essential information that helps potential readers, distributors, and retailers understand what your book is about and how it fits into the market.
        </p>

        {/* Add placeholder sections for remaining items */}
        <h2 id="costs" className="text-5xl text-gray-900 mt-6">
          What Does It Cost to Self-Publish a Book?
        </h2>
        <h2 id="pricing" className="text-5xl text-gray-900 mt-6">
          Pricing Your Book
        </h2>
        <h2 id="earnings" className="text-5xl text-gray-900 mt-6">
          How Much Do Authors Make?
        </h2>
        <h2 id="get-started" className="text-5xl text-gray-900 mt-6">
          Get Started With Publication
        </h2>
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
  )
}

export default SelfPublishingSection;