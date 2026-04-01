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
    title: "Lịch sử phát triển của Sở Giao dịch Chứng khoán Việt Nam",
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
  { code: "005", title: "Decision on the suspension of the settlement of commercial business cases of People's court of Region 2 - Hanoi", date: "14/01/2026" },
  { code: "005", title: "Quyết định đình chỉ giải quyết vụ án kinh doanh thương mại", date: "14/01/2026" },
  { code: "042", title: "Amended charter", date: "13/01/2026" },
  { code: "042", title: "Resolution of Board of Directors approval for the charter capital increase and the amendment of the Charter", date: "13/01/2026" },
  { code: "042", title: "Sửa đổi điều lệ công ty", date: "13/01/2026" },
];

const regulationItems = [
  { code: "QĐ 01", title: "Quy định về niêm yết chứng khoán tại Sở GDCK Việt Nam", date: "10/01/2026" },
  { code: "QĐ 02", title: "Quy chế giao dịch chứng khoán phái sinh", date: "08/01/2026" },
  { code: "QĐ 03", title: "Quy định về công bố thông tin trên thị trường chứng khoán", date: "05/01/2026" },
  { code: "QĐ 04", title: "Quy định về thành viên giao dịch và thành viên bù trừ", date: "03/01/2026" },
  { code: "QĐ 05", title: "Quy chế hoạt động của thị trường trái phiếu doanh nghiệp", date: "01/01/2026" },
];

const circularItems = [
  { code: "TT 01", title: "Thông tư hướng dẫn hoạt động đăng ký, lưu ký chứng khoán", date: "12/01/2026" },
  { code: "TT 02", title: "Thông tư quy định về giao dịch điện tử trên TTCK", date: "09/01/2026" },
  { code: "TT 03", title: "Thông tư về quản lý quỹ đầu tư chứng khoán", date: "06/01/2026" },
  { code: "TT 04", title: "Thông tư hướng dẫn về phát hành trái phiếu doanh nghiệp", date: "04/01/2026" },
  { code: "TT 05", title: "Thông tư quy định về giám sát giao dịch chứng khoán", date: "02/01/2026" },
];

const podcastItems = [
  { title: "Phân tích xu hướng thị trường Q1/2025", category: "Phân tích", author: "TS. Nguyễn Văn An", duration: "45:30", type: "podcast", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop" },
  { title: "Chiến lược đầu tư dài hạn cho năm 2025", category: "Chiến lược", author: "ThS. Trần Thị Bình", duration: "8 phút", type: "article", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop" },
  { title: "Cơ hội từ thị trường phái sinh", category: "Phái sinh", author: "TS. Lê Hoàng Cường", duration: "32:15", type: "podcast", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
  { title: "ESG và xu hướng đầu tư bền vững", category: "ESG", author: "TS. Phạm Thị Dung", duration: "12 phút", type: "article", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
];

export default function InfoSection() {
  return (
    <section className="py-0">
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
              className="relative rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group h-52"
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
              className="relative rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group h-52"
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

        {/* Member Registration Block - Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-12 relative rounded-2xl overflow-hidden shadow-xl group border border-slate-200"
        >
          {/* Light Background with Subtle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-cyan-50/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#1e3a5f]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-3/5 p-8 md:p-12 lg:p-14">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1e3a5f]/10 to-cyan-500/10 text-[#1e3a5f] rounded-full text-sm font-semibold mb-6 border border-[#1e3a5f]/20">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  Thành viên VNX
                </span>
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#1e3a5f] mb-5 leading-tight"
              >
                Đăng ký Thành viên
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-[#1e3a5f]">
                  Giao dịch Chứng khoán
                </span>
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed max-w-xl"
              >
                Tham gia cùng hàng trăm tổ chức tài chính hàng đầu. Nhận quyền truy cập đầy đủ vào nền tảng giao dịch hiện đại và hỗ trợ chuyên nghiệp từ VNX.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-8 mb-8"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">150+</div>
                  <div className="text-sm text-slate-500">Thành viên</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">25+</div>
                  <div className="text-sm text-slate-500">Năm hoạt động</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">24/7</div>
                  <div className="text-sm text-slate-500">Hỗ trợ</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white px-8 py-4 rounded-xl font-bold text-base hover:from-[#2d5a8f] hover:to-[#1e3a5f] transition-all shadow-lg shadow-[#1e3a5f]/25 hover:shadow-[#1e3a5f]/40 hover:scale-105 transform"
                >
                  Đăng ký ngay <ChevronRight className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-[#1e3a5f]/30 text-[#1e3a5f] px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#1e3a5f]/5 hover:border-[#1e3a5f]/50 transition-all"
                >
                  Xem hướng dẫn
                </a>
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="lg:w-2/5 p-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
                className="relative"
              >
                {/* Outer Ring */}
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-[#1e3a5f]/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                  <div className="absolute w-4 h-4 bg-cyan-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 shadow-lg shadow-cyan-500/50" />
                  <div className="absolute w-3 h-3 bg-orange-400 rounded-full bottom-4 right-4 shadow-lg shadow-orange-400/50" />
                </div>
                
                {/* Middle Ring */}
                <div className="absolute inset-4 rounded-full border border-[#1e3a5f]/10 animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute w-2 h-2 bg-[#1e3a5f]/40 rounded-full top-2 right-8" />
                </div>
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center border border-[#1e3a5f]/20 shadow-2xl shadow-[#1e3a5f]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 md:h-18 md:w-18 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Member Announcements, Regulations & Circulars - 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Member News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-50 rounded-xl p-5 shadow-card border-8 border-slate-50 ring-1 ring-slate-200"
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
            className="bg-slate-50 rounded-xl p-5 shadow-card border-8 border-slate-50 ring-1 ring-slate-200"
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
            className="bg-slate-50 rounded-xl p-5 shadow-card border-8 border-slate-50 ring-1 ring-slate-200"
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
              className="bg-slate-50 rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer border-8 border-slate-50 ring-1 ring-slate-200"
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
