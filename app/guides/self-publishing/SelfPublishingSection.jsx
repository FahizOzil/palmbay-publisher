"use client"

import React from 'react'
import { font } from '@/app/Components/font/font';
import ContactBanner from '@/app/Components/ContactBanner';
import Footer from '@/app/Components/Footer';

const SelfPublishingSection = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
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
        As technology continues to reshape how we consume literature, self-publishing has become a powerful avenue for writers looking for greater control, flexibility, and direct access to their audience. However, publishing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of design choices, marketing strategies, and printing options that you need to navigate before your book finds its audience. Count on Palmetto Publishing to guide you along the way. In this complete guide, we’ll explore how to publish your own book and how Palmetto can help every step of the way.
        </p>
        <h2 id="traditional-vs-self" className="text-4xl text-gray-900 mt-6">
          Traditional Publishing vs. Self-Publishing
        </h2>
        <p className="mt-4 text-gray-700">
        When it comes to publishing your book, authors can use traditional publishing or self-publishing services. Here’s what these processes entail and how they differ.
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          What Is Traditional Publishing?
        </h3>
        <p className="mt-4 text-gray-700">
        Traditional publishing is the time-tested method where authors submit their manuscripts to literary agents who act as intermediaries between authors and publishers. If accepted, the publisher handles the entire publishing process, including editing, cover design, printing, distribution, and marketing. Authors usually receive an advance against royalties, but a significant portion of the book’s earnings go to the publisher, literary agent, and intermediaries. While traditional publishing provides the support of an experienced team, it often involves a longer timeframe and less control for the author.
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          What Is Self-Publishing?
        </h3>
        <p className="mt-4 text-gray-700">
        Self-publishing is a more independent approach where the author takes charge of the entire publishing process. Authors can use self-publishing platforms and services to publish their work in digital, print, and audio formats. With self-publishing, authors typically earn higher profit margins per sale, retain ownership of their work, and can bring their books to market much faster than traditional publishing. While it involves more hands-on involvement from the author, self-publishing provides greater creative autonomy and the potential for increased financial returns.
        </p>
        <h2 id="benefits" className="text-5xl text-gray-900 mt-6">
          Benefits of Self-Publishing
        </h2>
        <p className="mt-4 text-gray-700">
        It’s not always easy to decide between traditional publishing and self-publishing a book. On one hand, traditional publishers give your book a certain level of credibility. A contract from a publishing house tells booksellers that someone knowledgeable has backed your idea. But that credibility can come at a cost. Here are some reasons why self-publishing a book may be a better option.
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          No Gatekeepers
        </h3>
        <p className="mt-4 text-gray-700">
        In the traditional publishing space, authors often must convince literary agents or publishing houses to take on their work. Self-publishing eliminates this hurdle, letting authors bring their stories directly to readers. This freedom enables a diverse range of voices and stories to find their audience without being filtered through the subjective judgments of industry gatekeepers.
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          Higher Margins
        </h3>
        <p className="mt-4 text-gray-700">
        Self-published authors tend to enjoy higher profit margins compared to traditional publishing. With traditional publishing, many book sales go to publishers, literary agents, and distributors. According to Writer’s Digest, traditionally published authors only keep 10% to 15% of a book’s profit. Self-published authors can keep up to 100%, depending on arrangements with sellers. This financial advantage provides authors with greater control over their income and the ability to invest in future projects.
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          More Control
        </h3>
        <p className="mt-4 text-gray-700">
        Self-publishing not only provides higher profit margins but also gives authors more control over the creative process. In traditional publishing, decisions on editing, cover design, and marketing are often delegated to a team. However, with self-publishing a book, authors can choose their editors and designers, ensuring their work aligns with their artistic vision.
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          Maintain Rights
        </h3>
        <p className="mt-4 text-gray-700">
        In addition to creative control, authors retain full rights over their works when they self-publish. Unlike traditional publishing contracts, which often require authors to relinquish a significant portion of their rights, self-published authors maintain ownership. This allows authors to explore alternative publishing avenues, adaptations, and licensing opportunities without constraints.
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          Timeline
        </h3>
        <p className="mt-4 text-gray-700">
        Traditional publishing processes involve submission, review, editing, and production, which can be very time-consuming. It can take months or years to even find a literary agent. However, with self-publishing, authors can set their own pace and get their books into the hands of readers in just a matter of weeks.
        </p>
        <h3 className="text-3xl text-teal-600 mt-6">
          Equal Quality
        </h3>
        <p className="mt-4 text-gray-700">
        The perception that self-published books don’t match the quality of traditionally published ones is quickly fading away. Thanks to the availability of professional editors, designers, and formatting tools, self-published authors now have the means to create premium books. Many accomplished self-published authors make wise investments in professional services to guarantee that their work not only meets but surpasses industry standards. Consequently, self-published authors are rightfully earning the recognition they deserve.
        </p>
        <h2 id="how-to" className="text-5xl text-gray-900 mt-6">
          How to Self-Publish a Book
        </h2>
        <p className="mt-4 text-gray-700">
        The appeal of self-publishing has made it the fastest-growing segment in book publishing, according to the Alliance of Independent Authors. It’s still not an easy road, but you can navigate it with the right guidance. Following these steps, will provide everything you need to know on self-publishing a book.
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
        <h3 className="text-2xl text-yellow-600 mt-6">
        BOOK TITLE
        </h3>
        <p className="mt-2 text-gray-700">
        Your book’s title is the first interaction readers have with your work, making it a crucial element of your book’s identity. It should be catchy, memorable, and reflect the essence of your book. A well-crafted title can pique curiosity and entice potential readers to explore further.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Book Description
        </h3>
        <p className="mt-2 text-gray-700">
        Your book description should be engaging and informative to convince readers to open your book. This brief yet powerful text should provide a snapshot of your book’s theme, main characters, and the unique elements that set it apart. A captivating description encourages readers to delve into the world you’ve created.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        ISBN
        </h3>
        <p className="mt-2 text-gray-700">
        Securing an ISBN is a fundamental aspect of book metadata. These identifiers are assigned to individual books and are essential for proper cataloging and identification in the publishing industry. Palmetto will help you obtain your ISBN.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        BISAC Codes
        </h3>
        <p className="mt-2 text-gray-700">
        BISAC codes help categorize your book by genre and subject. Choosing the most relevant BISAC codes increases your book’s visibility in online retailers and libraries, making it easier for readers to find. Palmetto will discuss these codes with you to help you choose one that accurately represents the content in your book.
        </p>
        <p className='text-yellow-600 mt-12 text-3xl text-center'>Step</p>
        <p className='text-yellow-600 mt-2 text-5xl text-center'>— 05 —</p>
        <h3 className="text-3xl text-center text-teal-600 mt-6">
        Publishing
        </h3>
        <p className="mt-2 text-gray-700">
        When you feel like your book is polished, it’s time to arrange your book for printing. You can publish your book in several formats. When it comes to printing physical books, your most budget-friendly option is to print on demand.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Why Make Your Book Available in All Formats?
        </h3>
        <p className="mt-2 text-gray-700">
        Making your books available in various formats, like print, audiobooks, and e-books, gives your readers a variety of ways to enjoy your book. Using all three formats helps you meet people where they are and how they like to experience a good read. Some people love the feel of a physical book in their hands, while others want the freedom of listening to an audiobook during their daily commute. E-books offer digital versatility, appealing to readers who appreciate the convenience of having their library at their fingertips.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Where to Self-Publish
        </h3>
        <p className="mt-2 text-gray-700">
        Silver Gate makes it easy to publish your book in any format. With us, you can ensure your book reaches your readers in whatever format they prefer!
        </p>
        <p className='text-yellow-600 mt-12 text-3xl text-center'>Step</p>
        <p className='text-yellow-600 mt-2 text-5xl text-center'>— 06 —</p>
        <h3 className="text-3xl text-center text-teal-600 mt-6">
        Distribution
        </h3>
        <p className="mt-2 text-gray-700">
        Distribution is how your book makes it into the hands of readers. Your most affordable option is to handle the process yourself, working directly with retailers.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Where to Distribute
        </h3>
        <p className="mt-2 text-gray-700">
        When it comes to distributing your books, the first step is to put yourself in your readers’ shoes. Where are they most likely to buy your book? Does your reader prefer online shopping or visiting a brick-and-mortar store? Will you have better luck finding them in bookstores or boutique shops?
        </p>
        <p className="mt-6 text-gray-700">
        If you’ve decided to go the brick-and-mortar route, be aware that it’s not always easy to claim shelf space. We recommend building a good relationship with independent sellers who can take your book under their wing. The better your relationship with store owners, the higher your chance of snagging a spot on their shelves.
        </p>
        <p className="mt-6 text-gray-700">
        When distributing your book to physical stores, consider buying them in bulk. Also, be aware that it’s standard for retailers to get a 30–55% discount on the price of your books.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        The Benefits of Outsourcing
        </h3>
        <p className="mt-2 text-gray-700">
        When you handle distribution, you keep more in your pocket per sale, but all the logistics and negotiations fall on your shoulders. It can be extremely stressful, especially if you lack industry experience.
        </p>
        <p className="mt-6 text-gray-700">
        Another option is to outsource your distribution. If you print through Palmetto, we work with retailers on your behalf. Palmetto distributes print books to more than 40,000 retail stores and libraries across the world, including Barnes & Noble and Amazon. E-books also make it to the top platforms, including:
        </p>
        <p className='text-yellow-600 mt-12 text-3xl text-center'>Step</p>
        <p className='text-yellow-600 mt-2 text-5xl text-center'>— 07 —</p>
        <h3 className="text-3xl text-center text-teal-600 mt-6">
        Marketing
        </h3>
        <p className="mt-2 text-gray-700">
        As with distribution, the first step in the marketing process is to consider your audience and where they’re buying from. Actively promote your book on your social platforms to engage readers and build a community around your work.
        </p>
        <p className="mt-6 text-gray-700">
        Below are some tips for reaching out to your audience, depending on where they are. For additional marketing advice, check out our Marketing Guide.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Guerilla Marketing
        </h3>
        <p className="mt-2 text-gray-700">
        One of the best ways to market your book is to establish genuine connections. Consider reaching out to local bookstores and inquire if they would be willing to feature your book on their shelves. Creating this personal connection increases your book’s visibility and fosters support from the local community.
        </p>
        <p className="mt-6 text-gray-700">
        To expand your book’s reach, consider checking out local markets. These spaces can attract diverse audiences and provide an excellent opportunity to introduce your book to new readers. Placing your work in unconventional yet relevant locations can introduce it to a larger audience.
        </p>
        <p className="mt-6 text-gray-700">
        For direct engagement with your audience, visit book festivals, comic cons, or literary festivals. These events offer a platform to connect with readers, build a community around your work, and generate excitement. Attendees at these types of events are often passionate about literature, making it a great environment to create a buzz around your book and leave a lasting impression.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Social Media
        </h3>
        <p className="mt-2 text-gray-700">
        Whoever your readers are, they’re probably on social media. More than four and a half billion people around the world use social platforms like Facebook and Instagram — a 10% increase in just a year.
        </p>
        <p className="mt-6 text-gray-700">
        As it grows, social media has become a gathering place for readers. Book lovers have created BookTube on YouTube, BookTok on TikTok, and #bookstagram on Instagram.
        </p>
        <p className="mt-6 text-gray-700">
        Communities like these allow authors to build connections and market their books for free. If you engage with creators, you can ask for reviews when your book hits shelves. You can also buy ads to increase your exposure with people who haven’t seen your work before.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Author Website
        </h3>
        <p className="mt-2 text-gray-700">
        Every book project needs an internet home. Your author website will be a resource for anyone interested in your book, whether they hear about it on the radio or watch a reviewer discuss it on YouTube.
        </p>
        <p className="mt-6 text-gray-700">
        Your website is where you can tell your story as the author. Talk about your “why.” What made you decide to write your book? What inspired your story? Sharing details about yourself can help you create genuine connections with your readers.
        </p>
        <p className="mt-6 text-gray-700">
        You can design and publish your website yourself or hire an expert. Palmetto’s designers are ready to help. You can also check out this blog for more advice on improving your website.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Press Releases
        </h3>
        <p className="mt-2 text-gray-700">
        Traditional media still matters. With a good press release, you can get interviews and write-ups from local and industry journalists, podcasters, and bloggers.
        </p>
        <p className="mt-6 text-gray-700">
        Palmetto offers press release writing and distribution a la carte or as part of a book marketing package. Drawing on a network of more than 780,000 media outlets, Palmetto’s professionals will send your announcement to as many as 1,000 media outlets.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Reviews
        </h3>
        <p className="mt-2 text-gray-700">
        Reviews are another critical part of marketing because they can significantly influence potential readers. Positive reviews provide social proof of a book’s quality and act as endorsements that can build trust with readers. Word of mouth has a significant impact on book sales, and authentic reviews, whether on online platforms, blogs, or traditional media, contribute to organic promotion.
        </p>
        <p className="mt-6 text-gray-700">
        We don’t offer review services at Palmetto, but we suggest including them in your marketing efforts. Consider asking your readers to go to your favorite platform to leave reviews for your book. You can also pay for book reviews through companies like Kirkus Reviews.
        </p>
        <h3 className="text-2xl uppercase text-yellow-600 mt-6">
        Author Events
        </h3>
        <p className="mt-2 text-gray-700">
        Author events and conventions allow authors to directly connect with their audience and create lasting impressions. Whether it’s a book signing at a local bookstore or a panel discussion at a literary festival, these platforms let authors engage with readers, showcase their personalities, and build a genuine connection. Besides direct sales, these events contribute to brand building, letting authors establish themselves as accessible and relatable people in the literary community.
        </p>

        <div className='custombg flex flex-col justify-center items-center text-white'>
            <h2 id="costs" className="text-5xl p-8 pb-4 text-center mt-6">
            What Does It Cost to Self-Publish a Book?
            </h2>
            <p className=" text-center pb-12">
        Author events and conventions allow authors to directly connect with their audience and create lasting impressions. Whether it’s a book signing at a local bookstore or a panel discussion at a literary festival, these platforms let authors engage with readers, showcase their personalities, and build a genuine connection. Besides direct sales, these events contribute to brand building, letting authors establish themselves as accessible and relatable people in the literary community.
        </p>
        <button className="mt-4 mb-12 button-gradient mx-auto text-black px-6 py-2 rounded-md hover:bg-yellow-400">
          GET STARTED!
        </button>
        </div>
        <h2 id="pricing" className="text-5xl text-gray-900 mt-6">
          Pricing Your Book
        </h2>
        <p className="mt-4 text-gray-700">
        Setting the price for your book requires a thoughtful approach. While there’s no one-size-fits-all formula, it’s important to consider developmental costs, publishing expenses, and royalties. Here are some other factors that should influence your book price.
        </p>
        <h3 className="text-2xl text-teal-600 mt-6">
        Assess Competitive Book Prices
        </h3>
        <p className="mt-2 text-gray-700">
        Research and analyze the prices of similar titles in your genre, particularly those from new or first-time authors. By comparing rates and considering the number of reviews and ratings, you gain insights into industry standards and reader expectations. Try to set a competitive yet reasonable price that aligns with your book’s values and the market it caters to.
        </p>
        <h3 className="text-2xl text-teal-600 mt-6">
        Consider Your Publishing Goals
        </h3>
        <p className="mt-2 text-gray-700">
        While setting the price for your book, think about what you want to achieve during your publishing journey. Take a look at how much time, effort, and money you’ve put into writing, publishing, and promoting your book. If you want to get your story into as many hands as possible, consider setting a lower price. On the other hand, if you see your book as a premium choice, a higher price tag may be better.
        </p>
        <h2 id="earnings" className="text-5xl text-gray-900 mt-6">
          How Much Do Authors Make?
        </h2>
        <p className="mt-4 text-gray-700">
        The amount of money authors make can vary widely depending on the type of book, publishing costs, and the market. However, according to the Alliance of Independent Authors, you’re more likely to make a living if you self-publish. In 2022, the medium revenue for self-published authors was $12,749, increasing by 53%.
        </p>
        <h2 id="get-started" className="text-5xl text-gray-900 mt-6">
          Get Started With Publication
        </h2>
        <p className="mt-4 text-gray-700">
        The world of self-publishing is much easier to navigate with a knowledgeable partner like Palmetto Publishing. Palmetto is a top-tier company with expert staff in all aspects of book publishing, from copy editing to book marketing.
        </p>
        <p className="mt-6 text-gray-700">
        Working with Silver Gate lets you focus on what you know best — your book and its audiences. You have the freedom to market and print with Palmetto or handle those aspects on your own, trusting us with only the essentials of interior formatting and cover design.
        </p>
        <p className="mt-6 text-gray-700">
        Reach out today to learn about our author services. You’ve worked hard on your book, and you deserve a publication process that’s as easy as possible.
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
    <ContactBanner/>
    <Footer/>
    </div>
  )
}

export default SelfPublishingSection;