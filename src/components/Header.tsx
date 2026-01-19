import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Globe, Menu, X } from "lucide-react";
import vnxLogo from "@/assets/vnx-logo.jpg";
import { Button } from "./ui/button";

interface MenuItem {
  label: string;
  items?: string[];
}

const menuItems: MenuItem[] = [
  {
    label: "Giới thiệu",
    items: ["Thông điệp của lãnh đạo", "Lịch sử phát triển", "Sơ đồ tổ chức", "Chức năng, nhiệm vụ", "Ban lãnh đạo"],
  },
  {
    label: "Thành viên",
    items: ["Thông tin công bố về thành viên", "Thông tin công bố của thành viên", "Danh sách thành viên", "Hoạt động thành viên", "Hướng dẫn nghiệp vụ"],
  },
  {
    label: "Tin tức và sự kiện",
    items: ["Hoạt động sự kiện", "Hoạt động xã hội", "Hoạt động hợp tác", "Lịch nghỉ hàng năm"],
  },
  {
    label: "Thông tin từ Sở GDCK",
    items: ["Thông tin công bố của VNX", "Thông tin công bố về công ty con"],
  },
  {
    label: "Thông tin thị trường",
    items: ["Dữ liệu thị trường", "Thông tin trong giờ GD", "Thông tin cuối ngày GD", "Bảng giá giao dịch", "Hoạt động giám sát"],
  },
  {
    label: "Văn bản pháp lý",
    items: ["Luật", "Nghị định", "Thông tư", "Quyết định", "Quy chế"],
  },
  {
    label: "Dành cho NĐT",
    items: ["Khuyến cáo NĐT", "Cung cấp thông tin/Chương trình đào tạo", "Hướng dẫn NĐT"],
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"VN" | "EN">("VN");

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
        isScrolled ? "bg-[#003366] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img src={vnxLogo} alt="VNX Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-display font-bold text-foreground">VIETNAM EXCHANGE</h1>
              <p className="text-xs text-muted-foreground">Sở Giao dịch Chứng khoán Việt Nam</p>
            </div>
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
                          href="#"
                          className="block px-4 py-2 text-sm text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {item}
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
                            href="#"
                            className="block py-2 text-sm text-muted-foreground hover:text-primary"
                          >
                            {item}
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
