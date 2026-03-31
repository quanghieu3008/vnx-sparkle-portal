import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, X, ArrowRight, Globe, MapPin, Users, Handshake, TrendingUp, FileSignature } from "lucide-react";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import imgP0_1 from "@/assets/cooperation/img_p0_1.jpg";
import imgP0_2 from "@/assets/cooperation/img_p0_2.jpg";
import imgP1_1 from "@/assets/cooperation/img_p1_1.jpg";
import imgP2_1 from "@/assets/cooperation/img_p2_1.jpg";
import imgP3_1 from "@/assets/cooperation/img_p3_1.jpg";
import imgP4_1 from "@/assets/cooperation/img_p4_1.jpg";
import imgP5_1 from "@/assets/cooperation/img_p5_1.jpg";
import imgP6_1 from "@/assets/cooperation/img_p6_1.jpg";
import imgP7_1 from "@/assets/cooperation/img_p7_1.jpg";
import imgP8_1 from "@/assets/cooperation/img_p8_1.jpg";
import imgP9_1 from "@/assets/cooperation/img_p9_1.jpg";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  tag?: string;
  location?: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    title: "Ký MOU giữa VNX và FTSE Russell",
    description: "Sở Giao dịch Chứng khoán Việt Nam (VNX) ký kết Biên bản Ghi nhớ (MOU) với Công ty FTSE International Limited, mở ra cơ hội hợp tác chiến lược nhằm thúc đẩy nâng hạng thị trường.",
    image: imgP0_1,
    date: "15/09/2025",
    tag: "Nổi bật",
    location: "Anh",
  },
  {
    id: 2,
    title: "Hợp tác sản phẩm Chứng chỉ Lưu ký (DR) khu vực ASEAN",
    description: "Các Sở GDCK khu vực ASEAN ký Biên bản hợp tác (MOU) về sản phẩm Depositary Receipts, tạo tiền đề cho giao dịch xuyên biên giới.",
    image: imgP0_2,
    date: "2024",
    tag: "ASEAN",
    location: "ASEAN",
  },
  {
    id: 3,
    title: "Sở GDCK Việt Nam tiếp và làm việc với Đoàn công tác Văn phòng Ủy ban Chứng khoán Lào (LSCO)",
    description: "Sáng 13/11/2024, tại trụ sở Sở Giao dịch Chứng khoán Việt Nam (VNX), VNX đã tiếp và làm việc với Đoàn công tác Văn phòng Ủy ban Chứng khoán Lào (LSCO). Chuyến làm việc này nằm trong khuôn khổ các hoạt động hợp tác trong lĩnh vực chứng khoán giữa UBCKNN và LSCO.",
    image: imgP1_1,
    date: "13/11/2024",
    location: "Việt Nam",
  },
  {
    id: 4,
    title: "Sở GDCK Việt Nam làm việc với Tổ chức FTSE Russell về nâng hạng thị trường chứng khoán Việt Nam",
    description: "Sáng ngày 06/11/2024, tại trụ sở của VNX, Chủ tịch Hội đồng thành viên Lương Hải Sinh đã chủ trì buổi tiếp, làm việc và trao đổi thông tin với đoàn công tác của FTSE Russell về các hoạt động nhằm thúc đẩy việc nâng hạng thị trường chứng khoán Việt Nam.",
    image: imgP2_1,
    date: "06/11/2024",
    location: "Việt Nam",
  },
  {
    id: 5,
    title: "Sở Giao dịch chứng khoán Việt Nam và Sở Giao dịch chứng khoán Singapore ký Biên bản ghi nhớ nâng tầm hợp tác",
    description: "Sở Giao dịch chứng khoán Việt Nam và Sở Giao dịch chứng khoán Singapore ký Biên bản ghi nhớ nâng tầm hợp tác.",
    image: imgP2_1,
    date: "15/10/2024",
    location: "Singapore",
  },
  {
    id: 6,
    title: "Bộ trưởng Bộ Tài chính Hồ Đức Phớc làm việc với Ngân hàng Mizuho",
    description: "Bộ trưởng Bộ Tài chính Hồ Đức Phớc làm việc với Ngân hàng Mizuho.",
    image: imgP3_1,
    date: "20/09/2024",
    location: "Nhật Bản",
  },
  {
    id: 7,
    title: "Chủ tịch UBCKNN làm việc với Thống đốc Cơ quan giám sát tài chính Hàn Quốc",
    description: "Chủ tịch UBCKNN làm việc với Thống đốc Cơ quan giám sát tài chính Hàn Quốc.",
    image: imgP4_1,
    date: "10/08/2024",
    location: "Hàn Quốc",
  },
  {
    id: 8,
    title: "Sở GDCK Việt Nam tham dự cuộc họp lần thứ 36 của các Tổng Giám đốc các Sở GDCK ASEAN",
    description: "Sở GDCK Việt Nam tham dự cuộc họp lần thứ 36 của các Tổng Giám đốc các Sở GDCK ASEAN.",
    image: imgP5_1,
    date: "15/06/2024",
    location: "ASEAN",
  },
  {
    id: 9,
    title: "Sở GDCK Việt Nam trở thành thành viên chính thức của Liên đoàn các Sở Giao dịch Chứng khoán Thế giới – WFE",
    description: "Sở GDCK Việt Nam trở thành thành viên chính thức của Liên đoàn các Sở Giao dịch Chứng khoán Thế giới – WFE.",
    image: imgP6_1,
    date: "20/03/2024",
    location: "Quốc tế",
  },
  {
    id: 10,
    title: "Tiếp và làm việc với đoàn công tác cấp cao của Ủy ban Chứng khoán Lào",
    description: "Tiếp và làm việc với đoàn công tác cấp cao của Ủy ban Chứng khoán Lào.",
    image: imgP7_1,
    date: "10/01/2024",
    location: "Việt Nam",
  },
  {
    id: 11,
    title: "Sở Giao dịch Chứng khoán Luxembourg và Sở Giao dịch Chứng khoán Việt Nam hợp tác thúc đẩy phát triển tài chính bền vững",
    description: "Sở Giao dịch Chứng khoán Luxembourg và Sở Giao dịch Chứng khoán Việt Nam hợp tác thúc đẩy phát triển tài chính bền vững.",
    image: imgP8_1,
    date: "15/11/2023",
    location: "Luxembourg",
  },
  {
    id: 12,
    title: "Thông cáo báo chí Phiên họp các Tổng Giám đốc các Sở Giao dịch Chứng Khoán ASEAN lần thứ 35",
    description: "Thông cáo báo chí Phiên họp các Tổng Giám đốc các Sở Giao dịch Chứng Khoán ASEAN lần thứ 35.",
    image: imgP9_1,
    date: "02/12/2022",
    location: "ASEAN",
  },
  {
    id: 13,
    title: "Hoạt động hội nhập quốc tế của Sở GDCK Việt Nam",
    description: "Hoạt động hội nhập quốc tế của Sở GDCK Việt Nam.",
    image: imgP6_1,
    date: "10/09/2022",
    location: "Việt Nam",
  },
  {
    id: 14,
    title: "Sở GDCK Việt Nam trở thành Thành viên của Hiệp hội các Sở GDCK khu vực ASEAN – ASEAN Exchanges",
    description: "Sở GDCK Việt Nam trở thành Thành viên của Hiệp hội các Sở GDCK khu vực ASEAN – ASEAN Exchanges.",
    image: imgP6_1,
    date: "05/06/2022",
    location: "ASEAN",
  },
];

const ITEMS_PER_PAGE = 10;

export default function InternationalCooperation() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const totalPages = Math.ceil(articlesData.length / ITEMS_PER_PAGE);
  const paginatedData = articlesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featuredArticles = articlesData.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketTicker />

      <main className="pt-28 pb-16 bg-[#eef1f6]">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
            <span>/</span>
            <span className="text-foreground font-medium">Hợp tác quốc tế</span>
          </nav>


          {/* Featured Events */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="text-[#f97415] w-[30px] h-[30px]" />
              <h2 className="text-[30px] font-bold text-[#1a212d]">Sự kiện hợp tác nổi bật</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative h-52 md:h-60 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {article.tag && (
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-md text-white bg-[#f97415]">
                        {article.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 text-xs text-[#65778B] mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      {article.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {article.location}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-[#1a212d] mb-2 line-clamp-2 group-hover:text-[#F97415] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#65778B] line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones Section - full width */}
        <div className="mb-10 py-10 bg-[#003366]">
          <div className="container mx-auto px-4">
            <h2 className="text-[28px] font-bold text-white text-center mb-2">Dấu mốc hội nhập quốc tế</h2>
            <p className="text-center text-slate-400 text-sm mb-8">Những thành tựu quan trọng trong hành trình hội nhập của VNX</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Users, title: "Thành viên WFE", desc: "VNX trở thành thành viên chính thức của Liên đoàn các Sở GDCK Thế giới (WFE)." },
                { icon: Handshake, title: "Thành viên ASEAN Exchanges", desc: "VNX là thành viên của Hiệp hội các Sở GDCK khu vực ASEAN." },
                { icon: TrendingUp, title: "MOU với FTSE Russell", desc: "Ký kết hợp tác chiến lược nhằm thúc đẩy nâng hạng TTCK Việt Nam." },
                { icon: FileSignature, title: "Hợp tác với SGX Singapore", desc: "Ký MOU nâng tầm hợp tác với Sở GDCK Singapore." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border rounded-xl p-5 transition-colors bg-[#0d3d6e] border-[#0e4475]"
                >
                  <div className="w-14 h-14 rounded-lg bg-[#f97415]/15 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-[#f97415]" />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-base">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Handshake className="w-[30px] h-[30px] text-[#f97415]" />
              <h2 className="text-[28px] font-bold text-[#1a212d]">Hoạt động hợp tác</h2>
            </div>
            <p className="text-sm text-[#65778B] italic">Các hoạt động hợp tác quốc tế tiêu biểu của VNX</p>
          </div>

          {/* Article List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paginatedData.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border overflow-hidden hover:shadow-md transition-all cursor-pointer group bg-[#fcfcfc] border-white"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="px-3 text-xs font-semibold text-white bg-[#113b64] py-[4px] rounded-none">
                      {article.date.split("/").pop()}
                    </span>
                    {article.location && (
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-[#d3691d] rounded-none">
                        {article.location}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-[#1a212d] line-clamp-2 group-hover:text-[#F97415] transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#65778B] line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                Trước
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:bg-accent"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Sau
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-56 md:h-72 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedArticle.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {selectedArticle.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedArticle.description}
                </p>
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
