import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { EditorialImage } from "../components/EditorialImage";
import { SEO } from "../components/SEO";

const founderSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://farooqinfrastructures.com/founder-story#breadcrumb",
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
          "name": "Founder Story",
          "item": "https://farooqinfrastructures.com/founder-story"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://farooqinfrastructures.com/#founder",
      "name": "Umar Farooq Shaik",
      "jobTitle": "Founder & Visionary",
      "worksFor": {
        "@type": "Organization",
        "name": "Farooq Infrastructures Pvt Ltd"
      },
      "description": "Umar Farooq Shaik has dedicated his career to dismantling the complexity of stock market participation through structured technical analysis coaching and risk management mentorship.",
      "sameAs": [
        "https://instagram.com/farooq.livee"
      ]
    }
  ]
};

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function FounderStory() {
  return (
    <div className="pt-32 pb-24 md:pb-32 max-w-[1600px] mx-auto px-8 md:px-16 overflow-hidden">
      <SEO 
        title="Umar Farooq Shaik - Founder's Story & Biography"
        description="Discover the journey of Umar Farooq Shaik, founder of Farooq Advisors, from a retail participant to a professional technical analysis mentor and stock market advisor."
        canonicalUrl="https://farooqinfrastructures.com/founder-story"
        ogType="profile"
        schema={founderSchema}
      />
      {/* Decorative vertical label */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 hidden lg:block z-0 pointer-events-none">
        <span className="[writing-mode:vertical-rl] uppercase text-xs tracking-[0.3em] text-[#6C6863]/40">
          Umar Farooq Shaik / Biography
        </span>
      </div>

      {/* Back to Home Navigation */}
      <div className="mb-16">
        <Link 
          to="/" 
          className="inline-flex items-center uppercase font-medium tracking-[0.2em] text-[#1A1A1A] text-xs hover:text-[#D4AF37] transition-colors duration-500"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left column: Bio & Key stats */}
        <motion.div 
          variants={stagger}
          initial="initial"
          animate="animate"
          className="lg:col-span-6 space-y-16 z-10"
        >
          <div className="space-y-4">
            <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">The Biography</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[0.9] text-[#1A1A1A]">
              Founder <br />
              &amp; <span className="italic text-[#D4AF37]">Visionary</span>
            </h1>
            <p className="text-sm tracking-[0.2em] uppercase text-[#1A1A1A] pt-4 font-medium">Umar Farooq Shaik</p>
          </div>

          <div className="text-base md:text-lg text-[#6C6863] leading-relaxed space-y-6">
            <p>
              <span className="float-left text-7xl font-serif leading-[0.8] mr-3 text-[#1A1A1A]">A</span>
              s the founder and driving force behind Farooq Advisors, Umar Farooq Shaik has dedicated his career to dismantling the complexity of stock market participation. Under his leadership, the firm has emerged as a premier destination for serious traders and long-term investors seeking absolute clarity in a noise-filled environment.
            </p>
            <p>
              With a background firmly rooted in entrepreneurship and engineering, Umar brings a unique, systematic methodology to market analysis. He believes that trading is not a game of chance, but a discipline of statistics, probability, and human psychology.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#1A1A1A]/10">
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-[#1A1A1A]">Our Vision</h3>
              <p className="text-sm text-[#6C6863] leading-relaxed">
                To create a generation of self-sufficient, disciplined, and psychologically resilient market practitioners who operate with complete independence.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-[#1A1A1A]">Our Mission</h3>
              <p className="text-sm text-[#6C6863] leading-relaxed">
                To bridge the massive gap between retail trading and professional-grade technical and fundamental execution through intensive, 1-on-1 mentorship.
              </p>
            </div>
          </div>
        </motion.div>        {/* Right column: Journey details */}
        <div className="lg:col-span-5 lg:col-start-8 space-y-12">
          <div className="space-y-4">
            <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">The Journey</span>
            <h2 className="text-3xl font-serif text-[#1A1A1A] leading-tight">
              From Participant to <span className="italic text-[#D4AF37]">Mentor</span>
            </h2>
            <p className="text-sm text-[#6C6863] leading-relaxed">
              Umar's market journey began in the trenches of retail trading. Experiencing firsthand the pitfalls of signal-chasing and unstructured learning, he dedicated years to mastering price action theory, market mechanics, and advanced technical charting. Today, his focus is entirely on imparting these hard-won insights to his students.
            </p>
          </div>

          <div className="space-y-4">
            <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">Company Background</span>
            <h2 className="text-3xl font-serif text-[#1A1A1A] leading-tight">
              Farooq <span className="italic text-[#D4AF37]">Infrastructures</span>
            </h2>
            <p className="text-sm text-[#6C6863] leading-relaxed">
              Operating under the parent organization, Farooq Infrastructures Pvt Ltd, our educational programs bring institutional structure to individual traders. Located in Piduguralla, Palnadu District, we operate with maximum transparency, strict risk control frameworks, and corporate integrity.
            </p>
          </div>

          <div className="space-y-4">
            <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">Educational Philosophy</span>
            <h2 className="text-3xl font-serif text-[#1A1A1A] leading-tight">
              Uncompromising <span className="italic text-[#D4AF37]">Discipline</span>
            </h2>
            <p className="text-sm text-[#6C6863] leading-relaxed">
              We believe that education must be practical. Our curriculum does not offer shortcuts or magical indicators. Instead, we teach our students how to build statistical edges, manage capital dynamically, and develop the mental fortitude required for long-term consistency.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
