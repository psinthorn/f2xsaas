import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const messages = await getMessages({ locale });
  
  // Type-safe way to access nested messages
  const meta = messages.meta as any;
  
  return {
    title: meta?.title || 'F2XSaaS - AI-Powered Digital Transformation Platform',
    description: meta?.description || 'Empowering your business through digital innovation with advanced AI solutions.',
    keywords: [
      'AI',
      'SaaS',
      'Digital Transformation',
      'Automation',
      'Analytics',
      'F2',
      'Business Intelligence',
      'Machine Learning'
    ],
    authors: [{ name: 'F2 Co., Ltd.' }],
    creator: 'F2 Co., Ltd.',
    publisher: 'F2 Co., Ltd.',
    openGraph: {
      type: 'website',
      locale: locale === 'th' ? 'th_TH' : locale === 'zh' ? 'zh_CN' : 'en_US',
      url: 'https://f2.co.th',
      title: meta?.title || 'F2XSaaS - AI-Powered Digital Transformation Platform',
      description: meta?.description || 'Empowering your business through digital innovation.',
      siteName: 'F2XSaaS',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'F2XSaaS Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta?.title || 'F2XSaaS - AI-Powered Digital Transformation Platform',
      description: meta?.description || 'Empowering your business through digital innovation.',
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange={false}
          >
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">
                {children}
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}