import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "How to Login to Royal X Casino | Sign In Guide 2026",
  description: "Learn how to log in to your Royal X Casino account. Use mobile number and password. Quick login guide for 2026.",
  keywords: ["Royal X Casino login", "Royal X Casino sign in", "how to login to Royal X Casino"],
  alternates: { canonical: "https://royalexcasino.com.pk/how-to-login-royal-x-casino" },
};

export default function HowToLoginRoyalXCasinoPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "How to Login to Royal X Casino", url: "/how-to-login-royal-x-casino" },
      ]} />
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">How to </span>
            <span className="text-[#FFA500]">Login</span>
            <span className="text-white"> to Royal X Casino</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Already have a <Link href="/" className="text-[#0ea5e9] underline hover:underline">Royal X Casino</Link> account? Logging in is simple. Use your registered mobile number and password to access your account.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48">
            <Image src="/royal-x-casino-logo.webp" alt="Royal X Casino Login" width={192} height={192} className="object-contain" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Login Steps</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the Royal X Casino app on your device.</li>
            <li>Tap <strong>Log In</strong> (or &quot;Sign In&quot;) on the welcome screen.</li>
            <li>Enter your <strong>mobile number</strong> (the one you used to register).</li>
            <li>Enter your <strong>password</strong>.</li>
            <li>Tap <strong>Log In</strong> to access your account.</li>
          </ol>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Forgot Password?</h2>
          <p className="text-gray-300">
            Tap &quot;Forgot Password&quot; on the login screen. Enter your mobile number and you&apos;ll receive an OTP to reset it. Follow the on-screen steps to set a new password.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Security Tips</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Never share your password with anyone</li>
            <li>Use a strong, unique password</li>
            <li>Log out when using a shared device</li>
            <li>Only download from royalexcasino.com.pk</li>
          </ul>
        </div>
      </section>

      <section className="py-8 px-4 text-center">
        <Link href="/blog/royal-x-casino-login-problems-solutions" className="text-accent hover:underline font-semibold">
          Having login issues? Read our solutions guide →
        </Link>
        <br className="my-4" />
        <Link href="/" className="text-accent hover:underline font-semibold">← Back to Home</Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link href="/how-to-register-royal-x-casino" className="text-accent hover:underline font-semibold">How to Register</Link>
      </section>
    </>
  );
}
