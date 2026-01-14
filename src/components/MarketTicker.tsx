import { TrendingUp, TrendingDown } from "lucide-react";

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
  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-secondary/90 backdrop-blur-sm border-b border-border/30">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-primary px-4 py-2.5 z-10">
          <span className="text-primary-foreground text-sm font-semibold whitespace-nowrap">Dữ liệu thị trường</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary/90 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary/90 to-transparent z-10" />
          
          <div className="ticker-scroll inline-flex items-center gap-10 py-2.5 whitespace-nowrap">
            {/* First set */}
            {tickerData.map((item, index) => (
              <div key={`first-${index}`} className="inline-flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">{item.name}</span>
                <span className="text-sm font-bold text-primary">{item.value.toLocaleString()}</span>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-medium ${
                    item.change >= 0 ? "price-up" : "price-down"
                  }`}
                >
                  {item.change >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {item.change >= 0 ? "+" : ""}{item.change.toFixed(2)} ({item.changePercent >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%)
                </span>
                <span className="text-muted-foreground mx-2">|</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tickerData.map((item, index) => (
              <div key={`second-${index}`} className="inline-flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">{item.name}</span>
                <span className="text-sm font-bold text-primary">{item.value.toLocaleString()}</span>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-medium ${
                    item.change >= 0 ? "price-up" : "price-down"
                  }`}
                >
                  {item.change >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {item.change >= 0 ? "+" : ""}{item.change.toFixed(2)} ({item.changePercent >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%)
                </span>
                <span className="text-muted-foreground mx-2">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
