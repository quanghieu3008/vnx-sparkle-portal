import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronRight, ChevronDown, Filter, Users, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Input } from "@/components/ui/input";

interface Member {
  id: string;
  name: string;
  shortName: string;
  tradingTypes: string;
}

const membersData: Member[] = [
  { id: "001", name: "Công ty Cổ phần Chứng khoán SSI", shortName: "SSI", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ, ETF, Chứng quyền, Cacbon, Vàng" },
  { id: "002", name: "Công ty TNHH Chứng khoán ACB", shortName: "ACB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "003", name: "Công ty TNHH Chứng khoán Yuanta Việt Nam", shortName: "YSV", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "004", name: "Công ty Cổ phần Chứng khoán MB", shortName: "MBS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh" },
  { id: "005", name: "Công ty Cổ phần Chứng khoán Bảo Việt", shortName: "BVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh" },
  { id: "006", name: "Công ty Cổ phần Chứng khoán Ngân hàng Đầu tư và Phát triển VN", shortName: "BSC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "007", name: "CTCP Chứng khoán Ngân hàng Công thương Việt Nam", shortName: "IBS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "008", name: "CTCP Chứng khoán Agribank", shortName: "AGR", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "009", name: "Công ty TNHH Chứng khoán NHTMCP Ngoại Thương Việt Nam", shortName: "VCB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "010", name: "Công ty Cổ phần Chứng khoán Pinetree", shortName: "MSC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "011", name: "Công ty Cổ phần Chứng khoán TP.HCM", shortName: "HSC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "012", name: "Công ty Cổ phần Chứng khoán Hải Phòng", shortName: "HPS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "014", name: "Công ty TNHH Một thành viên Chứng khoán Ngân hàng Đông Á", shortName: "DAS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "015", name: "Công ty Cổ phần Chứng khoán SHB", shortName: "SHB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "016", name: "Công ty Cổ phần Chứng khoán Đại Việt", shortName: "DVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "017", name: "Công ty cổ phần chứng khoán Ngân hàng Sài Gòn Thương Tín", shortName: "SBS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh" },
  { id: "018", name: "Công ty Cổ phần Chứng khoán An Bình", shortName: "ABS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh" },
  { id: "019", name: "Công ty Cổ phần Chứng khoán Kim Long", shortName: "KLS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh" },
  { id: "020", name: "Công ty Cổ phần Chứng khoán Quốc tế Việt Nam", shortName: "VIS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh" },
  { id: "021", name: "Công ty Cổ phần Chứng khoán VNDirect", shortName: "VDS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh" },
  { id: "022", name: "Công ty Cổ phần Chứng khoán Phú Hưng", shortName: "PHS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "023", name: "Công ty Cổ phần Chứng khoán Việt", shortName: "VSC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "024", name: "Công ty Cổ phần Chứng khoán Đà Nẵng", shortName: "DNS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "026", name: "Công ty cổ phần Chứng khoán VPS", shortName: "VPB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "028", name: "Công ty Cổ phần Chứng khoán Quốc Gia", shortName: "NSI", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "029", name: "Công ty trách nhiệm hữu hạn Chứng khoán RHB Việt Nam", shortName: "VSE", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "030", name: "Công ty cổ phần Chứng khoán Châu Á - Thái Bình Dương", shortName: "APE", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "032", name: "Công ty Cổ phần Chứng khoán ASEAN", shortName: "SEA", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "033", name: "Công ty Cổ phần Chứng khoán Rồng Việt", shortName: "VDS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "035", name: "Công ty cổ phần Chứng khoán Ngân hàng Phát triển Nhà ĐBSCL", shortName: "MHB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "036", name: "Công ty Cổ phần Chứng khoán Alpha", shortName: "APS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "037", name: "Công ty Cổ phần Chứng khoán Trí Việt", shortName: "TVG", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "038", name: "Công ty Cổ phần Chứng khoán Việt Tín", shortName: "VTS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "039", name: "Công ty Trách nhiệm hữu hạn Chứng khoán NH Việt Nam", shortName: "WCB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "040", name: "Công ty Cổ phần Chứng khoán Everest", shortName: "OCS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "041", name: "Công ty Cổ phần Chứng khoán Tràng An", shortName: "TAS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "042", name: "Công ty Cổ phần Chứng khoán Thiên Việt", shortName: "TVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "044", name: "Công ty Cổ phần Chứng khoán Tân Việt", shortName: "TVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "045", name: "Công ty Cổ phần Chứng khoán Dầu Khí", shortName: "PSI", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "046", name: "Công ty Cổ phần Chứng khoán HDB", shortName: "PGS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "047", name: "Công ty Cổ phần Chứng khoán Việt Nam Gateway", shortName: "HZS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "048", name: "Công ty Cổ phần Chứng khoán Tiên Phong", shortName: "ORS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "049", name: "Công ty Cổ phần Chứng khoán Globalmind Capital", shortName: "ROS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "050", name: "CTCP Chứng khoán Morgan Stanley Hướng Việt", shortName: "GSI", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "051", name: "Công ty Cổ phần Chứng khoán VIT", shortName: "VIT", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "055", name: "Công ty Cổ phần Chứng khoán SME", shortName: "SME", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "057", name: "Công ty Cổ phần Chứng khoán KIS Việt Nam", shortName: "KIS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "058", name: "Công ty Cổ phần Chứng khoán FPT", shortName: "FPT", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "059", name: "CTCP Chứng khoán Quốc tế Hoàng Gia", shortName: "IRS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "061", name: "Công ty Cổ phần Chứng khoán Đầu tư Việt Nam", shortName: "IVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "062", name: "Công Ty Cổ Phần Chứng Khoán Golden Bridge Việt Nam", shortName: "GBV", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "064", name: "CTCP Chứng khoán Đại Nam", shortName: "DNS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "065", name: "Công ty Cổ phần Chứng khoán Kenanga Việt Nam", shortName: "KVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "067", name: "CTCP Chứng khoán APG", shortName: "APS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "068", name: "CTCP Chứng khoán Bản Việt", shortName: "VCS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "069", name: "CTCP Chứng khoán Sài Gòn - Hà Nội", shortName: "SHS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "071", name: "Công ty Cổ phần Chứng khoán Đại Tây Dương", shortName: "OSC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "072", name: "CTCP Chứng khoán IB", shortName: "IBS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "073", name: "CTCP Chứng khoán Phố Wall", shortName: "WSS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "074", name: "CTCP Chứng khoán An Thành", shortName: "ATS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "075", name: "CTCP Chứng khoán BETA", shortName: "BSI", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "076", name: "CTCP Chứng khoán Thương mại và Công nghiệp VN", shortName: "VIC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "077", name: "Công ty TNHH Chứng khoán Mirae Asset (Việt Nam)", shortName: "MAS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "079", name: "Công ty TNHH MTV Chứng khoán Maybank Kim Eng", shortName: "MBK", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "080", name: "Công ty cổ phần chứng khoán Eurocapital", shortName: "ECC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ" },
  { id: "081", name: "Công ty TNHH Chứng khoán Shinhan Việt Nam", shortName: "NAS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "082", name: "Công ty Cổ phần chứng khoán Hoà Bình", shortName: "HBS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "083", name: "Công ty Cổ phần Chứng khoán BOS", shortName: "ART", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "085", name: "Công ty cổ phần chứng khoán Thành Công", shortName: "TCS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "086", name: "Công ty cổ phần chứng khoán Bảo Minh", shortName: "BMS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "087", name: "Công ty cổ phần chứng khoán Viễn Đông", shortName: "VDS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "088", name: "CTCP Chứng khoán Stanley Brothers", shortName: "VGS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "089", name: "Công ty cổ phần chứng khoán Việt Thành", shortName: "VTS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "090", name: "Công ty Cổ phần Chứng khoán NAVIBANK", shortName: "NVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "091", name: "Công ty cổ phần Chứng khoán KB Việt Nam", shortName: "KBS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "092", name: "Công ty Cổ phần Chứng khoán SaiGonBank - Berjaya", shortName: "SBB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "093", name: "Công ty cổ phần Chứng khoán FUNAN", shortName: "PNS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "094", name: "Công ty Cổ phần Chứng khoán Nhất Việt", shortName: "VFS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "096", name: "Công ty cổ phần Chứng khoán Công nghiệp Việt Nam", shortName: "ISC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "097", name: "Công ty Cổ phần Chứng khoán HVS Việt Nam", shortName: "HVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "098", name: "Công ty Cổ phần Chứng khoán Trường Sơn", shortName: "TSS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "099", name: "Công ty Cổ phần Chứng khoán SJC", shortName: "SJC", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "101", name: "Công ty Cổ phần Chứng khoán Nhật Bản", shortName: "JSI", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "102", name: "Công ty Cổ phần Chứng khoán Kiến thiết Việt Nam", shortName: "PCS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "103", name: "Công ty Cổ phần Chứng khoán Liên Việt", shortName: "LVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "105", name: "Công ty cổ phần Chứng khoán Kỹ Thương", shortName: "TCB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "109", name: "Công ty cổ phần Chứng khoán CV", shortName: "CVS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "111", name: "Công ty cổ phần Chứng khoán SmartInvest", shortName: "SIS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "118", name: "Công ty cổ phần Chứng khoán AIS", shortName: "AIS", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "201", name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam", shortName: "BID", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "202", name: "Ngân hàng TMCP Ngoại thương Việt Nam", shortName: "VCH", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "203", name: "Ngân hàng TNHH Indovina", shortName: "IVB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "204", name: "Ngân Hàng TMCP Công Thương Việt Nam", shortName: "CTG", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "205", name: "Ngân hàng Thương mại Cổ phần Tiên Phong", shortName: "TPB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "206", name: "Ngân hàng Thương mại Cổ phần Quân Đội", shortName: "MBB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "207", name: "Ngân hàng TMCP Hàng Hải Việt Nam", shortName: "MSB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "208", name: "Ngân hàng TMCP Việt Nam Thịnh Vượng", shortName: "VPB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "401", name: "Ngân hàng TNHH một thành viên HSBC Việt Nam", shortName: "HSB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "402", name: "Ngân hàng TNHH MTV Standard Chartered (Việt Nam)", shortName: "SCB", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
  { id: "403", name: "Deutsche Bank AG, Chi nhánh TP. HCM", shortName: "TVN", tradingTypes: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ" },
];

const BUBBLE_COLORS = [
  "#0EA5E9", "#F97316", "#8B5CF6", "#10B981", "#EF4444",
  "#EC4899", "#14B8A6", "#F59E0B", "#6366F1", "#84CC16",
  "#06B6D4", "#E11D48", "#7C3AED", "#059669", "#D97706",
  "#2563EB", "#DC2626", "#9333EA", "#0D9488", "#CA8A04",
  "#4F46E5", "#BE185D", "#0891B2", "#65A30D", "#C026D3",
  "#1D4ED8", "#B91C1C", "#7E22CE", "#047857", "#A16207",
];

const ITEMS_PER_PAGE = 15;

const tradingTypeFilters = [
  { value: "all", label: "Tất cả" },
  { value: "Cổ phiếu", label: "Cổ phiếu" },
  { value: "Trái phiếu doanh nghiệp", label: "Trái phiếu doanh nghiệp" },
  { value: "Trái phiếu chính phủ", label: "Trái phiếu chính phủ" },
  { value: "Phái sinh", label: "Phái sinh" },
  { value: "Trái phiếu riêng lẻ", label: "Trái phiếu riêng lẻ" },
  { value: "ETF", label: "ETF" },
  { value: "Chứng quyền", label: "Chứng quyền" },
  { value: "Cacbon", label: "Cacbon" },
  { value: "Vàng", label: "Vàng" },
];

// Bubble Chart Component with physics-based non-overlapping layout
function BubbleChart() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isUserSelected, setIsUserSelected] = useState(false);
  const autoIdxRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);
  const animFrameRef = useRef<number>();
  const [renderTick, setRenderTick] = useState(0);

  const bubbleMembers = membersData.slice(0, 30);
  const BASE_SIZE = 56;
  const ACTIVE_SIZE = 120;
  const CONTAINER_W = 1200;
  const CONTAINER_H = 480;
  const PADDING = 40;

  // Initialize positions with collision-free placement
  useEffect(() => {
    if (positionsRef.current.length > 0) return;
    const positions: { x: number; y: number; vx: number; vy: number }[] = [];
    const r = BASE_SIZE / 2 + 4;
    
    for (let i = 0; i < 30; i++) {
      let x: number, y: number, placed = false;
      for (let attempt = 0; attempt < 500; attempt++) {
        x = PADDING + r + Math.random() * (CONTAINER_W - 2 * PADDING - 2 * r);
        y = PADDING + r + Math.random() * (CONTAINER_H - 2 * PADDING - 2 * r);
        let overlap = false;
        for (const p of positions) {
          const dx = x - p.x, dy = y - p.y;
          if (Math.sqrt(dx * dx + dy * dy) < r * 2 + 6) { overlap = true; break; }
        }
        if (!overlap) { placed = true; break; }
      }
      if (!placed) {
        x = PADDING + r + (i % 6) * ((CONTAINER_W - 2 * PADDING) / 6);
        y = PADDING + r + Math.floor(i / 6) * ((CONTAINER_H - 2 * PADDING) / 5);
      }
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.2;
      positions.push({ x: x!, y: y!, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed });
    }
    positionsRef.current = positions;
    setRenderTick(1);
  }, []);

  // Physics simulation: gentle floating + collision avoidance
  useEffect(() => {
    let lastTime = performance.now();
    const simulate = (now: number) => {
      const dt = Math.min(now - lastTime, 32);
      lastTime = now;
      const positions = positionsRef.current;
      if (positions.length === 0) { animFrameRef.current = requestAnimationFrame(simulate); return; }

      const r = BASE_SIZE / 2 + 2;
      const activeR = ACTIVE_SIZE / 2 + 4;

      for (let i = 0; i < positions.length; i++) {
        const p = positions[i];
        const isActive = i === (isUserSelected ? activeIdx : autoIdxRef.current);
        const myR = isActive ? activeR : r;

        // Move
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;

        // Wall bounce
        if (p.x < PADDING + myR) { p.x = PADDING + myR; p.vx = Math.abs(p.vx); }
        if (p.x > CONTAINER_W - PADDING - myR) { p.x = CONTAINER_W - PADDING - myR; p.vx = -Math.abs(p.vx); }
        if (p.y < PADDING + myR) { p.y = PADDING + myR; p.vy = Math.abs(p.vy); }
        if (p.y > CONTAINER_H - PADDING - myR) { p.y = CONTAINER_H - PADDING - myR; p.vy = -Math.abs(p.vy); }

        // Collision avoidance with other bubbles
        for (let j = i + 1; j < positions.length; j++) {
          const q = positions[j];
          const jActive = j === (isUserSelected ? activeIdx : autoIdxRef.current);
          const otherR = jActive ? activeR : r;
          const minDist = myR + otherR + 4;
          const dx = q.x - p.x, dy = q.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist && dist > 0.1) {
            const push = (minDist - dist) * 0.3;
            const nx = dx / dist, ny = dy / dist;
            p.x -= nx * push;
            p.y -= ny * push;
            q.x += nx * push;
            q.y += ny * push;
          }
        }

        // Gentle random drift
        if (Math.random() < 0.01) {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }
        // Speed limit
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 0.35;
        const minSpeed = 0.08;
        if (speed > maxSpeed) { p.vx *= maxSpeed / speed; p.vy *= maxSpeed / speed; }
        if (speed < minSpeed) { const a = Math.random() * Math.PI * 2; p.vx = Math.cos(a) * minSpeed; p.vy = Math.sin(a) * minSpeed; }
      }

      setRenderTick(t => t + 1);
      animFrameRef.current = requestAnimationFrame(simulate);
    };
    animFrameRef.current = requestAnimationFrame(simulate);
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, [activeIdx, isUserSelected]);

  // Auto-rotate active bubble every 2s
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isUserSelected) {
        autoIdxRef.current = (autoIdxRef.current + 1) % 30;
        setRenderTick(t => t + 1);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [isUserSelected]);

  const handleClick = useCallback((idx: number) => {
    setActiveIdx(idx);
    setIsUserSelected(true);
    setTimeout(() => setIsUserSelected(false), 6000);
  }, []);

  const currentActive = isUserSelected ? activeIdx : autoIdxRef.current;
  const positions = positionsRef.current;

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ height: CONTAINER_H, background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)" }}
    >
      {/* Decorative grid dots */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, #334155 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }} />

      {positions.length > 0 && bubbleMembers.map((member, idx) => {
        const isActive = currentActive === idx;
        const size = isActive ? ACTIVE_SIZE : BASE_SIZE;
        const p = positions[idx];

        return (
          <div
            key={member.id}
            className="absolute cursor-pointer flex items-center justify-center rounded-full shadow-lg"
            style={{
              backgroundColor: BUBBLE_COLORS[idx % BUBBLE_COLORS.length],
              width: size,
              height: size,
              left: p.x - size / 2,
              top: p.y - size / 2,
              zIndex: isActive ? 50 : 10,
              transition: "width 0.4s ease, height 0.4s ease",
              transform: isActive ? "scale(1)" : undefined,
            }}
            onClick={() => handleClick(idx)}
            onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.transform = "scale(1.15)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            {isActive ? (
              <div className="flex flex-col items-center justify-center text-center px-2 animate-fade-in">
                <span className="text-white font-bold text-sm leading-tight">{member.shortName}</span>
                <span className="text-white/90 text-[8px] leading-tight mt-0.5 line-clamp-3">{member.name}</span>
              </div>
            ) : (
              <span className="text-white font-bold text-xs">{member.id}</span>
            )}
          </div>
        );
      })}

      {/* VNX watermark */}
      <div className="absolute bottom-4 right-6 text-slate-300/40 font-bold text-6xl tracking-widest select-none pointer-events-none">
        VNX
      </div>
    </div>
  );
}

// Main Page Component
export default function MemberList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return membersData.filter((m) => {
      const q = searchQuery.toLowerCase();
      const matchSearch = !q || m.id.includes(q) || m.name.toLowerCase().includes(q) || m.shortName.toLowerCase().includes(q);
      const matchType = filterType === "all" || m.tradingTypes.includes(filterType);
      return matchSearch && matchType;
    });
  }, [searchQuery, filterType]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, filterType]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#003366" }}>
      <Header />
      <main className="pt-[80px]">
        <div className="sticky top-[80px] z-40">
          <MarketTicker />
        </div>

        {/* Sticky Breadcrumb */}
        <div className="sticky top-[120px] z-30 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-2.5">
            <nav className="flex items-center gap-1 text-sm text-slate-500">
              <Link to="/" className="transition-colors bg-transparent text-black">Trang chủ</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-black">Dành cho thành viên</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-zinc-600">Danh sách thành viên</span>
            </nav>
          </div>
        </div>

        <div style={{ backgroundColor: "#eef1f6" }}>

          {/* Page Header */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004080]" />
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" fill="none">
              <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#eef1f6" />
            </svg>
            <div className="relative max-w-7xl mx-auto px-4 py-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h1 className="text-3xl font-bold text-white font-heading">Danh sách thành viên</h1>
                </div>
                <p className="text-slate-300 text-sm max-w-xl">
                  Thông tin về các thành viên của Sở Giao dịch Chứng khoán Việt Nam
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bubble Chart Section */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-[#003366]">Tổng quan thành viên</h2>
              </div>
              <p className="text-sm text-slate-500 mb-4">​</p>
              <BubbleChart />
            </motion.div>
          </div>

          {/* Members Table Section */}
          <div className="max-w-7xl mx-auto px-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Search & Filters */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      placeholder="Tìm kiếm theo Mã, Tên hoặc Tên viết tắt thành viên..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-slate-200 focus:border-primary"
                    />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Filter className="w-4 h-4 text-slate-400" />
                    {tradingTypeFilters.map((f) => (
                      <button
                        key={f.value}
                        onClick={() => setFilterType(f.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          filterType === f.value
                            ? "bg-primary text-white shadow-md"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  Tìm thấy <span className="font-semibold text-primary">{filtered.length}</span> thành viên
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#003366] to-[#004a8f]">
                        <th className="text-left text-white text-xs font-semibold px-5 py-4 w-20">Mã TV</th>
                        <th className="text-left text-white text-xs font-semibold px-5 py-4">Tên thành viên</th>
                        <th className="text-left text-white text-xs font-semibold px-5 py-4 w-24">Viết tắt</th>
                        <th className="text-left text-white text-xs font-semibold px-5 py-4">Loại thành viên giao dịch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paged.map((member, idx) => (
                        <motion.tr
                          key={member.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className={`border-b border-slate-100 hover:bg-blue-50/50 transition-colors group ${
                            idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                          }`}
                        >
                          <td className="px-5 py-3.5">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                              {member.id}
                            </span>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className="text-sm font-medium text-slate-800">{member.name}</span>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 font-bold text-xs border border-amber-200">
                              {member.shortName}
                            </span>
                          </td>
                          <td className="px-5 py-3.5">
                            <div className="flex flex-wrap gap-1">
                              {member.tradingTypes.split(", ").map((type) => (
                                <span
                                  key={type}
                                  className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600"
                                >
                                  {type}
                                </span>
                              ))}
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between px-5 py-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400">
                      Trang {currentPage} / {totalPages}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-40 transition-colors"
                      >
                        Trước
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                        .reduce<(number | string)[]>((acc, p, i, arr) => {
                          if (i > 0 && (arr[i - 1] as number) < p - 1) acc.push("...");
                          acc.push(p);
                          return acc;
                        }, [])
                        .map((p, i) =>
                          typeof p === "string" ? (
                            <span key={`e${i}`} className="px-2 text-slate-400 text-xs">...</span>
                          ) : (
                            <button
                              key={p}
                              onClick={() => setCurrentPage(p)}
                              className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                                currentPage === p
                                  ? "bg-primary text-white shadow-md"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                              }`}
                            >
                              {p}
                            </button>
                          )
                        )}
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-40 transition-colors"
                      >
                        Sau
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
