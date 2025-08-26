import ContactBanner from '@/app/Components/ContactBanner'
import { font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
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
            Cooking Genre Book Publishing
          </h1>
          <h2 className="green-text text-4xl mt-2 max-w-4xl text-center">
            Share your wisdom and grow your brand with industry specific books.
          </h2>
          <p className="text-lg md:text-xl text-center mt-2 max-w-3xl">
            Publishing a book can feel like a monumental task, especially when you do it on your own. There’s a whole world of design choices, marketing strategies, and printing options that you need to navigate before your book finds its audience. Count on Palm Bay Publishing to guide you along the way.
          </p>
        </div>
      </div>

      <Solutions />
      <section className="mb-12 mt-12 px-14 flex flex-col justify-center items-center">
        <h2 className="text-5xl text-center">What is the Cooking Genre?</h2>
        <hr className='w-[70%] border-2 border-yellow-600 my-4'/>
        <p className="text-black text-center max-w-4xl mt-4 text-lg leading-relaxed">
          Cookbooks have exploded in popularity in recent years. In 2020, for instance, bread cookbook sales increased by an astonishing 145%. It’s easy to see the appeal of these practical how-to manuals. Cookbooks let readers discover new recipes, learn about different cultures, master new techniques, and admire plenty of pictures of delicious foods.
        </p>
        <p className="text-black text-center max-w-4xl text-lg leading-relaxed mt-4">
          If you’re an avid baker or cook, writing and publishing a cookbook can allow you to share your yummy creations with food-loving readers. However, the cookbook genre poses unique challenges for aspiring writers. You’ll need the right recipes, marketing campaign, photography, and publishing company to succeed in this competitive genre.
        </p>
        <p className="text-black text-center max-w-4xl text-lg leading-relaxed mt-4">
          Fortunately, you don’t have to do everything alone. The experts at Palm Bay Publishing have extensive experience helping authors self-publish cookbooks. We can help you take your cookbook from a beginning concept to a mouthwatering final product.
        </p>
      </section>

      {/* Section: What Is the Cookbook Genre? */}
      <section className="py-12 px-14 custombg text-white">
        <div className="flex flex-col md:flex-row items-start">
          {/* Text Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Is the Cookbook Genre?
            </h2>
            <div className="border-b-2 border-yellow-600 w-40 mb-6"></div>
            <p className="text-lg leading-relaxed mb-4">
              Cookbooks are nonfiction books that educate the audience about cooking techniques, dishes, and ingredients. They typically contain collections of recipes with step-by-step instructions that guide the reader through preparing a particular food.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The focus of cookbooks can vary widely. Popular themes and topics include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">Advanced cooking techniques</li>
              <li className="mb-2">Beginner cookbooks</li>
              <li className="mb-2">Cooking methods like baking or slow cooking</li>
              <li className="mb-2">Dishes centered on one food (e.g., pasta or pizza)</li>
              <li className="mb-2">Environmentally friendly recipes</li>
              <li className="mb-2">Family traditions</li>
              <li className="mb-2">Favorite recipes of celebrities</li>
              <li className="mb-2">Food and wine books that suggest wine pairings for each dish</li>
              <li className="mb-2">Recipes for people with food intolerances, including dairy-free or gluten-free dishes</li>
              <li className="mb-2">Regional cuisines, such as Chinese, Italian, and Peruvian food</li>
              <li className="mb-2">Weight-loss methods like the Atkins and keto diets</li>
              <li className="mb-2">Vegetarian and vegan recipes</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Your cooking expertise, intended audience, personal interests, and market trends can guide you in shaping your cookbook. For example, if you’re a passionate vegan, your cookbook can reflect your values with creative and plant-based recipes. And if you want to write a cookbook for children, you can focus on simple and fun recipes that are easy for young chefs to make.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 p-6">
            <img
              src="/food.webp"
              alt="Person holding a cookbook with food ingredients"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section: Writing Cookbooks */}
      <section
        className="py-12 px-14 text-black bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="flex flex-col md:flex-row items-start">
          {/* Image */}
          <div className="md:w-1/2 p-6">
            <img
              src="/girl-making-food.webp"
              alt="Person writing a cookbook in the kitchen"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Writing Cookbooks
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Creating a cookbook can be, in some ways, more involved than other types of writing, with several steps and some trial and error. You’ll want each recipe to be delicious, easy for readers to follow, and distinct from others in your book.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Here’s a straightforward approach to writing a cookbook:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">Choose a theme or topic.</li>
              <li className="mb-2">Gather relevant recipes.</li>
              <li className="mb-2">Develop new recipes.</li>
              <li className="mb-2">Ask nonexpert recipe testers to recreate your dishes and give feedback on the quality of the instructions and food.</li>
              <li className="mb-2">Troubleshoot and refine recipes as needed.</li>
              <li className="mb-2">Photograph the food.</li>
              <li className="mb-2">Organize recipes in a coherent structure (alphabetically, by food, by region, etc.).</li>
              <li className="mb-2">Write supplemental materials, like an introduction, a short backstory for each recipe, or tips and tricks.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Once you’ve lovingly crafted your dream cookbook manuscript, it’s time to choose a publishing method.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Why Publish with Palm Bay Publishing? */}
      <section className="py-12 px-14 custombg text-white">
        <div className="flex flex-col md:flex-row items-start">
          {/* Text Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Publish with Palm Bay Publishing?
            </h2>
            <p className="text-lg leading-relaxed">
              When you choose to self-publish with Palm Bay Publishing, you’re not just getting help with the printing process — we guide you through your entire publishing journey. We can help you publish your cookbook in both printed and e-book formats, letting you reach every type of reader. With us, you can distribute your book across all major online platforms like Amazon, Apple Books, and Barnes & Noble, making it easy for readers to find and purchase it in the format they prefer.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 p-6">
            <img
              src="/mother.webp"
              alt="Mother and child cooking together with a cookbook"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section: Benefits of Self-Publishing Your Cookbook */}
      <section
        className="py-12 px-14 text-black bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="flex flex-col md:flex-row items-start">
          {/* Image */}
          <div className="md:w-1/2 p-6">
            <img
              src="/tablet-girl.webp"
              alt="Person using a tablet to follow a cookbook recipe"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Benefits of Self-Publishing Your Cookbook
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              There are two main options when it comes to publishing your cookbook: pitch to traditional publishers or self-publish. While self-publishing may sound intimidating, it comes with some great benefits. For example, self-publishing allows you to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">
                Exercise complete creative control. You can decide on everything from the cover art to the interior layout, and you won’t need to make drastic changes to please a fickle editor.
              </li>
              <li className="mb-2">
                Keep all earnings. Any profits from the cookbook go straight to your bank account. You won’t have to pay a literary agent or split royalties with your publishing company, which can drastically reduce your profits.
              </li>
              <li className="mb-2">
                Release your book on your timeline. Traditional publishers can take years to edit and publish your book. Self-publishing gets your cookbook into the hands of readers much faster.
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              Self-publishing a cookbook involves a higher initial investment and more limited distribution channels. But it’s a fantastic choice if you want total control of your vision and to keep all your profits.
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