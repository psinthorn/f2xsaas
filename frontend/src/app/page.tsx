'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/header'
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
  CheckCircle,
  Star,
  Quote,
  TrendingUp,
  Award,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Settings,
  Lock,
  Headphones,
  MousePointer,
  X
} from 'lucide-react'

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

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

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CTO, TechCorp Thailand",
      company: "TechCorp",
      content: "F2XSaaS transformed our digital infrastructure completely. We've seen a 300% increase in operational efficiency and our customers love the new automated experiences.",
      rating: 5,
      avatar: "/images/avatars/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez", 
      position: "CEO, InnovateLabs",
      company: "InnovateLabs",
      content: "The AI-powered analytics gave us insights we never had before. Revenue increased by 45% in just 6 months after implementation.",
      rating: 5,
      avatar: "/images/avatars/michael-rodriguez.jpg"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Head of Digital Transformation, MedTech Solutions",
      company: "MedTech Solutions", 
      content: "F2's cybersecurity solutions protected us from 3 major threats this year. Their proactive monitoring is exceptional.",
      rating: 5,
      avatar: "/images/avatars/priya-sharma.jpg"
    }
  ]

  const caseStudies = [
    {
      title: "Banking Digital Transformation",
      company: "Bangkok Bank",
      industry: "Financial Services",
      results: ["70% reduction in processing time", "99.9% uptime achieved", "250% increase in digital transactions"],
      image: "/images/case-studies/banking.jpg",
      description: "Complete digital transformation of core banking operations with AI-powered fraud detection and customer service automation."
    },
    {
      title: "Retail AI Implementation",
      company: "Central Group",
      industry: "Retail & E-commerce", 
      results: ["45% increase in conversion rate", "60% reduction in inventory costs", "Real-time personalization"],
      image: "/images/case-studies/retail.jpg",
      description: "AI-driven customer experience platform with predictive analytics and automated inventory management."
    },
    {
      title: "Manufacturing IoT Solution",
      company: "SCG Group",
      industry: "Manufacturing",
      results: ["30% reduction in downtime", "25% energy savings", "Predictive maintenance implemented"],
      image: "/images/case-studies/manufacturing.jpg", 
      description: "IoT-enabled smart manufacturing with AI-powered predictive maintenance and real-time monitoring."
    }
  ]

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: <Users className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="h-6 w-6" /> },
    { number: "AI-First", label: "Platform Architecture", icon: <Brain className="h-6 w-6" /> },
    { number: "150%", label: "Average ROI", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "<2min", label: "Response Time", icon: <Clock className="h-6 w-6" /> }
  ]

  const companyLogos = [
    { name: "CP Group", logo: "/images/clients/cp-group.svg" },
    { name: "PTT", logo: "/images/clients/ptt.svg" },
    { name: "Bangkok Bank", logo: "/images/clients/bangkok-bank.svg" },
    { name: "Central Group", logo: "/images/clients/central.svg" },
    { name: "SCG", logo: "/images/clients/scg.svg" },
    { name: "True Corporation", logo: "/images/clients/true.svg" }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry Leading",
      description: "Recognized as Thailand's #1 Digital Transformation Platform by Tech Excellence Awards 2024"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Proven Results", 
      description: "Average 150% ROI within 12 months across 500+ successful enterprise implementations"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "Cutting-edge AI research lab with 50+ patents in machine learning and automation"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "ISO 27001, SOC 2 Type II certified with military-grade encryption and compliance"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative container-mobile md:container-desktop mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="mr-2 h-4 w-4" />
                Thailand's #1 AI Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Your Business Through{" "}
                <span className="text-gradient-f2">Digital Innovation</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business operations and enhance customer experiences with our 
                cutting-edge AI-powered digital solutions. F2XSaaS delivers enterprise-grade 
                automation, analytics, and intelligence for modern businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Link href="/register">
                  <Button size="xl" variant="gradient" className="w-full sm:w-auto shadow-lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="w-full sm:w-auto group border-2"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo (2:30)
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Free 14-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  No credit card required
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500 ml-4">F2XSaaS Dashboard</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">AI Processing Active</span>
                    </div>
                    <span className="text-sm text-blue-600 font-semibold">+247% efficiency</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">₿1.2M</div>
                      <div className="text-sm text-gray-600">Revenue Processed</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">98.9%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                  </div>
                  
                  <div className="h-24 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
                    <Brain className="h-12 w-12 text-blue-600 animate-bounce" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-100 text-yellow-600 p-3 rounded-full shadow-lg animate-bounce">
                <Zap className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-100 text-green-600 p-3 rounded-full shadow-lg animate-pulse">
                <Shield className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-lg mb-3 group-hover:bg-blue-100 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-mobile md:container-desktop mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">Trusted by leading companies across Thailand</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <div className="text-gray-400 font-bold text-lg border border-gray-300 px-4 py-2 rounded-lg">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Settings className="mr-2 h-4 w-4" />
              Enterprise Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Transformation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From AI-powered automation to cybersecurity, we provide end-to-end solutions 
              that drive innovation and growth across every aspect of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-200"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors inline-flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="text-sm text-gray-400">
                    Enterprise Ready
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-2">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Leading Companies Choose F2XSaaS
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just provide technology—we deliver transformational results that matter to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-blue-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Target className="mr-2 h-4 w-4" />
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how leading Thai enterprises achieved breakthrough results with F2XSaaS solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🏢</div>
                    <div className="text-sm text-gray-600">{study.industry}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{study.company}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center text-sm">
                      Read Full Case Study
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container-mobile md:container-desktop mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it—hear from the leaders who are transforming their industries with F2XSaaS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-mobile md:container-desktop mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="mr-2 h-4 w-4" />
                Limited Time: 50% Off Enterprise Plans
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join 500+ companies already using F2XSaaS to automate processes, 
                gain AI-powered insights, and accelerate growth by 150% on average.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="/register">
                  <Button size="xl" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto shadow-xl">
                    Start Free Trial - 14 Days
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto border-2">
                    Schedule Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-blue-100">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Setup in under 10 minutes
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">Start Your Transformation Today</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-medium">Free 14-Day Trial</span>
                    </div>
                    <span className="text-green-300 font-semibold">$0</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-medium">Dedicated Support Team</span>
                    </div>
                    <span className="text-blue-300 font-semibold">24/7</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-medium">AI-Powered Insights</span>
                    </div>
                    <span className="text-purple-300 font-semibold">Unlimited</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                  <div className="flex items-center justify-center">
                    <Award className="h-5 w-5 text-green-300 mr-2" />
                    <span className="text-white text-sm font-medium">30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">F2XSaaS Platform Demo</h3>
                <p className="text-gray-600 mb-6">See how leading companies transform their operations with AI</p>
                
                {/* Placeholder for actual video */}
                <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
                  <div className="text-left space-y-3">
                    <div className="h-3 bg-blue-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-3 bg-purple-200 rounded animate-pulse w-1/2"></div>
                    <div className="mt-4 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded flex items-center justify-center">
                      <Brain className="h-8 w-8 text-blue-600 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="border-t border-gray-800">
          <div className="container-mobile md:container-desktop mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">F2</span>
                  </div>
                  <span className="text-2xl font-bold">F2XSaaS</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                  Empowering businesses across Thailand and Southeast Asia through digital innovation 
                  with enterprise-grade AI-powered solutions for the modern economy.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <Globe className="h-4 w-4 mr-3" />
                    <span className="text-sm">www.f2.co.th</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Headphones className="h-4 w-4 mr-3" />
                    <span className="text-sm">24/7 Enterprise Support</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Award className="h-4 w-4 mr-3" />
                    <span className="text-sm">ISO 27001 & SOC 2 Certified</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-white">Products</h4>
                <div className="space-y-3 text-gray-400">
                  <Link href="/ai-platform" className="block hover:text-white transition-colors">AI Platform</Link>
                  <Link href="/analytics" className="block hover:text-white transition-colors">Business Analytics</Link>
                  <Link href="/automation" className="block hover:text-white transition-colors">Process Automation</Link>
                  <Link href="/security" className="block hover:text-white transition-colors">Cybersecurity</Link>
                  <Link href="/integrations" className="block hover:text-white transition-colors">Integrations</Link>
                  <Link href="/api" className="block hover:text-white transition-colors">Developer API</Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-white">Solutions</h4>
                <div className="space-y-3 text-gray-400">
                  <Link href="/enterprise" className="block hover:text-white transition-colors">Enterprise</Link>
                  <Link href="/banking" className="block hover:text-white transition-colors">Banking & Finance</Link>
                  <Link href="/retail" className="block hover:text-white transition-colors">Retail & E-commerce</Link>
                  <Link href="/manufacturing" className="block hover:text-white transition-colors">Manufacturing</Link>
                  <Link href="/healthcare" className="block hover:text-white transition-colors">Healthcare</Link>
                  <Link href="/government" className="block hover:text-white transition-colors">Government</Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-white">Company</h4>
                <div className="space-y-3 text-gray-400">
                  <Link href="/about" className="block hover:text-white transition-colors">About F2</Link>
                  <Link href="/careers" className="block hover:text-white transition-colors">Careers</Link>
                  <Link href="/news" className="block hover:text-white transition-colors">News & Press</Link>
                  <Link href="/events" className="block hover:text-white transition-colors">Events</Link>
                  <Link href="/partners" className="block hover:text-white transition-colors">Partners</Link>
                  <Link href="/contact" className="block hover:text-white transition-colors">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800">
            <div className="container-mobile md:container-desktop mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-gray-500 mb-4 md:mb-0">
                  © 2025 F2 Co., Ltd. All rights reserved. | Thailand's Leading Digital Transformation Platform
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                  <Link href="/security" className="hover:text-white transition-colors">Security</Link>
                  <Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}