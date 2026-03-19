import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';
import { ChevronRight, CalendarDays, Landmark, CircleDollarSign, GitFork } from 'lucide-react';
import historyBanner from '@/assets/vnx-history-banner.png';
import leadershipMeeting from '@/assets/leadership-meeting.jpg';
import tradingFloor from '@/assets/leadership-trading-floor.jpg';
import vnxCeremony from '@/assets/vnx-ceremony-2024.png';

const milestones = [
  { year: '2000', event: 'Trung tâm Giao dịch Chứng khoán TP. Hồ Chí Minh (TTGDCK TP.HCM) được thành lập và tổ chức phiên giao dịch đầu tiên vào ngày 28/07/2000 với 2 mã cổ phiếu niêm yết.' },
  { year: '2005', event: 'Trung tâm Giao dịch Chứng khoán Hà Nội (TTGDCK HN) chính thức hoạt động vào ngày 08/03/2005, đánh dấu sự phát triển của thị trường giao dịch chứng khoán tại khu vực phía Bắc.' },
  { year: '2007', event: 'TTGDCK TP.HCM chuyển đổi thành Sở Giao dịch Chứng khoán TP. Hồ Chí Minh (HOSE). Thị trường chứng khoán Việt Nam đạt mốc vốn hóa 40% GDP.' },
  { year: '2009', event: 'TTGDCK HN chuyển đổi thành Sở Giao dịch Chứng khoán Hà Nội (HNX). Thị trường trái phiếu Chính phủ chuyên biệt bắt đầu hoạt động.' },
  { year: '2012', event: 'Thị trường chứng khoán phái sinh bắt đầu được nghiên cứu và xây dựng đề án. Hệ thống giao dịch được nâng cấp hiện đại hóa.' },
  { year: '2017', event: 'Thị trường chứng khoán phái sinh chính thức khai trương ngày 10/08/2017, đánh dấu bước phát triển quan trọng của thị trường vốn Việt Nam.' },
  { year: '2021', event: 'Sở Giao dịch Chứng khoán Việt Nam (VNX) chính thức được thành lập theo Quyết định số 37/2020/QĐ-TTg, thống nhất quản lý HOSE và HNX theo mô hình Công ty mẹ - Công ty con.' },
  { year: '2023', event: 'VNX tiếp tục hoàn thiện cơ cấu tổ chức, triển khai hệ thống công nghệ thông tin mới, nâng cao năng lực giám sát và quản trị rủi ro thị trường.' },
];

const DevelopmentHistory = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <ScrollToTop />

      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500">
              <Link to="/" className="hover:text-[#003366] transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Giới thiệu</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Lịch sử phát triển</span>
            </nav>
          </div>
        </div>

        {/* Page Title Header */}
        <div className="relative overflow-hidden bg-[#003366] py-8">
          <svg
            className="absolute right-0 top-0 h-full w-auto"
            viewBox="0 0 300 100"
            preserveAspectRatio="xMaxYMin slice"
            fill="none"
            style={{ minWidth: '400px' }}
          >
            <defs>
              <linearGradient id="swooshHistory" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" fill="url(#swooshHistory)" opacity="0.15" />
            <path d="M120,0 Q200,30 250,60 T300,100" stroke="url(#swooshHistory)" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Lịch sử phát triển
            </h1>
            <p className="text-white/60 text-sm">
              Chặng đường hình thành và phát triển của thị trường chứng khoán Việt Nam.
            </p>
          </div>
        </div>

        {/* Hero Banner Image */}
        <div className="relative">
          <img
            src={historyBanner}
            alt="Sở Giao dịch Chứng khoán Việt Nam - Vietnam Exchange"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="bg-white pb-16">
          <div className="container mx-auto px-4 py-12 max-w-4xl text-justify">
            {/* Intro */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 border-l-4 border-[#003366] pl-4">
                Quá trình hình thành
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Thị trường chứng khoán Việt Nam đã trải qua hơn 20 năm hình thành và phát triển, từ những bước đi đầu tiên với chỉ 2 mã cổ phiếu niêm yết đến một thị trường có quy mô vốn hóa hàng nghìn tỷ đồng với hàng nghìn doanh nghiệp niêm yết và đăng ký giao dịch.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ngày 20/07/2000, Trung tâm Giao dịch Chứng khoán TP. Hồ Chí Minh chính thức khai trương và đi vào hoạt động, đánh dấu sự ra đời của thị trường chứng khoán Việt Nam. Đây là một sự kiện có ý nghĩa quan trọng đối với sự phát triển kinh tế - xã hội của đất nước.
              </p>
            </section>

            {/* Milestone Section - image left, text right */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 border-l-4 border-orange-500 pl-4">
                Những dấu mốc quan trọng
              </h2>
              <div className="grid md:grid-cols-[2fr_3fr] gap-6 items-start mb-6">
                <img
                  src={tradingFloor}
                  alt="Sàn giao dịch chứng khoán Việt Nam"
                  className="rounded-xl shadow-lg w-full h-60 object-cover"
                />
                <p className="text-slate-600 leading-relaxed">
                  Từ phiên giao dịch đầu tiên vào ngày 28/07/2000 tại Trung tâm Giao dịch Chứng khoán TP.HCM đến sự ra đời của Sở Giao dịch Chứng khoán Việt Nam (VNX) năm 2021, thị trường chứng khoán Việt Nam đã không ngừng lớn mạnh, trở thành kênh huy động vốn quan trọng của nền kinh tế.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-6 border-l-4 border-[#003366] pl-4">
                Các mốc lịch sử
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#003366]/20" />
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative pl-12 pb-8 last:pb-0">
                    <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-[#003366] border-4 border-white shadow" />
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 shadow-sm">
                      <span className="inline-block bg-[#003366] text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
                        {m.year}
                      </span>
                      <p className="text-slate-600 leading-relaxed text-sm">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* VNX Section - text left, image right */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 border-l-4 border-orange-500 pl-4">
                Sự ra đời của VNX
              </h2>
              <div className="grid md:grid-cols-[3fr_2fr] gap-6 items-start">
                <div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Ngày 11/12/2020, Thủ tướng Chính phủ ban hành Quyết định số 37/2020/QĐ-TTg về việc thành lập Sở Giao dịch Chứng khoán Việt Nam trên cơ sở sắp xếp lại Sở Giao dịch Chứng khoán Hà Nội và Sở Giao dịch Chứng khoán TP. Hồ Chí Minh.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    VNX hoạt động theo mô hình Công ty mẹ - Công ty con, thực hiện chức năng tổ chức và giám sát hoạt động giao dịch chứng khoán, đảm bảo thị trường chứng khoán Việt Nam hoạt động công bằng, công khai, minh bạch, an toàn và hiệu quả.
                  </p>
                </div>
                <img
                  src={vnxCeremony}
                  alt="Lễ ra mắt Sở Giao dịch Chứng khoán Việt Nam"
                  className="rounded-xl shadow-lg w-full h-60 object-cover"
                />
              </div>
            </section>

            {/* Key Facts */}
            <section className="mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { Icon: CalendarDays, label: 'Thành lập', desc: '23/12/2020 theo QĐ 37/2020/QĐ-TTg' },
                  { Icon: Landmark, label: 'Hoạt động', desc: 'Chính thức từ 06/8/2021' },
                  { Icon: CircleDollarSign, label: 'Vốn điều lệ', desc: '3.000 tỷ đồng' },
                  { Icon: GitFork, label: 'Mô hình', desc: 'Công ty mẹ - Công ty con' },
                ].map((v) => (
                  <div key={v.label} className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center shadow-sm">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
                        <v.Icon className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                      </div>
                    </div>
                    <h3 className="font-bold text-[#003366] text-lg mb-1">{v.label}</h3>
                    <p className="text-sm text-slate-500">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Vision */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 border-l-4 border-[#003366] pl-4">
                Tầm nhìn phát triển
              </h2>
              <div className="grid md:grid-cols-[2fr_3fr] gap-6 items-start mb-4">
                <img
                  src={leadershipMeeting}
                  alt="Cuộc họp lãnh đạo VNX"
                  className="rounded-xl shadow-lg w-full h-60 object-cover"
                />
                <p className="text-slate-600 leading-relaxed">
                  VNX hướng tới xây dựng thị trường chứng khoán Việt Nam trở thành kênh huy động vốn trung và dài hạn quan trọng của nền kinh tế, hoạt động theo các chuẩn mực và thông lệ quốc tế, tăng cường hội nhập với các thị trường khu vực và thế giới, góp phần nâng hạng thị trường chứng khoán Việt Nam từ thị trường cận biên lên thị trường mới nổi.
                </p>
              </div>
            </section>

            {/* Key Values */}
            <section className="mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Minh bạch', desc: 'Công khai thông tin, đảm bảo quyền lợi nhà đầu tư' },
                  { label: 'Hiện đại', desc: 'Ứng dụng công nghệ tiên tiến trong vận hành thị trường' },
                  { label: 'Hội nhập', desc: 'Tiệm cận chuẩn mực và thông lệ quốc tế' },
                  { label: 'Bền vững', desc: 'Phát triển thị trường vốn ổn định, lâu dài' },
                ].map((v) => (
                  <div key={v.label} className="bg-white rounded-xl p-5 border border-slate-200 text-center shadow-sm">
                    <h3 className="font-bold text-[#003366] text-lg mb-1">{v.label}</h3>
                    <p className="text-sm text-slate-500">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DevelopmentHistory;
