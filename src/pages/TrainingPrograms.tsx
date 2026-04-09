import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Clock, MapPin, Calendar, BookOpen, ChevronLeft, ChevronDown, ChevronUp, ExternalLink, X } from "lucide-react";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import banner1 from "@/assets/training-banner-1.jpg";
import banner2 from "@/assets/training-banner-2.jpg";
import banner3 from "@/assets/training-banner-3.jpg";
import banner4 from "@/assets/training-banner-4.jpg";
import seminar1 from "@/assets/seminar-1.jpg";
import seminar2 from "@/assets/seminar-2.jpg";
import seminar3 from "@/assets/seminar-3.jpg";
import seminar4 from "@/assets/seminar-4.jpg";
import seminar5 from "@/assets/seminar-5.jpg";
import seminar6 from "@/assets/seminar-6.jpg";
import seminar7 from "@/assets/seminar-7.jpg";
import seminar8 from "@/assets/seminar-8.jpg";

// ==================== DATA ====================

const bannerSlides = [
  {
    image: banner1,
    tag: "Sắp diễn ra",
    title: "Hội thảo: Dòng vốn và cơ hội đầu tư trong bối cảnh toàn cầu hóa",
    time: "09:00 - 11:30, 15/07/2025",
    format: "Trực tiếp – Trung tâm đào tạo Sở GDCK",
  },
  {
    image: banner2,
    tag: "Sắp diễn ra",
    title: "Khóa đào tạo: Kiến thức cơ bản về đầu tư chứng khoán",
    time: "14:00 - 16:30, 20/07/2025",
    format: "Trực tuyến qua Zoom",
  },
  {
    image: banner3,
    tag: "Sắp diễn ra",
    title: "Hội thảo: Chuyển đổi số trong thị trường chứng khoán",
    time: "08:30 - 12:00, 25/07/2025",
    format: "Trực tiếp – Trung tâm Hội nghị Quốc gia",
  },
  {
    image: banner4,
    tag: "Sắp diễn ra",
    title: "Khóa đào tạo: Phân tích kỹ thuật nâng cao",
    time: "09:00 - 17:00, 01/08/2025",
    format: "Trực tiếp – Trung tâm đào tạo Sở GDCK",
  },
];

const courseCategories = [
  { id: "all", label: "Tất cả khóa đào tạo" },
  { id: "basic-invest", label: "Kiến thức cơ bản về đầu tư" },
  { id: "basic-trading", label: "Kiến thức cơ bản về giao dịch" },
  { id: "stock", label: "Tìm hiểu về khối thị trường Cổ phiếu" },
  { id: "bond", label: "Tìm hiểu về khối thị trường Trái phiếu" },
  { id: "derivative", label: "Tìm hiểu về khối thị trường phái sinh" },
  { id: "other", label: "Tìm hiểu về khối thị trường khác" },
];

const coursesData = [
  { id: 1, title: "CÁC LOẠI HÌNH ĐẦU TƯ", category: "basic-invest", date: "2025-07-11", time: "Tối 2,4,6", monthYear: "07/2025" },
  { id: 2, title: "PHÂN TÍCH CƠ BẢN CHO NHÀ ĐẦU TƯ MỚI", category: "basic-invest", date: "2025-07-18", time: "Tối 3,5", monthYear: "07/2025" },
  { id: 3, title: "QUẢN LÝ DANH MỤC ĐẦU TƯ CÁ NHÂN", category: "basic-invest", date: "2025-08-05", time: "Thứ 7, Chủ nhật", monthYear: "08/2025" },
  { id: 4, title: "CÁC LOẠI SẢN PHẨM GIAO DỊCH", category: "basic-trading", date: "2025-07-16", time: "Thứ 7, Chủ nhật", monthYear: "07/2025" },
  { id: 5, title: "MỤC TIÊU GIAO DỊCH", category: "basic-trading", date: "2025-07-30", time: "Thứ 7", monthYear: "07/2025" },
  { id: 6, title: "KỸ THUẬT ĐẶT LỆNH HIỆU QUẢ", category: "basic-trading", date: "2025-08-13", time: "Tối 2,4,6", monthYear: "08/2025" },
  { id: 7, title: "CÁC THUẬT NGỮ CƠ BẢN CỦA THỊ TRƯỜNG CỔ PHIẾU", category: "stock", date: "2025-07-14", time: "Tối 3,5", monthYear: "07/2025" },
  { id: 8, title: "PHÂN TÍCH BÁO CÁO TÀI CHÍNH DOANH NGHIỆP", category: "stock", date: "2025-08-01", time: "Thứ 7, Chủ nhật", monthYear: "08/2025" },
  { id: 9, title: "ĐỊNH GIÁ CỔ PHIẾU BẰNG PHƯƠNG PHÁP P/E", category: "stock", date: "2025-08-20", time: "Tối 2,4,6", monthYear: "08/2025" },
  { id: 10, title: "CƠ BẢN VỀ TRÁI PHIẾU DOANH NGHIỆP", category: "bond", date: "2025-07-22", time: "Tối 3,5", monthYear: "07/2025" },
  { id: 11, title: "ĐÁNH GIÁ RỦI RO TRÁI PHIẾU", category: "bond", date: "2025-08-10", time: "Thứ 7", monthYear: "08/2025" },
  { id: 12, title: "GIỚI THIỆU VỀ GIAO DỊCH HỢP ĐỒNG TƯƠNG LAI", category: "derivative", date: "2025-07-16", time: "Thứ 7, Chủ nhật", monthYear: "07/2025" },
  { id: 13, title: "PHƯƠNG PHÁP GIAO DỊCH LƯỚT SÓNG", category: "derivative", date: "2025-08-06", time: "Tối 2,4,6", monthYear: "08/2025" },
  { id: 14, title: "CHIẾN LƯỢC PHÒNG VỆ VỚI PHÁI SINH", category: "derivative", date: "2025-08-25", time: "Tối 3,5", monthYear: "08/2025" },
  { id: 15, title: "CHỨNG QUYỀN CÓ ĐẢM BẢO", category: "other", date: "2025-07-28", time: "Thứ 7", monthYear: "07/2025" },
  { id: 16, title: "QUỸ ĐẦU TƯ ETF VÀ CHỨNG CHỈ QUỸ", category: "other", date: "2025-08-15", time: "Thứ 7, Chủ nhật", monthYear: "08/2025" },
  { id: 17, title: "ĐẦU TƯ VÀNG VÀ HÀNG HÓA", category: "other", date: "2025-09-01", time: "Tối 2,4,6", monthYear: "09/2025" },
  { id: 18, title: "PHÂN TÍCH KỸ THUẬT NÂNG CAO", category: "basic-trading", date: "2025-09-05", time: "Thứ 7, Chủ nhật", monthYear: "09/2025" },
];

const seminarsData = [
  { id: 1, title: "Dòng vốn và cơ hội đầu tư trong bối cảnh toàn cầu hóa", date: "15/07/2025", time: "09:00", image: seminar1, description: "Phân tích xu hướng dòng vốn toàn cầu và cơ hội đầu tư cho nhà đầu tư Việt Nam trong bối cảnh hội nhập kinh tế quốc tế.", org: "​" },
  { id: 2, title: "Chuyển đổi số trong thị trường chứng khoán", date: "20/07/2025", time: "14:00", image: seminar2, description: "Tìm hiểu về các công nghệ mới đang thay đổi cách thức giao dịch và quản lý đầu tư trên thị trường chứng khoán.", org: "HNX" },
  { id: 3, title: "Nâng cao nhận thức nhà đầu tư: Hướng tới nâng hạng thị trường chứng khoán", date: "25/07/2025", time: "08:30", image: seminar3, description: "Hội thảo chuyên đề về các tiêu chí nâng hạng thị trường và vai trò của nhà đầu tư trong quá trình này.", org: "​" },
  { id: 4, title: "Toàn cảnh thị trường chứng khoán Việt Nam: Cơ hội và thách thức", date: "01/08/2025", time: "09:00", image: seminar4, description: "Đánh giá toàn diện về thị trường chứng khoán Việt Nam, nhận diện cơ hội đầu tư và các rủi ro cần lưu ý.", org: "HOSE" },
  { id: 5, title: "Khám phá bí mật kỳ diệu của ngành chứng khoán dành cho người không chuyên", date: "10/08/2025", time: "14:00", image: seminar5, description: "Chương trình dành cho người mới bắt đầu, giúp hiểu rõ cách thức hoạt động của thị trường chứng khoán.", org: "​" },
  { id: 6, title: "Chiến lược đầu tư hiệu quả trong thị trường biến động", date: "18/08/2025", time: "09:00", image: seminar6, description: "Chia sẻ các chiến lược đầu tư linh hoạt giúp nhà đầu tư bảo toàn và tăng trưởng tài sản trong môi trường biến động.", org: "HNX" },
  { id: 7, title: "Nhận diện cơ hội đầu tư từ dữ liệu thị trường", date: "25/08/2025", time: "14:00", image: seminar7, description: "Hướng dẫn sử dụng dữ liệu và các công cụ phân tích để nhận diện cơ hội đầu tư tiềm năng.", org: "HOSE" },
  { id: 8, title: "Tác động của kinh tế vĩ mô đến thị trường chứng khoán Việt Nam", date: "05/09/2025", time: "08:30", image: seminar8, description: "Phân tích mối quan hệ giữa các chỉ số kinh tế vĩ mô và diễn biến thị trường chứng khoán.", org: "​" },
];

const documentBooks = [
  { id: 1, title: "Luật chứng khoán 2019", color: "from-[#1a3c6e] to-[#2d5a9e]" },
  { id: 2, title: "Nghị định hướng dẫn giao dịch", color: "from-[#8b2500] to-[#c44a1a]" },
  { id: 3, title: "Quy chế niêm yết & giao dịch", color: "from-[#2d5a3d] to-[#4a8c5c]" },
  { id: 4, title: "Quyền và nghĩa vụ Nhà đầu tư", color: "from-[#5c2d82] to-[#8b5fbf]" },
  { id: 5, title: "Phòng tránh gian lận thao túng", color: "from-[#8b6914] to-[#c9982a]" },
  { id: 6, title: "Sổ tay Nhà đầu tư", color: "from-[#1a5c5c] to-[#2d8a8a]" },
];

const faqData = [
  { q: "Tôi cần liên hệ ai khi gặp vấn đề về giao dịch?", a: "Quý nhà đầu tư có thể liên hệ trực tiếp công ty chứng khoán nơi mở tài khoản hoặc gọi đến đường dây nóng của Sở Giao dịch Chứng khoán qua số 1900-xxxx để được hỗ trợ." },
  { q: "Tôi cần điều kiện gì để mở tài khoản chứng khoán?", a: "Công dân Việt Nam từ 18 tuổi trở lên có CMND/CCCD hoặc hộ chiếu hợp lệ đều có thể mở tài khoản chứng khoán tại các công ty chứng khoán được cấp phép." },
  { q: "Cách đọc bảng giá chứng khoán cơ bản?", a: "Bảng giá hiển thị mã chứng khoán, giá tham chiếu, giá trần, giá sàn, giá mở cửa, giá cao nhất, giá thấp nhất, giá đóng cửa và khối lượng giao dịch. Màu xanh thể hiện tăng giá, đỏ thể hiện giảm giá, vàng là giá tham chiếu." },
  { q: "Làm thế nào để đăng ký tham gia hội thảo?", a: "Quý nhà đầu tư có thể đăng ký trực tuyến trên website VNX hoặc liên hệ trực tiếp qua email daotao@vnx.vn. Các hội thảo trực tuyến sẽ được gửi link tham gia qua email sau khi đăng ký thành công." },
  { q: "Phí giao dịch chứng khoán bao gồm những gì?", a: "Phí giao dịch thường bao gồm: phí môi giới (trả cho CTCK), phí giao dịch (trả cho Sở GDCK), thuế thu nhập cá nhân (0.1% giá trị bán) và phí lưu ký chứng khoán." },
  { q: "Thời gian giao dịch trên sàn chứng khoán là khi nào?", a: "Thời gian giao dịch từ thứ Hai đến thứ Sáu: Phiên sáng 9:00 - 11:30, Phiên chiều 13:00 - 14:45 (cổ phiếu) và 13:00 - 15:00 (phái sinh). Thị trường không giao dịch vào thứ Bảy, Chủ nhật và các ngày lễ." },
];

// ==================== COMPONENTS ====================

function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % bannerSlides.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[360px] md:h-[420px] rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        {bannerSlides.map((slide, i) =>
          i === current ? (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 px-[50px] py-[20px]">
                <span className="inline-block px-3 py-1 bg-red-600 text-white font-bold rounded-full mb-3 uppercase tracking-wider text-2xl">
                  {slide.tag}
                </span>
                <h2 className="text-white text-xl md:text-2xl font-bold leading-tight mb-3 lg:text-5xl">
                  {slide.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-white/90 text-sm">
                  <span className="flex items-center gap-1.5 text-base"><Clock className="h-4 w-4" />{slide.time}</span>
                  <span className="flex items-center gap-1.5 text-base"><MapPin className="h-4 w-4" />{slide.format}</span>
                </div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      {/* Dots */}
      <div className="absolute bottom-3 right-6 flex gap-2">
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

function DateBadge({ dateStr }: { dateStr: string }) {
  const d = new Date(dateStr);
  const day = d.getDate().toString().padStart(2, "0");
  const monthYear = `${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`;
  return (
    <div className="flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#8b1a1a] text-white text-center py-[11px]">
        <span className="font-bold leading-none text-3xl">{day}</span>
      </div>
      <div className="bg-[#b84a4a] text-white text-center border-t border-white/20 py-px">
        <span className="text-[10px] font-medium">{monthYear}</span>
      </div>
    </div>
  );
}

function BookCard({ book }: { book: typeof documentBooks[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, rotateY: -5 }}
      className="cursor-pointer group"
    >
      <div className={`bg-gradient-to-br ${book.color} rounded-lg p-5 h-52 flex flex-col justify-between shadow-lg group-hover:shadow-xl transition-shadow relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-3 h-full bg-white/10 rounded-l-lg" />
        <div className="absolute top-2 right-2 w-8 h-8 bg-white/10 rounded-full" />
        <div className="pl-4">
          <BookOpen className="h-6 w-6 text-white/60 mb-3" />
          <h4 className="text-white font-bold text-base leading-snug">{book.title}</h4>
        </div>
        <div className="pl-4 flex items-center gap-1 text-white/70 text-xs group-hover:text-white transition-colors">
          <span>Xem chi tiết</span>
          <ExternalLink className="h-3 w-3" />
        </div>
      </div>
    </motion.div>
  );
}

// ==================== MAIN PAGE ====================

export default function TrainingPrograms() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTopic, setSearchTopic] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedSeminar, setSelectedSeminar] = useState<typeof seminarsData[0] | null>(null);

  const filteredCourses = useMemo(() => {
    let filtered = [...coursesData];
    if (activeCategory !== "all") {
      filtered = filtered.filter((c) => c.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((c) => c.title.toLowerCase().includes(q));
    }
    if (searchTopic !== "all") {
      filtered = filtered.filter((c) => c.category === searchTopic);
    }
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeCategory, searchQuery, searchTopic]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <MarketTicker />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="gap-2 text-sm text-slate-500 mb-6 items-center justify-start flex flex-row py-[30px]">
            <a href="/" className="text-primary-foreground">Trang chủ</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-black">Góc Nhà đầu tư</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-primary-foreground">Chương trình đào tạo</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-6">Chương trình đào tạo</h1>

          {/* 1. Banner Carousel */}
          <section className="mb-10">
            <BannerCarousel />
          </section>

          {/* 2. Search Bar */}
          <section className="bg-white rounded-xl border border-slate-200 p-4 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo từ khóa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <select
                value={searchTopic}
                onChange={(e) => setSearchTopic(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white text-black"
              >
                <option value="all">Tất cả chủ đề</option>
                {courseCategories.slice(1).map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
              <input
                type="date"
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </section>

          {/* 3. Courses: Sidebar + Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-5 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Khóa đào tạo
            </h2>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-[#003366] text-white px-4 py-3 font-semibold text-base">
                    Danh mục khóa học
                  </div>
                  {courseCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-4 py-[31px] text-base border-b border-slate-100 transition-colors ${
                        activeCategory === cat.id
                          ? "bg-primary/10 font-semibold border-l-4 border-l-primary border-0 border-solid text-secondary"
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Course Grid with Date Badges */}
              <div className="flex-1">
                {filteredCourses.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Không tìm thấy khóa đào tạo phù hợp</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filteredCourses.map((course) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 bg-white rounded-lg border border-slate-200 p-3 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                      >
                        <DateBadge dateStr={course.date} />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-bold text-[#003366] group-hover:text-primary transition-colors leading-snug mb-1.5 uppercase">
                            {course.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 4. Seminars */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-5 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Hội thảo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {seminarsData.map((sem) => (
                <motion.div
                  key={sem.id}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="relative">
                    <img src={sem.image} alt={sem.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-2 left-2 right-2 flex justify-between text-xs text-white">
                      <span className="bg-black/50 px-2 py-1 rounded">{sem.date}</span>
                      <span className="bg-black/50 px-2 py-1 rounded">{sem.time}</span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-bold text-sm text-[#003366] mb-2 leading-snug line-clamp-2">{sem.title}</h3>
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2 flex-1">{sem.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{sem.org}</span>
                      <button
                        onClick={() => setSelectedSeminar(sem)}
                        className="text-xs text-primary font-semibold hover:underline"
                      >
                        Khám phá →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 5. Documents (Book-style) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-5 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Tài liệu
            </h2>
            <p className="text-sm text-slate-500 mb-5">Các quy định pháp luật, tài liệu hướng dẫn và những điều cần lưu ý dành cho nhà đầu tư.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {documentBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>

          {/* 6. FAQ */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-5 flex items-center gap-2 mx-[300px] text-center">
              <span className="text-primary text-2xl">​</span>
              {"\n"}                    Câu Hỏi Thường Gặp
            </h2>
            <div className="max-w-3xl space-y-2 text-justify text-sm mx-[300px]">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#003366] hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-lg text-left">{faq.q}</span>
                    {expandedFaq === i ? <ChevronUp className="h-4 w-4 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 flex-shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {expandedFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Seminar Detail Modal */}
      <AnimatePresence>
        {selectedSeminar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelectedSeminar(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedSeminar.image} alt={selectedSeminar.title} className="w-full h-52 object-cover" />
                <button onClick={() => setSelectedSeminar(null)} className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/70">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex gap-3 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{selectedSeminar.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{selectedSeminar.time}</span>
                </div>
                <h3 className="text-lg font-bold text-[#003366] mb-3">{selectedSeminar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{selectedSeminar.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">{selectedSeminar.org}</span>
                  <button className="px-4 py-2 bg-primary text-white text-sm rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Đăng ký tham gia
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
