import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import FaqSchema, { FaqItem } from "@/components/FaqSchema";

const PAGE_URL = `${SITE_URL}/royal-x-casino-for-pc`;
const TITLE = "Royal X Casino for PC: Play on Windows and Mac (2026)";
const DESCRIPTION =
  "No native Windows or Mac app exists. Play Royal X Casino on PC in your browser or run the APK in BlueStacks, LDPlayer or MEmu. Setup steps, PC specs and FAQs.";

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
        url: `${SITE_URL}/royal-x-casino-app-landing-page.webp`,
        width: 1200,
        height: 540,
        alt: "Royal X Casino game lobby as it appears when played on a PC screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/royal-x-casino-app-landing-page.webp`],
  },
};

/* Data shared between the visible lists and the JSON-LD (must stay identical) */

const EMULATOR_STEPS = [
  {
    name: "Install an Android emulator",
    text: "Download BlueStacks, LDPlayer or MEmu from the emulator's own website and run the installer on your Windows PC. Check the emulator's site for Mac support; options on macOS are more limited. Sign in to the emulator's Google account prompt or skip it; Royal X Casino is not installed through Google Play.",
  },
  {
    name: "Download the Royal X Casino APK on the PC",
    text: `Tap the download button on this page. It opens the operator's official landing page; download the ${APP_INFO.size} APK file and note where your browser saved it.`,
  },
  {
    name: "Install the APK inside the emulator",
    text: "Open the emulator, then either drag the APK file onto the emulator window or use its Install APK button and select the file. Wait until the Royal X Casino icon appears on the emulator home screen.",
  },
  {
    name: "Open the app and sign in",
    text: "Launch the app and let it download game assets. Log in with the same +92 mobile number and password you use on your phone, or register if you are new. The SMS code still arrives on your phone, so keep it nearby.",
  },
];

const BROWSER_STEPS = [
  {
    name: "Open the link in a desktop browser",
    text: "Click the download button on this page in Chrome, Edge, Firefox or Safari on your PC or Mac. The operator's page loads the browser version of the game instead of an APK.",
  },
  {
    name: "Log in or register",
    text: "Enter your +92 mobile number and password. New players register with the number, an SMS code and a password; the code is sent to the phone, not the PC.",
  },
  {
    name: "Bookmark the page",
    text: "Save the page as a bookmark or pin the tab so you can return without searching. Nothing is installed on the computer, so there is nothing to update.",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Is there a Royal X Casino app for Windows or Mac?",
    a: "No. There is no native Windows .exe or macOS app. On a computer you either play the browser version through the operator's link or run the Android APK inside an emulator such as BlueStacks, LDPlayer or MEmu.",
  },
  {
    q: "Which is better on PC: browser or emulator?",
    a: "The browser is faster to set up, needs no extra software and works on Mac. The emulator gives you the same app you use on your phone, including its layout and key mapping, but needs more RAM and disk space. Start with the browser and switch to an emulator only if you want the full app.",
  },
  {
    q: "Can I use the same Royal X Casino account on PC and phone?",
    a: "Yes. Your account is tied to your mobile number, not to a device. Log in on the PC with the same number and password and your balance, bonuses, VIP level and history are all there.",
  },
  {
    q: "How do I deposit when playing on PC?",
    a: "Open Deposit in the game as usual and choose EasyPaisa, JazzCash, bank transfer or USDT. Payment approval still happens on your phone, in your wallet app, so keep the phone with you. Minimum deposit is Rs. 100 and the maximum per transaction is Rs. 50,000.",
  },
  {
    q: "Why does the emulator lag or freeze?",
    a: "Emulators are heavy. Close other programs, give the emulator more RAM and CPU cores in its settings, enable virtualisation in your BIOS if it is off, and lower the emulator's resolution. If lag continues, the browser version is lighter.",
  },
  {
    q: "Why will the APK not install in BlueStacks or LDPlayer?",
    a: `The file may be incomplete. Check that it is ${APP_INFO.size}, delete it and download again. Also make sure the emulator runs a 64-bit Android image and that you are opening the APK with the emulator's installer rather than a Windows program.`,
  },
  {
    q: "Do I get a bigger bonus for playing on PC?",
    a: "No. Bonuses, VIP levels and promotions are tied to the account, not the device. The Rs. 10 welcome credit, 20% first-deposit rebate and daily rewards are the same whether you play on Android, PC or iPhone.",
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

export default function RoyalXCasinoForPCPage() {
  return (
    <>
      <HowToSchema
        name="How to install Royal X Casino on PC with an Android emulator"
        description="Four steps to run the Royal X Casino APK on a Windows PC using BlueStacks, LDPlayer or MEmu."
        steps={EMULATOR_STEPS}
        url="/royal-x-casino-for-pc"
      />
      <HowToSchema
        name="How to play Royal X Casino in a PC or Mac browser"
        description="Three steps to play the browser version of Royal X Casino on a Windows PC or Mac without installing anything."
        steps={BROWSER_STEPS}
        url="/royal-x-casino-for-pc"
      />
      <FaqSchema faqs={FAQS} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Royal X Casino for PC", url: "/royal-x-casino-for-pc" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Royal X Casino for PC: <span className="text-[#FFA500]">Browser or Emulator</span> on Windows and Mac
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            There is no native Windows or Mac version of Royal X Casino. You still have two working options on a
            computer: open the browser version through the operator&apos;s link, or run the Android APK inside an
            emulator such as BlueStacks, LDPlayer or MEmu. This page explains which to pick, how to set each one up,
            and what stays on your phone no matter where you play. The{" "}
            <Link href="/" className="text-accent hover:underline">
              Royal X Casino APK
            </Link>{" "}
            overview covers games, bonuses and payment limits in detail.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
            >
              <span>Open Royal X Casino on PC</span>
              <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                <DownloadIcon />
              </div>
            </a>
            <Disclosure />
          </div>
        </div>
        <div className="mt-10 max-w-4xl mx-auto">
          <Image
            src="/royal-x-casino-app-landing-page.webp"
            alt="Royal X Casino lobby with game categories displayed in a wide layout suited to a PC monitor"
            width={1200}
            height={540}
            className="rounded-xl border border-gray-700 w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </section>

      {/* Method comparison */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            Browser or emulator: which Royal X Casino PC method to pick
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Both methods use the same account and the same games. The difference is how much you install and how much
            of your computer&apos;s resources the game takes.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#0A1029] text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Factor</th>
                  <th className="py-3 px-4 text-left font-semibold">Browser version</th>
                  <th className="py-3 px-4 text-left font-semibold">Android emulator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Setup time", "Open the link and log in; nothing to install", "Install the emulator first, then the APK inside it"],
                  ["Performance", "Light; depends on your browser and connection", "Heavier; needs more RAM and CPU, but runs the full app"],
                  ["Works on Mac", "Yes, in any modern browser", "Limited; most emulators are Windows-first"],
                  ["Updates", "Always the current web version", `Manual: reinstall the APK when ${APP_INFO.version} is replaced`],
                  ["Best for", "Quick sessions, shared or work computers", "Players who want the phone app layout and key mapping"],
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
          <p className="text-gray-300 text-sm mt-4">
            Our advice: try the browser first. Move to an emulator only if you specifically want the app interface or
            keyboard shortcuts for games like Teen Patti and Andar Bahar.
          </p>
        </div>
      </section>

      {/* Emulator steps */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">
            How to install Royal X Casino on PC with BlueStacks, LDPlayer or MEmu
          </h2>
          <ol className="space-y-4">
            {EMULATOR_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-gray-300 text-sm mt-6">
            The Android install steps, Play Protect prompts and file-size check are explained on the{" "}
            <Link href="/royal-x-casino-download" className="text-accent hover:underline">
              Royal X Casino APK download page
            </Link>
            ; the same checks apply to a file you install in an emulator.
          </p>
        </div>
      </section>

      {/* Browser steps */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to play Royal X Casino in a PC browser</h2>
          <ol className="space-y-4">
            {BROWSER_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#0ea5e9]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Specs + sync */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Minimum PC specs for Royal X Casino</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Operating system:</strong> Windows 10 or 11, or a current macOS release
                for the browser method.
              </li>
              <li>
                <strong className="text-white">Memory:</strong> 4 GB RAM for the browser version; more is better if you
                run an emulator alongside other programs.
              </li>
              <li>
                <strong className="text-white">Storage:</strong> space for the emulator itself plus roughly 600 MB of
                game assets. The APK is only {APP_INFO.size}.
              </li>
              <li>
                <strong className="text-white">Internet:</strong> a stable broadband or 4G connection. Live card tables
                suffer more from an unstable link than from a slow one.
              </li>
              <li>
                <strong className="text-white">Virtualisation:</strong> emulators run far better when Intel VT-x or AMD-V
                is enabled in the BIOS. The browser version does not need it.
              </li>
            </ul>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Keeping your account in sync between phone and PC</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You do not need a second account, and the operator allows only one account per person and mobile number
              anyway. Log in on the PC with the same +92 number and password you use in the Android app. Your balance,
              bonus credit, VIP level, referral earnings and history live on the server, so whatever you see on one
              device appears on the other.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you forget the password, use Forgot password on either device; the reset code goes to your phone by
              SMS. Repeated wrong attempts can lock the account, in which case you contact in-app live chat. The{" "}
              <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline">
                login guide
              </Link>{" "}
              lists the common fixes.
            </p>
          </div>
        </div>
      </section>

      {/* Limits */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">What still happens on your phone</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Playing on a PC moves the screen, not the money. Deposits and withdrawals use the same EasyPaisa, JazzCash,
            bank transfer and USDT options, and the approval step for EasyPaisa and JazzCash happens in your wallet app
            on the phone. Deposits run from Rs. 100 to Rs. 50,000 per transaction; EasyPaisa and JazzCash withdrawals
            run from Rs. 600 to Rs. 50,000 per request and usually arrive in 10 to 30 minutes. The{" "}
            <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline">
              deposit guide
            </Link>{" "}
            and{" "}
            <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">
              withdrawal guide
            </Link>{" "}
            cover each method.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Login and password-reset codes also arrive by SMS on the phone, so you cannot register or recover an account
            from a PC alone. Keep the wallet name identical to the name on your account; a mismatch is the most common
            reason a first withdrawal is delayed, whichever device you requested it from.
          </p>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino PC troubleshooting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              [
                "Emulator lag or freezing",
                "Close other programs, raise the RAM and CPU allocation in the emulator settings, lower its resolution and enable virtualisation in the BIOS. If it is still slow, use the browser version; it is much lighter.",
              ],
              [
                "APK will not install in the emulator",
                `Confirm the file is ${APP_INFO.size} and was not cut off. Open it with the emulator's own installer, not a Windows program. If the emulator offers a 64-bit Android instance, use that one.`,
              ],
              [
                "Login OTP not arriving",
                "The code is sent to the phone number on the account, not to the PC. Check the phone's signal, wait up to two minutes, then request a resend. Confirm the number is entered in +92 format.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#0A1029] rounded-lg p-5 border border-gray-800">
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm mt-6">
            Using an iPhone or iPad instead of a computer? There is no iOS app either; the{" "}
            <Link href="/royal-x-casino-for-ios" className="text-accent hover:underline">
              Royal X Casino for iOS page
            </Link>{" "}
            explains the Safari and Home Screen method.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino for PC FAQs</h2>
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
          A bigger screen does not change the odds. Royal X Casino is a real-money gambling product for players aged 18
          and over, you can lose what you deposit, and online gambling sits in a legal grey area in Pakistan. Decide a
          budget before you sit down at the computer and read our{" "}
          <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">
            Responsible Gaming Guide for Royal X Casino Players
          </Link>
          .
        </p>
      </section>
    </>
  );
}
