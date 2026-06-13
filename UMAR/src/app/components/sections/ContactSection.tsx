import React, { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { toast } from "sonner";
import {
  sanitizeInput,
  validateName,
  validateEmail,
  validatePhone,
  validateInterest,
  checkRateLimit
} from "../../../lib/security";

export function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState(""); // Honeypot spam protection

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check (bot submission prevention)
    if (websiteUrl) {
      console.warn("Spam submission detected and blocked.");
      return;
    }

    // 2. Client-side input sanitization
    const cleanName = sanitizeInput(fullName);
    const cleanEmail = sanitizeInput(email);
    const cleanPhone = sanitizeInput(phone);
    const cleanAdditional = sanitizeInput(additionalInfo);

    // Update state to show sanitized data in UI
    setFullName(cleanName);
    setEmail(cleanEmail);
    setPhone(cleanPhone);
    setAdditionalInfo(cleanAdditional);

    // 3. Client-side validation checks
    if (!validateName(cleanName)) {
      toast.error("Please enter a valid full name (letters and spaces only, 2-50 characters).");
      return;
    }

    if (!validateEmail(cleanEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(cleanPhone)) {
      toast.error("Please enter a valid phone or WhatsApp number (8-20 digits/symbols).");
      return;
    }

    if (!validateInterest(areaOfInterest)) {
      toast.error("Please select a valid area of interest.");
      return;
    }

    // 4. Client-side rate limit check (max 3 submissions per 5 minutes)
    if (!checkRateLimit("contact_form_submissions", 3, 300000)) {
      toast.error("You have made too many requests. Please wait 5 minutes before trying again.");
      return;
    }

    // Generate structured WhatsApp message
    const formattedMessage = `Farooq Advisors Consultation Request:
*Full Name:* ${cleanName}
*Email Address:* ${cleanEmail}
*Phone/WhatsApp:* ${cleanPhone}
*Area of Interest:* ${areaOfInterest}
*Additional Information:* ${cleanAdditional || "N/A"}`;

    const whatsappUrl = `https://wa.me/919440319848?text=${encodeURIComponent(formattedMessage)}`;
    
    // Hardened window.open using noopener,noreferrer to prevent tab-nabbing
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Request initiated! Redirecting to WhatsApp...");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#1A1A1A] text-[#F9F8F6] relative border-t border-[#F9F8F6]/10">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <svg className="w-full h-full">
          <filter id="noiseFilterContact">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterContact)" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="md:col-span-12 lg:col-span-5 lg:col-start-2 space-y-12">
            <div className="space-y-4">
              <span className="uppercase text-xs tracking-[0.3em] text-[#EBE5DE] opacity-80">Consultation</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9]">
                Initiate <br />
                <span className="italic text-[#D4AF37]">Dialogue</span>
              </h2>
              <p className="text-[#EBE5DE] opacity-80 text-base max-w-sm pt-4">
                Secure your private consultation to discuss tailored market strategies and educational paths.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-[#EBE5DE]/20">
              <div>
                <span className="block uppercase text-[10px] tracking-[0.2em] text-[#EBE5DE] opacity-60 mb-2">Direct Inquiry</span>
                <a href="mailto:farooqinfrastructures@gmail.com" aria-label="Send email to farooqinfrastructures@gmail.com" className="block text-lg hover:text-[#D4AF37] transition-colors duration-500">farooqinfrastructures@gmail.com</a>
                <a href="mailto:shaikumarfarooq5541@gmail.com" aria-label="Send email to shaikumarfarooq5541@gmail.com" className="block text-lg hover:text-[#D4AF37] transition-colors duration-500">shaikumarfarooq5541@gmail.com</a>
              </div>
              <div>
                <span className="block uppercase text-[10px] tracking-[0.2em] text-[#EBE5DE] opacity-60 mb-2">WhatsApp</span>
                <a href="tel:+919440319848" aria-label="Call direct line or WhatsApp +91 94403 19848" className="block text-lg hover:text-[#D4AF37] transition-colors duration-500">+91 94403 19848</a>
              </div>
              <div>
                <span className="block uppercase text-[10px] tracking-[0.2em] text-[#EBE5DE] opacity-60 mb-2">Social</span>
                <div className="flex gap-6">
                  <a href="https://instagram.com/farooq.livee" target="_blank" rel="noopener noreferrer" aria-label="Visit Umar Farooq Shaik Instagram profile @farooq.livee" className="text-lg hover:text-[#D4AF37] transition-colors duration-500">@farooq.livee</a>
                  <a href="https://instagram.com/farooq.infrastructures" target="_blank" rel="noopener noreferrer" aria-label="Visit Farooq Infrastructures Instagram page @farooq.infrastructures" className="text-lg hover:text-[#D4AF37] transition-colors duration-500">@farooq.infrastructures</a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="bg-[#F9F8F6] text-[#1A1A1A] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
              <h3 className="text-2xl font-serif mb-8">Request Consultation</h3>
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Honeypot field (hidden from screen readers and visual users) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website_url">Do not fill this field if you are a human</label>
                  <input
                    type="text"
                    id="website_url"
                    name="website_url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="fullName" className="sr-only">Full Name</label>
                  <Input 
                    id="fullName"
                    placeholder="Full Name" 
                    className="border-[#1A1A1A]/20" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    aria-label="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Email Address" 
                    className="border-[#1A1A1A]/20" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone / WhatsApp Number</label>
                  <Input 
                    id="phone"
                    type="tel" 
                    placeholder="Phone / WhatsApp" 
                    className="border-[#1A1A1A]/20" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    aria-label="Phone / WhatsApp Number"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="sr-only">Select Area of Interest</label>
                  <select 
                    id="interest"
                    aria-label="Select Area of Interest"
                    className="flex h-12 w-full bg-transparent border-b border-[#1A1A1A]/20 px-0 py-2 text-sm text-[#1A1A1A]/80 transition-colors duration-500 focus-visible:outline-none focus-visible:border-[#D4AF37] font-sans"
                    value={areaOfInterest}
                    onChange={(e) => setAreaOfInterest(e.target.value)}
                    required
                  >
                    <option value="" disabled className="bg-[#F9F8F6] text-[#6C6863] italic">Select Area of Interest</option>
                    <option value="1-on-1 Stock Consultation" className="bg-[#F9F8F6] text-[#1A1A1A]">1-on-1 Stock Consultation</option>
                    <option value="Stock Market Education" className="bg-[#F9F8F6] text-[#1A1A1A]">Stock Market Education</option>
                    <option value="Technical Analysis Coaching" className="bg-[#F9F8F6] text-[#1A1A1A]">Technical Analysis Coaching</option>
                    <option value="Risk Management" className="bg-[#F9F8F6] text-[#1A1A1A]">Risk Management</option>
                    <option value="Fundamental Analysis" className="bg-[#F9F8F6] text-[#1A1A1A]">Fundamental Analysis</option>
                    <option value="Free Market Insights" className="bg-[#F9F8F6] text-[#1A1A1A]">Free Market Insights</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="additionalInfo" className="sr-only">Additional Information (Optional)</label>
                  <Input 
                    id="additionalInfo"
                    placeholder="Additional Information (Optional)" 
                    className="border-[#1A1A1A]/20" 
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    aria-label="Additional Information (Optional)"
                  />
                </div>
                <div className="pt-4">
                  <Button variant="primary" type="submit" className="w-full" aria-label="Submit Consultation Request Form">Submit Request</Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
