import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://farooqinfrastructures.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Privacy Policy",
      "item": "https://farooqinfrastructures.com/privacy-policy"
    }
  ]
};

export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 md:pb-32 max-w-[1600px] mx-auto px-8 md:px-16 overflow-hidden">
      <SEO 
        title="Privacy Policy"
        description="Farooq Advisors Privacy Policy details how we collect, protect, and process personal data for our consultation requests and educational programs."
        canonicalUrl="https://farooqinfrastructures.com/privacy-policy"
        schema={privacySchema}
      />
      <div className="mb-16">
        <Link 
          to="/" 
          className="inline-flex items-center uppercase font-medium tracking-[0.2em] text-[#1A1A1A] text-xs hover:text-[#D4AF37] transition-colors duration-500"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">Legal Framework</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] text-[#1A1A1A]">
            Privacy <br />
            <span className="italic text-[#D4AF37]">Policy</span>
          </h1>
          <p className="text-xs tracking-[0.2em] text-[#6C6863] pt-4 uppercase">Last Updated: June 2026</p>
        </div>

        <div className="text-base md:text-lg text-[#6C6863] leading-relaxed space-y-8 border-t border-[#1A1A1A]/10 pt-12">
          <p>
            <span className="float-left text-7xl font-serif leading-[0.8] mr-3 text-[#1A1A1A]">A</span>
            t Farooq Advisors, a division of Farooq Infrastructures Pvt Ltd, we value the trust you place in us. This Privacy Policy details how we collect, protect, use, and process your personal information when you visit our website, request consultations, or participate in our educational programs.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">1. Information Collection</h2>
            <p>
              We collect personal information that you voluntarily provide to us when requesting a consultation or contacting us. This information includes your full name, email address, telephone/WhatsApp number, area of interest, and any additional details you share. We may also collect technical browsing data to optimize performance and usability.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">2. Use of Information</h2>
            <p>
              The collected information is used strictly to process your consultation request, coordinate educational sessions, provide market insights, respond to inquiries, and ensure compliance with regulatory frameworks. Your details are never used for unsolicited marketing or sold to third parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">3. Data Security and Sharing</h2>
            <p>
              We implement industry-standard physical and electronic security protocols to safeguard your personal data. Your information is shared only within Farooq Infrastructures Pvt Ltd and its authorized advisors. We do not disclose client details to third parties unless required by legal authorities or explicitly consented to by you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">4. Client Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, please contact us directly at farooqinfrastructures@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
