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
  title: 'BMI Calculator : Calculate Your Body Mass Index by Find My BMI ',
  description: 'Body Mass Index, BMI is weight(kg) / height(m) squared. 25+ is overweight, healthy is 18.5 to 24.9 . Find My BMI is a free tool that helps you calculate your body mass index (BMI) and provides insights into your BMI value. BMI is a measure of body fat based on height and weight that can be used to assess risk of obesity-related diseases. Use our BMI calculator to learn more about your BMI and what it means for your health.',
  keywords:'body mass index,bmi,bmi calculator,find bmi,calculate BMI,BMI meaning,BMI health risks,health,weight loss,height weight,health insurance,mental health,what is health,weight management,health and fitness,BMI insights,calculator bmi,bmi chart,online BMI calculator,free BMI calculator,find my bmi,calculator,japan',
  creator:'FindMyBMI'
}
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-6621105109470694"/>
      <meta name="msvalidate.01" content="56AAC5F4CCF032F8074CDD189165ADF1" />
      <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      {/* <TrackingCode /> */}
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
 