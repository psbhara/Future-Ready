
import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const AIChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your career assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "I can help you with your resume. What specific aspect would you like feedback on?",
        "Based on your profile, you might be interested in UX Design positions. Would you like to learn more about this career path?",
        "There are several universities offering programs that match your background. Would you like me to recommend some?",
        "I've analyzed your skills, and you have strong potential in data analysis. Have you considered roles in this field?",
        "For interview preparation, I recommend focusing on behavioral questions and technical skills relevant to your target position.",
      ];

      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto h-[600px] flex flex-col">
      <CardHeader className="px-4 py-3 border-b">
        <CardTitle className="text-lg flex items-center gap-2 text-career-purple">
          <Bot className="h-5 w-5" /> Career Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === "user" ? "justify-end" : ""
                }`}
              >
                {message.sender === "bot" && (
                  <Avatar>
                    <AvatarFallback className="bg-career-purple text-white">AI</AvatarFallback>
                    <AvatarImage src="/placeholder.svg" />
                  </Avatar>
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-career-purple text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-[10px] mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <Avatar>
                    <AvatarFallback className="bg-career-blue text-white">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                    <AvatarImage src="/placeholder.svg" />
                  </Avatar>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarFallback className="bg-career-purple text-white">AI</AvatarFallback>
                  <AvatarImage src="/placeholder.svg" />
                </Avatar>
                <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <form onSubmit={handleSend} className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              type="button" 
              className="flex-shrink-0"
            >
              <Paperclip className="h-5 w-5" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Input
              placeholder="Ask about career advice, resume tips, or job recommendations..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button 
              type="submit" 
              className="flex-shrink-0 bg-career-purple hover:bg-career-lightPurple"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            Our AI assistant can help with career guidance, resume tips, interview preparation, and more.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChat;
