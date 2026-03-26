import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Calendar, Bell } from 'lucide-react';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';


interface HolidayItem {
  id: number;
  date: string;
  title: string;
  year: number;
}

const holidaysData: HolidayItem[] = [
  { id: 1, date: '22/04/2026', title: 'Thông báo lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2026', year: 2026 },
  { id: 2, date: '10/04/2026', title: 'Thông báo lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2026', year: 2026 },
  { id: 3, date: '05/02/2026', title: 'Thông báo lịch nghỉ Tết Âm lịch 2026', year: 2026 },
  { id: 4, date: '25/12/2025', title: 'Thông báo lịch nghỉ Tết dương lịch 2026', year: 2025 },
  { id: 5, date: '20/08/2025', title: 'Thông báo lịch nghỉ lễ Quốc khánh 2/9 năm 2025', year: 2025 },
  { id: 6, date: '22/04/2025', title: 'Thông báo lịch nghỉ lễ Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025', year: 2025 },
  { id: 7, date: '01/04/2025', title: 'Thông báo lịch nghỉ Giỗ Tổ Hùng Vương (Mùng 10/3 âm lịch) năm 2025', year: 2025 },
];

const AnnualHolidays = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const filteredHolidays = holidaysData.filter((item) => {
    const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === 'all' || item.year.toString() === selectedYear;
    return matchesSearch && matchesYear;
  });

  const years = [...new Set(holidaysData.map(h => h.year))].sort((a, b) => b - a);

  const latestHoliday = filteredHolidays[0];

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

            {/* Search */}
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
                  className="h-10 px-3 rounded-md border border-slate-300 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] md:w-[160px]"
                >
                  <option value="all">Tất cả năm</option>
                  {years.map(y => (
                    <option key={y} value={y.toString()}>Năm {y}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Featured Latest */}
            {latestHoliday && (
              <div className="mb-8">
                <h2 className="text-lg font-bold text-[#003366] mb-4 flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Thông báo mới nhất
                </h2>
                <div className="bg-gradient-to-r from-[#003366] to-[#004d99] rounded-lg p-6 text-white shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-10 w-10 text-white/70 shrink-0" />
                      <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                        {latestHoliday.date}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold leading-relaxed">
                        {latestHoliday.title}
                      </h3>
                    </div>
                    <a href="#" className="shrink-0 bg-white text-[#003366] text-sm font-semibold px-5 py-2 rounded-md hover:bg-white/90 transition-colors">
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* All Announcements - Table by Year */}
            <div>
              <h2 className="text-lg font-bold text-[#003366] mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Tất cả thông báo
              </h2>

              {sortedYears.map((year) => (
                <div key={year} className="mb-6">
                  <h3 className="text-base font-bold text-[#003366] mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-[#003366] rounded-full"></span>
                    Năm {year}
                  </h3>
                  <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#003366] text-white">
                          <th className="text-left px-5 py-3 font-semibold w-[140px]">Ngày thông báo</th>
                          <th className="text-left px-5 py-3 font-semibold">Nội dung</th>
                          <th className="w-[100px]"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupedByYear[year].map((item, idx) => (
                          <tr
                            key={item.id}
                            className={`border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors ${
                              idx % 2 === 1 ? 'bg-slate-50/50' : ''
                            }`}
                          >
                            <td className="px-5 py-3.5 text-slate-500 font-medium whitespace-nowrap">{item.date}</td>
                            <td className="px-5 py-3.5 text-slate-700 leading-relaxed">{item.title}</td>
                            <td className="px-5 py-3.5 text-right">
                              <a href="#" className="text-[#003366] font-medium hover:underline text-xs">
                                Xem chi tiết
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AnnualHolidays;
