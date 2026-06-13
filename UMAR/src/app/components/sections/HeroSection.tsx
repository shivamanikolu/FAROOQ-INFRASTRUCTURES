import { Button } from "../Button";
import { EditorialImage } from "../EditorialImage";
import { motion } from "motion/react";

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

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-24 md:pb-32 pt-32 max-w-[1600px] mx-auto px-8 md:px-16 overflow-hidden">
      {/* Decorative side label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="[writing-mode:vertical-rl] uppercase text-xs tracking-[0.3em] text-[#6C6863]">
          Farooq Advisors / Vol. 01
        </span>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-end">
        
        {/* Left Content */}
        <motion.div 
          variants={stagger}
          initial="initial"
          animate="animate"
          className="md:col-span-12 lg:col-span-7 lg:col-start-2 flex flex-col items-start space-y-12 z-10"
        >
          <motion.div variants={fadeIn} className="flex items-center space-x-4">
            <div className="h-px w-8 md:w-12 bg-[#1A1A1A]"></div>
            <span className="uppercase text-xs tracking-[0.3em] text-[#1A1A1A] font-medium">
              Premium Financial Education
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[0.9] tracking-tight text-[#1A1A1A]"
          >
            Master <br />
            The <span className="italic text-[#D4AF37]">Markets</span> <br />
            With Precision
          </motion.h1>
          
          <motion.p variants={fadeIn} className="max-w-md text-base md:text-lg text-[#6C6863] leading-relaxed">
            Exclusive 1-on-1 stock consultation, rigorous technical analysis coaching, and real-world market insights tailored for serious participants.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Button variant="primary" onClick={() => scrollToSection("contact")} aria-label="Start Your Journey (Scrolls to Consultation Form)">Start Your Journey</Button>
            <Button variant="link" onClick={() => scrollToSection("services")} aria-label="Explore Services (Scrolls to Services Section)">Explore Services</Button>
          </motion.div>
        </motion.div>

        {/* Right Content / Image */}
        <motion.div 
          initial={{ opacity: 0, clipPath: 'inset(10% 0 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="md:col-span-8 md:col-start-3 lg:col-span-4 lg:col-start-9 w-full"
        >
          <EditorialImage
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHN0b2NrJTIwY2hhcnQlMjBtaW5pbWFsaXN0aWN8ZW58MXx8fHwxNzgxMDcwOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional financial trading candlestick chart"
            aspectRatio="3/4"
            loading="eager"
            fetchPriority="high"
            className="shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full max-w-[400px] md:max-w-full lg:max-w-[400px] mx-auto lg:ml-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
