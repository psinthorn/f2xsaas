'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Activity,
  Brain,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Bell,
  Settings,
  MessageCircle,
  PieChart,
  LineChart,
  BarChart
} from 'lucide-react';

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const stats = [
    {
      title: 'รายได้รวม',
      value: '฿2,847,500',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'ลูกค้าใหม่',
      value: '1,284',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'อัตราการแปลง',
      value: '24.8%',
      change: '+3.1%',
      trend: 'up',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'ประสิทธิภาพ AI',
      value: '94.2%',
      change: '-2.1%',
      trend: 'down',
      icon: Brain,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const aiServices = [
    {
      name: 'Customer Analytics',
      status: 'active',
      usage: '85%',
      insights: '1,247 ข้อมูลเชิงลึก',
      trend: '+15.2%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Process Automation',
      status: 'active',
      usage: '92%',
      insights: '342 กระบวนการอัตโนมัติ',
      trend: '+28.7%',
      icon: Zap,
      color: 'bg-yellow-500'
    },
    {
      name: 'Predictive Analytics',
      status: 'active',
      usage: '78%',
      insights: '89 การทำนาย',
      trend: '+9.4%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      name: 'Security Monitoring',
      status: 'active',
      usage: '96%',
      insights: '0 ภัยคุกคาม',
      trend: '0%',
      icon: Shield,
      color: 'bg-red-500'
    }
  ];

  const recentActivities = [
    {
      type: 'ai_insight',
      title: 'AI ค้นพบแนวโน้มการซื้อใหม่',
      description: 'ลูกค้าในกลุ่ม Premium มีแนวโน้มซื้อสินค้าเพิ่มขึ้น 23%',
      time: '5 นาทีที่แล้ว',
      priority: 'high'
    },
    {
      type: 'automation',
      title: 'Process Automation สำเร็จ',
      description: 'ระบบอนุมัติใบสั่งซื้อแบบอัตโนมัติทำงานเสร็จ 145 รายการ',
      time: '15 นาทีที่แล้ว',
      priority: 'medium'
    },
    {
      type: 'security',
      title: 'Security Scan เสร็จสิ้น',
      description: 'ตรวจสอบระบบรักษาความปลอดภัยเสร็จสิ้น - ไม่พบความเสี่ยง',
      time: '1 ชั่วโมงที่แล้ว',
      priority: 'low'
    },
    {
      type: 'alert',
      title: 'การใช้งาน API เกินขีดจำกัด',
      description: 'API calls ใกล้ถึงขีดจำกัดรายเดือน (85% ของ 100,000 calls)',
      time: '2 ชั่วโมงที่แล้ว',
      priority: 'high'
    }
  ];

  const quickActions = [
    {
      title: 'เริ่มการวิเคราะห์ใหม่',
      description: 'สร้างรายงานวิเคราะห์ข้อมูลแบบ Real-time',
      icon: BarChart3,
      action: 'start_analysis'
    },
    {
      title: 'ตั้งค่า Automation',
      description: 'สร้างกระบวนการทำงานอัตโนมัติใหม่',
      icon: Zap,
      action: 'setup_automation'
    },
    {
      title: 'AI Chat Consultation',
      description: 'ปรึกษาผู้เชี่ยวชาญ AI เรื่อง Digital Transformation',
      icon: MessageCircle,
      action: 'start_chat'
    },
    {
      title: 'ดาวน์โหลดรายงาน',
      description: 'Export ข้อมูลและรายงานทั้งหมด',
      icon: Download,
      action: 'download_report'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'สูง';
      case 'medium': return 'ปานกลาง';
      case 'low': return 'ต่ำ';
      default: return 'ปกติ';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Dashboard Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">แดชบอร์ด</h1>
                <p className="text-gray-600">ภาพรวมการดำเนินงานและข้อมูลเชิงลึกจาก AI</p>
              </div>
              <div className="flex items-center gap-3">
                <select 
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="7d">7 วันที่ผ่านมา</option>
                  <option value="30d">30 วันที่ผ่านมา</option>
                  <option value="90d">90 วันที่ผ่านมา</option>
                </select>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  รีเฟรช
                </Button>
                <Button size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        {stat.trend === 'up' ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm font-medium ml-1 ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* AI Services Status */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">AI Services Overview</CardTitle>
                      <CardDescription>สถานะและประสิทธิภาพของบริการ AI</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {aiServices.map((service, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900">{service.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {service.status === 'active' ? 'ทำงาน' : 'หยุด'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>การใช้งาน: {service.usage}</span>
                            <span>{service.insights}</span>
                            <span className="text-green-600">{service.trend}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">การดำเนินการด่วน</CardTitle>
                  <CardDescription>ฟีเจอร์ที่ใช้บ่อยและการดำเนินการที่แนะนำ</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quickActions.map((action, index) => (
                      <Button 
                        key={index}
                        variant="ghost" 
                        className="w-full h-auto p-4 text-left justify-start"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <action.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{action.title}</div>
                            <div className="text-xs text-gray-600 mt-1">{action.description}</div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activities */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">กิจกรรมล่าสุด</CardTitle>
                  <CardDescription>อัปเดตและการแจ้งเตือนจากระบบ AI</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    กรอง
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bell className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        <Badge className={`text-xs ${getPriorityColor(activity.priority)}`}>
                          {getPriorityText(activity.priority)}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Analytics Charts Preview */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">การเติบโตของรายได้</CardTitle>
                <CardDescription>เปรียบเทียบรายได้ย้อนหลัง 6 เดือน</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-600">แชร์ตการเติบโตของรายได้</p>
                    <p className="text-sm text-gray-500 mt-1">เทรนด์เพิ่มขึ้น 12.5% ในเดือนนี้</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">การกระจายของลูกค้า</CardTitle>
                <CardDescription>แบ่งตามประเภทและระดับการใช้งาน</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <p className="text-gray-600">การกระจายของลูกค้า</p>
                    <p className="text-sm text-gray-500 mt-1">Enterprise 45% • SME 35% • Startup 20%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}