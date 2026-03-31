import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
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
}

const articlesData: Article[] = [
  {
    id: 1,
    title: "Thông cáo báo chí về việc ký MOU giữa VNX và FTSE",
    description: "Sở Giao dịch Chứng khoán Việt Nam (VNX) vui mừng thông báo đã ký kết Biên bản Ghi nhớ (MOU) với Công ty FTSE International Limited (FTSE).",
    image: imgP0_1,
    date: "15/09/2025",
  },
  {
    id: 2,
    title: "Các Sở GDCK khu vực ASEAN ký Biên bản hợp tác (MOU) về sản phẩm Chứng chỉ Lưu ký (Depositary Receipts - DR)",
    description: "Các Sở GDCK khu vực ASEAN ký Biên bản hợp tác (MOU) hợp tác về sản phẩm Chứng chỉ Lưu ký (Depositary Receipts - DR).",
    image: imgP0_2,
    date: "20/11/2024",
  },
  {
    id: 3,
    title: "Sở GDCK Việt Nam tiếp và làm việc với Đoàn công tác Văn phòng Ủy ban Chứng khoán Lào (LSCO)",
    description: "Sáng 13/11/2024, tại trụ sở Sở Giao dịch Chứng khoán Việt Nam (VNX), VNX đã tiếp và làm việc với Đoàn công tác Văn phòng Ủy ban Chứng khoán Lào (LSCO). Chuyến làm việc này nằm trong khuôn khổ các hoạt động hợp tác trong lĩnh vực chứng khoán giữa UBCKNN và LSCO.",
    image: imgP1_1,
    date: "13/11/2024",
  },
  {
    id: 4,
    title: "Sở GDCK Việt Nam làm việc với Tổ chức FTSE Russell về nâng hạng thị trường chứng khoán Việt Nam",
    description: "Sáng ngày 06/11/2024, tại trụ sở của VNX, Chủ tịch Hội đồng thành viên Lương Hải Sinh đã chủ trì buổi tiếp, làm việc và trao đổi thông tin với đoàn công tác của FTSE Russell về các hoạt động nhằm thúc đẩy việc nâng hạng thị trường chứng khoán Việt Nam.",
    image: imgP2_1,
    date: "06/11/2024",
  },
  {
    id: 5,
    title: "Sở Giao dịch chứng khoán Việt Nam và Sở Giao dịch chứng khoán Singapore ký Biên bản ghi nhớ nâng tầm hợp tác",
    description: "Sở Giao dịch chứng khoán Việt Nam và Sở Giao dịch chứng khoán Singapore ký Biên bản ghi nhớ nâng tầm hợp tác.",
    image: imgP2_1,
    date: "15/10/2024",
  },
  {
    id: 6,
    title: "Bộ trưởng Bộ Tài chính Hồ Đức Phớc làm việc với Ngân hàng Mizuho",
    description: "Bộ trưởng Bộ Tài chính Hồ Đức Phớc làm việc với Ngân hàng Mizuho.",
    image: imgP3_1,
    date: "20/09/2024",
  },
  {
    id: 7,
    title: "Chủ tịch UBCKNN làm việc với Thống đốc Cơ quan giám sát tài chính Hàn Quốc",
    description: "Chủ tịch UBCKNN làm việc với Thống đốc Cơ quan giám sát tài chính Hàn Quốc.",
    image: imgP4_1,
    date: "10/08/2024",
  },
  {
    id: 8,
    title: "Sở GDCK Việt Nam tham dự cuộc họp lần thứ 36 của các Tổng Giám đốc các Sở GDCK ASEAN",
    description: "Sở GDCK Việt Nam tham dự cuộc họp lần thứ 36 của các Tổng Giám đốc các Sở GDCK ASEAN.",
    image: imgP5_1,
    date: "15/06/2024",
  },
  {
    id: 9,
    title: "Sở GDCK Việt Nam trở thành thành viên chính thức của Liên đoàn các Sở Giao dịch Chứng khoán Thế giới – WFE",
    description: "Sở GDCK Việt Nam trở thành thành viên chính thức của Liên đoàn các Sở Giao dịch Chứng khoán Thế giới – WFE.",
    image: imgP6_1,
    date: "20/03/2024",
  },
  {
    id: 10,
    title: "Tiếp và làm việc với đoàn công tác cấp cao của Ủy ban Chứng khoán Lào",
    description: "Tiếp và làm việc với đoàn công tác cấp cao của Ủy ban Chứng khoán Lào.",
    image: imgP7_1,
    date: "10/01/2024",
  },
  {
    id: 11,
    title: "Sở Giao dịch Chứng khoán Luxembourg và Sở Giao dịch Chứng khoán Việt Nam hợp tác thúc đẩy phát triển tài chính bền vững",
    description: "Sở Giao dịch Chứng khoán Luxembourg và Sở Giao dịch Chứng khoán Việt Nam hợp tác thúc đẩy phát triển tài chính bền vững.",
    image: imgP8_1,
    date: "15/11/2023",
  },
  {
    id: 12,
    title: "Thông cáo báo chí Phiên họp các Tổng Giám đốc các Sở Giao dịch Chứng Khoán ASEAN lần thứ 35",
    description: "Thông cáo báo chí Phiên họp các Tổng Giám đốc các Sở Giao dịch Chứng Khoán ASEAN lần thứ 35.",
    image: imgP9_1,
    date: "02/12/2022",
  },
  {
    id: 13,
    title: "Hoạt động hội nhập quốc tế của Sở GDCK Việt Nam",
    description: "Hoạt động hội nhập quốc tế của Sở GDCK Việt Nam.",
    image: imgP6_1,
    date: "10/09/2022",
  },
  {
    id: 14,
    title: "Sở GDCK Việt Nam trở thành Thành viên của Hiệp hội các Sở GDCK khu vực ASEAN – ASEAN Exchanges",
    description: "Sở GDCK Việt Nam trở thành Thành viên của Hiệp hội các Sở GDCK khu vực ASEAN – ASEAN Exchanges.",
    image: imgP6_1,
    date: "05/06/2022",
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

  const latestArticle = articlesData[0];

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

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Hợp tác quốc tế
            </h1>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </div>

          {/* Featured / Latest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 cursor-pointer group"
            onClick={() => setSelectedArticle(latestArticle)}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={latestArticle.image}
                alt={latestArticle.title}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3">
                  Mới nhất
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                  {latestArticle.title}
                </h2>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{latestArticle.date}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Article List */}
          <div className="space-y-4">
            {paginatedData.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 md:gap-6 p-4 rounded-xl bg-card border border-border/50 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="flex-shrink-0 w-28 h-20 md:w-40 md:h-28 rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-2 hidden md:block">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className="hidden md:flex items-center">
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
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
