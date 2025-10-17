'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  Search, 
  Filter,
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
  Brain,
  Target,
  CheckCircle2
} from 'lucide-react';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'ทั้งหมด', count: 24 },
    { id: 'guides', name: 'คู่มือ', count: 8 },
    { id: 'case-studies', name: 'กรณีศึกษา', count: 6 },
    { id: 'whitepapers', name: 'รายงานวิจัย', count: 4 },
    { id: 'webinars', name: 'เว็บินาร์', count: 3 },
    { id: 'tools', name: 'เครื่องมือ', count: 3 }
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'Digital Transformation Playbook 2024',
      description: 'คู่มือสมบูรณ์สำหรับการปรับเปลี่ยนองค์กรสู่ยุคดิจิทัล พร้อมกรอบงานและเครื่องมือที่จำเป็น',
      type: 'whitepaper',
      category: 'whitepapers',
      image: '/images/resources/playbook-2024.jpg',
      downloadCount: '12.5K',
      readTime: '25 นาที',
      featured: true,
      isNew: true
    },
    {
      id: 2,
      title: 'AI Implementation Success Story: SCB Bank',
      description: 'กรณีศึกษาการนำ AI มาใช้ในระบบธนาคาร เพิ่มประสิทธิภาพการให้บริการลูกค้า 400%',
      type: 'case-study',
      category: 'case-studies',
      image: '/images/resources/scb-case-study.jpg',
      downloadCount: '8.2K',
      readTime: '15 นาที',
      featured: true,
      isNew: false
    },
    {
      id: 3,
      title: 'Building AI-First Culture in Organizations',
      description: 'เว็บินาร์พิเศษ: วิธีสร้างวัฒนธรรมองค์กรที่เน้น AI เป็นหลัก พร้อมผู้เชี่ยวชาญจาก F2',
      type: 'webinar',
      category: 'webinars',
      image: '/images/resources/ai-culture-webinar.jpg',
      duration: '60 นาที',
      viewers: '2.1K',
      featured: true,
      isNew: true
    }
  ];

  const allResources = [
    {
      id: 4,
      title: 'Complete Guide to Process Automation',
      description: 'คู่มือการทำ Process Automation แบบ Step-by-Step สำหรับธุรกิจทุกขนาด',
      type: 'guide',
      category: 'guides',
      image: '/images/resources/automation-guide.jpg',
      downloadCount: '6.8K',
      readTime: '20 นาที',
      tags: ['Automation', 'Process', 'Efficiency']
    },
    {
      id: 5,
      title: 'ROI Calculator for AI Projects',
      description: 'เครื่องมือคำนวณผลตอบแทนการลงทุนในโครงการ AI แบบละเอียด',
      type: 'tool',
      category: 'tools',
      image: '/images/resources/roi-calculator.jpg',
      usageCount: '4.2K',
      tags: ['ROI', 'Calculator', 'Investment']
    },
    {
      id: 6,
      title: 'Customer Service AI Case Study: CP All',
      description: 'ผลลัพธ์การใช้ AI Chatbot ในระบบบริการลูกค้า ลดต้นทุน 60%',
      type: 'case-study',
      category: 'case-studies',
      image: '/images/resources/cp-case-study.jpg',
      downloadCount: '5.5K',
      readTime: '12 นาที',
      tags: ['AI', 'Customer Service', 'Retail']
    },
    {
      id: 7,
      title: 'Data Analytics Maturity Assessment',
      description: 'ประเมินระดับความพร้อมด้าน Data Analytics ขององค์กรและรับคำแนะนำ',
      type: 'tool',
      category: 'tools',
      image: '/images/resources/maturity-assessment.jpg',
      usageCount: '3.1K',
      tags: ['Assessment', 'Data', 'Analytics']
    },
    {
      id: 8,
      title: 'Future of Work: AI and Human Collaboration',
      description: 'รายงานวิจัยเกี่ยวกับอนาคตของการทำงานร่วมกันระหว่างมนุษย์และ AI',
      type: 'whitepaper',
      category: 'whitepapers',
      image: '/images/resources/future-work.jpg',
      downloadCount: '7.3K',
      readTime: '30 นาที',
      tags: ['Future of Work', 'AI', 'Collaboration']
    },
    {
      id: 9,
      title: 'Manufacturing 4.0 Transformation',
      description: 'กรณีศึกษาการเปลี่ยนแปลงโรงงานสู่ Manufacturing 4.0 พร้อม IoT และ AI',
      type: 'case-study',
      category: 'case-studies',
      image: '/images/resources/manufacturing-case.jpg',
      downloadCount: '4.9K',
      readTime: '18 นาที',
      tags: ['Manufacturing', 'Industry 4.0', 'IoT']
    }
  ];

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <TrendingUp className="w-5 h-5" />;
      case 'whitepaper': return <FileText className="w-5 h-5" />;
      case 'webinar': return <Video className="w-5 h-5" />;
      case 'tool': return <Zap className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getResourceTypeText = (type: string) => {
    switch (type) {
      case 'guide': return 'คู่มือ';
      case 'case-study': return 'กรณีศึกษา';
      case 'whitepaper': return 'รายงานวิจัย';
      case 'webinar': return 'เว็บินาร์';
      case 'tool': return 'เครื่องมือ';
      default: return 'เอกสาร';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Brain className="w-4 h-4" />
                ศูนย์ความรู้ F2XSaaS
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                ทรัพยากร
                <span className="text-blue-600"> ความรู้</span>
                <br />
                เพื่อการเปลี่ยนแปลง
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                คลังความรู้ที่ครบครันสำหรับการปรับเปลี่ยนองค์กรสู่ยุคดิจิทัล 
                พร้อมคู่มือ กรณีศึกษา และเครื่องมือที่คุณต้องการ
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="ค้นหาทรัพยากร..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 py-3 text-lg"
                    />
                  </div>
                  <Button variant="outline" size="lg" className="sm:w-auto">
                    <Filter className="w-5 h-5 mr-2" />
                    กรองผลลัพธ์
                  </Button>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">ทรัพยากรแนะนำ</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      {getResourceIcon(resource.type)}
                    </div>
                    {resource.isNew && (
                      <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                        ใหม่
                      </Badge>
                    )}
                    {resource.featured && (
                      <Badge className="absolute top-4 left-4 bg-yellow-500 hover:bg-yellow-600">
                        แนะนำ
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">
                        {getResourceTypeText(resource.type)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription className="text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        {resource.downloadCount && (
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {resource.downloadCount}
                          </div>
                        )}
                        {resource.viewers && (
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {resource.viewers}
                          </div>
                        )}
                        {resource.readTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {resource.readTime}
                          </div>
                        )}
                        {resource.duration && (
                          <div className="flex items-center gap-1">
                            <Video className="w-4 h-4" />
                            {resource.duration}
                          </div>
                        )}
                      </div>
                    </div>
                    <Button className="w-full">
                      {resource.type === 'webinar' ? 'ดูเว็บินาร์' : 'ดาวน์โหลด'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">ทรัพยากรทั้งหมด</h2>
              <span className="text-gray-500">({filteredResources.length} รายการ)</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center">
                    {getResourceIcon(resource.type)}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">
                        {getResourceTypeText(resource.type)}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {resource.tags && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-3">
                        {resource.downloadCount && (
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {resource.downloadCount}
                          </div>
                        )}
                        {resource.usageCount && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {resource.usageCount}
                          </div>
                        )}
                        {resource.readTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {resource.readTime}
                          </div>
                        )}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      {resource.type === 'tool' ? 'ใช้เครื่องมือ' : 'ดาวน์โหลด'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">ไม่พบทรัพยากรที่ตรงกับการค้นหา</h3>
                <p className="text-gray-600 mb-4">ลองใช้คำค้นหาอื่น หรือเลือกหมวดหมู่อื่น</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  รีเซ็ตการค้นหา
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              อัปเดตทรัพยากรใหม่ทุกสัปดาห์
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              รับข่าวสารและทรัพยากรใหม่ล่าสุดเกี่ยวกับ Digital Transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="อีเมลของคุณ" 
                className="flex-1 bg-white"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                สมัครรับข่าวสار
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-4">
              เราจะไม่ส่งสแปม และคุณสามารถยกเลิกได้ทุกเมื่อ
            </p>
          </div>
        </section>

        {/* Quick Access Tools */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">เครื่องมือด่วน</h2>
              <p className="text-gray-600">เครื่องมือที่ช่วยประเมินและวางแผนการปรับเปลี่ยนองค์กร</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Digital Readiness Assessment</CardTitle>
                  <CardDescription>
                    ประเมินความพร้อมขององค์กรสำหรับการปรับเปลี่ยนดิจิทัล
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    เริ่มประเมิน
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>ROI Calculator</CardTitle>
                  <CardDescription>
                    คำนวณผลตอบแทนการลงทุนในโครงการ AI และระบบอัตโนมัติ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    คำนวณ ROI
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Implementation Checklist</CardTitle>
                  <CardDescription>
                    รายการตรวจสอบสำหรับการดำเนินโครงการเปลี่ยนแปลงดิจิทัล
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    ดาวน์โหลดเช็คลิสต์
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}