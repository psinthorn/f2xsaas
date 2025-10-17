'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/header'
import { 
  CheckCircle, 
  X, 
  ArrowRight, 
  Star,
  Users,
  Building,
  Zap,
  Shield,
  HeadphonesIcon,
  Clock,
  Globe,
  Brain,
  BarChart3,
  Database,
  Smartphone,
  Award,
  TrendingUp,
  Lightbulb,
  Settings,
  Lock,
  Phone,
  Mail,
  Calendar,
  ChevronRight,
  Sparkles
} from 'lucide-react'

type BillingCycle = 'monthly' | 'annually'

interface PricingTier {
  name: string
  price: {
    monthly: number
    annually: number
  }
  description: string
  features: string[]
  limitations?: string[]
  popular?: boolean
  enterprise?: boolean
  cta: string
  badge?: string
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: { monthly: 99, annually: 79 },
      description: 'Perfect for small businesses starting their digital transformation journey',
      features: [
        'Up to 5 team members',
        'Basic AI analytics dashboard',
        '10,000 API calls per month',
        'Email support (48h response)',
        'Standard security features',
        'Mobile app access',
        '5GB cloud storage',
        'Basic automation workflows',
        'Community forum access'
      ],
      limitations: [
        'Limited integrations (5 max)',
        'Basic reporting only',
        'No custom branding'
      ],
      cta: 'Start Free Trial',
      badge: 'Most Popular'
    },
    {
      name: 'Professional',
      price: { monthly: 299, annually: 239 },
      description: 'Advanced features for growing businesses ready to scale operations',
      features: [
        'Up to 25 team members',
        'Advanced AI analytics & insights',
        '100,000 API calls per month',
        'Priority support (24h response)',
        'Advanced security & compliance',
        'Custom mobile app branding',
        '50GB cloud storage',
        'Advanced automation workflows',
        'Unlimited integrations',
        'Custom reporting & dashboards',
        'A/B testing capabilities',
        'Multi-language support',
        'Advanced user permissions'
      ],
      popular: true,
      cta: 'Start Free Trial',
      badge: 'Recommended'
    },
    {
      name: 'Enterprise',
      price: { monthly: 999, annually: 799 },
      description: 'Complete digital transformation solution for large organizations',
      features: [
        'Unlimited team members',
        'Full AI platform access',
        'Unlimited API calls',
        'Dedicated account manager',
        'Enterprise-grade security',
        'White-label solutions',
        'Unlimited cloud storage',
        'Custom automation & workflows',
        'All integrations included',
        'Custom reports & analytics',
        'Advanced compliance (SOC 2, ISO)',
        'SSO & SAML integration',
        'Custom AI model training',
        'On-premise deployment option',
        '24/7 phone support'
      ],
      enterprise: true,
      cta: 'Contact Sales',
      badge: 'Enterprise'
    }
  ]

  const addOnServices = [
    {
      name: 'Professional Services',
      description: 'Dedicated implementation and consulting',
      price: 'Custom',
      icon: <Users className="h-6 w-6" />,
      features: [
        'Dedicated implementation team',
        'Custom workflow design',
        'Training & onboarding',
        'Change management support'
      ]
    },
    {
      name: 'Advanced AI Training',
      description: 'Custom AI model development',
      price: '$2,500/month',
      icon: <Brain className="h-6 w-6" />,
      features: [
        'Custom AI model development',
        'Industry-specific training',
        'Performance optimization',
        'Ongoing model updates'
      ]
    },
    {
      name: 'Premium Support',
      description: '24/7 dedicated support team',
      price: '$500/month',
      icon: <HeadphonesIcon className="h-6 w-6" />,
      features: [
        '24/7 phone & chat support',
        'Dedicated support engineer',
        'Priority issue resolution',
        'Monthly health checks'
      ]
    }
  ]

  const faqs = [
    {
      question: 'Can I switch plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate your billing accordingly.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and for Enterprise clients, we can arrange custom payment terms including invoicing.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for Starter and Professional plans. Enterprise plans include complimentary setup and onboarding with our professional services team.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You can export all your data at any time. After cancellation, we provide a 30-day grace period to export your data before secure deletion.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom enterprise pricing for organizations with specific requirements. Contact our sales team for a personalized quote.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required, and you get full access to all features during the trial period.'
    }
  ]

  const calculateSavings = (monthly: number, annually: number) => {
    const monthlyCost = monthly * 12
    const annualCost = annually * 12
    const savings = monthlyCost - annualCost
    const percentage = Math.round((savings / monthlyCost) * 100)
    return { amount: savings, percentage }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              Transparent Pricing • No Hidden Fees
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Choose the Perfect Plan for Your{' '}
              <span className="text-gradient-f2">Digital Transformation</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              From startups to Fortune 500 companies, F2XSaaS scales with your business. 
              Start your 14-day free trial today and experience the power of AI-driven digital transformation.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-16">
              <div className="bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                <div className="flex items-center">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                      billingCycle === 'monthly'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('annually')}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all relative ${
                      billingCycle === 'annually'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Annual
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pricingTiers.map((tier, index) => {
              const savings = calculateSavings(tier.price.monthly, tier.price.annually)
              const currentPrice = billingCycle === 'monthly' ? tier.price.monthly : tier.price.annually
              
              return (
                <div 
                  key={tier.name}
                  className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    tier.popular 
                      ? 'border-blue-500 ring-4 ring-blue-100' 
                      : 'border-gray-200 hover:border-blue-200'
                  }`}
                >
                  {tier.badge && (
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg ${
                      tier.popular ? 'bg-blue-600' : tier.enterprise ? 'bg-purple-600' : 'bg-green-600'
                    }`}>
                      {tier.badge}
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <p className="text-gray-600 text-sm mb-6">{tier.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-bold text-gray-900">${currentPrice.toLocaleString()}</span>
                          <span className="text-gray-500 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                        </div>
                        {billingCycle === 'annually' && (
                          <div className="text-green-600 text-sm font-medium mt-2">
                            Save ${savings.amount.toLocaleString()} ({savings.percentage}%) annually
                          </div>
                        )}
                      </div>

                      <Link href={tier.enterprise ? '/contact' : '/register'}>
                        <Button 
                          className={`w-full mb-6 ${
                            tier.popular 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                              : 'bg-gray-900 hover:bg-gray-800 text-white'
                          }`}
                          size="lg"
                        >
                          {tier.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Everything included:</h4>
                        <ul className="space-y-3">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {tier.limitations && (
                        <div className="pt-4 border-t border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                          <ul className="space-y-2">
                            {tier.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="flex items-start">
                                <X className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500 text-sm">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Features Across All Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See exactly what's included in each plan to make the best decision for your business needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center p-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center p-6 font-semibold text-gray-900 bg-blue-50">Professional</th>
                  <th className="text-center p-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Team Members', starter: '5', pro: '25', enterprise: 'Unlimited' },
                  { feature: 'API Calls/Month', starter: '10K', pro: '100K', enterprise: 'Unlimited' },
                  { feature: 'Cloud Storage', starter: '5GB', pro: '50GB', enterprise: 'Unlimited' },
                  { feature: 'Support Response', starter: '48 hours', pro: '24 hours', enterprise: 'Instant' },
                  { feature: 'Integrations', starter: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Custom Branding', starter: false, pro: true, enterprise: true },
                  { feature: 'Advanced Analytics', starter: false, pro: true, enterprise: true },
                  { feature: 'SSO Integration', starter: false, pro: false, enterprise: true },
                  { feature: 'White-label Solution', starter: false, pro: false, enterprise: true },
                  { feature: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-6 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-6 text-center bg-blue-50">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700 font-medium">{row.pro}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services & Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your F2XSaaS experience with professional services, advanced AI capabilities, and premium support options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-blue-600 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We have answers. If you can't find what you're looking for, contact our sales team.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Sales Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies already using F2XSaaS. Start your free trial today and see the difference AI can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="xl" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 border-2">
                Schedule Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-8 text-blue-100 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              30-day money back
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-2">
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
        </div>
      </footer>
    </div>
  )
}