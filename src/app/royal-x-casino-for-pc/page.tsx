import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL } from "@/lib/config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Royal X Casino for PC | Download & Play on Windows 2026",
  description: "Download Royal X Casino for PC using Android Emulator. Play Teen Patti, Slots, Fishing on bigger screen. BlueStacks, LD Player guide.",
  keywords: ["Royal X Casino for PC", "Royal X Casino PC download", "Royal X Casino Windows", "Teen Patti PC", "Royal X Casino emulator"],
  alternates: { canonical: "https://royalexcasino.com.pk/royal-x-casino-for-pc" },
};

export default function RoyalXCasinoForPCPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Royal X Casino for PC", url: "/royal-x-casino-for-pc" },
      ]} />
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Royal X Casino </span>
            <span className="text-[#FFA500]">for PC</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Play <Link href="/" className="text-[#0ea5e9] underline hover:underline">Royal X Casino</Link> on your computer. Use BlueStacks, LD Player, or Nox Player to run the app on Windows and enjoy 200+ games on a bigger screen.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48">
            <Image src="/royal-x-casino-logo.webp" alt="Royal X Casino for PC" width={192} height={192} className="object-contain" priority />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">How to Download Royal X Casino on PC</h2>
          <ol className="list-decimal pl-5 space-y-4 text-gray-300">
            <li>Install an Android emulator (BlueStacks, LD Player, or Nox Player) on your PC.</li>
            <li>Visit <Link href="/" className="text-[#0ea5e9] underline hover:underline">royalexcasino.com.pk</Link> and download the Royal X Casino APK.</li>
            <li>Open the emulator and use the &quot;Install APK&quot; option to load the downloaded file.</li>
            <li>Once installed, open the app, register or log in, and start playing.</li>
          </ol>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Best Emulators for Royal X Casino</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <strong className="text-[#FFA500]">BlueStacks</strong> – Popular, high performance, beginner-friendly.
            </div>
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <strong className="text-[#FFA500]">LD Player</strong> – Lightweight and fast, ideal for low-end PCs.
            </div>
            <div className="bg-[#0A1029] p-4 rounded-lg">
              <strong className="text-[#FFA500]">Nox Player</strong> – Good compatibility with card games.
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">System Requirements</h2>
          <ul className="space-y-2 text-gray-300">
            <li><strong>OS:</strong> Windows 7 or higher (10/11 recommended)</li>
            <li><strong>RAM:</strong> 4GB minimum, 8GB for smooth gameplay</li>
            <li><strong>Storage:</strong> 5GB free space</li>
            <li><strong>Processor:</strong> Intel/AMD dual-core or better</li>
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
          Download Royal X Casino APK
        </a>
      </section>

      <section className="py-8 px-4 text-center">
        <Link href="/" className="text-accent hover:underline font-semibold">← Back to Home</Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link href="/royal-x-casino-download" className="text-accent hover:underline font-semibold">Download for Android</Link>
      </section>
    </>
  );
}
