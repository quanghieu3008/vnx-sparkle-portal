import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';
import { ChevronRight, Quote } from 'lucide-react';
import leadershipBanner from '@/assets/leadership-banner.png';
import leadershipMeeting from '@/assets/leadership-meeting.jpg';
import tradingFloor from '@/assets/leadership-trading-floor.jpg';

const LeadershipMessage = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />
      <ScrollToTop />

      <main className="pt-[104px] lg:pt-[112px]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500 leading-none">
              <Link to="/" className="hover:text-[#003366] transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Giới thiệu</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Thông điệp của lãnh đạo</span>
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
              <linearGradient id="swooshLeadership" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" fill="url(#swooshLeadership)" opacity="0.15" />
            <path d="M120,0 Q200,30 250,60 T300,100" stroke="url(#swooshLeadership)" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Thông điệp của lãnh đạo
            </h1>
            <p className="text-white/60 text-sm">
              Sứ mệnh, tầm nhìn và định hướng phát triển của Sở Giao dịch Chứng khoán Việt Nam.
            </p>
          </div>
        </div>

        {/* Hero Banner Image */}
        <div className="relative">
          <img
            src={leadershipBanner}
            alt="Sàn giao dịch chứng khoán Việt Nam"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="bg-white pb-16">
          <div className="container mx-auto px-4 py-12 max-w-4xl text-justify">
            {/* Opening Quote */}
            <div className="relative bg-white rounded-2xl p-8 mb-12 border border-slate-200 shadow-sm">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-[#003366]/20" />
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic pl-8">
                Mục tiêu cốt lõi, kim chỉ nam trong hoạt động của Sở Giao dịch Chứng khoán Việt Nam là đảm bảo hoạt động giao dịch chứng khoán được tiến hành minh bạch, công khai, công bằng, trật tự, an toàn, hiệu quả.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 border-l-4 border-[#003366] pl-4">
                Bối cảnh & Thách thức
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Trong giai đoạn 2020 – 2021, thế giới đã gánh chịu hậu quả nặng nề của đại dịch Covid-19, nền kinh tế Việt Nam nói chung và thị trường chứng khoán nói riêng cũng đối mặt với nhiều khó khăn và thách thức. Tuy nhiên, nhờ sự vào cuộc mạnh mẽ của cả hệ thống chính trị, dịch bệnh đang được kiểm soát, nền kinh tế vĩ mô có dấu hiệu phục hồi tích cực; nhờ đó thị trường chứng khoán có cơ sở để vượt qua khó khăn trong ngắn hạn và dần nâng cao sức chống chịu trước những thách thức trong tương lai.
              </p>
            </section>

            {/* Section 2: Đổi mới pháp lý - text left, image right */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 border-l-4 border-orange-500 pl-4">
                Đổi mới môi trường pháp lý
              </h2>
              <div className="grid md:grid-cols-[3fr_2fr] gap-6 items-start">
                <div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Năm 2021 cũng là một năm bản lề đối với thị trường chứng khoán Việt Nam. Thông qua việc ban hành một loạt các văn bản pháp luật mới như Luật Doanh nghiệp, Luật Chứng khoán và các Nghị định và Thông tư hướng dẫn, môi trường pháp lý trên thị trường chứng khoán được đổi mới toàn diện, tiệm cận với các thông lệ quốc tế.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Đặc biệt, Sở Giao dịch Chứng khoán Việt Nam đã được thành lập theo Quyết định số 37/2020/QĐ-TTg ngày 23/12/2020 của Thủ tướng Chính phủ theo mô hình Công ty mẹ - Công ty con trên cơ sở sắp xếp lại Sở Giao dịch Chứng khoán Tp. Hồ Chí Minh và Sở Giao dịch Chứng khoán Hà Nội.
                  </p>
                </div>
                <img
                  src={leadershipMeeting}
                  alt="Cuộc họp lãnh đạo Sở Giao dịch Chứng khoán"
                  className="rounded-xl shadow-lg w-full h-60 object-cover"
                />
              </div>
            </section>

            {/* Section 3: Sứ mệnh & Tầm nhìn - image left, text right */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 border-l-4 border-[#003366] pl-4">
                Sứ mệnh & Tầm nhìn
              </h2>
              <div className="grid md:grid-cols-[2fr_3fr] gap-6 items-start mb-4">
                <img
                  src={tradingFloor}
                  alt="Sàn giao dịch chứng khoán Việt Nam"
                  className="rounded-xl shadow-lg w-full h-60 object-cover"
                />
                <p className="text-slate-600 leading-relaxed">
                  Mục tiêu cốt lõi, kim chỉ nam trong hoạt động của Sở Giao dịch Chứng khoán Việt Nam là cùng Sở Giao dịch Chứng khoán Hà Nội, Sở Giao dịch Chứng khoán Tp. Hồ Chí Minh thực hiện chức năng tổ chức thị trường giao dịch chứng khoán theo quy định của pháp luật chứng khoán, đảm bảo hoạt động giao dịch chứng khoán tại các Sở Giao dịch Chứng khoán được tiến hành minh bạch, công khai, công bằng, trật tự, an toàn, hiệu quả; bảo vệ quyền và lợi ích hợp pháp của nhà đầu tư tham gia giao dịch chứng khoán.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Bên cạnh đó, Sở Giao dịch Chứng khoán Việt Nam sẽ tăng cường hội nhập, liên kết với các đơn vị tổ chức thị trường khu vực và thế giới, hướng tới các chuẩn mực quốc tế, phát triển bền vững, nâng cao khả năng cạnh tranh, quản trị rủi ro, góp phần thu hẹp khoảng cách phát triển giữa thị trường chứng khoán Việt Nam với các nước phát triển.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 border-l-4 border-orange-500 pl-4">
                Kế thừa & Phát triển
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Sở Giao dịch Chứng khoán Việt Nam sẽ kế thừa những thành tựu mà Sở Giao dịch Chứng khoán Tp. Hồ Chí Minh, Sở Giao dịch Chứng khoán Hà Nội đã đạt được và xây dựng mục tiêu cụ thể cho từng giai đoạn phát triển tiếp theo, phù hợp với Kế hoạch phát triển kinh tế - xã hội trong thời kỳ mới, Chiến lược phát triển ngành tài chính và Chiến lược phát triển thị trường chứng khoán Việt Nam.
              </p>
            </section>

            {/* Key Values */}
            <section className="mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Minh bạch', desc: 'Công khai thông tin, đảm bảo quyền lợi nhà đầu tư' },
                  { label: 'Công bằng', desc: 'Tạo sân chơi bình đẳng cho mọi thành viên thị trường' },
                  { label: 'An toàn', desc: 'Quản trị rủi ro, bảo vệ hệ thống giao dịch' },
                  { label: 'Hội nhập', desc: 'Tiệm cận chuẩn mực và thông lệ quốc tế' },
                ].map((v) => (
                  <div key={v.label} className="bg-white rounded-xl p-5 border border-slate-200 text-center shadow-sm">
                    <h3 className="font-bold text-[#003366] text-lg mb-1">{v.label}</h3>
                    <p className="text-sm text-slate-500">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing */}
            <div className="text-right text-slate-500 italic">
              <p>Trân trọng./.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadershipMessage;
