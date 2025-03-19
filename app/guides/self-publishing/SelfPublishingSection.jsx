import React from 'react'
import { font } from '@/app/Components/font/font';

const SelfPublishingSection = () => {
  return (
    <div className={`${font.className} relative mt-48 flex flex-col md:flex-row w-full px-4 lg:px-16 py-12 gap-8`}>
      
      {/* Left Side - Table of Contents (Sticky) */}
      <div className="w-full h-fit md:w-1/4 bg-gray-100 rounded-lg p-6 shadow-md 
        sticky top-24 max-h-[80vh] overflow-auto table-of-contents">
        <h3 className="text-teal-600 text-lg uppercase border-b pb-2">
          Table of Contents
        </h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>Traditional Publishing vs. Self-Publishing</li>
          <li>Benefits of Self-Publishing</li>
          <li>How to Self-Publish a Book</li>
          <li>What Does It Cost to Self-Publish a Book?</li>
          <li>Pricing Your Book</li>
          <li>How Much Do Authors Make?</li>
          <li>Get Started With Publication</li>
        </ul>
      </div>

      {/* Middle Section - Main Content */}
      <div className="w-full text-xl md:w-2/4">
        <p className="text-gray-700">
          As technology continues to reshape how we consume literature, self-publishing has become a powerful avenue for writers looking for greater control...
        </p>
        <h2 className="text-4xl text-gray-900 mt-6">
          Traditional Publishing vs. Self-Publishing
        </h2>
        <p className="mt-4 text-gray-700">
          When it comes to publishing your book, authors can use traditional publishing or self-publishing services...
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
        <h2 className="text-5xl text-gray-900 mt-6">
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
