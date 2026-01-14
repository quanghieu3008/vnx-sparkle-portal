import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketTicker />
      <HeroSection />
      <InfoSection />
      <PartnersSection />
      <Footer />
      <ChatBot />
      <ScrollToTop />
    </div>
  );
};

export default Index;
