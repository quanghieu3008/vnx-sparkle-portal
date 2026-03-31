import { useState } from "react";
import { MessageSquareWarning, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ViolationReportSection = () => {
  const { toast } = useToast();
  const [reportForm, setReportForm] = useState({
    name: '', email: '', phone: '', subject: '', organization: '', content: ''
  });

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Gửi phản ánh thành công!',
      description: 'Cảm ơn bạn đã gửi phản ánh. Chúng tôi sẽ xử lý trong thời gian sớm nhất.',
    });
    setReportForm({ name: '', email: '', phone: '', subject: '', organization: '', content: '' });
  };

  return (
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
                <Input required value={reportForm.name} onChange={e => setReportForm(p => ({ ...p, name: e.target.value }))} className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50" placeholder="Nhập họ và tên" />
              </div>
              <div>
                <label className="block text-white/80 text-xs font-medium mb-1.5">Email <span className="text-amber-400">*</span></label>
                <Input required type="email" value={reportForm.email} onChange={e => setReportForm(p => ({ ...p, email: e.target.value }))} className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-white/80 text-xs font-medium mb-1.5">Số điện thoại</label>
                <Input value={reportForm.phone} onChange={e => setReportForm(p => ({ ...p, phone: e.target.value }))} className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50" placeholder="0xxx xxx xxx" />
              </div>
              <div>
                <label className="block text-white/80 text-xs font-medium mb-1.5">Tổ chức/cá nhân vi phạm <span className="text-amber-400">*</span></label>
                <Input required value={reportForm.organization} onChange={e => setReportForm(p => ({ ...p, organization: e.target.value }))} className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50" placeholder="Tên tổ chức/cá nhân" />
              </div>
            </div>
            <div>
              <label className="block text-white/80 text-xs font-medium mb-1.5">Tiêu đề phản ánh <span className="text-amber-400">*</span></label>
              <Input required value={reportForm.subject} onChange={e => setReportForm(p => ({ ...p, subject: e.target.value }))} className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50" placeholder="Nhập tiêu đề phản ánh" />
            </div>
            <div>
              <label className="block text-white/80 text-xs font-medium mb-1.5">Nội dung chi tiết <span className="text-amber-400">*</span></label>
              <Textarea required rows={5} value={reportForm.content} onChange={e => setReportForm(p => ({ ...p, content: e.target.value }))} className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-amber-400/50 resize-none" placeholder="Mô tả chi tiết hành vi vi phạm, thời gian, địa điểm, bằng chứng (nếu có)..." />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold h-11 rounded-lg">
              <Send className="h-4 w-4 mr-2" />
              Gửi phản ánh
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ViolationReportSection;
