import { useEffect, useState } from "react";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ScrollToTop from "@/components/ScrollToTop";
import heroBg1 from "@/assets/hero-bg-custom-1.png";
import heroBg2 from "@/assets/hero-bg-custom-2.png";
import heroBg3 from "@/assets/hero-bg-custom-3.png";

const backgrounds = [heroBg1, heroBg2, heroBg3];

const Index = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative bg-background">
      {/* Fixed Background Images */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              opacity: currentBg === index ? 0.95 : 0,
              filter:
                currentBg === index
                  ? "saturate(1.25) contrast(1.12) brightness(1.12)"
                  : "none",
              willChange: "opacity",
            }}
          />
        ))}

        {/* Overlay gradient - deep navy tone but let images show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/30 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-0">
        <Header />
        <MarketTicker />
        <div className="pt-10">
          <HeroSection />
          <InfoSection />
          <PartnersSection />
          <Footer />
        </div>
        <ChatBot />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
