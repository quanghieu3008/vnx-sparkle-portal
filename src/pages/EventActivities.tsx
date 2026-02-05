import { useState } from "react";
import { Search, Calendar, Clock, MapPin, ChevronRight, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import event25years from "@/assets/event-25years.jpg";
import eventMember2025 from "@/assets/event-member2025.jpg";

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isFeatured: boolean;
}

const featuredEvents: EventItem[] = [
  {
    id: 1,
    title: "Lễ kỷ niệm 25 năm thành lập thị trường chứng khoán Việt Nam",
    date: "20/07/2025",
    time: "08:30",
    location: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    description: "Sự kiện trọng đại đánh dấu chặng đường 25 năm phát triển của thị trường chứng khoán Việt Nam với sự tham dự của các lãnh đạo cấp...",
    image: event25years,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Hội thảo Phát triển thị trường vốn bền vững 2025",
    date: "15/06/2025",
    time: "09:00",
    location: "Khách sạn Sheraton, TP. Hồ Chí Minh",
    description: "Hội thảo quy tụ các chuyên gia hàng đầu trong và ngoài nước thảo luận về xu hướng phát triển thị trường vốn bền vững và trách nhiệm...",
    image: eventMember2025,
    isFeatured: true,
  },
];

const tabs = [
  { id: "su-kien", label: "Hoạt động sự kiện" },
  { id: "xa-hoi", label: "Hoạt động xã hội" },
  { id: "hop-tac", label: "Hoạt động hợp tác" },
  { id: "lich-nghi", label: "Lịch nghỉ hàng năm" },
];

const relatedLinks = [
  { label: "Lịch sự kiện sắp tới", href: "#" },
  { label: "Thư viện hình ảnh sự kiện", href: "#" },
  { label: "Video sự kiện nổi bật", href: "#" },
  { label: "Thông cáo báo chí", href: "#" },
];

export default function EventActivities() {
  const [activeTab, setActiveTab] = useState("su-kien");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
            <ChevronRight className="h-4 w-4" />
            <a href="#" className="hover:text-primary transition-colors">Tin tức và sự kiện</a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-700 font-medium">Hoạt động sự kiện</span>
          </nav>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Hoạt động sự kiện
            </h1>
            <p className="text-slate-600 max-w-3xl">
              Thông tin các sự kiện, hội nghị, hội thảo và hoạt động chuyên môn do VNX tổ chức hoặc tham gia.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#003366] text-white"
                    : "bg-white text-slate-600 border border-slate-300 hover:border-[#003366] hover:text-[#003366]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Left Content */}
            <div>
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Tìm kiếm theo tiêu đề..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-11 border-slate-300 bg-white text-slate-700 placeholder:text-slate-400"
                  />
                </div>
                <Select defaultValue="all-years">
                  <SelectTrigger className="w-full md:w-[150px] h-11 border-slate-300 bg-white text-slate-700">
                    <SelectValue placeholder="Tất cả năm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-years">Tất cả năm</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-types">
                  <SelectTrigger className="w-full md:w-[180px] h-11 border-slate-300 bg-white text-slate-700">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Tất cả loại sự kiện" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-types">Tất cả loại sự kiện</SelectItem>
                    <SelectItem value="conference">Hội nghị</SelectItem>
                    <SelectItem value="workshop">Hội thảo</SelectItem>
                    <SelectItem value="ceremony">Lễ kỷ niệm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Featured Events Section */}
              <div className="mb-10">
                <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#003366] rounded-full"></span>
                  Sự kiện nổi bật
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {featuredEvents.map((event) => (
                    <div key={event.id} className="group cursor-pointer">
                      {/* Event Image */}
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {event.isFeatured && (
                          <span className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-medium rounded">
                            Nổi bật
                          </span>
                        )}
                      </div>

                      {/* Event Info */}
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-[#003366] transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                      </div>

                      <div className="flex items-start gap-1.5 text-sm text-slate-500 mb-3">
                        <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{event.location}</span>
                      </div>

                      <p className="text-sm text-slate-600 line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* View More Button */}
              <div className="flex justify-center">
                <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                  Xem thêm sự kiện
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="flex items-center gap-2 text-base font-semibold text-[#003366] mb-4">
                  <Calendar className="h-5 w-5" />
                  Liên kết liên quan
                </h3>
                <ul className="space-y-3">
                  {relatedLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#003366] transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-[#003366]" />
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
    </div>
  );
}
