import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import FaqSchema, { FaqItem } from "@/components/FaqSchema";

const PAGE_URL = `${SITE_URL}/royal-x-casino-old-versions`;
const TITLE = "Royal X Casino Old Version: Why the Latest APK Is Safer";
const DESCRIPTION =
  "Looking for a Royal X Casino old version? Why outdated APKs break login and payments, fixes for slow phones and failed updates, and how to update safely.";

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
        alt: "Royal X Casino app icon representing the current APK build",
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

/* Data shared between the visible list and the JSON-LD (must stay identical) */

const UPDATE_STEPS = [
  {
    name: "Note your login details",
    text: "Your account is tied to your +92 mobile number and password, not to the APK file. Make sure you remember both, or use Forgot password to reset by SMS first.",
  },
  {
    name: "Download the current APK",
    text: `Tap the download button on this page to open the operator's official landing page and download ${APP_INFO.version} (${APP_INFO.size}). Avoid files shared in Telegram groups or labelled mod or hack.`,
  },
  {
    name: "Install over the existing app",
    text: "Open the downloaded file and tap Install. Android updates the app in place. If you see App not installed, uninstall the old build first and install again.",
  },
  {
    name: "Log in and check the version",
    text: `Sign in with your number and password and confirm the version shown inside the app matches ${APP_INFO.version}. Your balance, bonuses and history load from the server.`,
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Can I download an old version of Royal X Casino?",
    a: `Older APKs exist on third-party sites, but we do not link or recommend them. Payment and login features break as the server moves on, and old builds miss security fixes. Only the current build, ${APP_INFO.version}, is offered here.`,
  },
  {
    q: "Will an old version still let me deposit and withdraw?",
    a: "Usually not for long. The EasyPaisa, JazzCash and USDT flows depend on server-side changes the old build does not understand, so deposits can fail to credit and withdrawals can be rejected. Update before moving money.",
  },
  {
    q: "Will I lose my account or balance if I update?",
    a: "No. Your account is tied to your mobile number, and your balance, bonus credit, VIP level and history are stored on the operator's server. Installing, uninstalling or reinstalling the APK does not touch them.",
  },
  {
    q: "The update failed with App not installed. What now?",
    a: `Uninstall the existing app, delete the old APK from Downloads, download ${APP_INFO.version} again and install it. Check the file is ${APP_INFO.size}; a smaller file was cut off during download.`,
  },
  {
    q: "My phone is old and the new version is slow. Is an old APK the fix?",
    a: `No. Free up storage so roughly 600 MB is available for game assets, clear the app cache, close background apps and use Wi-Fi for the first load. The app supports ${APP_INFO.androidMin}.`,
  },
  {
    q: "What if the latest version really broke something?",
    a: "Uninstall, reinstall the current APK and log in again; that fixes most corrupted updates. If a feature still fails, report it through in-app live chat with your account number and phone model. Rolling back to an old file is not the answer.",
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

export default function RoyalXCasinoOldVersionsPage() {
  return (
    <>
      <HowToSchema
        name="How to update Royal X Casino safely without losing your account"
        description={`Four steps to move from an old Royal X Casino APK to the current ${APP_INFO.version} build while keeping your account, balance and history.`}
        steps={UPDATE_STEPS}
        url="/royal-x-casino-old-versions"
      />
      <FaqSchema faqs={FAQS} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Royal X Casino Old Versions", url: "/royal-x-casino-old-versions" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between md:space-x-12">
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Royal X Casino Old Version: <span className="text-[#FFA500]">Should You Install One?</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Short answer: no. Older Royal X Casino APKs exist on third-party sites, but installing one usually
              creates the problem you were trying to avoid. This page explains why, gives the real fix for each reason
              people look for an old version, and shows how to update to {APP_INFO.version} safely. The{" "}
              <Link href="/" className="text-accent hover:underline">
                Royal X Casino APK
              </Link>{" "}
              overview has the full feature and payment details.
            </p>
            <div className="flex flex-col items-center gap-3 my-6">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>Get the current APK ({APP_INFO.version})</span>
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
              alt="Royal X Casino app icon for the current build, the only version linked on this site"
              width={240}
              height={240}
              className="object-contain drop-shadow-2xl"
              priority
              sizes="240px"
            />
          </div>
        </div>
      </section>

      {/* Why not */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            Why an old Royal X Casino APK is a bad idea
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The app is a thin client: your wallet, the games and the payment gateways run on the operator&apos;s
            servers, which change over time. An old APK talks to them in an outdated way, and three things go wrong.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              [
                "Payments and login break",
                "EasyPaisa, JazzCash and USDT flows are updated server-side. An old build can leave a deposit pending, reject a withdrawal request or mishandle the SMS login code.",
              ],
              [
                "Fixes are missing",
                "Each release fixes crashes, loading errors and game bugs. Rolling back brings every one of those problems back, including ones you have not hit yet.",
              ],
              [
                "Security patches are missing",
                "Old builds lack the latest security fixes, and the files come from unofficial sources that may have repackaged them. You cannot verify what else is inside.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#0A1029] rounded-lg p-5 border border-gray-800">
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons + real fixes */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            When people search for a Royal X Casino old version, and the real fix
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Almost every search for an older build comes from one of three situations, and each has a better solution
            than downgrading.
          </p>
          <div className="space-y-4">
            <div className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#FFA500]">
              <h3 className="font-bold text-white mb-2">The phone is old or low on storage</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The current APK is only {APP_INFO.size} and supports {APP_INFO.androidMin}, so the build is rarely the
                issue. Slowness comes from the roughly 600 MB of game assets fighting for space. Free storage using the
                steps below, then reinstall. If the phone runs Android below 5.0, no version will install, and the browser
                version on the{" "}
                <Link href="/royal-x-casino-for-pc" className="text-accent hover:underline">
                  PC guide
                </Link>{" "}
                or{" "}
                <Link href="/royal-x-casino-for-ios" className="text-accent hover:underline">
                  iOS guide
                </Link>{" "}
                is the fallback.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#FFA500]">
              <h3 className="font-bold text-white mb-2">You preferred the old interface</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Layout changes are annoying, but the old lobby ran against servers that have moved on. Give the new
                layout a week; tables and payment screens are still there even when the menu changes. Downgrading trades
                a cosmetic preference for broken deposits.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#FFA500]">
              <h3 className="font-bold text-white mb-2">The update failed or the app crashes after updating</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A failed install leaves a half-updated app. The fix is a clean reinstall of the current build (see
                below), not the previous file. If the app opens but you cannot sign in, the{" "}
                <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline">
                  login guide
                </Link>{" "}
                covers OTP delays, +92 number format and locked accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Update steps */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            How to update Royal X Casino safely without losing your account
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Your account is tied to your mobile number, not to the APK file, so you can install, uninstall and
            reinstall as often as needed.
          </p>
          <ol className="space-y-4">
            {UPDATE_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#0ea5e9]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-gray-300 text-sm mt-6">
            Full install instructions with screenshots, Play Protect prompts and the file-size check are on the{" "}
            <Link href="/royal-x-casino-download" className="text-accent hover:underline">
              Royal X Casino APK download page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Rollback + storage */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">If an update actually broke something</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sometimes an update does go wrong: crashes on launch, assets that never finish loading, a table that will
              not open. The fix is a clean reinstall, not a downgrade.
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>
                <strong className="text-white">Uninstall</strong> Royal X Casino from Settings, Apps to remove the
                half-updated files and cached assets.
              </li>
              <li>
                <strong className="text-white">Reinstall the current APK</strong> from the button above and let the game
                assets download fully on Wi-Fi.
              </li>
              <li>
                <strong className="text-white">Log in</strong> and confirm your balance is as expected.
              </li>
              <li>
                <strong className="text-white">Contact in-app live chat</strong> if the same feature still fails, with
                your account number, phone model and Android version. Support runs around the clock.
              </li>
            </ul>
            <p className="text-gray-300 text-sm mt-4">
              If the problem is a pending withdrawal rather than the app itself, the{" "}
              <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">
                withdrawal guide
              </Link>{" "}
              explains the usual causes of delays.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">How to free storage on a low-end phone</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Aim for roughly 600 MB free before you reinstall.
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>
                <strong className="text-white">Clear the app cache:</strong> Settings, Apps, Royal X Casino, Storage,
                Clear cache. Temporary files go; your login stays.
              </li>
              <li>
                <strong className="text-white">Delete old APK files</strong> from the Downloads folder; they are dead
                weight once installed.
              </li>
              <li>
                <strong className="text-white">Move photos and videos</strong> to an SD card or cloud backup; media is
                usually the largest block of storage.
              </li>
              <li>
                <strong className="text-white">Clear WhatsApp media</strong> under Settings, Storage and data, Manage
                storage.
              </li>
              <li>
                <strong className="text-white">Uninstall unused apps</strong> and restart the phone before installing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Version table */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Royal X Casino version list</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We publish only the version we can verify. Historical version numbers, sizes and dates we cannot confirm
            are not listed, and older files are not hosted or linked.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#0A1029] text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Version</th>
                  <th className="py-3 px-4 text-left font-semibold">Size</th>
                  <th className="py-3 px-4 text-left font-semibold">Updated</th>
                  <th className="py-3 px-4 text-left font-semibold">Android</th>
                  <th className="py-3 px-4 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">{APP_INFO.version} (current)</td>
                  <td className="py-3 px-4">{APP_INFO.size}</td>
                  <td className="py-3 px-4">{APP_INFO.updated}</td>
                  <td className="py-3 px-4">{APP_INFO.androidMin}</td>
                  <td className="py-3 px-4 text-green-400">Recommended; linked via the button above</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Older builds</td>
                  <td className="py-3 px-4">Not provided</td>
                  <td className="py-3 px-4">Not provided</td>
                  <td className="py-3 px-4">Not provided</td>
                  <td className="py-3 px-4 text-amber-400">
                    Not linked: payments and login break, security fixes are missing, third-party files cannot be verified
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino old version FAQs</h2>
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
          and online gambling sits in a legal grey area in Pakistan. Set a budget in advance and read our{" "}
          <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">
            Responsible Gaming Guide for Royal X Casino Players
          </Link>
          .
        </p>
      </section>
    </>
  );
}
