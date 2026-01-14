import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface TickerItem {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

const tickerData: TickerItem[] = [
  { name: "VNINDEX", value: 1287.45, change: 12.34, changePercent: 0.97 },
  { name: "VN30", value: 1312.78, change: -8.56, changePercent: -0.65 },
  { name: "HNX", value: 234.56, change: 2.34, changePercent: 1.01 },
  { name: "UPCOM", value: 89.34, change: 0.45, changePercent: 0.51 },
  { name: "VN100", value: 1198.67, change: 15.23, changePercent: 1.29 },
  { name: "HNX30", value: 312.45, change: -4.12, changePercent: -1.30 },
  { name: "VNAllShare", value: 1245.89, change: 8.67, changePercent: 0.70 },
];

export default function MarketTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = tickerData[currentIndex];

  return (
    <div className="bg-secondary/50 border-b border-border/30 mt-20">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-primary px-4 py-2">
          <span className="text-primary-foreground text-sm font-semibold">Dữ liệu thị trường</span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="py-2 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm font-medium text-foreground">{currentItem.name}</span>
                <span className="text-sm font-semibold text-foreground">{currentItem.value.toLocaleString()}</span>
                <span
                  className={`flex items-center gap-1 text-sm font-medium ${
                    currentItem.change >= 0 ? "price-up" : "price-down"
                  }`}
                >
                  {currentItem.change >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {currentItem.change >= 0 ? "+" : ""}{currentItem.change.toFixed(2)} ({currentItem.changePercent >= 0 ? "+" : ""}{currentItem.changePercent.toFixed(2)}%)
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
