import { Button } from "../Button";
import { EditorialImage } from "../EditorialImage";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import founderImage from "./founderimage.png";

export function FounderSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 max-w-[1600px] mx-auto px-8 md:px-16 border-t border-[#1A1A1A]/20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Founder Image */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-2 relative order-2 lg:order-1 mt-12 lg:mt-0"
        >
          <EditorialImage
            src={founderImage}
            alt="Umar Farooq Shaik - Founder Portrait"
            aspectRatio="3/4"
            loading="lazy"
            fetchPriority="low"
            className="w-full shadow-[0_4px_24px_rgba(0,0,0,0.08)] object-cover"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -bottom-8 -right-4 md:-right-16 hidden sm:block bg-[#F9F8F6] p-6 md:p-8 border border-[#1A1A1A]/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] z-20 max-w-[280px] md:max-w-xs"
          >
            <p className="font-serif italic text-xl md:text-2xl leading-tight text-[#1A1A1A]">
              "Education without real-world application is merely theory. We build confident market participants."
            </p>
          </motion.div>
        </motion.div>

        {/* Founder Story */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="md:col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center space-y-8 md:space-y-12 order-1 lg:order-2"
        >
          <div className="space-y-4">
            <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">The Founder</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] text-[#1A1A1A]">
              Umar Farooq <span className="italic text-[#D4AF37]">Shaik</span>
            </h2>
            <p className="text-sm tracking-[0.2em] uppercase text-[#1A1A1A] pt-4">Stock Market Advisor & Educator</p>
          </div>

          <div className="text-base md:text-lg text-[#6C6863] leading-relaxed space-y-6 max-w-xl">
            <p>
              <span className="float-left text-7xl font-serif leading-[0.8] mr-3 text-[#1A1A1A]">A</span>
              s the visionary behind Farooq Infrastructures Pvt Ltd, Umar Farooq Shaik has redefined financial education. Driven by a mission to demystify the markets, he focuses on profound, practical learning over superficial theory.
            </p>
            <p>
              With a philosophy rooted in rigorous risk management and uncompromising transparency, Umar's approach empowers individuals to navigate complex market dynamics with unwavering confidence and clarity.
            </p>
          </div>

          <div>
            <Button variant="secondary" onClick={() => navigate("/founder-story")} aria-label="Read Full Story of Founder Umar Farooq Shaik">Read Full Story</Button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
