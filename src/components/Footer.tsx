import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";
import vnxLogo from "@/assets/vnx-logo.jpg";

const footerLinks = {
  gioiThieu: [
    "Tổng quan",
    "Lịch sử phát triển",
    "Cơ cấu tổ chức",
    "Thành tựu",
  ],
  tinTuc: [
    "Tin tức VNX",
    "Tin tức HOSE",
    "Tin tức HNX",
    "Sự kiện",
  ],
  phapLy: [
    "Luật",
    "Nghị định",
    "Thông tư",
    "Quy chế",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card/80 backdrop-blur-xl border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <img src={vnxLogo} alt="VNX Logo" className="h-12 w-auto" />
              <div>
                <h3 className="font-display font-bold text-foreground">VIETNAM EXCHANGE</h3>
                <p className="text-sm text-muted-foreground">Sở Giao dịch Chứng khoán Việt Nam</p>
              </div>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Phát triển thị trường vốn Việt Nam trở thành trung tâm tài chính hàng đầu khu vực
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Giới thiệu */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Giới thiệu</h4>
            <ul className="space-y-2">
              {footerLinks.gioiThieu.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tin tức */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Tin tức</h4>
            <ul className="space-y-2">
              {footerLinks.tinTuc.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Số 2, Phan Chu Trinh, Hoàn Kiếm, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>(84-24) 39412626</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@vnx.vn" className="hover:text-primary transition-colors">
                  contact@vnx.vn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Sở Giao dịch Chứng khoán Việt Nam. Bản quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
