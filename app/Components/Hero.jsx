import React from 'react';
import { font } from './font/font';

const Hero = () => {
  return (
    <div className={`${font.className} flex flex-col md:flex-row text-white justify-center items-center py-12 px-6 md:px-16 custombg`}>
      
      {/* Left Section (Image & Text) */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
        <img 
          src="/Books-covers.png.webp" 
          alt="Books Covers"
          className="w-full max-w-md md:max-w-lg object-cover"
        />
        <h1 className="text-3xl md:text-5xl mt-6 font-semibold leading-tight">
          Bring Your Publishing Dream to Life with Silver Gate
        </h1>
        <p className="mt-4 text-lg max-w-md md:max-w-lg">
          Silver Gate Publishing empowers you to publish your words, your way. 
          Our independent authors maintain full creative control, keep 100% of royalties, 
          and have a dedicated publishing consultant and project manager to guide you every step of the journey.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
        <div className="customgreen w-full max-w-md rounded-br-4xl rounded-tl-4xl py-8 px-6 md:px-8 flex flex-col items-center">
          
          <h1 className="text-2xl md:text-3xl text-center">Start Publishing Today!</h1>
          
          <div className="space-y-4 mt-6 w-full">
            
            {/* Manuscript Dropdown */}
            <select className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400">
              <option value="">Is Your Manuscript Ready?*</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Need Help">Need Help</option>
            </select>

            {/* Genre Dropdown */}
            <select className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400">
              <option value="">What is the Genre Of Your Book?</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
              <option value="Other">Other</option>
            </select>

          </div>

          {/* Button */}
          <button className="button-gradient mt-6 w-full px-6 py-3 rounded-md font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition-all">
            Get Started!
          </button>

          {/* Contact Info */}
          <p className="mt-4 text-lg">Or Give Us A Call At</p>
          <p className="text-xl mt-1 font-bold tracking-wider">+(310) 564 9107</p>

        </div>
      </div>

    </div>
  );
};

export default Hero;
