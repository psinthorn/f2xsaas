'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Play,
  CheckCircle2,
  ArrowRight,
  Building,
  Star,
  Clock,
  Briefcase
} from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { number: '500+', label: 'ลูกค้าองค์กร', icon: Building },
    { number: '15+', label: 'ปีประสบการณ์', icon: Calendar },
    { number: '99.8%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'ซัพพอร์ต', icon: Clock }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'นวัตกรรม',
      description: 'เราใช้เทคโนโลยีล้ำสมัยและคิดค้นแนวทางใหม่ๆ เพื่อแก้ปัญหาทางธุรกิจที่ซับซ้อน',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Shield,
      title: 'ความน่าเชื่อถือ',
      description: 'มั่นใจในระบบรักษาความปลอดภัยระดับ Enterprise และการให้บริการที่เสถียร',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Heart,
      title: 'ใส่ใจลูกค้า',
      description: 'เราเข้าใจความต้องการของลูกค้าและมุ่งมั่นสร้างประสบการณ์ที่ดีที่สุด',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: TrendingUp,
      title: 'การเติบโต',
      description: 'เราช่วยให้ลูกค้าและทีมงานเติบโตไปด้วยกันในยุคดิจิทัล',
      color: 'bg-green-100 text-green-600'
    }
  ];

  const team = [
    {
      name: 'ดร. สมชาย วิทยากร',
      position: 'CEO & Co-Founder',
      experience: '20+ ปี',
      expertise: 'AI Strategy, Digital Transformation',
      image: '/images/team/ceo.jpg',
      bio: 'อดีต CTO ของธนาคารชั้นนำ ผู้เชี่ยวชาญด้าน AI และการปรับเปลี่ยนดิจิทัล',
      linkedin: '#',
      email: 'somchai@f2.co.th'
    },
    {
      name: 'สิรินทร์ เทคโนโลยี',
      position: 'CTO & Co-Founder',
      experience: '18+ ปี',
      expertise: 'Machine Learning, Cloud Architecture',
      image: '/images/team/cto.jpg',
      bio: 'ผู้เชี่ยวชาญด้าน ML/AI จาก Google และ Microsoft ประสบการณ์ระบบ Enterprise',
      linkedin: '#',
      email: 'sirin@f2.co.th'
    },
    {
      name: 'นภัสสร ข้อมูลวิทยา',
      position: 'Head of Data Science',
      experience: '12+ ปี',
      expertise: 'Data Analytics, Business Intelligence',
      image: '/images/team/data-head.jpg',
      bio: 'ผู้เชี่ยวชาญด้าน Data Science และ Analytics จาก leading consulting firm',
      linkedin: '#',
      email: 'naphat@f2.co.th'
    },
    {
      name: 'อรรถพล ประสบการณ์',
      position: 'Head of Customer Success',
      experience: '15+ ปี',
      expertise: 'Customer Experience, Process Optimization',
      image: '/images/team/cs-head.jpg',
      bio: 'ผู้เชี่ยวชาญด้านการให้บริการลูกค้า และการปรับปรุงกระบวนการทางธุรกิจ',
      linkedin: '#',
      email: 'atthapol@f2.co.th'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'ก่อตั้งบริษัท F2',
      description: 'เริ่มต้นด้วยทีมเล็กๆ ที่มีวิสัยทัศน์ในการนำเทคโนโลยี AI มาใช้ในธุรกิจไทย',
      highlight: true
    },
    {
      year: '2015',
      title: 'เปิดตัว F2 Analytics Platform',
      description: 'แพลตฟอร์มวิเคราะห์ข้อมูลแรกของไทย ที่ช่วยธุรกิจตัดสินใจด้วยข้อมูล',
      highlight: false
    },
    {
      year: '2018',
      title: 'ขยายสู่ระดับภูมิภาค',
      description: 'เปิดสำนักงานในสิงคโปร์และมาเลเซีย รองรับลูกค้าข้ามประเทศ',
      highlight: false
    },
    {
      year: '2020',
      title: 'เปิดตัว AI-First Solutions',
      description: 'นำเสนอโซลูชัน AI ครบวงจรสำหรับการปรับเปลี่ยนดิจิทัล',
      highlight: false
    },
    {
      year: '2022',
      title: 'พันธมิตรกับผู้นำระดับโลก',
      description: 'ความร่วมมือกับ Microsoft, Google Cloud, และ AWS ในฐานะ Premier Partner',
      highlight: false
    },
    {
      year: '2024',
      title: 'เปิดตัว F2XSaaS Platform',
      description: 'แพลตฟอร์ม SaaS ครบวงจรสำหรับการปรับเปลี่ยนดิจิทัลที่ใช้งานง่าย',
      highlight: true
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'SOC 2 Type II', description: 'Security & Availability' },
    { name: 'AWS Advanced Partner', description: 'Cloud Excellence' },
    { name: 'Microsoft Gold Partner', description: 'Azure & AI Expertise' },
    { name: 'Google Cloud Premier', description: 'ML & Analytics' },
    { name: 'PDPA Certified', description: 'Data Protection Compliance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                เกี่ยวกับ F2
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                ผู้นำ
                <span className="text-blue-600"> Digital Transformation</span>
                <br />
                ในประเทศไทย
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                มากกว่า 15 ปีแห่งการเป็นผู้นำด้านเทคโนโลยี AI และการปรับเปลี่ยนดิจิทัล 
                เราช่วยให้องค์กรไทยกว่า 500+ แห่งเติบโตอย่างยั่งยืนในยุคดิจิทัล
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-y">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'story', label: 'เรื่องราวของเรา', icon: Heart },
                { id: 'values', label: 'ค่านิยม', icon: Target },
                { id: 'team', label: 'ทีมงาน', icon: Users },
                { id: 'timeline', label: 'ประวัติศาสตร์', icon: Calendar },
                { id: 'certifications', label: 'การรับรอง', icon: Award }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        {activeTab === 'story' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    เริ่มต้นจากความฝันที่จะเปลี่ยนแปลงธุรกิจไทย
                  </h2>
                  <div className="prose prose-lg text-gray-600 space-y-6">
                    <p>
                      ในปี 2009 เมื่อเทคโนโลยี AI ยังไม่เป็นที่รู้จักอย่างแพร่หลายในประเทศไทย 
                      ผู้ก่อตั้งของเราเห็นศักยภาพอันยิ่งใหญ่ของเทคโนโลยีนี้ที่จะเปลี่ยนแปลงวิธีการทำธุรกิจ
                    </p>
                    <p>
                      เราเริ่มต้นจากการให้คำปรึกษาด้านเทคโนโลยีให้กับธนาคารและสถาบันการเงินชั้นนำ 
                      ก่อนที่จะขยายไปสู่อุตสาหกรรมอื่นๆ เช่น การค้าปลีก การผลิต และบริการ
                    </p>
                    <p>
                      วันนี้เราภูมิใจที่ได้เป็นส่วนหนึ่งของการเปลี่ยนแปลงดิจิทัลของไทย 
                      ด้วยทีมงานผู้เชี่ยวชาญกว่า 200 คน และลูกค้าที่วางใจในบริการของเรากว่า 500 องค์กร
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button size="lg">
                      ดูวิดีโอเรื่องราว
                      <Play className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="lg:order-first">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <Lightbulb className="w-12 h-12 text-yellow-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Values Section */}
        {activeTab === 'values' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">ค่านิยมที่ขับเคลื่อนเรา</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ค่านิยมเหล่านี้เป็นหัวใจของการทำงานและการให้บริการลูกค้าของเรา
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                        <value.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">ทีมผู้นำของเรา</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ผู้เชี่ยวชาญด้านเทคโนโลยีและธุรกิจที่มีประสบการณ์กว่า 200 ปีรวมกัน
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                          <div className="text-blue-600 font-medium mb-1">{member.position}</div>
                          <div className="flex gap-2 mb-3">
                            <Badge variant="secondary">{member.experience}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-3">{member.expertise}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {member.bio}
                      </CardDescription>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          อีเมล
                        </Button>
                        <Button variant="outline" size="sm">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Timeline Section */}
        {activeTab === 'timeline' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">เส้นทางแห่งความสำเร็จ</h2>
                <p className="text-xl text-gray-600">
                  การเดินทางกว่า 15 ปีในการสร้างนวัตกรรมและเปลี่ยนแปลงธุรกิจไทย
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start gap-8">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.highlight 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                          {milestone.highlight && (
                            <Badge className="bg-yellow-500 hover:bg-yellow-600">เหตุการณ์สำคัญ</Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {activeTab === 'certifications' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">การรับรองและพันธมิตร</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  เราภูมิใจในมาตรฐานระดับโลกและการเป็นพันธมิตรกับผู้นำเทคโนโลยี
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>{cert.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        <span className="font-medium">Certified</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              พร้อมเริ่มต้นการเปลี่ยนแปลงกับเราแล้วหรือยัง?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              มาร่วมเป็นส่วนหนึ่งของการปฏิวัติดิจิทัลไปกับ F2XSaaS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                นัดหมายปรึกษาฟรี
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                ดูแผนการใช้งาน
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <CardTitle>สำนักงานใหญ่</CardTitle>
                  <CardDescription>
                    123 ถนนสีลม แขวงสีลม เขตบางรัก<br />
                    กรุงเทพมหานคร 10500
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <CardTitle>ติดต่อเรา</CardTitle>
                  <CardDescription>
                    โทร: 02-123-4567<br />
                    อีเมล: info@f2.co.th
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <CardTitle>ติดตามเรา</CardTitle>
                  <CardDescription>
                    <div className="flex justify-center gap-4 mt-2">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                      <Twitter className="w-5 h-5 text-blue-600" />
                      <Github className="w-5 h-5 text-blue-600" />
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}