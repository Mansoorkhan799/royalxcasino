import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL } from "@/lib/config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Download Royal X Casino APK | Latest Version 2026 | Android",
  description: "Download Royal X Casino APK free for Android. 200+ games, zero wagering, instant withdrawals. JazzCash & EasyPaisa. v2.54.7 – 8.9 MB.",
  keywords: ["Download Royal X Casino", "Royal X Casino APK", "Royal X Casino Android", "Teen Patti download", "casino APK Pakistan"],
  alternates: { canonical: "https://royalexcasino.com.pk/download" },
};

export default function DownloadPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Download", url: "/download" },
      ]} />
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Download </span>
            <span className="text-[#FFA500]">Royal X Casino</span>
            <span className="text-white"> APK</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get the latest version (v2.54.7) for Android. 200+ games, zero wagering, instant withdrawals via JazzCash & EasyPaisa.
          </p>
        </div>

        <div className="flex justify-center my-12">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn flex items-center px-12 py-6 text-white font-bold text-xl rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
          >
            <span className="mr-4">DOWNLOAD APK (8.9 MB)</span>
            <div className="bg-[#f97316] rounded-full p-3 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48">
            <Image src="/royal-x-casino-logo.webp" alt="Royal X Casino" width={192} height={192} className="object-contain" priority />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Download Info</h2>
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", "Royal X Casino"],
                ["Version", "v2.54.7"],
                ["Size", "8.90 MB"],
                ["OS", "Android 5.0+"],
                ["RAM", "2GB minimum"],
                ["Storage", "600 MB free"],
              ].map(([k, v], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#0a1029]/50" : "bg-[#06091F]/50"}>
                  <td className="py-3 px-4 font-medium text-white">{k}</td>
                  <td className="py-3 px-4 text-white">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Download - Visual Guide */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">How to Download Royal X Casino</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <Image src="/how-to-download-step-01.webp" alt="Step 1: Click the Download button on royalexcasino.com.pk" width={280} height={500} className="rounded-lg border border-gray-700 object-cover" />
                <span className="absolute top-2 left-2 bg-[#FFA500] text-primary font-bold px-3 py-1 rounded text-sm">Step 01</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Download the App</h3>
              <p className="text-gray-300 text-sm">Visit <Link href="/" className="text-accent hover:underline">royalexcasino.com.pk</Link> and click the green &quot;Download Royal X Casino&quot; button.</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <Image src="/how-to-download-step-02.webp" alt="Step 2: Enable Install from Unknown Sources for your browser" width={280} height={500} className="rounded-lg border border-gray-700 object-cover" />
                <span className="absolute top-2 left-2 bg-[#FFA500] text-primary font-bold px-3 py-1 rounded text-sm">Step 02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Allow Unknown Sources</h3>
              <p className="text-gray-300 text-sm">Go to Settings → Install Unknown Apps → Chrome, and turn &quot;Allow from this source&quot; ON.</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <Image src="/how-to-download-step-03.webp" alt="Step 3: Tap Install on the APK file" width={280} height={500} className="rounded-lg border border-gray-700 object-cover" />
                <span className="absolute top-2 left-2 bg-[#FFA500] text-primary font-bold px-3 py-1 rounded text-sm">Step 03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Install the APK</h3>
              <p className="text-gray-300 text-sm">Open Downloads, tap Royal-x-Casino.apk, then tap &quot;Install&quot; to complete setup.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">How to Install</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Click the download button above and wait for the APK to finish downloading.</li>
            <li>Open <strong>Settings → Security</strong> and enable <strong>Install from Unknown Sources</strong> (or allow your browser to install apps).</li>
            <li>Open your <strong>Downloads</strong> folder and tap the Royal X Casino APK file.</li>
            <li>Tap <strong>Install</strong> and wait for installation to complete.</li>
            <li>Open the app, register, and get your Rs. 10 welcome bonus.</li>
          </ol>
          <p className="mt-6 text-gray-400 text-sm">
            Only download from <Link href="/" className="text-accent hover:underline font-semibold">royalexcasino.com.pk</Link> to avoid fake or unsafe apps.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 text-center">
        <Link href="/" className="text-accent hover:underline font-semibold">← Back to Home</Link>
      </section>
    </>
  );
}
