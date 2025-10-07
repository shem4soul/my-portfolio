import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arowosere Abdulkhabeer | Backend Developer",
  description:
    "Backend developer specializing in Node.js, Express.js, and .NET, with expertise in API development, payment gateway integration, and database optimization.",
  generator: "v0.dev",
  verification: {
    google: "googled511cf04454654b3",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="googled511cf04454654b3" />

        {/* Google Analytics (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DLJBBKEE8V" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DLJBBKEE8V');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
