import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";

const PAGE_PATH = "/royal-x-casino-deposit-guide";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "Royal X Casino Deposit Guide: EasyPaisa, JazzCash, Bank 2026";
const DESCRIPTION =
  "How to deposit in Royal X Casino with EasyPaisa, JazzCash, bank transfer or USDT. Rs. 100 to Rs. 50,000 per deposit, no fee, 20% first-deposit rebate and fixes.";
const OG_IMAGE = `${SITE_URL}/royal-x-casino-deposit-money-interface.webp`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Royal X Casino",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 540,
        alt: "Royal X Casino deposit screen listing EasyPaisa, JazzCash, bank transfer and USDT options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* Data shared between the visible lists and JSON-LD (must stay identical) */

const DEPOSIT_METHODS = [
  ["EasyPaisa", "Rs. 100", "Rs. 50,000", "Usually within a few minutes", "None"],
  ["JazzCash", "Rs. 100", "Rs. 50,000", "Usually within a few minutes", "None"],
  ["Bank transfer", "Rs. 100", "Rs. 50,000", "Up to about 30 minutes", "None (deposits only)"],
  ["USDT", "Rs. 100", "Rs. 50,000", "Depends on network confirmations", "Blockchain network fee"],
];

const DEPOSIT_STEPS = [
  {
    name: "Log in and open the wallet",
    text: "Sign in to Royal X Casino, tap the wallet or balance area in the lobby and choose Deposit (sometimes labelled Recharge).",
  },
  {
    name: "Choose a payment method",
    text: "Select EasyPaisa, JazzCash, bank transfer or USDT. EasyPaisa and JazzCash are the fastest for most players in Pakistan.",
  },
  {
    name: "Enter the amount",
    text: "Type an amount between Rs. 100 and Rs. 50,000. If this is your first deposit, check that the 20% first-deposit rebate is shown or selected before continuing.",
  },
  {
    name: "Pay from your wallet or bank app",
    text: "The app shows the account or number to pay. Open EasyPaisa, JazzCash or your banking app, send exactly that amount to the account shown and keep the receipt.",
  },
  {
    name: "Enter the transaction ID if asked",
    text: "Some methods ask you to paste the TID or transaction reference from your receipt and tap Submit so the payment can be matched to your account.",
  },
  {
    name: "Check your balance",
    text: "Return to the lobby and refresh the wallet. EasyPaisa and JazzCash deposits usually appear within a few minutes; bank transfers can take up to about 30 minutes.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "What is the minimum deposit on Royal X Casino?",
    a: "Rs. 100 per transaction, on every method including EasyPaisa, JazzCash, bank transfer and USDT.",
  },
  {
    q: "What is the maximum deposit on Royal X Casino?",
    a: "Rs. 50,000 per transaction. To add more, make separate deposits rather than one larger payment the app cannot match.",
  },
  {
    q: "Does Royal X Casino charge a deposit fee?",
    a: "No. There is no operator fee on EasyPaisa, JazzCash or bank transfer deposits. USDT deposits carry the blockchain network fee, which goes to the network, not Royal X Casino.",
  },
  {
    q: "How long does a Royal X Casino deposit take?",
    a: "EasyPaisa and JazzCash deposits are usually credited within a few minutes. Bank transfers can take up to about 30 minutes. USDT depends on network confirmations.",
  },
  {
    q: "Can I withdraw back to my bank account?",
    a: "No. Bank transfer is for deposits only. Withdrawals are paid to EasyPaisa or JazzCash (Rs. 600 to Rs. 50,000) or to USDT for larger amounts.",
  },
  {
    q: "How does the 20% first-deposit rebate work?",
    a: "Your first deposit earns a one-time 20% rebate: deposit Rs. 1,000 and Rs. 200 is added, for Rs. 1,200 in total. Bonus credit may need betting turnover before withdrawal, so check the in-app bonus terms.",
  },
  {
    q: "My deposit is not showing. What should I do?",
    a: "Wait the normal window for your method, then refresh the wallet. If it is still missing, open in-app live chat with your transaction ID, amount, time and a receipt screenshot. Do not send a second payment.",
  },
  {
    q: "Do I have to deposit to play Royal X Casino?",
    a: "No. Registration gives Rs. 10 welcome credit and many games have a free-trial or demo mode. Deposit only once you have decided to play for real money and set a budget.",
  },
];

const Disclosure = () => (
  <p className="text-gray-500 text-xs text-center max-w-md mx-auto">
    This button opens the operator&apos;s referral link. We may earn a commission when you register through it, at no
    cost to you. See our{" "}
    <Link href="/disclaimer" className="underline hover:text-gray-300">
      disclaimer
    </Link>
    .
  </p>
);

export default function RoyalXCasinoDepositGuidePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Deposit Guide", url: PAGE_PATH },
          ]}
        />
      </div>

      <ArticleSchema
        headline={TITLE}
        description={DESCRIPTION}
        url={PAGE_PATH}
        datePublished="2026-01-01"
        dateModified="2026-10-08"
        image={OG_IMAGE}
      />
      <HowToSchema
        name="How to deposit money in Royal X Casino"
        description="Add funds to your Royal X Casino wallet with EasyPaisa, JazzCash, bank transfer or USDT, from Rs. 100 to Rs. 50,000 per transaction."
        url={PAGE_PATH}
        image={OG_IMAGE}
        steps={DEPOSIT_STEPS}
      />
      <FaqSchema faqs={FAQS} />

      <article className="px-4 md:px-8 max-w-7xl mx-auto pb-12">
        {/* Hero */}
        <header className="py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Royal X Casino Deposit Guide: <span className="text-[#FFA500]">EasyPaisa, JazzCash, Bank and USDT</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-4">
            Depositing in Royal X Casino works through EasyPaisa, JazzCash, bank transfer and, for crypto users, USDT.
            The minimum is Rs. 100, the maximum is Rs. 50,000 per transaction and the operator charges no deposit fee.
            This guide covers each method, the exact steps, the first-deposit rebate maths and what to do when money
            does not appear.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">
            You need an account first; see the{" "}
            <Link href="/how-to-register-royal-x-casino" className="text-accent hover:underline">
              Royal X Casino registration guide
            </Link>
            , or get the{" "}
            <Link href="/" className="text-accent hover:underline">
              Royal X Casino APK
            </Link>{" "}
            if the app is not installed yet.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
            >
              Download Royal X Casino APK ({APP_INFO.size})
            </a>
            <Disclosure />
          </div>
        </header>

        {/* Methods table */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Royal X Casino deposit methods and limits</h2>
          <p className="text-gray-300 mb-6">
            All four methods share the same Rs. 100 to Rs. 50,000 range per transaction. They differ in speed, fee and
            whether they also work for withdrawals.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#0A1029] text-white">
                <tr>
                  {["Method", "Minimum", "Maximum", "Usual speed", "Fee"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {DEPOSIT_METHODS.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`py-3 px-4 ${i === 0 ? "font-medium text-white" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Bank transfer works for deposits only; payouts go to EasyPaisa, JazzCash or USDT. See the{" "}
            <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">
              Royal X Casino withdrawal guide
            </Link>{" "}
            for payout limits and timing.
          </p>
        </section>

        {/* Steps */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">How to deposit in Royal X Casino step by step</h2>
          <p className="text-gray-300 mb-6">
            The deposit screen is reached from the wallet. The six steps are the same for every method; only the payment
            details in step four change.
          </p>
          <figure className="mb-8 rounded-lg overflow-hidden border border-gray-700 bg-[#0A1029]">
            <Image
              src="/royal-x-casino-deposit-money-interface.webp"
              alt="Royal X Casino deposit interface with the amount field and EasyPaisa, JazzCash, bank transfer and USDT payment options"
              width={1200}
              height={540}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto"
              priority
            />
            <figcaption className="px-4 py-2 text-sm text-gray-300">
              The deposit screen: pick a method, enter an amount from Rs. 100, then pay from your wallet app.
            </figcaption>
          </figure>
          <ol className="space-y-4">
            {DEPOSIT_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-4 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Method notes */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Method-specific notes</h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-accent mb-2">EasyPaisa and JazzCash deposit steps</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                After you enter the amount, the app displays the account or mobile number to pay. Open your EasyPaisa or
                JazzCash app, pay exactly the amount you entered and save the receipt. If the deposit screen asks for a
                TID, paste the transaction ID from the receipt. Paying a different amount from the one you entered is the
                most common reason a wallet deposit is not matched automatically.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-2">Bank transfer</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Bank transfer is deposit-only. Send the amount from your banking app to the account details shown in
                Royal X Casino, keep the confirmation, and allow up to about 30 minutes. You cannot withdraw back to a
                bank account, so plan to receive payouts through EasyPaisa or JazzCash.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-2">USDT</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The app shows a wallet address and the network it expects. Sending USDT on a different network can lose
                the funds, so match it exactly before confirming. The network fee is set by the blockchain, not the
                operator, and the deposit is credited after the required confirmations.
              </p>
            </div>
          </div>
        </section>

        {/* First deposit rebate */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">First-deposit 20% rebate: a worked example</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your first deposit on Royal X Casino earns a one-time 20% rebate. The maths is simple:
          </p>
          <div className="bg-[#0A1029] rounded-lg p-5 border border-gray-700 mb-4">
            <ul className="text-gray-300 space-y-1">
              <li>Deposit Rs. 1,000 via EasyPaisa</li>
              <li>20% rebate added: Rs. 200</li>
              <li>
                <strong className="text-white">Play balance: Rs. 1,200</strong>
              </li>
            </ul>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            The rebate applies to the first deposit only, so a larger first deposit earns a larger rebate up to the Rs.
            50,000 cap. A bigger bonus is not a reason to deposit more than your budget allows.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Bonus credit may need some betting turnover before it can be withdrawn, so check the in-app bonus terms
            before you count the rebate as withdrawable cash. Daily login rewards and VIP levels are covered in the{" "}
            <Link href="/blog/royal-x-casino-bonuses-vip-guide" className="text-accent hover:underline">
              Royal X Casino bonuses and VIP guide
            </Link>
            .
          </p>
        </section>

        {/* Timing and not credited */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            How long deposits take and what to do if one is not credited
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            EasyPaisa and JazzCash deposits are usually credited within a few minutes. Bank transfers can take up to
            about 30 minutes, and USDT depends on network confirmations. If the balance has not changed after that
            window, work through this list in order:
          </p>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-4">
            <li>Refresh the wallet, or log out and back in. Display lag is more common than a lost payment.</li>
            <li>Check your wallet or bank app confirms the payment and that the amount matches what you entered.</li>
            <li>Keep the receipt and transaction ID until the deposit shows.</li>
            <li>Open in-app live chat with the TID, amount, time and method so support can match the payment manually.</li>
            <li>Do not send a second payment hoping it will fix the first; that creates two problems to resolve.</li>
          </ol>
          <p className="text-gray-300 text-sm leading-relaxed">
            Deposits made with an outdated APK can also fail. If you see payment errors in the app itself, confirm you
            are running {APP_INFO.version} before trying again.
          </p>
        </section>

        {/* Limits and budgeting */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Deposit limits and sensible budgeting</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Rs. 100 minimum lets you test the full deposit-to-play cycle cheaply. Start there: deposit Rs. 100 or
            Rs. 200, play a few rounds, and try a small withdrawal to see how the payout side behaves before committing
            more.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Set a weekly deposit figure before you open the app and write it down.</li>
            <li>Treat every deposit as entertainment spending that may not come back, not as an investment.</li>
            <li>Never deposit borrowed money or money earmarked for bills or family.</li>
            <li>If you are depositing to chase a loss, stop for the day.</li>
          </ul>
        </section>

        {/* Safety */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Deposit safety: pay only inside the app flow</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every legitimate deposit starts on the deposit screen inside Royal X Casino, which gives you the account to
            pay. Scammers posing as agents on WhatsApp, Telegram and Facebook ask you to send money to a personal
            EasyPaisa or JazzCash number with a promise of extra bonus. Money sent that way does not reach your wallet
            and cannot be recovered through live chat.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>Never pay to a number someone sends you in a chat. Use only the details shown in the app.</li>
            <li>Never share your wallet PIN or an OTP with anyone claiming to process your deposit.</li>
            <li>Be suspicious of &quot;deposit through me for extra&quot; offers; the official rebate is 20% on the first deposit only.</li>
            <li>Payments in the app run over HTTPS, but we cannot verify the operator&apos;s licence, so keep balances small.</li>
          </ul>
          <p className="text-gray-300 text-sm leading-relaxed">
            For the wider legal and safety picture in Pakistan, read{" "}
            <Link href="/blog/is-royal-x-casino-safe-legal-pakistan" className="text-accent hover:underline">
              Is Royal X Casino safe and legal in Pakistan?
            </Link>
          </p>
        </section>

        {/* FAQs */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino deposit FAQs</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
                <summary className="p-4 cursor-pointer text-white font-medium hover:text-[#FFA500]">{faq.q}</summary>
                <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="bg-secondary rounded-xl p-6 md:p-8">
          <div className="flex flex-col items-center gap-3 mb-6">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
            >
              Download Royal X Casino APK
            </a>
            <Disclosure />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            18+ only. Royal X Casino is a real-money gambling app and you can lose every rupee you deposit. Decide your
            limit first and read our{" "}
            <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">
              responsible gaming guide
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
