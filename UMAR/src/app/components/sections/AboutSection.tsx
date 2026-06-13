import { EditorialImage } from "../EditorialImage";
import { motion } from "motion/react";
import companyLogo from "./companylogo.jpeg";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] text-[#F9F8F6] relative overflow-hidden">
      {/* Dark noise overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <svg className="w-full h-full">
          <filter id="noiseFilterDark">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterDark)" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 lg:col-span-5 lg:col-start-2 space-y-12"
          >
            <div className="space-y-4">
              <span className="uppercase text-xs tracking-[0.3em] text-[#EBE5DE] opacity-80">The Company</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9]">
                Farooq <br />
                <span className="italic text-[#D4AF37]">Infrastructures</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-[#EBE5DE] opacity-80 leading-relaxed max-w-lg">
              <p>
                Farooq Advisors operates as the educational and advisory arm of Farooq Infrastructures Pvt Ltd. Based in Piduguralla, Palnadu District, our mission is to provide institutional-grade market education and profound strategic insights to discerning individuals.
              </p>
              <p>
                Built on a foundation of trust, excellence, and practical application, we bridge the gap between complex market theory and actionable intelligence.
              </p>
            </div>

            <div className="flex flex-col space-y-2 pt-8 border-t border-[#EBE5DE]/20">
              <span className="uppercase text-xs tracking-[0.3em] text-[#EBE5DE] opacity-60">Credentials</span>
              <span className="text-sm tracking-widest">REO VIJAYAWADA</span>
              <span className="text-sm tracking-widest">CIN: 98081607HK96</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-8"
          >
             <EditorialImage
                src={companyLogo}
                alt="Farooq Advisors Company Logo"
                aspectRatio="square"
                objectFit="contain"
                loading="lazy"
                fetchPriority="low"
                className="w-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] opacity-90"
              />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

