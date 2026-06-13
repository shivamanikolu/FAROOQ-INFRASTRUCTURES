import React from "react";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

const termsSchema = {
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
      "name": "Terms of Service",
      "item": "https://farooqinfrastructures.com/terms-of-service"
    }
  ]
};

export function TermsOfService() {
  return (
    <div className="pt-32 pb-24 md:pb-32 max-w-[1600px] mx-auto px-8 md:px-16 overflow-hidden">
      <SEO 
        title="Terms of Service"
        description="Farooq Advisors Terms of Service and guidelines for stock market consultations and professional-grade technical analysis coaching programs."
        canonicalUrl="https://farooqinfrastructures.com/terms-of-service"
        schema={termsSchema}
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
            Terms <br />
            <span className="italic text-[#D4AF37]">Of Service</span>
          </h1>
          <p className="text-xs tracking-[0.2em] text-[#6C6863] pt-4 uppercase">Last Updated: June 2026</p>
        </div>

        <div className="text-base md:text-lg text-[#6C6863] leading-relaxed space-y-8 border-t border-[#1A1A1A]/10 pt-12">
          <p>
            <span className="float-left text-7xl font-serif leading-[0.8] mr-3 text-[#1A1A1A]">P</span>
            lease read these Terms of Service carefully before accessing our website or enrolling in any of our consultation or educational programs. By engaging with Farooq Advisors, you agree to comply with and be bound by the following terms.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">1. Scope of Services</h2>
            <p>
              Farooq Advisors, a division of Farooq Infrastructures Pvt Ltd, provides premium financial education, technical analysis coaching, 1-on-1 stock market consultations, and market insights.
            </p>
          </div>

          <div className="space-y-4 bg-[#EBE5DE]/30 p-6 border-l-4 border-[#D4AF37]">
            <h2 className="text-2xl font-serif text-[#1A1A1A]">2. STRICT DISCLOSURE: NO FINANCIAL ADVICE</h2>
            <p className="text-sm font-medium text-[#1A1A1A] leading-relaxed">
              All information, materials, and consultation sessions provided by Farooq Advisors are strictly for educational and training purposes. Farooq Advisors is NOT a registered investment advisor (RIA), portfolio manager, or broker-dealer. We do not provide buy/sell signals, stock recommendations, or financial planning advice. You assume full responsibility for any trading or investment decisions you make.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">3. Intellectual Property</h2>
            <p>
              All curriculum material, charts, slides, methodologies, and text content developed by Farooq Advisors are protected by copyright laws. They are intended for your private, non-commercial use only. Unauthorized distribution, copying, or resale of these materials is strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">4. Limitation of Liability</h2>
            <p>
              Trading financial markets involves high risk. Under no circumstances shall Farooq Advisors or Farooq Infrastructures Pvt Ltd be held liable for any financial losses, damages, or emotional distress resulting from your participation in our programs or your application of our educational content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
