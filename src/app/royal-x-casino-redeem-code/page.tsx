import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import FaqSchema, { FaqItem } from "@/components/FaqSchema";
import ArticleSchema from "@/components/ArticleSchema";

const PAGE_URL = `${SITE_URL}/royal-x-casino-redeem-code`;
const TITLE = "Royal X Casino Redeem Code: How to Get and Use Codes 2026";
const DESCRIPTION =
  "Where Royal X Casino redeem and gift codes come from, how to enter one under Promotions, the rules that apply, and how to spot fake code scams.";

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
        url: `${SITE_URL}/royal-x-casino-grab-coins.webp`,
        width: 1200,
        height: 540,
        alt: "Royal X Casino promotions screen showing a Grab Coins event banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/royal-x-casino-grab-coins.webp`],
  },
};

/* Data shared between the visible UI and JSON-LD (must stay identical) */

const REDEEM_STEPS = [
  {
    name: "Log in to the app",
    text: "Open Royal X Casino and sign in with your +92 mobile number and password. Redeem Code is only available to logged-in accounts.",
  },
  {
    name: "Open Promotions",
    text: "From the lobby, tap the Promotions (sometimes labelled Events) tab in the bottom or side menu.",
  },
  {
    name: "Tap Redeem Code",
    text: "Select the Redeem Code or Gift Code entry. On some builds it sits under Profile; if it is missing, update the app to the current version.",
  },
  {
    name: "Paste the code",
    text: "Type or paste the code exactly as published. Codes are usually case-sensitive, so check 0 against O and 1 against I before confirming.",
  },
  {
    name: "Confirm and check your wallet",
    text: "Tap Confirm. A success message appears and the credit shows in your wallet or bonus balance. If the code fails, the error says whether it is invalid, expired or already used.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "What is a Royal X Casino redeem code?",
    a: "A redeem code, also called a gift code, is a short text string the operator issues for a specific promotion. Enter it under Promotions, then Redeem Code; if it is valid, a bonus credit is added to your wallet.",
  },
  {
    q: "Where do I enter a gift code in the Royal X Casino app?",
    a: "Log in, open the Promotions tab, tap Redeem Code or Gift Code, paste the code and confirm. On some app versions the entry is under Profile.",
  },
  {
    q: "Does this page list working Royal X Casino redeem codes?",
    a: "No. Codes expire quickly and most 'latest codes' lists online are out of date or invented. We only publish a code when we hold a live one; otherwise use the official Telegram and WhatsApp channels linked inside the app.",
  },
  {
    q: "Are Royal X Casino redeem codes free?",
    a: "Yes. Genuine codes cost nothing. Anyone asking for payment, your OTP or your password in exchange for a code is running a scam.",
  },
  {
    q: "Can I use the same code twice or on two accounts?",
    a: "No. Codes are single-use per account, and the operator allows one account per person and phone number. A second account opened to reuse a code can get both closed.",
  },
  {
    q: "Do redeem code bonuses have wagering requirements?",
    a: "Bonus credit may require some betting turnover before it can be withdrawn. The exact condition is shown in the in-app terms for each promotion, so check them before you plan a withdrawal.",
  },
  {
    q: "Why does the app say my code is invalid?",
    a: "Usually a typing error, an expired campaign or a code already used on your account. Copy the code from the source, check similar-looking characters and make sure the app is on the current version.",
  },
  {
    q: "What is the difference between a redeem code and a referral code?",
    a: "A referral or invite code is your permanent ID that friends enter at registration; it pays you Rs. 20 per registered friend and up to Rs. 1,000 as their deposits reach Rs. 1,000. A redeem code is a temporary voucher that credits your own wallet once.",
  },
];

const CODE_RULES = [
  ["Single-use per account", "A code works once on your account. One account per person and phone number is allowed, so it cannot be reused on a second account."],
  ["Expiry", "Every code has an end date or a redemption cap; after that it stops working."],
  ["Turnover terms", "Bonus credit may need some betting turnover before withdrawal. The exact condition is in the in-app terms for that promotion."],
  ["Withdrawal minimum", "Payouts to EasyPaisa or JazzCash start at Rs. 600, so a small code bonus alone will not reach it."],
  ["Operator discretion", "The operator can void codes it considers abused, for example multi-accounting."],
];

const NO_CODE_BONUSES = [
  ["Welcome credit", "Rs. 10 on registration", "Automatic"],
  ["First-deposit rebate", "20% extra, one time (Rs. 1,000 deposit adds Rs. 200)", "Automatic on first deposit"],
  ["Daily login reward", "Small daily credit that grows with your streak", "Promotions, then daily check-in"],
  ["Referral", "Rs. 20 when a friend registers with your code, up to Rs. 1,000 as their deposits reach Rs. 1,000", "Share your invite code"],
  ["VIP levels", "Level-up bonus from Rs. 15 and a monthly payment from Rs. 11, rising per level", "Based on betting volume"],
];

const TROUBLESHOOTING = [
  ["Invalid code", "Typo, or the code is not meant for your account", "Copy and paste from the source; compare similar characters"],
  ["Expired", "The campaign has ended", "Wait for the next event in the official channels"],
  ["Already used", "Redeemed on this account before", "Each code works once; try a different code"],
  ["No Redeem Code option", "Old app version", "Install the latest APK and log in again"],
];

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const Disclosure = () => (
  <p className="text-gray-500 text-xs text-center max-w-md mx-auto">
    This button opens the operator&apos;s referral link. We may earn a commission when you register through it, at
    no cost to you. See our{" "}
    <Link href="/disclaimer" className="underline hover:text-gray-300">
      disclaimer
    </Link>
    .
  </p>
);

export default function RoyalXCasinoRedeemCodePage() {
  return (
    <>
      <HowToSchema
        name="How to redeem a Royal X Casino gift code"
        description="Enter a Royal X Casino redeem code under Promotions, then Redeem Code, paste the code and confirm to receive the bonus credit."
        url="/royal-x-casino-redeem-code"
        steps={REDEEM_STEPS}
      />
      <FaqSchema faqs={FAQS} />
      <ArticleSchema
        headline={TITLE}
        description={DESCRIPTION}
        url="/royal-x-casino-redeem-code"
        datePublished="2026-01-01"
        dateModified="2026-10-08"
        image={`${SITE_URL}/royal-x-casino-grab-coins.webp`}
      />

      <article>
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
          <Breadcrumb
            items={[
              { name: "Home", url: "/" },
              { name: "Redeem Code", url: "/royal-x-casino-redeem-code" },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Royal X Casino Redeem Code: <span className="text-[#FFA500]">How to Get and Use Gift Codes</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A Royal X Casino redeem code (also called a gift code) is a short text string you enter under Promotions
              for a one-off credit. This page covers where genuine codes are published, how to enter one, the rules and
              how to spot a scam. It does not list codes: any code pasted here would be expired by the time you read it.
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>Download Royal X Casino APK ({APP_INFO.size})</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <DownloadIcon />
                </div>
              </a>
              <Disclosure />
            </div>
          </div>
        </section>

        {/* What a code is */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">What a Royal X Casino redeem code is, and what it is not</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A redeem code is a promotional voucher issued by the operator. When you enter it, the app checks it
              against the operator&apos;s server and, if it is valid and unused on your account, credits a bonus to
              your wallet. The amount varies by campaign; small event codes are worth a few rupees, larger ones are
              tied to deposits or festivals.
            </p>
            <p className="text-gray-300 mb-3">Three things a redeem code is not:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                <strong className="text-white">Not your referral code.</strong> Your invite code is a permanent ID
                friends enter at registration; a redeem code is temporary and single-use.
              </li>
              <li>
                <strong className="text-white">Not a hack.</strong> Nothing adds unlimited balance. Anything promising
                that is malware or a scam.
              </li>
              <li>
                <strong className="text-white">Not for sale.</strong> Genuine codes are free.
              </li>
            </ul>
          </div>
        </section>

        {/* Where codes come from */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Where Royal X Casino gift codes come from</h2>
            <p className="text-gray-300 mb-6">
              The operator releases codes through three channels. Treat anything else with caution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#0A1029] p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-accent">Official Telegram and WhatsApp channels</h3>
                <p className="text-gray-300 text-sm">
                  Codes are posted during events and festivals. Join only through links inside the app so you know the
                  channel is genuine.
                </p>
              </div>
              <div className="bg-[#0A1029] p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-accent">In-app events</h3>
                <p className="text-gray-300 text-sm">
                  Time-limited campaigns in the Promotions and Events tabs sometimes show a code on the banner or send
                  one to your in-app inbox after a deposit or login streak.
                </p>
              </div>
              <div className="bg-[#0A1029] p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-accent">Partner sites</h3>
                <p className="text-gray-300 text-sm">
                  Some affiliate websites receive codes for their readers. We publish one here only when we hold a
                  genuine, still-valid code; otherwise this page shows none.
                </p>
              </div>
            </div>
            <figure className="rounded-lg overflow-hidden border border-gray-700 bg-[#0A1029] max-w-2xl mx-auto">
              <Image
                src="/royal-x-casino-grab-coins.webp"
                alt="Royal X Casino promotions screen showing a Grab Coins event banner"
                width={1200}
                height={540}
                sizes="(max-width: 768px) 100vw, 672px"
                className="w-full h-auto"
              />
              <figcaption className="px-3 py-2 text-sm text-gray-300">Event banners in the Promotions tab.</figcaption>
            </figure>
          </div>
        </section>

        {/* How to redeem */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to redeem a code in the Royal X Casino app</h2>
            <p className="text-gray-300 mb-6">
              You need an account and the current app version. New users: see the{" "}
              <Link href="/how-to-register-royal-x-casino" className="text-accent hover:underline">
                registration guide
              </Link>{" "}
              and the{" "}
              <Link href="/royal-x-casino-download" className="text-accent hover:underline">
                APK download guide
              </Link>{" "}
              for the {APP_INFO.version} build.
            </p>
            <ol className="space-y-4">
              {REDEEM_STEPS.map((s, i) => (
                <li key={s.name} className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#FFA500]">
                  <h3 className="font-bold text-white mb-1">
                    Step {i + 1}: {s.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Code rules */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Redeem code rules to know before you enter one</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-700">
              <table className="min-w-full text-sm text-gray-300">
                <thead className="bg-[#0A1029] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">Rule</th>
                    <th className="py-3 px-4 text-left font-semibold">What it means for you</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {CODE_RULES.map(([rule, meaning]) => (
                    <tr key={rule}>
                      <td className="py-3 px-4 font-medium text-white">{rule}</td>
                      <td className="py-3 px-4">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Limits and timing are the same as for any balance; see the{" "}
              <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">
                EasyPaisa and JazzCash withdrawal guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Bonuses without a code */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino bonuses that do not need a code</h2>
            <p className="text-gray-300 mb-6">Most of the app&apos;s bonus value comes from standing offers that need no code.</p>
            <div className="overflow-x-auto rounded-xl border border-gray-700">
              <table className="min-w-full text-sm text-gray-300">
                <thead className="bg-[#0A1029] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">Bonus</th>
                    <th className="py-3 px-4 text-left font-semibold">What you get</th>
                    <th className="py-3 px-4 text-left font-semibold">How to claim</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {NO_CODE_BONUSES.map(([name, value, how]) => (
                    <tr key={name}>
                      <td className="py-3 px-4 font-medium text-white">{name}</td>
                      <td className="py-3 px-4">{value}</td>
                      <td className="py-3 px-4">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Conditions for each are explained in our{" "}
              <Link href="/blog/royal-x-casino-bonuses-vip-guide" className="text-accent hover:underline">
                Royal X Casino bonuses, rebate and VIP guide
              </Link>
              . The full app overview, including payment limits, is on the{" "}
              <Link href="/" className="text-accent hover:underline">
                Royal X Casino APK
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* Scams */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to spot a fake redeem code scam</h2>
            <p className="text-gray-300 mb-4">
              Scammers use the demand for codes to take over accounts. Stop if you see any of these:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
              <li>
                <strong className="text-white">They ask for your OTP or password.</strong> The operator never needs
                these to issue a code; anyone asking wants to log in as you.
              </li>
              <li>
                <strong className="text-white">They ask you to pay first.</strong> &quot;Send Rs. 500 and get a
                Rs. 5,000 code&quot; is theft.
              </li>
              <li>
                <strong className="text-white">They ask you to install another APK.</strong> A &quot;code
                generator&quot; or &quot;mod&quot; file is malware or a cloned app that captures your login.
              </li>
            </ul>
            <p className="text-gray-300 text-sm">
              If you have shared your password, change it immediately and tell in-app live chat. If you are locked out,
              the{" "}
              <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline">
                login and password reset guide
              </Link>{" "}
              explains recovery by SMS.
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Code invalid, expired or already used: troubleshooting</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-700">
              <table className="min-w-full text-sm text-gray-300">
                <thead className="bg-[#0A1029] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">Message</th>
                    <th className="py-3 px-4 text-left font-semibold">Likely cause</th>
                    <th className="py-3 px-4 text-left font-semibold">Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {TROUBLESHOOTING.map(([msg, cause, fix]) => (
                    <tr key={msg}>
                      <td className="py-3 px-4 font-medium text-white">{msg}</td>
                      <td className="py-3 px-4">{cause}</td>
                      <td className="py-3 px-4">{fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Still stuck? Use the 24/7 in-app live chat, which can see your account. Our{" "}
              <Link href="/royal-x-casino-contact-us" className="text-accent hover:underline">
                website contact page
              </Link>{" "}
              reaches this site&apos;s team only.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino redeem code FAQs</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
                  <summary className="p-4 cursor-pointer text-white font-medium hover:text-[#FFA500]">{faq.q}</summary>
                  <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50 text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="pt-4 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Get the {APP_INFO.version} app, then join the official channels</h2>
            <div className="flex flex-col items-center gap-3">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>Download Royal X Casino APK</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <DownloadIcon />
                </div>
              </a>
              <Disclosure />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mt-6 max-w-2xl mx-auto">
              18+ only. Royal X Casino is a real-money gambling app; bonus credit does not change the fact that you can
              lose what you deposit. Set a budget and read our{" "}
              <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-[#0ea5e9] underline underline-offset-2">
                responsible gaming guide
              </Link>
              .
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
