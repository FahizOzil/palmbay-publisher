import React from 'react';
import Navbar  from '../Components/Navbar';
import Footer from '../Components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar/>   
      {/* Header Section */}
      <div className="bg-[#1A2539] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Terms & Conditions</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Palm Bay Publishing. These Terms and Conditions ("Terms") govern your use of our website, services, and any related content provided by Palm Bay Publishing ("we," "our," "us," or "Company"). By accessing our website or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree with any part of these Terms, please do not use our website or services. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Services Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Palm Bay Publishing provides professional book writing, editing, publishing, and related services ("Services"). Our services may include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Book writing and ghostwriting services</li>
              <li>Manuscript editing and proofreading</li>
              <li>Book cover design and formatting</li>
              <li>Publishing consultation and guidance</li>
              <li>Marketing and promotional services</li>
              <li>Distribution assistance</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Specific service details, timelines, and deliverables will be outlined in individual service agreements or contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">User Eligibility and Account Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Be at least 18 years of age or have parental/guardian consent</li>
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Be responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-medium text-[#1A2539] mb-3">Client Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of all intellectual property rights in the content you provide to us, including manuscripts, ideas, concepts, and materials ("Client Content"). However, by engaging our services, you grant us:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>A limited, non-exclusive license to use your content solely for providing our services</li>
              <li>The right to create derivative works as necessary to complete your project</li>
              <li>Permission to use your work as a portfolio example (with your consent)</li>
            </ul>

            <h3 className="text-xl font-medium text-[#1A2539] mb-3">Our Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our website, including text, graphics, logos, designs, and software, is owned by Palm Bay Publishing and protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h3 className="text-xl font-medium text-[#1A2539] mb-3">Work Product</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon full payment of fees, you will own the rights to the completed work product as specified in your service agreement. Until full payment is received, Palm Bay Publishing retains all rights to work product and deliverables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Payment Terms and Refund Policy</h2>
            
            <h3 className="text-xl font-medium text-[#1A2539] mb-3">Payment</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Payment terms will be specified in individual service agreements</li>
              <li>We accept various payment methods as indicated during the booking process</li>
              <li>Late payments may result in service suspension and additional fees</li>
              <li>All prices are subject to change with proper notice</li>
            </ul>

            <h3 className="text-xl font-medium text-[#1A2539] mb-3">Refunds</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refund eligibility depends on the specific service and circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Refunds may be available before work commences on your project</li>
              <li>Once work has begun, refunds will be prorated based on completed work</li>
              <li>Refund requests must be submitted in writing</li>
              <li>Processing time for approved refunds is typically 7-14 business days</li>
              <li>Specific refund terms will be outlined in your service agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Client Responsibilities and Obligations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As our client, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Provide all necessary materials, information, and feedback in a timely manner</li>
              <li>Ensure all content provided is original or properly licensed</li>
              <li>Respond to requests for clarification or approval within agreed timeframes</li>
              <li>Make payments according to the agreed schedule</li>
              <li>Not engage in any conduct that interferes with our ability to provide services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We understand the sensitive nature of your creative work and maintain strict confidentiality:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>All client information and project details are kept confidential</li>
              <li>We do not share your work with third parties without your consent</li>
              <li>Our team members sign confidentiality agreements</li>
              <li>Confidentiality obligations survive termination of our relationship</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Service Limitations and Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to provide excellent service, please understand:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>We cannot guarantee specific sales figures, rankings, or commercial success</li>
              <li>Publishing and marketing results depend on many factors beyond our control</li>
              <li>Timeline estimates are based on typical scenarios and may vary</li>
              <li>We reserve the right to refuse service for any reason</li>
              <li>Services are provided "as is" without warranties beyond those required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Our total liability for any claims shall not exceed the amount paid for services</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We are not responsible for third-party actions or services</li>
              <li>Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate services under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>By mutual agreement at any time</li>
              <li>For material breach of these Terms after written notice and opportunity to cure</li>
              <li>For non-payment of fees</li>
              <li>If continuation of services becomes impractical or impossible</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, all outstanding fees become due immediately, and we will provide completed work product upon full payment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of disputes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>We encourage direct communication to resolve issues amicably</li>
              <li>If necessary, disputes will be resolved through binding arbitration</li>
              <li>These Terms are governed by the laws of Florida, United States</li>
              <li>Any legal proceedings must be brought in the appropriate courts of Florida</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Independent Contractor Relationship</h2>
            <p className="text-gray-700 leading-relaxed">
              Palm Bay Publishing operates as an independent contractor. We are not employees, agents, or partners of our clients, and no such relationship is created by these Terms or the provision of services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for delays or failures in performance caused by circumstances beyond our reasonable control, including natural disasters, government actions, internet outages, or other unforeseeable events.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Severability and Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect. These Terms, along with any executed service agreements, constitute the entire agreement between parties and supersede all prior understandings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms & Conditions or our services, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Palm Bay Publishing</strong></p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+850-588-0888" className="text-blue-600 hover:underline">(850) 588-0888</a></p>
              <p className="text-gray-700">Website: <a href="/" className="text-blue-600 hover:underline">www.palmbaypublishing.com</a></p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 text-center">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. These Terms are effective as of the date listed above and will remain in effect until modified or terminated in accordance with the provisions herein.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsConditions;