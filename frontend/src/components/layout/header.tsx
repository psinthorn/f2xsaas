'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { 
  Menu, 
  X, 
  ArrowRight,
  ChevronDown
} from 'lucide-react'

interface NavItem {
  key: string
  href: string
  children?: NavItem[]
}

export default function Header() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation: NavItem[] = [
    {
      key: 'products',
      href: `/${locale}/products`,
      children: [
        { key: 'ai-platform', href: `/${locale}/products/ai-platform` },
        { key: 'analytics', href: `/${locale}/products/analytics` },
        { key: 'automation', href: `/${locale}/products/automation` },
        { key: 'security', href: `/${locale}/products/security` }
      ]
    },
    {
      key: 'solutions',
      href: `/${locale}/solutions`,
      children: [
        { key: 'enterprise', href: `/${locale}/solutions/enterprise` },
        { key: 'banking', href: `/${locale}/solutions/banking` },
        { key: 'retail', href: `/${locale}/solutions/retail` },
        { key: 'manufacturing', href: `/${locale}/solutions/manufacturing` }
      ]
    },
    { key: 'pricing', href: `/${locale}/pricing` },
    { key: 'resources', href: `/${locale}/resources` },
    { key: 'about', href: `/${locale}/about` }
  ]

  return (
    <nav className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container-mobile md:container-desktop mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">F2</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">F2XSaaS</span>
              <div className="text-xs text-blue-600 font-medium">{t('tagline')}</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.key} 
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {t(item.key)}
                  {item.children && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {t(`${item.key}.${child.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons and Language Switcher */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href={`/${locale}/login`} className="hidden sm:block">
              <Button variant="ghost" className="font-medium">
                {t('signin')}
              </Button>
            </Link>
            <Link href={`/${locale}/register`}>
              <Button variant="gradient" className="shadow-lg font-medium">
                {t('trial')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.key}>
                  <Link 
                    href={item.href}
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t(`${item.key}.${child.key}`)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link href={`/${locale}/login`} className="block w-full mb-2">
                  <Button variant="ghost" className="w-full justify-start font-medium">
                    {t('signin')}
                  </Button>
                </Link>
                <Link href={`/${locale}/register`} className="block w-full">
                  <Button variant="gradient" className="w-full shadow-lg font-medium">
                    {t('trial')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}