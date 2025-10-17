import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'F2XSaaS - AI-Powered Digital Transformation Platform',
  description: 'Empowering your business through digital innovation with advanced AI solutions, automation, and analytics for modern enterprises.',
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
  metadataBase: new URL('https://f2.co.th'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://f2.co.th',
    title: 'F2XSaaS - AI-Powered Digital Transformation Platform',
    description: 'Empowering your business through digital innovation with advanced AI solutions.',
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
    title: 'F2XSaaS - AI-Powered Digital Transformation Platform',
    description: 'Empowering your business through digital innovation with advanced AI solutions.',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body 
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          'safe-area-top safe-area-bottom',
          inter.variable
        )}
      >
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
      </body>
    </html>
  )
}