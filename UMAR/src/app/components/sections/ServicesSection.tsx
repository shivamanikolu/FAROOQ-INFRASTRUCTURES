import { Button } from "../Button";
import { motion } from "motion/react";

const services = [
  "1-on-1 Stock Consultation",
  "Stock Market Education",
  "Technical Analysis Coaching",
  "Risk Management",
  "Fundamental Analysis",
  "Free Market Insights"
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 max-w-[1600px] mx-auto px-8 md:px-16 border-t border-[#1A1A1A]/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-12 lg:col-span-4 lg:col-start-2"
        >
          <div className="sticky top-32 space-y-8">
            <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] text-[#1A1A1A]">
              Curated <br />
              <span className="italic text-[#D4AF37]">Excellence</span>
            </h2>
            <p className="text-base text-[#6C6863] leading-relaxed max-w-sm">
              We offer bespoke advisory and educational services designed to elevate your market understanding and strategic execution.
            </p>
            <div className="pt-4">
               <Button variant="secondary" onClick={scrollToContact} aria-label="Book Consultation (Scrolls to Consultation Form)">Book Consultation</Button>
            </div>
          </div>
        </motion.div>

        {/* Services List */}
        <div className="md:col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col mt-8 lg:mt-0">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-[#1A1A1A]/20 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between transition-colors duration-700 hover:bg-[#F9F8F6]/50 relative"
            >
              <div className="absolute inset-0 bg-[#EBE5DE]/20 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 z-0"></div>
              
              <div className="relative z-10 flex items-start space-x-6">
                <span className="font-serif italic text-lg text-[#6C6863] group-hover:text-[#D4AF37] transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] group-hover:translate-x-2 transition-transform duration-500">
                  {service}
                </h3>
              </div>
              
              <div className="relative z-10 mt-6 md:mt-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                <div className="w-12 h-px bg-[#D4AF37]"></div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1A1A1A]/20"></div>
        </div>

      </div>
    </section>
  );
}
