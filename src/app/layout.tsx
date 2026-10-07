import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://royalexcasino.com.pk'),
  title: {
    default: "Royal X Casino APK Pakistan | Download 2026 | Real Money",
    // Page titles already carry the brand; no suffix so titles stay under 60 characters.
    template: "%s",
  },
  description: "Royal X Casino APK for Android: 200+ Teen Patti, slot and fishing games, EasyPaisa and JazzCash payments, bonuses, VIP levels and an honest safety review.",
  authors: [{ name: "Royal X Casino" }],
  creator: "Royal X Casino",
  publisher: "Royal X Casino",
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
    icon: [
      { url: '/royal-x-casino-logo.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/royal-x-casino-logo.webp', type: 'image/webp', sizes: '32x32 48x48' },
      { url: '/royal-x-casino.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/royal-x-casino-logo.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/royal-x-casino-logo.webp', type: 'image/webp' }
    ]
  },
  alternates: {
    canonical: "https://royalexcasino.com.pk",
  },
  openGraph: {
    title: "Royal X Casino APK Pakistan | Download 2026",
    description: "Download the Royal X Casino APK, see every bonus and payment method, and read an honest safety review before you play.",
    url: "https://royalexcasino.com.pk",
    siteName: "Royal X Casino",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://royalexcasino.com.pk/royal-x-casino.webp",
        width: 1200,
        height: 1200,
        alt: "Royal X Casino app icon: gold logo with a casino chip on a golden casino hall background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal X Casino APK Pakistan | Download 2026",
    description: "Download the Royal X Casino APK, see every bonus and payment method, and read an honest safety review before you play.",
    images: [
      {
        url: "https://royalexcasino.com.pk/royal-x-casino.webp",
        width: 1200,
        height: 1200,
        alt: "Royal X Casino app icon: gold logo with a casino chip on a golden casino hall background",
      }
    ],
  },
  applicationName: "Royal X Casino",
  category: "Gaming",
  classification: "Casino Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/royal-x-casino-logo.webp" type="image/webp" sizes="32x32 48x48 192x192" />
        <link rel="shortcut icon" href="/royal-x-casino-logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/royal-x-casino-logo.webp" sizes="180x180" />
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
      </body>
    </html>
  );
}
