import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";

const PAGE_PATH = "/royal-x-casino-withdraw-guide";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "Royal X Casino Withdrawal Guide: EasyPaisa and JazzCash 2026";
const DESCRIPTION =
  "How to withdraw from Royal X Casino to EasyPaisa or JazzCash (Rs. 600 to Rs. 50,000) or USDT. Steps, 10–30 minute payout times, limits and pending payout fixes.";
const OG_IMAGE = `${SITE_URL}/royal-x-casino-withdraw-money-interface.webp`;

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
        alt: "Royal X Casino withdrawal screen with amount, wallet selection and account number fields",
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

const WITHDRAW_METHODS = [
  ["EasyPaisa", "Rs. 600", "Rs. 50,000", "Usually 10–30 minutes", "None"],
  ["JazzCash", "Rs. 600", "Rs. 50,000", "Usually 10–30 minutes", "None"],
  ["USDT", "Rs. 50,000", "Rs. 500,000", "Depends on network confirmations", "Blockchain network fee"],
];

const WITHDRAW_STEPS = [
  {
    name: "Log in and open Withdraw",
    text: "Sign in to Royal X Casino, tap the wallet or balance area and choose Withdraw, which sits next to Deposit.",
  },
  {
    name: "Choose EasyPaisa, JazzCash or USDT",
    text: "Pick the method that matches the account in your name. EasyPaisa and JazzCash cover Rs. 600 to Rs. 50,000 per request; USDT is for Rs. 50,000 to Rs. 500,000.",
  },
  {
    name: "Enter the amount",
    text: "Type an amount within the limits for your method and within your available withdrawable balance. Bonus credit may be excluded until any turnover condition is met.",
  },
  {
    name: "Enter or confirm your account details",
    text: "Add the EasyPaisa or JazzCash mobile account number registered in your own name, or the USDT wallet address and network. Check every digit before you continue.",
  },
  {
    name: "Submit and confirm",
    text: "Tap Withdraw and confirm the request. Note the request ID or time so you can reference it with support if needed.",
  },
  {
    name: "Track the request in History",
    text: "Open the wallet History or Records tab to watch the status move from pending to completed. EasyPaisa and JazzCash payouts usually land within 10 to 30 minutes.",
  },
];

const WITHDRAW_PROBLEMS = [
  {
    problem: "Pending for hours",
    cause: "Peak-hour queue, first withdrawal under review or a verification check on the account.",
    fix: "If it is still pending well past the usual 10–30 minutes, open live chat with the request ID and amount. Do not cancel and resubmit repeatedly.",
  },
  {
    problem: "Withdrawal rejected",
    cause: "Name on the wallet does not match your account details, or verification is incomplete.",
    fix: "Compare the wallet name with your Royal X Casino profile and correct whichever is wrong. Complete any verification the app requests, then resubmit.",
  },
  {
    problem: "Wrong account number entered",
    cause: "A typo in the mobile account number or USDT address.",
    fix: "If the request is still pending, contact live chat immediately and ask for it to be cancelled. Once a payout to a wrong account completes, recovery is unlikely.",
  },
  {
    problem: "Amount below minimum",
    cause: "Request under Rs. 600 for EasyPaisa or JazzCash, or under Rs. 50,000 for USDT.",
    fix: "Increase the amount to the minimum for your method. Switching to USDT does not help for small amounts.",
  },
  {
    problem: "Bonus balance locked",
    cause: "Rebate or promotional credit still has a turnover condition attached.",
    fix: "Check the in-app bonus terms for the betting required, withdraw only the unrestricted portion for now, or wait until the condition is met.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "What is the minimum withdrawal on Royal X Casino?",
    a: "Rs. 600 per request for EasyPaisa and JazzCash. USDT withdrawals start at Rs. 50,000, so that method is only relevant for larger balances.",
  },
  {
    q: "How long does a Royal X Casino withdrawal take?",
    a: "EasyPaisa and JazzCash payouts usually arrive within 10 to 30 minutes. A first withdrawal, a peak-time request or a verification check can take longer. USDT depends on network confirmations.",
  },
  {
    q: "Is there a withdrawal fee?",
    a: "No operator fee on EasyPaisa or JazzCash withdrawals. USDT withdrawals carry the blockchain network fee, deducted by the network rather than by Royal X Casino.",
  },
  {
    q: "Can I withdraw to a friend's or family member's wallet?",
    a: "No. The name on the receiving EasyPaisa or JazzCash account must match the name on your Royal X Casino account. Payouts to someone else's wallet are rejected.",
  },
  {
    q: "Can I withdraw my bonus money?",
    a: "Bonus credit, including the 20% first-deposit rebate, may need some betting turnover before it becomes withdrawable. Check the in-app bonus terms for the current condition.",
  },
  {
    q: "Why is my withdrawal still pending after an hour?",
    a: "Common reasons are a peak-hour queue, a first withdrawal under review, or a name or verification mismatch. Check History, confirm your wallet name matches, then contact live chat with the request details if it has not moved.",
  },
  {
    q: "Can I withdraw more than Rs. 50,000?",
    a: "Not in a single EasyPaisa or JazzCash request. Split the amount into several requests of up to Rs. 50,000 each, or use USDT, which allows Rs. 50,000 to Rs. 500,000 per request.",
  },
  {
    q: "Can I withdraw to my bank account?",
    a: "No. Bank transfer is deposit-only on Royal X Casino. Withdrawals are paid to EasyPaisa, JazzCash or USDT; you can move money from your wallet to your bank afterwards.",
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

export default function RoyalXCasinoWithdrawGuidePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Withdraw Guide", url: PAGE_PATH },
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
        name="How to withdraw money from Royal X Casino"
        description="Request a payout from your Royal X Casino wallet to EasyPaisa, JazzCash or USDT and track it until it arrives."
        url={PAGE_PATH}
        image={OG_IMAGE}
        steps={WITHDRAW_STEPS}
      />
      <FaqSchema faqs={FAQS} />

      <article className="px-4 md:px-8 max-w-7xl mx-auto pb-12">
        {/* Hero */}
        <header className="py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Royal X Casino Withdrawal Guide: <span className="text-[#FFA500]">EasyPaisa, JazzCash and USDT</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-4">
            Withdrawing from Royal X Casino sends your balance to an EasyPaisa or JazzCash account in your name, with
            USDT available for larger sums. Wallet payouts usually arrive within 10 to 30 minutes; the minimum is Rs. 600
            and the maximum is Rs. 50,000 per request. This guide covers the checks to make before your first
            withdrawal, the exact steps, realistic timing and fixes for the common problems.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">
            If you have not added funds yet, the{" "}
            <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline">
              Royal X Casino deposit guide
            </Link>{" "}
            explains the methods and limits on the way in. Players who still need the app can get the{" "}
            <Link href="/" className="text-accent hover:underline">
              Royal X Casino APK
            </Link>
            .
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Royal X Casino withdrawal methods and limits</h2>
          <p className="text-gray-300 mb-6">
            Three payout methods are available. Bank transfer is not one of them; it works for deposits only.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#0A1029] text-white">
                <tr>
                  {["Method", "Minimum per request", "Maximum per request", "Usual payout time", "Fee"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {WITHDRAW_METHODS.map((row) => (
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
        </section>

        {/* Before first withdrawal */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Before your first withdrawal</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Most rejected or delayed payouts trace back to something that could have been checked in advance:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-3">
            <li>
              <strong className="text-white">The wallet name must match.</strong> The name on your EasyPaisa or JazzCash
              account has to be the same as the name on your Royal X Casino account. Compare the two exactly and fix any
              difference before withdrawing.
            </li>
            <li>
              <strong className="text-white">Complete any verification the app asks for.</strong> A first withdrawal can
              trigger an account check. Finishing it when prompted is faster than having a payout held while support
              asks for the same details.
            </li>
            <li>
              <strong className="text-white">Know which part of your balance is withdrawable.</strong> Bonus credit from
              the first-deposit rebate or promotions may carry a betting turnover condition; check the in-app bonus
              terms. The{" "}
              <Link href="/blog/royal-x-casino-bonuses-vip-guide" className="text-accent hover:underline">
                Royal X Casino bonuses and VIP guide
              </Link>{" "}
              explains each bonus type.
            </li>
          </ul>
        </section>

        {/* Steps */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            How to withdraw from Royal X Casino step by step
          </h2>
          <p className="text-gray-300 mb-6">
            The withdrawal screen sits next to Deposit in the wallet. The six steps apply to EasyPaisa, JazzCash and
            USDT alike; only the account details differ.
          </p>
          <figure className="mb-8 rounded-lg overflow-hidden border border-gray-700 bg-[#0A1029]">
            <Image
              src="/royal-x-casino-withdraw-money-interface.webp"
              alt="Royal X Casino withdraw money interface showing the amount field, EasyPaisa and JazzCash wallet selection and account number entry"
              width={1200}
              height={540}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto"
              priority
            />
            <figcaption className="px-4 py-2 text-sm text-gray-300">
              The withdraw screen: choose a wallet, enter an amount from Rs. 600 and confirm the account in your name.
            </figcaption>
          </figure>
          <ol className="space-y-4">
            {WITHDRAW_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-4 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-gray-400 text-sm mt-4">
            Trouble getting into the app to start a withdrawal? The{" "}
            <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline">
              Royal X Casino login guide
            </Link>{" "}
            covers password resets and locked accounts.
          </p>
        </section>

        {/* Timing */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            How long a Royal X Casino withdrawal takes and why it can be slower
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For EasyPaisa and JazzCash, the typical window is 10 to 30 minutes from submitting the request to the money
            showing in your wallet app. USDT timing depends on the network. Three situations push a payout past that
            window:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>
              <strong className="text-white">Peak hours.</strong> Evenings and weekends create a queue of requests.
            </li>
            <li>
              <strong className="text-white">First withdrawal.</strong> The first payout on a new account is more likely
              to be reviewed manually.
            </li>
            <li>
              <strong className="text-white">Verification.</strong> Incomplete profile details or a wallet name that is
              close but not identical can hold the request until sorted out.
            </li>
          </ul>
          <p className="text-gray-300 text-sm leading-relaxed">
            A pending request is not lost. Check the status in History before contacting support, and give peak-time
            payouts extra room before escalating.
          </p>
        </section>

        {/* Problems table */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Common withdrawal problems and fixes</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#0A1029] text-white">
                <tr>
                  {["Problem", "Usual cause", "Fix"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {WITHDRAW_PROBLEMS.map((row) => (
                  <tr key={row.problem}>
                    <td className="py-3 px-4 font-medium text-white align-top">{row.problem}</td>
                    <td className="py-3 px-4 align-top">{row.cause}</td>
                    <td className="py-3 px-4 align-top">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mt-4">
            For any of these, in-app live chat is the right channel and is available around the clock. Have the request
            ID, amount, method and a screenshot of the History entry ready. Never share your wallet PIN or an OTP with
            anyone who contacts you about a withdrawal.
          </p>
        </section>

        {/* Limits and planning */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Withdrawal limits and planning larger payouts</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Rs. 50,000 cap is per request. If your balance is larger, split it: Rs. 120,000 becomes two requests of
            Rs. 50,000 and one of Rs. 20,000 to the same wallet. Submit the next one after the previous one completes so
            a single problem does not hold up all of them.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            For sums of Rs. 50,000 and above, USDT is the alternative, with a ceiling of Rs. 500,000 per request. It
            suits players who already use a crypto wallet and understand network selection; the blockchain fee is
            deducted from what arrives.
          </p>
          <p className="text-gray-300 leading-relaxed">
            A practical habit: withdraw when you reach a target you set before the session. Money left in the game
            wallet is easier to bet again than money sitting in EasyPaisa. Our{" "}
            <Link href="/blog/royal-x-casino-tips-10-smart-tricks" className="text-accent hover:underline">
              Royal X Casino tips article
            </Link>{" "}
            goes into bankroll habits that keep sessions under control.
          </p>
        </section>

        {/* Tax / legal */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Tax and legal note on withdrawals</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The operator is not licensed by any Pakistani authority. Gambling is restricted under Pakistan&apos;s
            Prevention of Gambling Act 1977, and offshore apps operate in a grey area. You are responsible for complying
            with the law that applies to you and for any reporting of winnings.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            This website is an independent guide, not the operator, and does not process payouts. The legal position is
            covered in{" "}
            <Link href="/blog/is-royal-x-casino-safe-legal-pakistan" className="text-accent hover:underline">
              Is Royal X Casino safe and legal in Pakistan?
            </Link>
          </p>
        </section>

        {/* FAQs */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino withdrawal FAQs</h2>
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
            18+ only. Royal X Casino is a real-money gambling app; winnings are never guaranteed and losses are
            possible. Withdraw when you are ahead and read our{" "}
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
