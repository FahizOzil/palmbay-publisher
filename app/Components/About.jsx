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
          Why Choose Us as Your Publishing Partner
        </h1>

        {/* Short Description */}
        <p className="mt-6 text-lg md:text-2xl font-bold max-w-xl text-center tracking-wider">
          We’re book lovers who are here to help you with every aspect of publishing your work.
        </p>

        {/* Detailed Description */}
        <p className="mt-6 text-lg md:text-2xl max-w-4xl text-center tracking-wide leading-relaxed">
          As a leading book publishing company, we offer independent authors the publishing solutions, tools, and expertise necessary to thrive. Our manuscript publishing services ensure your work reaches readers across multiple platforms, both in print and digital formats. We take pride in transforming your manuscript into a world-class book that can be shared and enjoyed by all. At our core, we believe your book should represent your vision, so we empower our authors with full creative control and 100% of the royalties. Let us help you publish a book that stands out.

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
