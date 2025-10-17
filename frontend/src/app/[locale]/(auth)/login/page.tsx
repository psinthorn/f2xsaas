'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  Shield, 
  Zap,
  Brain,
  CheckCircle2,
  Github,
  Linkedin
} from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 2000);
  };

  const benefits = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'เข้าถึงข้อมูลเชิงลึกด้วย AI ที่ช่วยตัดสินใจทางธุรกิจ'
    },
    {
      icon: Zap,
      title: 'Process Automation', 
      description: 'ลดเวลาทำงานด้วยระบบอัตโนมัติที่ชาญฉลาด'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ความปลอดภัยระดับ Enterprise ที่คุณวางใจได้'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Side - Branding & Benefits */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F2</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">XSaaS</span>
            </Link>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ยินดีต้อนรับสู่
              <span className="text-blue-600"> F2XSaaS</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              แพลตฟอร์ม AI ครบวงจรสำหรับการปรับเปลี่ยนดิจิทัลที่จะเปลี่ยนวิธีการทำธุรกิจของคุณ
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>500+ ลูกค้าองค์กร</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>99.8% Uptime SLA</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              {/* Mobile Logo */}
              <div className="lg:hidden flex justify-center mb-6">
                <Link href="/" className="inline-flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">F2</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">XSaaS</span>
                </Link>
              </div>
              
              <CardTitle className="text-2xl font-bold text-gray-900">เข้าสู่ระบบ</CardTitle>
              <CardDescription className="text-base">
                เข้าสู่แดชบอร์ดของคุณและเริ่มต้นการปรับเปลี่ยนดิจิทัล
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      อีเมล
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      รหัสผ่าน
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">จดจำการเข้าสู่ระบบ</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                    ลืมรหัสผ่าน?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      กำลังเข้าสู่ระบบ...
                    </div>
                  ) : (
                    <>
                      เข้าสู่ระบบ
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">หรือเข้าสู่ระบบด้วย</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="h-12">
                    <span className="w-5 h-5 text-red-500 font-bold">G</span>
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>

                <div className="text-center">
                  <span className="text-gray-600">ยังไม่มีบัญชี? </span>
                  <Link href="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                    สมัครสมาชิก
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Benefits */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-center gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            <span>500+ ลูกค้า</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            <span>99.8% Uptime</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </div>
  );
}