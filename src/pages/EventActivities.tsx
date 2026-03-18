import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, MapPin, ChevronRight, Clock, Filter, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import event25years from '@/assets/event-25years.jpg';
import eventMember2025 from '@/assets/event-member2025.jpg';
import vnxIntro from '@/assets/vnx-intro.jpg';

// Filter categories
const filterCategories = [
  { label: 'Hoạt động sự kiện', href: '/hoat-dong-su-kien', active: true },
  { label: 'Hoạt động xã hội', href: '/hoat-dong-xa-hoi', active: false },
  { label: 'Hoạt động hợp tác', href: '/hoat-dong-hop-tac', active: false },
  { label: 'Lịch nghỉ hàng năm', href: '/lich-nghi-hang-nam', active: false },
];

// Event types for filter
const eventTypes = [
  { value: 'all', label: 'Tất cả loại sự kiện' },
  { value: 'ceremony', label: 'Lễ khai trương, lễ ra mắt' },
  { value: 'conference', label: 'Hội nghị, hội thảo' },
  { value: 'training', label: 'Đào tạo, tập huấn' },
  { value: 'market', label: 'Sự kiện thị trường' },
];

// Sample events data
const eventsData = [
  {
    id: 1,
    title: 'Lễ kỷ niệm 25 năm thành lập thị trường chứng khoán Việt Nam',
    date: '20/07/2025',
    time: '08:30',
    location: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
    description: 'Sự kiện trọng đại đánh dấu chặng đường 25 năm phát triển của thị trường chứng khoán Việt Nam với sự tham dự của các lãnh đạo cấp cao và đại diện các tổ chức trong ngành.',
    image: event25years,
    type: 'ceremony',
    featured: true,
  },
  {
    id: 2,
    title: 'Hội thảo Phát triển thị trường vốn bền vững 2025',
    date: '15/06/2025',
    time: '09:00',
    location: 'Khách sạn Sheraton, TP. Hồ Chí Minh',
    description: 'Hội thảo quy tụ các chuyên gia hàng đầu trong và ngoài nước thảo luận về xu hướng phát triển thị trường vốn bền vững và trách nhiệm xã hội.',
    image: eventMember2025,
    type: 'conference',
    featured: true,
  },
  {
    id: 3,
    title: 'Lễ đánh cồng khai trương phiên giao dịch đầu năm 2025',
    date: '02/01/2025',
    time: '08:45',
    location: 'Sở Giao dịch Chứng khoán TP. Hồ Chí Minh',
    description: 'Nghi thức đánh cồng khai trương phiên giao dịch đầu tiên của năm mới với sự tham dự của lãnh đạo Bộ Tài chính và các doanh nghiệp niêm yết.',
    image: vnxIntro,
    type: 'ceremony',
    featured: false,
  },
  {
    id: 4,
    title: 'Hội nghị thường niên các Công ty Chứng khoán Thành viên 2024',
    date: '15/12/2024',
    time: '14:00',
    location: 'Trung tâm Hội nghị GEM Center, TP. Hồ Chí Minh',
    description: 'Hội nghị tổng kết hoạt động năm và định hướng phát triển cho các công ty chứng khoán thành viên trong năm tiếp theo.',
    image: eventMember2025,
    type: 'conference',
    featured: false,
  },
  {
    id: 5,
    title: 'Chương trình đào tạo Nhà đầu tư chứng khoán chuyên nghiệp',
    date: '10/11/2024',
    time: '09:00',
    location: 'Trường Đại học Kinh tế TP. Hồ Chí Minh',
    description: 'Khóa đào tạo chuyên sâu dành cho nhà đầu tư cá nhân với các chuyên đề về phân tích kỹ thuật, phân tích cơ bản và quản lý danh mục đầu tư.',
    image: vnxIntro,
    type: 'training',
    featured: false,
  },
  {
    id: 6,
    title: 'Sự kiện kết nối doanh nghiệp niêm yết và nhà đầu tư',
    date: '25/10/2024',
    time: '08:30',
    location: 'Khách sạn Pullman, Hà Nội',
    description: 'Cơ hội để các doanh nghiệp niêm yết gặp gỡ, trao đổi trực tiếp với các nhà đầu tư tổ chức và cá nhân tiềm năng.',
    image: event25years,
    type: 'market',
    featured: false,
  },
];

// Related events for sidebar
const relatedLinks = [
  { label: 'Lịch sự kiện sắp tới', href: '#' },
  { label: 'Thư viện hình ảnh sự kiện', href: '#' },
  { label: 'Video sự kiện nổi bật', href: '#' },
  { label: 'Thông cáo báo chí', href: '#' },
];

const EventActivities = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events based on selection
  const filteredEvents = eventsData.filter((event) => {
    const matchesYear = selectedYear === 'all' || event.date.includes(selectedYear);
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = !searchQuery || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesType && matchesSearch;
  });

  const featuredEvents = filteredEvents.filter(e => e.featured);
  const regularEvents = filteredEvents.filter(e => !e.featured);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-foreground">Tin tức và sự kiện</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-primary font-medium">Hoạt động sự kiện</span>
            </nav>
          </div>
        </div>

        {/* Page Title with VNX Brand Background */}
        <div className="relative overflow-hidden mb-8" style={{ background: 'linear-gradient(135deg, hsl(210 100% 18%) 0%, hsl(210 100% 24%) 50%, hsl(210 90% 28%) 100%)' }}>
          {/* Curved accent swoosh */}
          <svg 
            className="absolute right-0 top-0 h-full w-auto" 
            viewBox="0 0 300 100" 
            preserveAspectRatio="xMaxYMin slice"
            fill="none"
            style={{ minWidth: '400px' }}
          >
            <defs>
              <linearGradient id="swooshGradientEvent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 45%)" />
                <stop offset="50%" stopColor="hsl(80, 70%, 50%)" />
                <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
              </linearGradient>
            </defs>
            <path 
              d="M100,0 Q180,20 220,50 T300,100 L300,0 Z" 
              fill="url(#swooshGradientEvent)" 
              opacity="0.2"
            />
            <path 
              d="M120,0 Q200,30 250,60 T300,100" 
              stroke="url(#swooshGradientEvent)" 
              strokeWidth="4" 
              fill="none"
              opacity="0.8"
            />
          </svg>
          
          <div className="container mx-auto px-4 py-8 relative z-10">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Hoạt động sự kiện
            </h1>
            <p className="text-white/70">
              Thông tin các sự kiện, hội nghị, hội thảo và hoạt động chuyên môn do VNX tổ chức hoặc tham gia.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filterCategories.map((cat) => (
              <Link
                key={cat.label}
                to={cat.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
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
              <div className="bg-card rounded-xl border border-border p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Tìm kiếm theo tiêu đề..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  {/* Year Filter */}
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-full md:w-[140px]">
                      <SelectValue placeholder="Năm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả năm</SelectItem>
                      <SelectItem value="2025">Năm 2025</SelectItem>
                      <SelectItem value="2024">Năm 2024</SelectItem>
                      <SelectItem value="2023">Năm 2023</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Type Filter */}
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Loại sự kiện" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Featured Events */}
              {featuredEvents.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-primary rounded-full"></span>
                    Sự kiện nổi bật
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {featuredEvents.map((event) => (
                      <article 
                        key={event.id}
                        className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                              Nổi bật
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <div className="space-y-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{event.date}</span>
                              <Clock className="h-4 w-4 text-primary ml-2" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {event.description}
                          </p>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            Xem chi tiết
                          </Button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Events List */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-accent rounded-full"></span>
                  Danh sách sự kiện ({regularEvents.length})
                </h2>
                <div className="space-y-4">
                  {regularEvents.map((event) => (
                    <article 
                      key={event.id}
                      className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row"
                    >
                      <div className="md:w-64 shrink-0">
                        <div className="aspect-video md:aspect-[4/3] md:h-full relative overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="p-5 flex-1">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {event.description}
                        </p>
                        <Button variant="link" size="sm" className="p-0 h-auto text-primary gap-1">
                          Xem chi tiết
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>

                {filteredEvents.length === 0 && (
                  <div className="bg-muted/50 rounded-xl p-8 text-center">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Không tìm thấy sự kiện phù hợp với bộ lọc đã chọn.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredEvents.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>Trước</Button>
                    <Button variant="default" size="sm">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="sm">Tiếp</Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-5 sticky top-28">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Liên kết liên quan
                </h3>
                <ul className="space-y-2">
                  {relatedLinks.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-sm text-foreground hover:text-primary flex items-center gap-2 py-2 border-b border-border last:border-0 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EventActivities;
