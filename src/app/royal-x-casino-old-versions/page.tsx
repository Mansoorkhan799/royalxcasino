import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Royal X Casino Old Versions | Download Previous APK Versions 2026",
  description: "Download old versions of Royal X Casino APK for free. Get previous versions (v2.54, v2.53) for Android. Safe, direct links from official source.",
  keywords: ["Royal X Casino old versions", "Royal X Casino APK download", "Royal X Casino previous versions"],
  alternates: { canonical: "https://royalexcasino.com.pk/royal-x-casino-old-versions" },
};

export default function RoyalXCasinoOldVersionsPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb items={[
          { name: "Home", url: "/" },
          { name: "Old Versions", url: "/royal-x-casino-old-versions" },
        ]} />
      </div>
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Royal X Casino </span>
            <span className="text-[#FFA500]">Old Versions</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Need an older version of <Link href="/" className="text-[#0ea5e9] underline hover:underline">Royal X Casino</Link>? For device compatibility or stability, you can download previous APK versions from the official source.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48">
            <Image src="/royal-x-casino-logo.webp" alt="Royal X Casino Old Versions" width={192} height={192} className="object-contain" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Available Versions</h2>
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-[#FFA500]">Version</th>
                <th className="text-left py-3 px-4 text-[#FFA500]">Size</th>
                <th className="text-left py-3 px-4 text-[#FFA500]">Android</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800"><td className="py-3 px-4">v2.54.7 (Latest)</td><td>8.9 MB</td><td>5.0+</td></tr>
              <tr className="border-b border-gray-800"><td className="py-3 px-4">v2.54.1</td><td>~8.8 MB</td><td>5.0+</td></tr>
              <tr className="border-b border-gray-800"><td className="py-3 px-4">v2.53.x</td><td>~8.7 MB</td><td>5.0+</td></tr>
            </tbody>
          </table>
          <p className="mt-4 text-gray-400 text-sm">
            We recommend using the <strong>latest version</strong> for the best security and features.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Safe Download Tips</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Only download from <strong>royalexcasino.com.pk</strong></li>
            <li>Enable &quot;Install from Unknown Sources&quot; in Settings</li>
            <li>Uninstall the current version before installing an older one (if downgrading)</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
        >
          Download Latest Royal X Casino
        </a>
      </section>

      <section className="py-8 px-4 text-center">
        <Link href="/" className="text-accent hover:underline font-semibold">← Back to Home</Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link href="/royal-x-casino-download" className="text-accent hover:underline font-semibold">Download Page</Link>
      </section>
    </>
  );
}
