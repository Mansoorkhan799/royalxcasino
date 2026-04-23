import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Royal X Casino for iOS | Download for iPhone & iPad 2026",
  description: "Download Royal X Casino for iOS (iPhone & iPad). Step-by-step guide to install on iOS 12+ using configuration profile. Free download 2026.",
  keywords: ["Royal X Casino iOS", "Royal X Casino iPhone", "Royal X Casino iPad", "Royal X Casino download iOS"],
  alternates: { canonical: "https://royalexcasino.com.pk/royal-x-casino-for-ios" },
  openGraph: {
    title: "Royal X Casino for iOS | Download for iPhone & iPad 2026",
    description: "Download Royal X Casino for iOS (iPhone & iPad). Step-by-step guide to install on iOS 12+ using configuration profile. Free download 2026.",
    url: "https://royalexcasino.com.pk/royal-x-casino-for-ios",
    siteName: "Royal X Casino",
    type: "website",
    images: [{ url: "https://royalexcasino.com.pk/royal-x-casino.webp", width: 1200, height: 1200, alt: "Royal X Casino for iOS iPhone iPad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal X Casino for iOS | Download for iPhone & iPad 2026",
    description: "Install Royal X Casino on iPhone & iPad via configuration profile. Free guide for iOS 12+.",
    images: ["https://royalexcasino.com.pk/royal-x-casino.webp"],
  },
};

export default function RoyalXCasinoForIOSPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb items={[
          { name: "Home", url: "/" },
          { name: "Royal X Casino for iOS", url: "/royal-x-casino-for-ios" },
        ]} />
      </div>
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Royal X Casino </span>
            <span className="text-[#FFA500]">for iOS</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Install <Link href="/" className="text-[#0ea5e9] underline hover:underline">Royal X Casino</Link> on your iPhone and iPad. Since it&apos;s not on the App Store, you install it via a configuration profile from the official website.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48">
            <Image src="/royal-x-casino-logo.webp" alt="Royal X Casino for iOS" width={192} height={192} className="object-contain" priority />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Steps to Download and Install on iOS</h2>
          <ol className="list-decimal pl-5 space-y-4 text-gray-300">
            <li><strong>Open Safari</strong> on your iPhone or iPad (Chrome may not work for profile installation).</li>
            <li><strong>Visit</strong> <Link href="/" className="text-[#0ea5e9] underline hover:underline">royalexcasino.com.pk</Link>.</li>
            <li>Find the <strong>iOS Download</strong> button and tap it.</li>
            <li>Download the iOS configuration profile to your device.</li>
            <li>Go to <strong>Settings → General → VPN & Device Management</strong> (or Profile Downloaded).</li>
            <li>Select the downloaded profile and tap <strong>Install</strong>.</li>
            <li>Enter your passcode if prompted, then tap the Royal X Casino icon on your home screen.</li>
          </ol>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">System Requirements</h2>
          <ul className="space-y-2 text-gray-300">
            <li><strong>Device:</strong> iOS 12 or higher</li>
            <li><strong>Storage:</strong> At least 500 MB</li>
            <li><strong>Browser:</strong> Safari (recommended for profile install)</li>
          </ul>
        </div>
      </section>

      <section className="py-8 px-4 text-center">
        <Link href="/" className="text-accent hover:underline font-semibold">← Back to Home</Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link href="/royal-x-casino-download" className="text-accent hover:underline font-semibold">Download for Android</Link>
      </section>
    </>
  );
}
