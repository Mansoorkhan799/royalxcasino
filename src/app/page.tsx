import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { DOWNLOAD_URL } from "@/lib/config";
import TableOfContentsAccordion from "@/components/TableOfContentsAccordion";

export const metadata: Metadata = {
  title: "Royal X Casino APK Pakistan | Download 2026 | Real Money",
  description: "Royal X Casino 2026 - Pakistan's #1 real money gaming app. 200+ games, zero wagering, instant withdrawals. Play Teen Patti, Slots, Fishing. JazzCash & EasyPaisa.",
  keywords: ["Royal X Casino", "Royal X Casino APK", "Royal X Casino Pakistan", "download royal x casino", "real money games Pakistan", "Teen Patti", "JazzCash", "EasyPaisa"],
  openGraph: {
    title: "Royal X Casino APK Pakistan | Download 2026",
    description: "Royal X Casino - 200+ games, zero wagering, instant withdrawals. Earn real money with JazzCash & EasyPaisa.",
    url: "https://royalexcasino.com.pk",
    siteName: "Royal X Casino",
    type: "website",
    images: [
      {
        url: "https://royalexcasino.com.pk/royal-x-casino.webp",
        width: 1200,
        height: 1200,
        alt: "Royal X Casino - Pakistan's Premier Real Money Gaming App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal X Casino APK Pakistan | Download 2026",
    description: "Royal X Casino - 200+ games, zero wagering, instant withdrawals. Earn real money with JazzCash & EasyPaisa.",
    images: ["https://royalexcasino.com.pk/royal-x-casino.webp"],
  },
  alternates: { canonical: "https://royalexcasino.com.pk" },
};


export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://royalexcasino.com.pk/#website",
        url: "https://royalexcasino.com.pk/",
        name: "Royal X Casino",
        description: "Pakistan's premier real money gaming platform with 200+ games, zero wagering, instant withdrawals.",
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://royalexcasino.com.pk/#organization",
        name: "Royal X Casino",
        url: "https://royalexcasino.com.pk/",
        logo: { "@type": "ImageObject", url: "https://royalexcasino.com.pk/royal-x-casino.webp", width: 512, height: 512 },
      },
      {
        "@type": "ImageObject",
        "@id": "https://royalexcasino.com.pk/#royal-x-casino-image",
        contentUrl: "https://royalexcasino.com.pk/royal-x-casino.webp",
        url: "https://royalexcasino.com.pk/",
        name: "Royal X Casino",
        description: "Royal X Casino - Pakistan's Premier Real Money Gaming App",
      },
      {
        "@type": "SoftwareApplication",
        name: "Royal X Casino",
        operatingSystem: "Android 5.0+",
        applicationCategory: "GameApplication",
        image: "https://royalexcasino.com.pk/royal-x-casino.webp",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", ratingCount: "500000" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
        downloadUrl: "https://royalxcasino55.com/?refer_id=101141302616",
        softwareVersion: "v2.54.7",
        fileSize: "8.9MB",
        description: "Play 200+ casino games. Zero wagering, instant withdrawals via EasyPaisa & JazzCash.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is Royal X Casino?", acceptedAnswer: { "@type": "Answer", text: "Royal X Casino is Pakistan's premier real money gaming platform with 200+ games including Teen Patti, Slots, Fishing. Zero wagering, instant withdrawals via JazzCash and EasyPaisa." } },
          { "@type": "Question", name: "How to download Royal X Casino?", acceptedAnswer: { "@type": "Answer", text: "Visit royalexcasino.com.pk, click the download button, enable Unknown Sources on Android, then install the APK from your Downloads folder." } },
          { "@type": "Question", name: "Is Royal X Casino safe?", acceptedAnswer: { "@type": "Answer", text: "Yes. Royal X Casino uses SSL encryption, has an operating license, and supports secure payments via EasyPaisa and JazzCash." } },
          { "@type": "Question", name: "How to withdraw money?", acceptedAnswer: { "@type": "Answer", text: "Go to Withdraw in the app, choose EasyPaisa or JazzCash, enter amount and account details. Money arrives in 10-30 minutes. No wagering requirements." } },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="homepage-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <Link href="/" className="text-white hover:text-[#FFA500] transition-colors">
                Royal X Casino
              </Link>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              <span className="text-[#FFA500]">Download APK & Play </span>
              <span className="text-white">Real Money Games in Pakistan 2026</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino</Link> is Pakistan&apos;s #1 real money gaming app. <strong>200+ games</strong>, <strong>zero wagering</strong>, instant withdrawals via JazzCash & EasyPaisa. Play Teen Patti, Slots, Fishing & more.
            </p>
            <div className="flex justify-center my-6">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>Download Royal X Casino APK</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-4 border border-gray-800">
              <h3 className="text-lg font-bold mb-3 text-[#FFA500]">Application Requirements</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Android 5.0 or higher (Android 7.0+ recommended)</li>
                <li>• RAM: 2GB or more</li>
                <li>• Storage: 600 MB of free space</li>
                <li>• Smooth Internet Connection (3G/4G/WiFi)</li>
              </ul>
            </div>
            <p className="text-gray-400 text-sm italic">*Available for Android. Download from <Link href="/" className="text-[#0ea5e9] underline hover:text-[#38bdf8] underline-offset-2">royalexcasino.com.pk</Link></p>
          </div>
          {/* Hero image – desktop */}
          <div className="hidden md:flex md:w-1/2 md:mt-4 items-center justify-center">
            <Link href="/" aria-label="Royal X Casino - Official Home" className="block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,165,0,0.25)] border border-[#FFA500]/20">
                <Image
                  src="/royal-x-casino.webp"
                  alt="Royal X Casino - Pakistan's Premier Real Money Gaming App"
                  width={460}
                  height={460}
                  className="object-contain w-full h-auto"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1280px) 380px, 460px"
                />
              </div>
            </Link>
          </div>
          {/* Hero image – mobile */}
          <div className="mt-8 md:hidden flex justify-center">
            <Link href="/" aria-label="Royal X Casino - Official Home" className="block">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,165,0,0.2)] border border-[#FFA500]/20">
                <Image
                  src="/royal-x-casino.webp"
                  alt="Royal X Casino - Pakistan's Premier Real Money Gaming App"
                  width={320}
                  height={320}
                  className="object-contain w-full h-auto"
                  priority
                  fetchPriority="high"
                  sizes="320px"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* App Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">App Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", "Royal X Casino"],
                ["Publisher", "royalxcasino.com"],
                ["Category", "Casino, Cards, Real Money Games"],
                ["Latest Version", "v2.54.7"],
                ["Size", "8.90 MB"],
                ["Country", "Pakistan"],
                ["Website", "royalexcasino.com.pk"],
                ["Update Date", "January 2026"],
                ["Price", "Free Download"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#0a1029]/50" : "bg-[#06091F]/50"}>
                  <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-left text-white">
                    {label === "Website" ? (
                      <Link href="/" className="text-[#0ea5e9] hover:text-[#38bdf8] hover:underline">
                        {value}
                      </Link>
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-6">
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center border-2 border-[#0ea5e9]">
            <span className="text-lg">DOWNLOAD APK</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Table of Contents – Accordion */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <TableOfContentsAccordion />
      </section>

      {/* Overview */}
      <section id="overview" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Overview: Your Gateway to Real Money Gaming in Pakistan</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Welcome to <strong>Royal X Casino</strong> – Pakistan&apos;s #1 trusted real money gaming platform that combines the thrill of Las Vegas casinos with the convenience of mobile gaming. In 2026, as inflation and economic challenges continue, finding legitimate ways to earn extra income has become essential. Royal X Casino offers exactly that – a secure, entertaining, and profitable gaming experience right from your smartphone.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            With over <strong>200+ premium casino games</strong>, including classic card games, modern slots, fishing games, and sports betting, Royal X Casino provides endless entertainment and earning opportunities. Whether you&apos;re a seasoned player or a complete beginner, our platform is designed to give you the best gaming experience with fair play, high payouts, and instant withdrawals.
          </p>
          <div className="bg-[#0A1029] rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-3 text-white">Why Royal X Casino Stands Out in 2026:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2"><span className="text-green-400">✓</span> <strong>Zero Wagering Requirements</strong> – Withdraw bonuses immediately without playing</li>
              <li className="flex items-start gap-2"><span className="text-green-400">✓</span> <strong>Instant Withdrawals</strong> – Get your money in 10-30 minutes via Easypaisa/JazzCash</li>
              <li className="flex items-start gap-2"><span className="text-green-400">✓</span> <strong>Operating License</strong> – Fully licensed and regulated platform</li>
              <li className="flex items-start gap-2"><span className="text-green-400">✓</span> <strong>SSL Encryption</strong> – Bank-level security for all transactions</li>
              <li className="flex items-start gap-2"><span className="text-green-400">✓</span> <strong>24/7 Customer Support</strong> – Always available to help you</li>
              <li className="flex items-start gap-2"><span className="text-green-400">✓</span> <strong>No Ads</strong> – Distraction-free gaming experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What is Royal X Casino */}
      <section id="what-is-royal-x-casino" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">What is Royal X Casino Pakistan?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Royal X Casino is Pakistan&apos;s premier online casino gaming platform that brings authentic casino experiences directly to your mobile device. Unlike physical casinos that don&apos;t exist in Pakistan, Royal X Casino fills this gap by offering a complete virtual casino with real money earning potential.
          </p>
          <p className="text-gray-300 mb-2">The platform features an extensive library of games including:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li><strong>Card Games:</strong> Teen Patti, Andar Bahar, Poker, Blackjack, Rummy, Baccarat</li>
            <li><strong>Slot Games:</strong> God of Wealth, Fortune Tiger, Money Mania, Rising Fortunes</li>
            <li><strong>Fishing Games:</strong> Interactive arcade-style shooting games with high payouts</li>
            <li><strong>Sports Betting:</strong> Cricket, Football, and other live sports events</li>
            <li><strong>Modern Games:</strong> Crash, Mines, Plinko, Limbo, Dice, and more</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-accent">Real Money Earning Made Simple</h3>
          <p className="text-gray-300 mb-2">Royal X Casino isn&apos;t just about entertainment – it&apos;s a legitimate earning platform. Players can:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
            <li>Start with a minimum deposit of just <strong>Rs. 100</strong></li>
            <li>Earn through gameplay, bonuses, and referral programs</li>
            <li>Withdraw instantly to Easypaisa, JazzCash, or bank accounts</li>
            <li>Enjoy high RTP (Return to Player) rates on all games</li>
            <li>Participate in tournaments with massive jackpots</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-accent">Why Pakistani Players Trust Royal X Casino</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li><strong>Local Payment Methods:</strong> EasyPaisa and JazzCash integration for seamless transactions</li>
            <li><strong>Multilingual Support:</strong> Available in English, Urdu, and Hindi</li>
            <li><strong>Beginner-Friendly:</strong> Simple interface with tutorials for new players</li>
            <li><strong>Regular Updates:</strong> New games and features added monthly</li>
            <li><strong>Community Features:</strong> Play with friends in custom rooms, chat, and share tips</li>
          </ul>
        </div>
      </section>

      {/* Key Features */}
      <section id="key-features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Royal X Casino APK: Premium Features That Set Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "🎮 Massive Game Library (200+ Games)", desc: "From classic Teen Patti to modern Crash games, our platform offers the most diverse collection of casino games in Pakistan. Every game features HD graphics, smooth gameplay, and fair RNG systems." },
              { title: "💰 Zero Wagering Requirements", desc: "This is a WORLD FIRST feature! Unlike other platforms, you can withdraw bonuses immediately without meeting any wagering requirements. Claim your bonus and cash out instantly – no games required." },
              { title: "⚡ Instant Withdrawals", desc: "Get your winnings in 10-30 minutes via Easypaisa or JazzCash. No waiting days or weeks. Withdraw unlimited amounts daily without restrictions." },
              { title: "🔒 Bank-Level Security", desc: "SSL encryption, secure payment gateways, and KYC verification ensure your personal and financial information stays completely safe. We use the same security standards as major banks." },
              { title: "🎁 Generous Bonuses & Rewards", desc: "Welcome Bonus Rs. 10 instant on registration; First Deposit 20% recharge rebate; Daily Login Bonus; Weekly Bonuses; Referral Program earn up to Rs. 1,000 per referral; VIP Program with exclusive rewards and faster withdrawals." },
              { title: "👥 Custom Rooms & Multiplayer", desc: "Create private rooms with 4-6 friends and play together. Chat, share strategies, and enjoy exclusive games. Perfect for practicing or playing with trusted friends." },
              { title: "📱 Optimized Mobile Experience", desc: "Lightweight 8.9 MB app that runs smoothly on Android 5.0+ devices. No lags, no crashes, just seamless gaming. Works perfectly even on low-end smartphones." },
              { title: "🎯 Fair Play Guarantee", desc: "All games use certified RNG systems ensuring fair outcomes. Every player has equal winning chances. No manipulation, no cheating – just pure fair gaming." },
              { title: "🌐 24/7 Customer Support", desc: "Our dedicated support team is available round the clock via live chat, email, and phone. Get instant help with deposits, withdrawals, game rules, or any issues." },
              { title: "🚫 Ad-Free Experience", desc: "No annoying pop-ups, no promotional ads, no interruptions. Focus entirely on your game and maximize your winnings without distractions." },
              { title: "🏆 Leaderboard & Rankings", desc: "Compete with other players and climb the leaderboard. Top players win cash prizes, VIP status, and exclusive rewards. Three ranking systems: Betting, Deposits, and Referrals." },
              { title: "🎨 HD Graphics & Immersive Sound", desc: "Stunning visuals and realistic sound effects create an authentic casino atmosphere. Every game feels like you're in a real casino." },
            ].map((f, i) => (
              <div key={i} className="bg-[#0A1029] px-6 py-6 rounded-lg border border-gray-800">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Complete Games List: 200+ Premium Casino Games</h2>
          <p className="text-gray-300 mb-6">Royal X Casino offers the most comprehensive game collection in Pakistan. Here are the games you can play and earn from:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-2 text-accent">🎴 Card Games</h3>
              <p className="text-gray-300 text-sm">Teen Patti, Andar Bahar, Andar Bahar Multiplayer, Texas Hold&apos;Em, Poker, Blackjack, Baccarat, Rummy, Point Rummy, Dragon Tiger, 7 Up Down, Red vs Black, Jhandi Munda</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-accent">🎰 Slot Games</h3>
              <p className="text-gray-300 text-sm">God of Wealth, Fortune Tiger, Money Mania, Rising Fortunes, 777 Fruit, Fruit Mary, 88 Fortunes, Phoenix, Lucky Bingo</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-accent">🎣 Fishing Games</h3>
              <p className="text-gray-300 text-sm">Fish Shooting, Fishdom, Mythical Animals, Jungle Tiger</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-accent">⚡ Modern & Quick</h3>
              <p className="text-gray-300 text-sm">Crash, Crash II, Mines, Plinko, Limbo, Dice, Toss A Coin, Color Game, Hilo, Direction Bounty</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-accent">🎲 Table & Casual</h3>
              <p className="text-gray-300 text-sm">Roulette, Zoo Roulette, Sic Bo, Snakes and Ladders, Ludo, Quick Ludo, Crazy Ludo, Wingo</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-accent">🏏 Sports Betting</h3>
              <p className="text-gray-300 text-sm">Cricket Battle, Football Betting, Horse Racing (Virtual), Sabong</p>
            </div>
          </div>
          <div className="bg-[#0A1029] rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-3 text-[#FFA500]">🔥 Most Popular Games (Highest Payouts)</h3>
            <ol className="list-decimal pl-5 text-gray-300 text-sm space-y-1">
              <li><strong>Teen Patti</strong> – Pakistan&apos;s favorite card game with high RTP</li>
              <li><strong>God of Wealth</strong> – Top slot game with massive jackpots</li>
              <li><strong>Crash</strong> – Fast-paced multiplier game</li>
              <li><strong>Andar Bahar</strong> – Classic Indian card game</li>
              <li><strong>Dragon Tiger</strong> – Quick rounds, high payouts</li>
              <li><strong>Fishing Games</strong> – Interactive and rewarding</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Royal X Casino App Screenshots */}
      <section id="app-screenshots" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Royal X Casino App Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/royal-x-casino-app-landing-page.webp", alt: "Royal X Casino app landing page", caption: "App landing page with Register & Login" },
              { src: "/royal-x-casino-game-pakistan.webp", alt: "Royal X Casino game selection", caption: "Game selection screen" },
              { src: "/royal-x-casino-games.webp", alt: "Royal X Casino games library", caption: "200+ games library" },
              { src: "/royal-x-casino-registration-page.webp", alt: "Royal X Casino registration", caption: "Quick registration" },
              { src: "/royal-x-casino-deposit-money-interface.webp", alt: "Royal X Casino deposit interface", caption: "Deposit via JazzCash & EasyPaisa" },
              { src: "/royal-x-casino-withdraw-money-interface.webp", alt: "Royal X Casino withdraw interface", caption: "Instant withdrawal interface" },
              { src: "/royal-x-casino-refer-and-earn.webp", alt: "Royal X Casino refer and earn", caption: "Refer and earn rewards" },
              { src: "/royal-x-casino-share-and-earn.webp", alt: "Royal X Casino share and earn", caption: "Share and earn bonus" },
              { src: "/royal-x-casino-cashpot.webp", alt: "Royal X Casino cashpot", caption: "Cashpot jackpot" },
              { src: "/royal-x-casino-grab-coins.webp", alt: "Royal X Casino grab coins", caption: "Grab coins bonus" },
              { src: "/royal-x-casino-leaderboard.webp", alt: "Royal X Casino leaderboard", caption: "Leaderboard & rankings" },
              { src: "/royal-casino-daily-bonus.webp", alt: "Royal X Casino daily bonus", caption: "Daily login bonus" },
            ].map(({ src, alt, caption }) => (
              <div key={src} className="rounded-lg overflow-hidden border border-gray-700 bg-[#0A1029] flex flex-col">
                <Image src={src} alt={alt} width={400} height={600} className="w-full h-auto object-contain" sizes="(max-width: 768px) 50vw, 25vw" />
                <span className="px-3 py-2 text-sm text-gray-300 bg-[#0A1029]">{caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Download */}
      <section id="how-to-download" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to Download & Install Royal X Casino APK</h2>
          <p className="text-gray-300 mb-6">Royal X Casino is not available on Google Play Store. You can safely download it from our official website. Follow these steps:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <Image src="/how-to-download-step-01.webp" alt="Step 1: Click the Download button on royalexcasino.com.pk" width={280} height={500} className="rounded-lg border border-gray-700 object-cover" />
                <span className="absolute top-2 left-2 bg-[#FFA500] text-primary font-bold px-3 py-1 rounded text-sm">Step 01</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Download the App</h3>
              <p className="text-gray-300 text-sm">Click the green Download button on <Link href="/" className="text-accent hover:underline">royalexcasino.com.pk</Link></p>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <Image src="/how-to-download-step-02.webp" alt="Step 2: Enable Install from Unknown Sources" width={280} height={500} className="rounded-lg border border-gray-700 object-cover" />
                <span className="absolute top-2 left-2 bg-[#FFA500] text-primary font-bold px-3 py-1 rounded text-sm">Step 02</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Allow Unknown Sources</h3>
              <p className="text-gray-300 text-sm">Enable &quot;Allow from this source&quot; for your browser</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <Image src="/how-to-download-step-03.webp" alt="Step 3: Tap Install on the APK file" width={280} height={500} className="rounded-lg border border-gray-700 object-cover" />
                <span className="absolute top-2 left-2 bg-[#FFA500] text-primary font-bold px-3 py-1 rounded text-sm">Step 03</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Install the APK</h3>
              <p className="text-gray-300 text-sm">Tap Royal-x-Casino.apk, then tap Install</p>
            </div>
          </div>
          <div className="space-y-4 mb-6">
            {[
              { step: 1, title: "Visit Official Website", content: <>Open your browser and visit <Link href="/" className="text-accent hover:underline">royalexcasino.com.pk</Link>. Only download from official sources to avoid malware.</> },
              { step: 2, title: "Click Download Button", content: "On the homepage, click the Download button. The APK file (8.9 MB) will start downloading." },
              { step: 3, title: "Enable Unknown Sources", content: "Go to Settings → Security (or Privacy) and enable Install from Unknown Sources for your browser." },
              { step: 4, title: "Install the APK", content: "Open File Manager or Downloads, locate Royal_X_Casino.apk, tap to install. Wait 10-15 seconds." },
              { step: 5, title: "Launch & Register", content: "Tap the Royal X Casino icon to open the app, then proceed to registration (see below)." },
            ].map(({ step, title, content }) => (
              <div key={step} className="bg-[#0A1029] rounded-lg p-4 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">Step {step}: {title}</h3>
                <p className="text-gray-300 text-sm">{content}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#06091F] rounded-lg p-4 border border-gray-700">
            <h3 className="font-bold text-[#FFA500] mb-2">🔧 Troubleshooting</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><strong>Installation Blocked:</strong> Enable Unknown Sources in Settings</li>
              <li><strong>Download Failed:</strong> Check internet and try again</li>
              <li><strong>App Won&apos;t Open:</strong> Ensure Android 5.0+ and 2GB RAM</li>
              <li><strong>Storage Error:</strong> Free up at least 600 MB</li>
            </ul>
          </div>
          <p className="mt-4"><Link href="/royal-x-casino-download" className="text-accent hover:underline font-semibold">Full download guide →</Link></p>
        </div>
      </section>

      {/* How to Register */}
      <section id="how-to-register" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to Register & Create Account on Royal X Casino</h2>
          <p className="text-gray-300 mb-6">Creating an account takes less than 2 minutes:</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-6">
            <li><strong>Open the App</strong> – Launch Royal X Casino from your home screen.</li>
            <li><strong>Click Register / Sign Up</strong> – Tap the button on the main screen.</li>
            <li><strong>Enter Details</strong> – Username, email, phone number, and a strong password (8+ characters).</li>
            <li><strong>Verify Your Phone</strong> – Enter the OTP sent via SMS.</li>
            <li><strong>Accept Terms</strong> – Read and accept, then click Register.</li>
            <li><strong>Get Welcome Bonus</strong> – You&apos;ll instantly receive Rs. 10 welcome bonus. Start playing!</li>
          </ol>
          <div className="bg-[#0A1029] rounded-lg p-4 border border-gray-700">
            <h3 className="font-bold text-accent mb-1">💡 Pro Tip</h3>
            <p className="text-gray-300 text-sm">Save your login credentials securely. You&apos;ll need them to access your account and withdraw money.</p>
          </div>
        </div>
      </section>

      {/* Deposit & Withdraw */}
      <section id="deposit-withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Complete Guide: Deposit & Withdraw Money</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">💰 How to Deposit</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
                <li>Login → tap <strong>Deposit</strong> or <strong>Wallet</strong> (bottom right)</li>
                <li>Choose EasyPaisa, JazzCash, Bank Transfer, or USDT</li>
                <li>Enter amount (min Rs. 100, max Rs. 50,000 per transaction)</li>
                <li>First deposit: avail <strong>20% recharge rebate</strong></li>
                <li>Enter payment details and tap <strong>Pay Now</strong>. Confirm in your wallet app – money added instantly.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">💸 How to Withdraw</h3>
              <p className="text-gray-300 text-sm mb-2"><strong>Best feature:</strong> Zero wagering – withdraw bonuses immediately!</p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
                <li>Login → tap <strong>Withdraw</strong></li>
                <li>Choose EasyPaisa (Rs. 600–50,000), JazzCash (Rs. 600–50,000), or USDT (Rs. 50,000–5,00,000)</li>
                <li>Enter amount and account details. Confirm. Money in <strong>10–30 minutes</strong>.</li>
                <li>Track in <strong>History</strong>.</li>
              </ol>
            </div>
          </div>
          <div className="bg-[#0A1029] rounded-lg p-6 border border-gray-700">
            <h3 className="font-bold text-white mb-2">✨ Withdrawal Benefits</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>✓ No Wagering Requirements – withdraw bonuses immediately</li>
              <li>✓ Unlimited daily withdrawals</li>
              <li>✓ Instant processing – 10–30 minutes</li>
              <li>✓ Multiple payment options, no hidden fees</li>
            </ul>
          </div>
          <p className="mt-4"><Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline mr-4">Deposit guide</Link><Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">Withdraw guide</Link></p>
        </div>
      </section>

      {/* How to Earn */}
      <section id="how-to-earn" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to Play & Earn Real Money on Royal X Casino</h2>
          <p className="text-gray-300 mb-6">Earning money is straightforward. Main ways:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "1. Play Games & Win", items: ["Choose games that match your skills", "Place bets, win rounds, withdraw anytime", "Best for earning: Teen Patti, God of Wealth, Crash, Fishing"] },
              { title: "2. Claim Bonuses", items: ["Welcome Rs. 10", "Daily login, weekly bonuses", "First deposit 20% rebate", "VIP rewards, free spins"] },
              { title: "3. Referral Program", items: ["Share your code via WhatsApp/Facebook", "Rs. 20 when friend joins", "Up to Rs. 1,000 when they deposit Rs. 1,000", "No limit on referrals"] },
              { title: "4. Become an Agent", items: ["Share the app with many people", "Earn commission on their deposits", "Some agents earn more than players"] },
              { title: "5. Tournaments", items: ["Join real-time tournaments", "Compete, win jackpots and huge prizes", "Check leaderboard rankings"] },
              { title: "6. VIP Program", items: ["Level up bonus Rs. 15+", "Monthly salary Rs. 11+ for V1", "Surprise bonuses, faster withdrawals"] },
            ].map((block, i) => (
              <div key={i} className="bg-[#0A1029] rounded-lg p-4">
                <h3 className="font-bold text-accent mb-2">{block.title}</h3>
                <ul className="text-gray-300 text-sm space-y-1 list-disc pl-5">{block.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section id="tips-tricks" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Pro Tips & Tricks to Maximize Your Winnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Start small – begin with small bets; don't risk large amounts until comfortable.",
              "Choose games based on your skills – strategy = card games; luck = slots.",
              "Read game rules first – avoid costly mistakes.",
              "Manage your bankroll – set a daily budget; never chase losses.",
              "Claim all bonuses – daily login, weekly, referrals.",
              "Use referral program – earn passive income without playing.",
              "Practice in custom rooms with friends risk-free.",
              "Stay calm and patient – think strategically.",
              "Set a winning goal – withdraw and stop when you reach it.",
              "Take regular breaks – avoid poor decisions from long sessions.",
              "Learn from experienced players – join community, share tips.",
              "Keep app updated – new games, features, and bonuses.",
            ].map((tip, i) => (
              <div key={i} className="bg-[#0A1029] p-3 rounded-lg">
                <p className="text-gray-300 text-sm">{i + 1}. {tip}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-900/20 rounded-lg p-6 border border-amber-700/50">
            <h3 className="font-bold text-amber-400 mb-2">⚠️ Responsible Gaming Reminder</h3>
            <p className="text-gray-300 text-sm mb-2">Gaming should be fun and profitable. Always play responsibly:</p>
            <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
              <li>Never bet more than you can afford to lose</li>
              <li>Set time and money limits</li>
              <li>Take breaks regularly</li>
              <li>Don&apos;t play when emotional or stressed</li>
              <li>If gaming becomes a problem, seek help</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Security & Safety: Your Protection is Our Priority</h2>
          <p className="text-gray-300 mb-6">Royal X Casino takes security seriously. Here&apos;s how we protect you:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "🔐 SSL Encryption – 256-bit; same as banks. Personal and financial data protected.",
              "✅ Operating License – Valid gaming license; compliance and fair play.",
              "🎲 Certified RNG – All games tested for fairness; outcomes random.",
              "🛡️ KYC Verification – Account security; identity verified for large withdrawals.",
              "🔒 Secure Payment Gateways – EasyPaisa, JazzCash, bank transfers encrypted.",
              "🚫 Anti-Fraud Protection – 24/7 monitoring; prevent unauthorized access.",
              <>📱 Safe App Download – APK malware-free; download only from <Link href="/" className="text-accent hover:underline">royalexcasino.com.pk</Link>.</>,
              "👤 Privacy Protection – Personal info never shared with third parties.",
            ].map((item, i) => (
              <div key={i} className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0A1029] rounded-lg p-6 border border-gray-700">
            <h3 className="font-bold text-white mb-2">Why Players Trust Royal X Casino</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>✓ Thousands of successful withdrawals</li>
              <li>✓ Positive user reviews and ratings</li>
              <li>✓ Transparent terms and conditions</li>
              <li>✓ 24/7 customer support</li>
              <li>✓ Regular security updates</li>
              <li>✓ No hidden fees or charges</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Pros & Cons: Honest Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-green-400">✅ Advantages</h3>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                <li><strong>200+ Games</strong> – Largest collection in Pakistan</li>
                <li><strong>Zero Wagering</strong> – Withdraw bonuses immediately</li>
                <li><strong>Instant Withdrawals</strong> – 10–30 min via EasyPaisa/JazzCash</li>
                <li><strong>Local Payments</strong> – EasyPaisa, JazzCash, Bank</li>
                <li><strong>Generous Bonuses</strong> – Welcome, daily, weekly, VIP</li>
                <li><strong>No Ads</strong> – Distraction-free</li>
                <li><strong>Beginner-Friendly</strong> – Easy to use, tutorials</li>
                <li><strong>Multilingual</strong> – English, Urdu, Hindi</li>
                <li><strong>Custom Rooms</strong> – Play with friends</li>
                <li><strong>24/7 Support</strong> – Always available</li>
                <li><strong>Small App</strong> – 8.9 MB, works on low-end phones</li>
                <li><strong>Referral</strong> – Earn up to Rs. 1,000 per referral</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-amber-400">❌ Disadvantages</h3>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                <li>Not on Play Store – download from website</li>
                <li>Internet required</li>
                <li>Risk of loss – play responsibly</li>
                <li>Can be addictive – self-control needed</li>
                <li>Android only (iOS coming soon)</li>
                <li>Some games have a learning curve</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-300 text-sm"><strong>Our Verdict:</strong> Royal X Casino is one of the best real money platforms in Pakistan. With zero wagering, instant withdrawals, and 200+ games, it offers exceptional value. The cons are minor. Play responsibly and it can be both entertaining and profitable.</p>
        </div>
      </section>

      {/* User Reviews */}
      <section id="user-reviews" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">What Users Say: Real Reviews from Pakistani Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Afaq Ahmed", text: "Royal X Casino has been amazing! The variety of games keeps me entertained, and I've already earned a decent amount. Great graphics and fast withdrawals! Best casino app in Pakistan." },
              { name: "Ahmed Khan", text: "I love playing Teen Patti and Andar Bahar. The custom rooms are a fun feature, and customer support is super helpful. Zero wagering is a game-changer!" },
              { name: "Tahir Malik", text: "Awesome app! High RTP games and bonuses. I enjoy God of Wealth slots and the withdrawal process is smooth. Got my money in 15 minutes!" },
              { name: "Sajid Faisal", text: "When it comes to transparency, people talk about Royal X Casino. This is the game-changer platform. So many new features. Highly recommended!" },
              { name: "Shafiq Luqman", text: "Using this for 10 months. A friend suggested it. I'm earning about 10 lakhs per month. You should try it. Life-changing!" },
              { name: "Faheem Abbas", text: "When it comes to trust, we talk about Royal X Casino. Ultimate online casino app with real money rewards. Withdrawals instant, customer service excellent." },
              { name: "Zainab Ali", text: "As a beginner I was worried. The tutorials and simple interface helped me learn quickly. Now I'm earning regularly. Thank you Royal X Casino!" },
              { name: "Hassan Raza", text: "The referral program is amazing! I've earned more from referrals than playing. App is smooth, no lags, withdrawals super fast. Best gaming app in Pakistan!" },
            ].map((r, i) => (
              <div key={i} className="bg-[#0A1029] p-5 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#FFA500] font-bold">{r.name}</span>
                  <span className="text-amber-400 text-sm">★★★★★</span>
                </div>
                <p className="text-gray-300 text-sm">&quot;{r.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-12 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How can I download Royal X Casino APK Pakistan?", a: <>Visit <Link href="/" className="text-accent hover:underline">royalexcasino.com.pk</Link> and click the download button. Enable Unknown Sources in Android Settings, then install the APK from your Downloads folder.</> },
              { q: "Is Royal X Casino safe and secure?", a: "Yes. Royal X Casino uses SSL encryption, has an operating license, and follows strict security protocols. Your personal and financial information is protected." },
              { q: "Can I win real money on Royal X Casino?", a: "Yes. You can earn real money by playing games, claiming bonuses, and using the referral program. Withdraw to EasyPaisa, JazzCash, or bank accounts." },
              { q: "How do I withdraw money from Royal X Casino?", a: "Go to Withdraw, choose EasyPaisa or JazzCash, enter amount and account details, then confirm. Money arrives in 10–30 minutes. No wagering requirements." },
              { q: "Is Royal X Casino available for iOS?", a: "Currently Android only. iOS version is coming soon." },
              { q: "What is the minimum deposit and withdrawal?", a: "Minimum deposit Rs. 100. Minimum withdrawal Rs. 600 for EasyPaisa/JazzCash; Rs. 50,000 for USDT." },
              { q: "Are there any wagering requirements?", a: "No. Royal X Casino has ZERO wagering requirements – you can withdraw bonuses immediately without playing any games." },
              { q: "What payment methods are accepted?", a: "EasyPaisa, JazzCash, Bank Transfer, and USDT. All secure and instant." },
              { q: "How do I register?", a: "Open the app, tap Register, enter username, email, phone, password. Verify with OTP. You get Rs. 10 welcome bonus instantly." },
              { q: "Can I play without depositing?", a: "Yes. You get Rs. 10 welcome bonus on registration. You can also earn through daily bonuses, referrals, and free spins." },
            ].map((faq, i) => (
              <details key={i} className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
                <summary className="p-4 cursor-pointer text-white font-medium hover:text-[#FFA500]">{faq.q}</summary>
                <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50 text-sm [&_a]:text-accent [&_a:hover]:underline">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="pt-12 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Conclusion: Start Your Real Money Gaming Journey Today</h2>
          <p className="text-gray-300 mb-4">
            Royal X Casino is more than a gaming app – it&apos;s a complete entertainment and earning platform for Pakistani players. With <strong>200+ premium games</strong>, <strong>zero wagering</strong>, <strong>instant withdrawals</strong>, and <strong>bank-level security</strong>, it stands out as one of the best real money casino apps in Pakistan.
          </p>
          <p className="text-gray-300 mb-4">Whether you want to earn extra income, enjoy authentic casino games, play with friends in custom rooms, win big in tournaments, or benefit from generous bonuses – Royal X Casino has it.</p>
          <p className="text-gray-400 text-sm"><strong>Remember:</strong> Play responsibly, set limits, and enjoy the experience. Royal X Casino is here to provide entertainment and earning opportunities – use it wisely!</p>
        </div>
      </section>
    </>
  );
}
