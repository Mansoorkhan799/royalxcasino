import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";

export const metadata: Metadata = {
  title: "How to Get Registered on Royal X Casino | Sign Up Guide 2026",
  description: "Step-by-step guide to register a Royal X Casino account in 2026. Create your account in minutes and start playing 200+ games for real money.",
  keywords: ["Royal X Casino register", "Royal X Casino sign up", "how to get registered on Royal X Casino"],
  alternates: { canonical: "https://royalexcasino.com.pk/how-to-register-royal-x-casino" },
  openGraph: {
    title: "How to Get Registered on Royal X Casino | Sign Up Guide 2026",
    description: "Step-by-step guide to register a Royal X Casino account. Create your account in minutes and start playing 200+ games.",
    url: "https://royalexcasino.com.pk/how-to-register-royal-x-casino",
    type: "article",
    publishedTime: "2026-01-01",
    authors: ["Royal X Casino"],
  },
};

export default function HowToRegisterRoyalXCasinoPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb items={[
          { name: "Home", url: "/" },
          { name: "How to Register", url: "/how-to-register-royal-x-casino" },
        ]} />
      </div>
      <HowToSchema
        name="How to Get Registered on Royal X Casino"
        description="Step-by-step guide to register a Royal X Casino account in 2026. Download the app, tap Register, enter your details, and complete registration."
        url="/how-to-register-royal-x-casino"
        steps={[
          { name: "Download the App", text: "Download Royal X Casino from royalexcasino.com.pk and install it on your Android device." },
          { name: "Tap Register or Sign Up", text: 'Open the app and tap "Register" or "Sign Up" on the welcome screen.' },
          { name: "Enter Your Details", text: "Provide your mobile number, create a password (min 6 characters), and enter the OTP sent via SMS." },
          { name: "Complete Registration", text: 'Tap "Complete" or "Register". Your account is ready. You can deposit and start playing!' },
        ]}
      />
      <article className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" aria-labelledby="registration-heading">
        <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto text-center" id="registration-heading">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">How to Get </span>
            <span className="text-[#FFA500]">Registered</span>
            <span className="text-white"> on Royal X Casino</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Want to start playing <Link href="/" className="text-[#0ea5e9] underline hover:underline">Royal X Casino</Link> and earn real money? Registration is quick. Follow these steps to create your account.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48">
            <Image src="/royal-x-casino-logo.webp" alt="Royal X Casino Registration" width={192} height={192} className="object-contain" />
          </div>
        </div>
        </section>

        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" aria-labelledby="registration-steps">
          <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 id="registration-steps" className="text-2xl font-bold mb-6 text-[#FFA500]">Step-by-Step Registration</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFA500] text-[#06091F] rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Download the App</h3>
                <p className="text-gray-300"><Link href="/royal-x-casino-download" className="text-[#0ea5e9] underline hover:underline">Download Royal X Casino</Link> from royalexcasino.com.pk and install it on your Android device.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFA500] text-[#06091F] rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Tap Register or Sign Up</h3>
                <p className="text-gray-300">Open the app and tap &quot;Register&quot; or &quot;Sign Up&quot; on the welcome screen.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFA500] text-[#06091F] rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Enter Your Details</h3>
                <p className="text-gray-300">Provide your mobile number, create a password (min 6 characters), and enter the OTP sent via SMS.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFA500] text-[#06091F] rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Complete Registration</h3>
                <p className="text-gray-300">Tap &quot;Complete&quot; or &quot;Register&quot;. Your account is ready. You can deposit and start playing!</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-900/30 border border-green-600 rounded-lg">
            <p className="text-gray-300">New users often get a welcome bonus after first deposit. Check the app for current offers.</p>
          </div>
        </div>
        </section>

        <section className="py-8 px-4 text-center" aria-label="Download and navigation">
        <Link href="/royal-x-casino-download" className="inline-flex items-center px-8 py-4 text-white font-bold rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all mb-4">
          Download Royal X Casino
        </Link>
        <br />
        <Link href="/" className="text-accent hover:underline font-semibold">← Back to Home</Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline font-semibold">How to Login</Link>
        </section>
      </article>
    </>
  );
}
