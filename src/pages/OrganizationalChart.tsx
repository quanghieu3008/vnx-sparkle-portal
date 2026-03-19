import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const OrganizationalChart = () => {
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
              <span className="text-slate-700">Sơ đồ tổ chức</span>
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
              <linearGradient id="swooshOrg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" fill="url(#swooshOrg)" opacity="0.15" />
            <path d="M120,0 Q200,30 250,60 T300,100" stroke="url(#swooshOrg)" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
          <div className="container mx-auto px-4 relative z-10">
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
            <div className="mb-16 overflow-x-auto">
              <div className="min-w-[700px] flex flex-col items-center gap-0">

                {/* Level 1: VNX */}
                <div className="bg-[#003366] text-white font-bold text-sm md:text-base px-8 py-3 rounded-lg shadow-md text-center">
                  SỞ GIAO DỊCH CHỨNG KHOÁN VIỆT NAM
                </div>
                <div className="w-px h-8 bg-[#003366]" />

                {/* Level 2: HĐTV + side branches */}
                <div className="relative flex items-center justify-center gap-0 w-full">
                  {/* VP HĐTV - left branch */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white border-2 border-[#003366] text-[#003366] font-semibold text-xs md:text-sm px-4 py-2.5 rounded-lg text-center whitespace-nowrap">
                      Văn phòng<br />Hội đồng thành viên
                    </div>
                  </div>
                  <div className="w-12 h-px bg-[#003366]" />

                  {/* HĐTV center */}
                  <div className="bg-[#1a5276] text-white font-bold text-sm md:text-base px-6 py-3 rounded-lg shadow-md text-center whitespace-nowrap">
                    HỘI ĐỒNG THÀNH VIÊN
                  </div>

                  <div className="w-12 h-px bg-[#003366]" />
                  {/* Ban Kiểm soát - right branch */}
                  <div className="flex flex-col items-center">
                    <div className="bg-orange-50 border-2 border-orange-400 text-orange-700 font-semibold text-xs md:text-sm px-4 py-2.5 rounded-lg text-center whitespace-nowrap">
                      Ban Kiểm soát
                    </div>
                  </div>
                </div>
                <div className="w-px h-8 bg-[#003366]" />

                {/* Level 3: Ban Điều hành */}
                <div className="bg-[#1a5276] text-white font-bold text-sm md:text-base px-6 py-3 rounded-lg shadow-md text-center">
                  BAN ĐIỀU HÀNH
                </div>
                <div className="w-px h-6 bg-[#003366]" />

                {/* Level 3.5: Horizontal line with 2 subsidiaries + center */}
                <div className="relative flex items-start justify-center w-full max-w-3xl">
                  {/* Left: Sở GDCK TP.HCM */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full h-px bg-[#003366]" />
                    <div className="w-px h-6 bg-[#003366]" />
                    <div className="bg-green-50 border-2 border-green-500 text-green-800 font-semibold text-xs md:text-sm px-4 py-2.5 rounded-lg text-center whitespace-nowrap">
                      SỞ GDCK TP. HỒ CHÍ MINH
                    </div>
                  </div>

                  {/* Center connector */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full h-px bg-[#003366]" />
                    <div className="w-px h-6 bg-[#003366]" />
                  </div>

                  {/* Right: Sở GDCK HN */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full h-px bg-[#003366]" />
                    <div className="w-px h-6 bg-[#003366]" />
                    <div className="bg-purple-50 border-2 border-purple-500 text-purple-800 font-semibold text-xs md:text-sm px-4 py-2.5 rounded-lg text-center whitespace-nowrap">
                      SỞ GDCK HÀ NỘI
                    </div>
                  </div>
                </div>

                {/* Level 4: Các ban chức năng */}
                <div className="w-px h-6 bg-[#003366]" />
                <div className="w-full max-w-4xl">
                  <div className="w-full h-px bg-slate-300" />
                  <div className="grid grid-cols-7 gap-2 mt-4">
                    {[
                      { label: 'Ban Tổ chức\nnhân sự', color: 'border-sky-400 bg-sky-50 text-sky-800' },
                      { label: 'Ban Tài chính\n- Kế toán', color: 'border-emerald-400 bg-emerald-50 text-emerald-800' },
                      { label: 'Ban Tổng hợp\n- Hành chính', color: 'border-teal-400 bg-teal-50 text-teal-800' },
                      { label: 'Ban Chiến lược\nvà Phát triển', color: 'border-amber-400 bg-amber-50 text-amber-800' },
                      { label: 'Ban Giám sát\nthị trường', color: 'border-rose-400 bg-rose-50 text-rose-800' },
                      { label: 'Ban Quản lý\nthành viên', color: 'border-violet-400 bg-violet-50 text-violet-800' },
                      { label: 'Ban Công nghệ\nthông tin', color: 'border-indigo-400 bg-indigo-50 text-indigo-800' },
                    ].map((ban) => (
                      <div key={ban.label} className="flex flex-col items-center">
                        <div className="w-px h-4 bg-slate-300" />
                        <div className={`border-2 ${ban.color} font-semibold text-[10px] md:text-xs px-2 py-2 rounded-lg text-center whitespace-pre-line leading-tight`}>
                          {ban.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
