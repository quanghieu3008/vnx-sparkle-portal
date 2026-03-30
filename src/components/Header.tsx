import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vnxLogo from "@/assets/vnx-logo-new.png";
import { Button } from "./ui/button";

interface SubMenuItem {
  label: string;
  isChild?: boolean;
  isGroup?: boolean;
  href?: string;
}

interface MenuItem {
  label: string;
  items?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Tổng quan",
    items: [
      { label: "Giới thiệu", isGroup: true },
      { label: "Thông điệp của Lãnh đạo", isChild: true, href: "/gioi-thieu/thong-diep-lanh-dao" },
      { label: "Lịch sử phát triển", isChild: true, href: "/gioi-thieu/lich-su-phat-trien" },
      { label: "Sơ đồ tổ chức", isChild: true, href: "/gioi-thieu/so-do-to-chuc" },
      { label: "Chức năng, nhiệm vụ", isChild: true, href: "/gioi-thieu/chuc-nang-nhiem-vu" },
      { label: "Ban lãnh đạo", isChild: true, href: "/gioi-thieu/ban-lanh-dao" },
      { label: "Nghiên cứu - hợp tác", isGroup: true },
      { label: "Hợp tác quốc tế", isChild: true },
      { label: "Đối tác quốc tế", isChild: true },
      { label: "Tổ chức quốc tế", isChild: true },
      { label: "Trung tâm truyền thông", isGroup: true },
      { label: "Thông cáo báo chí", isChild: true },
      { label: "Ấn phẩm", isChild: true },
      { label: "Thư viện", isChild: true },
      { label: "Phòng truyền thống", isChild: true },
    ],
  },
  {
    label: "Tin tức - Sự kiện",
    items: [
      { label: "Hoạt động sự kiện", href: "/hoat-dong-su-kien" },
      { label: "Hoạt động xã hội", href: "/hoat-dong-xa-hoi" },
      { label: "Lịch nghỉ hàng năm", href: "/lich-nghi-hang-nam" },
    ],
  },
  {
    label: "Thông tin từ VNX",
    items: [
      { label: "Tin công bố của VNX" },
      { label: "Văn bản pháp lý" },
    ],
  },
  {
    label: "Thông tin thị trường",
    items: [
      { label: "Dữ liệu thị trường" },
      { label: "Hoạt động giám sát" },
      { label: "Bảng giá Giao dịch" },
    ],
  },
  {
    label: "Dành cho thành viên",
    items: [
      { label: "Danh sách thành viên" },
      { label: "Tin công bố về Thành viên" },
      { label: "Tin công bố của thành viên" },
      { label: "Đăng ký thành viên" },
    ],
  },
  {
    label: "Góc NĐT",
    items: [
      { label: "Khuyến cáo NĐT", href: "/khuyen-cao-ndt" },
      { label: "Chương trình đào tạo" },
      { label: "Hướng dẫn NĐT" },
    ],
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"VN" | "EN">("VN");

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#003366] shadow-lg" : "bg-[#003366]/90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={vnxLogo} alt="Vietnam Exchange Logo" className="h-16 w-auto rounded mix-blend-lighten" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
                  {menu.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {activeMenu === index && menu.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 max-h-[70vh] overflow-y-auto bg-slate-50 rounded-lg shadow-card border border-border/50 py-2 mt-1"
                    >
                      {menu.items.map((item, idx) => (
                        item.isGroup ? (
                          <div
                            key={idx}
                            className="px-4 pt-3 pb-1 text-xs font-bold text-primary uppercase tracking-wide border-t border-border/30 first:border-0 first:pt-2"
                          >
                            {item.label}
                          </div>
                        ) : (
                          <a
                            key={idx}
                            href={item.href || "#"}
                            onClick={(e) => {
                              if (item.href) {
                                e.preventDefault();
                                navigate(item.href);
                                setActiveMenu(null);
                              }
                            }}
                            className={`block py-2 text-sm text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors ${
                              item.isChild ? "pl-8 pr-4" : "px-4"
                            }`}
                          >
                            {item.label}
                          </a>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "VN" ? "EN" : "VN")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{language}</span>
            </button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-glass-strong border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((menu, index) => (
                <div key={index} className="border-b border-border/30 last:border-0">
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground"
                    onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                  >
                    {menu.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeMenu === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMenu === index && menu.items && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 pb-2"
                      >
                        {menu.items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href || "#"}
                            onClick={(e) => {
                              if (item.href) {
                                e.preventDefault();
                                navigate(item.href);
                                setIsMobileMenuOpen(false);
                              }
                            }}
                            className={`block py-2 text-sm text-muted-foreground hover:text-primary ${
                              item.isChild ? "pl-4" : ""
                            }`}
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
