import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="py-12 bg-[#1A1A1A] border-t border-[#F9F8F6]/10 text-[#F9F8F6] relative z-10">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="text-center md:text-left">
          <span className="font-serif text-xl italic text-[#D4AF37] block mb-2">Farooq Advisors</span>
          <span className="uppercase text-[10px] tracking-[0.2em] text-[#EBE5DE] opacity-60">
            A division of Farooq Infrastructures Pvt Ltd
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 uppercase text-[10px] tracking-[0.2em] text-[#EBE5DE] opacity-80" aria-label="Footer Navigation">
          <Link to="/privacy-policy" aria-label="View Privacy Policy" className="hover:text-[#D4AF37] transition-colors duration-500">Privacy Policy</Link>
          <Link to="/terms-of-service" aria-label="View Terms of Service" className="hover:text-[#D4AF37] transition-colors duration-500">Terms of Service</Link>
          <Link to="/risk-disclosure" aria-label="View Risk Disclosure" className="hover:text-[#D4AF37] transition-colors duration-500">Risk Disclosure</Link>
        </nav>

        <div className="text-center md:text-right uppercase text-[10px] tracking-[0.2em] text-[#EBE5DE] opacity-60">
          &copy; {new Date().getFullYear()} Farooq Advisors. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
