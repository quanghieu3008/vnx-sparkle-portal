import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, TrendingUp, TrendingDown, Clock } from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const backgrounds = [heroBg1, heroBg2, heroBg3];

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
}

const newsItems: NewsItem[] = [
  { id: 1, title: "VNX công bố kết quả giao dịch quý IV/2025 với mức tăng trưởng ấn tượng", date: "14/01/2026", category: "Tin tức" },
  { id: 2, title: "Thị trường chứng khoán Việt Nam tiếp tục đà tăng trưởng bền vững", date: "13/01/2026", category: "Phân tích" },
  { id: 3, title: "Hội nghị thành viên 2026: Định hướng phát triển thị trường vốn", date: "12/01/2026", category: "Sự kiện" },
];

interface MarketIndex {
  name: string;
  value: number;
  open: number;
  high: number;
  low: number;
  change: number;
  changePercent: number;
}

const marketIndices: MarketIndex[] = [
  { name: "VNINDEX", value: 1287.45, open: 1275.11, high: 1295.34, low: 1272.45, change: 12.34, changePercent: 0.97 },
  { name: "VN30", value: 1312.78, open: 1321.34, high: 1325.67, low: 1308.23, change: -8.56, changePercent: -0.65 },
  { name: "HNXIndex", value: 234.56, open: 232.22, high: 236.89, low: 231.45, change: 2.34, changePercent: 1.01 },
  { name: "UpcomIndex", value: 89.34, open: 88.89, high: 90.12, low: 88.45, change: 0.45, changePercent: 0.51 },
  { name: "VNAllShare", value: 1245.89, open: 1237.22, high: 1252.34, low: 1235.67, change: 8.67, changePercent: 0.70 },
];

interface TopStock {
  code: string;
  price: number;
  change: number;
}

const topGainers: TopStock[] = [
  { code: "FPT", price: 125.5, change: 6.95 },
  { code: "VNM", price: 78.3, change: 5.42 },
  { code: "MWG", price: 52.8, change: 4.89 },
  { code: "HPG", price: 25.6, change: 4.12 },
  { code: "VCB", price: 98.7, change: 3.85 },
];

const topLosers: TopStock[] = [
  { code: "STB", price: 32.1, change: -6.23 },
  { code: "DXG", price: 18.5, change: -5.67 },
  { code: "NVL", price: 12.8, change: -4.89 },
  { code: "PDR", price: 8.9, change: -4.34 },
  { code: "TCB", price: 25.4, change: -3.78 },
];

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);
  const [currentNews, setCurrentNews] = useState(0);
  const [timeLeft, setTimeLeft] = useState(2);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
      setTimeLeft(2);
    }, 2000);

    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 2));
    }, 1000);

    return () => {
      clearInterval(bgInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-20">
      {/* Fixed Background Images */}
      <div className="fixed inset-0 top-0 -z-10">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: currentBg === index ? 1 : 0,
            }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - News */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNews}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  {newsItems[currentNews].category}
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                  {newsItems[currentNews].title}
                </h2>

                <p className="text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {newsItems[currentNews].date}
                </p>

                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group">
                  Tìm hiểu thêm
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </AnimatePresence>

            {/* News Indicator */}
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">{timeLeft}</span>
                <svg className="absolute inset-0" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray={`${(timeLeft / 2) * 113} 113`}
                    strokeLinecap="round"
                    transform="rotate(-90 20 20)"
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
              <div className="flex gap-2">
                {newsItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentNews(idx);
                      setCurrentBg(idx);
                      setTimeLeft(2);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      currentNews === idx ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Market Data */}
          <div className="space-y-4">
            {/* Market Overview Table */}
            <div className="bg-glass rounded-xl p-4 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-display font-semibold text-foreground">Tổng quan thị trường</h3>
                <span className="text-xs text-muted-foreground">Cập nhật: 14/01/2026, 15:00</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 px-2 text-muted-foreground font-medium">Tên chỉ số</th>
                      <th className="text-right py-2 px-2 text-muted-foreground font-medium">Mục lục</th>
                      <th className="text-right py-2 px-2 text-muted-foreground font-medium">Mở</th>
                      <th className="text-right py-2 px-2 text-muted-foreground font-medium">Cao</th>
                      <th className="text-right py-2 px-2 text-muted-foreground font-medium">Thấp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketIndices.map((index, idx) => (
                      <tr key={idx} className="border-b border-border/30 last:border-0">
                        <td className="py-2 px-2 font-medium text-foreground">{index.name}</td>
                        <td className="py-2 px-2 text-right">
                          <div className="font-semibold text-foreground">{index.value.toLocaleString()}</div>
                          <div className={index.change >= 0 ? "price-up text-xs" : "price-down text-xs"}>
                            {index.change >= 0 ? "+" : ""}{index.change.toFixed(2)} ({index.changePercent >= 0 ? "+" : ""}{index.changePercent.toFixed(2)}%)
                          </div>
                        </td>
                        <td className="py-2 px-2 text-right text-muted-foreground">{index.open.toLocaleString()}</td>
                        <td className="py-2 px-2 text-right text-muted-foreground">{index.high.toLocaleString()}</td>
                        <td className="py-2 px-2 text-right text-muted-foreground">{index.low.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <a href="#" className="inline-flex items-center gap-1 text-primary text-sm mt-4 hover:underline">
                Tìm hiểu thêm <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Nhập tên/mã sản phẩm"
                className="pl-12 bg-glass border-border/50 h-12 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Top Gainers/Losers/Volume */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Gainers */}
              <div className="bg-glass rounded-xl p-4 shadow-card">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-success mb-3">
                  <TrendingUp className="h-4 w-4" /> Top tăng
                </h4>
                <div className="space-y-2">
                  {topGainers.map((stock, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="font-medium text-foreground">{stock.code}</span>
                      <span className="price-up">+{stock.change.toFixed(2)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Losers */}
              <div className="bg-glass rounded-xl p-4 shadow-card">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-destructive mb-3">
                  <TrendingDown className="h-4 w-4" /> Top giảm
                </h4>
                <div className="space-y-2">
                  {topLosers.map((stock, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="font-medium text-foreground">{stock.code}</span>
                      <span className="price-down">{stock.change.toFixed(2)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
