import React from "react";
import { font } from "./font/font";

const Apart = () => {
  return (
    <div className={`${font.className} relative mt-12 w-full`}>
      {/* Background Image - NO Overlapping */}
      <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/whitewood.png')" }}>
        <div className="relative w-full h-full flex flex-col justify-center items-center text-black px-4 py-16">

          {/* Section Title */}
          <h1 className="text-3xl md:text-5xl text-center font-bold">What Sets Us Apart</h1>
          <hr className="w-24 md:w-32 mt-6 border-2 border-yellow-600" />

          <p className="pt-6 text-lg md:text-xl max-w-xl md:max-w-2xl text-center">
            At Palm Bay Publishing, we put authors first and strive to give you the best publishing experience possible. By working with us, you’re guaranteed:
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">

            {/* Card 1 */}
            <div className="bg-white flex flex-col md:flex-row rounded-tl-4xl rounded-br-4xl p-6 md:p-8 shadow-lg">
              <div className="md:w-[50%] flex flex-col text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-teal-600">Individualized <br/> Communication</p>
                <p className="text-lg md:text-xl text-black mt-4">throughout the entire publishing process</p>
              </div>
              <div className="md:w-[50%] flex justify-center items-center mt-4 md:mt-0">
                <img src="/comms.webp" className="w-32 md:w-40 h-28 md:h-36 md:mt-19" alt="Communication" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white flex flex-col md:flex-row rounded-tl-4xl rounded-br-4xl p-6 md:p-8 shadow-lg">
              <div className="md:w-[50%] flex flex-col text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-teal-600">World Class <br/> Publishing</p>
                <p className="text-lg md:text-xl text-black mt-4">to help your book stand out in the marketplace</p>
              </div>
              <div className="md:w-[50%] flex justify-center items-center mt-4 md:mt-0">
                <img src="/publish.webp" className="w-32 md:w-40 h-28 md:h-36" alt="Publishing" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white flex flex-col md:flex-row rounded-tl-4xl rounded-br-4xl p-6 md:p-8 shadow-lg">
              <div className="md:w-[50%] flex flex-col text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-teal-600">100% </p>
                <p className="text-lg md:text-xl text-black">Satisfaction</p>
              </div>
              <div className="md:w-[50%] flex justify-center items-center mt-4 md:mt-0">
                <img src="/satisfy.webp" className="w-40 md:w-60 h-28 md:h-36" alt="Satisfaction" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white flex flex-col md:flex-row rounded-tl-4xl rounded-br-4xl p-6 md:p-8 shadow-lg">
              <div className="md:w-[50%] flex flex-col text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-teal-600">Highest Quality</p>
                <p className="text-lg md:text-xl text-black mt-4">hardcover and paperback printing</p>
              </div>
              <div className="md:w-[50%] flex justify-center items-center mt-4 md:mt-0">
                <img src="/quality.webp" className="w-32 md:w-40 h-28 md:h-36" alt="Quality" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white flex flex-col md:flex-row rounded-tl-4xl rounded-br-4xl p-6 md:p-8 shadow-lg">
              <div className="md:w-[50%] flex flex-col text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-teal-600">100% </p>
                <p className="text-lg md:text-xl text-black">Creative Control</p>
              </div>
              <div className="md:w-[50%] flex justify-center items-center mt-4 md:mt-0">
                <img src="/creative.webp" className="w-32 md:w-40 h-28 md:h-36" alt="Creative Control" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Apart;
