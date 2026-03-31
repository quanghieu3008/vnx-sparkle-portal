import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  ShieldAlert,
  AlertTriangle,
  TrendingDown,
  Ban,
  ExternalLink,
  Eye,
  X,
  Calendar,
  BookOpen,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ViolationReportSection from "@/components/ViolationReportSection";
import warningImg1 from "@/assets/investor-warning-1.jpg";
import warningImg2 from "@/assets/investor-warning-2.jpg";
import warningImg3 from "@/assets/investor-warning-3.jpg";
import warningImg4 from "@/assets/investor-warning-4.jpg";
import warningImgScam from "@/assets/investor-warning-scam.png";
import warningImgFakeApp from "@/assets/investor-warning-fake-app.png";
import warningImgHandbook from "@/assets/investor-warning-handbook.png";

interface WarningArticle {
  id: number;
  date: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  content: string[];
  views: number;
}

const warningsData: WarningArticle[] = [
  {
    id: 1,
    date: "15/03/2026",
    title: "Nhận diện về phương thức, thủ đoạn lừa đảo chứng khoán hiện nay và biện pháp phòng tránh",
    summary:
      "Nhiều đối tượng lợi dụng tâm lý ham lợi nhuận nhanh, thiếu hiểu biết hoặc kinh nghiệm của nhà đầu tư để thực hiện hành vi chiếm đoạt tài sản.",
    image: warningImgScam,
    category: "Cảnh báo",
    content: [
      "Nhiều đối tượng lợi dụng tâm lý ham lợi nhuận nhanh, thiếu hiểu biết hoặc kinh nghiệm của nhà đầu tư để thực hiện hành vi chiếm đoạt tài sản.",
      "Các đối tượng thường sử dụng mạng xã hội, các nhóm chat để tiếp cận nhà đầu tư, đưa ra những lời hứa hẹn lợi nhuận cao bất thường.",
      "Nhà đầu tư cần cảnh giác và tìm hiểu kỹ trước khi tham gia bất kỳ hình thức đầu tư nào, đặc biệt là các sàn giao dịch không được cấp phép.",
    ],
    views: 12453,
  },
  {
    id: 2,
    date: "12/03/2026",
    title: "Những sai lầm cần tránh trong đầu tư chứng khoán",
    summary: "Cùng tìm hiểu 6 sai lầm thường gặp và cách phòng tránh để tối ưu hóa chiến lược đầu tư của bạn.",
    image: warningImg2,
    category: "Kiến thức",
    content: [
      "1. Đầu tư theo đám đông: Nhiều nhà đầu tư mới thường mua cổ phiếu chỉ vì thấy người khác mua, mà không tự nghiên cứu và phân tích.",
      "2. Không đa dạng hóa danh mục: Tập trung toàn bộ vốn vào một hoặc vài cổ phiếu làm tăng rủi ro đáng kể.",
      "3. Giao dịch quá nhiều: Mua bán liên tục không những tốn phí giao dịch mà còn dễ dẫn đến quyết định sai lầm do cảm xúc.",
      "4. Bỏ qua quản lý rủi ro: Không đặt mức cắt lỗ (stop-loss) khiến thua lỗ ngày càng lớn.",
      "5. Sử dụng margin quá mức: Vay tiền để đầu tư có thể khuếch đại lợi nhuận nhưng cũng khuếch đại thua lỗ.",
      "6. Thiếu kiên nhẫn: Đầu tư thành công đòi hỏi tầm nhìn dài hạn và sự kỷ luật.",
    ],
    views: 8921,
  },
  {
    id: 3,
    date: "10/03/2026",
    title:
      'Ủy ban Chứng khoán cảnh báo nhà đầu tư không mua tiền mã hóa Pi, không ném tiền vào các công ty chứng khoán "ma"',
    summary:
      "Nhiều sàn giao dịch chứng khoán trái phép thông qua mạng xã hội, kêu gọi nhà đầu tư mở tài khoản, gửi tiền vào các ví điện tử, đầu tư vào các loại tiền mã hóa.",
    image: warningImg3,
    category: "Cảnh báo",
    content: [
      "Nhiều sàn giao dịch chứng khoán trái phép hoạt động thông qua mạng xã hội, kêu gọi nhà đầu tư mở tài khoản, gửi tiền vào các ví điện tử, đầu tư vào các loại tiền mã hóa (Pi, USDT, BUSD,…) trên các sàn giao dịch chứng khoán không phải do Sở giao dịch chứng khoán Việt Nam và công ty con tổ chức, vận hành.",
      "UBCKNN khẳng định các sàn giao dịch tiền mã hóa không được cấp phép hoạt động tại Việt Nam. Mọi giao dịch liên quan đến tiền mã hóa đều không được pháp luật bảo vệ.",
      "Nhà đầu tư cần kiểm tra danh sách các công ty chứng khoán được cấp phép trên website chính thức của UBCKNN trước khi mở tài khoản giao dịch.",
    ],
    views: 15672,
  },
  {
    id: 4,
    date: "08/03/2026",
    title: "HOSE tiếp tục đưa 6 cổ phiếu vào diện cảnh báo",
    summary:
      "HOSE có các quyết định về việc đưa cổ phiếu DAG, LEC, SJF, VMD vào diện cảnh báo kể từ ngày 21/9/2023, còn cổ phiếu POM và ASP từ ngày 22/9 tới.",
    image: warningImg4,
    category: "Thị trường",
    content: [
      "Sở Giao dịch Chứng khoán TP.HCM (HOSE) đã ra quyết định đưa các cổ phiếu DAG, LEC, SJF, VMD vào diện cảnh báo kể từ ngày 21/9/2023.",
      "Cổ phiếu POM và ASP cũng bị đưa vào diện cảnh báo từ ngày 22/9/2023.",
      "Nguyên nhân chủ yếu là do các doanh nghiệp này vi phạm quy định về công bố thông tin, báo cáo tài chính có ý kiến ngoại trừ hoặc từ chối của kiểm toán.",
      "Nhà đầu tư cần thận trọng khi giao dịch các cổ phiếu trong diện cảnh báo, kiểm soát hoặc bị đình chỉ giao dịch.",
    ],
    views: 6234,
  },
  {
    id: 5,
    date: "05/03/2026",
    title: "Đầu tư chứng khoán online, hai nạn nhân bị lừa 15 tỷ đồng",
    summary:
      "Hai nạn nhân tham gia nhóm tư vấn đầu tư chứng khoán trên ứng dụng NEEX đã bị lừa mất 15 tỷ đồng mới trình báo cơ quan công an.",
    image: warningImg1,
    category: "Cảnh báo",
    content: [
      "Hai nạn nhân tham gia nhóm tư vấn đầu tư chứng khoán trên ứng dụng NEEX đã bị lừa mất 15 tỷ đồng mới trình báo cơ quan công an.",
      "Các đối tượng lừa đảo thường tạo ra các ứng dụng giao dịch giả, hiển thị lợi nhuận ảo để dụ dỗ nhà đầu tư nạp thêm tiền.",
      "Nhà đầu tư cần cảnh giác với các ứng dụng đầu tư không rõ nguồn gốc, chỉ giao dịch trên các sàn được cấp phép chính thức.",
    ],
    views: 18340,
  },
  {
    id: 6,
    date: "03/03/2026",
    title: "Cảnh báo từ Ủy ban Chứng khoán Nhà nước về Tikop, Buff, Topi",
    summary:
      "Ủy ban Chứng khoán Nhà nước cảnh báo nhà đầu tư cần thận trọng, tìm hiểu kĩ về pháp lý khi thực hiện giao dịch hợp tác đầu tư qua các ứng dụng, website trên môi trường mạng.",
    image: warningImg2,
    category: "Cảnh báo",
    content: [
      "Ủy ban Chứng khoán Nhà nước (UBCKNN) vừa phát đi cảnh báo tới các nhà đầu tư về việc một số ứng dụng, website hoạt động trên môi trường mạng có dấu hiệu huy động vốn trái phép.",
      "Cụ thể, các ứng dụng như Tikop, Buff, Topi đã quảng cáo các sản phẩm đầu tư với lợi nhuận cao, cam kết lợi nhuận cố định, điều này vi phạm quy định pháp luật về chứng khoán.",
      "UBCKNN khuyến cáo nhà đầu tư cần tìm hiểu kỹ về tư cách pháp lý, giấy phép hoạt động của các tổ chức trước khi thực hiện giao dịch.",
    ],
    views: 9876,
  },
  {
    id: 7,
    date: "01/03/2026",
    title: "Đầu tư chứng khoán, cẩn thận không mắc bẫy lừa đảo",
    summary:
      "Bài viết phân tích cơ chế hoạt động, các yếu tố tâm lý bị lợi dụng, và cung cấp lộ trình phòng vệ mang tính hệ thống và thực tế.",
    image: warningImg3,
    category: "Kiến thức",
    content: [
      "Bài viết này được xây dựng không chỉ với mục đích liệt kê các cạm bẫy phổ biến mà còn đi sâu phân tích cơ chế hoạt động, các yếu tố tâm lý bị lợi dụng.",
      "Cung cấp một lộ trình phòng vệ, xử lý mang tính hệ thống và thực tế cho nhà đầu tư.",
      "Nhà đầu tư cần trang bị kiến thức vững chắc và luôn cảnh giác trước các chiêu trò lừa đảo ngày càng tinh vi.",
    ],
    views: 7543,
  },
  {
    id: 8,
    date: "28/02/2026",
    title: "Cẩm nang nhận biết và phòng tránh lừa đảo đầu tư sàn chứng khoán ảo, tiền ảo, đa cấp",
    summary:
      "Trước xu thế đầu tư vào các hoạt động trực tuyến như chứng khoán, tiền ảo của người dân tăng cao, tội phạm lừa đảo qua mạng đẩy mạnh hoạt động.",
    image: warningImgHandbook,
    category: "Cảnh báo",
    content: [
      "Trước xu thế đầu tư vào các hoạt động trực tuyến như chứng khoán, tiền ảo… của người dân tăng cao trong những năm gần đây, tội phạm lừa đảo qua mạng đẩy mạnh hoạt động thông qua hình thức này.",
      "Nhà đầu tư cần nhận biết các dấu hiệu lừa đảo: cam kết lợi nhuận cao, yêu cầu nạp tiền qua ví điện tử, không có giấy phép hoạt động.",
      "Luôn kiểm tra thông tin trên website chính thức của UBCKNN và các cơ quan quản lý trước khi tham gia đầu tư.",
    ],
    views: 11205,
  },
  {
    id: 9,
    date: "25/02/2026",
    title: "4 tỷ đồng đổi 7,77 tỷ ảo: Cú lừa đầu tư chứng khoán qua app giả mạo",
    summary:
      'App giả mô phỏng sàn chứng khoán chuyên nghiệp, dụ nhà đầu tư thử "đánh lệnh". Người chơi đầu tư tiền thật, nhận "lợi nhuận ảo" rồi bị xóa tài khoản.',
    image: warningImgFakeApp,
    category: "Cảnh báo",
    content: [
      'App giả mô phỏng sàn chứng khoán chuyên nghiệp, dụ nhà đầu tư thử "đánh lệnh".',
      'Người chơi đầu tư tiền thật, nhận "lợi nhuận ảo" rồi bị xóa tài khoản khi muốn rút tiền.',
      "Nhà đầu tư cần cảnh giác với các ứng dụng giao dịch không rõ nguồn gốc, chỉ sử dụng các nền tảng được cấp phép chính thức.",
    ],
    views: 21087,
  },
];

const categories = ["Tất cả", "Cảnh báo", "Thị trường", "Kiến thức"];

const categoryIcons: Record<string, React.ReactNode> = {
  "Cảnh báo": <Ban className="h-4 w-4" />,
  "Thị trường": <TrendingDown className="h-4 w-4" />,
  "Kiến thức": <BookOpen className="h-4 w-4" />,
};

const categoryColors: Record<string, string> = {
  "Cảnh báo": "from-red-500 to-orange-500",
  "Thị trường": "from-amber-500 to-yellow-500",
  "Kiến thức": "from-blue-500 to-cyan-500",
};

const featuredIds = [3, 4, 2];
const featuredArticles = featuredIds.map((id) => warningsData.find((w) => w.id === id)!);

const InvestorWarnings = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [selectedArticle, setSelectedArticle] = useState<WarningArticle | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const handleArticleClick = (article: WarningArticle) => {
    if (article.id === 2) {
      navigate("/khuyen-cao-ndt/nhung-sai-lam-can-tranh-trong-dau-tu-chung-khoan");
    } else {
      setSelectedArticle(article);
    }
  };

  const filteredData = warningsData.filter((w) => {
    const matchesCategory = activeCategory === "Tất cả" || w.category === activeCategory;
    if (!searchQuery.trim()) return matchesCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      w.title.toLowerCase().includes(q) ||
      w.summary.toLowerCase().includes(q) ||
      w.category.toLowerCase().includes(q) ||
      w.content.some((c) => c.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const featured = featuredArticles[featuredIndex];

  // Auto-rotate featured articles
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredArticles.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />

      <main className="pt-[80px]">
        <div className="sticky top-[80px] z-40">
          <MarketTicker />
        </div>

        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200 sticky top-[80px] z-30">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500 leading-none">
              <Link to="/" className="hover:text-[#003366] transition-colors">
                Trang chủ
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Tin tức và sự kiện</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Khuyến cáo NĐT</span>
            </nav>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0a1628]">
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-red-500/10"
                style={{
                  width: Math.random() * 100 + 20,
                  height: Math.random() * 100 + 20,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 py-2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-2"
              >
                <ShieldAlert className="h-10 w-10 text-red-400 mx-auto" />
              </motion.div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Khuyến Cáo{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Nhà Đầu Tư
                </span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Chỉ giao dịch trên các sàn chứng khoán được cấp phép. Hãy gửi phản ảnh cho chúng tôi khi phát hiện hành
                vi vi phạm pháp luật.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-4 mb-16"
            >
              <motion.a
                href="#violation-report"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("violation-report");
                  if (!el) return;
                  const headerOffset = 80;
                  const start = window.scrollY;
                  const end = el.getBoundingClientRect().top + start - headerOffset;
                  const duration = 600;
                  const t0 = performance.now();
                  const ease = (t: number) => 1 - Math.pow(1 - t, 3);
                  const step = (now: number) => {
                    const p = Math.min((now - t0) / duration, 1);
                    window.scrollTo(0, start + (end - start) * ease(p));
                    if (p < 1) requestAnimationFrame(step);
                  };
                  requestAnimationFrame(step);
                }}
                whileHover={{ scale: 1.08, y: -3 }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0px rgba(239,68,68,0.3)",
                    "0 0 20px rgba(239,68,68,0.6)",
                    "0 0 0px rgba(239,68,68,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-2 bg-red-500/90 hover:bg-red-500 text-white font-medium rounded-xl px-6 py-3 text-sm transition-colors cursor-pointer relative"
              >
                <AlertTriangle className="h-4 w-4 animate-bell-ring" />
                Phản ánh vi phạm
              </motion.a>
            </motion.div>
          </div>

          {/* Wave divider */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path fill="#eef1f6" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>

        {/* Content */}
        <div className="bg-[#eef1f6] pb-16">
          <div className="container mx-auto px-4">
            {/* Featured Article Carousel */}
            <div className="-mt-8 relative z-10 mb-12">
              <div className="relative min-h-[520px] md:min-h-[320px]">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={featured.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div
                      className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group h-full"
                      onClick={() => handleArticleClick(featured)}
                    >
                      <div className="md:flex h-full">
                        <div className="md:w-2/5 relative overflow-hidden min-h-[256px] md:min-h-[280px]">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`img-${featured.id}`}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="h-full"
                            >
                              <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                              <span
                                className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${categoryColors[featured.category]} inline-flex items-center gap-1.5`}
                              >
                                {categoryIcons[featured.category]} {featured.category}
                              </span>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center min-h-[220px]">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`text-${featured.id}`}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                            >
                              <motion.div
                                animate={{
                                  scale: [1, 1.05, 1],
                                  boxShadow: [
                                    "0 0 0px rgba(239,68,68,0.3)",
                                    "0 0 16px rgba(239,68,68,0.6)",
                                    "0 0 0px rgba(239,68,68,0.3)",
                                  ],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold mb-3 bg-red-50 px-3 py-1 rounded-full"
                              >
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-bell-ring" />
                                ĐÁNG CHÚ Ý
                              </motion.div>
                              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#003366] transition-colors">
                                {featured.title}
                              </h2>
                              <p className="text-slate-600 leading-relaxed mb-4">{featured.summary}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm flex items-center gap-1.5">
                                  <Calendar className="h-4 w-4" /> {featured.date}
                                </span>
                                <span className="text-[#003366] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                  Đọc thêm <ExternalLink className="h-4 w-4" />
                                </span>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {featuredArticles.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFeaturedIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === featuredIndex ? "w-6 bg-[#003366]" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Category Filter + Search */}
            <div className="flex flex-wrap items-center gap-3 mb-8 justify-center">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#003366] text-white shadow-lg shadow-[#003366]/30"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Tìm kiếm..."
                  className="pl-9 pr-8 py-2.5 rounded-full border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 transition-all shadow-sm w-48 focus:w-64"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Articles Grid */}
            {(() => {
              const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
              const paginatedData = filteredData.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE,
              );
              return (
                <>
                  <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <AnimatePresence mode="popLayout">
                      {paginatedData.map((article, index) => (
                        <motion.div
                          key={article.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ y: -8 }}
                          className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
                          onClick={() => handleArticleClick(article)}
                        >
                          <div className="relative overflow-hidden h-48">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <span
                              className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[11px] font-semibold bg-gradient-to-r ${categoryColors[article.category]} flex items-center gap-1`}
                            >
                              {categoryIcons[article.category]} {article.category}
                            </span>
                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                                <Eye className="h-4 w-4 text-[#003366]" />
                              </div>
                            </div>
                          </div>
                          <div className="p-5">
                            <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-[#003366] transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-slate-500 text-sm line-clamp-2 mb-3">{article.summary}</p>
                            <div className="flex items-center justify-between text-xs text-slate-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" /> {article.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-3.5 w-3.5" /> {(article.views ?? 0).toLocaleString("vi-VN")}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-10">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                            currentPage === page
                              ? "bg-[#003366] text-white shadow-lg shadow-[#003366]/30"
                              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </>
              );
            })()}

            {/* Tips Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-[#003366] text-center mb-8">Nhà đầu tư cần lưu ý</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🔍",
                    title: "Kiểm tra giấy phép",
                    desc: "Luôn xác minh giấy phép hoạt động của công ty chứng khoán trên website UBCKNN trước khi mở tài khoản.",
                  },
                  {
                    icon: "⚠️",
                    title: "Cảnh giác lợi nhuận cao",
                    desc: "Không tin vào các lời hứa lợi nhuận cố định, cam kết không rủi ro - đây là dấu hiệu lừa đảo.",
                  },
                  {
                    icon: "🛡️",
                    title: "Bảo vệ thông tin",
                    desc: "Không chia sẻ mật khẩu, OTP, thông tin tài khoản với bất kỳ ai, kể cả người tự xưng nhân viên công ty.",
                  },
                  {
                    icon: "📊",
                    title: "Tự nghiên cứu",
                    desc: "Luôn tự phân tích và nghiên cứu trước khi đưa ra quyết định đầu tư, không nghe theo tin đồn.",
                  },
                ].map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex gap-4"
                  >
                    <span className="text-3xl flex-shrink-0">{tip.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{tip.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-5 right-5">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[11px] font-semibold bg-gradient-to-r ${categoryColors[selectedArticle.category]} mb-2`}
                  >
                    {categoryIcons[selectedArticle.category]} {selectedArticle.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">{selectedArticle.title}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 overflow-y-auto" style={{ maxHeight: "calc(85vh - 192px)" }}>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-5 pb-4 border-b border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" /> {(selectedArticle.views ?? 0).toLocaleString("vi-VN")} lượt xem
                  </span>
                </div>
                <div className="space-y-3">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="text-slate-700 leading-relaxed text-[15px]"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ViolationReportSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default InvestorWarnings;
