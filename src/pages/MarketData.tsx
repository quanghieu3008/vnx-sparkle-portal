import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Download, TrendingUp, TrendingDown, Plus } from "lucide-react";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// --- Data Types ---
interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

interface InvestorTrading {
  type: string;
  sell: number;
  buy: number;
  netBuying: number;
}

interface ListingSummaryRow {
  label: string;
  hose: string;
  hnx: string;
  upcom: string;
}

// --- Sample Data ---
interface IndexDetail {
  name: string;
  value: number;
  change: number;
  changePercent: number;
  date: string;
  chartData: number[];
  stats: { ceiling: number; up: number; noChange: number; down: number; floor: number };
}

const indicesDetail: IndexDetail[] = [
  {
    name: "VN-Index", value: 1248.35, change: -12.47, changePercent: -0.99,
    date: "2025.04.13 PM 02:45",
    chartData: [1260, 1258, 1255, 1252, 1256, 1254, 1250, 1248, 1246, 1249, 1248],
    stats: { ceiling: 12, up: 156, noChange: 45, down: 210, floor: 8 },
  },
  {
    name: "VN30", value: 1265.12, change: -15.23, changePercent: -1.19,
    date: "2025.04.13 PM 02:45",
    chartData: [1280, 1276, 1272, 1270, 1274, 1268, 1265, 1262, 1266, 1264, 1265],
    stats: { ceiling: 5, up: 12, noChange: 3, down: 10, floor: 0 },
  },
  {
    name: "HNX-Index", value: 225.67, change: 1.23, changePercent: 0.55,
    date: "2025.04.13 PM 02:45",
    chartData: [224, 224.5, 225, 224.8, 225.2, 225.5, 225.3, 225.8, 226, 225.7, 225.67],
    stats: { ceiling: 8, up: 98, noChange: 32, down: 75, floor: 4 },
  },
  {
    name: "HNX30", value: 487.92, change: -2.15, changePercent: -0.44,
    date: "2025.04.13 PM 02:45",
    chartData: [490, 489.5, 489, 488.5, 489, 488, 487.5, 488.2, 487.8, 488, 487.92],
    stats: { ceiling: 3, up: 10, noChange: 5, down: 12, floor: 0 },
  },
  {
    name: "UPCOM", value: 92.34, change: 0.18, changePercent: 0.20,
    date: "2025.04.13 PM 02:45",
    chartData: [92, 92.1, 92.2, 92.15, 92.3, 92.25, 92.35, 92.28, 92.32, 92.36, 92.34],
    stats: { ceiling: 2, up: 65, noChange: 120, down: 58, floor: 1 },
  },
  {
    name: "VNX Allshare", value: 1380.56, change: -10.82, changePercent: -0.78,
    date: "2025.04.13 PM 02:45",
    chartData: [1392, 1390, 1388, 1385, 1387, 1384, 1382, 1380, 1381, 1379, 1380.56],
    stats: { ceiling: 10, up: 140, noChange: 50, down: 180, floor: 6 },
  },
  {
    name: "VN100", value: 1195.43, change: -14.07, changePercent: -1.16,
    date: "2025.04.13 PM 02:45",
    chartData: [1210, 1208, 1205, 1202, 1206, 1200, 1198, 1196, 1197, 1194, 1195.43],
    stats: { ceiling: 6, up: 42, noChange: 10, down: 38, floor: 4 },
  },
];

const indices: MarketIndex[] = indicesDetail.map(({ name, value, change, changePercent }) => ({ name, value, change, changePercent }));

const kospiTrading: InvestorTrading[] = [
  { type: "Tổ chức trong nước", sell: 2837, buy: 2430, netBuying: -407 },
  { type: "Tổ chức nước ngoài", sell: 4260, buy: 3556, netBuying: -704 },
  { type: "Cá nhân", sell: 5682, buy: 6546, netBuying: 863 },
];

const kosdaqTrading: InvestorTrading[] = [
  { type: "Tổ chức trong nước", sell: 1520, buy: 1380, netBuying: -140 },
  { type: "Tổ chức nước ngoài", sell: 890, buy: 1120, netBuying: 230 },
  { type: "Cá nhân", sell: 3200, buy: 3450, netBuying: 250 },
];

const upcomTrading: InvestorTrading[] = [
  { type: "Tổ chức trong nước", sell: 320, buy: 280, netBuying: -40 },
  { type: "Tổ chức nước ngoài", sell: 150, buy: 200, netBuying: 50 },
  { type: "Cá nhân", sell: 780, buy: 850, netBuying: 70 },
];

const derivativesTrading: InvestorTrading[] = [
  { type: "Tổ chức trong nước", sell: 1748, buy: 1790, netBuying: 42 },
  { type: "Tổ chức nước ngoài", sell: 12467, buy: 12664, netBuying: 197 },
  { type: "Cá nhân", sell: 3639, buy: 3379, netBuying: -260 },
];

const tradingByMarket = {
  value: [
    { market: "HOSE", sell: 4500, buy: 3800, total: 12229 },
    { market: "HNX", sell: 1200, buy: 980, total: 7453 },
    { market: "UPCOM", sell: 18000, buy: 17500, total: 21486 },
  ],
  volume: [
    { market: "HOSE", value: 700 },
    { market: "HNX", value: 795 },
    { market: "UPCOM", value: 5 },
  ],
};

const listingSummary: ListingSummaryRow[] = [
  { label: "Số công ty", hose: "840", hnx: "1.820", upcom: "109" },
  { label: "Mã niêm yết", hose: "950", hnx: "1.823", upcom: "109" },
  { label: "KL niêm yết (triệu CP)", hose: "64.052", hnx: "55.297", upcom: "880" },
  { label: "Vốn hóa (tỷ đồng)", hose: "4.768.544", hnx: "608.270", upcom: "3.535" },
  { label: "IPO*", hose: "1", hnx: "16", upcom: "0" },
];

// --- Sidebar categories ---
const sidebarCategories = [
  {
    title: "Chỉ số",
    items: ["Chỉ số cổ phiếu", "Chỉ số trái phiếu", "Chỉ số phái sinh"],
  },
  {
    title: "Cổ phiếu",
    items: ["Giá", "Phát hành", "Giao dịch", "Chứng khoán khác", "Chi tiết"],
  },
  {
    title: "Sản phẩm chứng khoán hóa",
    items: ["ETF", "ETN", "Chứng quyền"],
  },
  {
    title: "Trái phiếu",
    items: ["Giá", "Phát hành", "Giao dịch", "Chi tiết"],
  },
  {
    title: "Phái sinh",
    items: ["Giá", "Phát hành", "Giao dịch", "Chi tiết"],
  },
  {
    title: "Hàng hóa",
    items: ["Dầu", "Vàng", "Carbon"],
  },
  {
    title: "Thị trường liên kết",
    items: ["Hanoi Stock Exchange", "Hose Stock Exchange"],
  },
];

// --- Mini chart SVG ---
function MiniChart({ data, color }: { data: number[]; color: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 300;
  const h = 80;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

// --- Horizontal bar ---
function HBar({ value, maxValue, color, label }: { value: number; maxValue: number; color: string; label: string }) {
  const pct = Math.min((value / maxValue) * 100, 100);
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="w-20 text-xs text-right font-medium text-slate-700">{label}</span>
      <div className="flex-1 bg-slate-100 rounded h-5 relative">
        <div className="h-full rounded" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="w-16 text-xs text-right font-semibold text-slate-800">{value.toLocaleString()}</span>
    </div>
  );
}

export default function MarketData() {
  const [activeTab, setActiveTab] = useState("basic");
  const [investorTab, setInvestorTab] = useState("hose");
  const [derivTab, setDerivTab] = useState("futures");
  const [activeSidebarItem, setActiveSidebarItem] = useState<string | null>(null);
  const [selectedIndexId, setSelectedIndexId] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle through indices
  useEffect(() => {
    if (isHovering) return;
    intervalRef.current = setInterval(() => {
      setSelectedIndexId((prev) => (prev + 1) % indicesDetail.length);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const selectedIndex = indicesDetail[selectedIndexId];

  const handleIndexHover = useCallback((index: number) => {
    setIsHovering(true);
    setSelectedIndexId(index);
  }, []);

  const handleIndexLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const investorData: Record<string, InvestorTrading[]> = {
    hose: kospiTrading,
    hnx: kosdaqTrading,
    upcom: upcomTrading,
  };

  const maxTradingValue = Math.max(...tradingByMarket.value.map((m) => m.total));
  const maxTradingVolume = Math.max(...tradingByMarket.volume.map((m) => m.value));

  const tradingValueColors = ["#ef4444", "#22c55e", "#8b5cf6"];
  const tradingVolumeColors = ["#ef4444", "#22c55e", "#3b82f6"];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <MarketTicker />

      {/* Breadcrumb */}
      <div className="fixed top-[calc(5rem+2.5rem)] left-0 right-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-3 text-sm">
            <Link to="/" className="transition-colors bg-transparent text-black">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-black">Thông tin thị trường</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-zinc-600">Dữ liệu thị trường</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-[calc(5rem+2.5rem+3rem)] pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4">
            {/* Left Sidebar */}
            <aside className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                {/* Tab header */}
                <div className="flex border-b border-slate-200">
                  <button
                    onClick={() => setActiveTab("basic")}
                    className={`flex-1 py-3 text-sm font-medium transition-colors ${
                      activeTab === "basic"
                        ? "bg-white text-slate-800 border-b-2 border-primary"
                        : "bg-slate-50 text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Dữ liệu cơ bản
                  </button>
                  <button
                    onClick={() => setActiveTab("ranking")}
                    className={`flex-1 py-3 text-sm font-medium transition-colors ${
                      activeTab === "ranking"
                        ? "bg-primary text-white"
                        : "bg-slate-50 text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Xếp hạng
                  </button>
                </div>

                {/* Categories */}
                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {sidebarCategories.map((cat) => (
                    <div key={cat.title}>
                      <h4 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-1">
                        <span className="text-primary">•</span> {cat.title}
                      </h4>
                      <div className="ml-4 space-y-0.5">
                        {cat.items.map((item) => (
                          <button
                            key={item}
                            onClick={() => setActiveSidebarItem(item)}
                            className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                              activeSidebarItem === item
                                ? "text-primary font-medium bg-primary/5"
                                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className="border-b border-slate-100 mt-3" />
                    </div>
                  ))}
                </div>

                {/* Download */}
                <div className="p-4 border-t border-slate-200">
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#003366] text-white rounded-lg text-sm font-medium hover:bg-[#002244] transition-colors">
                    <Download className="w-4 h-4" />
                    Tải xuống toàn bộ dữ liệu
                  </button>
                </div>
              </div>
            </aside>

            {/* Center Column */}
            <section className="lg:col-span-5">
              {/* Main Index Card */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 mb-5 py-[30px] transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-lg font-bold text-slate-800 transition-all duration-300">{selectedIndex.name}</h2>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-3xl font-bold text-slate-900 transition-all duration-300">{selectedIndex.value.toLocaleString("vi-VN", { minimumFractionDigits: 2 })}</span>
                      <span className={`text-sm font-semibold transition-all duration-300 ${selectedIndex.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {selectedIndex.change >= 0 ? "▲" : "▼"} {Math.abs(selectedIndex.change).toFixed(2)} ({selectedIndex.changePercent >= 0 ? "+" : ""}{selectedIndex.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{selectedIndex.date}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="px-3 py-1 text-xs rounded bg-slate-800 text-white">Ngày</button>
                    <button className="px-3 py-1 text-xs rounded bg-slate-100 text-slate-600 hover:bg-slate-200">Tuần</button>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="mt-2 border border-slate-100 rounded p-2 transition-all duration-500">
                  <MiniChart data={selectedIndex.chartData} color={selectedIndex.change >= 0 ? "#22c55e" : "#ef4444"} />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 px-1">
                    <span>09:00</span><span>10:00</span><span>11:00</span><span>12:00</span><span>13:00</span><span>14:00</span><span>15:00</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between mt-4 text-center">
                  <div>
                    <p className="text-xs text-slate-500">Trần</p>
                    <p className="text-sm font-bold text-purple-600">↑ {selectedIndex.stats.ceiling}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Tăng</p>
                    <p className="text-sm font-bold text-green-600">▲ {selectedIndex.stats.up}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Đứng giá</p>
                    <p className="text-sm font-bold text-yellow-600">{selectedIndex.stats.noChange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Giảm</p>
                    <p className="text-sm font-bold text-red-600">▼ {selectedIndex.stats.down}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Sàn</p>
                    <p className="text-sm font-bold text-blue-600">↓ {selectedIndex.stats.floor}</p>
                  </div>
                </div>
              </div>

              {/* Trading by Investor */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 mb-5 py-[40px]">
                <h3 className="text-base font-bold text-slate-800 mb-3">Giao dịch theo Nhà đầu tư</h3>
                <div className="flex items-center gap-2 mb-4">
                  {["hose", "hnx", "upcom"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setInvestorTab(tab)}
                      className={`px-4 py-1.5 text-xs font-medium rounded transition-colors ${
                        investorTab === tab
                          ? "bg-slate-800 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                  <span className="text-xs text-slate-400 ml-2">(Đơn vị: tỷ đồng)</span>
                  <button className="ml-auto text-slate-400 hover:text-slate-600">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 text-slate-500 font-medium">Loại NĐT</th>
                      <th className="text-right py-2 text-slate-500 font-medium">Bán</th>
                      <th className="text-right py-2 text-slate-500 font-medium">Mua</th>
                      <th className="text-right py-2 text-slate-500 font-medium">Mua ròng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investorData[investorTab]?.map((row) => (
                      <tr key={row.type} className="border-b border-slate-100">
                        <td className="py-2.5 text-slate-700">{row.type}</td>
                        <td className="py-2.5 text-right text-slate-700">{row.sell.toLocaleString()}</td>
                        <td className="py-2.5 text-right text-slate-700">{row.buy.toLocaleString()}</td>
                        <td className={`py-2.5 text-right font-semibold ${row.netBuying >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {row.netBuying.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Derivatives Trading by Investor */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 py-[30px]">
                <div className="flex items-center gap-2 mb-4">
                  {["futures", "options"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setDerivTab(tab)}
                      className={`px-4 py-1.5 text-xs font-medium rounded transition-colors ${
                        derivTab === tab
                          ? "bg-slate-800 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {tab === "futures" ? "Phái sinh Futures" : "Phái sinh Options"}
                    </button>
                  ))}
                  <span className="text-xs text-slate-400 ml-2">(Đơn vị: tỷ đồng)</span>
                  <button className="ml-auto text-slate-400 hover:text-slate-600">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 text-slate-500 font-medium">Loại NĐT</th>
                      <th className="text-right py-2 text-slate-500 font-medium">Bán</th>
                      <th className="text-right py-2 text-slate-500 font-medium">Mua</th>
                      <th className="text-right py-2 text-slate-500 font-medium">Mua ròng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {derivativesTrading.map((row) => (
                      <tr key={row.type} className="border-b border-slate-100">
                        <td className="py-2.5 text-slate-700">{row.type}</td>
                        <td className="py-2.5 text-right text-slate-700">{row.sell.toLocaleString()}</td>
                        <td className="py-2.5 text-right text-slate-700">{row.buy.toLocaleString()}</td>
                        <td className={`py-2.5 text-right font-semibold ${row.netBuying >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {row.netBuying.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Right Column */}
            <aside className="lg:col-span-4">
              {/* Index list */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 mb-5 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
                  <h3 className="text-sm font-bold text-slate-800">Chỉ số chính</h3>
                  <button className="text-slate-400 hover:text-slate-600">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {indicesDetail.map((idx, i) => (
                      <tr
                        key={idx.name}
                        className={`border-b border-slate-50 cursor-pointer transition-all duration-200 ${
                          selectedIndexId === i
                            ? "bg-slate-800 text-white"
                            : "hover:bg-slate-100"
                        }`}
                        onMouseEnter={() => handleIndexHover(i)}
                        onMouseLeave={handleIndexLeave}
                        onClick={() => { setSelectedIndexId(i); setIsHovering(false); }}
                      >
                        <td className={`py-2.5 px-4 font-medium ${selectedIndexId === i ? "text-white" : "text-slate-700"}`}>{idx.name}</td>
                        <td className={`py-2.5 px-2 text-right font-semibold ${selectedIndexId === i ? "text-white" : "text-slate-800"}`}>{idx.value.toLocaleString("vi-VN", { minimumFractionDigits: 2 })}</td>
                        <td className={`py-2.5 px-4 text-right text-xs font-semibold ${
                          selectedIndexId === i
                            ? "text-white/90"
                            : idx.change >= 0 ? "text-green-600" : "text-red-600"
                        }`}>
                          ({idx.changePercent >= 0 ? "+" : ""}{idx.changePercent.toFixed(2)}%)
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Trading by Market */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-800">Giao dịch theo thị trường</h3>
                  <button className="text-slate-400 hover:text-slate-600">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Trading value */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-medium text-slate-600">• Giá trị giao dịch (tỷ đồng)</p>
                    <p className="text-[10px] text-slate-400">Chậm 20 phút</p>
                  </div>
                  {tradingByMarket.value.map((m, i) => (
                    <HBar key={m.market} value={m.total} maxValue={maxTradingValue} color={tradingValueColors[i]} label={m.market} />
                  ))}
                </div>

                {/* Trading volume */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-medium text-slate-600">• Khối lượng giao dịch (triệu CP)</p>
                    <p className="text-[10px] text-slate-400">Chậm 20 phút</p>
                  </div>
                  {tradingByMarket.volume.map((m, i) => (
                    <HBar key={m.market} value={m.value} maxValue={maxTradingVolume} color={tradingVolumeColors[i]} label={m.market} />
                  ))}
                </div>
              </div>

              {/* Listing Summary */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Tổng hợp niêm yết</h3>
                    <p className="text-[10px] text-slate-400">(tỷ đồng, triệu CP)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-slate-400">Chậm 20 phút</p>
                    <button className="text-slate-400 hover:text-slate-600">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 text-slate-500 font-medium text-xs">Loại</th>
                      <th className="text-right py-2 text-slate-500 font-medium text-xs">HOSE</th>
                      <th className="text-right py-2 text-slate-500 font-medium text-xs">HNX</th>
                      <th className="text-right py-2 text-slate-500 font-medium text-xs">UPCOM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listingSummary.map((row) => (
                      <tr key={row.label} className="border-b border-slate-50">
                        <td className="py-2 text-slate-700 text-xs">{row.label}</td>
                        <td className="py-2 text-right text-slate-800 font-medium text-xs">{row.hose}</td>
                        <td className="py-2 text-right text-slate-800 font-medium text-xs">{row.hnx}</td>
                        <td className="py-2 text-right text-slate-800 font-medium text-xs">{row.upcom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-red-500 mt-2">*Dữ liệu lũy kế từ đầu năm</p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
