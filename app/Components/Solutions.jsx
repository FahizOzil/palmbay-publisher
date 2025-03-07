"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { font } from "./font/font";

const cardData = [
  {
    title: "Art Books",
    author: "Teil Duncan",
    services: ["Cover Design", "Editing", "Interior Design", "Printing"],
    image: "/book1.webp",
  },
  {
    title: "Children’s Picture Books",
    author: "Ben Barrowman",
    services: ["Cover Design", "eBook", "Illustrations", "Interior Formatting", "Hardcover Printing"],
    image: "/book2.webp",
  },
  {
    title: "Children’s Novels",
    author: "Eileen Hobbs",
    services: ["Cover Design", "Editing", "Interior Formatting", "Illustrations", "Marketing"],
    image: "/book3.webp",
  },
];

const Solutions = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={`${font.className} flex flex-col overflow-hidden items-center text-center px-6 py-16 bg-white`}>
      {/* Heading Section */}
      <h1 className="text-3xl md:text-5xl font-semibold">
        Publishing Solutions For Every Genre
      </h1>
      <hr className="w-24 md:w-32 mt-4 border-2 border-yellow-600" />

      {/* Slick Slider */}
      <div className="w-full overflow-hidden mt-8">
        <Slider {...sliderSettings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-4 flex justify-center items-center">
              <div className="bg-gray-200 p-12 h-[30rem] rounded-tl-4xl rounded-br-4xl shadow-lg w-full">
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md" />
                <h2 className="text-xl font-bold mt-4 text-teal-700">{card.title}</h2>
                <p className="italic text-gray-600">by <strong>{card.author}</strong></p>
                <ul className="mt-3 text-gray-700">
                  {card.services.map((service, i) => (
                    <li key={i} className="flex items-center text-xl gap-2">
                      <span className="text-green-700 border border-green-700 rounded-full px-1 text-sm">&#10003;</span> {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Solutions;
