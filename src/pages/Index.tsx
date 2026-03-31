import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
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
  );
};

export default Index;
