import { ArrowLeft, Calendar, Share2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import event25years from '@/assets/event-25years.jpg';
import vnxCeremony2024 from '@/assets/vnx-ceremony-2024.png';

const NewsDetail25Years = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[420px] overflow-hidden">
          <img
            src={event25years}
            alt="Lễ Kỷ niệm 25 năm hoạt động Thị trường Chứng khoán Việt Nam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 container mx-auto">
            <span className="inline-block bg-[#e8930a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Tin nổi bật
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight max-w-4xl">
              Lễ kỷ niệm 25 năm thành lập thị trường chứng khoán Việt Nam
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="pb-16">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Back button & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <button 
                  onClick={() => navigate(-1)} 
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#003366] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Quay lại
                </button>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> 28/07/2025</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 8 phút đọc</span>
                </div>
              </div>

              {/* Article Body */}
              <article className="bg-white rounded-lg border border-slate-200 p-6 md:p-10 shadow-sm">
                <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-6">
                  Ngày 28/07/2025, Lễ Kỷ niệm 25 năm hoạt động Thị trường Chứng khoán Việt Nam và Ra mắt Hệ thống công nghệ thông tin được tổ chức long trọng tại Hà Nội, đánh dấu một cột mốc quan trọng trong hành trình phát triển của thị trường tài chính Việt Nam.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[#003366] mt-10 mb-4">
                  Hành trình 25 năm "Nâng giá trị – Vững niềm tin"
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Trải qua 25 năm hình thành và phát triển, thị trường chứng khoán Việt Nam đã có những bước tiến vượt bậc cả về quy mô, chất lượng và mức độ hội nhập quốc tế. Từ những ngày đầu chỉ có 2 mã cổ phiếu niêm yết, đến nay thị trường đã có hơn 2.000 mã chứng khoán giao dịch trên hai sàn HOSE và HNX.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Quy mô vốn hóa thị trường cổ phiếu đã đạt khoảng 8,45 triệu tỷ đồng, tương đương khoảng 73,4% GDP, thể hiện vai trò ngày càng quan trọng của thị trường chứng khoán trong nền kinh tế quốc gia.
                </p>

                {/* Key stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  {[
                    { value: '25+', label: 'Năm hoạt động' },
                    { value: '2.000+', label: 'Mã chứng khoán' },
                    { value: '9 triệu+', label: 'Tài khoản NĐT' },
                    { value: '73,4%', label: 'GDP vốn hóa' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#003366]/5 border border-[#003366]/10 rounded-xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-heading font-bold text-[#003366]">{stat.value}</div>
                      <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold text-[#003366] mt-10 mb-4">
                  Nhà đầu tư – Động lực phát triển thị trường
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Số lượng tài khoản nhà đầu tư đã vượt mốc 9 triệu, trong đó nhà đầu tư cá nhân trong nước chiếm tỷ trọng lớn. Sự tham gia ngày càng tích cực của nhà đầu tư tổ chức và nhà đầu tư nước ngoài đã góp phần nâng cao chất lượng và tính chuyên nghiệp của thị trường.
                </p>

                {/* Image in article */}
                <figure className="my-8">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={vnxCeremony2024}
                      alt="Lễ kỷ niệm 25 năm TTCK Việt Nam"
                      className="w-full h-auto"
                    />
                  </div>
                  <figcaption className="text-sm text-slate-500 mt-3 text-center italic">
                    Toàn cảnh Lễ kỷ niệm 25 năm hoạt động Thị trường Chứng khoán Việt Nam
                  </figcaption>
                </figure>

                <h2 className="text-2xl font-heading font-bold text-[#003366] mt-10 mb-4">
                  Ra mắt Hệ thống công nghệ thông tin mới
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Cùng với lễ kỷ niệm, VNX đã chính thức ra mắt Hệ thống công nghệ thông tin thế hệ mới. Hệ thống được xây dựng trên nền tảng công nghệ tiên tiến, đáp ứng yêu cầu về tốc độ xử lý, bảo mật và khả năng mở rộng, phục vụ cho sự phát triển bền vững của thị trường trong giai đoạn tới.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Hệ thống mới có khả năng xử lý hàng triệu lệnh mỗi ngày với độ trễ cực thấp, đồng thời tích hợp các giải pháp giám sát thị trường hiện đại, góp phần nâng cao tính minh bạch và hiệu quả hoạt động.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[#003366] mt-10 mb-4">
                  Tầm nhìn tương lai
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Với mục tiêu nâng hạng thị trường chứng khoán Việt Nam lên thị trường mới nổi theo tiêu chuẩn quốc tế, VNX cam kết tiếp tục hoàn thiện cơ sở hạ tầng, nâng cao chất lượng quản trị, và mở rộng hợp tác quốc tế. Thị trường chứng khoán Việt Nam đang bước vào một giai đoạn phát triển mới với nhiều cơ hội và triển vọng tích cực.
                </p>
              </article>

              {/* Share */}
              <div className="flex items-center gap-3 mt-8">
                <span className="text-sm text-slate-500">Chia sẻ:</span>
                <button className="h-9 w-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-500 hover:text-[#003366] hover:border-[#003366] transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail25Years;
