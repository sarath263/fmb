"use client";
import Script from "next/script";


function TrackingCode() {
  return (
   <>
  {/* Global site tag (gtag.js) - Google Analytics */}
  <Script defer src="https://www.googletagmanager.com/gtag/js?id=G-H03GY7CWKB" ></Script>
  <Script defer id="google-analytics" strategy="afterInteractive">
    {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', 'G-H03GY7CWKB');
    `}
  </Script>
  
  
  
  
  {/* end Zoho marketing automation */}
</>
 );
}

export default TrackingCode;