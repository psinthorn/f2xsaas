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
  User,
  Building,
  Phone,
  ArrowRight, 
  Shield, 
  Zap,
  Brain,
  CheckCircle2,
  Github,
  Linkedin,
  Users,
  Star,
  Award
} from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('กรุณายอมรับข้อกำหนดและเงื่อนไข');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle registration logic here
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const features = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'วิเคราะห์ข้อมูลด้วย AI ที่ชาญฉลาด'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'ระบบอัตโนมัติที่ลดเวลาทำงาน 80%'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'ความปลอดภัยระดับ Enterprise'
    }
  ];

  const testimonials = [
    {
      company: 'SCB Bank',
      feedback: 'เพิ่มประสิทธิภาพการให้บริการลูกค้า 400%',
      rating: 5
    },
    {
      company: 'CP All',
      feedback: 'ลดต้นทุนการดำเนินงาน 60%',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Side - Branding & Social Proof */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F2</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">XSaaS</span>
            </Link>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              เริ่มต้นการเปลี่ยนแปลง
              <span className="text-blue-600"> ดิจิทัล</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              เข้าร่วมกับองค์กรชั้นนำกว่า 500+ แห่งที่เลือกใช้ F2XSaaS 
              เพื่อการปรับเปลี่ยนดิจิทัลที่ประสบความสำเร็จ
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">ลูกค้าองค์กร</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.8%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">ปีประสบการณ์</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ทำไมต้อง F2XSaaS?</h3>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">ลูกค้าพูดถึงเรา</h3>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-gray-900">{testimonial.company}</span>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Registration Form */}
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
              
              <CardTitle className="text-2xl font-bold text-gray-900">สมัครสมาชิก</CardTitle>
              <CardDescription className="text-base">
                สร้างบัญชีและเริ่มต้นทดลองใช้ฟรี 14 วัน
              </CardDescription>
              <div className="flex justify-center">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                  ไม่ต้องใช้บัตรเครดิต
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อ
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="สมชาย"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="pl-9 h-10 text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      นามสกุล
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="ใจดี"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="h-10 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    อีเมล
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-9 h-10 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    บริษัท
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="บริษัท ABC จำกัด"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="pl-9 h-10 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    เบอร์โทรศัพท์
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08X-XXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="pl-9 h-10 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    รหัสผ่าน
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-9 pr-9 h-10 text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    ยืนยันรหัสผ่าน
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="pl-9 pr-9 h-10 text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5" 
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    ฉันยอมรับ{' '}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-500">ข้อกำหนดและเงื่อนไข</Link>
                    {' '}และ{' '}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-500">นโยบายความเป็นส่วนตัว</Link>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 text-base font-medium"
                  disabled={isLoading || !acceptTerms}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      กำลังสร้างบัญชี...
                    </div>
                  ) : (
                    <>
                      สร้างบัญชีฟรี
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">หรือสมัครด้วย</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="h-10">
                    <span className="w-4 h-4 text-red-500 font-bold">G</span>
                  </Button>
                  <Button variant="outline" className="h-10">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="h-10">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>

                <div className="text-center">
                  <span className="text-gray-600 text-sm">มีบัญชีอยู่แล้ว? </span>
                  <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                    เข้าสู่ระบบ
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Trust Indicators */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3">
        <div className="flex justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Award className="w-3 h-3 text-blue-500" />
            <span>ISO 27001</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-green-500" />
            <span>SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 text-purple-500" />
            <span>500+ ลูกค้า</span>
          </div>
        </div>
      </div>
    </div>
  );
}