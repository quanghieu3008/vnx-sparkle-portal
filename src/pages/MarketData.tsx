import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, TrendingUp, TrendingDown, Plus, Download } from "lucide-react";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
  type: string;
  hose: string;
  hnx: string;
  upcom: string;
}

// --- Static Data ---
const indices: MarketIndex[] = [
  { name: "VNINDEX", value: 1287.45, change: -12.34, changePercent: -0.97 },
  { name: "VN30", value: 1312.78, change: -8.56, changePercent: -0.65 },
  { name: "VN100", value: 1198.67, change: 15.23, changePercent: 1.29 },
  { name: "HNX-Index", value: 234.56, change: 2.34, changePercent: 1.01 },
  { name: "HNX30", value: 312.45, change: -4.12, changePercent: -1.30 },
  { name: "UPCOM", value: 89.34, change: 0.45, changePercent: 0.51 },
  { name: "VNAllShare", value: 1245.89, change: 8.67, changePercent: 0.70 },
];

const mainIndex = {
  name: "VNINDEX",
  value: 1287.45,
  change: -12.34,
  changePercent: -0.97,
  time: "2026.04.13 PM 02:45",
  upper: 142,
  upward: 285,
  noChange: 67,
  downward: 312,
  lower: 12,
};

const chartPoints = [
  1292, 1295, 1298, 1296, 1293, 1290, 1288, 1285, 1283, 1286, 1289, 1291, 1293, 1290, 1287,
  1285, 1282, 1280, 1283, 1286, 1288, 1290, 1287, 1285, 1287,
];

const investorTradingKospi: InvestorTrading[] = [
  { type: "Tổ chức trong nước", sell: 4837, buy: 4230, netBuying: -607 },
  { type: "Nhà đầu tư nước ngoài", sell: 6260, buy: 5556, netBuying: -704 },
  { type: "Nhà đầu tư cá nhân", sell: 7682, buy: 8546, netBuying: 864 },
];

const investorTradingDerivatives: InvestorTrading[] = [
  { type: "Tổ chức trong nước", sell: 2748, buy: 2790, netBuying: 42 },
  { type: "Nhà đầu tư nước ngoài", sell: 14467, buy: 14664, netBuying: 197 },
  { type: "Nhà đầu tư cá nhân", sell: 5639, buy: 5379, netBuying: -260 },
];

const tradingValueData = [
  { market: "HOSE", value: 18229, color: "bg-red-500" },
  { market: "HNX", value: 2453, color: "bg-green-500" },
  { market: "Phái sinh", value: 65486, color: "bg-indigo-500" },
];

const tradingVolumeData = [
  { market: "HOSE", value: 856, color: "bg-red-500" },
  { market: "HNX", value: 124, color: "bg-green-500" },
  { market: "Phái sinh", value: 8, color: "bg-indigo-500" },
];

const listingSummary: ListingSummaryRow[] = [
  { type: "Số công ty", hose: "405", hnx: "326", upcom: "890" },
  { type: "Mã niêm yết", hose: "415", hnx: "340", upcom: "890" },
  { type: "CP niêm yết (triệu)", hose: "98,052", hnx: "15,297", upcom: "42,880" },
  { type: "Vốn hóa (tỷ đồng)", hose: "5,268,544", hnx: "308,270", upcom: "1,023,535" },
  { type: "IPO*", hose: "2", hnx: "0", upcom: "5" },
];

const sidebarMenu = [
  {
    title: "Chỉ số",
    items: ["Chỉ số cổ phiếu", "Chỉ số trái phiếu", "Chỉ số phái sinh"],
  },
  {
    title: "Cổ phiếu",
    items: ["Giá", "Phát hành", "Giao dịch", "Chứng khoán khác", "Chi tiết"],
  },
  {
    title: "Chứng khoán phái sinh",
    items: ["ETF", "Chứng chỉ quỹ", "Chứng quyền"],
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
    items: ["Dầu thô", "Vàng", "Cacbon"],
  },
];

// Mini chart SVG
function MiniChart({ points, color }: { points: number[]; color: string }) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const w = 380;
  const h = 100;
  const pathData = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / range) * h;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[100px]">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${pathData} L${w},${h} L0,${h} Z`} fill="url(#chartGrad)" />
      <path d={pathData} fill="none" stroke={color} strokeWidth="2" />
      {/* Dashed reference line */}
      <line x1="0" y1={h / 2} x2={w} y2={h / 2} stroke="#999" strokeWidth="0.5" strokeDasharray="4 2" />
    </svg>
  );
}

// Horizontal bar for trading
function HorizontalBar({ value, maxValue, color, label }: { value: number; maxValue: number; color: string; label: string }) {
  const pct = Math.min((value / maxValue) * 100, 100);
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="text-xs font-medium text-slate-600 w-16 text-right">{label}</span>
      <div className="flex-1 h-5 bg-slate-100 rounded-sm relative">
        <div className={`h-full rounded-sm ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-semibold text-slate-700 w-14 text-right">{value.toLocaleString()}</span>
    </div>
  );
}

export default function MarketData() {
  const [activeTab, setActiveTab] = useState<"basic" | "ranking">("basic");
  const [investorTab, setInvestorTab] = useState<"hose" | "hnx" | "upcom">("hose");
  const [derivTab, setDerivTab] = useState<"futures" | "options">("futures");
  const [timeRange, setTimeRange] = useState<"day" | "week">("day");

  const maxTradingValue = Math.max(...tradingValueData.map((d) => d.value));
  const maxTradingVolume = Math.max(...tradingVolumeData.map((d) => d.value));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#003366" }}>
      <Header />
      <main className="pt-[80px]">
        <div className="sticky top-[80px] z-40">
          <MarketTicker />
        </div>

        {/* Breadcrumb */}
        <div className="sticky top-[120px] z-30 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-2.5">
            <nav className="flex items-center gap-1 text-sm text-slate-500">
              <Link to="/" className="transition-colors bg-transparent text-black">Trang chủ</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-black">Thông tin thị trường</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-zinc-600">Dữ liệu thị trường</span>
            </nav>
          </div>
        </div>

        <div style={{ backgroundColor: "#eef1f6" }} className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-12 gap-5">

              {/* === LEFT SIDEBAR === */}
              <div className="col-span-3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Tabs */}
                  <div className="flex border-b border-slate-200">
                    <button
                      onClick={() => setActiveTab("basic")}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === "basic" ? "bg-white text-slate-800 border-b-2 border-primary" : "bg-slate-50 text-slate-500 hover:text-slate-700"}`}
                    >
                      Dữ liệu cơ bản
                    </button>
                    <button
                      onClick={() => setActiveTab("ranking")}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === "ranking" ? "bg-white text-slate-800 border-b-2 border-primary" : "bg-slate-50 text-slate-500 hover:text-slate-700"}`}
                    >
                      Xếp hạng
                    </button>
                  </div>

                  {/* Menu items */}
                  <div className="p-4 space-y-4">
                    {sidebarMenu.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                          {section.title}
                        </h4>
                        <ul className="space-y-1 ml-3">
                          {section.items.map((item) => (
                            <li key={item}>
                              <button className="text-sm text-slate-500 hover:text-primary hover:underline transition-colors">
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div className="border-b border-slate-100 mt-3" />
                      </div>
                    ))}
                  </div>

                  {/* All Download */}
                  <div className="p-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#003366] to-[#004a8c] text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      <Download className="w-4 h-4" />
                      Tải tất cả dữ liệu
                    </button>
                  </div>
                </div>
              </div>

              {/* === CENTER CONTENT === */}
              <div className="col-span-5 space-y-5">
                {/* Main Index Card */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{mainIndex.name}</h3>
                    <div className="flex bg-slate-100 rounded overflow-hidden text-xs">
                      <button
                        onClick={() => setTimeRange("day")}
                        className={`px-3 py-1 font-medium ${timeRange === "day" ? "bg-primary text-white" : "text-slate-500"}`}
                      >
                        Ngày
                      </button>
                      <button
                        onClick={() => setTimeRange("week")}
                        className={`px-3 py-1 font-medium ${timeRange === "week" ? "bg-primary text-white" : "text-slate-500"}`}
                      >
                        Tuần
                      </button>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl font-bold text-slate-900">{mainIndex.value.toLocaleString()}</span>
                    <span className={`text-sm font-semibold flex items-center gap-1 ${mainIndex.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {mainIndex.change >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      {mainIndex.change >= 0 ? "▲" : "▼"} {Math.abs(mainIndex.change).toFixed(2)} ({mainIndex.change >= 0 ? "+" : ""}{mainIndex.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{mainIndex.time}</p>

                  <MiniChart points={chartPoints} color={mainIndex.change >= 0 ? "#16a34a" : "#dc2626"} />

                  {/* Breadth indicators */}
                  <div className="flex items-center justify-between mt-3 text-center text-xs border-t border-slate-100 pt-3">
                    <div>
                      <div className="text-slate-500">Trần</div>
                      <div className="font-bold text-purple-600">↑ {mainIndex.upper}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Tăng</div>
                      <div className="font-bold text-green-600">▲ {mainIndex.upward}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Tham chiếu</div>
                      <div className="font-bold text-amber-500">{mainIndex.noChange}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Giảm</div>
                      <div className="font-bold text-red-600">▼ {mainIndex.downward}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Sàn</div>
                      <div className="font-bold text-cyan-600">↓ {mainIndex.lower}</div>
                    </div>
                  </div>
                </div>

                {/* Index list (right side of chart area on KRX) */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left px-4 py-2.5 font-semibold text-slate-600">Chỉ số</th>
                        <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Giá trị</th>
                        <th className="text-right px-4 py-2.5 font-semibold text-slate-600">Thay đổi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {indices.map((idx) => (
                        <tr key={idx.name} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-2.5 font-medium text-slate-800">{idx.name}</td>
                          <td className="px-4 py-2.5 text-right font-semibold text-slate-700">{idx.value.toLocaleString()}</td>
                          <td className={`px-4 py-2.5 text-right font-medium ${idx.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                            ({idx.change >= 0 ? "+" : ""}{idx.changePercent.toFixed(2)}%)
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Trading by Investor */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-slate-800">Giao dịch theo nhà đầu tư</h3>
                    <button className="text-slate-400 hover:text-primary"><Plus className="w-4 h-4" /></button>
                  </div>

                  {/* Tabs for markets */}
                  <div className="flex items-center gap-2 mb-4">
                    {(["hose", "hnx", "upcom"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setInvestorTab(t)}
                        className={`px-3 py-1.5 text-xs font-medium rounded ${investorTab === t ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                      >
                        {t.toUpperCase()}
                      </button>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">(Đơn vị: tỷ đồng)</span>
                  </div>

                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 text-slate-500 font-medium">Loại</th>
                        <th className="text-right py-2 text-slate-500 font-medium">Bán</th>
                        <th className="text-right py-2 text-slate-500 font-medium">Mua</th>
                        <th className="text-right py-2 text-slate-500 font-medium">Mua ròng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {investorTradingKospi.map((row) => (
                        <tr key={row.type} className="border-b border-slate-100">
                          <td className="py-2.5 text-slate-700">{row.type}</td>
                          <td className="py-2.5 text-right text-slate-600">{row.sell.toLocaleString()}</td>
                          <td className="py-2.5 text-right text-slate-600">{row.buy.toLocaleString()}</td>
                          <td className={`py-2.5 text-right font-semibold ${row.netBuying >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {row.netBuying.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Derivatives section */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      {(["futures", "options"] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setDerivTab(t)}
                          className={`px-3 py-1.5 text-xs font-medium rounded ${derivTab === t ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                        >
                          {t === "futures" ? "Hợp đồng tương lai" : "Quyền chọn"}
                        </button>
                      ))}
                      <span className="text-xs text-slate-400 ml-2">(Đơn vị: tỷ đồng)</span>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-2 text-slate-500 font-medium">Loại</th>
                          <th className="text-right py-2 text-slate-500 font-medium">Bán</th>
                          <th className="text-right py-2 text-slate-500 font-medium">Mua</th>
                          <th className="text-right py-2 text-slate-500 font-medium">Mua ròng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {investorTradingDerivatives.map((row) => (
                          <tr key={row.type} className="border-b border-slate-100">
                            <td className="py-2.5 text-slate-700">{row.type}</td>
                            <td className="py-2.5 text-right text-slate-600">{row.sell.toLocaleString()}</td>
                            <td className="py-2.5 text-right text-slate-600">{row.buy.toLocaleString()}</td>
                            <td className={`py-2.5 text-right font-semibold ${row.netBuying >= 0 ? "text-green-600" : "text-red-600"}`}>
                              {row.netBuying.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* === RIGHT COLUMN === */}
              <div className="col-span-4 space-y-5">
                {/* Trading by Market */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-slate-800">Giao dịch theo thị trường</h3>
                    <button className="text-slate-400 hover:text-primary"><Plus className="w-4 h-4" /></button>
                  </div>

                  {/* Trading Value */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-slate-700">• Giá trị giao dịch (tỷ đồng)</h4>
                      <span className="text-[10px] text-slate-400">Trễ 20 phút</span>
                    </div>
                    {tradingValueData.map((d) => (
                      <HorizontalBar key={d.market} value={d.value} maxValue={maxTradingValue} color={d.color} label={d.market} />
                    ))}
                  </div>

                  {/* Trading Volume */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-slate-700">• Khối lượng giao dịch (triệu CP)</h4>
                      <span className="text-[10px] text-slate-400">Trễ 20 phút</span>
                    </div>
                    {tradingVolumeData.map((d) => (
                      <HorizontalBar key={d.market} value={d.value} maxValue={maxTradingVolume} color={d.color} label={d.market} />
                    ))}
                  </div>
                </div>

                {/* Listing Summary */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-slate-800">Tổng quan niêm yết</h3>
                    <button className="text-slate-400 hover:text-primary"><Plus className="w-4 h-4" /></button>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-3">(Tỷ đồng, triệu CP) — Trễ 20 phút</p>

                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="text-left px-3 py-2 font-semibold text-slate-600">Loại</th>
                        <th className="text-right px-3 py-2 font-semibold text-slate-600">HOSE</th>
                        <th className="text-right px-3 py-2 font-semibold text-slate-600">HNX</th>
                        <th className="text-right px-3 py-2 font-semibold text-slate-600">UPCOM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listingSummary.map((row) => (
                        <tr key={row.type} className="border-b border-slate-100">
                          <td className="px-3 py-2.5 text-slate-700">{row.type}</td>
                          <td className="px-3 py-2.5 text-right text-slate-600">{row.hose}</td>
                          <td className="px-3 py-2.5 text-right text-slate-600">{row.hnx}</td>
                          <td className="px-3 py-2.5 text-right text-slate-600">{row.upcom}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[10px] text-red-500 mt-2">*Dữ liệu IPO lũy kế từ đầu năm</p>
                </div>

                {/* Quick Menu */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <h4 className="text-sm font-bold text-slate-800 mb-3">Truy cập nhanh</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["Xếp hạng", "Bán khống", "Dữ liệu phân tích", "Mua dữ liệu"].map((item) => (
                      <button
                        key={item}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-sm text-slate-600 hover:text-primary transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
