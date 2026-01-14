import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const defaultQuestions = [
  "Làm sao để mở tài khoản giao dịch?",
  "Giờ giao dịch của sàn là bao nhiêu?",
  "Cách tra cứu thông tin cổ phiếu?",
  "Điều kiện niêm yết trên sàn?",
];

const defaultAnswers: Record<string, string> = {
  "Làm sao để mở tài khoản giao dịch?": "Để mở tài khoản giao dịch, bạn cần liên hệ với một trong các công ty chứng khoán thành viên của VNX. Bạn sẽ cần chuẩn bị CMND/CCCD, và hoàn thành các thủ tục đăng ký theo quy định.",
  "Giờ giao dịch của sàn là bao nhiêu?": "Giờ giao dịch: Phiên sáng từ 9:00 - 11:30, Phiên chiều từ 13:00 - 15:00 các ngày từ thứ 2 đến thứ 6 (trừ ngày nghỉ lễ).",
  "Cách tra cứu thông tin cổ phiếu?": "Bạn có thể tra cứu thông tin cổ phiếu trên mục 'Dữ liệu thị trường' của website VNX, hoặc sử dụng thanh tìm kiếm ở trang chủ với mã cổ phiếu.",
  "Điều kiện niêm yết trên sàn?": "Điều kiện niêm yết bao gồm: Vốn điều lệ tối thiểu, thời gian hoạt động, tình hình tài chính lành mạnh, và đáp ứng các tiêu chuẩn quản trị công ty. Chi tiết xin vui lòng xem tại mục Văn bản pháp lý.",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Xin chào! Tôi là trợ lý AI của VNX. Tôi có thể giúp gì cho bạn?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleQuestionClick = (question: string) => {
    const newUserMessage: Message = { id: Date.now(), text: question, isBot: false };
    const answer = defaultAnswers[question] || "Xin lỗi, tôi chưa có thông tin về câu hỏi này. Vui lòng liên hệ hotline (84-24) 39412626 để được hỗ trợ.";
    const newBotMessage: Message = { id: Date.now() + 1, text: answer, isBot: true };

    setMessages((prev) => [...prev, newUserMessage, newBotMessage]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = { id: Date.now(), text: inputValue, isBot: false };
    const answer = defaultAnswers[inputValue] || "Cảm ơn câu hỏi của bạn. Đội ngũ hỗ trợ sẽ phản hồi trong thời gian sớm nhất. Hotline: (84-24) 39412626";
    const newBotMessage: Message = { id: Date.now() + 1, text: answer, isBot: true };

    setMessages((prev) => [...prev, newUserMessage, newBotMessage]);
    setInputValue("");
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center ${isOpen ? "hidden" : ""}`}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">VNX AI Assistant</h4>
                  <p className="text-xs text-primary-foreground/80">Trợ lý thông minh</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot ? "bg-primary/20" : "bg-secondary"
                    }`}
                  >
                    {message.isBot ? (
                      <Bot className="h-4 w-4 text-primary" />
                    ) : (
                      <User className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                      message.isBot
                        ? "bg-secondary text-foreground rounded-tl-none"
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Câu hỏi thường gặp:</p>
                  {defaultQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="block w-full text-left text-sm p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Nhập câu hỏi..."
                  className="flex-1 bg-secondary border-0"
                />
                <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
