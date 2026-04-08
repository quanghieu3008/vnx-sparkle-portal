import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Handshake, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Partner {
  id: number;
  name: string;
  date: string;
  agreement: string;
}

const partnersData: Partner[] = [
  { id: 1, name: "Sở Giao dịch Chứng khoán Campuchia", date: "26/02/2016", agreement: "Chia sẻ Thông tin; Mở rộng hợp tác" },
  { id: 2, name: "Sở Giao dịch Chứng khoán Bratislava", date: "12/07/2014", agreement: "Thiết lập cơ chế hợp tác dài hạn nhằm trao đổi nhân viên, chia sẻ thông tin về giao dịch trên thị trường hai nước, thông tin của DNNY và hoạt động công bố thông tin, hoạt động niêm yết…" },
  { id: 3, name: "Sở Giao dịch Hợp đồng tương lai Đài Loan TAIFEX", date: "27/05/2013", agreement: "Thiết lập cơ chế hợp tác dài hạn nhằm chia sẻ thông tin; Đào tạo tư vấn hỗ trợ phát triển sản phẩm và TTCK phái sinh tại VN." },
  { id: 4, name: "Sở Giao dịch Chứng khoán Lào", date: "10/05/2013", agreement: "Chia sẻ thông tin, hỗ trợ cung cấp thông tin, phát triển sản phẩm, hệ thống giao dịch, phát triển quản trị công ty, tổ chức hội nghị, hội thảo" },
  { id: 5, name: "Sở Giao dịch Chứng khoán Thượng Hải", date: "18/10/2012", agreement: "Thiết lập cơ chế hợp tác dài hạn nhằm chia sẻ thông tin; quản trị công ty; kiểm soát nội bộ, công bố thông tin;" },
  { id: 6, name: "Sở Giao dịch Chứng khoán Thâm Quyến", date: "18/05/2011", agreement: "Thiết lập cơ chế hợp tác dài hạn nhằm chia sẻ thông tin thị trường; thiết lập cơ chế trao đổi thường xuyên giữa lãnh đạo hai Sở; đào tạo cán bộ; hợp tác tổ chức hội thảo chuyên đề; nghiên cứu tìm hiểu về khả năng niêm yết chéo và kết nối hệ thống." },
  { id: 7, name: "Sở Giao dịch Chứng khoán Nhật Bản", date: "13/12/2010", agreement: "Công bố thông tin theo yêu cầu; Tham vấn khả năng hợp tác để phát triển hệ thống giao dịch với mục tiêu khuyến khích tính ổn định và hiệu quả của hai thị trường; Tổ chức chương trình đào tạo về nội dung công nghệ thông tin; Chia sẻ thông tin" },
  { id: 8, name: "Sở Giao dịch Chứng khoán Thái Lan", date: "28/08/2014", agreement: "Cung cấp thông tin theo yêu cầu của các bên; Thúc đẩy hoạt động niêm yết chéo; Thúc đẩy hoạt động đầu tư và các cơ hội kinh doanh" },
  { id: 9, name: "Sở Giao dịch Chứng khoán Hàn Quốc", date: "14/11/2008", agreement: "Cung cấp một cơ chế hợp tác dài hạn, tạo điều kiện thuận lợi cho sự phát triển các kênh thông tin và thúc đẩy mối quan hệ dài lâu giữa hai bên, vì những lợi ích của mỗi bên trong ngành dịch vụ tài chính ở cả Hàn Quốc và Việt Nam" },
  { id: 10, name: "Sở Giao dịch Chứng khoán London", date: "10/03/2008", agreement: "Trao đổi thông tin về niêm yết song song tại hai thị trường, cung cấp thông tin và trao đổi cán bộ để mô tả chức năng hoạt động của các thị trường hai bên đang vận hành" },
  { id: 11, name: "Sở Giao dịch Chứng khoán Singapore", date: "15/09/2007", agreement: "Chia sẻ thông tin và kinh nghiệm phát triển thị trường; hỗ trợ đào tạo cán bộ; hợp tác nghiên cứu phát triển sản phẩm mới" },
  { id: 12, name: "Sở Giao dịch Chứng khoán Malaysia", date: "20/06/2007", agreement: "Hợp tác trao đổi thông tin, đào tạo nhân lực; chia sẻ kinh nghiệm quản lý và phát triển thị trường chứng khoán" },
  { id: 13, name: "Sở Giao dịch Chứng khoán Indonesia", date: "12/03/2007", agreement: "Thiết lập quan hệ hợp tác song phương; chia sẻ kinh nghiệm vận hành và giám sát thị trường" },
  { id: 14, name: "Sở Giao dịch Chứng khoán Philippines", date: "08/11/2006", agreement: "Trao đổi thông tin về quy chế niêm yết và giao dịch; chia sẻ kinh nghiệm phát triển thị trường" },
  { id: 15, name: "Sở Giao dịch Chứng khoán Mumbai", date: "22/07/2006", agreement: "Hợp tác chia sẻ thông tin và kinh nghiệm phát triển thị trường chứng khoán; đào tạo cán bộ" },
  { id: 16, name: "Sở Giao dịch Chứng khoán Đức", date: "15/04/2006", agreement: "Hỗ trợ kỹ thuật, trao đổi kinh nghiệm về hệ thống giao dịch và giám sát thị trường" },
  { id: 17, name: "Sở Giao dịch Chứng khoán Warsaw", date: "10/01/2006", agreement: "Chia sẻ kinh nghiệm phát triển thị trường; trao đổi cán bộ; hợp tác đào tạo" },
  { id: 18, name: "Sở Giao dịch Chứng khoán New York", date: "05/09/2005", agreement: "Hợp tác chiến lược về chia sẻ thông tin; đào tạo và phát triển nguồn nhân lực" },
];

const ITEMS_PER_PAGE = 10;

const countryFlags: Record<string, string> = {
  "Campuchia": "🇰🇭",
  "Bratislava": "🇸🇰",
  "Đài Loan": "🇹🇼",
  "Lào": "🇱🇦",
  "Thượng Hải": "🇨🇳",
  "Thâm Quyến": "🇨🇳",
  "Nhật Bản": "🇯🇵",
  "Thái Lan": "🇹🇭",
  "Hàn Quốc": "🇰🇷",
  "London": "🇬🇧",
  "Singapore": "🇸🇬",
  "Malaysia": "🇲🇾",
  "Indonesia": "🇮🇩",
  "Philippines": "🇵🇭",
  "Mumbai": "🇮🇳",
  "Đức": "🇩🇪",
  "Warsaw": "🇵🇱",
  "New York": "🇺🇸",
};

function getFlag(name: string): string {
  for (const [key, flag] of Object.entries(countryFlags)) {
    if (name.includes(key)) return flag;
  }
  return "🌐";
}

export default function InternationalPartners() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(partnersData.length / ITEMS_PER_PAGE);
  const visibleData = partnersData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-[#f4f6f9]">
      <Header />
      <MarketTicker />

      {/* Breadcrumb */}
      <div className="sticky top-[121px] z-30 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container mx-auto px-4">
          <Breadcrumb className="py-3">
            <BreadcrumbList className="text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-[#003366] hover:underline">Trang chủ</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/hop-tac-quoc-te" className="text-[#003366] hover:underline">Hợp tác quốc tế</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-500">Đối tác quốc tế</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#003366] flex items-center justify-center">
              <Handshake className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#003366]">Đối tác quốc tế</h1>
          </div>
          <p className="text-slate-500 ml-[52px]">
            Danh sách các đối tác quốc tế đã ký kết thỏa thuận hợp tác với Sở Giao dịch Chứng khoán Việt Nam
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Tổng đối tác", value: partnersData.length, icon: Globe, color: "bg-blue-50 text-blue-600" },
            { label: "Châu Á", value: partnersData.filter(p => ["Campuchia","Lào","Thượng Hải","Thâm Quyến","Nhật Bản","Thái Lan","Hàn Quốc","Singapore","Malaysia","Indonesia","Philippines","Mumbai","Đài Loan"].some(k => p.name.includes(k))).length, icon: Globe, color: "bg-emerald-50 text-emerald-600" },
            { label: "Châu Âu", value: partnersData.filter(p => ["Bratislava","London","Đức","Warsaw"].some(k => p.name.includes(k))).length, icon: Globe, color: "bg-amber-50 text-amber-600" },
            { label: "Châu Mỹ", value: partnersData.filter(p => p.name.includes("New York")).length, icon: Globe, color: "bg-purple-50 text-purple-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3 shadow-sm">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#003366]">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-[#003366] text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Handshake className="w-5 h-5" />
              <span className="font-semibold">Danh sách đối tác</span>
            </div>
            <span className="text-sm text-blue-200">Tổng số {partnersData.length} bản ghi</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-[#003366] w-16">STT</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#003366]">Đối tác</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#003366] w-36">Ngày sự kiện</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#003366]">Thỏa thuận</th>
                  <th className="text-center py-3 px-4 font-semibold text-[#003366] w-20">Liên kết</th>
                </tr>
              </thead>
              <tbody>
                {visibleData.map((partner, idx) => (
                  <tr
                    key={partner.id}
                    className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                  >
                    <td className="py-3.5 px-4 text-center font-medium text-slate-500">{partner.id}</td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getFlag(partner.name)}</span>
                        <span className="font-medium text-[#003366]">{partner.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">{partner.date}</td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">{partner.agreement}</td>
                    <td className="py-3.5 px-4 text-center">
                      <button className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#003366] hover:text-white text-slate-400 flex items-center justify-center mx-auto transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                Hiển thị {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, partnersData.length)} / {partnersData.length}
              </p>
              <div className="flex items-center gap-1 rounded-xl p-1 bg-white">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 flex items-center justify-center text-sm font-semibold rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-[#003366] text-white shadow-md border border-[#003366]"
                        : "bg-white text-[#48566a] border border-[#e1e7ef] shadow-sm hover:bg-slate-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white disabled:opacity-40 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
