import React from "react";

export function QuoteSection() {
  return (
    <section className="py-16 md:py-24 max-w-[1600px] mx-auto px-8 md:px-16 border-t border-[#1A1A1A]/20 bg-[#F9F8F6]">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6">
        <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">The Philosophy</span>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-[#1A1A1A]">
          "Mastery is not an accident. It is the result of <span className="italic text-[#D4AF37]">relentless precision</span> and disciplined execution."
        </h3>
      </div>
    </section>
  );
}
