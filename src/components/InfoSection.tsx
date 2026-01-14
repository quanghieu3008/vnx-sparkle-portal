import { motion } from "framer-motion";
import { ChevronRight, Play, Clock, User } from "lucide-react";
import vnxIntro from "@/assets/vnx-intro.jpg";
import event25Years from "@/assets/event-25years.jpg";
import eventMember2025 from "@/assets/event-member2025.jpg";

interface InfoBlock {
  id: number;
  title: string;
  description: string;
  image?: string;
  type: "intro" | "event" | "news" | "podcast";
}

const infoBlocks: InfoBlock[] = [
  {
    id: 1,
    title: "Giới thiệu về Sở Giao dịch Chứng khoán Việt Nam",
    description: "VNX được thành lập với sứ mệnh phát triển thị trường vốn Việt Nam trở thành trung tâm tài chính hàng đầu khu vực, đảm bảo tính minh bạch và hiệu quả.",
    type: "intro",
  },
  {
    id: 2,
    title: "Hành trình 25 năm - Nâng giá trị, Vững niềm tin",
    description: "Kỷ niệm 25 năm hoạt động thị trường chứng khoán Việt Nam với những thành tựu đáng tự hào và cam kết phát triển bền vững.",
    type: "event",
  },
  {
    id: 3,
    title: "Hội nghị Thành viên 2025",
    description: "Đà Nẵng, ngày 14 tháng 3 năm 2025 - Sự kiện quy tụ các thành viên thị trường, định hướng phát triển năm mới.",
    type: "event",
  },
];

const newsItems = [
  { code: "TV 001", title: "VNX công bố quy chế giao dịch mới áp dụng từ Q2/2026", date: "14/01/2026" },
  { code: "TV 002", title: "Báo cáo thường niên 2025 - Những con số ấn tượng", date: "13/01/2026" },
  { code: "TV 003", title: "Chương trình đào tạo nhà đầu tư chuyên nghiệp", date: "12/01/2026" },
  { code: "TV 004", title: "Hợp tác quốc tế: VNX ký kết MOU với SGX", date: "11/01/2026" },
];

const regulationItems = [
  { code: "QĐ 01", title: "Quy định về niêm yết chứng khoán tại Sở GDCK Việt Nam", date: "10/01/2026" },
  { code: "QĐ 02", title: "Quy chế giao dịch chứng khoán phái sinh", date: "08/01/2026" },
  { code: "QĐ 03", title: "Quy định về công bố thông tin trên thị trường chứng khoán", date: "05/01/2026" },
];

const circularItems = [
  { code: "TT 01", title: "Thông tư hướng dẫn hoạt động đăng ký, lưu ký chứng khoán", date: "12/01/2026" },
  { code: "TT 02", title: "Thông tư quy định về giao dịch điện tử trên TTCK", date: "09/01/2026" },
  { code: "TT 03", title: "Thông tư về quản lý quỹ đầu tư chứng khoán", date: "06/01/2026" },
];

const podcastItems = [
  { title: "Phân tích xu hướng thị trường Q1/2025", category: "Phân tích", author: "TS. Nguyễn Văn An", duration: "45:30", type: "podcast", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop" },
  { title: "Chiến lược đầu tư dài hạn cho năm 2025", category: "Chiến lược", author: "ThS. Trần Thị Bình", duration: "8 phút", type: "article", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop" },
  { title: "Cơ hội từ thị trường phái sinh", category: "Phái sinh", author: "TS. Lê Hoàng Cường", duration: "32:15", type: "podcast", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
  { title: "ESG và xu hướng đầu tư bền vững", category: "ESG", author: "TS. Phạm Thị Dung", duration: "12 phút", type: "article", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
];

export default function InfoSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* VNX Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-glass rounded-2xl overflow-hidden shadow-card group hover:shadow-hover transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 relative overflow-hidden">
                <img
                  src={vnxIntro}
                  alt="VNX"
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium mb-4">
                  Giới thiệu
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                  {infoBlocks[0].title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {infoBlocks[0].description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                  Đọc thêm <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Event Cards */}
          <div className="space-y-6">
            {/* Event 25 Years */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group h-40"
            >
              <img
                src={event25Years}
                alt="Hành trình 25 năm"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 bg-orange-500/20 backdrop-blur-sm text-orange-400 rounded-full text-xs font-medium mb-2">
                  Sự kiện
                </span>
                <h4 className="text-xl font-display font-bold text-white mb-1">
                  {infoBlocks[1].title}
                </h4>
                <p className="text-sm text-white/80 line-clamp-2">
                  {infoBlocks[1].description}
                </p>
              </div>
            </motion.div>

            {/* Event Member 2025 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group h-40"
            >
              <img
                src={eventMember2025}
                alt="Hội nghị Thành viên 2025"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 bg-orange-500/20 backdrop-blur-sm text-orange-400 rounded-full text-xs font-medium mb-2">
                  Sự kiện
                </span>
                <h4 className="text-xl font-display font-bold text-white mb-1">
                  {infoBlocks[2].title}
                </h4>
                <p className="text-sm text-white/80 line-clamp-2">
                  {infoBlocks[2].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Member Announcements, Regulations & Circulars - 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Member News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-5 shadow-card border-8 border-white ring-1 ring-slate-200"
          >
            <h3 className="text-base font-display font-semibold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#1e3a5f] rounded-full" />
              Tin công bố của thành viên
            </h3>
            <div className="space-y-2">
              {newsItems.map((news, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-2 rounded-lg hover:bg-slate-100 transition-colors group border-b border-slate-200 last:border-0"
                >
                  <div className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-xs font-bold text-[#1e3a5f] bg-slate-100 px-2 py-0.5 rounded">
                      {news.code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-medium text-[#1e3a5f] group-hover:text-primary transition-colors line-clamp-1">
                        {news.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {news.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-xs text-[#1e3a5f] font-medium mt-3 hover:gap-2 transition-all">
              Xem tất cả <ChevronRight className="h-3 w-3" />
            </a>
          </motion.div>

          {/* Regulations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-5 shadow-card border-8 border-white ring-1 ring-slate-200"
          >
            <h3 className="text-base font-display font-semibold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full" />
              Thông báo quy định
            </h3>
            <div className="space-y-2">
              {regulationItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-2 rounded-lg hover:bg-slate-100 transition-colors group border-b border-slate-200 last:border-0"
                >
                  <div className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      {item.code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-medium text-[#1e3a5f] group-hover:text-primary transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {item.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-xs text-[#1e3a5f] font-medium mt-3 hover:gap-2 transition-all">
              Xem tất cả <ChevronRight className="h-3 w-3" />
            </a>
          </motion.div>

          {/* Circulars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-5 shadow-card border-8 border-white ring-1 ring-slate-200"
          >
            <h3 className="text-base font-display font-semibold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500 rounded-full" />
              Thông tư
            </h3>
            <div className="space-y-2">
              {circularItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-2 rounded-lg hover:bg-slate-100 transition-colors group border-b border-slate-200 last:border-0"
                >
                  <div className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                      {item.code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-medium text-[#1e3a5f] group-hover:text-primary transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {item.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-xs text-[#1e3a5f] font-medium mt-3 hover:gap-2 transition-all">
              Xem tất cả <ChevronRight className="h-3 w-3" />
            </a>
          </motion.div>
        </div>

        {/* Podcasts & Articles - 4 Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {podcastItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer border-8 border-white ring-1 ring-slate-200"
            >
              {/* Image with badge and play button */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                  item.type === "podcast" ? "bg-orange-500" : "bg-green-600"
                }`}>
                  {item.type === "podcast" ? "Podcast" : "Bài viết"}
                </span>
                {/* Play button for podcast */}
                {item.type === "podcast" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="p-4">
                <p className="text-xs font-medium text-orange-500 mb-2">
                  {item.category}
                </p>
                <h4 className="text-sm font-bold text-[#1e3a5f] line-clamp-2 mb-3">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 truncate">
                    <User className="h-3 w-3 flex-shrink-0" /> 
                    <span className="truncate">{item.author}</span>
                  </span>
                  <span className="flex items-center gap-1 flex-shrink-0">
                    <Clock className="h-3 w-3" /> {item.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
