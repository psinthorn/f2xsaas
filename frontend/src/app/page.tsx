'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  Smartphone,
  Users,
  ChevronRight,
  Play,
  CheckCircle
} from 'lucide-react'

export default function HomePage() {
  const services = [
    {
      title: "Digital Transformation Service",
      description: "Transform your business operations and enhance customer experiences with our cutting-edge digital solutions.",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Artificial Intelligence Solutions", 
      description: "Leverage AI to automate tasks, analyze data, and improve decision-making processes.",
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Data Management and Analytics",
      description: "Manage and analyze your data to gain valuable insights and make informed decisions.",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Technology Implementation",
      description: "Implement the latest technology to improve your business operations and customer experiences.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business from cyber threats and ensure the security of your data and systems.",
      icon: <Shield className="h-8 w-8" />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "IOT and Smart Devices",
      description: "Connect and control your devices to improve efficiency and enhance customer experiences.",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-teal-500 to-teal-600",
    },
  ]

  const features = [
    "AI-Powered Analytics & Insights",
    "Real-time Business Intelligence",
    "Automated Workflow Management", 
    "Advanced Security & Compliance",
    "Multi-platform Integration",
    "24/7 Support & Monitoring"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container-mobile md:container-desktop mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F2</span>
              </div>
              <span className="text-xl font-bold text-gray-900">F2XSaaS</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="gradient" className="shadow-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Your Business Through{" "}
              <span className="text-gradient-f2">Digital Innovation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business operations and enhance customer experiences with our 
              cutting-edge AI-powered digital solutions. F2XSaaS delivers enterprise-grade 
              automation, analytics, and intelligence for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/register">
                <Button size="xl" variant="gradient" className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="xl" variant="outline" className="w-full sm:w-auto group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600">AI-First</div>
                <div className="text-sm text-gray-600">Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of digital transformation services to help your 
              business succeed in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors inline-flex items-center">
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose F2XSaaS?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built for modern enterprises, F2XSaaS combines cutting-edge AI technology 
                with enterprise-grade security and scalability.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/features">
                  <Button size="lg" variant="gradient">
                    Explore All Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-blue-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Brain className="h-12 w-12 text-blue-600 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-mobile md:container-desktop mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using F2XSaaS to automate processes, 
            gain insights, and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="xl" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F2</span>
                </div>
                <span className="text-xl font-bold">F2XSaaS</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering businesses through digital innovation with AI-powered solutions 
                for the modern enterprise.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 F2 Co., Ltd. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="/features" className="block hover:text-white transition-colors">Features</Link>
                <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
                <Link href="/integrations" className="block hover:text-white transition-colors">Integrations</Link>
                <Link href="/api" className="block hover:text-white transition-colors">API</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="/about" className="block hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
                <Link href="/careers" className="block hover:text-white transition-colors">Careers</Link>
                <Link href="/privacy" className="block hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}