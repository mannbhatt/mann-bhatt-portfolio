import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: {
    default: 'Mann Bhatt | Creative Technologist & Software Engineer',
    template: '%s | Mann Bhatt',
  },
  description: 'Portfolio of Mann Bhatt, a full-stack developer and IT engineering student specializing in React, Next.js, UI/UX design, and Machine Learning.',
  keywords: ['Mann Bhatt', 'Frontend Developer', 'Software Engineer', 'React Developer', 'Next.js', 'Machine Learning', 'Full Stack Developer', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Mann Bhatt', url: 'https://mannbhatt.com' }], // Replace with actual URL if known
  creator: 'Mann Bhatt',
  metadataBase: new URL('https://mannbhatt.com'), // Replace with actual deployed URL
  openGraph: {
    title: 'Mann Bhatt | Creative Technologist',
    description: 'Explore my projects, skills, and experience in web development, AI, and mobile apps.',
    url: 'https://mannbhatt.com',
    siteName: 'Mann Bhatt Portfolio',
    images: [
      {
        url: '/mann.jpg',
        width: 1200,
        height: 630,
        alt: 'Mann Bhatt - Creative Technologist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mann Bhatt | Creative Technologist',
    description: 'Portfolio of Mann Bhatt, a full-stack developer and IT engineering student.',
    creator: '@Mann_Bhatt88',
    images: ['/mann.jpg'],
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
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
