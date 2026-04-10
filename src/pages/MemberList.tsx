import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Search, ChevronLeft, ChevronRight as ChevronRightIcon, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MarketTicker from "@/components/MarketTicker";
import { Input } from "@/components/ui/input";

interface Member {
  id: string;
  name: string;
  shortName: string;
  types: string;
}

const membersData: Member[] = [
  {
    id: "001",
    name: "Công ty Cổ phần Chứng khoán SSI",
    shortName: "SSI",
    types:
      "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ, ETF, Chứng quyền, Cacbon, Vàng",
  },
  {
    id: "002",
    name: "Công ty TNHH Chứng khoán ACB",
    shortName: "ACB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "003",
    name: "Công ty TNHH Chứng khoán Yuanta Việt Nam",
    shortName: "YSV",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "004",
    name: "Công ty Cổ phần Chứng khoán MB",
    shortName: "MBS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh",
  },
  {
    id: "005",
    name: "Công ty Cổ phần Chứng khoán Bảo Việt",
    shortName: "BVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh",
  },
  {
    id: "006",
    name: "Công ty Cổ phần Chứng khoán Ngân hàng Đầu tư và Phát triển VN",
    shortName: "BSC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "007",
    name: "CTCP Chứng khoán Ngân hàng Công thương Việt Nam",
    shortName: "IBS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "008",
    name: "CTCP Chứng khoán Agribank",
    shortName: "AGR",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "009",
    name: "Công ty TNHH Chứng khoán NHTMCP Ngoại Thương Việt Nam",
    shortName: "VCB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "010",
    name: "Công ty Cổ phần Chứng khoán Pinetree",
    shortName: "MSC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "011",
    name: "Công ty Cổ phần Chứng khoán TP.HCM",
    shortName: "HSC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "012",
    name: "Công ty Cổ phần Chứng khoán Hải Phòng",
    shortName: "HPS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "014",
    name: "Công ty TNHH Một thành viên Chứng khoán Ngân hàng Đông Á",
    shortName: "DAS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "015",
    name: "Công ty Cổ phần Chứng khoán SHB",
    shortName: "SHB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "016",
    name: "Công ty Cổ phần Chứng khoán Đại Việt",
    shortName: "DVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "017",
    name: "Công ty cổ phần chứng khoán Ngân hàng Sài Gòn Thương Tín",
    shortName: "SBS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh",
  },
  {
    id: "018",
    name: "Công ty Cổ phần Chứng khoán An Bình",
    shortName: "ABS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh",
  },
  {
    id: "019",
    name: "Công ty Cổ phần Chứng khoán Kim Long",
    shortName: "KLS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh",
  },
  {
    id: "020",
    name: "Công ty Cổ phần Chứng khoán Quốc tế Việt Nam",
    shortName: "VIS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh",
  },
  {
    id: "021",
    name: "Công ty Cổ phần Chứng khoán VNDirect",
    shortName: "VDS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh",
  },
  {
    id: "022",
    name: "Công ty Cổ phần Chứng khoán Phú Hưng",
    shortName: "PHS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "023",
    name: "Công ty Cổ phần Chứng khoán Việt",
    shortName: "VSC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "024",
    name: "Công ty Cổ phần Chứng khoán Đà Nẵng",
    shortName: "DNS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "026",
    name: "Công ty cổ phần Chứng khoán VPS",
    shortName: "VPB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "028",
    name: "Công ty Cổ phần Chứng khoán Quốc Gia",
    shortName: "NSI",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "029",
    name: "Công ty trách nhiệm hữu hạn Chứng khoán RHB Việt Nam",
    shortName: "VSE",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "030",
    name: "Công ty cổ phần Chứng khoán Châu Á - Thái Bình Dương",
    shortName: "APE",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "032",
    name: "Công ty Cổ phần Chứng khoán ASEAN",
    shortName: "SEA",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "033",
    name: "Công ty Cổ phần Chứng khoán Rồng Việt",
    shortName: "VDSC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "035",
    name: "Công ty cổ phần Chứng khoán Ngân hàng Phát triển Nhà Đồng bằng Sông Cửu Long",
    shortName: "MHB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "036",
    name: "Công ty Cổ phần Chứng khoán Alpha",
    shortName: "APS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "037",
    name: "Công ty Cổ phần Chứng khoán Trí Việt",
    shortName: "TVG",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "038",
    name: "Công ty Cổ phần Chứng khoán Việt Tín",
    shortName: "VTS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "039",
    name: "Công ty Trách nhiệm hữu hạn Chứng khoán NH Việt Nam",
    shortName: "WCB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "040",
    name: "Công ty Cổ phần Chứng khoán Everest",
    shortName: "OCS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "041",
    name: "Công ty Cổ phần Chứng khoán Tràng An",
    shortName: "TAS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "042",
    name: "Công ty Cổ phần Chứng khoán Thiên Việt",
    shortName: "TVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "044",
    name: "Công ty Cổ phần Chứng khoán Tân Việt",
    shortName: "TVSC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "045",
    name: "Công ty Cổ phần Chứng khoán Dầu Khí",
    shortName: "PSI",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "046",
    name: "Công ty Cổ phần Chứng khoán HDB",
    shortName: "PGS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "047",
    name: "Công ty Cổ phần Chứng khoán Việt Nam Gateway",
    shortName: "HZS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "048",
    name: "Công ty Cổ phần Chứng khoán Tiên Phong",
    shortName: "ORS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "049",
    name: "Công ty Cổ phần Chứng khoán Globalmind Capital",
    shortName: "ROS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "050",
    name: "CTCP Chứng khoán Morgan Stanley Hướng Việt",
    shortName: "GSI",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "051",
    name: "Công ty Cổ phần Chứng khoán VIT",
    shortName: "VIT",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "055",
    name: "Công ty Cổ phần Chứng khoán SME",
    shortName: "SME",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "057",
    name: "Công ty Cổ phần Chứng khoán KIS Việt Nam",
    shortName: "KIS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "058",
    name: "Công ty Cổ phần Chứng khoán FPT",
    shortName: "FPT",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "059",
    name: "CTCP Chứng khoán Quốc tế Hoàng Gia",
    shortName: "IRS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "061",
    name: "Công ty Cổ phần Chứng khoán Đầu tư Việt Nam",
    shortName: "IVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "062",
    name: "Công Ty Cổ Phần Chứng Khoán Golden Bridge Việt Nam",
    shortName: "GBV",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "064",
    name: "CTCP Chứng khoán Đại Nam",
    shortName: "DNSE",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "065",
    name: "Công ty Cổ phần Chứng khoán Kenanga Việt Nam",
    shortName: "KVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "067",
    name: "CTCP Chứng khoán APG",
    shortName: "APG",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "068",
    name: "CTCP Chứng khoán Bản Việt",
    shortName: "VCS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "069",
    name: "CTCP Chứng khoán Sài Gòn - Hà Nội",
    shortName: "SHS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "071",
    name: "Công ty Cổ phần Chứng khoán Đại Tây Dương",
    shortName: "OSC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "072",
    name: "CTCP Chứng khoán IB",
    shortName: "IBS2",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "073",
    name: "CTCP Chứng khoán Phố Wall",
    shortName: "WSS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "074",
    name: "CTCP Chứng khoán An Thành",
    shortName: "ATS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "075",
    name: "CTCP Chứng khoán BETA",
    shortName: "BSI",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "076",
    name: "CTCP Chứng khoán Thương mại và Công nghiệp VN",
    shortName: "VIC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "077",
    name: "Công ty TNHH Chứng khoán Mirae Asset (Việt Nam)",
    shortName: "MAS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "079",
    name: "Công ty TNHH Một thành viên Chứng khoán Maybank Kim Eng",
    shortName: "MBK",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "080",
    name: "Công ty cổ phần chứng khoán Eurocapital",
    shortName: "ECC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ, Phái sinh, Trái phiếu riêng lẻ",
  },
  {
    id: "081",
    name: "Công ty TNHH Chứng khoán Shinhan Việt Nam",
    shortName: "NAS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "082",
    name: "Công ty Cổ phần chứng khoán Hoà Bình",
    shortName: "HBS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "083",
    name: "Công ty Cổ phần Chứng khoán BOS",
    shortName: "ART",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "085",
    name: "Công ty cổ phần chứng khoán Thành Công",
    shortName: "TCS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "086",
    name: "Công ty cổ phần chứng khoán Bảo Minh",
    shortName: "BMS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "087",
    name: "Công ty cổ phần chứng khoán Viễn Đông",
    shortName: "FPTS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "088",
    name: "CTCP Chứng khoán Stanley Brothers",
    shortName: "VGS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "089",
    name: "Công ty cổ phần chứng khoán Việt Thành",
    shortName: "VTSC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "090",
    name: "Công ty Cổ phần Chứng khoán NAVIBANK",
    shortName: "NVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "091",
    name: "Công ty cổ phần Chứng khoán KB Việt Nam",
    shortName: "KBS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "092",
    name: "Công ty Cổ phần Chứng khoán SaiGonBank - Berjaya",
    shortName: "SBB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "093",
    name: "Công ty cổ phần Chứng khoán FUNAN",
    shortName: "PNS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "094",
    name: "Công ty Cổ phần Chứng khoán Nhất Việt",
    shortName: "VFS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "096",
    name: "Công ty cổ phần Chứng khoán Công nghiệp Việt Nam",
    shortName: "ISC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "097",
    name: "Công ty Cổ phần Chứng khoán HVS Việt Nam",
    shortName: "HVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "098",
    name: "Công ty Cổ phần Chứng khoán Trường Sơn",
    shortName: "TSS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "099",
    name: "Công ty Cổ phần Chứng khoán SJC",
    shortName: "SJC",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "101",
    name: "Công ty Cổ phần Chứng khoán Nhật Bản",
    shortName: "JSI",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "102",
    name: "Công ty Cổ phần Chứng khoán Kiến thiết Việt Nam",
    shortName: "PCS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "103",
    name: "Công ty Cổ phần Chứng khoán Liên Việt",
    shortName: "LVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "105",
    name: "Công ty cổ phần Chứng khoán Kỹ Thương",
    shortName: "TCB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "109",
    name: "Công ty cổ phần Chứng khoán CV",
    shortName: "CVS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "111",
    name: "Công ty cổ phần Chứng khoán SmartInvest",
    shortName: "SIS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "118",
    name: "Công ty cổ phần Chứng khoán AIS",
    shortName: "AIS",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "201",
    name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
    shortName: "BID",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "202",
    name: "Ngân hàng TMCP Ngoại thương Việt Nam",
    shortName: "VCH",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "203",
    name: "Ngân hàng TNHH Indovina",
    shortName: "IVB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "204",
    name: "Ngân Hàng TMCP Công Thương Việt Nam",
    shortName: "CTG",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "205",
    name: "Ngân hàng Thương mại Cổ phần Tiên Phong",
    shortName: "TPB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "206",
    name: "Ngân hàng Thương mại Cổ phần Quân Đội",
    shortName: "MBB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "207",
    name: "Ngân hàng TMCP Hàng Hải Việt Nam",
    shortName: "MSB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "208",
    name: "Ngân hàng TMCP Việt Nam Thịnh Vượng",
    shortName: "VPBK",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "401",
    name: "Ngân hàng TNHH một thành viên HSBC Việt Nam",
    shortName: "HSB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "402",
    name: "Ngân hàng TNHH MTV Standard Chartered (Việt Nam)",
    shortName: "SCB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "403",
    name: "Deutsche Bank AG, Chi nhánh TP. HCM",
    shortName: "TVN",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "404",
    name: "Ngân hàng Citibank, N.A. - Chi nhánh Hà Nội",
    shortName: "CTB",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "406",
    name: "Ngân hàng SinoPac - Chi nhánh Thành phố Hồ Chí Minh",
    shortName: "FEN",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "407",
    name: "Ngân hàng trách nhiệm hữu hạn một thành viên Shinhan Việt Nam",
    shortName: "SHV",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
  {
    id: "408",
    name: "Ngân hàng trách nhiệm hữu hạn một thành viên Woori Việt Nam",
    shortName: "WBV",
    types: "Cổ phiếu, Trái phiếu doanh nghiệp, Trái phiếu chính phủ",
  },
];

// Vibrant colors for bubble nodes
const BUBBLE_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
  "#F8C471",
  "#82E0AA",
  "#F1948A",
  "#AED6F1",
  "#D7BDE2",
  "#A3E4D7",
  "#F9E79F",
  "#FADBD8",
  "#D5F5E3",
  "#FCF3CF",
  "#E8DAEF",
  "#D4E6F1",
  "#FDEBD0",
  "#D1F2EB",
  "#F5B7B1",
  "#A9DFBF",
  "#FAD7A0",
  "#A9CCE3",
  "#D2B4DE",
  "#AED6F1",
  "#F5CBA7",
  "#A3E4D7",
  "#F9E79F",
  "#FADBD8",
  "#D5F5E3",
];

// VNX letter positions (normalized 0-1 coordinates)
const VNX_POSITIONS: Record<string, { x: number; y: number }[]> = {
  V: [
    { x: 0.02, y: 0.1 },
    { x: 0.05, y: 0.3 },
    { x: 0.08, y: 0.5 },
    { x: 0.11, y: 0.7 },
    { x: 0.14, y: 0.9 },
    { x: 0.17, y: 0.7 },
    { x: 0.2, y: 0.5 },
    { x: 0.23, y: 0.3 },
    { x: 0.26, y: 0.1 },
  ],
  N: [
    { x: 0.34, y: 0.9 },
    { x: 0.34, y: 0.7 },
    { x: 0.34, y: 0.5 },
    { x: 0.34, y: 0.3 },
    { x: 0.34, y: 0.1 },
    { x: 0.4, y: 0.35 },
    { x: 0.46, y: 0.55 },
    { x: 0.52, y: 0.75 },
    { x: 0.58, y: 0.1 },
    { x: 0.58, y: 0.3 },
    { x: 0.58, y: 0.5 },
    { x: 0.58, y: 0.7 },
    { x: 0.58, y: 0.9 },
  ],
  X: [
    { x: 0.66, y: 0.1 },
    { x: 0.7, y: 0.3 },
    { x: 0.74, y: 0.5 },
    { x: 0.78, y: 0.7 },
    { x: 0.82, y: 0.9 },
    { x: 0.78, y: 0.3 },
    { x: 0.7, y: 0.7 },
    { x: 0.82, y: 0.1 },
    { x: 0.66, y: 0.9 },
  ],
};

function getVnxTargets(count: number, w: number, h: number) {
  const allPos = [...VNX_POSITIONS.V, ...VNX_POSITIONS.N, ...VNX_POSITIONS.X];
  const padX = 60,
    padY = 50;
  const usableW = w - padX * 2;
  const usableH = h - padY * 2;
  return Array.from({ length: count }, (_, i) => {
    const p = allPos[i % allPos.length];
    return { x: padX + p.x * usableW, y: padY + p.y * usableH };
  });
}

interface BubbleNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  color: string;
}

function BubbleChart({ members }: { members: Member[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  const [nodes, setNodes] = useState<BubbleNode[]>([]);
  const [isVnxMode, setIsVnxMode] = useState(false);
  const [vnxTargets, setVnxTargets] = useState<{ x: number; y: number }[]>([]);
  const autoTimerRef = useRef<ReturnType<typeof setInterval>>();
  const autoIndexRef = useRef(0);
  const vnxCycleRef = useRef(0);
  const floatPhaseRef = useRef<number[]>([]);
  const animFrameRef = useRef<number>(0);

  const bubbleMembers = useMemo(() => members.slice(0, 30), [members]);
  const normalRadius = 30;
  const expandedRadius = 80;

  // Initialize
  useEffect(() => {
    if (!containerRef.current) return;
    const observe = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const h = Math.min(520, Math.max(400, width * 0.45));
      setContainerSize({ w: width, h });
    });
    observe.observe(containerRef.current);
    return () => observe.disconnect();
  }, []);

  // Create nodes when container is sized
  useEffect(() => {
    if (containerSize.w === 0) return;
    const { w, h } = containerSize;
    const cols = 6;
    const rows = Math.ceil(bubbleMembers.length / cols);
    const cellW = (w - 120) / cols;
    const cellH = (h - 100) / rows;

    const newNodes: BubbleNode[] = bubbleMembers.map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: 60 + cellW * (col + 0.5) + (Math.random() - 0.5) * 30,
        y: 50 + cellH * (row + 0.5) + (Math.random() - 0.5) * 20,
        vx: 0,
        vy: 0,
        baseRadius: normalRadius + (Math.random() - 0.5) * 8,
        color: BUBBLE_COLORS[i % BUBBLE_COLORS.length],
      };
    });
    setNodes(newNodes);
    floatPhaseRef.current = bubbleMembers.map(() => Math.random() * Math.PI * 2);
    setVnxTargets(getVnxTargets(bubbleMembers.length, w, h));
  }, [containerSize, bubbleMembers]);

  // Floating animation loop
  useEffect(() => {
    if (nodes.length === 0 || containerSize.w === 0) return;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      setNodes((prev) => {
        const next = prev.map((n, i) => {
          const phase = floatPhaseRef.current[i] || 0;
          floatPhaseRef.current[i] = phase + dt * (0.5 + (i % 3) * 0.2);

          let tx = n.x,
            ty = n.y;
          if (isVnxMode && vnxTargets[i]) {
            tx = vnxTargets[i].x;
            ty = vnxTargets[i].y;
          }

          const floatX = isVnxMode ? 0 : Math.sin(floatPhaseRef.current[i]) * 0.3;
          const floatY = isVnxMode ? 0 : Math.cos(floatPhaseRef.current[i] * 0.7) * 0.4;

          let fx = floatX,
            fy = floatY;
          if (isVnxMode) {
            fx += (tx - n.x) * 3;
            fy += (ty - n.y) * 3;
          }

          // Separation force
          for (let j = 0; j < prev.length; j++) {
            if (i === j) continue;
            const dx = n.x - prev[j].x;
            const dy = n.y - prev[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minD = (n.baseRadius + prev[j].baseRadius) * 1.15;
            if (dist < minD && dist > 0) {
              const force = ((minD - dist) / dist) * 5;
              fx += dx * force;
              fy += dy * force;
            }
          }

          // Boundary
          const r = n.baseRadius;
          if (n.x < r + 10) fx += 2;
          if (n.x > containerSize.w - r - 10) fx -= 2;
          if (n.y < r + 10) fy += 2;
          if (n.y > containerSize.h - r - 10) fy -= 2;

          const newVx = (n.vx + fx * dt) * 0.92;
          const newVy = (n.vy + fy * dt) * 0.92;

          return {
            ...n,
            x: Math.max(r, Math.min(containerSize.w - r, n.x + newVx)),
            y: Math.max(r, Math.min(containerSize.h - r, n.y + newVy)),
            vx: newVx,
            vy: newVy,
          };
        });
        return next;
      });

      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [nodes.length, containerSize, isVnxMode, vnxTargets]);

  // Auto-rotate + occasional VNX formation
  useEffect(() => {
    autoTimerRef.current = setInterval(() => {
      vnxCycleRef.current++;
      // Every 15 cycles (~30s), do VNX formation for 4s
      if (vnxCycleRef.current % 15 === 0) {
        setIsVnxMode(true);
        setSelectedId(null);
        setTimeout(() => setIsVnxMode(false), 4000);
      } else if (!isVnxMode) {
        autoIndexRef.current = (autoIndexRef.current + 1) % bubbleMembers.length;
        setSelectedId(bubbleMembers[autoIndexRef.current].id);
      }
    }, 2000);
    return () => clearInterval(autoTimerRef.current);
  }, [bubbleMembers, isVnxMode]);

  const handleClick = useCallback(
    (id: string) => {
      if (isVnxMode) return;
      clearInterval(autoTimerRef.current);
      setSelectedId((prev) => (prev === id ? null : id));
      autoTimerRef.current = setTimeout(() => {
        autoTimerRef.current = setInterval(() => {
          autoIndexRef.current = (autoIndexRef.current + 1) % bubbleMembers.length;
          setSelectedId(bubbleMembers[autoIndexRef.current].id);
        }, 2000);
      }, 6000) as unknown as ReturnType<typeof setInterval>;
    },
    [bubbleMembers, isVnxMode],
  );

  // Push-away positions when selected
  const displayNodes = useMemo(() => {
    if (!selectedId || isVnxMode) return nodes;
    const selIdx = bubbleMembers.findIndex((m) => m.id === selectedId);
    if (selIdx === -1) return nodes;

    const selNode = nodes[selIdx];
    if (!selNode) return nodes;
    const minDist = expandedRadius + normalRadius + 15;

    return nodes.map((n, i) => {
      if (i === selIdx) return n;
      const dx = n.x - selNode.x;
      const dy = n.y - selNode.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDist && dist > 0) {
        const push = (minDist - dist) / dist;
        return {
          ...n,
          x: Math.max(normalRadius, Math.min(containerSize.w - normalRadius, n.x + dx * push)),
          y: Math.max(normalRadius, Math.min(containerSize.h - normalRadius, n.y + dy * push)),
        };
      }
      return n;
    });
  }, [selectedId, nodes, bubbleMembers, containerSize, isVnxMode]);

  if (containerSize.w === 0) {
    return <div ref={containerRef} className="w-full" style={{ height: 500 }} />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden select-none"
      style={{
        height: containerSize.h,
        background: "linear-gradient(145deg, #1e293b 0%, #334155 40%, #1e293b 100%)",
      }}
    >
      {/* Decorative dots */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] bg-muted-foreground"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>

      {/* VNX watermark when in formation */}
      <AnimatePresence>
        {isVnxMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center text-[200px] font-gray-200 text-white pointer-events-none"
          >
            VNX
          </motion.div>
        )}
      </AnimatePresence>

      {displayNodes.map((node, i) => {
        const member = bubbleMembers[i];
        if (!member || !node) return null;
        const isSelected = selectedId === member.id && !isVnxMode;
        const r = isSelected ? expandedRadius : node.baseRadius;

        return (
          <motion.div
            key={member.id}
            className="absolute cursor-pointer flex items-center justify-center rounded-full"
            style={{
              width: r * 2,
              height: r * 2,
              left: node.x - r,
              top: node.y - r,
              background: isSelected
                ? `radial-gradient(circle at 35% 35%, ${node.color}, ${node.color}cc)`
                : `radial-gradient(circle at 35% 35%, ${node.color}ee, ${node.color}99)`,
              boxShadow: isSelected
                ? `0 0 30px ${node.color}66, 0 0 60px ${node.color}33, inset 0 -3px 8px rgba(0,0,0,0.2)`
                : `0 4px 15px ${node.color}44, inset 0 -2px 6px rgba(0,0,0,0.15)`,
              border: isSelected ? "2px solid rgba(255,255,255,0.6)" : "1px solid rgba(255,255,255,0.2)",
              zIndex: isSelected ? 20 : 1,
            }}
            animate={{
              width: r * 2,
              height: r * 2,
              scale: isSelected ? 1 : isVnxMode ? 0.85 : 1,
            }}
            transition={{
              width: { type: "spring", stiffness: 200, damping: 20 },
              height: { type: "spring", stiffness: 200, damping: 20 },
              scale: { type: "spring", stiffness: 300, damping: 25 },
            }}
            onClick={() => handleClick(member.id)}
          >
            <AnimatePresence mode="wait">
              {isSelected ? (
                <motion.div
                  key="exp"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.25 }}
                  className="text-center px-3 pointer-events-none"
                >
                  <div className="text-sm font-extrabold text-white drop-shadow-lg leading-tight">
                    {member.shortName}
                  </div>
                  <div className="w-8 h-[1px] bg-white/50 mx-auto my-1" />
                  <div className="text-[8px] text-white/90 leading-tight drop-shadow line-clamp-3">{member.name}</div>
                </motion.div>
              ) : (
                <motion.span
                  key="col"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[11px] font-bold text-white drop-shadow-md pointer-events-none"
                >
                  {member.id}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] text-white/40 pointer-events-none">
        <span></span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400/60" />
        </span>
      </div>
    </div>
  );
}

// Member type categories
const memberTypeOptions = [
  "Tất cả",
  "Cổ phiếu",
  "Trái phiếu doanh nghiệp",
  "Trái phiếu chính phủ",
  "Phái sinh",
  "Trái phiếu riêng lẻ",
  "ETF",
  "Chứng quyền",
  "Cacbon",
  "Vàng",
];

const ITEMS_PER_PAGE = 15;

export default function MemberList() {
  const [searchText, setSearchText] = useState("");
  const [typeFilter, setTypeFilter] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredMembers = useMemo(() => {
    return membersData.filter((m) => {
      const matchText =
        searchText === "" ||
        m.id.toLowerCase().includes(searchText.toLowerCase()) ||
        m.name.toLowerCase().includes(searchText.toLowerCase()) ||
        m.shortName.toLowerCase().includes(searchText.toLowerCase());
      const matchType = typeFilter === "Tất cả" || m.types.includes(typeFilter);
      return matchText && matchType;
    });
  }, [searchText, typeFilter]);

  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);
  const pagedMembers = filteredMembers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, typeFilter]);

  return (
    <div className="min-h-screen bg-[#003366]">
      <Header />
      <MarketTicker />

      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-1 text-sm text-slate-500">
          <Link to="/" className="hover:text-[#003366] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-400">Dành cho thành viên</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003366] font-medium">Danh sách thành viên</span>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-slate-100 min-h-screen">
        {/* Title section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#004a8f]" />
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="titleGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#titleGrid)" />
          </svg>
          <div className="relative max-w-7xl mx-auto px-4 py-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center justify-center gap-3 mb-3">
                <Users className="w-8 h-8 text-cyan-300" />
                <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat">Danh sách thành viên</h1>
              </div>
              <p className="text-cyan-200 text-sm md:text-base max-w-2xl mx-auto">
                Thông tin về các thành viên của Sở Giao dịch Chứng khoán Việt Nam
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
          {/* Bubble Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h2 className="text-lg font-bold text-[#003366] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-[#003366] rounded-full" />
                Tổng quan về thành viên
              </h2>
              <BubbleChart members={membersData} />
            </div>
          </motion.div>

          {/* Search & Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-4 md:p-6"
          >
            <h2 className="text-lg font-bold text-[#003366] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-[#003366] rounded-full" />
              Thông tin chi tiết thành viên
            </h2>

            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Tìm kiếm theo Mã, Tên, Tên viết tắt..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="pl-9 bg-slate-50 border-slate-200 focus:border-[#003366] rounded-lg"
                />
              </div>
              <select
                className="px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#003366] min-w-[200px]"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                {memberTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Results count */}
            <div className="text-sm text-slate-500 mb-4">
              Hiển thị <span className="font-semibold text-[#003366]">{filteredMembers.length}</span> thành viên
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#003366] to-[#004a8f] text-white">
                    <th className="text-left px-4 py-3 font-semibold w-[80px]">Mã TV</th>
                    <th className="text-left px-4 py-3 font-semibold w-[100px]">Tên viết tắt</th>
                    <th className="text-left px-4 py-3 font-semibold">Tên thành viên</th>
                    <th className="text-left px-4 py-3 font-semibold">Loại giao dịch</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedMembers.map((member, idx) => (
                    <motion.tr
                      key={member.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      className="border-b border-slate-100 hover:bg-cyan-50/50 transition-colors group"
                    >
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center justify-center w-10 h-7 rounded-md bg-[#003366]/10 text-[#003366] font-bold text-xs">
                          {member.id}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#003366]">{member.shortName}</td>
                      <td className="px-4 py-3 text-slate-700 group-hover:text-[#003366] transition-colors">
                        {member.name}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {member.types.split(", ").map((t) => (
                            <span
                              key={t}
                              className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200"
                            >
                              {t}
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
              <div className="flex items-center justify-center gap-2 mt-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                  .reduce<(number | string)[]>((acc, p, i, arr) => {
                    if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("...");
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((p, i) =>
                    typeof p === "string" ? (
                      <span key={`e${i}`} className="px-1 text-slate-400">
                        …
                      </span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => setCurrentPage(p)}
                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                          currentPage === p
                            ? "bg-[#003366] text-white shadow-md"
                            : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {p}
                      </button>
                    ),
                  )}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRightIcon className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
