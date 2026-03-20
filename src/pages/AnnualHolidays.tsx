import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight, Filter } from 'lucide-react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import holiday304 from '@/assets/holiday-30-4.jpg';
import holidayGioTo from '@/assets/holiday-gio-to.jpg';
import holidayTet2026 from '@/assets/holiday-tet-2026.jpg';
import holidayTetDuong from '@/assets/holiday-tet-duong-2026.jpg';
import holidayQuocKhanh from '@/assets/holiday-quoc-khanh.jpg';
import holiday304_2025 from '@/assets/holiday-30-4-2025.jpg';
import holidayGioTo2025 from '@/assets/holiday-gio-to-2025.jpg';

const filterCategories = [
  { label: 'Hoạt động sự kiện', href: '/hoat-dong-su-kien', active: false },
  { label: 'Hoạt động xã hội', href: '/hoat-dong-xa-hoi', active: false },
  { label: 'Lịch nghỉ hàng năm', href: '/lich-nghi-hang-nam', active: true },
];

interface HolidayItem {
  id: number;
  date: string;
  title: string;
  image: string;
  year: number;
}

const holidaysData: HolidayItem[] = [
  // 2026
  {
    id: 1,
    date: '22/04/2026',
    title: 'Thông báo lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2026',
    image: holiday304,
    year: 2026,
  },
  {
    id: 2,
    date: '10/04/2026',
    title: 'Thông báo lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2026',
    image: holidayGioTo,
    year: 2026,
  },
  {
    id: 3,
    date: '05/02/2026',
    title: 'Thông báo lịch nghỉ Tết Âm lịch 2026',
    image: holidayTet2026,
    year: 2026,
  },
  // 2025
  {
    id: 4,
    date: '25/12/2025',
    title: 'Thông báo lịch nghỉ Tết dương lịch 2026',
    image: holidayTetDuong,
    year: 2025,
  },
  {
    id: 5,
    date: '20/08/2025',
    title: 'Thông báo lịch nghỉ lễ Quốc khánh 2/9 năm 2025',
    image: holidayQuocKhanh,
    year: 2025,
  },
  {
    id: 6,
    date: '22/04/2025',
    title: 'Thông báo lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025',
    image: holiday304_2025,
    year: 2025,
  },
  {
    id: 7,
    date: '01/04/2025',
    title: 'Thông báo lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2025',
    image: holidayGioTo2025,
    year: 2025,
  },
];

const relatedLinks = [
  { label: 'Lịch sự kiện sắp tới', href: '#' },
  { label: 'Thư viện hình ảnh sự kiện', href: '#' },
  { label: 'Video sự kiện nổi bật', href: '#' },
  { label: 'Thông cáo báo chí', href: '#' },
];

const AnnualHolidays = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const filteredHolidays = holidaysData.filter((item) => {
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === 'all' || item.year.toString() === selectedYear;
    return matchesSearch && matchesYear;
  });

  const years = [...new Set(holidaysData.map(h => h.year))].sort((a, b) => b - a);

  const groupedByYear: Record<number, HolidayItem[]> = {};
  filteredHolidays.forEach((item) => {
    if (!groupedByYear[item.year]) groupedByYear[item.year] = [];
    groupedByYear[item.year].push(item);
  });

  const sortedYears = Object.keys(groupedByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />

      <main className="pt-[121px]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500">
              <Link to="/" className="hover:text-[#003366] transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Tin tức và sự kiện</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Hoạt động sự kiện</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Lịch nghỉ hàng năm</span>
            </nav>
          </div>
        </div>

        {/* Page Title */}
        <div className="relative overflow-hidden bg-[#003366] mb-0" style={{ height: 110 }}>
          <svg
            className="absolute right-0 top-0 h-full w-auto"
            viewBox="0 0 300 100"
            preserveAspectRatio="xMaxYMin slice"
            fill="none"
            style={{ minWidth: '400px' }}
          >
            <defs>
              <linearGradient id="swooshGradientHoliday" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path
              d="M100,0 Q180,20 220,50 T300,100 L300,0 Z"
              fill="url(#swooshGradientHoliday)"
              opacity="0.15"
            />
            <path
              d="M120,0 Q200,30 250,60 T300,100"
              stroke="url(#swooshGradientHoliday)"
              strokeWidth="4"
              fill="none"
              opacity="0.8"
            />
          </svg>
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Hoạt động sự kiện
            </h1>
            <p className="text-white/60 text-sm">
              Thông tin các sự kiện, hội nghị, hội thảo và hoạt động chuyên môn do VNX tổ chức hoặc tham gia.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#eef1f6] pb-16">
          <div className="container mx-auto px-4 pt-8">
            {/* Filter Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filterCategories.map((cat) => (
                <Link
                  key={cat.label}
                  to={cat.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat.active
                      ? 'bg-[#003366] text-white'
                      : 'bg-white text-slate-600 border border-slate-300 hover:border-[#003366] hover:text-[#003366]'
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1fr_280px] gap-8">
              {/* Main Content */}
              <div>
                {/* Search & Filters */}
                <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Tìm kiếm theo tiêu đề..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-10 pl-10 pr-3 rounded-md border border-slate-300 bg-white text-slate-700 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366]"
                      />
                    </div>
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="h-10 px-3 rounded-md border border-slate-300 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] md:w-[140px]"
                    >
                      <option value="all">Tất cả năm</option>
                      {years.map(y => (
                        <option key={y} value={y.toString()}>Năm {y}</option>
                      ))}
                    </select>
                    <div className="relative md:w-[200px]">
                      <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                      <select
                        className="w-full h-10 pl-9 pr-3 rounded-md border border-slate-300 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] appearance-none"
                      >
                        <option>Tất cả loại sự kiện</option>
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Holidays grouped by year */}
                {sortedYears.map((year) => (
                  <div key={year} className="mb-8">
                    <h2 className="text-lg font-bold text-[#003366] mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-[#003366] rounded-full"></span>
                      NĂM {year}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                      {groupedByYear[year].map((item) => (
                        <article key={item.id} className="group cursor-pointer flex flex-col">
                          <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col flex-1">
                            <div className="flex justify-center mb-3">
                              <span className="inline-block bg-[#003366] text-white text-xs font-medium px-4 py-1.5 rounded">
                                {item.date}
                              </span>
                            </div>
                            <div className="aspect-[4/3] rounded overflow-hidden mb-3">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <h3 className="text-sm text-slate-600 leading-relaxed group-hover:text-[#003366] transition-colors flex-1 font-normal">
                              {item.title}
                            </h3>
                            <a href="#" className="text-sm text-[#003366] font-medium hover:underline mt-3 inline-block">
                              Xem chi tiết
                            </a>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}

                {filteredHolidays.length === 0 && (
                  <div className="bg-white rounded-lg p-8 text-center border border-slate-200">
                    <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500">Không tìm thấy kết quả phù hợp.</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside>
                <div className="bg-white rounded-lg border border-slate-200 p-5 sticky top-28">
                  <h3 className="font-semibold text-[#003366] mb-4 flex items-center gap-2 text-[15px]">
                    <Calendar className="h-5 w-5" />
                    Liên kết liên quan
                  </h3>
                  <ul className="space-y-0">
                    {relatedLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-slate-600 hover:text-[#003366] flex items-center gap-2 py-2.5 border-b border-slate-100 last:border-0 transition-colors"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AnnualHolidays;
