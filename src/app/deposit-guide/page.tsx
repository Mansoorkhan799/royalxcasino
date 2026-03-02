import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "How to Deposit Money in Royal X Casino | EasyPaisa & JazzCash",
  description: "Step-by-step guide to deposit money in Royal X Casino. Min Rs. 100. Use EasyPaisa, JazzCash, or bank. First deposit 20% rebate.",
  alternates: { canonical: "https://royalexcasino.com.pk/deposit-guide" },
};

export default function DepositGuidePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Deposit Guide", url: "/deposit-guide" },
      ]} />
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-white">How to </span>
          <span className="text-[#FFA500]">Deposit Money</span>
          <span className="text-white"> in Royal X Casino</span>
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Add funds quickly using EasyPaisa, JazzCash, bank transfer, or USDT. Minimum deposit Rs. 100. First-time depositors get 20% recharge rebate.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Steps to Deposit</h2>
          <ol className="list-decimal pl-5 space-y-4 text-gray-300">
            <li>Open the Royal X Casino app and log in.</li>
            <li>Tap <strong>Wallet</strong> or <strong>Deposit</strong> (usually on the bottom right).</li>
            <li>Choose your payment method: <strong>EasyPaisa</strong>, <strong>JazzCash</strong>, Bank Transfer, or USDT.</li>
            <li>Enter the amount (min Rs. 100, max Rs. 50,000 per transaction).</li>
            <li>If it&apos;s your first deposit, select the <strong>20% recharge rebate</strong> option.</li>
            <li>Enter your EasyPaisa/JazzCash account number or bank details.</li>
            <li>Tap <strong>Pay Now</strong> and confirm the payment in your wallet app. Your balance will update instantly.</li>
          </ol>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Payment Methods</h2>
          <ul className="space-y-2 text-gray-300">
            <li><strong>EasyPaisa</strong> – Instant deposits, widely used in Pakistan.</li>
            <li><strong>JazzCash</strong> – Fast and secure mobile wallet.</li>
            <li><strong>Bank Transfer</strong> – For larger amounts.</li>
            <li><strong>USDT</strong> – Cryptocurrency option.</li>
          </ul>
        </div>
      </section>

      <section className="py-8 px-4 text-center">
        <Link href="/" className="text-accent hover:underline font-semibold">← Back to Home</Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link href="/withdraw-guide" className="text-accent hover:underline font-semibold">Withdraw Guide →</Link>
      </section>
    </>
  );
}
