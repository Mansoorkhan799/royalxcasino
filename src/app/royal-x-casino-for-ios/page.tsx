import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import FaqSchema, { FaqItem } from "@/components/FaqSchema";

const PAGE_URL = `${SITE_URL}/royal-x-casino-for-ios`;
const TITLE = "Royal X Casino for iOS: Play on iPhone and iPad (2026)";
const DESCRIPTION =
  "No Royal X Casino iOS app or IPA exists. Play on iPhone and iPad in Safari, add it to your Home Screen, pay with EasyPaisa or JazzCash. Honest guide with FAQs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Royal X Casino",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/royal-x-casino-games.webp`,
        width: 1200,
        height: 540,
        alt: "Royal X Casino game grid as shown in the browser version used on iPhone and iPad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/royal-x-casino-games.webp`],
  },
};

/* Data shared between the visible list and the JSON-LD (must stay identical) */

const IOS_STEPS = [
  {
    name: "Open the link in Safari",
    text: "Tap the button on this page in Safari on your iPhone or iPad. The operator's page detects iOS and loads the browser version of the game. Nothing downloads and no profile or certificate is requested; if a site asks you to install one, leave it.",
  },
  {
    name: "Register or log in",
    text: "New players enter a Pakistani +92 mobile number, type the SMS code, set a password and add an optional referral code. Existing players log in with the same number and password used on Android.",
  },
  {
    name: "Add the game to your Home Screen",
    text: "Tap the Share icon at the bottom of Safari, scroll to Add to Home Screen, keep or edit the name and tap Add. An icon appears next to your other apps and opens the game full screen without the Safari address bar.",
  },
  {
    name: "Launch from the icon and let assets load",
    text: "Open the icon, wait for the game assets to load on Wi-Fi the first time, then play. Because this is the web version, you always get the current release and never need to reinstall.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Is there a Royal X Casino app for iPhone?",
    a: "No. There is no Royal X Casino iOS app on the App Store, no IPA file and no configuration profile. The only legitimate way to play on iPhone or iPad is the browser version opened in Safari, which you can add to your Home Screen for an app-like icon.",
  },
  {
    q: "Can I download Royal X Casino from TestFlight?",
    a: "No. The operator does not distribute the game through TestFlight. Any TestFlight invite, IPA file or profile labelled Royal X Casino iOS comes from a third party and should be treated as a scam or malware.",
  },
  {
    q: "Does the iPhone browser version have all the games?",
    a: "Yes. The same 200+ titles are available: Teen Patti variants, Rummy, Andar Bahar, Dragon vs Tiger, 7 Up Down, Roulette, Baccarat, crash-style games, fishing arcades and slots. Game catalogues and bonuses are tied to the account, not the device.",
  },
  {
    q: "How do I deposit on iPhone?",
    a: "Open Deposit in the game, choose EasyPaisa, JazzCash, bank transfer or USDT, enter an amount from Rs. 100 to Rs. 50,000 and approve the payment in your wallet app as you normally would. EasyPaisa and JazzCash deposits are usually credited within minutes.",
  },
  {
    q: "Can I withdraw to EasyPaisa or JazzCash from iPhone?",
    a: "Yes. Withdrawals work the same way in the browser version: Rs. 600 to Rs. 50,000 per request to EasyPaisa or JazzCash, typically paid in 10 to 30 minutes. The wallet name must match the name on your account.",
  },
  {
    q: "Can I use my Android account on iPhone?",
    a: "Yes. Log in with the same +92 number and password. Your balance, bonus credit, VIP level and referral earnings are stored on the server and appear on any device you sign in from.",
  },
  {
    q: "Does Chrome on iPhone work too?",
    a: "The game loads in Chrome on iOS, but Add to Home Screen behaves most reliably in Safari, and Safari is the browser Apple keeps most tightly integrated with iOS updates. Use Safari for the shortcut and for the smoothest play.",
  },
];

const PlayIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

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

export default function RoyalXCasinoForIOSPage() {
  return (
    <>
      <HowToSchema
        name="How to play Royal X Casino on iPhone and iPad"
        description="Four steps to open the Royal X Casino browser version in Safari, sign in and add it to the iOS Home Screen. No iOS app, IPA or profile is involved."
        steps={IOS_STEPS}
        url="/royal-x-casino-for-ios"
      />
      <FaqSchema faqs={FAQS} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Royal X Casino for iOS", url: "/royal-x-casino-for-ios" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Royal X Casino for iOS: <span className="text-[#FFA500]">How to Play on iPhone and iPad</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            The honest answer first: there is no Royal X Casino iOS app. It is not on the App Store, there is no IPA
            file, and there is no configuration profile to install. What does exist is a browser version that runs in
            Safari on any iPhone or iPad, with the same account, games, bonuses and EasyPaisa and JazzCash payments as
            the Android{" "}
            <Link href="/" className="text-accent hover:underline">
              Royal X Casino APK
            </Link>
            . This page shows how to set it up and what to watch out for.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
            >
              <span>Play Royal X Casino in Safari</span>
              <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                <PlayIcon />
              </div>
            </a>
            <Disclosure />
          </div>
        </div>
        <div className="mt-10 max-w-4xl mx-auto">
          <Image
            src="/royal-x-casino-games.webp"
            alt="Royal X Casino game grid with slot, card and fishing thumbnails in the browser version"
            width={1200}
            height={540}
            className="rounded-xl border border-gray-700 w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </section>

      {/* Steps */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            How to play Royal X Casino on iPhone or iPad
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Setup takes two or three minutes and needs nothing beyond Safari and a Pakistani mobile number for the SMS
            code. The Home Screen step is optional but makes the game open like an app.
          </p>
          <ol className="space-y-4">
            {IOS_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-gray-300 text-sm mt-6">
            New to the app? The{" "}
            <Link href="/how-to-register-royal-x-casino" className="text-accent hover:underline">
              registration guide
            </Link>{" "}
            walks through the number, OTP and password screens, and the{" "}
            <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline">
              login guide
            </Link>{" "}
            covers OTP delays and password resets.
          </p>
        </div>
      </section>

      {/* iOS vs Android table */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            What works on iPhone and what differs from Android
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Everything tied to your account behaves identically. The differences come from the fact that one is an
            installed app and the other is a web page.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#0A1029] text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Feature</th>
                  <th className="py-3 px-4 text-left font-semibold">iPhone and iPad (browser)</th>
                  <th className="py-3 px-4 text-left font-semibold">Android (APK)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Games", "All 200+ titles", "All 200+ titles"],
                  ["Account and balance", "Same login, same wallet", "Same login, same wallet"],
                  ["Deposits and withdrawals", "EasyPaisa, JazzCash, bank transfer, USDT", "EasyPaisa, JazzCash, bank transfer, USDT"],
                  ["Bonuses and VIP", "Identical; tied to the account", "Identical; tied to the account"],
                  ["Install file", "None; nothing to download", `${APP_INFO.size} APK, sideloaded`],
                  ["Updates", "Automatic; always the current web version", `Manual; reinstall when ${APP_INFO.version} is replaced`],
                  ["Home Screen icon", "Safari shortcut via Add to Home Screen", "Real app icon"],
                  ["Storage used", "Safari cache; assets may reload after clearing", "Roughly 600 MB after game assets download"],
                  ["Push notifications", "May be limited for a web shortcut", "Standard app notifications"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`py-3 px-4 align-top ${i === 0 ? "font-medium text-white" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            Deposits and withdrawals on iPhone with EasyPaisa and JazzCash
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Payments are handled inside the game, so the browser version uses exactly the same flow as the app. Open
            Deposit, pick EasyPaisa, JazzCash, bank transfer or USDT, enter an amount between Rs. 100 and Rs. 50,000 and
            approve it in your wallet app. EasyPaisa and JazzCash deposits are usually credited instantly or within a few
            minutes; bank transfer can take up to about 30 minutes and is for deposits only. There is no deposit fee.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Withdrawals to EasyPaisa or JazzCash run from Rs. 600 to Rs. 50,000 per request and are typically paid in 10
            to 30 minutes, longer at peak times or for a first withdrawal while details are verified. The name on the
            wallet must match your account details. Bonus credit may need some betting turnover before it can be
            withdrawn; check the in-app bonus terms rather than assuming.
          </p>
          <p className="text-gray-300 text-sm">
            Step-by-step screens are in the{" "}
            <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline">
              EasyPaisa and JazzCash deposit guide
            </Link>{" "}
            and the{" "}
            <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">
              withdrawal guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Scam warnings + tips */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-amber-900/20 rounded-xl p-8 border border-amber-700/50">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">Fake Royal X Casino iOS downloads to avoid</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Because people search for an iPhone version, third-party sites fill the gap with files that are not from
              the operator. Treat all of the following as unsafe:
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>
                <strong className="text-white">IPA files</strong> offered for sideloading. The operator does not publish
                one, so whatever is inside was packaged by someone else.
              </li>
              <li>
                <strong className="text-white">Configuration profiles or certificates</strong> you are asked to trust in
                Settings. A profile can route your traffic or install unwanted apps.
              </li>
              <li>
                <strong className="text-white">TestFlight invites</strong> or &quot;beta&quot; links labelled Royal X
                Casino iOS. No official beta exists.
              </li>
              <li>
                <strong className="text-white">Pages asking for your Apple ID</strong> or a payment to unlock an iOS
                download. The real game is free to access and registers you with a +92 number only.
              </li>
            </ul>
            <p className="text-gray-300 text-sm mt-4">
              If you already installed a profile, remove it under Settings, General, VPN and Device Management. For a
              wider look at the operator&apos;s legitimacy, read{" "}
              <Link href="/blog/is-royal-x-casino-real-or-fake" className="text-accent hover:underline">
                Is Royal X Casino Real or Fake? Evidence-Based Answer 2026
              </Link>
              .
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Performance tips for Royal X Casino on iPhone</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Use Safari, not an in-app browser.</strong> Links opened inside WhatsApp
                or Facebook run in a limited web view and cannot add a Home Screen icon.
              </li>
              <li>
                <strong className="text-white">Keep iOS and Safari updated.</strong> Browser updates ship with iOS, and
                older versions can struggle with newer game assets.
              </li>
              <li>
                <strong className="text-white">Leave free storage.</strong> Safari drops cached assets when the phone is
                nearly full, which forces long reloads each time you open the game.
              </li>
              <li>
                <strong className="text-white">Close other tabs and apps</strong> before live card tables, and switch off
                Low Power Mode, which throttles performance.
              </li>
              <li>
                <strong className="text-white">Prefer Wi-Fi for the first load.</strong> Game assets download on first
                launch; after that, a stable 4G connection is enough.
              </li>
              <li>
                <strong className="text-white">If the game freezes,</strong> clear Safari history and website data,
                reopen the link and sign in again. Your balance is on the server, so nothing is lost.
              </li>
            </ul>
            <p className="text-gray-300 text-sm mt-4">
              Prefer a bigger screen? The{" "}
              <Link href="/royal-x-casino-for-pc" className="text-accent hover:underline">
                Royal X Casino for PC guide
              </Link>{" "}
              covers browser play and emulators on Windows and Mac.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino for iOS FAQs</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
                <summary className="p-4 cursor-pointer text-white font-medium hover:text-[#FFA500]">{faq.q}</summary>
                <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible gaming */}
      <section className="pt-4 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <p className="text-gray-400 text-sm leading-relaxed">
          Whether you play on iPhone or Android, Royal X Casino is a real-money gambling product for players aged 18 and
          over. You can lose the money you deposit, and online gambling sits in a legal grey area in Pakistan. Set a
          limit before you add the icon to your Home Screen and read our{" "}
          <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">
            Responsible Gaming Guide for Royal X Casino Players
          </Link>
          .
        </p>
      </section>
    </>
  );
}
