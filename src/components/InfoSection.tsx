import { motion } from "framer-motion";
import { ChevronRight, PlayCircle, Clock, User } from "lucide-react";
import vnxLogo from "@/assets/vnx-logo.jpg";

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
  { title: "VNX công bố quy chế giao dịch mới áp dụng từ Q2/2026", date: "14/01/2026" },
  { title: "Báo cáo thường niên 2025 - Những con số ấn tượng", date: "13/01/2026" },
  { title: "Chương trình đào tạo nhà đầu tư chuyên nghiệp", date: "12/01/2026" },
  { title: "Hợp tác quốc tế: VNX ký kết MOU với SGX", date: "11/01/2026" },
];

const podcastItems = [
  { title: "Phân tích xu hướng thị trường Q1/2025", author: "TS. Nguyễn Văn An", duration: "45:30", type: "Podcast" },
  { title: "Chiến lược đầu tư dài hạn cho năm 2025", author: "ThS. Trần Thị Bình", duration: "8 phút", type: "Bài viết" },
];

export default function InfoSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Main Grid - HKEX Style */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* VNX Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-card/90 backdrop-blur-sm rounded-lg overflow-hidden border border-border/50 group hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 relative overflow-hidden bg-secondary/30">
                <img
                  src={vnxLogo}
                  alt="VNX"
                  className="w-full h-48 md:h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 bg-primary/20 text-primary rounded text-xs font-medium mb-4">
                  About
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                  {infoBlocks[0].title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {infoBlocks[0].description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                  Read more <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Event Cards */}
          <div className="space-y-6">
            {infoBlocks.slice(1).map((block, index) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card/90 backdrop-blur-sm rounded-lg p-5 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded text-xs font-medium mb-3">
                  Event
                </span>
                <h4 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {block.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {block.description}
                </p>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                  View details <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Member Announcements & Podcasts - HKEX Style */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Member News */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border border-border/50"
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Member Announcements
            </h3>
            <div className="space-y-3">
              {newsItems.map((news, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors group border-b border-border/30 last:border-0"
                >
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {news.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {news.date}
                  </p>
                </a>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-sm text-primary mt-4 hover:gap-2 transition-all">
              View all <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Podcasts & Articles - HKEX Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border border-border/50"
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Insights & Media
            </h3>
            <div className="space-y-4">
              {podcastItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                    <PlayCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-1 bg-primary/20 text-primary">
                      {item.type}
                    </span>
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {item.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
