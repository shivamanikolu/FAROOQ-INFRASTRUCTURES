import React from "react";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

const riskSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://farooqinfrastructures.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Risk Disclosure",
      "item": "https://farooqinfrastructures.com/risk-disclosure"
    }
  ]
};

export function RiskDisclosure() {
  return (
    <div className="pt-32 pb-24 md:pb-32 max-w-[1600px] mx-auto px-8 md:px-16 overflow-hidden">
      <SEO 
        title="Risk Disclosure"
        description="Farooq Advisors Risk Disclosure: Trading stocks, futures, options, and derivatives involves a significant risk of loss. Please trade responsibly with risk capital."
        canonicalUrl="https://farooqinfrastructures.com/risk-disclosure"
        schema={riskSchema}
      />
      <div className="mb-16">
        <Link 
          to="/" 
          className="inline-flex items-center uppercase font-medium tracking-[0.2em] text-[#1A1A1A] text-xs hover:text-[#D4AF37] transition-colors duration-500"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <span className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">Legal Framework</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] text-[#1A1A1A]">
            Risk <br />
            <span className="italic text-[#D4AF37]">Disclosure</span>
          </h1>
          <p className="text-xs tracking-[0.2em] text-[#6C6863] pt-4 uppercase">Last Updated: June 2026</p>
        </div>

        <div className="text-base md:text-lg text-[#6C6863] leading-relaxed space-y-8 border-t border-[#1A1A1A]/10 pt-12">
          <p>
            <span className="float-left text-7xl font-serif leading-[0.8] mr-3 text-[#1A1A1A]">T</span>
            rading stocks, futures, options, derivatives, and financial instruments involves a significant and substantial risk of loss. It is not suitable for everyone. Before making any investment decisions, you must carefully evaluate your financial position, risk tolerance, and investment experience.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">1. High Volatility &amp; Capital Risk</h2>
            <p>
              Market prices can be extremely volatile and unpredictable. Leveraged instruments like futures and options carry a high degree of risk and can result in losses that exceed your initial deposit. You should only trade with risk capital—money you can afford to lose completely without affecting your standard of living.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">2. Educational Limitations</h2>
            <p>
              Farooq Advisors operates as an educational service. All analysis, stock charts, consultations, and risk management frameworks are presented for training purposes. We make no representations or guarantees of profit, financial gain, or safety of capital. Past results and performance in historical simulations are not indicative of future market behavior.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">3. No Guarantee of Accuracy</h2>
            <p>
              While we strive to provide highly accurate technical analysis and market frameworks, financial markets are subject to sudden macroeconomic changes, regulatory decisions, and black swan events. Farooq Advisors does not warrant the completeness or absolute correctness of any market insights shared.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] pt-4">4. Independent Financial Advice</h2>
            <p>
              Farooq Advisors is not a registered financial advisor or broker. If you require personalized investment advice, wealth management, or financial planning, we strongly recommend consulting a certified financial planner or registered investment advisor in your jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
