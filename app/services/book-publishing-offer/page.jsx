"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, X, CheckCircle, AlertCircle } from 'lucide-react';
import { ChevronLeft, ChevronRight, Users, TrendingUp, Megaphone } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const GlenfallHeroSection = () => {
    // Form data section 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showThankYouModal, setShowThankYouModal] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Fixed EmailJS configuration
    const EMAILJS_SERVICE_ID = 'service_5fdp7dx';
    const EMAILJS_TEMPLATE_ID = 'template_gk147gk';
    const EMAILJS_PUBLIC_KEY = 'uN-2O3nbFXI273dvI';

    // Load EmailJS on component mount
    useEffect(() => {
        const loadEmailJS = async () => {
            if (!window.emailjs) {
                try {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
                    script.async = true;

                    await new Promise((resolve, reject) => {
                        script.onload = resolve;
                        script.onerror = reject;
                        document.head.appendChild(script);
                    });

                    window.emailjs.init(EMAILJS_PUBLIC_KEY);
                } catch (error) {
                    console.error('Failed to load EmailJS:', error);
                }
            }
        };

        loadEmailJS();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = async (templateParams) => {
        if (!window.emailjs) {
            throw new Error('EmailJS not loaded. Please refresh the page and try again.');
        }

        try {
            const response = await window.emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );

            if (response.status !== 200) {
                throw new Error('Failed to send email. Please try again.');
            }

            return response;
        } catch (error) {
            console.error('EmailJS Error:', error);
            throw new Error(error.text || error.message || 'Failed to send email. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const templateParams = {
                to_email: 'support@palmbaypublishers.com',
                name: formData.name,
                // from_email: formData.email,
                // phone: formData.phone,
                time: new Date().toLocaleString(),
                message: `
Name: ${formData.name}                
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
                `.trim(),
                reply_to: formData.email
            };

            await sendEmail(templateParams);

            // Show success modal and reset form
            setShowThankYouModal(true);
            setShowConsultationModal(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            setErrorMessage(error.message);
            setShowErrorModal(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setShowThankYouModal(false);
    };

    const closeErrorModal = () => {
        setShowErrorModal(false);
        setErrorMessage('');
    };

    const openConsultationModal = () => {
        setShowConsultationModal(true);
    };

    const closeConsultationModal = () => {
        setShowConsultationModal(false);
    };

    // Enhanced Error Modal Component
    const ErrorModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 relative">
                <button
                    onClick={closeErrorModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                        {errorMessage || 'We couldn\'t send your message right now. Please try again or contact us directly.'}
                    </p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center space-x-2 text-orange-500">
                            <Phone className="w-4 h-4" />
                            <a href="tel:(850) 588-0888" className="font-semibold hover:underline text-sm sm:text-base">
                                (850) 588-0888
                            </a>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-orange-500">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:support@palmbaypublishers.com" className="text-xs sm:text-sm hover:underline">
                                support@palmbaypublishers.com
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <button
                            onClick={closeErrorModal}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
                        >
                            Close
                        </button>
                        <button
                            onClick={() => {
                                closeErrorModal();
                                handleSubmit(new Event('submit'));
                            }}
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Thank You Modal Component
    const ThankYouModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 relative">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center space-x-2 text-orange-500">
                            <Phone className="w-4 h-4" />
                            <span className="font-semibold text-sm sm:text-base">(850) 588-0888</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-orange-500">
                            <Mail className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">support@palmbaypublishers.com</span>
                        </div>
                    </div>

                    <button
                        onClick={closeModal}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );

    // Consultation Modal Component
    const ConsultationModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 sm:p-6 rounded-t-2xl relative overflow-hidden">
                    <button
                        onClick={closeConsultationModal}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-gray-200 transition-colors z-10"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Decorative airplane */}
                    <div className="absolute top-2 right-10 sm:right-12 text-white opacity-60">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                    </div>

                    <div className="text-white">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">Get Your Free Consultation</h3>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="p-4 sm:p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter Your Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg text-black focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                        />

                        <textarea
                            name="message"
                            placeholder="Tell us about your book project"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none transition-colors text-sm sm:text-base"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center space-x-2 font-medium transition-colors shadow-lg hover:shadow-xl disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send</span>
                                    <MessageCircle className="h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

    // Carousel state section 2
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            category: "PUBLISHING CAMPAIGN FOR APPLICATIONS OF GEOMETRIC ALGEBRA TO BLACK HOLES & HAWKING RADIATION BY SANDI SETIAWAN",
            title: "A deep dive into the profound physics that govern black holes, Hawking radiation, and the universe.",
            description: "When we teamed up with Sandi Setiawan to publish his groundbreaking work Applications of Geometric Algebra to Black Holes & Hawking Radiation, we knew this book was not just another scientific publication — it was an intricate exploration of theoretical physics, blending advanced mathematics with cutting-edge astrophysics. Our publishing efforts centered around presenting the book as a must-read for physicists, mathematicians, and science enthusiasts eager to understand the complex relationship between space, time, and the universe.",
            bookCover: "/blackholes.png",
            platforms: [
                { name: "amazon", logo: "📚" },
                { name: "facebook", logo: "📘" },
                { name: "kindle", logo: "📖" }
            ]
        },
        {
            id: 2,
            category: "Publishing Campaign for Mike Dimmer's Book Collection: Mastering Success, Personal Growth, and Life's Hidden Laws",
            title: "From ancient wisdom to modern strategies, we helped elevate Mike Dimmer's books to the ",
            description: "We partnered with Mike Dimmer to publish his trio of books: The A Plan, Above The Law, and the upcoming The Trick in Life. Each blends ancient wisdom with practical strategies for success. Our goal was to introduce these works to a wider audience and establish Mike as a leading figure in personal development. The publishing campaign boosted sales for The A Plan and Above The Law, growing Mike's social media following. Anticipation for The Trick in Life ensured a strong launch. These efforts solidified Mike Dimmer's presence in the self-help space, empowering readers to master success.",
            bookCover: "/Above the Law.png",
            platforms: [
                { name: "amazon", logo: "📚" },
                { name: "facebook", logo: "📘" },
                { name: "kindle", logo: "📖" }
            ]
        },
        {
            id: 3,
            category: "Publishing Campaign for Grocery Shopping Savings Secrets by Rob Rice Winter",
            title: "Helping readers unlock the secrets to smarter, budget-friendly grocery shopping with actionable tips and tricks.",
            description: "We had the opportunity to work with Rob Rice Winter on publishing Grocery Shopping Savings Secrets, helping readers transform their shopping habits. The campaign was a success, making the book a go-to resource for budget-conscious shoppers. It gained popularity on social media, with thousands engaging with Rob's tips. Influencer partnerships and a viral hashtag helped expand its reach. Sales spiked as readers embraced Rob's strategies, making Grocery Shopping Savings Secrets a must-have guide for those focused on saving money and shopping smart.",
            bookCover: "/Rob Rice.png",
            platforms: [
                { name: "amazon", logo: "📚" },
                { name: "facebook", logo: "📘" },
                { name: "kindle", logo: "📖" }
            ]
        }
    ];


    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Process Steps Data
    const processSteps = [
        {
            number: "01",
            title: "Manuscript Submission",
            description: "Submit your manuscript along with a brief outline. Our team reviews your content and confirms the publishing requirements to get started.",
            position: "top-left"
        },
        {
            number: "02",
            title: "Editing & Proofreading",
            description: "Our professional editors refine your manuscript, ensuring clarity, grammar accuracy, and overall quality while maintaining your unique voice.",
            position: "top-right"
        },
        {
            number: "03",
            title: "Book Design & Formatting",
            description: "We design a professional cover and format your book for both print and digital platforms, ensuring it meets publishing standards.",
            position: "left"
        },
        {
            number: "04",
            title: "Pre-Launch Setup",
            description: "Before release, we prepare distribution channels, set up metadata, and optimize your book for maximum discoverability.",
            position: "right"
        },
        {
            number: "05",
            title: "Book Publishing & Launch",
            description: "Your book is published and made available on leading platforms like Amazon, Kindle, and other major retailers worldwide.",
            position: "bottom-left"
        },
        {
            number: "06",
            title: "Post-Publishing Support",
            description: "We continue supporting you with promotional guidance, sales tracking, and strategies to help your book gain momentum after launch.",
            position: "bottom-right"
        }
    ];


    const getPositionClasses = (position) => {
        switch (position) {
            case "top-left":
                return "absolute top-8 left-8 max-w-xs text-left";
            case "top-right":
                return "absolute top-8 right-8 max-w-xs text-right";
            case "left":
                return "absolute top-1/2 left-8 -translate-y-1/2 max-w-xs text-left";
            case "right":
                return "absolute top-1/2 right-8 -translate-y-1/2 max-w-xs text-right";
            case "bottom-left":
                return "absolute bottom-8 left-8 max-w-xs text-left";
            case "bottom-right":
                return "absolute bottom-8 right-8 max-w-xs text-right";
            default:
                return "";
        }
    };

    const getNumberPositionClasses = (position) => {
        switch (position) {
            case "top-left":
                return "absolute top-20 left-32";
            case "top-right":
                return "absolute top-20 right-32";
            case "left":
                return "absolute top-1/2 left-24 -translate-y-1/2";
            case "right":
                return "absolute top-1/2 right-24 -translate-y-1/2";
            case "bottom-left":
                return "absolute bottom-20 left-32";
            case "bottom-right":
                return "absolute bottom-20 right-32";
            default:
                return "";
        }
    };

    // Services Data
    const services = [
        {
            id: 1,
            title: "Author Network",
            description: "The Palmbay Publishers Author Network provides essential resources for authors preparing to publish. Join our community to gain guidance on manuscript refinement, publishing options, and strategies to grow your author brand while connecting with readers and peers.",
            img: "/serv1.jpg"
        },
        {
            id: 2,
            title: "Publishing & Distribution",
            description: "Our publishing experts help transform your manuscript into a professionally designed book. From editing and cover design to distribution on Amazon, Kindle Direct Publishing, and global retailers, we ensure your book reaches readers everywhere.",
            img: "/serv2.jpg"
        },
        {
            id: 3,
            title: "Publicity & Promotion",
            description: "With our publicity services, Palmbay Publishers gets your book noticed. From media outreach to author spotlights and event promotions, we create buzz that builds credibility, enhances visibility, and forges meaningful connections with your audience.",
            img: "/serv3.jpg"
        },
    ];


    // FAQ Section
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What is included in your book publishing services?",
            answer: "Our publishing services cover every stage of the journey — including professional editing, cover design, interior formatting, ISBN assignment, eBook and print publishing, and worldwide distribution to platforms like Amazon, Barnes & Noble, and Apple Books."
        },
        {
            id: 2,
            question: "How much does it cost to publish a book?",
            answer: "Publishing costs depend on the level of services you need. We offer flexible packages ranging from essential publishing support to premium full-service publishing. Contact us for a tailored quote based on your manuscript, format preferences, and publishing goals."
        },
        {
            id: 3,
            question: "How long does the publishing process take?",
            answer: "The timeline varies depending on your manuscript's readiness and the services required. On average, the process can take 4–12 weeks from submission to publication. Complex projects (with editing, design, and marketing add-ons) may take longer."
        },
        {
            id: 4,
            question: "Do you work with both first-time and experienced authors?",
            answer: "Yes! Whether you are a first-time writer or an established author, our publishing solutions are designed to meet your needs. We provide guidance and resources to debut authors while offering professional publishing support to seasoned writers."
        }
    ];


    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Thank You Modal */}
            {showThankYouModal && <ThankYouModal />}

            {/* Error Modal */}
            {showErrorModal && <ErrorModal />}

            {/* Consultation Modal */}
            {showConsultationModal && <ConsultationModal />}

            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28 xl:h-32">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
                                {/* Circular Logo Container */}
                                <div className="relative">
                                    <div className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 rounded-full overflow-hidden bg-white shadow-md ring-2 ring-orange-100 hover:ring-orange-200 transition-all duration-300">
                                        <img
                                            src="/logo-2.png"
                                            alt="Palmbay Publishers Logo"
                                            className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    {/* Optional: Subtle glow effect */}
                                    <div className="absolute inset-0 rounded-full bg-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Company Name - Hidden on very small screens */}
                                <div className="hidden xs:block">
                                    <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                                        <span className="text-orange-500">PALMBAY</span>
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-600 tracking-wider leading-tight -mt-1">
                                        PUBLISHING
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info - Hidden on mobile */}
                        <div className="hidden xl:flex items-center space-x-6 lg:space-x-8">
                            <div className="flex items-center text-sm">
                                <Mail className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="text-gray-600 text-xs">Email Info:</div>
                                    <a
                                        href="mailto:support@palmbaypublishers.com"
                                        className="text-orange-500 hover:text-orange-600 transition-colors"
                                    >
                                        <div className="font-medium">support@palmbaypublishers.com</div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center text-sm">
                                <Phone className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="text-gray-600 text-xs">Call Now:</div>
                                    <a
                                        href="tel:(850) 588-0888"
                                        className="text-orange-500 hover:text-orange-600 transition-colors"
                                    >
                                        <div className="font-medium">(850) 588-0888</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Mobile/Tablet Contact Button */}
                        <div className="xl:hidden">
                            <a
                                href="tel:(850) 588-0888"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center space-x-2 text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                            >
                                <Phone className="h-4 w-4" />
                                <span className="hidden sm:inline font-medium">Call Now</span>
                            </a>
                        </div>

                        {/* Desktop Get Started Button */}
                        <button
                            onClick={openConsultationModal}
                            className="hidden xl:flex bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg items-center space-x-2 transition-all duration-300 hover:shadow-lg transform hover:scale-105 font-medium"
                        >
                            <span>Get Started</span>
                            <MessageCircle className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="relative z-10 text-center lg:text-left">
                            <div className="inline-block">
                                <span className="bg-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                    Book Publishing & Publication Services USA
                                </span>
                            </div>

                            <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                                Book Publishing Service For
                                <br className="hidden sm:block" />
                                <span className="text-orange-500"> New Authors</span>
                            </h1>

                            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                                Palmbay Publishers provides book publishing for authors with clear goals to sell
                                books and enhance author brands. We understand authors can have
                                limited budgets for book publishing services — and that every dollar
                                spent must count. But we get results; we show authors how book
                                publicity can be an excellent investment and have positive ROI.
                            </p>

                            <button
                                onClick={openConsultationModal}
                                className="mt-6 sm:mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg flex items-center space-x-2 text-sm sm:text-base lg:text-lg font-medium transition-colors shadow-lg hover:shadow-xl mx-auto lg:mx-0"
                            >
                                <span>Get Started</span>
                                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                        </div>

                        {/* Right Form */}
                        <div className="relative mt-8 lg:mt-0">
                            {/* Decorative Elements - Hidden on mobile */}
                            <div className="hidden md:block absolute -top-4 -left-4 w-16 lg:w-24 h-16 lg:h-24 border-2 border-dashed border-gray-300 rounded-full"></div>
                            <div className="hidden md:block absolute top-6 lg:top-10 right-6 lg:right-10 w-6 lg:w-8 h-6 lg:h-8 transform rotate-12">
                                <div className="w-full h-full bg-orange-200 rounded"></div>
                            </div>
                            <div className="hidden md:block absolute bottom-0 -right-4 lg:-right-8 w-8 lg:w-12 h-8 lg:h-12 transform -rotate-12">
                                <div className="w-full h-full border-2 border-orange-300 rounded"></div>
                            </div>

                            {/* Form */}
                            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 relative z-10">
                                <div className="flex items-center justify-between mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                                        Get Your Free Consultation
                                    </h3>
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                        <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base text-black placeholder-gray-400"
                                        required
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base text-black placeholder-gray-400"
                                        required
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base text-black placeholder-gray-400"
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your book project"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base text-black placeholder-gray-400"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center space-x-2 font-medium transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send</span>
                                                <MessageCircle className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 lg:h-24 xl:h-32 bg-gradient-to-r from-gray-800 to-gray-900 transform -skew-y-1 origin-bottom-left"></div>
            </section>

            {/* Platforms Section */}
            <section className="bg-white py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 lg:mb-12">
                        Platforms We Love Working With
                    </h2>

                    {/* Desktop/Tablet Grid */}
                    <div className="hidden sm:flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 opacity-70">
                        {[
                            "/imgi_15_4.png",
                            "/imgi_16_5.png",
                            "/imgi_14_3.png",
                            "/imgi_17_6.png",
                            "/imgi_18_7.png",
                            "/imgi_19_8.png",
                            "/imgi_20_9.png",
                            "/imgi_21_10.png",
                            "/imgi_22_11.png"
                        ].map((src, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" src={src} alt="" />
                            </div>
                        ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="sm:hidden">
                        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                            {[
                                "/imgi_15_4.png",
                                "/imgi_16_5.png",
                                "/imgi_14_3.png",
                                "/imgi_17_6.png",
                                "/imgi_18_7.png",
                                "/imgi_19_8.png",
                                "/imgi_20_9.png",
                                "/imgi_21_10.png",
                                "/imgi_22_11.png"
                            ].map((src, index) => (
                                <div
                                    key={index}
                                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors"
                                >
                                    <img className="w-6 h-6" src={src} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                            Our Latest <span className="text-orange-500">Book Marketing </span>
                            <br className="hidden sm:block" />
                            Projects
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                            Take a glimpse of our recent book marketing initiatives that demonstrate our expertise in boosting authors'
                            visibility, engagement, and sales for authors across diverse genres and platforms.
                        </p>
                    </div>

                    {/* Project Showcase */}
                    <div className="relative">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            {/* Book Cover */}
                            <div className="relative order-2 lg:order-1">
                                <div className="flex justify-center">
                                    <img
                                        src={projects[currentSlide].bookCover}
                                        alt={projects[currentSlide].title}
                                        className="w-48 sm:w-64 md:w-80 lg:w-full max-w-sm rounded-lg shadow-2xl max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-cover"
                                        onError={(e) => {
                                            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFNUU3RUIiLz4KPHN2ZyB4PSIxMjUiIHk9IjE3NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiM5Q0E0QUYiPgo8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXoiLz4KPHN2Zz4KPC9zdmc+";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                                <div className="text-orange-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
                                    {projects[currentSlide].category}
                                </div>

                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                    {projects[currentSlide].title}
                                </h3>

                                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                                    {projects[currentSlide].description}
                                </p>

                                {/* Platform Logos */}
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 pt-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl sm:text-2xl">📚</span>
                                        <span className="text-orange-500 font-bold text-sm sm:text-lg lg:text-xl">amazon</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-blue-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded">
                                        <span className="text-white font-bold text-sm sm:text-base">facebook</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                                        <span className="text-orange-400 font-bold text-sm sm:text-base">kindle</span>
                                        <span className="text-gray-600 text-xs sm:text-sm">direct publishing</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows - Desktop Only */}
                        <button
                            onClick={prevSlide}
                            className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-orange-500 w-6 sm:w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            What Is Our <span className="text-orange-500">Book Publishing</span>
                            <br />
                            <span className="text-orange-500">Process</span>?
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our book publishing process is designed to guide authors from manuscript to market.
                            We help you refine your work, design a professional book, distribute it across major
                            platforms, and promote it to the right audience—ensuring your story reaches readers
                            worldwide.
                        </p>
                    </div>

                    {/* Desktop Process Diagram - Hidden on mobile/tablet */}
                    <div className="hidden xl:flex justify-center items-center min-h-[800px] relative">
                        {/* Central Book Image */}
                        <div className="relative z-10">
                            <img
                                src="/imgi_32_book-img.png"
                                alt="Open Book"
                                className="w-80 h-60 object-contain drop-shadow-2xl"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            {/* Fallback book illustration */}
                            <div className="hidden w-80 h-60 bg-white rounded-lg shadow-2xl flex items-center justify-center">
                                <div className="w-64 h-44 bg-gray-100 rounded border-l-4 border-gray-300 flex items-center justify-center">
                                    <span className="text-4xl">📖</span>
                                </div>
                            </div>
                        </div>

                        {/* Process Steps */}
                        {processSteps.map((step, index) => (
                            <React.Fragment key={step.number}>
                                {/* Step Content */}
                                <div className={getPositionClasses(step.position)}>
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-center mb-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                            <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Number Badges */}
                                <div className={getNumberPositionClasses(step.position)}>
                                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-20 relative">
                                        {step.number}
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}

                        {/* Decorative elements around the book */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Curved connecting lines */}
                            <svg className="w-full h-full" viewBox="0 0 800 600">
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" opacity="0.6" />
                                    </marker>
                                </defs>

                                {/* Curved lines connecting to book center */}
                                <path d="M 150 150 Q 300 100 400 300" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                                <path d="M 650 150 Q 500 100 400 300" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                                <path d="M 150 300 Q 250 300 400 300" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                                <path d="M 650 300 Q 550 300 400 300" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                                <path d="M 150 450 Q 300 500 400 300" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                                <path d="M 650 450 Q 500 500 400 300" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.4" markerEnd="url(#arrowhead)" />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile/Tablet View - Stack for smaller screens */}
                    <div className="xl:hidden mt-8 sm:mt-12">
                        <div className="space-y-6 sm:space-y-8">
                            {processSteps.map((step) => (
                                <div key={step.number} className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg flex-shrink-0">
                                        {step.number}
                                    </div>
                                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 flex-1">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
                            Experience the best Book Publishing Services from
                            <br className="hidden sm:block" />
                            <span> Palmbay Publications</span>
                        </h2>
                        <div className="w-12 sm:w-16 h-1 bg-orange-500 mx-auto mt-4 sm:mt-6"></div>
                    </div>

                    {/* Services Grid - Desktop */}
                    <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
                        {services.map((service, index) => (
                            <div key={service.id} className="group">
                                <div className="border-2 border-gray-200 rounded-lg p-6 xl:p-8 h-full hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                                    {/* Illustration Area */}
                                    <div className="bg-gray-50 rounded-lg p-6 xl:p-8 mb-6 h-48 xl:h-64 flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                                        <div className="text-center">
                                            <img src={service.img} alt="" className="max-w-full max-h-full object-contain" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl xl:text-2xl font-bold text-orange-500 mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm xl:text-base text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Services Carousel - Mobile/Tablet */}
                    <div className="lg:hidden">
                        <div className="relative">
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                            </button>

                            {/* Carousel Container */}
                            <div className="overflow-hidden rounded-lg">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {services.map((service, index) => (
                                        <div key={service.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                                            <div className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
                                                {/* Illustration Area */}
                                                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 h-48 sm:h-56 md:h-64 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <img src={service.img} alt="" className="max-w-full max-h-full object-contain" />
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="text-center">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500 mb-3 sm:mb-4">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-orange-500 w-6 sm:w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-br from-orange-500 to-red-500 py-12 sm:py-16 lg:py-20 overflow-hidden">
                {/* Decorative Images - Hidden on mobile */}
                <div className="absolute top-4 left-4 sm:left-8 opacity-80 hidden sm:block">
                    <img
                        src="/vec7.png"
                        alt="Writing pen decoration"
                        className="w-[200px] h-[150px] sm:w-[300px] sm:h-[229px] lg:w-[430px] lg:h-[329px] object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    {/* Fallback */}
                    <div className="hidden w-16 sm:w-24 h-16 sm:h-24 flex items-center justify-center">
                        <span className="text-2xl sm:text-4xl text-white opacity-60">✏️</span>
                    </div>
                </div>

                <div className="absolute top-8 sm:top-16 right-6 sm:right-12 opacity-80 hidden sm:block">
                    <img
                        src="/imgi_49_vec9.png"
                        alt="Blue pen decoration"
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    {/* Fallback */}
                    <div className="hidden w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl text-white opacity-60">🖊️</span>
                    </div>
                </div>

                <div className="absolute bottom-16 sm:bottom-32 right-4 sm:right-8 opacity-80 hidden sm:block">
                    <img
                        src="/vec8.png"
                        alt="White orange pen decoration"
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    {/* Fallback */}
                    <div className="hidden w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                        <span className="text-xl sm:text-2xl text-white opacity-60">🖋️</span>
                    </div>
                </div>

                {/* Wavy line decoration */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg viewBox="0 0 1200 100" className="w-full h-12 sm:h-16 fill-current text-black opacity-20">
                        <path d="M0,60 Q300,10 600,60 T1200,60 L1200,100 L0,100 Z" />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Ready to Publish Your Book? Let's Bring
                        <br className="hidden sm:block" />
                        Your Story to the World!
                    </h2>

                    <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                        Publishing your book is the first step toward sharing your voice with readers everywhere.
                        As a trusted book publishing partner, we help authors transform manuscripts into
                        professional, high-quality books available across global platforms. From editing and design
                        to distribution and launch, our team ensures your work gets the visibility it deserves.
                        Let's publish your book and make your author journey a success.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <a
                            href="tel:(850) 588-0888"
                            className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 font-medium text-sm sm:text-base lg:text-lg"
                        >
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>(850) 588-0888</span>
                        </a>

                        <button
                            onClick={openConsultationModal}
                            className="bg-white text-orange-500 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 font-medium text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl"
                        >
                            <span>Get Started</span>
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative">
                {/* Decorative image for FAQ section */}
                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 opacity-60 hidden sm:block">
                    <img
                        src="/imgi_11_vec2.png"
                        alt="Orange pen decoration"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    {/* Fallback */}
                    <div className="hidden w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl text-orange-500 opacity-60">✒️</span>
                    </div>
                </div>

                {/* Book illustration on left */}
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 opacity-40 hidden sm:block">
                    <div className="w-12 h-15 sm:w-16 sm:h-20 border-2 border-gray-300 rounded transform -rotate-12">
                        <div className="w-full h-full bg-white rounded flex items-center justify-center">
                            <span className="text-lg sm:text-2xl">📖</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Frequently Asked <span className="text-orange-500">Questions</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions? We've got answers! Here are some common queries about our book publishing services.
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3 sm:space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="bg-black rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-900 transition-colors duration-200"
                                >
                                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                                        <span className="text-white text-sm sm:text-lg font-bold bg-gray-800 px-2 sm:px-3 py-1 rounded flex-shrink-0">
                                            {String(faq.id).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-white text-sm sm:text-base lg:text-lg font-medium truncate sm:truncate-none">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className="text-white ml-2 flex-shrink-0">
                                        {openFAQ === faq.id ? (
                                            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === faq.id ? 'max-h-96 pb-4 sm:pb-6' : 'max-h-0'
                                    }`}>
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <div className="pl-8 sm:pl-12 lg:pl-16">
                                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Palmbay Publishers Hero Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Section - From Page to Screen */}
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
                        {/* Left - Laptop Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
                                <img
                                    src="/laptop.jpg"
                                    alt="Laptop with book and movie clapboard"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                From Page to Screen:
                                <br />
                                <span className="text-orange-500">Transform Your Book Into Film</span>
                            </h2>

                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                                At Genfall Publications, we go beyond publishing—we help you bring your story to life on screen.
                                Our <span className="font-semibold">book-to-film adaptation services</span> give your work the opportunity
                                to reach new audiences through motion pictures, television, or streaming platforms. From
                                <span className="font-semibold"> screenplay development, pitch creation, and securing film rights</span>
                                to <span className="font-semibold">partnering with award-winning production teams</span>, we guide you
                                through every stage of the journey. Whether you envision a feature film, a binge-worthy series,
                                or a cinematic short, we ensure your story's essence resonates with viewers worldwide.
                            </p>

                            <a href="tel:+8505880888">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center space-x-2 font-medium transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base">
                                    <span>(850) 588-0888</span>
                                    <Phone className="h-4 w-4" />
                                </button>
                            </a>
                        </div>

                    </div>

                    {/* Bottom Section - Contact Form */}
                    <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                            {/* Left - Contact Info */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-orange-500 text-lg sm:text-xl font-medium">Need Assistance?</h3>
                                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                        Get in Touch with Us!
                                    </h4>
                                </div>

                                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                                    While we're good with smoke signals, there are simpler
                                    ways for us to get in touch and answer your questions.
                                </p>
                                <a href="tel:+8505880888">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg flex items-center space-x-2 font-medium transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base">
                                        <span>(850) 588-0888</span>
                                        <Phone className="h-4 w-4" />
                                    </button>
                                </a>
                            </div>

                            {/* Right - Contact Form */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="space-y-2">
                                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                                        <span className="text-orange-500">Contact</span> Us
                                    </h4>
                                    <h5 className="text-lg sm:text-xl font-semibold text-gray-800">
                                        Get Your Free Consultation
                                    </h5>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base"
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your book project"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none transition-colors text-sm sm:text-base"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center space-x-2 font-medium transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send</span>
                                                <MessageCircle className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer  */}
            <footer className="relative bg-gray-900 text-white overflow-hidden">
                {/* Background Image/Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90"></div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                        {/* Left Section - Company Info */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Logo */}
                            <div className="flex items-center">
                                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden bg-white shadow-md ring-2 ring-orange-100">
                                    <img
                                        src="/logo-2.png"
                                        alt="Palmbay Publishers Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="ml-4 text-2xl sm:text-3xl font-bold text-white">Palmbay Publishers</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                                We offer comprehensive publishing solutions to help you bring your
                                literary masterpiece to the world.
                            </p>

                            {/* Trustpilot Reviews */}
                            <div className="space-y-2 sm:space-y-3">
                                <div className="flex items-center space-x-2">
                                    <span className="text-teal-400 text-lg sm:text-xl">⭐</span>
                                    <span className="text-teal-400 font-bold text-sm sm:text-base lg:text-lg">Trustpilot</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-500 rounded flex items-center justify-center">
                                            <span className="text-white text-xs">★</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Contact Info */}
                        <div className="space-y-6 sm:space-y-8 lg:text-right">
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Contact Us</h3>

                                <div className="space-y-3 sm:space-y-4 text-gray-300">
                                    <a href="tel:+8505880888">
                                        <div className="text-lg sm:text-xl font-semibold text-white hover:text-orange-500 transition-colors">
                                            (850) 588-0888
                                        </div>
                                    </a>

                                    <a href="mailto:support@palmbaypublishers.com">
                                        <div className="text-sm sm:text-base lg:text-lg text-orange-400 hover:text-orange-300 transition-colors">
                                            support@palmbaypublishers.com
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section - Footer Links and Copyright */}
                    <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-700">
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                            {/* Copyright */}
                            <div className="text-gray-400 text-xs sm:text-sm text-center">
                                © 2025 Palmbay Publishers - All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
};
export default GlenfallHeroSection;