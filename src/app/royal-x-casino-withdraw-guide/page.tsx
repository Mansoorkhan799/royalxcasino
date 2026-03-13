import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HowToSchema from "@/components/HowToSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Royal X Casino Withdraw Guide | EasyPaisa & JazzCash 2026",
  description: "Withdraw winnings from Royal X Casino in 10-30 minutes. Zero wagering. EasyPaisa, JazzCash, USDT. Min Rs. 600.",
  alternates: { canonical: "https://royalexcasino.com.pk/royal-x-casino-withdraw-guide" },
  openGraph: {
    title: "Royal X Casino Withdraw Guide | EasyPaisa & JazzCash 2026",
    description: "Withdraw winnings from Royal X Casino in 10-30 minutes. Zero wagering. EasyPaisa, JazzCash, USDT. Min Rs. 600.",
    url: "https://royalexcasino.com.pk/royal-x-casino-withdraw-guide",
    type: "article",
  },
};

const WITHDRAW_STEPS = [
  { name: "Open app and check balance", text: "Open the app and log in. Check your available balance in the Wallet." },
  { name: "Tap Withdraw", text: "Tap Withdraw (next to the Deposit button)." },
  { name: "Choose withdrawal method", text: "Choose EasyPaisa, JazzCash, USDT, or Bank Transfer." },
  { name: "Enter amount", text: "Enter the amount (min Rs. 600 for EasyPaisa/JazzCash; min Rs. 50,000 for USDT)." },
  { name: "Enter account details", text: "Enter your account number or wallet details. Double-check for accuracy." },
  { name: "Confirm withdrawal", text: "Tap Withdraw and confirm. Money processed within 10-30 minutes." },
  { name: "Track status", text: "Track the status in the History section." },
];

export default function RoyalXCasinoWithdrawGuidePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Royal X Casino Withdraw Guide", url: "/royal-x-casino-withdraw-guide" },
      ]} />
      <HowToSchema
        name="Royal X Casino Withdraw Guide"
        description="Withdraw winnings from Royal X Casino in 10-30 minutes. Zero wagering. Use EasyPaisa, JazzCash, USDT, or bank. Min Rs. 600."
        url="/royal-x-casino-withdraw-guide"
        steps={WITHDRAW_STEPS}
      />
      <ArticleSchema
        headline="Royal X Casino Withdraw Guide | EasyPaisa & JazzCash 2026"
        description="Withdraw winnings from Royal X Casino in 10-30 minutes. Zero wagering. EasyPaisa, JazzCash, USDT. Min Rs. 600."
        url="/royal-x-casino-withdraw-guide"
        datePublished="2026-01-01"
      />
      <article>
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" aria-labelledby="withdraw-heading">
        <h1 id="withdraw-heading" className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-white">Royal X Casino </span>
          <span className="text-[#FFA500]">Withdraw Guide</span>
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Royal X Casino has <strong>zero wagering requirements</strong> – you can withdraw bonuses and winnings immediately. Money reaches your EasyPaisa or JazzCash in 10–30 minutes.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Steps to Withdraw</h2>
          <ol className="list-decimal pl-5 space-y-4 text-gray-300">
            <li>Open the app and log in. Check your available balance in the Wallet.</li>
            <li>Tap <strong>Withdraw</strong> (next to the Deposit button).</li>
            <li>Choose your method: <strong>EasyPaisa</strong>, <strong>JazzCash</strong>, USDT, or Bank Transfer.</li>
            <li>Enter the amount (min Rs. 600 for EasyPaisa/JazzCash; min Rs. 50,000 for USDT).</li>
            <li>Enter your account number or wallet details. Double-check for accuracy.</li>
            <li>Tap <strong>Withdraw</strong> and confirm. Your money will be processed and sent within 10–30 minutes.</li>
            <li>Track the status in the <strong>History</strong> section.</li>
          </ol>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Withdrawal Limits</h2>
          <ul className="space-y-2 text-gray-300">
            <li><strong>EasyPaisa / JazzCash:</strong> Rs. 600 – Rs. 50,000 per transaction.</li>
            <li><strong>USDT:</strong> Rs. 50,000 – Rs. 5,00,000 per transaction.</li>
            <li>Unlimited daily withdrawals. No hidden fees.</li>
          </ul>
        </div>
      </section>

      <section className="py-8 px-4 text-center">
        <Link href="/" className="text-accent hover:underline font-semibold">← Back to Home</Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline font-semibold">Deposit Guide →</Link>
      </section>
      </article>
    </>
  );
}
