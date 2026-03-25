import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import leadershipPortrait from '@/assets/leadership-portrait.png';

const LeadershipMessage = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />
      <ScrollToTop />

      <main className="pt-[121px]">
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

        {/* Content Card */}
        <div className="bg-slate-100 py-10 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Gradient top border */}
              <div className="h-[9px]" style={{ background: 'linear-gradient(90deg, #003366, #0066cc, #00a86b, #8bc34a, #e8930a)' }}></div>

              <div className="px-8 md:px-16 py-12">
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-center text-slate-800 mb-2">
                  THÔNG ĐIỆP CỦA LÃNH ĐẠO
                </h1>
                <div className="w-24 h-0.5 bg-slate-300 mx-auto mb-10"></div>

                <div className="text-justify">
                  <div className="float-left mr-8 mb-4 w-full sm:w-[440px] md:w-[520px]">
                    <img
                      src={leadershipPortrait}
                      alt="Ông Lương Hải Sinh - Chủ tịch Hội đồng thành viên"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Trong giai đoạn 2020 – 2021, thế giới đã gánh chịu hậu quả nặng nề của đại dịch Covid-19, nền kinh tế Việt Nam nói chung và thị trường chứng khoán nói riêng cũng đối mặt với nhiều khó khăn và thách thức. Tuy nhiên, nhờ sự vào cuộc mạnh mẽ của cả hệ thống chính trị, dịch bệnh đang được kiểm soát, nền kinh tế vĩ mô có dấu hiệu phục hồi tích cực; nhờ đó thị trường chứng khoán có cơ sở để vượt qua khó khăn trong ngắn hạn và dần nâng cao sức chống chịu trước những thách thức trong tương lai.
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Năm 2021 cũng là một năm bản lề đối với thị trường chứng khoán Việt Nam. Thông qua việc ban hành một loạt các văn bản pháp luật mới như Luật Doanh nghiệp, Luật Chứng khoán và các Nghị định và Thông tư hướng dẫn, môi trường pháp lý trên thị trường chứng khoán được đổi mới toàn diện, tiệm cận với các thông lệ quốc tế. Đặc biệt, Sở Giao dịch Chứng khoán Việt Nam đã được thành lập theo Quyết định số 37/2020/QĐ-TTg ngày 23/12/2020 của Thủ tướng Chính phủ theo mô hình Công ty mẹ - Công ty con trên cơ sở sắp xếp lại Sở Giao dịch Chứng khoán Tp. Hồ Chí Minh và Sở Giao dịch Chứng khoán Hà Nội. Tất cả những sự thay đổi này là tất yếu của quá trình vận động và phát triển của một nền kinh tế năng động.
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Mục tiêu cốt lõi, kim chỉ nam trong hoạt động của Sở Giao dịch Chứng khoán Việt Nam là cùng Sở Giao dịch Chứng khoán Hà Nội, Sở Giao dịch Chứng khoán Tp. Hồ Chí Minh thực hiện chức năng tổ chức thị trường giao dịch chứng khoán theo quy định của pháp luật chứng khoán, đảm bảo hoạt động giao dịch chứng khoán tại các Sở Giao dịch Chứng khoán được tiến hành minh bạch, công khai, công bằng, trật tự, an toàn, hiệu quả; bảo vệ quyền và lợi ích hợp pháp của nhà đầu tư tham gia giao dịch chứng khoán. Bên cạnh đó, Sở Giao dịch Chứng khoán Việt Nam sẽ tăng cường hội nhập, liên kết với các đơn vị tổ chức thị trường khu vực và thế giới, hướng tới các chuẩn mực quốc tế, phát triển bền vững, nâng cao khả năng cạnh tranh, quản trị rủi ro, góp phần thu hẹp khoảng cách phát triển giữa thị trường chứng khoán Việt Nam với các nước phát triển.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    Sở Giao dịch Chứng khoán Việt Nam sẽ kế thừa những thành tựu mà Sở Giao dịch Chứng khoán Tp. Hồ Chí Minh, Sở Giao dịch Chứng khoán Hà Nội đã đạt được và xây dựng mục tiêu cụ thể cho từng giai đoạn phát triển tiếp theo, phù hợp với Kế hoạch phát triển kinh tế - xã hội trong thời kỳ mới, Chiến lược phát triển ngành tài chính và Chiến lược phát triển thị trường chứng khoán Việt Nam.
                  </p>

                  <div className="clear-both"></div>
                </div>

                <div className="text-right text-slate-500 italic mt-8">
                  <p className="font-bold">Trân trọng./.</p>
                </div>

              </div>
              {/* Gradient bottom border */}
              <div className="h-[9px]" style={{ background: 'linear-gradient(90deg, #003366, #0066cc, #00a86b, #8bc34a, #e8930a)' }}></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadershipMessage;
