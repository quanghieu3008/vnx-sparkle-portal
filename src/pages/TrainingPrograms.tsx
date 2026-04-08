import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Filter, ChevronLeft, ChevronRight, Clock, MapPin, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import ScrollToTop from "@/components/ScrollToTop";
import banner1 from "@/assets/training-banner-1.jpg";
import banner2 from "@/assets/training-banner-2.jpg";
import banner3 from "@/assets/training-banner-3.jpg";

interface TrainingCourse {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  format: string;
}

const categories = [
  { id: "all", label: "Tất cả khóa đào tạo" },
  { id: "basic-invest", label: "Kiến thức cơ bản về đầu tư" },
  { id: "basic-trade", label: "Kiến thức cơ bản về giao dịch" },
  { id: "stock", label: "Tìm hiểu về khối thị trường Cổ phiếu" },
  { id: "bond", label: "Tìm hiểu về khối thị trường Trái phiếu" },
  { id: "derivative", label: "Tìm hiểu về khối thị trường Phái sinh" },
  { id: "other", label: "Tìm hiểu về khối thị trường khác" },
];

const coursesData: TrainingCourse[] = [
  { id: 1, title: "KIẾN THỨC CƠ BẢN VỀ ĐẦU TƯ CHỨNG KHOÁN CHO NGƯỜI MỚI", category: "basic-invest", date: "2026-04-15", time: "8:00 Thứ Ba", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 2, title: "PHÂN TÍCH KỸ THUẬT CĂN BẢN TRONG GIAO DỊCH", category: "basic-trade", date: "2026-04-18", time: "14:00 Thứ Sáu", format: "Trực tuyến" },
  { id: 3, title: "CÁC THUẬT NGỮ CƠ BẢN CỦA THỊ TRƯỜNG CỔ PHIẾU", category: "stock", date: "2026-04-22", time: "9:00 Thứ Tư", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 4, title: "GIỚI THIỆU VỀ GIAO DỊCH HỢP ĐỒNG TƯƠNG LAI", category: "derivative", date: "2026-04-25", time: "8:30 Thứ Sáu", format: "Trực tuyến" },
  { id: 5, title: "PHƯƠNG PHÁP GIAO DỊCH LƯỚT SÓNG", category: "basic-trade", date: "2026-04-28", time: "14:00 Thứ Hai", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 6, title: "TÌM HIỂU VỀ TRÁI PHIẾU CHÍNH PHỦ VÀ TRÁI PHIẾU DOANH NGHIỆP", category: "bond", date: "2026-05-02", time: "9:00 Thứ Sáu", format: "Trực tuyến" },
  { id: 7, title: "CHIẾN LƯỢC ĐẦU TƯ GIÁ TRỊ", category: "basic-invest", date: "2026-05-05", time: "8:00 Thứ Hai", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 8, title: "MỤC TIÊU GIAO DỊCH VÀ QUẢN TRỊ RỦI RO", category: "basic-trade", date: "2026-05-08", time: "14:00 Thứ Năm", format: "Trực tuyến" },
  { id: 9, title: "PHÂN TÍCH CƠ BẢN CỔ PHIẾU NIÊM YẾT", category: "stock", date: "2026-05-12", time: "9:00 Thứ Hai", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 10, title: "QUYỀN CHỌN VÀ CHỨNG QUYỀN CÓ BẢO ĐẢM", category: "derivative", date: "2026-05-15", time: "8:30 Thứ Năm", format: "Trực tuyến" },
  { id: 11, title: "ĐẦU TƯ CHỨNG CHỈ QUỸ VÀ ETF", category: "other", date: "2026-05-18", time: "14:00 Thứ Hai", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 12, title: "QUẢN LÝ DANH MỤC ĐẦU TƯ HIỆU QUẢ", category: "basic-invest", date: "2026-05-20", time: "9:00 Thứ Tư", format: "Trực tuyến" },
  { id: 13, title: "KỸ THUẬT ĐỌC BIỂU ĐỒ NẾN NHẬT BẢN", category: "basic-trade", date: "2026-05-22", time: "8:00 Thứ Sáu", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 14, title: "ĐÁNH GIÁ DOANH NGHIỆP NIÊM YẾT QUA BÁO CÁO TÀI CHÍNH", category: "stock", date: "2026-05-25", time: "14:00 Thứ Hai", format: "Trực tuyến" },
  { id: 15, title: "THỊ TRƯỜNG TRÁI PHIẾU XANH VÀ TRÁI PHIẾU BỀN VỮNG", category: "bond", date: "2026-05-28", time: "9:00 Thứ Năm", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 16, title: "CHIẾN LƯỢC HEDGING VỚI HỢP ĐỒNG PHÁI SINH", category: "derivative", date: "2026-06-01", time: "8:30 Thứ Hai", format: "Trực tuyến" },
  { id: 17, title: "TÌM HIỂU VỀ THỊ TRƯỜNG VÀNG VÀ HÀNG HÓA", category: "other", date: "2026-06-04", time: "14:00 Thứ Tư", format: "Trực tiếp – Trung tâm đào tạo Sở GDCK" },
  { id: 18, title: "TÂM LÝ GIAO DỊCH VÀ KỶ LUẬT ĐẦU TƯ", category: "basic-invest", date: "2026-06-07", time: "9:00 Thứ Bảy", format: "Trực tuyến" },
];

const bannerSlides = [
  {
    image: banner1,
    tag: "Sắp diễn ra",
    title: "Khóa đào tạo: Kiến thức cơ bản về đầu tư chứng khoán cho người mới",
    time: "15/04/2026 – 8:00 Thứ Ba",
    format: "Trực tiếp – Trung tâm đào tạo Sở GDCK",
  },
  {
    image: banner2,
    tag: "Sắp diễn ra",
    title: "Hội thảo: Phân tích kỹ thuật căn bản trong giao dịch chứng khoán",
    time: "18/04/2026 – 14:00 Thứ Sáu",
    format: "Trực tuyến",
  },
  {
    image: banner3,
    tag: "Sắp diễn ra",
    title: "Khóa đào tạo: Giới thiệu về giao dịch hợp đồng tương lai",
    time: "25/04/2026 – 8:30 Thứ Sáu",
    format: "Trực tuyến",
  },
];

function formatDateBadge(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();
  return { day, month, year };
}

export default function TrainingPrograms() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchTopic, setSearchTopic] = useState("all");
  const [searchDate, setSearchDate] = useState("");

  // Auto-rotate banner every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const filteredCourses = useMemo(() => {
    let result = [...coursesData];

    // Category filter from sidebar
    if (activeCategory !== "all") {
      result = result.filter((c) => c.category === activeCategory);
    }

    // Topic filter from search bar
    if (searchTopic !== "all") {
      result = result.filter((c) => c.category === searchTopic);
    }

    // Keyword filter
    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase();
      result = result.filter((c) => c.title.toLowerCase().includes(kw));
    }

    // Date filter
    if (searchDate) {
      result = result.filter((c) => c.date === searchDate);
    }

    // Sort newest first
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return result;
  }, [activeCategory, searchKeyword, searchTopic, searchDate]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <MarketTicker />

      <main className="pt-28">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
            <span>/</span>
            <span className="text-primary font-medium">Chương trình đào tạo</span>
          </nav>
        </div>

        {/* Banner Carousel */}
        <div className="container mx-auto px-4 mb-8">
          <div className="relative rounded-xl overflow-hidden h-[340px] md:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={bannerSlides[currentSlide].image}
                  alt="Training banner"
                  className="w-full h-full object-cover"
                  width={1920}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-3xl">
                  <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-red-600 text-white text-sm font-bold mb-4 animate-pulse">
                    {bannerSlides[currentSlide].tag}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {bannerSlides[currentSlide].title}
                  </h2>
                  <div className="flex flex-col gap-2 text-white/90">
                    <div className="flex items-center gap-2 text-base md:text-lg">
                      <Clock className="h-5 w-5 text-amber-400" />
                      <span className="font-semibold">{bannerSlides[currentSlide].time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base md:text-lg">
                      <MapPin className="h-5 w-5 text-amber-400" />
                      <span className="font-semibold">{bannerSlides[currentSlide].format}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide nav arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {bannerSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentSlide ? "bg-white scale-110" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-4 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo từ khóa..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <select
                  value={searchTopic}
                  onChange={(e) => setSearchTopic(e.target.value)}
                  className="pl-10 pr-8 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white appearance-none min-w-[220px]"
                >
                  <option value="all">Tất cả chủ đề</option>
                  {categories.slice(1).map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary min-w-[180px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Sidebar + Course Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar - Categories */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden sticky top-28">
                <div className="bg-primary px-5 py-4">
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Khóa đào tạo
                  </h3>
                </div>
                <div className="py-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-5 py-3 text-sm transition-colors border-l-4 ${
                        activeCategory === cat.id
                          ? "bg-primary/10 text-primary font-semibold border-primary"
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary border-transparent"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Course Grid */}
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">
                  {categories.find((c) => c.id === activeCategory)?.label} ({filteredCourses.length})
                </h2>
              </div>

              {filteredCourses.length === 0 ? (
                <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
                  <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Không tìm thấy khóa đào tạo phù hợp.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredCourses.map((course) => {
                    const { day, month, year } = formatDateBadge(course.date);
                    return (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow p-4 flex gap-4 cursor-pointer group"
                      >
                        {/* Date Badge */}
                        <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-lg flex flex-col items-center justify-center text-white shadow-sm">
                          <span className="text-xl font-bold leading-none">{day}</span>
                          <span className="text-[10px] font-medium mt-0.5">{month}/{year}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-primary group-hover:text-primary/80 transition-colors leading-snug line-clamp-2 mb-1.5">
                            {course.title}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{course.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span className="truncate">{course.format}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
