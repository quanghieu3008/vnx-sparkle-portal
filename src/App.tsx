import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "./components/ChatBot";
import Index from "./pages/Index";
import EventActivities from "./pages/EventActivities";
import SocialActivities from "./pages/SocialActivities";
import NewsDetail25Years from "./pages/NewsDetail25Years";
import AnnualHolidays from "./pages/AnnualHolidays";
import LeadershipMessage from "./pages/LeadershipMessage";
import DevelopmentHistory from "./pages/DevelopmentHistory";
import OrganizationalChart from "./pages/OrganizationalChart";
import LeadershipTeam from "./pages/LeadershipTeam";
import FunctionsAndDuties from "./pages/FunctionsAndDuties";
import InvestorWarnings from "./pages/InvestorWarnings";
import InvestorWarnings2 from "./pages/InvestorWarnings2";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hoat-dong-su-kien" element={<EventActivities />} />
          <Route path="/hoat-dong-xa-hoi" element={<SocialActivities />} />
          <Route path="/tin-tuc/le-ky-niem-25-nam-ttck" element={<NewsDetail25Years />} />
          <Route path="/lich-nghi-hang-nam" element={<AnnualHolidays />} />
          <Route path="/gioi-thieu/thong-diep-lanh-dao" element={<LeadershipMessage />} />
          <Route path="/gioi-thieu/lich-su-phat-trien" element={<DevelopmentHistory />} />
          <Route path="/gioi-thieu/so-do-to-chuc" element={<OrganizationalChart />} />
          <Route path="/gioi-thieu/ban-lanh-dao" element={<LeadershipTeam />} />
          <Route path="/gioi-thieu/chuc-nang-nhiem-vu" element={<FunctionsAndDuties />} />
          <Route path="/khuyen-cao-ndt" element={<InvestorWarnings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
