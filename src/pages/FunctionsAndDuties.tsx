import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const vnxDuties = [
  "Xây dựng chiến lược, kế hoạch đầu tư phát triển, kế hoạch sản xuất kinh doanh 05 năm và kế hoạch sản xuất kinh doanh hàng năm để trình cấp có thẩm quyền phê duyệt theo quy định;",
  "Xây dựng và ban hành các quy chế về niêm yết chứng khoán, giao dịch chứng khoán, công bố thông tin, thành viên của Sở Giao dịch Chứng khoán Việt Nam và các quy chế nghiệp vụ khác liên quan đến tổ chức và hoạt động thị trường giao dịch chứng khoán; ban hành tiêu chí giám sát giao dịch; ban hành chỉ tiêu báo cáo giám sát giao dịch áp dụng cho thành viên của Sở Giao dịch Chứng khoán Việt Nam sau khi được Ủy ban Chứng khoán Nhà nước chấp thuận;",
  "Chấp thuận, hủy bỏ tư cách thành viên của Sở Giao dịch Chứng khoán Việt Nam; quản lý, giám sát, kiểm tra, xử lý vi phạm của thành viên theo quy định của pháp luật chứng khoán và làm trung gian hòa giải theo yêu cầu của thành viên khi phát sinh tranh chấp liên quan đến hoạt động giao dịch chứng khoán;",
  "Giám sát Sở Giao dịch Chứng khoán Hà Nội, Sở Giao dịch Chứng khoán thành phố Hồ Chí Minh thực hiện các quy chế hoạt động nghiệp vụ theo quy định và thực hiện nhiệm vụ giám sát theo quy định; giám sát chung hoạt động giao dịch chứng khoán, hoạt động công bố thông tin của tổ chức niêm yết, tổ chức đăng ký giao dịch và nhà đầu tư thuộc đối tượng công bố thông tin; giám sát tổ chức niêm yết, tổ chức đăng ký giao dịch và nhà đầu tư hoạt động trên các thị trường giao dịch chứng khoán theo quy định của pháp luật;",
  "Xây dựng kế hoạch phát triển hệ thống công nghệ thông tin, công nghệ mới, sản phẩm mới; trực tiếp triển khai thực hiện hoặc giao Sở Giao dịch Chứng khoán Hà Nội, Sở Giao dịch Chứng khoán thành phố Hồ Chí Minh triển khai thực hiện;",
  "Hỗ trợ phát triển thị trường chứng khoán thông qua việc đào tạo, tuyên truyền, phổ biến kiến thức; cung cấp dịch vụ về thông tin thị trường và thông tin liên quan đến chứng khoán niêm yết, chứng khoán đăng ký giao dịch; cung cấp dịch vụ phát triển hạ tầng công nghệ cho thị trường chứng khoán và các dịch vụ liên quan khác theo quy định tại Điều lệ tổ chức và hoạt động;",
  "Hợp tác quốc tế về chứng khoán và thị trường chứng khoán với các Sở Giao dịch Chứng khoán trên thế giới, các tổ chức quốc tế;",
  "Quản lý, giám sát Sở Giao dịch Chứng khoán Hà Nội và Sở Giao dịch Chứng khoán thành phố Hồ Chí Minh theo quy định của pháp luật chứng khoán, pháp luật doanh nghiệp, pháp luật quản lý, sử dụng vốn nhà nước đầu tư vào sản xuất, kinh doanh tại doanh nghiệp và Điều lệ tổ chức và hoạt động;",
  "Báo cáo, kiến nghị Ủy ban Chứng khoán Nhà nước các biện pháp ứng phó, khắc phục sự cố, sự kiện, biến động ảnh hưởng đến an toàn, ổn định và tính toàn vẹn của thị trường giao dịch chứng khoán; vi phạm của thành viên của Sở Giao dịch Chứng khoán Việt Nam; vi phạm của nhà đầu tư, tổ chức niêm yết, tổ chức đăng ký giao dịch theo quy định của pháp luật;",
  "Các nhiệm vụ khác theo quy định của pháp luật và Điều lệ tổ chức và hoạt động của Sở Giao dịch Chứng khoán Việt Nam.",
];

const hoseDuties = [
  "Tổ chức, vận hành thị trường giao dịch cổ phiếu và thị trường giao dịch các loại chứng khoán khác theo quy định của pháp luật;",
  "Giám sát hoạt động giao dịch chứng khoán; giám sát hoạt động công bố thông tin của tổ chức niêm yết, tổ chức đăng ký giao dịch và nhà đầu tư thuộc đối tượng công bố thông tin; giám sát việc tuân thủ nghĩa vụ của thành viên của Sở Giao dịch Chứng khoán Việt Nam theo quy định của pháp luật chứng khoán;",
  "Đầu tư, triển khai phát triển hệ thống công nghệ thông tin, công nghệ mới và phát triển sản phẩm mới theo nhiệm vụ được giao;",
  "Cảnh báo, kiểm soát, hạn chế giao dịch chứng khoán theo quy định của pháp luật và quy chế của Sở Giao dịch Chứng khoán Việt Nam;",
  "Tạm ngừng, đình chỉ giao dịch đối với một hoặc một số chứng khoán trong trường hợp giá, khối lượng giao dịch chứng khoán có biến động bất thường, tổ chức niêm yết, tổ chức đăng ký giao dịch không có biện pháp khắc phục nguyên nhân dẫn đến việc chứng khoán bị đưa vào diện cảnh báo, kiểm soát, hạn chế giao dịch hoặc trong trường hợp cần thiết để bảo vệ quyền, lợi ích hợp pháp của nhà đầu tư và bảo đảm ổn định, an toàn của thị trường chứng khoán;",
  "Chấp thuận, thay đổi, hủy bỏ niêm yết, đăng ký giao dịch chứng khoán và giám sát việc duy trì điều kiện niêm yết chứng khoán của các tổ chức niêm yết;",
  "Kiểm tra, xử lý vi phạm đối với tổ chức niêm yết, đăng ký giao dịch theo quy chế của Sở Giao dịch Chứng khoán Việt Nam;",
  "Cung cấp dịch vụ đấu giá, đấu thầu; dịch vụ về thông tin thị trường và thông tin liên quan đến chứng khoán giao dịch; dịch vụ phát triển hạ tầng công nghệ cho thị trường chứng khoán và các dịch vụ liên quan khác theo quy định tại Điều lệ tổ chức và hoạt động của Sở Giao dịch Chứng khoán thành phố Hồ Chí Minh;",
  "Tuyên truyền, phổ biến kiến thức về chứng khoán và thị trường chứng khoán cho nhà đầu tư;",
  "Báo cáo Sở Giao dịch Chứng khoán Việt Nam, báo cáo và kiến nghị Ủy ban Chứng khoán Nhà nước xử lý các hành vi vi phạm của nhà đầu tư, tổ chức niêm yết, tổ chức đăng ký giao dịch theo quy định của pháp luật;",
  "Ban hành các quy trình để triển khai các quy chế hoạt động nghiệp vụ trong phạm vi nhiệm vụ được giao;",
  "Các nhiệm vụ khác theo quy định của pháp luật và Điều lệ tổ chức và hoạt động của Sở Giao dịch Chứng khoán thành phố Hồ Chí Minh.",
];

const hnxDuties = [
  "Tổ chức, vận hành thị trường giao dịch chứng khoán phái sinh, thị trường giao dịch trái phiếu và thị trường giao dịch các loại chứng khoán khác theo quy định của pháp luật;",
  "Giám sát hoạt động giao dịch chứng khoán; giám sát hoạt động công bố thông tin của tổ chức niêm yết, tổ chức đăng ký giao dịch và nhà đầu tư thuộc đối tượng công bố thông tin; giám sát việc tuân thủ nghĩa vụ của thành viên của Sở giao dịch Chứng khoán Việt Nam theo quy định của pháp luật chứng khoán;",
  "Đầu tư, triển khai phát triển hệ thống công nghệ thông tin, công nghệ mới và phát triển sản phẩm mới theo nhiệm vụ được giao;",
  "Cảnh báo, kiểm soát, hạn chế giao dịch chứng khoán theo quy định của pháp luật và quy chế của Sở giao dịch Chứng khoán Việt Nam;",
  "Tạm ngừng, đình chỉ giao dịch đối với một hoặc một số chứng khoán trong trường hợp giá, khối lượng giao dịch chứng khoán có biến động bất thường, tổ chức niêm yết, tổ chức đăng ký giao dịch không có biện pháp khắc phục nguyên nhân dẫn đến việc chứng khoán bị đưa vào diện cảnh báo, kiểm soát, hạn chế giao dịch hoặc trong trường hợp cần thiết để bảo vệ quyền, lợi ích hợp pháp của nhà đầu tư và bảo đảm ổn định, an toàn của thị trường chứng khoán;",
  "Chấp thuận, thay đổi, hủy bỏ niêm yết, đăng ký giao dịch chứng khoán và giám sát việc duy trì điều kiện niêm yết chứng khoán của các tổ chức niêm yết;",
  "Kiểm tra, xử lý vi phạm đối với tổ chức niêm yết, tổ chức đăng ký giao dịch theo quy chế của Sở giao dịch Chứng khoán Việt Nam;",
  "Cung cấp dịch vụ đấu giá, đấu thầu; dịch vụ về thông tin thị trường và thông tin liên quan đến chứng khoán giao dịch; dịch vụ phát triển hạ tầng công nghệ cho thị trường chứng khoán và các dịch vụ liên quan khác theo quy định tại Điều lệ tổ chức và hoạt động của Sở giao dịch Chứng khoán Hà Nội;",
  "Tuyên truyền, phổ biến kiến thức về chứng khoán và thị trường chứng khoán cho nhà đầu tư;",
  "Báo cáo Sở giao dịch Chứng khoán Việt Nam, báo cáo và kiến nghị Ủy ban Chứng khoán Nhà nước xử lý các hành vi vi phạm của nhà đầu tư, tổ chức niêm yết, tổ chức đăng ký giao dịch theo quy định của pháp luật;",
  "Ban hành các quy trình để triển khai các quy chế hoạt động nghiệp vụ trong phạm vi nhiệm vụ được giao;",
  "Các nhiệm vụ khác theo quy định của pháp luật và Điều lệ tổ chức và hoạt động của Sở giao dịch Chứng khoán Hà Nội.",
];

interface SectionProps {
  title: string;
  subtitle?: string;
  items: string[];
  accentColor: string;
  index: number;
}

function DutySection({ title, subtitle, items, accentColor, index }: SectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
    >
      <div className={`px-6 py-4 border-l-4`} style={{ borderLeftColor: accentColor }}>
        <h2 className="text-lg md:text-xl font-heading font-bold text-[#003366]">{title}</h2>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
      <div className="px-6 pb-6">
        <ul className="space-y-3 mt-4">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm md:text-base text-slate-700 leading-relaxed">
              <span
                className="mt-2 h-2 w-2 min-w-[8px] rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function FunctionsAndDuties() {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />
      <ScrollToTop />

      <main className="pt-[121px]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200 sticky top-[121px] z-30">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500 leading-none">
              <Link to="/" className="hover:text-[#003366] transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Giới thiệu</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Chức năng, nhiệm vụ</span>
            </nav>
          </div>
        </div>

        {/* Hero Block */}
        <div className="relative overflow-hidden bg-[#003366]" style={{ height: 110 }}>
          <svg
            className="absolute right-0 top-0 h-full w-auto"
            viewBox="0 0 300 100"
            preserveAspectRatio="xMaxYMin slice"
            fill="none"
            style={{ minWidth: '400px' }}
          >
            <defs>
              <linearGradient id="swooshFunctions" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" fill="url(#swooshFunctions)" opacity="0.15" />
            <path d="M120,0 Q200,30 250,60 T300,100" stroke="url(#swooshFunctions)" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Chức năng, nhiệm vụ
            </h1>
            <p className="text-white/60 text-sm">
              Chức năng, nhiệm vụ của Sở GDCK Việt Nam và các đơn vị trực thuộc liên quan
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-slate-100 pb-16">
          <div className="container mx-auto px-4 py-10 max-w-4xl">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8"
            >
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                Sở Giao dịch Chứng khoán Việt Nam và các công ty con có chức năng tổ chức thị trường giao dịch chứng khoán theo quy định của pháp luật chứng khoán; các chức năng khác theo quy định của pháp luật và Điều lệ tổ chức và hoạt động của Sở Giao dịch Chứng khoán Việt Nam.
              </p>
            </motion.div>

            <div className="space-y-8">
              <DutySection
                title="Sở Giao dịch Chứng khoán Việt Nam (VNX)"
                subtitle="Nhiệm vụ chính"
                items={vnxDuties}
                accentColor="#003366"
                index={0}
              />

              <DutySection
                title="Sở Giao dịch Chứng khoán TP. Hồ Chí Minh (HOSE)"
                subtitle="Nhiệm vụ chính"
                items={hoseDuties}
                accentColor="#E8881C"
                index={1}
              />

              <DutySection
                title="Sở Giao dịch Chứng khoán Hà Nội (HNX)"
                subtitle="Nhiệm vụ chính"
                items={hnxDuties}
                accentColor="#2E7D32"
                index={2}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
