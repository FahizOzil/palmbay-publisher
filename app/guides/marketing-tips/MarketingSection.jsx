"use client"

import ContactBanner from '@/app/Components/ContactBanner';
import { font } from '@/app/Components/font/font';
import Footer from '@/app/Components/Footer';
import React, { useEffect } from 'react';

// Temporarily remove font import to isolate the issue
// import { font } from '@/app/Components/font/font';
// Temporarily remove ContactBanner and Footer to isolate the issue
// import ContactBanner from '@/app/Components/ContactBanner';
// import Footer from '@/app/Components/Footer';

const MarketingSection = () => {
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
    console.log("MarketingSection component mounted successfully");
  }, []);

  return (
    <div>
      {/* Main Content Container */}
      {/* Replace font.className with a placeholder to avoid import issues */}
      <div className={`${font.className} relative mt-48 flex flex-col md:flex-row w-full px-4 lg:px-16 py-12 gap-8`}>
        
        {/* Left Side - Table of Contents (Sticky) */}
        <div className="w-full h-fit md:w-1/4 bg-gray-100 rounded-lg p-6 shadow-md sticky top-24 max-h-[80vh] overflow-auto table-of-contents">
          <h3 className="text-teal-600 text-lg uppercase border-b pb-2">
            Table of Contents
          </h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('understand-market')}
            >
              Understand Your Market
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('marketing-audience')}
            >
              Marketing to Your Audience
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('author-website')}
            >
              Author Website
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('online-marketing')}
            >
              Online Book Marketing
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('social-media')}
            >
              Social Media Marketing
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('amazon')}
            >
              Amazon
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('paid-ads')}
            >
              Paid Ads
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('email-marketing')}
            >
              Email Marketing
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('media-exposure')}
            >
              Media Exposure
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('guerilla-marketing')}
            >
              Guerilla Marketing
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('marketing-cost')}
            >
              How Much Does It Cost to Market the Book?
            </li>
            <li 
              className="cursor-pointer hover:text-teal-600 transition-colors"
              onClick={() => scrollToSection('collaborate-experts')}
            >
              Collaborate With the Book Marketing Experts
            </li>
          </ul>
        </div>

        {/* Middle Section - Main Content */}
        <div className="w-full text-xl md:w-2/4">
          <p className="text-gray-700">
            Publishing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of design choices, marketing strategies, and printing options before your book finds its audience. Count on Palmetto Publishing to guide you along the way.
          </p>
          <p className="mt-4 text-gray-700">
            To stand out in today’s competitive book market, it’s essential to know how to market a book. You’ve done the hard work and finally completed your masterpiece. Now, it’s time to turn that work into a product that actually reaches your audience.
          </p>
          <p className="mt-4 text-gray-700">
            As an author, marketing might not be your forte, and figuring out how to grow an audience for your work can seem daunting. Luckily, marketing actually involves storytelling, too — it’s about communicating an idea with an audience that grabs their attention.
          </p>
          <p className="mt-4 text-gray-700">
            In this complete guide to marketing a book, we’ll break down everything you need to know to sell your work. From finding your audience to Amazon marketing, keep reading to learn how to get your work into your readers’ hands.
          </p>

          <h2 id="understand-market" className="text-5xl text-gray-900 mt-12">
            Understand Your Market
          </h2>
          <p className="mt-4 text-gray-700">
            Before implementing any book marketing strategies, you need to understand your market and what makes your book appealing to readers. Each genre has a slightly different market and audience. Successfully marketing your book requires researching your genre, studying bestsellers, and understanding your target demographic. Consider collecting research on the following:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-600 text-2xl mr-2">•</span>
              Best-selling genres on Amazon
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 text-2xl mr-2">•</span>
              Titles, covers, and content of best-selling books within your genre
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 text-2xl mr-2">•</span>
              Online presence of bestselling authors in your genre (social media websites, Amazon profiles, etc.)
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 text-2xl mr-2">•</span>
              Types of people reading your genre
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 text-2xl mr-2">•</span>
              What readers look for in a book in your genre
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            This process is called market research, and it’s essential for figuring out how to successfully market your product. Take note of all your observations, and save them for future reference. As you gather this information, also consider why readers would want to pick up your book.
          </p>

          <h2 id="marketing-audience" className="text-5xl text-gray-900 mt-12">
            Marketing to Your Audience
          </h2>
          <p className="mt-4 text-gray-700">
            Now that you’ve done some market research, it’s time to narrow down your audience and start developing your book marketing plan. Rather than marketing your book to everyone, it’s best to get specific about who you’re targeting. The type of person who reads your genre will be the audience you want to focus on. These people will be the most interested in actually reading your book, after all.
          </p>
          <p className="mt-4 text-gray-700">
            Think back to the demographic of your book’s genre. What kind of person reads this genre? How old are they? What is their income level? How much do they read? What interests them? What style of cover do they gravitate toward? Get specific and create a reader avatar for your book or the theoretical person who will read your book. As you’re marketing your book, look back to your reader avatar and make sure you’re marketing directly to them.
          </p>
          <p className="mt-4 text-gray-700">
            For example, if your reader loves to fill their shelves with aesthetically pleasing covers, you’ll need to make sure your cover catches their eye. If your reader is obsessed with all things fantasy, you’ll want to share fantasy-related posts on social media. If your reader doesn’t enjoy long reads, you’ll need to make sure your book is the right length.
          </p>
          <p className="mt-4 text-gray-700">
            Consider what literary festivals, book fairs, or conventions they may attend where you could market your book. You can also try to connect with popular book bloggers in your genre to spread the word about your book.
          </p>

          <h2 id="author-website" className="text-5xl text-gray-900 mt-12">
            Author Website
          </h2>
          <p className="mt-4 text-gray-700">
            Every author should have a website. It becomes the final destination for all of your online advertising, from social media ads to blog posts. Your author website should include an extensive author biography section, a sales page for your books, an updated contact page, and an editable blog with room for instant comments from your readers.
          </p>
          <p className="mt-4 text-gray-700">
            Just like with writing a book, you want to make sure your site has a specific voice that remains consistent and appeals to your audience. An author site should also have a clean design that’s easy to navigate. Your website is also the ideal place to host your blog. Readers will get easy access to your other content and, most importantly, your books.
          </p>
          <p className="mt-4 text-gray-700">
            Your site also needs to be cleanly laid out with sections and headlines. Plus, the text needs to be easy to read. Readable online content has short paragraphs and snappy sentences. If you’re a flowery prose writer, have someone else read your website content or plug it into a site like the Hemingway App, which will scan for easy readability. You may love words, but search engines prefer simplicity.
          </p>
          <p className="mt-4 text-gray-700">
            Websites also love fresh content, so add to your website regularly. You can cover anything related to your topic, from “trends in 21st-century science fiction” for the sci-fi author to “best fertilizers of the year” for the nonfiction gardening guru. Palmetto Publishing offers an Author Website for $1,499 to create the perfect custom website for you and your work.
          </p>

          <h2 id="online-marketing" className="text-5xl text-gray-900 mt-12">
            Online Book Marketing
          </h2>
          <p className="mt-4 text-gray-700">
            In the digital age we live in, understanding how to market a book online is key to reaching a wide audience of potential readers. Scaling online audiences, however, takes a lot of time and effort. That’s why it’s important to get started as soon as possible — even before your book is released.
          </p>
          <p className="mt-4 text-gray-700">
            Start by growing your digital presence through guest blog posts and articles on websites that are relevant to your book’s genre or theme. Use platforms like Goodreads and visit online writing communities to connect with readers and find support.
          </p>
          <p className="mt-4 text-gray-700">
            A profitable book marketing strategy will get traffic to book-selling sites. But don’t worry if you’re not a marketer. These simple techniques will help you build an audience and get your work into readers’ hands.
          </p>

          <h2 id="social-media" className="text-5xl text-gray-900 mt-12">
            Social Media Marketing
          </h2>
          <p className="mt-4 text-gray-700">
            Social media marketing is a powerful way for authors to connect with existing followers and find new readers. According to Search Engine Journal, around 84% of the U.S. population and almost 58% of the world’s population use social media regularly. Most social media networks let you post for free or pay for advertising.
          </p>
          <p className="mt-4 text-gray-700">
            Free posting, also called organic marketing, is most effective if you have an established audience of readers. You can get that audience by building connections with other writers and readers. Social media book marketing is all about building relationships. Someone who finds you on Instagram won’t always run out to buy a copy of your book. But, they might follow you and get familiar with your work.
          </p>
          <p className="mt-4 text-gray-700">
            Google “social media demographics” to learn where your reader base hangs out, then set up accounts there. Post to those accounts regularly. Add bi-weekly or weekly reminders to your calendar if it helps. You can also boost your presence by purchasing ads on your favorite platforms. For authors, especially new ones, we think it’s best to start with the most popular platforms before seeking your audience on more obscure channels.
          </p>
          <p className="mt-4 text-gray-700">
            Social media marketing for authors can be an effective use of your time. When you present an enticing story engagingly via the right medium for people to find it, then there is no limit to how big you can scale your social media marketing. Palmetto Publishing offers social media service plans that provide a comprehensive and strategic approach to establishing, growing, and sustaining your online presence.
          </p>

          <h2 id="amazon" className="text-5xl text-gray-900 mt-12">
            Amazon
          </h2>
          <p className="mt-4 text-gray-700">
            Start by optimizing your book’s Amazon page with an eye-catching cover, captivating description, and appropriate keywords. Amazon makes it easy for authors to advertise their books on its platform. When you log into your account, set up a campaign for your book and choose the best keywords to target for your novel or genre.
          </p>
          <p className="mt-4 text-gray-700">
            Not sure what keywords will work best? Automatic targeting lets Amazon choose your keywords for you. The downside is that Amazon will only advertise books sold on its platform. Palmetto Publishing can help ensure your book is available on digital platforms like Amazon, with search-engine-optimized book descriptions and appropriate BISAC categorizations.
          </p>

          <h2 id="paid-ads" className="text-5xl text-gray-900 mt-12">
            Paid Ads
          </h2>
          <p className="mt-4 text-gray-700">
            Consider using paid advertising on social media or Amazon to boost your book’s visibility. Most social media networks let you pay for advertising, and you can also boost your presence by purchasing ads on your favorite platforms.
          </p>
          <p className="mt-4 text-gray-700">
            Facebook ads are a useful tool, but if you’re on a budget, we recommend sticking to two types of Facebook ads: Traffic Ads for your Book Launch Promotion allow you to make a big splash for your initial launch, build an email list, and even boost sales from time to time when used sparingly.
          </p>
          <p className="mt-4 text-gray-700">
            Amazon also makes it easy for authors to advertise their books on its platform, as mentioned earlier. Set up a campaign with targeted keywords to reach readers searching for books in your genre.
          </p>

          <h2 id="email-marketing" className="text-5xl text-gray-900 mt-12">
            Email Marketing
          </h2>
          <p className="mt-4 text-gray-700">
            Your mailing list subscribers are some of the best people to market your book launch to. You can also utilize your mailing list to ask for reviews on your website or Amazon page. You might want to consider giving your subscribers early access to your books and encouraging them to leave reviews before your official launch.
          </p>
          <p className="mt-4 text-gray-700">
            Your author website should include a mailing list signup page where people can opt into updates. This helps you build a direct line of communication with your readers, allowing you to share news about your book launches, events, and more.
          </p>

          <h2 id="media-exposure" className="text-5xl text-gray-900 mt-12">
            Media Exposure
          </h2>
          <p className="mt-4 text-gray-700">
            You can connect with media outlets to gain exposure through radio, podcast, and magazine interviews. A press release helps get the word out on your upcoming book launch, and it’s a great way to attract attention. It can also lead to other kinds of media exposure.
          </p>
          <p className="mt-4 text-gray-700">
            Press releases require a specific format that top publishers expect to see. If you publish through Palmetto Publishing, you’ll have access to press release writing and distribution services. Palmetto has more than 780,000 media contacts and can share your book’s press release with up to 1,000 outlets.
          </p>
          <p className="mt-4 text-gray-700">
            Utilizing a vast web of carefully selected media contacts, Palmetto Publishing can unveil your masterpiece to the world. By distributing and presenting marketing materials to just the right media outlets, we can get your book in front of eager readers most likely to engage with it and drum up the buzz it needs to succeed.
          </p>

          <h2 id="guerilla-marketing" className="text-5xl text-gray-900 mt-12">
            Guerilla Marketing
          </h2>
          <p className="mt-4 text-gray-700">
            Contact book bloggers and influencers, gather reviews, and visit local bookstores and events to promote your book. Similar to collaborating with BookTubers and #bookstagram influencers, you can collaborate with book websites and blogs to promote your work.
          </p>
          <p className="mt-4 text-gray-700">
            Another book marketing idea is to ask bloggers to promote you. You will likely have to offer a free copy of your book, but the exposure to their base and potential positive reviews will help broaden your audience and drive book sales.
          </p>
          <p className="mt-4 text-gray-700">
            Consider YouTube, the second biggest search engine in the world. On there, Booktube is the unofficial name and vlogging community dedicated to a collection of YouTube channels that discuss all things bookish. For book marketing specifically, it’s an excellent way to give books and their authors some more credibility as, each day, thousands of online creators share videos about books they love.
          </p>

          <h2 id="marketing-cost" className="text-5xl text-gray-900 mt-12">
            How Much Does It Cost to Market the Book?
          </h2>
          <p className="mt-4 text-gray-700">
            There’s no magic number for the cost of a book marketing campaign. Palmetto has seen independent authors do it for less than $200, relying mostly on free options and networking. Other authors spend thousands on book editing, design, and marketing services to get truly impressive results.
          </p>
          <p className="mt-4 text-gray-700">
            Many authors are concerned about the book marketing cost. After all, you don’t want to spend thousands of dollars advertising a book that may only sell a few copies. However, investing a little money into your marketing campaign can help set your book up for success.
          </p>
          <p className="mt-4 text-gray-700">
            The experts at Palmetto Publishing offer affordable book marketing services to help you share your book with readers. You can choose services based on your budget and needs, with packages starting at $249 for marketing copy and comprehensive promotional packages available up to $2,299.
          </p>

          <h2 id="collaborate-experts" className="text-5xl text-gray-900 mt-12">
            Collaborate With the Book Marketing Experts
          </h2>
          <p className="mt-4 text-gray-700">
            When you partner with Palmetto Publishing for your book marketing services, you open the door to a dynamic process that propels your creation into the spotlight. Your journey begins with a consultation call with your dedicated publishing consultant. We’re not just interested in your book; we’re invested in your vision.
          </p>
          <p className="mt-4 text-gray-700">
            By delving into your goals, genre nuances, target audience aspirations, and the essence of your creation, we lay the foundation for a marketing strategy tailored uniquely to you. Palmetto Publishing is a top-tier publishing company offering quality book marketing services for independent authors — including marketing copy, press releases, author websites, and more.
          </p>
          <p className="mt-4 text-gray-700">
            Your journey with us is collaborative. Every step of the way, we value your insights, champion your creativity, and encourage your active participation. Book marketing can be challenging, but you don’t have to do it alone. Reach out to Palmetto Publishing today to get started.
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
  );
};

export default MarketingSection;