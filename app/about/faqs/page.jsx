"use client";

import { font } from '@/app/Components/font/font'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import React, { useState } from 'react'

const FAQSection = () => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null)
  const [openQuestionIndices, setOpenQuestionIndices] = useState({})

  // Toggle the main category
  const toggleCategory = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index)
  }

  // Toggle individual subquestions within a category
  const toggleQuestion = (categoryIndex, questionIndex) => {
    setOpenQuestionIndices((prev) => ({
      ...prev,
      [`${categoryIndex}-${questionIndex}`]: prev[`${categoryIndex}-${questionIndex}`] ? false : true,
    }))
  }

  const faqData = [
    {
      category: "About Silver Gate Publishing",
      questions: [
        {
          question: "What is Silver Gate Publishing?",
          answer: "Silver Gate Publishing is a self-publishing company that helps authors bring their books to life with professional services like editing, design, and marketing."
        },
        {
          question: "How long has Silver Gate Publishing been in business?",
          answer: "Silver Gate Publishing has been assisting authors for over a decade, with a strong track record of successful publications."
        },
        {
          question: "What makes Silver Gate Publishing different from other publishers?",
          answer: "We focus on personalized support, offering tailored solutions for each author while maintaining full creative control for you."
        },
        {
          question: "Where is Silver Gate Publishing located?",
          answer: "We are based in Mount Pleasant, South Carolina, but we work with authors from all over the world."
        },
        {
          question: "Can I trust Silver Gate Publishing with my manuscript?",
          answer: "Absolutely! We prioritize confidentiality and have a team of experienced professionals dedicated to your project’s success."
        }
      ]
    },
    {
      category: "General Book/Self-Publishing Questions",
      questions: [
        {
          question: "What is self-publishing?",
          answer: "Self-publishing is when an author takes on the responsibility of publishing their book, often with the help of a service provider like Silver Gate Publishing."
        },
        {
          question: "How much does self-publishing cost?",
          answer: "Costs vary depending on the services you need, such as editing, design, and marketing, but we offer transparent pricing tailored to your project."
        },
        {
          question: "How long does the self-publishing process take?",
          answer: "The timeline depends on the complexity of your project, but it typically takes 3-6 months from manuscript to published book."
        },
        {
          question: "Do I retain the rights to my book?",
          answer: "Yes, with self-publishing through Silver Gate, you retain full rights to your work."
        },
        {
          question: "What are the benefits of self-publishing?",
          answer: "Self-publishing offers creative control, higher royalties, and a faster path to market compared to traditional publishing."
        }
      ]
    },
    {
      category: "Services Questions",
      questions: [
        {
          question: "What services does Silver Gate Publishing offer?",
          answer: "We provide editing, design, formatting, illustrations, printing, marketing, and distribution services."
        },
        {
          question: "Can I choose which services I want?",
          answer: "Yes, we offer customizable packages so you can select only the services you need."
        },
        {
          question: "Do you provide support after publishing?",
          answer: "Absolutely, we offer post-publishing support, including marketing guidance and distribution assistance."
        },
        {
          question: "How do I get started with your services?",
          answer: "Simply contact us through our website or give us a call, and we’ll guide you through the process."
        },
        {
          question: "Are your services available for all genres?",
          answer: "Yes, we work with a wide range of genres, from fiction and non-fiction to children’s books and memoirs."
        }
      ]
    },
    {
      category: "Design & Formatting",
      questions: [
        {
          question: "What does the design process include?",
          answer: "Our design process includes cover design, interior layout, and formatting for both print and eBook formats."
        },
        {
          question: "Can I provide my own cover design?",
          answer: "Yes, you can provide your own design, or we can create a custom cover for you."
        },
        {
          question: "How do you ensure my book looks professional?",
          answer: "Our team of experienced designers follows industry standards to ensure your book meets professional quality."
        },
        {
          question: "What file formats do you accept for design?",
          answer: "We accept Word documents, PDFs, and other common formats for your manuscript."
        },
        {
          question: "Can I request revisions to the design?",
          answer: "Yes, we offer a set number of revisions to ensure you’re happy with the final design."
        }
      ]
    },
    {
      category: "Editing",
      questions: [
        {
          question: "What types of editing do you offer?",
          answer: "We offer developmental editing, copyediting, and proofreading to suit your needs."
        },
        {
          question: "How do I know if my book needs editing?",
          answer: "All books benefit from editing to improve clarity, grammar, and overall readability."
        },
        {
          question: "Who will edit my book?",
          answer: "Your book will be edited by a professional editor with experience in your genre."
        },
        {
          question: "How long does the editing process take?",
          answer: "Editing typically takes 2-4 weeks, depending on the length and complexity of your manuscript."
        },
        {
          question: "Will I lose my writing style during editing?",
          answer: "No, our editors work to preserve your unique voice while enhancing your manuscript."
        }
      ]
    },
    {
      category: "Illustrations",
      questions: [
        {
          question: "Do you offer illustration services?",
          answer: "Yes, we provide custom illustrations for children’s books, covers, and other projects."
        },
        {
          question: "Can I choose the style of illustrations?",
          answer: "Absolutely, we work with you to match the illustration style to your vision."
        },
        {
          question: "How much do illustrations cost?",
          answer: "Costs vary based on the number and complexity of illustrations, but we provide a detailed quote upfront."
        },
        {
          question: "Who owns the rights to the illustrations?",
          answer: "You retain the rights to the illustrations created for your book."
        },
        {
          question: "How long does it take to create illustrations?",
          answer: "Illustration timelines vary, but most projects take 4-8 weeks depending on the scope."
        }
      ]
    },
    {
      category: "Printing",
      questions: [
        {
          question: "What printing options do you offer?",
          answer: "We offer both print-on-demand and offset printing, depending on your needs."
        },
        {
          question: "Can I order a small batch of books?",
          answer: "Yes, with print-on-demand, you can order as few or as many copies as you’d like."
        },
        {
          question: "What paper quality do you use?",
          answer: "We use high-quality, industry-standard paper to ensure your book looks professional."
        },
        {
          question: "How long does printing take?",
          answer: "Print-on-demand orders typically take 5-10 business days, while offset printing may take longer."
        },
        {
          question: "Can I get a hardcover book?",
          answer: "Yes, we offer hardcover, paperback, and eBook formats for your book."
        }
      ]
    },
    {
      category: "Book Marketing Services",
      questions: [
        {
          question: "What marketing services do you provide?",
          answer: "We offer social media promotion, book launch strategies, and author website creation."
        },
        {
          question: "How can I promote my book effectively?",
          answer: "We recommend a mix of online marketing, book reviews, and engaging with your audience on social media."
        },
        {
          question: "Do you help with book launch events?",
          answer: "Yes, we can help plan and promote virtual or in-person book launch events."
        },
        {
          question: "Can you help me get reviews for my book?",
          answer: "We can connect you with reviewers and guide you on how to request reviews."
        },
        {
          question: "How long should I market my book?",
          answer: "Marketing is an ongoing process, but we recommend focusing heavily on the first 3-6 months after launch."
        }
      ]
    },
    {
      category: "Distribution",
      questions: [
        {
          question: "How do you handle book distribution?",
          answer: "We distribute through major platforms like Amazon, Barnes & Noble, and IngramSpark for global reach."
        },
        {
          question: "Can my book be sold internationally?",
          answer: "Yes, our distribution network ensures your book is available worldwide."
        },
        {
          question: "Do I need to manage inventory?",
          answer: "No, with print-on-demand, books are printed as they’re ordered, so there’s no inventory to manage."
        },
        {
          question: "How do I track my book sales?",
          answer: "We provide access to sales reports through your distribution accounts."
        },
        {
          question: "Can my book be in bookstores?",
          answer: "Yes, through IngramSpark, your book can be available for bookstores to order."
        }
      ]
    }
  ]

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {faqData.map((section, categoryIndex) => (
        <div key={categoryIndex} className="mb-4">
          {/* Category Accordion Button */}
          <button
            onClick={() => toggleCategory(categoryIndex)}
            className="w-full flex justify-between items-center bg-teal-600 text-white py-4 px-6 rounded-lg text-left text-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            <span>{section.category}</span>
            <span>{openCategoryIndex === categoryIndex ? '−' : '+'}</span>
          </button>

          {/* Subquestions Accordion */}
          {openCategoryIndex === categoryIndex && (
            <div className="bg-white p-6 rounded-b-lg shadow-md">
              {section.questions.map((item, questionIndex) => (
                <div key={questionIndex} className="mb-2">
                  <button
                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    className="w-full flex justify-between items-center text-left text-md font-medium text-gray-800 py-2 px-4 border-b border-gray-200 hover:bg-gray-100"
                  >
                    <span>{item.question}</span>
                    <span>{openQuestionIndices[`${categoryIndex}-${questionIndex}`] ? '−' : '+'}</span>
                  </button>
                  {openQuestionIndices[`${categoryIndex}-${questionIndex}`] && (
                    <div className="p-4 text-gray-600 bg-gray-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const page = () => {
  return (
    <div className={`${font.className}`}>
      <Navbar />
      <div
        className="relative w-full min-h-[30rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/whitewood.png')" }}
      >
        <div className="absolute inset-0 h-full flex flex-col justify-center items-center text-black px-4">
          <p className="text-3xl text-center md:text-6xl">
            Silver Gate Publishing<br />
            Frequently Asked Questions
          </p>
          <p className="text-center text-xl mt-6 max-w-4xl">
            While we generally try to avoid platitudes in our writing, this feels like a good place to reaffirm that there’s no such thing as a dumb question. Writing and publishing a book can feel intimidating for first-time authors, so consider this an open invitation to give us a call and fire away with as many questions as you’d like. Whether you’re looking for more information about Silver Gate's publishing solutions or general self-publishing best practices, we’re an open book (pun intended).
          </p>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  )
}

export default page