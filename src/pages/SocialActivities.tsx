import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight, Heart, Building2, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import event25years from '@/assets/event-25years.jpg';
import eventMember2025 from '@/assets/event-member2025.jpg';
import vnxIntro from '@/assets/vnx-intro.jpg';

const filterCategories = [
  { label: 'Hoạt động sự kiện', href: '/hoat-dong-su-kien', active: false },
  { label: 'Hoạt động xã hội', href: '/hoat-dong-xa-hoi', active: true },
  { label: 'Hoạt động hợp tác', href: '/hoat-dong-hop-tac', active: false },
  { label: 'Lịch nghỉ hàng năm', href: '/lich-nghi-hang-nam', active: false },
];

const activityTypes = [
  { value: 'all', label: 'Tất cả hoạt động' },
  { value: 'charity', label: 'Từ thiện' },
  { value: 'welfare', label: 'An sinh xã hội' },
  { value: 'community', label: 'Hỗ trợ cộng đồng' },
  { value: 'volunteer', label: 'Tình nguyện' },
];

const activitiesData = [
  {
    id: 1,
    title: 'Chương trình "Xuân yêu thương" – Tặng quà Tết cho đồng bào vùng cao',
    date: '15/01/2025',
    organizer: 'VNX phối hợp với Hội Chữ thập đỏ Việt Nam',
    description: 'Chương trình thiện nguyện thường niên mang hơi ấm mùa xuân đến với đồng bào dân tộc thiểu số tại các tỉnh miền núi phía Bắc.',
    image: event25years,
    type: 'charity',
    featured: true,
    result: 'Trao tặng 500 phần quà trị giá 250 triệu đồng',
  },
  {
    id: 2,
    title: 'Xây dựng nhà tình nghĩa cho gia đình chính sách',
    date: '27/07/2024',
    organizer: 'VNX và các Công ty Chứng khoán Thành viên',
    description: 'Chương trình hỗ trợ xây dựng nhà ở cho các gia đình chính sách, người có công với cách mạng tại các tỉnh miền Trung.',
    image: eventMember2025,
    type: 'welfare',
    featured: true,
    result: 'Xây dựng 10 căn nhà tình nghĩa trị giá 1,5 tỷ đồng',
  },
  {
    id: 3,
    title: 'Hiến máu nhân đạo "Giọt hồng sẻ chia"',
    date: '14/06/2024',
    organizer: 'VNX phối hợp với Viện Huyết học Truyền máu TW',
    description: 'Ngày hội hiến máu nhân đạo với sự tham gia của cán bộ, nhân viên VNX và các đơn vị thành viên.',
    image: vnxIntro,
    type: 'volunteer',
    featured: false,
    result: 'Thu được 150 đơn vị máu',
  },
  {
    id: 4,
    title: 'Học bổng "Ươm mầm tài năng" cho sinh viên ngành Tài chính',
    date: '10/09/2024',
    organizer: 'VNX',
    description: 'Chương trình trao học bổng cho sinh viên xuất sắc, vượt khó tại các trường đại học khối ngành Kinh tế - Tài chính.',
    image: eventMember2025,
    type: 'welfare',
    featured: false,
    result: 'Trao 50 suất học bổng, tổng trị giá 500 triệu đồng',
  },
  {
    id: 5,
    title: 'Hỗ trợ đồng bào bị ảnh hưởng bởi bão lũ miền Trung',
    date: '20/10/2024',
    organizer: 'VNX và Ủy ban MTTQ Việt Nam',
    description: 'Chương trình quyên góp và hỗ trợ khẩn cấp cho đồng bào các tỉnh miền Trung bị ảnh hưởng nặng nề bởi thiên tai.',
    image: event25years,
    type: 'community',
    featured: false,
    result: 'Huy động được 2 tỷ đồng tiền mặt và hàng hóa',
  },
  {
    id: 6,
    title: 'Trồng cây xanh "Vì một Việt Nam xanh"',
    date: '05/06/2024',
    organizer: 'VNX phối hợp với Bộ TN&MT',
    description: 'Hoạt động trồng cây xanh nhân Ngày Môi trường Thế giới, góp phần bảo vệ môi trường và phát triển bền vững.',
    image: vnxIntro,
    type: 'community',
    featured: false,
    result: 'Trồng được 1.000 cây xanh tại 5 tỉnh thành',
  },
  {
    id: 7,
    title: 'Chương trình tình nguyện "Vì trẻ em vùng khó khăn"',
    date: '12/03/2024',
    organizer: 'VNX phối hợp với Quỹ Bảo trợ Trẻ em',
    description: 'Hoạt động tình nguyện hỗ trợ trẻ em vùng khó khăn với các chương trình giáo dục, vui chơi và tặng quà.',
    image: vnxIntro,
    type: 'volunteer',
    featured: false,
    result: 'Hỗ trợ 200 trẻ em tại 3 tỉnh miền núi',
  },
];
const relatedLinks = [
  { label: 'Báo cáo trách nhiệm xã hội (CSR)', href: '#' },
  { label: 'Thư viện hình ảnh hoạt động', href: '#' },
  { label: 'Video hoạt động xã hội', href: '#' },
  { label: 'Đăng ký tình nguyện viên', href: '#' },
];

const SocialActivities = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = activitiesData.filter((activity) => {
    const matchesYear = selectedYear === 'all' || activity.date.includes(selectedYear);
    const matchesType = selectedType === 'all' || activity.type === selectedType;
    const matchesSearch = !searchQuery || 
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesType && matchesSearch;
  });

  const featuredActivities = filteredActivities.filter(a => a.featured);
  const regularActivities = filteredActivities.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb - light background */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-slate-500">
              <Link to="/" className="hover:text-[#003366] transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-[#003366] font-medium">Tin tức và sự kiện</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-slate-700">Hoạt động xã hội</span>
            </nav>
          </div>
        </div>

        {/* Page Title - dark navy with swoosh */}
        <div className="relative overflow-hidden bg-[#003366] py-8 mb-0">
          <svg 
            className="absolute right-0 top-0 h-full w-auto" 
            viewBox="0 0 300 100" 
            preserveAspectRatio="xMaxYMin slice"
            fill="none"
            style={{ minWidth: '400px' }}
          >
            <defs>
              <linearGradient id="swooshGradientSocial" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" fill="url(#swooshGradientSocial)" opacity="0.15" />
            <path d="M120,0 Q200,30 250,60 T300,100" stroke="url(#swooshGradientSocial)" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="h-8 w-8 text-[#e8930a]" />
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Hoạt động xã hội
              </h1>
            </div>
            <p className="text-white/60 text-sm">
              Các hoạt động vì cộng đồng, chương trình an sinh xã hội và trách nhiệm xã hội của VNX.
            </p>
          </div>
        </div>

        {/* Content area - light background */}
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

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Filters Row */}
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
                      <option value="2025">Năm 2025</option>
                      <option value="2024">Năm 2024</option>
                      <option value="2023">Năm 2023</option>
                    </select>
                    <div className="relative md:w-[200px]">
                      <Heart className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                      <select 
                        value={selectedType} 
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full h-10 pl-9 pr-3 rounded-md border border-slate-300 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] appearance-none"
                      >
                        {activityTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Nasdaq-style Layout: Featured Left + Most Viewed Right */}
                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Left - Featured */}
                  <div className="lg:col-span-7">
                    <h2 className="text-base font-bold text-[#003366] mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#003366] rounded-full"></span>
                      Hoạt động nổi bật
                    </h2>
                    
                    {featuredActivities.length > 0 ? (
                      <div className="space-y-5">
                        {featuredActivities.slice(0, 2).map((activity, index) => (
                          <article 
                            key={activity.id}
                            className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                          >
                            <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9]' : 'aspect-[16/8]'}`}>
                              <img 
                                src={activity.image} 
                                alt={activity.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-5">
                                <span className="inline-block bg-[#003366] text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                                  {activityTypes.find(t => t.value === activity.type)?.label || 'Hoạt động'}
                                </span>
                                <h3 className="font-bold text-white text-lg md:text-xl mb-2 line-clamp-2">
                                  {activity.title}
                                </h3>
                                <p className="text-white/80 text-sm line-clamp-2 mb-3">
                                  {activity.description}
                                </p>
                                <div className="flex items-center gap-4 text-white/70 text-sm">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {activity.date}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Building2 className="h-4 w-4" />
                                    <span className="line-clamp-1">{activity.organizer}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white rounded-lg p-8 text-center border border-slate-200">
                        <Heart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-500">Chưa có hoạt động nổi bật.</p>
                      </div>
                    )}
                  </div>

                  {/* Right - Most Viewed */}
                  <div className="lg:col-span-5">
                    <h2 className="text-base font-bold text-[#003366] mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#e8930a] rounded-full"></span>
                      Danh sách hoạt động
                    </h2>
                    
                    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                      <div className="divide-y divide-slate-100">
                        {regularActivities.slice(0, 5).map((activity) => (
                          <article 
                            key={activity.id}
                            className="p-4 hover:bg-slate-50 transition-colors group cursor-pointer"
                          >
                            <div className="flex gap-4">
                              <div className="w-20 h-16 shrink-0 rounded-lg overflow-hidden">
                                <img 
                                  src={activity.image} 
                                  alt={activity.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-xs font-medium text-[#003366] uppercase tracking-wide">
                                  {activityTypes.find(t => t.value === activity.type)?.label || 'Hoạt động'}
                                </span>
                                <h3 className="font-medium text-slate-800 text-sm line-clamp-2 mt-1 group-hover:text-[#003366] transition-colors">
                                  {activity.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                                  <span>{activity.date}</span>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                      
                      <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-center">
                        <div className="flex items-center gap-1.5">
                          <button className="h-8 px-2.5 rounded border border-slate-300 bg-white text-xs text-slate-400 cursor-not-allowed" disabled>Trước</button>
                          <button className="h-8 w-8 rounded bg-[#003366] text-white text-xs font-medium">1</button>
                          <button className="h-8 w-8 rounded border border-slate-300 bg-white text-xs text-slate-600 hover:border-[#003366] hover:text-[#003366]">2</button>
                          <button className="h-8 px-2.5 rounded border border-slate-300 bg-white text-xs text-slate-600 hover:border-[#003366] hover:text-[#003366]">Tiếp</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {filteredActivities.length === 0 && (
                  <div className="bg-white rounded-lg p-8 text-center mt-6 border border-slate-200">
                    <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500">Không tìm thấy hoạt động phù hợp với bộ lọc đã chọn.</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* CSR Info */}
                <div className="bg-white rounded-lg border border-slate-200 p-5 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#003366]/10 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-[#003366]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366]">Trách nhiệm xã hội</h3>
                      <p className="text-sm text-slate-500">CSR - VNX</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">
                    VNX cam kết đóng góp tích cực cho cộng đồng và phát triển bền vững, thể hiện trách nhiệm xã hội của tổ chức tài chính quốc gia.
                  </p>
                  <button className="w-full h-9 rounded border border-slate-300 bg-white text-sm text-slate-600 hover:border-[#003366] hover:text-[#003366] transition-colors">
                    Tìm hiểu thêm về CSR
                  </button>
                </div>

                {/* Related Links */}
                <div className="bg-white rounded-lg border border-slate-200 p-5 sticky top-28">
                  <h3 className="font-semibold text-[#003366] mb-4 flex items-center gap-2 text-[15px]">
                    <Heart className="h-5 w-5" />
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

export default SocialActivities;
