import { useState } from "react";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "react-router-dom";
import { ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import leader1 from "@/assets/leaders/leader-1.jpg";
import leader2 from "@/assets/leaders/leader-2.jpg";
import leader3 from "@/assets/leaders/leader-3.jpg";
import leader4 from "@/assets/leaders/leader-4.jpg";
import leader5 from "@/assets/leaders/leader-5.jpg";

interface CareerItem {
  period: string;
  role: string;
}

interface Leader {
  id: number;
  name: string;
  title: string;
  gender: "Ông" | "Bà";
  photo: string;
  education: string[];
  career: CareerItem[];
}

const leaders: Leader[] = [
  {
    id: 1,
    name: "Lương Hải Sinh",
    title: "Chủ tịch Hội đồng thành viên",
    gender: "Ông",
    photo: leader1,
    education: ["Thạc sĩ Quản trị kinh doanh, Đại học Sunderland, Anh."],
    career: [
      { period: "07/2015 - 06/2016", role: "Phó Tổng Giám đốc, Công ty Mua bán nợ DATC" },
      { period: "06/2016 - 10/2019", role: "Thành viên Hội đồng thành viên, Tổng Giám đốc, Công ty Mua bán nợ DATC" },
      { period: "10/2019 - 01/2023", role: "Chủ tịch Hội đồng quản trị, Ngân hàng Phát triển Việt Nam" },
      { period: "11/2019 - 01/2023", role: "Tham gia Ban Chấp hành, Ban Thường vụ và giữ chức Bí thư Đảng ủy Ngân hàng Phát triển Việt Nam" },
      { period: "10/2020 - 01/2023", role: "Ủy viên Ban Chấp hành Đảng bộ Khối Doanh nghiệp Trung ương" },
      { period: "02/2023 - 02/2024", role: "Phó Chủ tịch Ủy ban Chứng khoán Nhà nước" },
      { period: "03/2024 - đến nay", role: "Chủ tịch Hội đồng thành viên Sở Giao dịch Chứng khoán Việt Nam" },
    ],
  },
  {
    id: 2,
    name: "Lê Xuân Hải",
    title: "Thành viên Hội đồng thành viên, Tổng Giám đốc",
    gender: "Ông",
    photo: leader2,
    education: [
      "Thạc sỹ Quản trị kinh doanh, Đại học Benedictine.",
      "Lý luận chính trị: Cao cấp.",
      "Quản lý hành chính nhà nước: Cao cấp.",
    ],
    career: [
      { period: "04/2010 - 06/2015", role: "Phó Trưởng phòng, Phòng Chính sách tổng hợp, Cục Tài chính doanh nghiệp, Bộ Tài chính" },
      { period: "07/2015 - 09/2016", role: "Phó Chánh Văn phòng, Văn phòng, Cục Tài chính doanh nghiệp, Bộ Tài chính" },
      { period: "10/2016 - 09/2020", role: "Chánh Văn phòng, Văn phòng, Cục Tài chính doanh nghiệp, Bộ Tài chính" },
      { period: "10/2020 - 02/2025", role: "Phó Cục trưởng, Cục Tài chính doanh nghiệp, Bộ Tài chính" },
      { period: "03/2025 - 06/2025", role: "Phó Cục trưởng, Cục Phát triển doanh nghiệp nhà nước, Bộ Tài chính" },
      { period: "07/2025 - đến nay", role: "Thành viên Hội đồng thành viên, Tổng Giám đốc Sở Giao dịch Chứng khoán Việt Nam" },
    ],
  },
  {
    id: 3,
    name: "Lê Trung Sơn",
    title: "Thành viên Hội đồng thành viên",
    gender: "Ông",
    photo: leader3,
    education: [
      "Cử nhân Kế toán, chuyên ngành Kiểm toán, Đại học Kinh tế quốc dân.",
      "Cử nhân Luật, Đại học Luật Hà Nội.",
      "Thạc sỹ Thương mại, chuyên ngành Tài chính, Đại học Macquarie, Úc.",
    ],
    career: [
      { period: "07/2010 - 02/2011", role: "Kiểm toán viên, công tác tại Công ty TNHH Kiểm toán Deloitte Việt Nam" },
      { period: "03/2013 - 10/2016", role: "Chuyên viên, Phòng Quản lý tài chính doanh nghiệp giao thông, vận tải và xây dựng, Cục Tài chính doanh nghiệp, Bộ Tài chính" },
      { period: "10/2016 - 01/2021", role: "Phó trưởng phòng, Phòng Quản lý tài chính doanh nghiệp giao thông, vận tải và xây dựng, Cục Tài chính doanh nghiệp, Bộ Tài chính" },
      { period: "01/2021 - 09/2021", role: "Phó Chánh Văn phòng, Văn phòng, Cục Tài chính doanh nghiệp, Bộ Tài chính" },
      { period: "09/2021 - 01/2024", role: "Chánh Văn phòng, Văn phòng, Cục Tài chính doanh nghiệp, Bộ Tài chính" },
      { period: "01/2024 - đến nay", role: "Thành viên Hội đồng thành viên Sở Giao dịch Chứng khoán Việt Nam" },
    ],
  },
  {
    id: 4,
    name: "Nguyễn Quang Thương",
    title: "Phó Tổng Giám đốc",
    gender: "Ông",
    photo: leader4,
    education: [
      "Thạc sỹ Tin học, ĐHBK ISPJAE, Cuba.",
      "Tiến sỹ Quản trị kinh doanh, ngành Tài chính, Đại học Old Dominion, Hoa Kỳ.",
    ],
    career: [
      { period: "02/1997 - 01/2013", role: "Công tác tại Kho bạc Nhà nước" },
      { period: "01/2013 - 09/2014", role: "Công tác tại Ủy ban Chứng khoán Nhà nước" },
      { period: "09/2014 - 08/2016", role: "Phó Vụ trưởng Vụ quản lý các Công ty quản lý quỹ và Quỹ đầu tư chứng khoán, Ủy ban Chứng khoán Nhà nước" },
      { period: "09/2016 - 07/2021", role: "Phó Vụ trưởng Vụ Phát triển thị trường chứng khoán, Ủy ban Chứng khoán Nhà nước" },
      { period: "08/2021 - đến nay", role: "Phó Tổng Giám đốc Sở Giao dịch Chứng khoán Việt Nam" },
    ],
  },
  {
    id: 5,
    name: "Nguyễn Tiến Dũng",
    title: "Phó Tổng Giám đốc",
    gender: "Ông",
    photo: leader5,
    education: [
      "Thạc sỹ Kinh tế ngành Quản trị kinh doanh, Đại học Tài chính - Ngân hàng Hà Nội.",
    ],
    career: [
      { period: "11/1996 - 09/1999", role: "Công tác tại Viện Nghiên cứu kinh tế Việt Nam, Ủy ban Khoa học xã hội" },
      { period: "09/1999 - 03/2004", role: "Công tác tại Trung tâm Nghiên cứu khoa học và Đào tạo Chứng khoán, Ủy ban Chứng khoán Nhà nước" },
      { period: "03/2004 - 05/2006", role: "Phó Trưởng phòng, Trung tâm Nghiên cứu khoa học và Đào tạo Chứng khoán, Ủy ban Chứng khoán Nhà nước" },
      { period: "05/2006 - 06/2009", role: "Trưởng phòng Hành chính - Tổng hợp, Trung tâm Giao dịch Chứng khoán Hà Nội" },
      { period: "06/2009 - 02/2012", role: "Ủy viên Hội đồng quản trị, Trưởng Ban Kiểm soát, Sở Giao dịch Chứng khoán Hà Nội" },
      { period: "02/2012 - 12/2013", role: "Phó Chánh Văn phòng Ủy ban Chứng khoán Nhà nước" },
      { period: "12/2013 - 06/2023", role: "Chánh Văn phòng Ủy ban Chứng khoán Nhà nước" },
      { period: "06/2023 - đến nay", role: "Phó Tổng Giám đốc Sở Giao dịch Chứng khoán Việt Nam" },
    ],
  },
];

// Layout positions for the zigzag pattern matching the reference image
const layoutPositions = [
  { photoSide: "left" as const, row: 0 },
  { photoSide: "right" as const, row: 1 },
  { photoSide: "left" as const, row: 2 },
  { photoSide: "right" as const, row: 3 },
  { photoSide: "left" as const, row: 4 },
];

export default function LeadershipTeam() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />
      <ScrollToTop />

      <main className="pt-[121px]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500 leading-none">
              <Link to="/" className="hover:text-[#003366] transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Giới thiệu</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Ban lãnh đạo</span>
            </nav>
          </div>
        </div>


        {/* Content */}
        <div className="bg-slate-100 pb-16">
          <div className="container mx-auto px-4 py-10 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] text-center mb-12 uppercase tracking-wide">
              Ban lãnh đạo
            </h2>

            {/* Zigzag Leader Cards */}
            <div className="relative">
              {leaders.map((leader, index) => {
                const pos = layoutPositions[index];
                const isLeft = pos.photoSide === "left";

                return (
                  <motion.div
                    key={leader.id}
                    className="relative mb-16 last:mb-0"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className={`flex flex-col md:flex-row items-center ${isLeft ? "" : "md:flex-row-reverse"}`}>
                      {/* Photo */}
                      <motion.div
                        className="flex-shrink-0 relative z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white ring-4 ring-cyan-200/50">
                          <img
                            src={leader.photo}
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>

                      {/* Horizontal connector between photo and info */}
                      <div className="hidden md:block w-12 h-px bg-slate-300 flex-shrink-0" />

                      {/* Info */}
                      <motion.div
                        className={`relative z-10 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm max-w-sm ${isLeft ? "md:text-left" : "md:text-right"} text-center`}
                        initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                      >
                        <div className={`w-12 h-0.5 bg-[#003366] mb-2 ${isLeft ? "md:mx-0" : "md:ml-auto"} mx-auto`} />
                        <p className="text-[#003366] font-bold text-lg">
                          {leader.gender} {leader.name}
                        </p>
                        <p className="text-slate-600 text-sm mt-1">{leader.title}</p>
                        <button
                          onClick={() => setSelectedLeader(leader)}
                          className="text-orange-500 hover:text-orange-600 text-sm italic mt-2 inline-block transition-colors cursor-pointer"
                        >
                          Chi tiết tiểu sử
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Bio Detail Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#003366] text-white p-5 rounded-t-xl flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50 flex-shrink-0">
                  <img src={selectedLeader.photo} alt={selectedLeader.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold">
                    {selectedLeader.gender} {selectedLeader.name}
                  </h3>
                  <p className="text-white/70 text-sm">{selectedLeader.title}</p>
                </div>
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5">
                {/* Education */}
                <div className="mb-6">
                  <h4 className="font-bold text-[#003366] text-base mb-2 border-l-4 border-orange-500 pl-3">
                    Trình độ chuyên môn
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedLeader.education.map((edu, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-1.5 flex-shrink-0">•</span>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career */}
                <div>
                  <h4 className="font-bold text-[#003366] text-base mb-3 border-l-4 border-orange-500 pl-3">
                    Quá trình công tác
                  </h4>
                  <div className="relative">
                    <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-200" />
                    {selectedLeader.career.map((item, i) => (
                      <div key={i} className="relative pl-7 pb-4 last:pb-0">
                        <div className="absolute left-0.5 top-1.5 w-3 h-3 rounded-full bg-[#003366] border-2 border-white shadow-sm" />
                        <p className="text-xs font-semibold text-[#003366] mb-0.5">{item.period}</p>
                        <p className="text-sm text-slate-600">{item.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
