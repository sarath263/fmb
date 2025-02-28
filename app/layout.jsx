import './css/style.css'
import { lazy } from 'react'
import { Inter, Architects_Daughter } from 'next/font/google'

const Header = lazy(() => import('@/components/ui/header'));
import TrackingCode from './lib/ga';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'BMI Calculator - Calculate Your Body Mass Index | Find My BMI',
  description: 'BMI calculator. Calculate your BMI with our free tool. Learn your body mass index and understand its impact on your health, check obesity related risks.',
  keywords: 'BMI calculator, body mass index, calculate BMI, health assessment, weight management, BMI health risks, free BMI tool, online BMI calculator, health and fitness, obesity risk, height weight ratio, BMI insights, Find My BMI',
  creator: 'Find My BMI'
}
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-6621105109470694"/>
      <meta name="msvalidate.01" content="56AAC5F4CCF032F8074CDD189165ADF1" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      <link rel="canonical" href="https://findmybmi.in" />
      <link rel="alternate" href="https://findmybmi.in" hreflang="en" />
      <meta property="og:title" content="BMI Calculator - Find Your Body Mass Index" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://findmybmi.in/images/logo.png" />
      <meta property="og:url" content="https://findmybmi.in" />
      <meta property="og:description" content="Calculate your BMI with our free tool and understand its impact on your health. Learn more about body mass index and related risks." />

      
      <TrackingCode />
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
 