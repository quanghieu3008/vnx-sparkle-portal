import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Shield, Send, Eye, Clock, ExternalLink, Search, ShieldCheck, AlertTriangle, Lock, BookOpen, MessageSquareWarning } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

import imgWarning1 from '@/assets/investor-warning-1.jpg';
import imgWarning2 from '@/assets/investor-warning-2.jpg';
import imgWarning3 from '@/assets/investor-warning-3.jpg';
import imgWarning4 from '@/assets/investor-warning-4.jpg';
import imgWarning5 from '@/assets/investor-warning-5.jpg';
import imgWarning6 from '@/assets/investor-warning-6.jpg';
import imgWarning7 from '@/assets/investor-warning-7.jpg';
import imgWarning8 from '@/assets/investor-warning-8.jpg';
import imgWarning9 from '@/assets/investor-warning-9.jpg';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Nhận diện về phương thức, thủ đoạn lừa đảo chứng khoán hiện nay và biện pháp phòng tránh',
    description: 'Nhiều đối tượng lợi dụng tâm lý ham lợi nhuận nhanh, thiếu hiểu biết hoặc kinh nghiệm của nhà đầu tư để thực hiện hành vi chiếm đoạt tài sản.',
    image: imgWarning1,
    date: '15/03/2026',
    category: 'Cảnh báo',
  },
  {
    id: 2,
    title: 'Những sai lầm cần tránh trong đầu tư chứng khoán',
    description: 'Cùng tìm hiểu 6 sai lầm thường gặp và cách phòng tránh để tối ưu hóa chiến lược đầu tư của bạn.',
    image: imgWarning2,
    date: '12/03/2026',
    category: 'Kiến thức',
  },
  {
    id: 3,
    title: 'Đầu tư chứng khoán online, hai nạn nhân bị lừa 15 tỷ đồng',
    description: 'Hai nạn nhân tham gia nhóm tư vấn đầu tư chứng khoán trên ứng dụng NEEX đã bị lừa mất 15 tỷ đồng mới trình báo cơ quan công an.',
    image: imgWarning3,
    date: '10/03/2026',
    category: 'Tin tức',
  },
  {
    id: 4,
    title: 'Cảnh báo từ Ủy ban Chứng khoán Nhà nước về Tikop, Buff, Topi',
    description: 'Ủy ban Chứng khoán Nhà nước cảnh báo nhà đầu tư cần thận trọng, tìm hiểu kĩ về pháp lý khi thực hiện giao dịch hợp tác đầu tư qua các ứng dụng, website trên môi trường mạng.',
    image: imgWarning4,
    date: '08/03/2026',
    category: 'Cảnh báo',
  },
  {
    id: 5,
    title: 'Ủy ban Chứng khoán cảnh báo nhà đầu tư không mua tiền mã hóa Pi, không ném tiền vào các công ty chứng khoán "ma"',
    description: 'Nhiều sàn giao dịch chứng khoán trái phép thông qua mạng xã hội, kêu gọi nhà đầu tư mở tài khoản, gửi tiền vào các ví điện tử, đầu tư vào các loại tiền mã hóa.',
    image: imgWarning5,
    date: '05/03/2026',
    category: 'Cảnh báo',
  },
  {
    id: 6,
    title: 'Đầu tư chứng khoán, cẩn thận không mắc bẫy lừa đảo',
    description: 'Bài viết phân tích cơ chế hoạt động, các yếu tố tâm lý bị lợi dụng, và cung cấp lộ trình phòng vệ, xử lý mang tính hệ thống và thực tế.',
    image: imgWarning6,
    date: '01/03/2026',
    category: 'Phân tích',
  },
  {
    id: 7,
    title: 'HOSE tiếp tục đưa 6 cổ phiếu vào diện cảnh báo',
    description: 'HOSE có các quyết định về việc đưa cổ phiếu DAG, LEC, SJF, VMD vào diện cảnh báo kể từ ngày 21/9/2023, còn cổ phiếu POM và ASP từ ngày 22/9.',
    image: imgWarning7,
    date: '28/02/2026',
    category: 'Quy định',
  },
  {
    id: 8,
    title: 'Cẩm nang nhận biết và phòng tránh lừa đảo đầu tư sàn chứng khoán ảo, tiền ảo, đa cấp',
    description: 'Trước xu thế đầu tư vào các hoạt động trực tuyến, tội phạm lừa đảo qua mạng đẩy mạnh hoạt động thông qua hình thức này.',
    image: imgWarning8,
    date: '25/02/2026',
    category: 'Cẩm nang',
  },
  {
    id: 9,
    title: '4 tỷ đồng đổi 7,77 tỷ ảo: Cú lừa đầu tư chứng khoán qua app giả mạo',
    description: 'App giả mô phỏng sàn chứng khoán chuyên nghiệp, dụ nhà đầu tư thử "đánh lệnh". Người chơi đầu tư tiền thật, nhận "lợi nhuận ảo" rồi bị xóa tài khoản.',
    image: imgWarning9,
    date: '20/02/2026',
    category: 'Tin tức',
  },
];

const featuredIds = [5, 2, 7];
const featuredArticles = articles.filter(a => featuredIds.includes(a.id));

const filterTabs = ['Tất cả', 'Cảnh báo', 'Thị trường', 'Kiến thức'];

const tips = [
  {
    icon: ShieldCheck,
    title: 'Kiểm tra giấy phép',
    desc: 'Luôn xác minh giấy phép hoạt động của công ty chứng khoán trên website UBCKNN trước khi mở tài khoản.',
  },
  {
    icon: AlertTriangle,
    title: 'Cảnh giác lợi nhuận cao',
    desc: 'Không tin vào các lời hứa lợi nhuận cố định, cam kết không rủi ro – đây là dấu hiệu lừa đảo.',
  },
  {
    icon: Lock,
    title: 'Bảo vệ thông tin',
    desc: 'Không chia sẻ mật khẩu, OTP, thông tin tài khoản với bất kỳ ai, kể cả người tự xưng nhân viên công ty.',
  },
  {
    icon: BookOpen,
    title: 'Tự nghiên cứu',
    desc: 'Luôn tự phân tích và nghiên cứu trước khi đưa ra quyết định đầu tư, không nghe theo tin đồn.',
  },
];

const InvestorWarnings = () => {
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const { toast } = useToast();

  const [reportForm, setReportForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    organization: '',
    content: '',
  });

  const goToSlide = useCallback((index: number) => {
    setCurrentFeatured(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentFeatured(prev => (prev + 1) % featuredArticles.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentFeatured(prev => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Gửi phản ánh thành công!',
      description: 'Cảm ơn bạn đã gửi phản ánh. Chúng tôi sẽ xử lý trong thời gian sớm nhất.',
    });
    setReportForm({ name: '', email: '', phone: '', subject: '', organization: '', content: '' });
  };

  const filteredArticles = activeFilter === 'Tất cả'
    ? articles
    : articles.filter(a => a.category === activeFilter);

  const scrollToReport = () => {
    document.getElementById('report-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />
      <main className="pt-[121px]">
        {/* Breadcrumb */}
        <div className="bg-white sticky top-[121px] z-30 border-b border-border/40">
          <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors leading-none">Trang chủ</Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground leading-none">Tin tức và sự kiện</span>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-foreground font-medium leading-none">Khuyến cáo NĐT</span>
          </div>
        </div>

        {/* Hero Title Block */}
        <div className="relative bg-[#003366] py-10 flex flex-col items-center justify-center overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 200" fill="none">
            <circle cx="100" cy="100" r="120" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            <circle cx="1100" cy="80" r="90" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            <path d="M0,120 Q300,40 600,100 T1200,60" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
          </svg>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-4">
              <Shield className="h-10 w-10 text-amber-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-3">
              Khuyến Cáo <em className="italic text-amber-400">Nhà Đầu Tư</em>
            </h1>
            <p className="text-white/60 text-sm max-w-lg mb-6">
              Chỉ giao dịch trên các sàn chứng khoán được cấp phép. Hãy gửi phản ánh cho chúng tôi khi phát hiện hành vi vi phạm pháp luật.
            </p>
            <Button
              onClick={scrollToReport}
              className="bg-amber-500 hover:bg-amber-600 text-[#003366] font-bold rounded-full px-6 h-10"
            >
              <Shield className="h-4 w-4 mr-2" />
              Phản ánh vi phạm
            </Button>
          </div>
        </div>

        {/* Featured Articles Carousel */}
        <section className="bg-[#003366] pb-8">
          <div className="container mx-auto px-4">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatured}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col md:flex-row"
                >
                  {/* Image side */}
                  <div className="relative w-full md:w-[45%] h-[220px] md:h-[320px]">
                    <img
                      src={featuredArticles[currentFeatured].image}
                      alt={featuredArticles[currentFeatured].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded bg-red-600 text-white text-xs font-bold">
                        {featuredArticles[currentFeatured].category}
                      </span>
                    </div>
                  </div>
                  {/* Content side */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-amber-500 text-sm">★</span>
                      <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Bài viết nổi bật</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#003366] leading-snug mb-3 line-clamp-3">
                      {featuredArticles[currentFeatured].title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {featuredArticles[currentFeatured].description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredArticles[currentFeatured].date}
                      </span>
                      <button
                        onClick={() => setSelectedArticle(featuredArticles[currentFeatured])}
                        className="flex items-center gap-1 text-sm text-amber-600 font-semibold hover:underline"
                      >
                        Đọc thêm <ExternalLink className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {featuredArticles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    i === currentFeatured ? 'bg-amber-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="bg-slate-100 py-10">
          <div className="container mx-auto px-4">
            {/* Filter tabs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[#003366] font-bold text-lg mr-2">↘ Tất cả bài viết</span>
              <div className="flex gap-2 ml-auto">
                {filterTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      activeFilter === tab
                        ? 'bg-[#003366] text-white'
                        : 'bg-white text-[#003366] border border-[#003366]/20 hover:bg-[#003366]/10'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-red-600 text-white text-[11px] font-bold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-[#003366] leading-snug mb-2 line-clamp-2 group-hover:text-[#0066cc] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{article.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.date}</span>
                      <span className="flex items-center gap-1 text-amber-600 font-medium group-hover:underline">
                        <Eye className="h-3 w-3" />Xem chi tiết
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-slate-100 pb-10">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#003366] text-center mb-8 italic">
              Nhà đầu tư cần lưu ý
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {tips.map((tip, i) => (
                <div key={i} className="bg-white rounded-xl p-6 flex gap-4 items-start shadow-sm">
                  <div className="flex-shrink-0 h-11 w-11 rounded-full bg-amber-100 flex items-center justify-center">
                    <tip.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] text-sm mb-1">{tip.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Violation Report Section */}
        <section id="report-section" className="py-12 bg-gradient-to-br from-[#003366] via-[#004080] to-[#002244] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
              <circle cx="200" cy="300" r="200" stroke="white" strokeWidth="0.5" />
              <circle cx="1000" cy="200" r="150" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/15 mb-4">
                  <MessageSquareWarning className="h-4 w-4 text-amber-400" />
                  <span className="text-amber-400 font-semibold text-sm">Phản ánh vi phạm</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 italic">
                  Phản ánh hành vi vi phạm
                </h2>
                <p className="text-white/60 text-sm max-w-lg mx-auto">
                  Nếu bạn phát hiện tổ chức/cá nhân có hành vi vi phạm quy định pháp luật về chứng khoán và thị trường chứng khoán, hãy gửi phản ánh cho chúng tôi.
                </p>
              </div>

              <form onSubmit={handleReportSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-xs font-medium mb-1.5">Họ và tên <span className="text-amber-400">*</span></label>
                    <Input
                      required
                      value={reportForm.name}
                      onChange={e => setReportForm(p => ({ ...p, name: e.target.value }))}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-xs font-medium mb-1.5">Email <span className="text-amber-400">*</span></label>
                    <Input
                      required
                      type="email"
                      value={reportForm.email}
                      onChange={e => setReportForm(p => ({ ...p, email: e.target.value }))}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-xs font-medium mb-1.5">Số điện thoại</label>
                    <Input
                      value={reportForm.phone}
                      onChange={e => setReportForm(p => ({ ...p, phone: e.target.value }))}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50"
                      placeholder="0xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-xs font-medium mb-1.5">Tổ chức/cá nhân vi phạm <span className="text-amber-400">*</span></label>
                    <Input
                      required
                      value={reportForm.organization}
                      onChange={e => setReportForm(p => ({ ...p, organization: e.target.value }))}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50"
                      placeholder="Tên tổ chức/cá nhân"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-1.5">Tiêu đề phản ánh <span className="text-amber-400">*</span></label>
                  <Input
                    required
                    value={reportForm.subject}
                    onChange={e => setReportForm(p => ({ ...p, subject: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50"
                    placeholder="Nhập tiêu đề phản ánh"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-1.5">Nội dung chi tiết <span className="text-amber-400">*</span></label>
                  <Textarea
                    required
                    rows={5}
                    value={reportForm.content}
                    onChange={e => setReportForm(p => ({ ...p, content: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50 resize-none"
                    placeholder="Mô tả chi tiết hành vi vi phạm, thời gian, địa điểm, bằng chứng (nếu có)..."
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold h-11 rounded-lg">
                  <Send className="h-4 w-4 mr-2" />
                  Gửi phản ánh
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 z-10 bg-[#003366] px-5 py-3 flex items-center justify-between">
                <h3 className="text-white font-bold text-sm line-clamp-1 flex-1 mr-4">{selectedArticle.title}</h3>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
                >
                  ✕
                </button>
              </div>
              <div className="relative h-56 md:h-72">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-4">
                  <span className="px-2.5 py-1 rounded bg-red-600 text-white text-[11px] font-bold">
                    {selectedArticle.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{selectedArticle.date}</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{selectedArticle.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default InvestorWarnings;
