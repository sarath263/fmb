'use client'

import { useEffect,lazy } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
const PageIllustration = lazy(() => import('@/components/page-illustration'));
const Footer = lazy(() => import('@/components/ui/footer'));

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">

        <PageIllustration />

        {children}

      </main>

      <Footer />
    </>
  )
}
