import { Star } from "lucide-react";
import { cn } from "../../../lib/utils";

const testimonials = [
  {
    quote: "The depth of technical analysis coaching is unprecedented. Umar Farooq doesn't just teach theory; he instills market intuition.",
    author: "K. Reddy",
    role: "Independent Trader"
  },
  {
    quote: "Exceptional clarity and rigorous risk management frameworks. This education transformed my approach from gambling to strategic positioning.",
    author: "M. Sharma",
    role: "Portfolio Manager"
  },
  {
    quote: "Umar sir ki coaching sach mein kamaal ki hai. Risk management aur trading psychology ko itne simple tareeqe se samjhana har kisi ke bas ki baat nahi. Ab main confident hoon.",
    author: "A. Khan",
    role: "Retail Trader"
  },
  {
    quote: "Naku technical analysis gurinchi emi teliyadu. Kani Umar garu prathi okka vishayanni chala depth ga chala baga nerpincharu. Risk management concepts chala realistic ga unnay.",
    author: "V. Prasad",
    role: "Active Investor"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6] border-t border-[#1A1A1A]/20">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="md:col-span-12 lg:col-span-4 lg:col-start-2">
             <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863] block mb-4">Client Feedback</span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] text-[#1A1A1A]">
               The <span className="italic text-[#D4AF37]">Impact</span>
             </h2>
          </div>

          <div className="md:col-span-12 lg:col-span-6 lg:col-start-7 space-y-16">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="group relative border-l border-[#1A1A1A]/20 pl-6 md:pl-8 py-2 hover:border-[#D4AF37] hover:pl-8 md:hover:pl-10 transition-all duration-700 ease-out"
              >
                <div className="mb-6">
                  <span className="sr-only">Rated 5 out of 5 stars</span>
                  <div className="flex gap-1" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-3 h-3 text-[#1A1A1A] group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500 fill-current" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                
                <div>
                  <span className="block uppercase text-xs tracking-[0.2em] font-medium text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500">
                    {t.author}
                  </span>
                  <span className="block uppercase text-[10px] tracking-[0.2em] text-[#6C6863] mt-1">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
