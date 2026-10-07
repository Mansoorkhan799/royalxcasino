import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import FaqSchema, { FaqItem } from "@/components/FaqSchema";

const PAGE_URL = `${SITE_URL}/royal-x-casino-download`;
const TITLE = `Royal X Casino Download: APK ${APP_INFO.version} for Android (2026)`;
const DESCRIPTION = `Download the Royal X Casino APK (${APP_INFO.version}, ${APP_INFO.size}) for ${APP_INFO.androidMin}. Install steps with screenshots, update and verification tips, troubleshooting and FAQs.`;

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
        url: `${SITE_URL}/royal-x-casino.webp`,
        width: 1000,
        height: 1000,
        alt: "Royal X Casino Android app icon shown on the APK download page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/royal-x-casino.webp`],
  },
};

/* Data shared between the visible lists and the JSON-LD (must stay identical) */

const INSTALL_STEPS = [
  {
    name: "Download the APK file",
    text: `Tap the download button on this page. It opens the operator's official landing page; tap Download there and wait for the ${APP_INFO.size} file to finish. Stay on Wi-Fi or a stable mobile connection so the file is not cut off halfway.`,
  },
  {
    name: "Allow installs from your browser",
    text: "Open the downloaded file from the notification bar or your Downloads folder. Android will say the browser is not allowed to install apps. Tap Settings and switch on Install unknown apps (or Allow from this source) for Chrome or whichever browser you used.",
  },
  {
    name: "Install the APK",
    text: "Go back to the file and tap Install. Installation takes a few seconds. If Google Play Protect shows a warning, choose Install anyway only if the file came from this site or the operator's official channels.",
  },
  {
    name: "Open the app and let game assets download",
    text: "The first launch downloads game assets, which is why roughly 600 MB of free storage is recommended. Once the lobby loads, register with your Pakistani +92 mobile number, confirm the SMS code and set a password.",
  },
];

const STEP_IMAGES = [
  {
    src: "/how-to-download-step-01.webp",
    width: 2816,
    height: 1536,
    alt: "Android browser on the Royal X Casino download page with the Download button highlighted",
    label: "Step 01",
  },
  {
    src: "/how-to-download-step-02.webp",
    width: 1024,
    height: 1024,
    alt: "Android install prompt asking to allow the browser to install unknown apps",
    label: "Step 02",
  },
  {
    src: "/how-to-download-step-03.webp",
    width: 1024,
    height: 1024,
    alt: "Royal X Casino installed on Android with the Open button visible",
    label: "Step 03",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Is the Royal X Casino download free?",
    a: `Yes. The APK costs nothing to download or install. You only spend money if you choose to deposit later. The current build is ${APP_INFO.version} and the file is ${APP_INFO.size}.`,
  },
  {
    q: "Is Royal X Casino available on Google Play?",
    a: "No. Google Play does not carry real-money gambling apps for Pakistan, so the game is distributed as an APK file that you sideload. Any listing with a similar name on Google Play is not the real-money app described here.",
  },
  {
    q: "What is the latest version of the Royal X Casino APK?",
    a: `The current version is ${APP_INFO.version}, last updated ${APP_INFO.updated}. It requires ${APP_INFO.androidMin}. We only link the current build; older builds are not recommended because login and payment features can break.`,
  },
  {
    q: "How much storage does Royal X Casino need?",
    a: `The APK itself is ${APP_INFO.size}, but the app downloads game assets on first launch. Keep roughly 600 MB free so the download completes and the games open without stuttering.`,
  },
  {
    q: "Why does Android say App not installed?",
    a: "The usual cause is an older build with a different signature already on the phone. Uninstall the existing Royal X Casino app, then install the new APK. If it still fails, delete the file, download it again and check that the size matches 8.9 MB.",
  },
  {
    q: "Is it safe to download the Royal X Casino APK?",
    a: "Download only through this site or the operator's official Telegram and WhatsApp channels, and check that the file size matches what is listed here. Avoid APKs shared in random groups or labelled mod or hack. The app is a real-money gambling product, so the financial risk is separate from the file's safety.",
  },
  {
    q: "Can I download Royal X Casino on iPhone?",
    a: "There is no iOS app or IPA file. iPhone and iPad users play the browser version in Safari and can add it to the Home Screen for an app-like icon. Our iOS page explains the steps.",
  },
  {
    q: "Do I need to download the APK again to update?",
    a: "Yes. Updates are not automatic because the app is not on Google Play. Download the new APK from the same button and install it over the existing app. Your account and balance are tied to your mobile number and stay intact.",
  },
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

export default function RoyalXCasinoDownloadPage() {
  return (
    <>
      <HowToSchema
        name="How to download and install the Royal X Casino APK on Android"
        description={`Four steps to download the Royal X Casino APK (${APP_INFO.version}, ${APP_INFO.size}), allow installs from your browser, install the file and open the app for the first time.`}
        steps={INSTALL_STEPS}
        url="/royal-x-casino-download"
      />
      <FaqSchema faqs={FAQS} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Royal X Casino Download", url: "/royal-x-casino-download" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between md:space-x-12">
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Royal X Casino Download: <span className="text-[#FFA500]">Latest APK for Android</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Royal X Casino is distributed as an Android APK, not through Google Play. This page gives you the current
              build ({APP_INFO.version}, {APP_INFO.size}), the exact install steps with screenshots, how to confirm the
              file is genuine, and what to do when Android refuses to install it. The button below opens the
              operator&apos;s official download page; the full{" "}
              <Link href="/" className="text-accent hover:underline">
                Royal X Casino APK
              </Link>{" "}
              overview covers games, bonuses and payment limits.
            </p>
            <div className="flex flex-col items-center gap-3 my-6">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>Download Royal X Casino APK ({APP_INFO.size})</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <DownloadIcon />
                </div>
              </a>
              <Disclosure />
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
            <Image
              src="/royal-x-casino.webp"
              alt="Royal X Casino app icon with the gold logo and a casino chip, as it appears after installing the APK"
              width={240}
              height={240}
              className="object-contain drop-shadow-2xl"
              priority
              sizes="240px"
            />
          </div>
        </div>
      </section>

      {/* APK details */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino APK details</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800 text-sm">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App name", APP_INFO.name],
                ["Also known as", APP_INFO.alsoKnownAs],
                ["Latest version", APP_INFO.version],
                ["APK size", APP_INFO.size],
                ["Last updated", APP_INFO.updated],
                ["Android required", APP_INFO.androidMin],
                ["Category", APP_INFO.category],
                ["Price", "Free"],
                ["Download", "Via the operator's referral link (opens the official download page)"],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-[#0a1029]/50" : "bg-[#06091F]/50"}>
                  <td className="py-3 px-6 font-medium text-white w-1/3">{label}</td>
                  <td className="py-3 px-6 text-gray-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Not on Google Play + requirements */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Why the Royal X Casino APK is not on Google Play</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google Play does not accept real-money gambling apps for Pakistan, so the operator publishes the game as a
              sideloaded APK. That has two practical consequences for you.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              First, Android asks for a one-time &quot;Install unknown apps&quot; permission for the browser you download
              with. Second, updates are manual: the app does not refresh itself the way Play Store apps do, so you
              reinstall when a new build appears.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you see a listing with a similar name on Google Play, it is not the real-money game covered on this
              page. Judge the app by the file described here, not by that listing.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">System requirements for Android</h2>
            <ul className="text-gray-300 space-y-3">
              <li className="flex gap-3">
                <span className="text-[#FFA500] font-bold">1.</span>
                <span>
                  <strong className="text-white">{APP_INFO.androidMin}.</strong> Newer phones load game assets faster,
                  but the app runs on older hardware.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFA500] font-bold">2.</span>
                <span>
                  <strong className="text-white">Roughly 600 MB free storage.</strong> The APK is {APP_INFO.size}; the
                  rest is game assets downloaded on first launch.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFA500] font-bold">3.</span>
                <span>
                  <strong className="text-white">Stable internet.</strong> 4G or Wi-Fi for the download and for live card
                  tables.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFA500] font-bold">4.</span>
                <span>
                  <strong className="text-white">A Pakistani +92 mobile number.</strong> Registration verifies it by SMS
                  code; one account per number.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFA500] font-bold">5.</span>
                <span>
                  <strong className="text-white">A browser with install permission.</strong> Chrome works; the setting
                  is per browser, not global.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Install steps */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            How to download and install Royal X Casino on Android
          </h2>
          <p className="text-gray-300 mb-8">
            The whole process takes two to three minutes. The screenshots show what each prompt looks like, and the
            numbered steps below tell you exactly what to tap.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {STEP_IMAGES.map((img) => (
              <div key={img.src} className="relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="rounded-lg border border-gray-700 w-full h-auto"
                />
                <span className="absolute top-2 left-2 bg-[#FFA500] text-primary font-bold px-3 py-1 rounded text-sm">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
          <ol className="space-y-4">
            {INSTALL_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Update + verify */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">How to update Royal X Casino to the latest version</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Updates are not pushed automatically. When a new build is released, download it from the same button and
              install it over the existing app. Your account, balance and history live on the operator&apos;s server and
              are tied to your mobile number, so nothing is lost.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              If the installer reports &quot;App not installed&quot; or a signature conflict, uninstall the old build
              first, install the new APK, then log in again with your number and password.
            </p>
            <p className="text-gray-300 leading-relaxed">
              After updating, compare the version shown inside the app with {APP_INFO.version} on this page. If it is
              lower, the old file was reinstalled; delete it from Downloads and fetch the new one.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">How to verify you have the official app</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Check the file size.</strong> The genuine APK is {APP_INFO.size}. A file
                that is far larger or smaller has been repackaged or did not finish downloading.
              </li>
              <li>
                <strong className="text-white">Use a trusted source.</strong> Download through the button on this site or
                the operator&apos;s official Telegram and WhatsApp channels only.
              </li>
              <li>
                <strong className="text-white">Ignore random Telegram APKs.</strong> Files forwarded in groups, or
                labelled mod, hack or unlimited coins, are not official and can carry malware or get an account blocked.
              </li>
              <li>
                <strong className="text-white">Expect the normal login flow.</strong> The real app registers you with a
                +92 number and SMS code. Anything asking for payment before you can even register is a red flag.
              </li>
            </ul>
            <p className="text-gray-300 text-sm mt-4">
              For a broader look at the operator, read{" "}
              <Link href="/blog/is-royal-x-casino-real-or-fake" className="text-accent hover:underline">
                Is Royal X Casino Real or Fake? Evidence-Based Answer 2026
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* After installing */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">What to do after installing Royal X Casino</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] rounded-lg p-5 border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-accent">1. Register your account</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Enter your +92 mobile number, type the SMS code, set a password and add a referral code if a friend
                invited you. It takes two to three minutes and you must be 18 or older. The{" "}
                <Link href="/how-to-register-royal-x-casino" className="text-accent hover:underline">
                  registration guide
                </Link>{" "}
                shows every screen.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-5 border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-accent">2. Claim the Rs. 10 welcome credit</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Rs. 10 is credited when registration completes. It is small, but it lets you open a table or try a slot
                before spending anything. Many games also have free-trial modes. Check the in-app bonus terms before
                treating any bonus credit as withdrawable.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-5 border border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-accent">3. Deposit only if you decide to play</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Deposits start at Rs. 100 through EasyPaisa, JazzCash, bank transfer or USDT, and the first deposit earns a
                one-time 20% rebate. The{" "}
                <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline">
                  EasyPaisa and JazzCash deposit guide
                </Link>{" "}
                covers limits and timing. Set a budget first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino download and install problems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              [
                "App not installed",
                "An older build with a different signature is already on the phone, or the file is corrupt. Uninstall the existing app, delete the APK from Downloads, download again and reinstall.",
              ],
              [
                "There was a problem parsing the package",
                "The download stopped early or the phone runs an Android version below 5.0. Check the file size against 8.9 MB, re-download on Wi-Fi and confirm your Android version under Settings, About phone.",
              ],
              [
                "Blocked by Play Protect",
                "Play Protect flags most sideloaded apps that are not on Google Play. If the file came from this site or an official channel, tap More details, then Install anyway. If you got the file elsewhere, do not install it.",
              ],
              [
                "Download stuck or very slow",
                "Pause and resume in the browser's download list, or switch from mobile data to Wi-Fi. If the file is still stuck at a partial size, delete it and start again rather than opening a half-downloaded APK.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#0A1029] rounded-lg p-5 border border-gray-800">
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm mt-6">
            If the app installs but you cannot sign in, the{" "}
            <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline">
              login guide
            </Link>{" "}
            covers OTP delays, password resets and locked accounts.
          </p>
        </div>
      </section>

      {/* Alternatives and old versions */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Royal X Casino on PC and iPhone</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The native app is Android only. On a Windows or Mac computer you can play the browser version, or run this
              APK inside an Android emulator such as BlueStacks, LDPlayer or MEmu. The{" "}
              <Link href="/royal-x-casino-for-pc" className="text-accent hover:underline">
                Royal X Casino for PC guide
              </Link>{" "}
              compares both methods.
            </p>
            <p className="text-gray-300 leading-relaxed">
              There is no iOS app, IPA file or configuration profile. iPhone and iPad users open the same link in Safari
              and add it to the Home Screen, as explained on the{" "}
              <Link href="/royal-x-casino-for-ios" className="text-accent hover:underline">
                Royal X Casino for iOS page
              </Link>
              .
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">A note on old versions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Older APKs circulate online, but we do not link them. Outdated builds lose access to payment and login
              features as the server moves on, and they miss security fixes. Only {APP_INFO.version} is offered here.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If your phone struggles with the current build, the{" "}
              <Link href="/royal-x-casino-old-versions" className="text-accent hover:underline">
                old versions page
              </Link>{" "}
              explains the real fixes: freeing storage, clearing cache and reinstalling cleanly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino download FAQs</h2>
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
          Royal X Casino is a real-money gambling app for players aged 18 and over. You can lose the money you deposit,
          online gambling sits in a legal grey area in Pakistan, and no strategy removes the house edge. Set a budget
          before your first deposit and read our{" "}
          <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">
            Responsible Gaming Guide for Royal X Casino Players
          </Link>{" "}
          if play stops feeling like entertainment.
        </p>
      </section>
    </>
  );
}
