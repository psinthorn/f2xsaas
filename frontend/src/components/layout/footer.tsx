'use client';

import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  Youtube,
  Instagram
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'ผลิตภัณฑ์',
      links: [
        { name: 'AI Platform', href: '/products/ai-platform' },
        { name: 'Business Analytics', href: '/products/analytics' },
        { name: 'Process Automation', href: '/products/automation' },
        { name: 'Cybersecurity', href: '/products/security' }
      ]
    },
    {
      title: 'โซลูชัน',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Banking & Finance', href: '/solutions/banking' },
        { name: 'Retail & E-commerce', href: '/solutions/retail' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' }
      ]
    },
    {
      title: 'ทรัพยากร',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api-docs' },
        { name: 'Case Studies', href: '/resources#case-studies' },
        { name: 'Webinars', href: '/resources#webinars' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'บริษัท',
      links: [
        { name: 'เกี่ยวกับเรา', href: '/about' },
        { name: 'ทีมงาน', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'ข่าวสาร', href: '/news' },
        { name: 'ติดต่อเรา', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/f2saas' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/f2saas' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/f2saas' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/f2saas' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/f2saas' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/f2saas' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F2</span>
                </div>
                <span className="text-2xl font-bold">XSaaS</span>
              </Link>
              
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                แพลตฟอร์ม AI ครบวงจรสำหรับการปรับเปลี่ยนดิจิทัลที่จะเปลี่ยนวิธีการทำธุรกิจของคุณ
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>02-123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@f2.co.th</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-3">ติดตามเรา</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">รับข่าวสารล่าสุด</h4>
              <p className="text-gray-300">
                อัปเดตผลิตภัณฑ์ใหม่ และข้อมูลเชิงลึกด้าน Digital Transformation
              </p>
            </div>
            <div className="flex gap-3 max-w-md w-full lg:w-auto">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                สมัครรับข่าวสาร
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} F2 Co., Ltd. สงวนลิขสิทธิ์
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                ข้อกำหนดการใช้งาน
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                นโยบายคุกกี้
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-blue-400 transition-colors">
                ความปลอดภัย
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}