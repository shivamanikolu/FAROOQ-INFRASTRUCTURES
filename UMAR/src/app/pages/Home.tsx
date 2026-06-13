import React from "react";
import { SEO } from "../components/SEO";
import { HeroSection } from "../components/sections/HeroSection";
import { FounderSection } from "../components/sections/FounderSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { CurriculumSection } from "../components/sections/CurriculumSection";
import { StatsSection } from "../components/sections/StatsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { TeamSection } from "../components/sections/TeamSection";
import { ContactSection } from "../components/sections/ContactSection";

export function Home() {
  return (
    <>
      <SEO 
        title="Premium Financial Education & Stock Consultation"
        description="Farooq Advisors (Farooq Infrastructures Pvt Ltd) offers premium 1-on-1 stock market consultation, technical analysis coaching, and real-world market insights in Piduguralla."
        canonicalUrl="https://farooqinfrastructures.com"
        ogType="website"
      />
      <HeroSection />
      <FounderSection />
      <AboutSection />
      <ServicesSection />
      <CurriculumSection />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
