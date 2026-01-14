import { motion } from "framer-motion";
import { ChevronRight, PlayCircle, Clock, User } from "lucide-react";
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

const podcastItems = [
  { title: "Xây dựng hệ sinh thái sản phẩm kết nối thúc đẩy tính thanh khoản", category: "Thông tin chuyên sâu", date: "12 tháng 12 năm 2025", type: "article", image: "https://images.unsplash.com/photo-1513366208864-87536b8bd7b4?w=400&h=300&fit=crop" },
  { title: "Phân tích xu hướng thị trường Q1/2025", category: "Podcast", date: "10 tháng 01 năm 2026", type: "podcast", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop" },
  { title: "Chiến lược đầu tư dài hạn cho năm 2026", category: "Podcast", date: "08 tháng 01 năm 2026", type: "podcast", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop" },
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

        {/* Member Announcements & Podcasts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Member News */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-card"
          >
            <h3 className="text-lg font-display font-semibold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#1e3a5f] rounded-full" />
              Tin công bố của thành viên
            </h3>
            <div className="space-y-3">
              {newsItems.map((news, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-3 rounded-lg hover:bg-slate-100 transition-colors group border-b border-slate-200 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-xs font-bold text-[#1e3a5f] bg-slate-100 px-2 py-1 rounded">
                      {news.code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-[#1e3a5f] group-hover:text-primary transition-colors line-clamp-1">
                        {news.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {news.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-sm text-[#1e3a5f] font-medium mt-4 hover:gap-2 transition-all">
              Xem tất cả <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Podcasts & Articles - Card Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {podcastItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-card border-2 border-white hover:shadow-hover transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#1e3a5f]/70 mb-2">
                    {item.category} | {item.date}
                  </p>
                  <h4 className="text-sm font-semibold text-[#1e3a5f] line-clamp-3 mb-3">
                    {item.title}
                  </h4>
                  <a href="#" className="inline-flex items-center gap-1 text-sm text-orange-500 font-medium hover:gap-2 transition-all">
                    Đọc thêm <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
