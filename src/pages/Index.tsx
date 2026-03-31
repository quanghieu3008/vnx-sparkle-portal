import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FixedBackground from "@/components/FixedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FixedBackground />

      <div className="relative z-10">
        <Header />

        <main className="pt-[80px]">
          <div className="sticky top-[80px] z-40">
            <MarketTicker />
          </div>

          <HeroSection />
          <InfoSection />
          <PartnersSection />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
