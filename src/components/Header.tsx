import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vnxLogo from "@/assets/vnx-logo-new.png";
import { Button } from "./ui/button";

interface SubMenuItem {
  label: string;
  isChild?: boolean;
  href?: string;
}

interface MenuItem {
  label: string;
  items?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Giới thiệu",
    items: [
      { label: "Thông điệp của lãnh đạo", href: "/gioi-thieu/thong-diep-lanh-dao" },
      { label: "Lịch sử phát triển", href: "/gioi-thieu/lich-su-phat-trien" },
      { label: "Sơ đồ tổ chức" },
      { label: "Chức năng, nhiệm vụ" },
      { label: "Ban lãnh đạo" },
      { label: "Ấn phẩm" },
    ],
  },
  {
    label: "Tin tức và sự kiện",
    items: [
      { label: "Hoạt động sự kiện", href: "/hoat-dong-su-kien" },
      { label: "Hoạt động xã hội", href: "/hoat-dong-xa-hoi" },
      
      { label: "Lịch nghỉ hàng năm", href: "/lich-nghi-hang-nam" },
      { label: "Thông tin công bố của VNX" },
      { label: "Thông tin công bố về công ty con" },
    ],
  },
  {
    label: "Thành viên",
    items: [
      { label: "Thông tin công bố về thành viên" },
      { label: "Thông tin công bố của thành viên" },
      { label: "Danh sách thành viên" },
      { label: "Đăng ký thành viên" },
      { label: "Hoạt động thành viên" },
      { label: "Hướng dẫn nghiệp vụ" },
    ],
  },
  {
    label: "Thông tin thị trường",
    items: [
      { label: "Dữ liệu thị trường" },
      { label: "Thông tin trong giờ GD", isChild: true },
      { label: "Thông tin cuối ngày GD", isChild: true },
      { label: "Bảng giá giao dịch" },
      { label: "Hoạt động giám sát" },
    ],
  },
  {
    label: "Văn bản pháp lý",
    items: [
      { label: "Luật" },
      { label: "Nghị định" },
      { label: "Thông tư" },
      { label: "Quyết định" },
      { label: "Quy chế" },
    ],
  },
  {
    label: "Góc Nhà đầu tư",
    items: [
      { label: "Khuyến cáo Nhà đầu tư" },
      { label: "Chương trình đào tạo" },
      { label: "Hướng dẫn Nhà đầu tư" },
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
                      className="absolute top-full left-0 w-64 bg-slate-50 rounded-lg shadow-card border border-border/50 py-2 mt-1"
                    >
                      {menu.items.map((item, idx) => (
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
                            item.isChild ? "pl-8 pr-4 text-slate-500" : "px-4"
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
