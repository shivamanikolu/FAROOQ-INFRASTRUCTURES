import React, { useEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Toaster } from "sonner";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { GridLines } from "./components/GridLines";
import { Home } from "./pages/Home";
import { Footer } from "./components/sections/Footer";

// Lazy loading subpages for bundle performance and faster FCP/LCP
const FounderStory = React.lazy(() =>
  import("./pages/FounderStory").then((m) => ({ default: m.FounderStory }))
);
const PrivacyPolicy = React.lazy(() =>
  import("./pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy }))
);
const TermsOfService = React.lazy(() =>
  import("./pages/TermsOfService").then((m) => ({ default: m.TermsOfService }))
);
const RiskDisclosure = React.lazy(() =>
  import("./pages/RiskDisclosure").then((m) => ({ default: m.RiskDisclosure }))
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <NoiseOverlay />
      <GridLines />
      <Toaster position="top-right" richColors />
      
      <main className="relative z-10">
        <Suspense 
          fallback={
            <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-t-[#D4AF37] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/founder-story" element={<FounderStory />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/risk-disclosure" element={<RiskDisclosure />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

