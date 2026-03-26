import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Search, Calendar, FileText, Download, X, Bell } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import vnxLogo from '@/assets/vnx-logo-white.jpg';

interface HolidayItem {
  id: number;
  date: string;
  title: string;
}

interface HolidayDetailData {
  id: number;
  date: string;
  title: string;
  content: string[];
  attachment?: string;
}

const holidaysData: HolidayItem[] = [
  { id: 1, date: '22/04/2026', title: 'Thông báo lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2026' },
  { id: 2, date: '10/04/2026', title: 'Thông báo lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2026' },
  { id: 3, date: '05/02/2026', title: 'Thông báo lịch nghỉ Tết Âm lịch 2026' },
  { id: 4, date: '25/12/2025', title: 'Thông báo lịch nghỉ Tết dương lịch 2026' },
  { id: 5, date: '20/08/2025', title: 'Thông báo lịch nghỉ lễ Quốc khánh 2/9 năm 2025' },
  { id: 6, date: '22/04/2025', title: 'Thông báo lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025' },
  { id: 7, date: '01/04/2025', title: 'Thông báo lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2025' },
];

const holidayDetails: Record<number, HolidayDetailData> = {
  1: {
    id: 1, date: '22/04/2026',
    title: 'Thông báo về việc công bố lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2026',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2026 từ ngày 30/04/2026 đến hết ngày 03/05/2026.',
      'Thời gian nghỉ giao dịch thực hiện theo Thông báo số 3653/TB-SGDHN ngày 15/12/2025 của Sở Giao dịch Chứng khoán Hà Nội và Thông báo số 1268/TB-SGDHCM ngày 21/12/2025 của Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2026.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao 3004.pdf',
  },
  2: {
    id: 2, date: '10/04/2026',
    title: 'Thông báo về việc công bố lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2026',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2026.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2026.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao gio to Hung Vuong 2026.pdf',
  },
  3: {
    id: 3, date: '05/02/2026',
    title: 'Thông báo về việc công bố lịch nghỉ Tết Âm lịch 2026',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ Tết Âm lịch năm 2026.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2026.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao nghi Tet Am lich 2026.pdf',
  },
  4: {
    id: 4, date: '25/12/2025',
    title: 'Thông báo về việc công bố lịch nghỉ Tết dương lịch 2026',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ Tết dương lịch năm 2026 từ ngày 01/01/2026 đến hết ngày 03/01/2026.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2026.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao nghi Tet duong lich 2026.pdf',
  },
  5: {
    id: 5, date: '20/08/2025',
    title: 'Thông báo về việc công bố lịch nghỉ lễ Quốc khánh 2/9 năm 2025',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ lễ Quốc khánh 2/9 năm 2025.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2025.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao nghi le Quoc khanh 2025.pdf',
  },
  6: {
    id: 6, date: '22/04/2025',
    title: 'Thông báo về việc công bố lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2025.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao 3004 nam 2025.pdf',
  },
  7: {
    id: 7, date: '01/04/2025',
    title: 'Thông báo về việc công bố lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2025',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2025.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2025.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao gio to Hung Vuong 2025.pdf',
  },
};

const latestHoliday = holidaysData[0];

const AnnualHolidays = () => {
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const totalPages = Math.ceil(holidaysData.length / ITEMS_PER_PAGE);
  const paginatedData = holidaysData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const selectedDetail = selectedId !== null ? holidayDetails[selectedId] : null;

  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />

      <main className="pt-[121px]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200 sticky top-[121px] z-30">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500 leading-none">
              <Link to="/" className="hover:text-[#003366] transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Tin tức và sự kiện</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Lịch nghỉ hàng năm</span>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="relative overflow-hidden bg-[#003366] mb-0" style={{ height: 110 }}>
          <svg className="absolute right-0 top-0 h-full w-auto" viewBox="0 0 300 100" preserveAspectRatio="xMaxYMin slice" fill="none" style={{ minWidth: '400px' }}>
            <defs>
              <linearGradient id="swooshGradientHoliday" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" fill="url(#swooshGradientHoliday)" opacity="0.15" />
            <path d="M120,0 Q200,30 250,60 T300,100" stroke="url(#swooshGradientHoliday)" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">Lịch nghỉ hàng năm</h1>
            <p className="text-white/60 text-sm">Thông tin các ngày nghỉ lễ, Tết trong năm theo quy định.</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#eef1f6] pb-16">
          <div className="mx-auto pt-8" style={{ maxWidth: 862 }}>

            {/* Featured Latest */}
            <div className="bg-gradient-to-r from-[#003366] to-[#004d99] rounded-xl px-6 py-4 md:px-8 md:py-5 mb-10 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0 bg-white rounded-lg p-3 w-[140px] h-[95px] flex items-center justify-center">
                  <img src={vnxLogo} alt="Vietnam Exchange" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-white/70 text-sm mb-1 flex items-center gap-1.5">
                    <Bell className="h-4 w-4" />
                    Thông báo mới nhất
                  </p>
                  <h2 className="text-white text-lg md:text-xl font-bold leading-snug mb-3">
                    {latestHoliday.title}
                  </h2>
                  <div className="flex items-center justify-between">
                    <p className="text-white/60 text-sm italic">
                      Cập nhật lúc: 20:00 ngày {latestHoliday.date}
                    </p>
                    <button
                      onClick={() => setSelectedId(latestHoliday.id)}
                      className="shrink-0 bg-white text-[#003366] text-[13px] font-semibold px-4 py-1.5 rounded-md hover:bg-white/90 transition-colors"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Announcements */}
            <div>
              <h2 className="text-xl font-bold text-[#003366] mb-1">Tất cả thông báo</h2>
              <div className="w-16 h-1 bg-[#003366] rounded-full mb-6" />

              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left px-6 py-4 font-bold text-slate-700 w-[180px]">Ngày thông báo</th>
                      <th className="text-left px-6 py-4 font-bold text-slate-700">Nội dung</th>
                      <th className="w-[100px]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{item.date}</td>
                        <td className="px-6 py-4 text-slate-700 leading-relaxed">{item.title}</td>
                        <td className="px-4 py-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => setSelectedId(item.id)}
                            className="text-[#F97316] font-normal hover:text-[#EA580C] hover:underline text-sm"
                          >
                            Xem chi tiết
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 rounded-md text-sm font-medium transition-colors ${
                        page === currentPage
                          ? 'bg-[#003366] text-white'
                          : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}

              {holidaysData.length === 0 && (
                <div className="bg-white rounded-lg p-8 text-center border border-slate-200">
                  <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Không tìm thấy kết quả phù hợp.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Detail Popup */}
      <AnimatePresence>
        {selectedDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#003366] text-white p-5 rounded-t-xl flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold leading-snug">
                    {selectedDetail.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-white/60 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Ngày đăng: {selectedDetail.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 space-y-4">
                {selectedDetail.content.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Attachment */}
              {selectedDetail.attachment && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm font-semibold text-slate-600 mb-3">Tài liệu đính kèm:</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 hover:bg-slate-100 transition-colors group"
                  >
                    <FileText className="h-5 w-5 text-red-500" />
                    <span className="text-sm text-slate-700 group-hover:text-[#003366] font-medium">
                      {selectedDetail.attachment}
                    </span>
                    <Download className="h-4 w-4 text-slate-400 ml-2" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AnnualHolidays;
