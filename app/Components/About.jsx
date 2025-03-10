import React from "react";
import { font } from "./font/font";

const About = () => {
  return (
    <div className={`${font.className} text-white`}>
      
      {/* Top Decoration */}
      <div className="customorange flex justify-start">
        <img src="/ring.png" alt="Ring" className="w-24 md:w-32" />
      </div>

      {/* About Us Section */}
      <div className="customorange flex flex-col justify-center items-center px-6 py-12 md:py-20">
        
        {/* Image */}
        <div className="w-full flex justify-center">
          <img 
            src="aboutus.webp" 
            alt="About Us" 
            className="w-40 max-w-lg md:max-w-xl lg:max-w-2xl object-cover rounded-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl mt-8 font-bold text-center">
          About Us
        </h1>

        {/* Short Description */}
        <p className="mt-6 text-lg md:text-2xl font-bold max-w-xl text-center tracking-wider">
          We’re book lovers who are here to help you with every aspect of publishing your work.
        </p>

        {/* Detailed Description */}
        <p className="mt-6 text-lg md:text-2xl max-w-4xl text-center tracking-wide leading-relaxed">
          We’re a self-publishing company that provides independent authors with the publishing 
          solutions, tools, and expertise they need to succeed. We help bring your work into the 
          hands and screens of readers by assisting you with all of your publishing and marketing 
          needs. We transform your manuscript into a world-class book that can be enjoyed and 
          shared across a multitude of platforms. We strongly believe your book should reflect 
          your words your way, so our authors retain full creative control and 100% of royalties.
        </p>

      </div>

      {/* Bottom Decoration */}
      <div className="customorange flex justify-end">
        <img src="/star.png" alt="Star" className="w-24 md:w-32" />
      </div>

    </div>
  );
};

export default About;
