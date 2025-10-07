import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Shittu | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Node.js, Express, React.js, and MongoDB. Passionate about building secure, scalable, and high-performing web applications that deliver seamless user experiences.",
  generator: "Next.js",
  verification: {
    google: "google8fcb5266a476b8ec", // ✅ your actual Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ✅ Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="google8fcb5266a476b8ec"
        />

        {/* 📊 Google Analytics (optional — keep if you use it) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DLJBBKEE8V"
          strategy="afterInteractive"
        />
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
  );
}
