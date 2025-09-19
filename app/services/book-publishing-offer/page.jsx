'use client';

import React, { useState , useEffect } from 'react';
import Image from 'next/image';
import {useConsultationModal} from "@/app/Components/ConsultationModal";


const BookPublishingLP = () => {

const { openModal, ConsultationModal } = useConsultationModal();
const currentYear = new Date().getFullYear();

    // hero section 
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        bookDetails: ''
    });

    //   end hero section 


    // Our Process Section 
    const [activeProcess, setActiveProcess] = useState(0);

  const processes = [
    {
      id: 0,
      title: "From Vision to Page: Ghostwriting Made Simple",
      icon: "💭",
      content: {
        heading: "From Vision to Page: Ghostwriting Made Simple",
        subtitle: "Turning Ideas into Narratives: We partner with you to weave your ideas into engaging stories.",
        steps: [
          "Listening to your story during a detailed consultation.",
          "Developing an outline and writing the first draft.",
          "Revisions based on your feedback.",
          "Completing the manuscript to your satisfaction.",
          "Delivering the final, finished story."
        ]
      }
    },
    {
      id: 1,
      title: "Your Book's Journey: From Pages to Publication",
      icon: "📖",
      content: {
        heading: "Your Book's Journey: From Pages to Publication",
        subtitle: "Professional Publishing Process: We handle every step of bringing your book to market.",
        steps: [
          "Manuscript evaluation and preparation.",
          "Professional editing and proofreading.",
          "Custom cover design and formatting.",
          "ISBN registration and copyright filing.",
          "Distribution setup across major platforms."
        ]
      }
    },
    {
      id: 2,
      title: "Amazon Publishing Process: Optimize for Success",
      icon: "🚀",
      content: {
        heading: "Amazon Publishing Process: Optimize for Success",
        subtitle: "Maximizing Your Amazon Presence: Strategic approach to Amazon publishing success.",
        steps: [
          "Amazon marketplace analysis and strategy.",
          "Keyword optimization and category selection.",
          "Professional listing creation and optimization.",
          "Launch strategy and promotional planning.",
          "Ongoing performance monitoring and adjustments."
        ]
      }
    },
    {
      id: 3,
      title: "Children's Book Publishing Process",
      icon: "🎨",
      content: {
        heading: "Children's Book Publishing Process",
        subtitle: "Bringing Children's Stories to Life: Specialized process for young readers.",
        steps: [
          "Age-appropriate content development and review.",
          "Professional illustration and design coordination.",
          "Child-friendly formatting and layout.",
          "Educational value assessment and enhancement.",
          "Distribution to children's book platforms."
        ]
      }
    },
    {
      id: 4,
      title: "Book Marketing Process",
      icon: "📈",
      content: {
        heading: "Book Marketing Process",
        subtitle: "Building Your Author Platform: Strategic marketing to reach your ideal readers.",
        steps: [
          "Target audience identification and analysis.",
          "Multi-channel marketing strategy development.",
          "Social media campaign creation and management.",
          "Book review and media outreach coordination.",
          "Performance tracking and strategy optimization."
        ]
      }
    },
    {
      id: 5,
      title: "Editing & Proofreading Process",
      icon: "✏️",
      content: {
        heading: "Editing & Proofreading Process",
        subtitle: "Polishing Your Manuscript: Professional editing for publication-ready content.",
        steps: [
          "Comprehensive manuscript review and assessment.",
          "Structural and developmental editing.",
          "Line editing for flow and clarity.",
          "Copy editing for grammar and style.",
          "Final proofreading and quality assurance."
        ]
      }
    }
  ];


  // Cilent Review Section
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Gilbert Arthur",
      review: "I was looking for a writer who would give proper attention to my manuscript. I was really happy with the writer I was introduced with. She worked very diligently on my book. They understood my vision, and their creativity brought my story to life in ways I never imagined.",
      rating: 5
    },
    {
      id: 2,
      name: "Javier Chester",
      review: "I wanted to write a novel, but because of writer's block, I was unable to do that. I approached Palmbay Publisher book writing services for this job, and the novel they delivered to me was just amazing from the start till the end. The characters were well-developed and the plot was engaging throughout.",
      rating: 5
    },
    {
      id: 3,
      name: "Dick Tilley",
      review: "My wife's dream was to publish a book of her poems dating back from her childhood to present. Allen and his team made that dream come true. They made the whole process, from editing, formatting, correcting grammar and punctuation, smooth and stress-free for us.",
      rating: 5
    },
    {
      id: 4,
      name: "Sarah Johnson",
      review: "Palmbay Publisher exceeded my expectations in every way. Their professional editing team transformed my rough manuscript into a polished masterpiece. The attention to detail and commitment to quality was evident throughout the entire process.",
      rating: 5
    },
    {
      id: 5,
      name: "Michael Rodriguez",
      review: "Working with Palmbay Publisher was the best decision I made for my book. Their marketing team helped me reach audiences I never thought possible. The results speak for themselves - my book is now a bestseller in its category.",
      rating: 5
    },
    {
      id: 6,
      name: "Emma Thompson",
      review: "The ghostwriting service provided by Palmbay Publisher was exceptional. They captured my voice perfectly and turned my ideas into a compelling narrative. I couldn't be happier with the final result and the professional service I received.",
      rating: 5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${i < rating ? 'text-green-500' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const ReviewPlatformLogos = () => (
    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
      {/* Google Reviews */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <img src="/logo-review.png" alt="logo Review"  />
        </div>
      </div>

      {/* Trustpilot */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
         <img src="/orm-2.webp" alt="Truspilot" />
        </div>
      </div>

      {/* Reviews.io */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
       <img src="/logo-review2.png" alt="review.io" ></img>
       </div>
      </div>
    </div>
  );

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-lg border-2 border-red-300 shadow-lg h-full flex flex-col">
      {/* Quote Icon */}
      <div className="text-red-500 text-4xl font-bold mb-4">"</div>
      
      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
        {testimonial.review}
      </p>
      
      {/* Customer Name */}
      <div className="mt-auto">
        <h4 className="text-red-600 font-bold text-lg mb-2">{testimonial.name}</h4>
        <StarRating rating={testimonial.rating} />
        <ReviewPlatformLogos />
      </div>
    </div>
  );


  //contact page 

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission (replace with your actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


//   Show case section 
 const genres = [
    {
      id: 1,
      name: 'Mystery',
      // Replace with your actual image URL
      icon: '/mystery-ss.webp', // Add your mystery icon image URL here
      alt: 'Mystery genre icon'
    },
    {
      id: 2,
      name: 'Horror',
      // Replace with your actual image URL
      icon: '/horror-ss.webp', // Add your horror icon image URL here
      alt: 'Horror genre icon'
    },
    {
      id: 3,
      name: 'Romance',
      // Replace with your actual image URL
      icon: '/romance-ss.webp', // Add your romance icon image URL here
      alt: 'Romance genre icon'
    },
    {
      id: 4,
      name: "Children's Books",
      // Replace with your actual image URL
      icon: '/children-books.webp', // Add your children's books icon image URL here
      alt: "Children's Books genre icon"
    },
    {
      id: 5,
      name: 'Fantasy',
      // Replace with your actual image URL
      icon: '/fantasy-ss.webp', // Add your fantasy icon image URL here
      alt: 'Fantasy genre icon'
    },
    {
      id: 6,
      name: 'How-To Guides',
      // Replace with your actual image URL
      icon: '/how-to-guides.webp', // Add your how-to guides icon image URL here
      alt: 'How-To Guides genre icon'
    },
    {
      id: 7,
      name: 'Drama',
      // Replace with your actual image URL
      icon: '/drama-ss.webp', // Add your drama icon image URL here
      alt: 'Drama genre icon'
    },
    {
      id: 8,
      name: 'Crime',
      // Replace with your actual image URL
      icon: '/crime-ss.webp', // Add your crime icon image URL here
      alt: 'Crime genre icon'
    },
    {
      id: 9,
      name: 'Biography',
      // Replace with your actual image URL
      icon: '/biography-ss.webp', // Add your biography icon image URL here
      alt: 'Biography genre icon'
    },
    {
      id: 10,
      name: 'Health',
      // Replace with your actual image URL
      icon: '/health-ss.webp', // Add your health icon image URL here
      alt: 'Health genre icon'
    },
    {
      id: 11,
      name: 'Travel',
      // Replace with your actual image URL
      icon: '/travel-ss.webp', // Add your travel icon image URL here
      alt: 'Travel genre icon'
    },
    {
      id: 12,
      name: 'Philosophy',
      // Replace with your actual image URL
      icon: '/philosophy-ss.webp', // Add your philosophy icon image URL here
      alt: 'Philosophy genre icon'
    },
    {
      id: 13,
      name: 'Science Fiction',
      // Replace with your actual image URL
      icon: '/science-fiction-ss.webp', // Add your science fiction icon image URL here
      alt: 'Science Fiction genre icon'
    },
    {
      id: 14,
      name: 'Adventure',
      // Replace with your actual image URL
      icon: '/adventure-ss.webp', // Add your adventure icon image URL here
      alt: 'Adventure genre icon'
    },
    {
      id: 15,
      name: 'Art',
      // Replace with your actual image URL
      icon: '/art-ss.webp', // Add your art icon image URL here
      alt: 'Art genre icon'
    },
    {
      id: 16,
      name: 'Business',
      // Replace with your actual image URL
      icon: '/business-ss.webp', // Add your business icon image URL here
      alt: 'Business genre icon'
    }
  ];


   const features = [
    {
      id: 1,
      title: 'Professionalism That Sets Us Apart:',
      description: 'Our team of professionals contributes unparalleled expertise to every aspect of the book publishing process based on years of',
      // Replace with your actual icon URL
      icon: '/pros.png', // Add your professionalism icon image URL here
      alt: 'Professionalism icon',
      color: 'text-red-600' // Color for the title
    },
    {
      id: 2,
      title: 'Personalized Method:',
      description: 'We recognize that each author and book is distinct. Because of this, we take a personalized approach, tailoring our services to',
      // Replace with your actual icon URL
      icon: '/per.png', // Add your personalized method icon image URL here
      alt: 'Personalized method icon',
      color: 'text-red-600'
    },
    {
      id: 3,
      title: 'Outstanding Quality:',
      description: 'All of our services, from writing and editing to marketing and publishing, are committed to delivering exceptional',
      // Replace with your actual icon URL
      icon: '/qua.png', // Add your quality icon image URL here
      alt: 'Outstanding quality icon',
      color: 'text-red-600'
    },
    {
      id: 4,
      title: 'Results-Driven Strategies:',
      description: 'We go above and beyond standard practices to create innovative, results-driven book marketing and promotion strategies. Our',
      // Replace with your actual icon URL
      icon: '/res.png', // Add your results-driven icon image URL here
      alt: 'Results-driven strategies icon',
      color: 'text-red-600'
    }
  ];
    return (
        <>
            {/* navbar Section  */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo Section */}
                     <img src="/logo-2.png" alt="Palmbay Publisher Logo" className="h-8 md:h-12 w-auto" />

                        {/* Contact and CTA Buttons */}
                        <div className="flex items-center space-x-3">
                            {/* Phone Number */}
                            <div className="hidden sm:flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors cursor-pointer">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="font-medium">+850 588-0888</span>
                            </div>

                            {/* CTA Button */}
                            <button onClick={openModal} className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm md:text-base">
                                Get Free Author Consultancy
                            </button>

                            {/* Mobile Menu Button */}
                            {/* <button className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button> */}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu (Hidden by default) */}
                {/* <div className="lg:hidden border-t border-gray-200 bg-white">
        <div className="px-4 py-2 space-y-1">
          <div className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer">Home</div>
          <div className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer">Services</div>
          <div className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer">Portfolio</div>
          <div className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer">Testimonials</div>
          <div className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer">About Us</div>
          <div className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer">Contact Us</div>
          <div className="block px-3 py-2">
            <div className="flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors cursor-pointer">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">+850 588-0888</span>
            </div>
          </div>
        </div>
      </div> */}
            </nav>

            {/* hero section  */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-20 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-white/50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                                    Palmbay Publisher
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Maximize Your Creative Writing Potential with{' '}
                                    <span className="text-blue-600">Modern Book Solutions</span>
                                </h1>

                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    In a world where words may enchant, inspire, and transform, we aim to provide you
                                    with the tools you need to make the most of your literary journey. Here at Palmbay Publisher,
                                    we value the craft of writing, the alchemy of advertising, and the adventure of publishing.
                                    If you want your ideas to become a reality, go no further than our dedicated team of
                                    industry veterans.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button  onClick={openModal} className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl">
                                    Get Free Consultancy
                                </button>

                                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +850 588-0888
                                </button>

                                <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Chat With Us
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center space-x-8 pt-8">
                                {/* 
                TRUSTPILOT IMAGE: Replace src with your trustpilot logo/stars image
                Recommended size: 150x40px or similar aspect ratio
              */}
                                <img
                                    src="/orm-2.webp"
                                    alt="Trustpilot 5 stars rating"
                                    className="h-10 w-auto"
                                />

                                {/* 
                REVIEWS.IO IMAGE: Replace src with your reviews.io logo
                Recommended size: 120x40px or similar aspect ratio
              */}
                                <img
                                    src="/orm-1.webp"
                                    alt="Reviews.io logo"
                                    className="h-8 w-auto"
                                />

                                {/* 
                AWARD BADGE IMAGE: Replace src with your 2024 winner badge image
                Recommended size: 80x80px (square format)
              */}
                                <img
                                    src="/award.webp"
                                    alt="2024 Winner Award Badge"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="relative">
                            {/* Sale Badge */}
                            <div className="absolute -top-4 -right-4 z-20">
                                {/* 
                SALE BADGE IMAGE: Replace src with your "Sale up to 50%" badge image
                Recommended size: 100x100px (square format)
                Should include "SALE", "up to", "50%" text in the design
              */}
                                <img
                                    src="/sale-badge.webp"
                                    alt="Sale up to 50% off"
                                    className="w-24 h-24 animate-pulse"
                                />
                            </div>

                            {/* Form Card */}
                            <div className="bg-white rounded-2xl shadow-2xl border border-red-200 p-8 relative">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Speak With Our
                                    </h3>
                                    <h4 className="text-2xl font-bold text-red-600 mb-4">
                                        Publishing Experts Today!
                                    </h4>
                                    <p className="text-gray-600">
                                        Receive expert advice on publishing your book in just one call!
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Your Full Name"
                                            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your Best Email"
                                            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="tel"
                                            name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleInputChange}
                                            placeholder="Contact Number"
                                            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute top-4 left-0 pl-3 flex items-start pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <textarea
                                            name="bookDetails"
                                            value={formData.bookDetails}
                                            onChange={handleInputChange}
                                            placeholder="Tell Us About Your Book"
                                            rows={4}
                                            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                                    >
                                        Request a Free Consultation
                                    </button>
                                </div>
                            </div>

                            {/* Books Stack Image */}

                        </div>
                    </div>
                </div>
            </section>

            {/* section 3 book  */}
            <div className="min-h-screen bg-gray-100">
                {/* Header Section */}
                <div className="bg-blue-900 py-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto flex justify-center">
                        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                            Get Published On
                        </button>
                    </div>
                </div>

                {/* Publisher Logos Section */}
                <div className="bg-red-600 py-6 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                        <div className="text-white mb-4 lg:mb-0 lg:mr-8">
                            <p className="text-lg font-light">From Ideas to</p>
                            <p className="text-xl font-bold italic">Bestsellers,</p>
                            <p className="text-lg font-light">We've Got You Covered</p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 flex-1">
                            {/* Amazon Logo - Replace with your image path */}
                            <div className="text-white text-2xl font-bold">
                                <img src="/logos-6.png" alt="Amazon" width={120} height={40} />
                                {/* amazon */}
                            </div>

                            {/* Barnes & Noble Logo - Replace with your image path */}
                            <div className="text-white text-lg">
                                <img src="/logos-5.png" alt="barnes & noble" width={100} height={40} />
                                {/* barnes & noble */}
                            </div>

                            {/* Walmart Logo - Replace with your image path */}
                            <div className="text-white text-lg">
                                <img src="/logos-3.png" alt="Walmart" width={100} height={30} />
                                {/* Walmart ebooks */}
                            </div>

                            {/* Google Play Books Logo - Replace with your image path */}
                            <div className="text-white text-lg flex items-center">
                                {/* <img src="/images/google-play-logo.png" alt="Google Play Books" width={120} height={30} /> */}
                                ▶ Google Play Books
                            </div>
                        </div>

                        <div className="mt-4 lg:mt-0 lg:ml-8">
                            <button  onClick={openModal} className="bg-blue-800 text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
                                Get Free Consultancy
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Book Images */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                {/* Main Book Cover - Replace with your image path */}
                                <img
                                    src="/home1.png"
                                    alt="The Dark Secret of Ian's Peak - Part 2: The Basement"
                                    width={500}
                                    height={700}
                                    className="rounded-lg "
                                />


                                {/* Secondary Book Cover - Position it slightly behind and to the left */}
                                <div className="absolute -left-8 -top-4 -z-10">
                                    {/* <img 
                  src="/images/book-cover-secondary.jpg" 
                  alt="Secondary Book Cover" 
                  width={350} 
                  height={450}
                  className="rounded-lg shadow-xl"
                /> */}
                                    <div className="w-72 h-88 bg-gradient-to-b from-yellow-600 to-orange-700 rounded-lg shadow-xl flex items-center justify-center text-white">
                                        {/* Replace this div with your secondary book cover image */}
                                        <p className="text-center px-4">Secondary Book Cover</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
                                    Expanding the Scope of Your Book's Reach with{' '}
                                    <span className="text-blue-700">Our Comprehensive Services</span>
                                </h1>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    We are your trusted partners in literary success, providing everything from expert
                                    book writing that gives life to your ideas to laser-focused marketing strategies that
                                    expand your audience and flawless publishing services that display your book in a way
                                    that does it justice. You can count on Palmbay Publisher to supply you with
                                    the knowledge, advice, and assistance you require to succeed as a writer.
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Fiction</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Biography</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Autobiography</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Action & Adventure</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Anthology</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Non-Fiction</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Informative</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Memoirs</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Western</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">Romance</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div>
                                <button className="bg-red-600 text-white px-8 py-4 rounded font-bold text-lg hover:bg-red-700 transition-colors shadow-lg">
                                    GET STARTED
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*usa Falg Contact Form Section */}
            <div
                className="py-16 ">
                <div className=" mx-auto"   >
                    <div className=" px-4 sm:px-6 lg:px-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-blue-200"
                        style={{
                            backgroundImage: 'url(/american.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {/* Form Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                                Contact Us Today For a Consultation
                            </h2>
                            <p className="text-2xl sm:text-3xl font-bold italic text-red-600">
                                With us!
                            </p>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 text-gray-700 placeholder-gray-500"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Best Email"
                                        className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 text-gray-700 placeholder-gray-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Contact Number */}
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Contact Number"
                                        className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 text-gray-700 placeholder-gray-500"
                                        required
                                    />
                                </div>

                                {/* Service Selection */}
                                <div>
                                    <select
                                        className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 text-gray-700 appearance-none bg-white cursor-pointer"
                                        required
                                    >
                                        <option value="" disabled className="text-gray-500">
                                            Select Service
                                        </option>
                                        <option value="fiction">Fiction Writing</option>
                                        <option value="non-fiction">Non-Fiction Writing</option>
                                        <option value="biography">Biography</option>
                                        <option value="autobiography">Autobiography</option>
                                        <option value="action-adventure">Action & Adventure</option>
                                        <option value="anthology">Anthology</option>
                                        <option value="informative">Informative</option>
                                        <option value="memoirs">Memoirs</option>
                                        <option value="western">Western</option>
                                        <option value="romance">Romance</option>
                                        <option value="publishing">Publishing Services</option>
                                        <option value="marketing">Marketing Services</option>
                                    </select>
                                    {/* Custom dropdown arrow */}
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <textarea
                                    placeholder="Tell Us About Your Book"
                                    rows="3"
                                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 text-gray-700 placeholder-gray-500 resize-vertical"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            {/* section 4  */}

            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                            Seize the Moment! Watch Your Book Grow Into a Masterpiece.
                        </h1>
                        <div className="w-16 h-1 bg-red-500 mx-auto"></div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                        {/* Left Column - Services 1 & 2 */}
                        <div className="space-y-12">
                            {/* Book Writing Service */}
                            <div className="relative">
                                <div className="flex items-start space-x-4">
                                    <span className="text-6xl md:text-7xl font-light text-blue-200 select-none">01</span>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                            <span className="border-b-2 border-red-500 pb-1">Book Writing</span>
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                                            Our book writing services can free your imagination and let your story flourish.
                                        </p>
                                        <a
                                            href="/services/book-writing"
                                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Book Editing Service */}
                            <div className="relative">
                                <div className="flex items-start space-x-4">
                                    <span className="text-6xl md:text-7xl font-light text-red-200 select-none">02</span>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                            <span className="border-b-2 border-red-500 pb-1">Book Editing</span>
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                                            With flawless grammar, natural prose, and consistent storytelling, our expert editors will make your manuscript effective.
                                        </p>
                                        <a
                                            href="/services/book-editing"
                                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Column - Book Image */}
                        <div className="flex justify-center lg:order-none order-first">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="/work-img.webp"
                                    alt="Cracking the Autism Code - Book by Dr. Kyle Daigle"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Column - Services 3 & 4 */}
                        <div className="space-y-12">
                            {/* Book Publishing Service */}
                            <div className="relative">
                                <div className="flex items-start space-x-4 text-right lg:flex-row-reverse">
                                    <span className="text-6xl md:text-7xl font-light text-red-200 select-none">03</span>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                            <span className="border-b-2 border-red-500 pb-1">Book Publishing</span>
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                                            Our all-inclusive book publishing services will take care of you, from editing and proofreading to cover art and ISBN ordering and distribution.
                                        </p>
                                        <a
                                            href="/services/book-publishing"
                                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Book Marketing Service */}
                            <div className="relative">
                                <div className="flex items-start space-x-4 text-right lg:flex-row-reverse">
                                    <span className="text-6xl md:text-7xl font-light text-blue-200 select-none">04</span>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                            <span className="border-b-2 border-red-500 pb-1">Book Marketing</span>
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                                            Gain insight and applause from your distinguished audience as we implement the right marketing tactics for your ideal audience.
                                        </p>
                                        <a
                                            href="/services/book-marketing"
                                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* show case section  */}
            <section className="py-16 px-4 bg-gray-50">
      {/* Container with max width for better readability on large screens */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Genres Mirroring Your{' '}
            <span className="text-blue-600">Infinite Creative Potential</span>
          </h2>
          
          {/* Updated description with new company name */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Palmbay Publisher offers a wide range of genres. Feel secure knowing that your work will find the ideal publication venue thanks to our knowledge of various literary forms
          </p>
        </div>

        {/* Genre Grid - Responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="bg-white rounded-lg border-2 border-red-300 p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:border-red-400"
            >
              {/* Genre Icon Container */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20">
                  {/* 
                    Replace the src with your actual image URLs
                    You can also use Next.js Image component for better optimization:
                    import Image from 'next/image';
                    <Image src={genre.icon} alt={genre.alt} width={80} height={80} />
                  */}
                  <img
                    src={genre.icon}
                    alt={genre.alt}
                    className="w-full h-full object-contain"
                    // Add loading="lazy" for better performance
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Genre Name */}
              <h3 className="text-sm md:text-base font-medium text-gray-700">
                {genre.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            We are a universe of linguistic creativity. Are you prepared to start a conversation?
          </h3>
          
          {/* CTA Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA Button */}
            <button  onClick={openModal} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 w-full sm:w-auto">
              Get Free Consultancy
            </button>
            
            {/* Secondary CTA Button with updated phone number */}
            <a
              href="tel:+8505880888"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {/* Phone icon (you can replace with your own icon) */}
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +850 588-0888
            </a>
          </div>
        </div>
      </div>
    </section>


     <section className="py-16 px-4 bg-white">
      {/* Container with max width for better readability */}
      <div className="max-w-7xl mx-auto">
        
        {/* Main content wrapper - responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Features content */}
          <div className="order-2 lg:order-1">
            
           
            {/* Features Grid - Responsive 2x2 layout on larger screens, single column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.id} className="space-y-4">
                  
                  {/* Feature Icon */}
                  <div className="w-16 h-16">
                    {/* 
                      Replace the src with your actual image URLs
                      You can also use Next.js Image component for better optimization:
                      import Image from 'next/image';
                      <Image src={feature.icon} alt={feature.alt} width={64} height={64} />
                    */}
                    <img
                      src={feature.icon}
                      alt={feature.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Feature Content */}
                  <div>
                    <h3 className={`text-lg font-bold mb-3 ${feature.color}`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Books Image */}
          <div className="order-1 lg:order-2">
             {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Why <span className="text-blue-600">Choose Us?</span>
              </h2>
              
              {/* Updated description with new company name */}
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Palmbay Publisher provides you with a set of strengths by which you can evaluate our talents these are the kinds of things that are perfect for a great outcome.
              </p>
              
              {/* CTA Button */}
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300">
                GET STARTED
              </button>
            </div>

            <div className="relative">
              {/* 
                Replace with your actual books image URL
                This shows the stack of books (PARADOX, etc.) from your design
              */}
              <img
                src="/choose-img.webp" // Add your books showcase image URL here
                alt="Published books showcase including PARADOX and other titles"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
              
              {/* Optional: Add decorative elements if needed */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10">
                {/* 
                  You can add a decorative pen/writing icon here if you have one
                  <img src="/images/icons/pen-decoration.svg" alt="" className="w-full h-full" />
                */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


            {/*MANUSCRIPT SECTION  */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight">
                            PUTTING MORE THAN WORDS TO PAPER – BRINGING VALUE AND IMPACT IN{' '}
                            <span className="text-blue-600">YOUR MANUSCRIPT</span>
                        </h2>
                    </div>

                    {/* Three Column Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                        {/* Fascinating Stories */}
                        <div className="relative">
                            {/* Top Border */}
                            <div className="w-full h-0.5 bg-red-400 mb-6"></div>

                            {/* Left Border - Hidden on mobile, visible on larger screens */}
                            <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-red-400 hidden lg:block"></div>

                            <div className="lg:pl-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-6 text-center lg:text-left">
                                    Fascinating Stories
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center lg:text-left">
                                    Capitalizing on the power of the written word, we assist you in developing your ideas into engaging narratives that will speak to your target audience. We create interesting characters, realistic settings, and exciting conflicts.
                                </p>
                            </div>

                            {/* Bottom Border */}
                            <div className="w-full h-0.5 bg-red-400 mt-6"></div>
                        </div>

                        {/* Changing Minds through Narratives */}
                        <div className="relative">
                            {/* Top Border */}
                            <div className="w-full h-0.5 bg-red-400 mb-6"></div>

                            {/* Left Border */}
                            <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-red-400 hidden lg:block"></div>

                            <div className="lg:pl-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-6 text-center lg:text-left">
                                    Changing Minds through Narratives
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center lg:text-left">
                                    Employing powerful descriptions to provoke deep reflection, helping you connect with readers on a personal level to leave an impression that lasts long after they've turned the last page.
                                </p>
                            </div>

                            {/* Bottom Border */}
                            <div className="w-full h-0.5 bg-red-400 mt-6"></div>
                        </div>

                        {/* Unique Perspectives */}
                        <div className="relative">
                            {/* Top Border */}
                            <div className="w-full h-0.5 bg-red-400 mb-6"></div>

                            {/* Left Border */}
                            <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-red-400 hidden lg:block"></div>

                            <div className="lg:pl-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-6 text-center lg:text-left">
                                    Unique Perspectives
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center lg:text-left">
                                    Every writer, in our opinion, has an original perspective just waiting to be shared. With our help, you can find the confidence to write from the heart, share your experiences, and make an impact in the literary world.
                                </p>
                            </div>

                            {/* Bottom Border */}
                            <div className="w-full h-0.5 bg-red-400 mt-6"></div>
                        </div>
                    </div>
                </div>
            </section>

{/* our process section  */}
    <section className="bg-slate-900 py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg">
            Palmbay Publisher provides you with a set of strengths by which you can evaluate our talents; 
            these are the kinds of things that are perfect for a great outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Process List */}
          <div className="space-y-4">
            {processes.map((process, index) => (
              <div 
                key={process.id}
                onClick={() => setActiveProcess(index)}
                className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeProcess === index 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-slate-800 text-gray-300 hover:text-white'
                }`}
              >
                <span className="text-2xl">{process.icon}</span>
                <h3 className="text-lg md:text-xl font-semibold">{process.title}</h3>
              </div>
            ))}
          </div>

          {/* Right Side - Process Details */}
          <div className="bg-blue-900 rounded-lg border-2 border-blue-600 p-6 lg:p-8">
            <div className="bg-red-600 rounded-lg p-6 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-center">
                {processes[activeProcess].content.heading}
              </h3>
            </div>

            <div className="mb-6">
              <p className="text-gray-200 text-lg mb-6">
                {processes[activeProcess].content.subtitle}
              </p>

              <ul className="space-y-3">
                {processes[activeProcess].content.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start space-x-3">
                    <span className="text-red-400 font-bold text-lg mt-0.5">✓</span>
                    <span className="text-gray-200">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <a  onClick={openModal}
               
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200 inline-block"
              >
                Book Your FREE Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

          {/* book writing section  */}
   <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">BOOK WRITERS FOR HIRE</span> ARE AVAILABLE
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We all have some story to tell, but only a few have the time or the writing skills to 
              craft a compelling piece that resonates with the audience. This is where our book 
              writers for hire come in. We connect you with a specialist in your genre and niche with 
              the skills and expertise to capture your unique voice and amplify it for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a  onClick={openModal}
              
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
              >
                Get Free Consultancy
              </a>
              <a 
                href="tel:+8505880888"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>📞</span>
                +850 588-0888
              </a>
            </div>
          </div>

          {/* Right Column - Book Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/home2.webp"
                alt="The Cider King - Published Book Example"
                width={500}
                height={400}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
 
 {/* Take Action Section  */}
  <section className="bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Take Action For Your Book
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Give us a call today and get a detailed review of your book to identify its needs and areas of 
              improvement.
            </p>
          </div>

          {/* Right Column - Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-end">
            <a  onClick={openModal}
             
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-colors duration-200"
            >
              Get Free Consultancy
            </a>
            <a 
              href="tel:+8505880888"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>📞</span>
              Call Now
            </a>
           
          </div>
        </div>


      </div>
    </section>


    {/* Clients Review Section  */}
 <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
            We Always Keep Our <span className="text-blue-600">Clients Satisfied!</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            At Palmbay Publisher, client happiness comes first! We'll ensure your book meets all publishing 
            standards and work together to achieve your vision.
          </p>
        </div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(currentSlide * 3, currentSlide * 3 + 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
            >
              <span className="text-xl">←</span>
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Mobile View - 1 Card */}
        <div className="lg:hidden relative">
          <div className="mb-8">
            <TestimonialCard testimonial={testimonials[currentSlide * 3]} />
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            >
              <span className="text-lg">←</span>
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            >
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2">
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      
      </div>
    </section>


{/* contact section  */}

<section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-lg overflow-hidden">
          
          {/* Left Side - Contact Info */}
          <div className="bg-blue-800 text-white p-8 lg:p-12 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-900 rounded-full opacity-20 transform translate-x-32 translate-y-32"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-700 rounded-full opacity-30 transform -translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Drop Us a Line</h2>
              
              <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                Contact us today for a personalized consultation and find out what 
                the Palmbay Publisher advantage is!
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+8505880888" className="text-xl font-semibold hover:text-blue-200 transition-colors">
                      +850 588-0888
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:info@palmbayPublisher.com" className="text-lg hover:text-blue-200 transition-colors break-all">
                      info@palmbayPublisher.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-700 p-3 rounded-full mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed">
                      42 Broadway Suite 1534,<br />
                      New York, NY 10004
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Share a <span className="text-blue-600">Message</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Leave your contact information in the box below, and a member of our team 
                will get in touch with you soon. We hope to hear from you soon!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-500"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Best Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-500"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-500"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter About Your Book"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-500 resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Request a Free Consultation'}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-center text-green-600 font-semibold">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-center text-red-600 font-semibold">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>        
        </div>
      
      </div>
    </section>


{/* footer  */}

<footer className="bg-gradient-to-b from-blue-900 to-slate-900">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              {/* Logo Design */}
            
              
              {/* Company Name */}
              <div className="ml-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  PALMBAY
                </h2>
                <p className="text-lg md:text-xl text-blue-300 font-semibold">
                  BOOK PUBLICATION
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              We at Palmbay Publisher are dedicated to helping you achieve your writing and publication dreams. 
              Whether you want to share your personal journey, craft a captivating work of fiction, or delve into a historical topic, 
              our passionate book enthusiasts will refine your experience word by word.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
            {/* Phone */}
            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6">
              <div className="text-blue-300 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <a href="tel:+8505880888" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors">
                +850 588-0888
              </a>
            </div>

            {/* Email */}
            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6">
              <div className="text-blue-300 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <a href="mailto:info@palmbayPublisher.com" className="text-white text-lg hover:text-blue-200 transition-colors break-words">
                info@palmbayPublisher.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6">
              <div className="text-blue-300 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white text-lg">
                42 Broadway Suite 1534,<br />
                New York, NY 10004
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-red-600 bg-opacity-20 rounded-lg p-8 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Publishing Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Contact us today for a free consultation and discover how we can bring your book to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a onClick={openModal}
               
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+8505880888"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <span>📞</span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-slate-800 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
            <a href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span className="text-gray-500 hidden md:inline">|</span>
            <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-black py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2">Disclaimer:</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              All company logos and trademarks appearing on our website are the property of their respective owners. 
              We are not affiliated, associated, endorsed by, or in any way officially connected with these companies or their trademarks. 
              The use of these logos and trademarks does not imply any endorsement, affiliation, or relationship between us and the respective companies. 
              We solely use these logos and trademarks for identification purposes only. All information and content provided on our website is for 
              informational purposes only and should not be construed as professional advice. We do not guarantee the accuracy or completeness of any 
              information provided on our website. We are not responsible for any errors or omissions, or for the results obtained from the use of this information. 
              Any reliance you place on such information is strictly at your own risk.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-500 text-sm text-center">
              © {currentYear} Palmbay Publisher. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

<ConsultationModal />
        </>

    );
};

export default BookPublishingLP;

