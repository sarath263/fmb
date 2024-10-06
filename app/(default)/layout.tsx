'use client'

import { useEffect,lazy } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
const PageIllustration = lazy(() => import('@/components/page-illustration'));
const Footer = lazy(() => import('@/components/ui/footer'));
import {Root} from "../lib/gState";
let nState={
  bmi:"",
  isValidBmi:false,
  category:false
}

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
  },[])

  return (

    <>
      <Root initial={nState} />
      <main className="grow">

        <PageIllustration />

        {children}

      </main>

      <Footer />
    </>
  )
}
