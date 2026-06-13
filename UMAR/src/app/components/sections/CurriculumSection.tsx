import { EditorialImage } from "../EditorialImage";
import { motion } from "motion/react";

const curriculumTopics = [
  "How Markets Work",
  "Candlestick Patterns",
  "Chart Reading",
  "Technical Indicators",
  "Support & Resistance",
  "Trading Psychology",
  "Risk Management",
  "Portfolio Building"
];

export function CurriculumSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6] border-t border-[#1A1A1A]/20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 lg:col-start-2 lg:col-span-10 grid-cols-1 md:grid-cols-12 grid">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-start-2"
          >
            <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863] block mb-4">The Curriculum</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] text-[#1A1A1A]">
              The <span className="italic text-[#D4AF37]">Journey</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 text-[#6C6863] text-base leading-relaxed"
          >
            A structured, uncompromising progression from foundational mechanics to advanced portfolio architecture. Designed for those who demand mastery.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5 lg:col-start-2 relative hidden md:block">
             <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <EditorialImage
                    src="https://images.unsplash.com/photo-1656861593651-f2a2002dcce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGx1eHVyeSUyMGZpbmFuY2V8ZW58MXx8fHwxNzgxMDEzODE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Abstract luxury finance candlestick and chart elements"
                    aspectRatio="4/5"
                    loading="lazy"
                    fetchPriority="low"
                    className="w-full shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                  />
                </motion.div>
             </div>
          </div>

          <div className="md:col-span-7 lg:col-span-5 lg:col-start-8">
            <div className="relative border-l border-[#1A1A1A]/20 pb-8 pl-8 md:pl-12 ml-4 md:ml-0">
              {curriculumTopics.map((topic, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mb-16 last:mb-0 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] md:-left-[49px] top-2 w-2 h-2 bg-[#1A1A1A] rounded-none transition-colors duration-500 group-hover:bg-[#D4AF37]"></div>
                  
                  <span className="uppercase text-[10px] tracking-[0.2em] text-[#6C6863] block mb-2 transition-colors duration-500 group-hover:text-[#D4AF37]">
                    Module / {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] leading-tight">
                    {topic}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
