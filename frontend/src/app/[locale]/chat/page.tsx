'use client';

import { useState, useRef, useEffect } from 'react';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Send,
  Paperclip,
  Mic,
  MicOff,
  MoreVertical,
  Bot,
  User,
  Lightbulb,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Download,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Sparkles
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  attachments?: string[];
  status?: 'sending' | 'sent' | 'error';
}

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'สวัสดีครับ! ผมคือ F2 AI Assistant ผู้เชี่ยวชาญด้าน Digital Transformation และการใช้งาน F2XSaaS Platform ผมพร้อมช่วยเหลือคุณในเรื่องต่างๆ เช่น:\n\n• การวิเคราะห์ข้อมูลธุรกิจ\n• การออกแบบ Process Automation\n• การปรับปรุงประสิทธิภาพองค์กร\n• คำแนะนำเรื่อง AI Implementation\n\nมีอะไรให้ผมช่วยเหลือไหมครับ?',
      timestamp: new Date(),
      suggestions: [
        'วิเคราะห์ข้อมูลขายในเดือนนี้',
        'สร้าง Automation สำหรับ HR',
        'แนะนำการปรับปรุง Customer Service',
        'ประเมินความพร้อม Digital Transformation'
      ]
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickActions = [
    {
      title: 'วิเคราะห์ประสิทธิภาพ',
      description: 'วิเคราะห์ KPI และแนวโน้มธุรกิจ',
      icon: BarChart3,
      prompt: 'ช่วยวิเคราะห์ประสิทธิภาพการทำงานขององค์กรในเดือนนี้'
    },
    {
      title: 'Process Automation',
      description: 'สร้างระบบอัตโนมัติ',
      icon: Zap,
      prompt: 'ฉันต้องการสร้างระบบอัตโนมัติสำหรับกระบวนการอนุมัติ'
    },
    {
      title: 'Customer Insights',
      description: 'ข้อมูลเชิงลึกเกี่ยวกับลูกค้า',
      icon: Users,
      prompt: 'ช่วยวิเคราะห์พฤติกรรมลูกค้าและแนะนำกลยุทธ์การตลาด'
    },
    {
      title: 'Security Assessment',
      description: 'ประเมินความปลอดภัย',
      icon: Shield,
      prompt: 'ช่วยประเมินระบบรักษาความปลอดภัยขององค์กร'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(userMessage.content),
        timestamp: new Date(),
        suggestions: getRandomSuggestions()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const getAIResponse = (userInput: string): string => {
    const responses = [
      'ขอบคุณสำหรับคำถามครับ! จากข้อมูลที่คุณให้มา ผมแนะนำให้เริ่มต้นด้วยการวิเคราะห์ข้อมูลปัจจุบันก่อน จากนั้นเราจะสร้างแผนการปรับปรุงที่เหมาะสมกับองค์กรของคุณ\n\nขั้นตอนที่แนะนำ:\n1. Data Collection & Analysis\n2. Process Mapping\n3. Automation Design\n4. Implementation & Testing\n5. Monitoring & Optimization\n\nต้องการให้ผมอธิบายในขั้นตอนไหนเพิ่มเติมไหมครับ?',
      
      'เป็นคำถามที่ดีมากครับ! ผมได้วิเคราะห์สถานการณ์แล้ว และเห็นว่าองค์กรของคุณมีศักยภาพสูงในการปรับปรุง\n\nผลการวิเคราะห์:\n• ประสิทธิภาพปัจจุบัน: 74%\n• โอกาสปรับปรุง: 26%\n• ROI คาดการณ์: 150-200%\n• เวลาในการ implement: 3-6 เดือน\n\nต้องการให้ผมสร้างแผนการดำเนินงานที่ละเอียดให้ไหมครับ?',
      
      'ยอดเยี่ยมครับ! จากข้อมูลที่วิเคราะห์ ผมพบประเด็นสำคัญหลายจุดที่สามารถปรับปรุงได้\n\nคำแนะนำ:\n✅ เริ่มต้นจาก Quick Wins (ผลลัพธ์เร็ว)\n✅ Focus กลุ่มลูกค้าหลัก\n✅ Automate งานที่ทำซ้ำ\n✅ ใช้ AI สำหรับ Decision Making\n\nต้องการให้ผมเตรียม Action Plan พร้อมไทม์ไลน์ให้ไหมครับ?'
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getRandomSuggestions = (): string[] => {
    const allSuggestions = [
      'สร้างรายงานประจำเดือน',
      'ตั้งค่า Alert System',
      'วิเคราะห์ Cost Optimization',
      'แนะนำ Best Practices',
      'ดู Case Study ที่คล้ายกัน',
      'สร้าง Dashboard แบบ Custom',
      'ประเมิน Risk Assessment',
      'แนะนำการ Training ทีม'
    ];
    
    return allSuggestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    inputRef.current?.focus();
  };

  const handleQuickAction = (prompt: string) => {
    setInput(prompt);
    setTimeout(() => handleSend(), 100);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Add voice recording logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex-1 pt-16 flex">
        {/* Sidebar */}
        <div className="hidden lg:block w-80 bg-white border-r border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">F2 AI Assistant</h2>
            <p className="text-sm text-gray-600">ผู้เชี่ยวชาญด้าน Digital Transformation</p>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">การดำเนินการด่วน</h3>
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.prompt)}
                  className="w-full p-3 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <action.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900">{action.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{action.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* AI Capabilities */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">ความสามารถของ AI</h3>
            <div className="space-y-3">
              {[
                { icon: Brain, text: 'Data Analysis & Insights', color: 'text-purple-600 bg-purple-100' },
                { icon: Zap, text: 'Process Automation', color: 'text-yellow-600 bg-yellow-100' },
                { icon: Target, text: 'Strategic Planning', color: 'text-green-600 bg-green-100' },
                { icon: Shield, text: 'Risk Assessment', color: 'text-red-600 bg-red-100' }
              ].map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-6 h-6 ${capability.color} rounded-md flex items-center justify-center`}>
                    <capability.icon className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-gray-700">{capability.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-semibold text-gray-900">F2 AI Assistant</h1>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Online • พร้อมช่วยเหลือ
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Export Chat
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  New Chat
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <div className={`max-w-3xl ${message.role === 'user' ? 'order-2' : ''}`}>
                  <div className={`p-4 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white ml-auto' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          ดี
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-600">
                          <ThumbsDown className="w-4 h-4 mr-1" />
                          ไม่ดี
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {message.timestamp.toLocaleTimeString('th-TH', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                    {message.status === 'sending' && (
                      <>
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                        <span>กำลังส่ง...</span>
                      </>
                    )}
                    {message.status === 'sent' && message.role === 'user' && (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-blue-500" />
                        <span>ส่งแล้ว</span>
                      </>
                    )}
                  </div>

                  {/* Suggestions */}
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="mt-3">
                      <div className="text-sm text-gray-600 mb-2">คำแนะนำ:</div>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm rounded-full transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 order-3">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">AI กำลังคิด...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <div className="relative">
                    <Input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="พิมพ์คำถามหรือข้อความของคุณ..."
                      className="pr-24 py-3 text-base resize-none min-h-[48px]"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      disabled={isLoading}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 h-8 w-8"
                        disabled={isLoading}
                      >
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`p-2 h-8 w-8 ${isRecording ? 'text-red-500' : ''}`}
                        onClick={toggleRecording}
                        disabled={isLoading}
                      >
                        {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleSend} 
                  disabled={!input.trim() || isLoading}
                  className="px-6 py-3 h-12"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
              
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Powered by F2 AI • ข้อมูลอัปเดตล่าสุด</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Enter = ส่ง</span>
                  <span>Shift + Enter = บรรทัดใหม่</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}