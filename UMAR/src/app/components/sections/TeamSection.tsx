import { motion } from "motion/react";

const team = [
  {
    name: "Umar Farooq Shaik",
    role: "Founder & CEO",
    expertise: "Stock Market Advisor & Educator"
  },
  {
    name: "Ch. Hasini",
    role: "Market Research Analyst",
    expertise: null
  },
  {
    name: "P. Surya Goud",
    role: "Technical Analyst",
    expertise: null
  },
  {
    name: "M. Anshuman",
    role: "Education Coordinator",
    expertise: null
  },
  {
    name: "P. Hema",
    role: "Risk Management Lead",
    expertise: null
  },
  {
    name: "R. Jashwanth",
    role: "Fundamental Analyst",
    expertise: null
  },
  {
    name: "N. Sai Sidharth",
    role: "Client Relations",
    expertise: null
  },
  {
    name: "Shaik Muzif",
    role: "Site Operator",
    expertise: null
  }
];

export function TeamSection() {
  return (
    <section className="py-24 md:py-32 max-w-[1600px] mx-auto px-8 md:px-16 border-t border-[#1A1A1A]/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-12 lg:col-span-4 lg:col-start-2"
        >
          <div className="sticky top-32 space-y-4">
            <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">The Collective</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] text-[#1A1A1A]">
              Our <span className="italic text-[#D4AF37]">Experts</span>
            </h2>
          </div>
        </motion.div>

        <div className="md:col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="flex flex-col">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group border-t border-[#1A1A1A]/20 py-8 md:py-10 flex flex-col sm:flex-row sm:items-baseline justify-between transition-colors duration-700 hover:bg-[#F9F8F6]/50 relative"
              >
                <div className="absolute inset-0 bg-[#EBE5DE]/20 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 z-0"></div>
                
                <div className="relative z-10 flex flex-col space-y-1 sm:w-1/2">
                  <h3 className="text-xl md:text-2xl font-serif text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500">
                    {member.name}
                  </h3>
                  <span className="uppercase text-[10px] tracking-[0.2em] text-[#6C6863]">
                    {member.role}
                  </span>
                </div>
                
                <div className="relative z-10 mt-4 sm:mt-0 sm:w-1/2 sm:text-right">
                  {member.expertise && (
                    <span className="text-sm font-serif italic text-[#1A1A1A]/80">
                      {member.expertise}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
            <div className="border-t border-[#1A1A1A]/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
