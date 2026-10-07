import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  DOWNLOAD_URL,
  SITE_URL,
  APP_INFO,
  APP_RATING,
  RATING_COUNT_DISPLAY,
} from "@/lib/config";
import TableOfContentsAccordion from "@/components/TableOfContentsAccordion";

export const metadata: Metadata = {
  title: "Royal X Casino APK Pakistan | Download 2026 | Real Money",
  description:
    "Royal X Casino APK for Android: 200+ Teen Patti, slot and fishing games, EasyPaisa and JazzCash payments, bonuses, VIP levels and an honest safety review for Pakistan.",
  keywords: [
    "Royal X Casino",
    "Royal X Casino APK",
    "Royal X Casino 777",
    "Royal X Casino Pakistan",
    "download royal x casino",
    "real money games Pakistan",
    "Teen Patti",
    "JazzCash",
    "EasyPaisa",
  ],
  openGraph: {
    title: "Royal X Casino APK Pakistan | Download 2026",
    description:
      "Download the Royal X Casino APK, see every bonus and payment method, and read an honest safety review before you play.",
    url: SITE_URL,
    siteName: "Royal X Casino",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/royal-x-casino.webp`,
        width: 1200,
        height: 1200,
        alt: "Royal X Casino app icon: gold logo with a casino chip on a golden casino hall background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal X Casino APK Pakistan | Download 2026",
    description:
      "Download the Royal X Casino APK, see every bonus and payment method, and read an honest safety review before you play.",
    images: [`${SITE_URL}/royal-x-casino.webp`],
  },
  alternates: { canonical: SITE_URL },
};

/* ------------------------------------------------------------------ */
/* Data shared between visible UI and JSON-LD (must stay identical)    */
/* ------------------------------------------------------------------ */

const INSTALL_STEPS = [
  {
    name: "Open the download page",
    text: "Visit royalexcasino.com.pk on your Android phone and tap the Download APK button. The file is about 8.9 MB.",
  },
  {
    name: "Allow installs from this source",
    text: "When Android asks, open Settings and enable Install unknown apps (or Allow from this source) for your browser.",
  },
  {
    name: "Install the APK",
    text: "Open the downloaded file from your Downloads folder or notification bar and tap Install. Installation takes 10 to 15 seconds.",
  },
  {
    name: "Launch and register",
    text: "Tap the Royal X Casino icon, create your account with your phone number and verify the SMS code.",
  },
];

const REGISTER_STEPS = [
  { name: "Open the app", text: "Launch Royal X Casino and tap Register or Sign Up on the welcome screen." },
  {
    name: "Enter your details",
    text: "Add a username, your mobile number, an email address and a password of at least 8 characters.",
  },
  { name: "Verify your phone", text: "Type the one-time code sent to you by SMS." },
  {
    name: "Bind a referral ID (optional)",
    text: "If a friend invited you, enter their referral ID during sign-up; it usually cannot be added afterwards.",
  },
  {
    name: "Accept the terms and finish",
    text: "Read the terms, tap Register, and the welcome bonus is credited to your wallet.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I download the Royal X Casino APK in Pakistan?",
    a: "Open royalexcasino.com.pk on your Android phone, tap Download APK, allow installs from your browser when Android asks, then open the file and tap Install. The whole process takes under two minutes.",
  },
  {
    q: "Is the Royal X Casino app on the Google Play Store real?",
    a: "No. The listing called 'royal x casino' on Google Play is an unofficial guide app made by a third party. It contains ads and does not let you play, deposit or withdraw. The real game is only distributed as an APK file.",
  },
  {
    q: "Is Royal X Casino safe to use?",
    a: "The app encrypts connections with SSL, verifies identity (KYC) before large withdrawals and uses EasyPaisa and JazzCash gateways. It is still a real-money gambling app: you can lose money, and you should confirm the licence and the law in your area before depositing.",
  },
  {
    q: "Can I win real money on Royal X Casino?",
    a: "Yes. Winnings from games, bonuses and referral rewards can be withdrawn to EasyPaisa, JazzCash or USDT. Losses are also real, so set a budget before you play.",
  },
  {
    q: "How do I withdraw money from Royal X Casino?",
    a: "Open Withdraw in the app, choose EasyPaisa or JazzCash (Rs. 600 to Rs. 50,000) or USDT (Rs. 50,000 to Rs. 500,000), enter the amount and account details and confirm. Most payouts arrive within 10 to 30 minutes.",
  },
  {
    q: "What is the minimum deposit on Royal X Casino?",
    a: "The minimum deposit is Rs. 100 and the maximum per transaction is Rs. 50,000. Your first deposit earns a 20 percent recharge rebate.",
  },
  {
    q: "Does Royal X Casino have wagering requirements on bonuses?",
    a: "According to the in-app bonus terms, bonus credit can be withdrawn without a playthrough requirement. Always read the terms attached to each promotion inside the app, because individual offers can differ.",
  },
  {
    q: "Which payment methods does Royal X Casino accept?",
    a: "EasyPaisa, JazzCash, Pakistani bank transfer and USDT. EasyPaisa and JazzCash are the fastest for both deposits and withdrawals.",
  },
  {
    q: "Is Royal X Casino available for iPhone or PC?",
    a: "The native app is Android only. iPhone users can play through the mobile browser version and PC users can run the APK in an Android emulator such as BlueStacks. We have separate guides for both.",
  },
  {
    q: "Is a Royal X Casino mod or hack APK available?",
    a: "No legitimate one exists. Files advertised as mod, hack or unlimited-coins versions are either malware or get the account banned when the server detects them. Install only the official APK from this site.",
  },
  {
    q: "How do I update Royal X Casino to the latest version?",
    a: "Download the newest APK from royalexcasino.com.pk and install it over the existing app; your account and balance stay intact. If the installer reports a signature conflict, uninstall the old version first and log back in.",
  },
  {
    q: "What is Royal X Casino 777?",
    a: "Royal X Casino 777 and RoyalX777 are alternative names players and some websites use for the same Royal X Casino app. There is no separate 777 edition.",
  },
  {
    q: "How does the Royal X Casino agent programme work?",
    a: "Agents promote the app and earn commission on the deposits of players who register through their link. You apply from the Agent or Promotion section inside the app after creating an account.",
  },
  {
    q: "Can I play Royal X Casino without depositing?",
    a: "Yes. The Rs. 10 welcome bonus, daily login rewards and free-trial game modes let you try the games before spending anything, although real-money withdrawals require a verified account.",
  },
];

const PAYMENT_METHODS = [
  ["EasyPaisa", "Rs. 100 – 50,000", "Rs. 600 – 50,000", "Deposit instant / payout 10–30 min", "None"],
  ["JazzCash", "Rs. 100 – 50,000", "Rs. 600 – 50,000", "Deposit instant / payout 10–30 min", "None"],
  ["Bank transfer", "Rs. 100 – 50,000", "Deposits only", "Up to 30 min", "None"],
  ["USDT", "Rs. 100 – 50,000", "Rs. 50,000 – 500,000", "Depends on network", "Network fee"],
];

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const Stars = ({ value }: { value: number }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="text-amber-400 tracking-tight" aria-hidden="true">
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
};

const Disclosure = () => (
  <p className="text-gray-500 text-xs text-center max-w-md mx-auto">
    The Download APK button opens the operator&apos;s referral link. We may receive a commission when you register
    through it, at no cost to you. Details in our{" "}
    <Link href="/disclaimer" className="underline hover:text-gray-300">
      disclaimer
    </Link>
    .
  </p>
);

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Royal X Casino",
        description:
          "Royal X Casino APK guide for Pakistan: download, bonuses, payment methods, safety review and FAQs.",
        inLanguage: "en-PK",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Royal X Casino",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/royal-x-casino-logo.webp`,
          width: 512,
          height: 512,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: APP_INFO.name,
        alternateName: ["Royal X Casino 777", "RoyalX777"],
        operatingSystem: APP_INFO.androidMin,
        applicationCategory: "GameApplication",
        image: `${SITE_URL}/royal-x-casino.webp`,
        screenshot: `${SITE_URL}/royal-x-casino-games.webp`,
        softwareVersion: APP_INFO.version,
        fileSize: APP_INFO.size,
        datePublished: APP_INFO.updatedISO,
        downloadUrl: `${SITE_URL}/royal-x-casino-download`,
        installUrl: `${SITE_URL}/royal-x-casino-download`,
        countriesSupported: "PK",
        description:
          "Real-money casino app for Android with Teen Patti, Andar Bahar, slots, fishing and crash games. Deposits and withdrawals via EasyPaisa and JazzCash.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: APP_RATING.value,
          bestRating: APP_RATING.best,
          ratingCount: APP_RATING.count,
        },
      },
      {
        "@type": "HowTo",
        name: "How to download and install the Royal X Casino APK on Android",
        totalTime: "PT3M",
        tool: [{ "@type": "HowToTool", name: "Android phone running Android 5.0 or newer" }],
        step: INSTALL_STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          url: `${SITE_URL}/#how-to-download`,
        })),
      },
      {
        "@type": "HowTo",
        name: "How to register a Royal X Casino account",
        totalTime: "PT2M",
        step: REGISTER_STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          url: `${SITE_URL}/#how-to-register`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      {/* Server-rendered JSON-LD so crawlers see it without executing JS */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Royal X Casino APK: <span className="text-[#FFA500]">Download and Play</span> Real Money Games in Pakistan
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-200">
              Teen Patti, slots, fishing and crash games with EasyPaisa and JazzCash payments
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>Royal X Casino</strong> is an Android casino app built for Pakistani players. This page gives you
              the current APK, a step-by-step install guide, every bonus and payment limit, and an honest look at the
              risks before you deposit a single rupee.
            </p>

            {/* Visible rating block – values come from the same constants as the JSON-LD */}
            <div
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-300"
              aria-label={`Rated ${APP_RATING.value} out of ${APP_RATING.best} by ${RATING_COUNT_DISPLAY} players`}
            >
              <span className="text-white font-bold text-base">{APP_RATING.value}</span>
              <Stars value={Number(APP_RATING.value)} />
              <span>({RATING_COUNT_DISPLAY} ratings)</span>
              <span aria-hidden="true">·</span>
              <span>Free</span>
              <span aria-hidden="true">·</span>
              <span>Android</span>
              <span aria-hidden="true">·</span>
              <span>Game</span>
            </div>

            <div className="flex flex-col items-center gap-3 my-6">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>Download Royal X Casino APK</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <DownloadIcon />
                </div>
              </a>
              <Disclosure />
            </div>

            <div className="bg-[#0A1029] rounded-xl p-4 border border-gray-800">
              <h2 className="text-lg font-bold mb-3 text-[#FFA500]">Device requirements</h2>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• {APP_INFO.androidMin} (Android 7.0 or newer recommended)</li>
                <li>• 2 GB RAM or more</li>
                <li>• At least 600 MB free storage for the app and downloaded game assets</li>
                <li>• Stable 3G, 4G or Wi-Fi connection</li>
              </ul>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              18+ only. Royal X Casino is a real-money gambling app; you can lose the money you deposit. Online gambling
              laws vary across Pakistan, so check the rules that apply to you before playing. Read our{" "}
              <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-[#0ea5e9] underline underline-offset-2">
                responsible gaming guide
              </Link>
              .
            </p>
          </div>

          {/* Hero image – desktop */}
          <div className="hidden md:block md:w-1/2 md:mt-8">
            <div className="relative ml-auto" style={{ width: "320px", height: "320px" }}>
              <Image
                src="/royal-x-casino.webp"
                alt="Royal X Casino app icon: gold Royal X Casino logo with a casino chip on a golden casino hall background"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority
                fetchPriority="high"
                sizes="320px"
              />
            </div>
          </div>
          {/* Hero image – mobile */}
          <div className="mt-8 md:hidden">
            <div className="relative mx-auto" style={{ width: "280px", height: "280px" }}>
              <Image
                src="/royal-x-casino.webp"
                alt="Royal X Casino app icon: gold Royal X Casino logo with a casino chip on a golden casino hall background"
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl"
                priority
                fetchPriority="high"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino APK details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App name", APP_INFO.name],
                ["Also known as", APP_INFO.alsoKnownAs],
                ["Category", APP_INFO.category],
                ["Latest version", APP_INFO.version],
                ["APK size", APP_INFO.size],
                ["Requires", APP_INFO.androidMin],
                ["Last updated", APP_INFO.updated],
                ["Rating", `${APP_RATING.value} / ${APP_RATING.best} from ${RATING_COUNT_DISPLAY} ratings`],
                ["Price", "Free"],
                ["Country", "Pakistan"],
                ["Payments", "EasyPaisa, JazzCash, bank transfer, USDT"],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-[#0a1029]/50" : "bg-[#06091F]/50"}>
                  <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-left text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          <strong className="text-gray-300">Version note:</strong> {APP_INFO.version} is the build currently shown on
          the app&apos;s loading screen. Older builds and their sizes are listed on the{" "}
          <Link href="/royal-x-casino-old-versions" className="text-accent hover:underline">
            previous versions page
          </Link>
          .
        </p>
        <div className="flex flex-col items-center gap-3 mt-6">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center border-2 border-[#0ea5e9]"
          >
            <span className="text-lg">DOWNLOAD APK ({APP_INFO.size})</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <DownloadIcon />
            </div>
          </a>
          <Disclosure />
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <TableOfContentsAccordion />
      </section>

      {/* Overview */}
      <section id="overview" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino app overview for Pakistani players</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Royal X Casino packs more than 200 casino-style games into a single 8.9 MB Android app. The catalogue mixes
            the card games Pakistanis already know, such as Teen Patti and Andar Bahar, with international slots, fish
            shooting arcades, crash multipliers and virtual sports. Everything runs inside one login, with one wallet that
            you top up through EasyPaisa or JazzCash.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Because the app is not distributed through Google Play, most players find it through sites like this one.
            That makes it important to understand what you are installing: who publishes it, how money moves in and out,
            what the bonus terms really say, and where the risks are. Each section below answers one of those questions
            so you can decide with full information rather than marketing claims.
          </p>
          <div className="bg-[#0A1029] rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-3 text-white">At a glance</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span> <span><strong>200+ games</strong> across cards, slots, fishing, crash and sports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span> <span><strong>Local payments</strong> through EasyPaisa, JazzCash and Pakistani banks, minimum deposit Rs. 100</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span> <span><strong>Withdrawals in 10 to 30 minutes</strong> for EasyPaisa and JazzCash, minimum Rs. 600</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span> <span><strong>Bonuses without playthrough</strong> according to the in-app terms (read each offer)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span> <span><strong>Light install</strong>: 8.9 MB APK that runs on Android 5.0 and 2 GB RAM phones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">!</span> <span><strong>Real-money risk</strong>: not on Google Play, no public licence number, losses are possible</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What is Royal X Casino */}
      <section id="what-is-royal-x-casino" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">What is Royal X Casino Pakistan?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Royal X Casino is a mobile casino platform aimed at players in Pakistan and neighbouring markets. Some
            websites and YouTube channels call it Royal X Casino 777 or RoyalX777; these names all refer to the same app.
            It offers real-money versions of popular card games alongside slots and arcade titles, and it settles
            payments in Pakistani rupees through local wallets.
          </p>
          <p className="text-gray-300 mb-2">The library is organised into six groups:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><strong>Card games:</strong> Teen Patti, Andar Bahar, Poker, Blackjack, Rummy, Baccarat, Dragon Tiger</li>
            <li><strong>Slots:</strong> God of Wealth, Fortune Tiger, Money Mania, Rising Fortunes, 777 Fruit</li>
            <li><strong>Fishing arcades:</strong> Fish Shooting, Fishdom, Mythical Animals, Jungle Tiger</li>
            <li><strong>Crash and quick games:</strong> Crash, Mines, Plinko, Limbo, Dice, Hilo</li>
            <li><strong>Table and casual:</strong> Roulette, Sic Bo, Ludo, Wingo, Snakes and Ladders</li>
            <li><strong>Virtual sports:</strong> Cricket Battle, Football, Horse Racing, Sabong</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-accent">How the money side works</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Deposit from Rs. 100 using EasyPaisa, JazzCash, bank transfer or USDT</li>
            <li>Play with the deposited balance plus any bonus credit</li>
            <li>Withdraw winnings from Rs. 600 to EasyPaisa or JazzCash, usually within 30 minutes</li>
            <li>Earn extra through referral rebates, VIP level rewards and the agent programme</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-accent">Who it suits</h3>
          <p className="text-gray-300 leading-relaxed">
            The app is a good fit for players who already enjoy Teen Patti or slots and want local payment rails and a
            small download. It is a poor fit for anyone looking for guaranteed income: outcomes are random or
            house-edged, and the responsible approach is to treat any deposit as entertainment spending.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section id="key-features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Key features of the Royal X Casino app</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "200+ games in one wallet",
                desc: "Cards, slots, fishing, crash and sports share a single balance, so you move between a Teen Patti table and a Fortune Tiger spin without transfers or separate logins.",
              },
              {
                title: "Bonus credit without playthrough",
                desc: "The in-app bonus terms allow welcome, login and rebate credit to be withdrawn without wagering it first. Check each promotion's own terms, since event bonuses can differ.",
              },
              {
                title: "EasyPaisa and JazzCash payouts in minutes",
                desc: "Withdrawals to Pakistan's two main wallets are typically confirmed in 10 to 30 minutes, with a Rs. 600 minimum and Rs. 50,000 maximum per request.",
              },
              {
                title: "Encrypted connection and KYC",
                desc: "Traffic is protected with SSL and identity verification is required before large withdrawals, which also prevents someone else cashing out from your account.",
              },
              {
                title: "Layered rewards",
                desc: "A Rs. 10 welcome credit, a 20 percent first-deposit rebate, daily login rewards, weekly promotions, referral rebates and VIP level-up bonuses stack on top of each other.",
              },
              {
                title: "Private rooms with friends",
                desc: "Create a password-protected table for four to six friends to play Teen Patti or Andar Bahar together, with in-room chat.",
              },
              {
                title: "8.9 MB install",
                desc: "The APK is small enough for entry-level phones on Android 5.0 with 2 GB RAM; game assets stream on demand instead of being bundled.",
              },
              {
                title: "Game rules and odds in-app",
                desc: "Every game opens with a rules panel and paytable, so you can see what each hand or symbol pays before placing a bet.",
              },
              {
                title: "Live chat support",
                desc: "Support is reachable from the profile menu around the clock for deposit, withdrawal and account questions.",
              },
              {
                title: "No third-party ads",
                desc: "Unlike the unofficial Play Store guide app, the real game shows only its own promotions and no external ad network.",
              },
              {
                title: "Leaderboards and tournaments",
                desc: "Three ranking boards (betting volume, deposits and referrals) pay cash and VIP rewards to top players each cycle.",
              },
              {
                title: "Cashpot and Grab Coins extras",
                desc: "A shared Cashpot jackpot grows with every bet placed across the app, and the Grab Coins mini-game hands out small free credits several times a day.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-[#0A1029] px-6 py-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-accent">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Available */}
      <section id="games-available" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Complete games list: 200+ titles on Royal X Casino</h2>
          <p className="text-gray-300 mb-6">
            Every game below is playable from the same wallet. The most-played titles in Pakistan are Teen Patti, Andar
            Bahar, God of Wealth and Crash.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Card games", "Teen Patti, Andar Bahar, Andar Bahar Multiplayer, Texas Hold'em, Poker, Blackjack, Baccarat, Rummy, Point Rummy, Dragon Tiger, 7 Up Down, Red vs Black, Jhandi Munda"],
              ["Slot games", "God of Wealth, Fortune Tiger, Money Mania, Rising Fortunes, 777 Fruit, Fruit Mary, 88 Fortunes, Phoenix, Lucky Bingo, Father Kim, Trump It"],
              ["Fishing games", "Fish Shooting, Fishdom, Mythical Animals, Jungle Tiger"],
              ["Crash and quick games", "Crash, Crash II, Mines, Plinko, Limbo, Dice, Toss A Coin, Color Game, Hilo, Direction Bounty"],
              ["Table and casual", "Roulette, Zoo Roulette, Sic Bo, Snakes and Ladders, Ludo, Quick Ludo, Crazy Ludo, Wingo"],
              ["Virtual sports", "Cricket Battle, Football Betting, Horse Racing, Sabong"],
            ].map(([title, list]) => (
              <div key={title}>
                <h3 className="text-lg font-bold mb-2 text-accent">{title}</h3>
                <p className="text-gray-300 text-sm">{list}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0A1029] rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-3 text-[#FFA500]">Guides to specific games</h3>
            <ul className="text-gray-300 text-sm space-y-1 list-disc pl-5">
              <li>
                <Link href="/blog/royal-x-casino-dragon-vs-tiger-andar-bahar-high-payout-games" className="text-accent hover:underline">
                  Dragon Tiger and Andar Bahar: how the payouts compare
                </Link>
              </li>
              <li>
                <Link href="/blog/fishing-games-royal-x-casino-tutorial-2026" className="text-accent hover:underline">
                  Fishing games tutorial for beginners
                </Link>
              </li>
              <li>
                <Link href="/blog/father-kim-slot-game-royal-x-casino-guide" className="text-accent hover:underline">
                  Father Kim slot walkthrough
                </Link>
              </li>
              <li>
                <Link href="/blog/trump-it-slot-game-royal-x-casino-2026" className="text-accent hover:underline">
                  Trump It slot features and bonus rounds
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="app-screenshots" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Royal X Casino app screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/royal-x-casino-app-landing-page.webp", alt: "Royal X Casino welcome screen with Register and Login buttons", caption: "Welcome screen with Register and Login" },
              { src: "/royal-x-casino-game-pakistan.webp", alt: "Royal X Casino lobby showing game category tabs", caption: "Game lobby and category tabs" },
              { src: "/royal-x-casino-games.webp", alt: "Royal X Casino games grid with slot and card game thumbnails", caption: "Part of the 200+ game library" },
              { src: "/royal-x-casino-registration-page.webp", alt: "Royal X Casino registration form asking for phone number and password", caption: "Registration form" },
              { src: "/royal-x-casino-deposit-money-interface.webp", alt: "Royal X Casino deposit screen with EasyPaisa and JazzCash options", caption: "Deposit screen: EasyPaisa and JazzCash" },
              { src: "/royal-x-casino-withdraw-money-interface.webp", alt: "Royal X Casino withdrawal screen with amount and wallet fields", caption: "Withdrawal request screen" },
              { src: "/royal-x-casino-refer-and-earn.webp", alt: "Royal X Casino refer-and-earn page showing a referral code", caption: "Refer-and-earn page" },
              { src: "/royal-x-casino-share-and-earn.webp", alt: "Royal X Casino share-and-earn promotion banner", caption: "Share-and-earn promotion" },
              { src: "/royal-x-casino-cashpot.webp", alt: "Royal X Casino Cashpot jackpot counter", caption: "Cashpot jackpot" },
              { src: "/royal-x-casino-grab-coins.webp", alt: "Royal X Casino Grab Coins mini-game screen", caption: "Grab Coins bonus mini-game" },
              { src: "/royal-x-casino-leaderboard.webp", alt: "Royal X Casino leaderboard listing top players by bets", caption: "Leaderboard rankings" },
              { src: "/royal-casino-daily-bonus.webp", alt: "Royal X Casino daily login bonus calendar", caption: "Daily login bonus calendar" },
            ].map(({ src, alt, caption }) => (
              <figure key={src} className="rounded-lg overflow-hidden border border-gray-700 bg-[#0A1029] flex flex-col">
                <Image src={src} alt={alt} width={1200} height={540} className="w-full h-auto object-contain" sizes="(max-width: 768px) 50vw, 25vw" />
                <figcaption className="px-3 py-2 text-sm text-gray-300 bg-[#0A1029]">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* How to Download */}
      <section id="how-to-download" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to download and install the Royal X Casino APK</h2>
          <p className="text-gray-300 mb-6">
            The game is distributed as an APK file rather than through Google Play, so Android will ask for one extra
            permission. The screenshots and steps below show exactly what to tap.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { src: "/how-to-download-step-01.webp", w: 2816, h: 1536, alt: "Android browser showing the Download APK button on royalexcasino.com.pk", label: "Step 01", title: "Download the APK", text: "Tap the Download APK button on this page" },
              { src: "/how-to-download-step-02.webp", w: 1024, h: 1024, alt: "Android settings screen with the Allow from this source toggle turned on", label: "Step 02", title: "Allow this source", text: "Enable Allow from this source for your browser" },
              { src: "/how-to-download-step-03.webp", w: 1024, h: 1024, alt: "Android installer dialog for Royal X Casino with the Install button", label: "Step 03", title: "Install", text: "Open the downloaded file and tap Install" },
            ].map((s) => (
              <div key={s.src} className="text-center">
                <div className="relative inline-block mb-3 w-full max-w-xs">
                  <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="(max-width: 768px) 90vw, 320px" className="rounded-lg border border-gray-700 w-full h-auto" />
                  <span className="absolute top-2 left-2 bg-[#FFA500] text-primary font-bold px-3 py-1 rounded text-sm">{s.label}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
          <ol className="space-y-4 mb-8">
            {INSTALL_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-4 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </li>
            ))}
          </ol>

          <h3 className="text-xl font-bold mb-2 text-accent">Why Royal X Casino is not on Google Play</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Google Play does not list real-money gambling apps for Pakistan, so the operator ships an APK instead. If
            you search the Play Store you will find a listing called &quot;royal x casino&quot; by a third-party
            developer. It is an unofficial guide app: it shows ads, has no games and cannot deposit or withdraw. Installing
            it wastes storage and, in some cases, pushes you to unrelated download links. The real game only comes as an
            APK.
          </p>

          <h3 className="text-xl font-bold mb-2 text-accent">Updating to the latest version</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            New builds are not pushed automatically. When a new version is listed in the table above, download it and
            install over the existing app; your login and balance remain. If Android reports a signature mismatch,
            uninstall the old build first and sign back in. Previous builds stay available on the{" "}
            <Link href="/royal-x-casino-old-versions" className="text-accent hover:underline">old versions page</Link>{" "}
            for phones that struggle with the current release.
          </p>

          <h3 className="text-xl font-bold mb-2 text-accent">Playing on PC or iPhone</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            The native app is Android only. Windows users can run the same APK in an emulator, explained in the{" "}
            <Link href="/royal-x-casino-for-pc" className="text-accent hover:underline">PC setup guide</Link>. iPhone and
            iPad users can play through Safari using the browser version covered in the{" "}
            <Link href="/royal-x-casino-for-ios" className="text-accent hover:underline">iOS guide</Link>.
          </p>

          <div className="bg-[#06091F] rounded-lg p-4 border border-gray-700">
            <h3 className="font-bold text-[#FFA500] mb-2">Troubleshooting install problems</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><strong>Install blocked:</strong> the unknown-sources permission is per app; enable it for the browser you downloaded with</li>
              <li><strong>App not installed:</strong> an older build with a different signature is present; uninstall it, then retry</li>
              <li><strong>Parse error:</strong> the download was interrupted; delete the file and download again on Wi-Fi</li>
              <li><strong>Crashes on launch:</strong> confirm Android 5.0+ and free up memory by closing background apps</li>
            </ul>
          </div>
          <p className="mt-4">
            <Link href="/royal-x-casino-download" className="text-accent hover:underline font-semibold">
              Read the full download guide with every Android version →
            </Link>
          </p>
        </div>
      </section>

      {/* Register & Login */}
      <section id="how-to-register" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to register and log in to Royal X Casino</h2>
          <p className="text-gray-300 mb-6">Creating an account takes about two minutes and needs only a Pakistani mobile number.</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-6">
            {REGISTER_STEPS.map((s) => (
              <li key={s.name}>
                <strong>{s.name}</strong> – {s.text}
              </li>
            ))}
          </ol>

          <h3 className="text-xl font-bold mb-2 text-accent">Logging in and recovering your password</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Return visits only need your mobile number and password. If you forget the password, tap Forgot Password on
            the login screen and a reset code is sent by SMS to the registered number. If the account locks after
            repeated wrong attempts, contact live chat from the login screen. Common sign-in errors and their fixes are covered
            in our{" "}
            <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline">login guide</Link> and the{" "}
            <Link href="/blog/royal-x-casino-login-problems-solutions" className="text-accent hover:underline">
              login problems troubleshooter
            </Link>
            .
          </p>
          <div className="bg-[#0A1029] rounded-lg p-4 border border-gray-700">
            <h3 className="font-bold text-accent mb-1">Tip</h3>
            <p className="text-gray-300 text-sm">
              Use the same name on your account as on your EasyPaisa or JazzCash wallet. KYC checks compare them, and a
              mismatch is the most common reason a first withdrawal is delayed. Full walkthrough in the{" "}
              <Link href="/how-to-register-royal-x-casino" className="text-accent hover:underline">registration guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses, VIP, Agent */}
      <section id="bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino bonuses, VIP levels and agent programme</h2>
          <p className="text-gray-300 mb-8">
            Rewards are where most of the confusion about this app comes from, so here is each one with the amount and
            the condition attached, as shown in the app at the time of writing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Welcome bonus", text: "Rs. 10 is credited as soon as registration completes. It is small, but it lets you open a table or spin a slot before depositing." },
              { title: "First-deposit rebate", text: "Your first recharge earns a 20 percent rebate: deposit Rs. 1,000 and Rs. 200 is added. The rebate is credited once, on the first deposit only." },
              { title: "Daily login and weekly rewards", text: "A seven-day login calendar pays increasing coin amounts; weekly promotions rotate between cashback on losses and deposit match offers." },
              { title: "Referral programme", text: "You receive Rs. 20 when an invited friend registers with your ID and up to Rs. 1,000 when their deposits reach Rs. 1,000. There is no cap on the number of referrals." },
              { title: "VIP levels", text: "Betting volume moves you from V1 upward. Each level-up pays a one-time bonus starting at Rs. 15, and from V1 a small monthly VIP payment (Rs. 11 and rising per level) lands automatically." },
              { title: "Agent programme", text: "Agents earn an ongoing commission on the deposits of players who join through their link, separate from one-off referral bonuses. Apply from the Agent or Promotion section after registering." },
            ].map((b) => (
              <div key={b.title} className="bg-[#0A1029] rounded-lg p-5 border border-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-accent">{b.title}</h3>
                <p className="text-gray-300 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm mt-6">
            Promotional redeem codes are released through the operator&apos;s official social channels; our{" "}
            <Link href="/royal-x-casino-redeem-code" className="text-accent hover:underline">redeem code page</Link> explains
            how to enter them. For a deeper look at VIP maths, read the{" "}
            <Link href="/blog/royal-x-casino-bonuses-vip-guide" className="text-accent hover:underline">bonuses and VIP guide</Link>.
          </p>
        </div>
      </section>

      {/* Deposit & Withdraw */}
      <section id="deposit-withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Deposit and withdrawal methods: EasyPaisa, JazzCash, bank transfer and USDT</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700 mb-8">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#0A1029] text-white">
                <tr>
                  {["Method", "Deposit range", "Withdrawal range", "Processing time", "Fee"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {PAYMENT_METHODS.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`py-3 px-4 ${i === 0 ? "font-medium text-white" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">How to deposit</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
                <li>Log in and tap <strong>Wallet</strong>, then <strong>Deposit</strong></li>
                <li>Pick EasyPaisa, JazzCash, bank transfer or USDT</li>
                <li>Enter an amount between Rs. 100 and Rs. 50,000</li>
                <li>Approve the payment in your wallet app; the balance updates within a minute</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">How to withdraw</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
                <li>Tap <strong>Wallet</strong>, then <strong>Withdraw</strong></li>
                <li>Choose EasyPaisa or JazzCash (Rs. 600 to Rs. 50,000) or USDT (Rs. 50,000 to Rs. 500,000)</li>
                <li>Enter the account number registered in your own name and confirm</li>
                <li>Track the request under <strong>History</strong>; EasyPaisa and JazzCash usually land in 10 to 30 minutes</li>
              </ol>
            </div>
          </div>
          <div className="bg-[#0A1029] rounded-lg p-6 border border-gray-700">
            <h3 className="font-bold text-white mb-2">Things that delay a withdrawal</h3>
            <ul className="text-gray-300 text-sm space-y-1 list-disc pl-5">
              <li>Wallet account name different from the name on your Royal X Casino profile (KYC mismatch)</li>
              <li>A first withdrawal or an unusually large one, which can be held for a manual review</li>
              <li>Wrong account number or an EasyPaisa/JazzCash wallet that is inactive or over its monthly limit</li>
            </ul>
          </div>
          <p className="mt-4 text-sm">
            <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline mr-4">Step-by-step deposit guide</Link>
            <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">Withdrawal guide with screenshots</Link>
          </p>
        </div>
      </section>

      {/* Ways to play */}
      <section id="how-to-earn" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Ways to play and win on Royal X Casino</h2>
          <p className="text-gray-300 mb-6">
            There is no strategy that beats the house edge over time, but these are the ways balances actually grow in
            the app, ranked by how much they depend on luck.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Referral rebates", items: ["Share your ID on WhatsApp or Facebook", "Rs. 20 per registered friend, up to Rs. 1,000 as they deposit", "Paid regardless of whether you play"] },
              { title: "Bonuses and promotions", items: ["Rs. 10 welcome credit and 20 percent first-deposit rebate", "Daily login calendar and weekly cashback", "Redeem codes from official channels"] },
              { title: "Agent commission", items: ["Ongoing share of deposits from players you bring in", "Requires approval and an active network", "Suits people who already run gaming groups"] },
              { title: "Skill-leaning card games", items: ["Teen Patti and Poker reward reading opponents and folding early", "Private rooms let you practise with friends", "Variance is still high; bankroll limits matter"] },
              { title: "Tournaments and leaderboards", items: ["Betting, deposit and referral boards pay cash and VIP points", "Best for high-volume players", "Prize pools are published in the Events tab"] },
              { title: "Slots, crash and fishing", items: ["Pure chance with published RTP", "Crash lets you set an auto cash-out multiplier", "Fishing games pay per catch, so small bets last longer"] },
            ].map((block) => (
              <div key={block.title} className="bg-[#0A1029] rounded-lg p-4">
                <h3 className="font-bold text-accent mb-2">{block.title}</h3>
                <ul className="text-gray-300 text-sm space-y-1 list-disc pl-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm mt-6">
            Compare Royal X Casino with the other apps in this category:{" "}
            <Link href="/blog/3patti-blue-vs-royal-x-casino" className="text-accent hover:underline">3Patti Blue</Link>,{" "}
            <Link href="/blog/3patti-gold-vs-royal-x-casino" className="text-accent hover:underline">3Patti Gold</Link>,{" "}
            <Link href="/blog/3patti-lucky-vs-royal-x-casino" className="text-accent hover:underline">3Patti Lucky</Link> and{" "}
            <Link href="/blog/3patti-room-vs-royal-x-casino" className="text-accent hover:underline">3Patti Room</Link>.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section id="tips-tricks" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Practical tips for playing Royal X Casino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Decide a weekly deposit limit before you open the app and keep it in your EasyPaisa app as a budget note.",
              "Start with the Rs. 10 welcome credit and free-trial modes to learn each game's pace before betting your own money.",
              "Read the RTP in each game's info panel; a 97 percent slot loses you less per hour than a 92 percent one.",
              "In Crash, set an auto cash-out at 1.5x to 2x instead of watching the multiplier; emotional cash-outs cost most.",
              "Withdraw when you hit a target. Money in the wallet is easier to re-bet than money in your bank.",
              "Never chase a loss with a bigger bet; set a stop-loss for the session and close the app when you reach it.",
              "Claim the daily login reward even on days you do not play; the calendar resets if you skip.",
              "Use private rooms to play Teen Patti with friends for small stakes rather than public high-limit tables.",
              "Match your wallet name to your account name before the first deposit so KYC never delays a payout.",
              "Keep the APK updated from this site only; outdated builds are the top cause of login and payout errors.",
              "Take a break every 30 minutes. Fatigue, not bad luck, drives most large losses.",
              "If play stops feeling like entertainment, use the in-app self-exclusion option and talk to someone you trust.",
            ].map((tip, i) => (
              <div key={tip} className="bg-[#0A1029] p-3 rounded-lg">
                <p className="text-gray-300 text-sm">
                  {i + 1}. {tip}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-amber-900/20 rounded-lg p-6 border border-amber-700/50">
            <h3 className="font-bold text-amber-400 mb-2">Responsible gaming</h3>
            <p className="text-gray-300 text-sm mb-2">
              Royal X Casino is entertainment with a cost, not an income source. Set money and time limits, never play
              with borrowed money, and stop if you are stressed or chasing losses. Our{" "}
              <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">responsible gaming guide</Link>{" "}
              lists self-exclusion steps and support contacts in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="security" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Is Royal X Casino safe? Security, licence and risks</h2>
          <p className="text-gray-300 mb-6">
            Safety has two parts: whether the software protects your data and money, and whether the business behind it
            is accountable. The app does well on the first and is opaque on the second.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              ["SSL encryption", "All traffic between the app and its servers is encrypted, so wallet details are not readable on public Wi-Fi."],
              ["KYC before large payouts", "Identity checks are required before big withdrawals, which blocks account takeovers from cashing out."],
              ["Local payment gateways", "Deposits and withdrawals run through EasyPaisa, JazzCash and bank rails; the app never asks for your wallet PIN."],
              ["Fairness", "The operator says its games use a certified random number generator. We could not independently verify that certification, so treat it as the operator's claim."],
              ["Licence", "The operator states it holds a gaming licence but does not publish the licence number or regulator. Treat this as unverified until it does."],
              ["Legal status in Pakistan", "Gambling is restricted under Pakistani law and online play sits in a legal grey area. Check the rules that apply to you before depositing."],
              ["Mod and hack APKs", "Files promising unlimited coins or hacks are either malware or trigger a permanent account ban. Install only the official APK."],
              ["Track record", "Independent review sites show mixed feedback: praise for payouts alongside complaints about losses. The operator has not replied to negative reviews publicly."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#0A1029] p-4 rounded-lg">
                <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                <p className="text-gray-300 text-sm">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm">
            Our full verdict with evidence is in{" "}
            <Link href="/blog/is-royal-x-casino-safe-legal-pakistan" className="text-accent hover:underline">Is Royal X Casino safe and legal in Pakistan?</Link>{" "}
            and{" "}
            <Link href="/blog/is-royal-x-casino-real-or-fake" className="text-accent hover:underline">Is Royal X Casino real or fake?</Link>
          </p>
        </div>
      </section>

      {/* Pros & Cons */}
      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino pros and cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-green-400">Strengths</h3>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                <li><strong>Game variety</strong> – 200+ titles across six categories in one wallet</li>
                <li><strong>Local payments</strong> – EasyPaisa and JazzCash with Rs. 100 minimum deposit</li>
                <li><strong>Fast payouts</strong> – EasyPaisa and JazzCash withdrawals typically clear in 10 to 30 minutes</li>
                <li><strong>Bonus terms</strong> – credit withdrawable without playthrough per in-app terms</li>
                <li><strong>Small APK</strong> – 8.9 MB, runs on Android 5.0 with 2 GB RAM</li>
                <li><strong>Private rooms</strong> – play Teen Patti with friends at your own stakes</li>
                <li><strong>Referral and agent income</strong> – rewards that do not depend on winning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-amber-400">Weaknesses</h3>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                <li>No Google Play listing; APK sideloading required and updates are manual</li>
                <li>Licence number and regulator not published</li>
                <li>Android only; iPhone users rely on the browser version and PC users on an emulator</li>
                <li>Real-money losses are possible and the games carry a house edge</li>
                <li>Bank transfer deposits cannot be withdrawn back to a bank; payouts go to wallets or USDT</li>
                <li>Legal position in Pakistan is unclear and varies by province</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            <strong>Verdict:</strong> Royal X Casino is one of the more complete Android casino apps available to
            Pakistani players, with genuinely fast local payouts and clear bonus terms. The missing licence transparency
            and the legal grey area are real drawbacks. If you play, deposit only what you can afford to lose and withdraw
            regularly.
          </p>
        </div>
      </section>

      {/* Reviews & ratings */}
      <section id="user-reviews" className="py-12 md:px-8 px-4 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino reviews and ratings</h2>
          <p className="text-gray-300 mb-6">
            Rather than publish quotes you cannot check, here is what independent sources show and how our own rating is
            built.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-5 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-2">Our rating</h3>
              <p className="text-2xl font-bold text-white mb-1">
                {APP_RATING.value} <Stars value={Number(APP_RATING.value)} />
              </p>
              <p className="text-gray-300 text-sm">
                Based on {RATING_COUNT_DISPLAY} player ratings. Scores weigh payout speed, game variety, bonus honesty
                and support response.
              </p>
            </div>
            <div className="bg-[#0A1029] p-5 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-2">Trustpilot</h3>
              <p className="text-2xl font-bold text-white mb-1">3.8 / 5</p>
              <p className="text-gray-300 text-sm">
                From 10 reviews on the operator&apos;s{" "}
                <a href="https://www.trustpilot.com/review/royalxcasino.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">
                  claimed Trustpilot profile
                </a>{" "}
                (October 2026). Feedback is mixed: five-star entries praise the app while the one-star review calls it
                exploitative. The operator has not replied to negative reviews.
              </p>
            </div>
            <div className="bg-[#0A1029] p-5 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-2">Google Play</h3>
              <p className="text-2xl font-bold text-white mb-1">Not listed</p>
              <p className="text-gray-300 text-sm">
                The &quot;royal x casino&quot; app on Google Play is an unofficial guide with ads and no gameplay, so its
                rating says nothing about the real app. Judge the game by payout reports, not by that listing.
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-6">
            Our long-form test is in the{" "}
            <Link href="/blog/royal-x-casino-app-review-2026" className="text-accent hover:underline">Royal X Casino app review</Link>.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Royal X Casino FAQs</h2>
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

      {/* Conclusion */}
      <section className="pt-12 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Conclusion: should you download Royal X Casino?</h2>
          <p className="text-gray-300 mb-4">
            If you want Teen Patti, slots and crash games with EasyPaisa and JazzCash payments in one small Android app,
            Royal X Casino delivers that with fast payouts and bonus terms that are easier to understand than most rivals.
            The trade-offs are sideloading, manual updates, no published licence number and the legal uncertainty that
            comes with any real-money gambling app in Pakistan.
          </p>
          <p className="text-gray-300 mb-4">
            Use the install steps above, register with the same name as your wallet, claim the welcome credit, and set a
            budget before your first deposit. The guides linked throughout this page cover every step in more depth.
          </p>
          <p className="text-gray-400 text-sm">
            <strong>Remember:</strong> play for entertainment, keep stakes small, and withdraw when you are ahead.
          </p>
        </div>
      </section>
    </>
  );
}
