import React from 'react';
import Navbar from '@/app/Components/Navbar'
import Footer  from '../Components/Footer';

const PrivacyPolicy = () => {
  return (
      <div className="min-h-screen bg-white">
        <Navbar />
      {/* Header Section */}
      <div className="bg-[#1A2539] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Privacy Policy</h1>
          {/* <p className="text-xl text-center mt-4 text-gray-300">
            Last updated: August 29, 2025
          </p> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Palm Bay Publishing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-[#1A2539] mb-3">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Contact us through our website, email, or phone</li>
              <li>Request our publishing services</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Fill out forms on our website</li>
              <li>Engage with us on social media platforms</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Name and contact information (email, phone, address)</li>
              <li>Manuscript content and related materials</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-medium text-[#1A2539] mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Providing and maintaining our publishing services</li>
              <li>Communicating with you about your projects and our services</li>
              <li>Processing payments and managing accounts</li>
              <li>Improving our website and services</li>
              <li>Sending you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Complying with legal obligations</li>
              <li>Protecting our rights and preventing fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing our services</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We regularly review and update our security practices to ensure the ongoing protection of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and gather information about how you use our site. You can control cookie preferences through your browser settings, but disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>The right to access, update, or delete your personal information</li>
              <li>The right to restrict or object to certain processing activities</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent where processing is based on consent</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1A2539] mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Palm Bay Publishing</strong></p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+850-588-0888" className="text-blue-600 hover:underline">(850) 588-0888</a></p>
              <p className="text-gray-700">Website: <a href="/" className="text-blue-600 hover:underline">www.palmbaypublishing.com</a></p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 text-center">
              This Privacy Policy is effective as of the date listed above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
            </p>
          </div>
        </div>
      </div>
            <Footer />
    </div>
  );
};

export default PrivacyPolicy;