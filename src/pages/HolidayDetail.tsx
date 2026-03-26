import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Calendar, FileText, Download } from 'lucide-react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

interface HolidayDetailData {
  id: number;
  date: string;
  title: string;
  content: string[];
  attachment?: string;
}

const holidayDetails: Record<number, HolidayDetailData> = {
  1: {
    id: 1,
    date: '22/04/2026',
    title: 'Thông báo về việc công bố lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2026',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2026 từ ngày 30/04/2026 đến hết ngày 03/05/2026.',
      'Thời gian nghỉ giao dịch thực hiện theo Thông báo số 3653/TB-SGDHN ngày 15/12/2025 của Sở Giao dịch Chứng khoán Hà Nội và Thông báo số 1268/TB-SGDHCM ngày 21/12/2025 của Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2026.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao 3004.pdf',
  },
  2: {
    id: 2,
    date: '10/04/2026',
    title: 'Thông báo về việc công bố lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2026',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2026.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2026.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao gio to Hung Vuong 2026.pdf',
  },
  3: {
    id: 3,
    date: '05/02/2026',
    title: 'Thông báo về việc công bố lịch nghỉ Tết Âm lịch 2026',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ Tết Âm lịch năm 2026.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2026.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao nghi Tet Am lich 2026.pdf',
  },
  4: {
    id: 4,
    date: '25/12/2025',
    title: 'Thông báo về việc công bố lịch nghỉ Tết dương lịch 2026',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ Tết dương lịch năm 2026 từ ngày 01/01/2026 đến hết ngày 03/01/2026.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2026.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao nghi Tet duong lich 2026.pdf',
  },
  5: {
    id: 5,
    date: '20/08/2025',
    title: 'Thông báo về việc công bố lịch nghỉ lễ Quốc khánh 2/9 năm 2025',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ lễ Quốc khánh 2/9 năm 2025.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2025.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao nghi le Quoc khanh 2025.pdf',
  },
  6: {
    id: 6,
    date: '22/04/2025',
    title: 'Thông báo về việc công bố lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2025.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao 3004 nam 2025.pdf',
  },
  7: {
    id: 7,
    date: '01/04/2025',
    title: 'Thông báo về việc công bố lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2025',
    content: [
      'Căn cứ Bộ Luật Lao động năm 2019, Sở Giao dịch Chứng khoán Việt Nam thông báo thời gian nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2025.',
      'Thời gian nghỉ giao dịch thực hiện theo thông báo của Sở Giao dịch Chứng khoán Hà Nội và Sở GDCK Tp. Hồ Chí Minh về việc công bố lịch nghỉ giao dịch trong năm 2025.',
      'Sở GDCK Việt Nam xin thông báo./.',
    ],
    attachment: 'Thong bao gio to Hung Vuong 2025.pdf',
  },
};

const HolidayDetail = () => {
  const { id } = useParams<{ id: string }>();
  const detail = holidayDetails[Number(id)];

  if (!detail) {
    return (
      <div className="min-h-screen bg-[#003366]">
        <Header />
        <MarketTicker />
        <main className="pt-[121px]">
          <div className="bg-[#eef1f6] py-16">
            <div className="mx-auto text-center" style={{ maxWidth: 862 }}>
              <p className="text-slate-500 text-lg">Không tìm thấy thông báo.</p>
              <Link to="/lich-nghi-hang-nam" className="text-[#003366] font-medium hover:underline mt-4 inline-block">
                ← Quay lại danh sách
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <Link to="/lich-nghi-hang-nam" className="hover:text-[#003366] transition-colors">Lịch nghỉ hàng năm</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Chi tiết thông báo</span>
            </nav>
          </div>
        </div>

        {/* Page Title Banner */}
        <div className="relative overflow-hidden bg-[#003366] mb-0" style={{ height: 110 }}>
          <svg className="absolute right-0 top-0 h-full w-auto" viewBox="0 0 300 100" preserveAspectRatio="xMaxYMin slice" fill="none" style={{ minWidth: '400px' }}>
            <defs>
              <linearGradient id="swooshGradientDetail" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" fill="url(#swooshGradientDetail)" opacity="0.15" />
            <path d="M120,0 Q200,30 250,60 T300,100" stroke="url(#swooshGradientDetail)" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">Chi tiết thông báo</h1>
            <p className="text-white/60 text-sm">Lịch nghỉ hàng năm</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#eef1f6] pb-16">
          <div className="mx-auto pt-8 px-4" style={{ maxWidth: 862 }}>
            {/* Back link */}
            <Link
              to="/lich-nghi-hang-nam"
              className="inline-flex items-center text-sm text-[#003366] font-medium hover:underline mb-6"
            >
              ← Quay lại danh sách
            </Link>

            {/* Detail Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Title */}
              <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#003366] leading-snug">
                  {detail.title}
                </h2>
                <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
                  <Calendar className="h-4 w-4" />
                  <span>Ngày đăng: {detail.date}</span>
                </div>
              </div>

              <hr className="border-slate-200 mx-6 md:mx-8" />

              {/* Body */}
              <div className="px-6 md:px-8 py-6 space-y-4">
                {detail.content.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Attachment */}
              {detail.attachment && (
                <>
                  <hr className="border-slate-200 mx-6 md:mx-8" />
                  <div className="px-6 md:px-8 py-5">
                    <p className="text-sm font-semibold text-slate-600 mb-3">Tài liệu đính kèm:</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 hover:bg-slate-100 transition-colors group"
                    >
                      <FileText className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-slate-700 group-hover:text-[#003366] font-medium">
                        {detail.attachment}
                      </span>
                      <Download className="h-4 w-4 text-slate-400 ml-2" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HolidayDetail;
