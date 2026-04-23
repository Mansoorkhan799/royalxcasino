import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Royal X Casino - Pakistan Real Money Gaming',
  description: 'About Royal X Casino: 200+ games, zero wagering, instant withdrawals. Pakistan\'s premier real money gaming platform.',
  keywords: ['About Royal X Casino', 'Royal X Casino Pakistan', 'real money gaming', 'casino app Pakistan'],
  alternates: { canonical: 'https://royalexcasino.com.pk/royal-x-casino-about-us' },
  openGraph: {
    title: 'About Royal X Casino - Pakistan Real Money Gaming',
    description: "About Royal X Casino: Pakistan's premier real money gaming platform with 200+ games, zero wagering, and instant withdrawals via JazzCash & EasyPaisa.",
    url: 'https://royalexcasino.com.pk/royal-x-casino-about-us',
    siteName: 'Royal X Casino',
    type: 'website',
    images: [{ url: 'https://royalexcasino.com.pk/royal-x-casino.webp', width: 1200, height: 1200, alt: 'About Royal X Casino' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Royal X Casino - Pakistan Real Money Gaming',
    description: "Pakistan's premier real money gaming platform. 200+ games, zero wagering, instant withdrawals.",
    images: ['https://royalexcasino.com.pk/royal-x-casino.webp'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumb items={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/royal-x-casino-about-us' },
        ]} />
      </div>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Royal X Casino</h1>
          </div>
          
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <Link href="/" className="block shrink-0">
                  <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-lg overflow-hidden bg-[#0A1029] border border-gray-700">
                    <Image 
                      src="/royal-x-casino-logo.webp" 
                      alt="Royal X Casino Logo" 
                      width={280}
                      height={280}
                      sizes="(max-width: 768px) 200px, 280px"
                      className="object-contain p-4 w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="order-1 md:order-2 min-w-0">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Welcome to <Link href="/" className="text-accent hover:underline font-semibold">royalexcasino.com.pk</Link>, the official source for <Link href="/" className="text-accent hover:underline font-semibold">Royal X Casino</Link>. Royal X Casino is one of Pakistan&apos;s leading real money gaming platforms, with 200+ games, zero wagering, and instant withdrawals. <Link href="/royal-x-casino-download" className="text-accent hover:underline font-semibold">Download Royal X Casino</Link> to play Teen Patti, Slots, Fishing and more with JazzCash & EasyPaisa.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hundreds of people are playing these wonderful games and earning a handsome amount on a daily or weekly basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Aim!</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Our aim is to provide the latest information and earning tips about Royal X Casino. For any type of information or query, you can visit our <Link href="/royal-x-casino-contact-us" className="underline hover:text-orange-100 font-semibold">contact us page</Link>.
            </p>
          </div>
          
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We&apos;re here to help! Contact our team for any information or queries about Royal X Casino.
            </p>
            <Link 
              href="/royal-x-casino-contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Royal X Casino",
              "url": "https://royalexcasino.com.pk",
              "logo": "https://royalexcasino.com.pk/royal-x-casino-logo.webp",
              "description": "Royal X Casino is Pakistan's premier real money gaming platform with 200+ games, zero wagering, and instant withdrawals.",
              "foundingLocation": { "@type": "Country", "name": "Pakistan" }
            },
            "about": {
              "@type": "Thing",
              "name": "Casino Gaming Platform",
              "description": "Real money gaming platform with 200+ games, zero wagering, serving Pakistan"
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://royalexcasino.com.pk/royal-x-casino-about-us" }
          })
        }}
      />
    </div>
  );
}
