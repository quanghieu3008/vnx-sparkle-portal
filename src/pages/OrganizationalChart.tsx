import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import orgChartImg from '@/assets/org-chart.png';

const OrganizationalChart = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />
      <ScrollToTop />

      <main className="pt-[121px]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500">
              <Link to="/" className="hover:text-[#003366] transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Giới thiệu</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Sơ đồ tổ chức</span>
            </nav>
          </div>
        </div>

        {/* Page Title Header */}
        <div className="relative overflow-hidden bg-[#003366]" style={{ height: 110 }}>
          <svg
            className="absolute right-0 top-0 h-full w-auto"
            viewBox="0 0 300 100"
            preserveAspectRatio="xMaxYMin slice"
            fill="none"
            style={{ minWidth: '400px' }}
          >
            <defs>
              <linearGradient id="swooshOrg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" fill="url(#swooshOrg)" opacity="0.15" />
            <path d="M120,0 Q200,30 250,60 T300,100" stroke="url(#swooshOrg)" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Sơ đồ tổ chức
            </h1>
            <p className="text-white/60 text-sm">
              Cơ cấu tổ chức của Sở Giao dịch Chứng khoán Việt Nam.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white pb-16">
          <div className="container mx-auto px-4 py-12 max-w-5xl">

            {/* Org Chart Visual */}
            <div className="mb-16">
              <img
                src={orgChartImg}
                alt="Sơ đồ tổ chức Sở Giao dịch Chứng khoán Việt Nam"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
              />
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-justify">
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-6 border-l-4 border-[#003366] pl-4">
                Mô tả sơ đồ tổ chức
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                <strong className="text-[#003366]">Sở Giao dịch Chứng khoán Việt Nam</strong> được tổ chức theo mô hình quản lý tập trung, phân cấp rõ ràng từ cấp cao nhất đến các đơn vị chức năng.
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                Ở cấp cao nhất là <strong className="text-[#003366]">Sở Giao dịch Chứng khoán Việt Nam</strong>, đóng vai trò là cơ quan quản lý và điều phối chung toàn hệ thống. Trực thuộc là <strong className="text-[#003366]">Hội đồng thành viên</strong>, cơ quan chịu trách nhiệm định hướng chiến lược, giám sát hoạt động và ra các quyết định quan trọng.
              </p>

              <p className="text-slate-600 leading-relaxed mb-4">
                Hỗ trợ cho Hội đồng thành viên gồm có:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-slate-600 leading-relaxed">
                <li><strong className="text-[#003366]">Ban Kiểm soát</strong>: thực hiện chức năng kiểm tra, giám sát tính minh bạch và tuân thủ.</li>
                <li><strong className="text-[#003366]">Văn phòng Hội đồng thành viên</strong>: hỗ trợ công tác điều phối, hành chính và tổ chức.</li>
              </ul>

              <p className="text-slate-600 leading-relaxed mb-6">
                Dưới Hội đồng thành viên là <strong className="text-[#003366]">Ban Điều hành</strong>, chịu trách nhiệm triển khai các hoạt động điều hành thực tế và quản lý vận hành toàn hệ thống.
              </p>

              <p className="text-slate-600 leading-relaxed mb-4">
                Song song đó, hệ thống bao gồm hai đơn vị trực thuộc:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-slate-600 leading-relaxed">
                <li>Sở GDCK TP. Hồ Chí Minh</li>
                <li>Sở GDCK Hà Nội</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-6">
                Đây là các đơn vị trực tiếp tổ chức và vận hành thị trường giao dịch chứng khoán.
              </p>

              <p className="text-slate-600 leading-relaxed mb-4">
                Bên dưới Ban Điều hành là các ban chức năng, được tổ chức theo từng lĩnh vực chuyên môn, bao gồm:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-slate-600 leading-relaxed">
                <li>Ban Tổ chức nhân sự</li>
                <li>Ban Tài chính – Kế toán</li>
                <li>Ban Tổng hợp – Hành chính</li>
                <li>Ban Chiến lược và Phát triển</li>
                <li>Ban Giám sát thị trường</li>
                <li>Ban Quản lý thành viên</li>
                <li>Ban Công nghệ thông tin</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                Các ban này có nhiệm vụ hỗ trợ hoạt động quản lý, đảm bảo hệ thống vận hành hiệu quả, minh bạch và phát triển bền vững.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrganizationalChart;
