import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";

const PAGE_PATH = "/how-to-login-royal-x-casino";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "Royal X Casino Login: Sign In Steps and Problem Fixes 2026";
const DESCRIPTION =
  "Log in to Royal X Casino with your +92 number and password, reset a forgotten password by SMS, and fix wrong password, OTP, locked account and network errors.";
const OG_IMAGE = `${SITE_URL}/royal-x-casino-app-landing-page.webp`;

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
        alt: "Royal X Casino welcome screen with the Login and Register buttons",
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

const LOGIN_STEPS = [
  {
    name: "Open Royal X Casino",
    text: "Launch the app on your Android phone, or open the browser version on an iPhone or PC, and wait for the welcome screen to load fully.",
  },
  {
    name: "Tap Log In and enter your mobile number",
    text: "Choose Log In rather than Register. Type the +92 number you registered with, without the leading 0.",
  },
  {
    name: "Enter your password",
    text: "Type the password you set at registration. Use the eye icon to show the characters and check for typos before submitting.",
  },
  {
    name: "Tap Log In and check the lobby",
    text: "Tap Log In. The lobby opens with your wallet balance at the top. If a daily login reward is available, claim it from the promotions area.",
  },
];

const RESET_STEPS = [
  "On the login screen, tap Forgot password.",
  "Enter your registered +92 mobile number.",
  "Wait up to 2 minutes for the SMS code and type it in. Tap Resend if it does not arrive.",
  "Set a new password that you have not used on any other app.",
  "Return to the login screen and sign in with the new password.",
];

const FAQS: FaqItem[] = [
  {
    q: "What do I use to log in to Royal X Casino?",
    a: "Your registered Pakistani mobile number in +92 format and the password you set at sign-up. There is no separate username; the number is your account ID.",
  },
  {
    q: "Can I use the same account on my phone, PC and iPhone?",
    a: "Yes. One account works everywhere: the APK on Android, the browser version or an emulator on PC, and Safari or Chrome on iPhone. Log in with the same number and password on each.",
  },
  {
    q: "How do I reset a forgotten Royal X Casino password?",
    a: "Tap Forgot password on the login screen, enter your registered number, type the SMS code and set a new password. The code can take up to 2 minutes; use Resend if needed.",
  },
  {
    q: "Why is my Royal X Casino account locked?",
    a: "Accounts lock after repeated wrong login attempts. Stop retrying and contact in-app live chat from the login screen; support can verify you and unlock the account.",
  },
  {
    q: "The app shows a network error at login. What should I do?",
    a: "Switch between Wi-Fi and mobile data, turn off any VPN, confirm other apps load, then reopen Royal X Casino. If it persists, clear the app cache and make sure you are on the current version.",
  },
  {
    q: "Why does my old version of the app refuse to log in?",
    a: "Older APK builds lose compatibility with the login and payment servers and miss security patches. Install the current build over the old one and sign in again; your balance stays on the account.",
  },
  {
    q: "I changed my phone number. Can I still log in?",
    a: "Yes, with the old number and your password. For password resets or to move the account to a new number, contact in-app live chat and be ready to prove ownership.",
  },
  {
    q: "Is there a Royal X Casino login website?",
    a: "The browser version opens from the same official link as the APK. Be wary of search results and messages leading to look-alike login pages; they exist to steal passwords and OTPs.",
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

export default function HowToLoginRoyalXCasinoPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "How to Login", url: PAGE_PATH },
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
        name="How to log in to Royal X Casino"
        description="Sign in to your Royal X Casino account with your registered +92 mobile number and password."
        url={PAGE_PATH}
        image={OG_IMAGE}
        steps={LOGIN_STEPS}
      />
      <FaqSchema faqs={FAQS} />

      <article className="px-4 md:px-8 max-w-7xl mx-auto pb-12">
        {/* Hero */}
        <header className="py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Royal X Casino Login: <span className="text-[#FFA500]">How to Sign In and Fix Login Problems</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-4">
            Logging in to Royal X Casino needs two things: the +92 mobile number you registered with and your password.
            This page covers the sign-in steps, logging in from a new phone, PC or iPhone, the SMS password reset, and a
            troubleshooting section for the errors players report most.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">
            No account yet? Follow the{" "}
            <Link href="/how-to-register-royal-x-casino" className="text-accent hover:underline">
              Royal X Casino registration guide
            </Link>{" "}
            first. If you still need the app, download the{" "}
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

        {/* Login steps */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Royal X Casino login steps</h2>
          <p className="text-gray-300 mb-6">
            The welcome screen below appears once the app finishes loading. Login takes well under a minute.
          </p>
          <figure className="mb-8 rounded-lg overflow-hidden border border-gray-700 bg-[#0A1029]">
            <Image
              src="/royal-x-casino-app-landing-page.webp"
              alt="Royal X Casino welcome screen showing the Log In and Register buttons before entering the game lobby"
              width={1200}
              height={540}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto"
              priority
            />
            <figcaption className="px-4 py-2 text-sm text-gray-300">
              Tap Log In on the welcome screen, not Register, if you already have an account.
            </figcaption>
          </figure>
          <ol className="space-y-4">
            {LOGIN_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-4 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* New device */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            Logging in on a new phone, PC or iPhone
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your account lives on the operator&apos;s server, not on the device, so the same number and password work
            anywhere and your balance follows you.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong className="text-white">New Android phone:</strong> install the current APK, tap Log In and enter
              your details. Let the first-run game assets download before judging whether login worked.
            </li>
            <li>
              <strong className="text-white">PC or laptop:</strong> there is no Windows or Mac app. Use the browser version
              or run the APK in an Android emulator such as BlueStacks, LDPlayer or MEmu; the{" "}
              <Link href="/royal-x-casino-for-pc" className="text-accent hover:underline">
                Royal X Casino for PC guide
              </Link>{" "}
              explains both.
            </li>
            <li>
              <strong className="text-white">iPhone or iPad:</strong> there is no iOS app. Open the browser version in
              Safari or Chrome, log in with the same details and use Add to Home Screen for an app-like icon. Details
              are in the{" "}
              <Link href="/royal-x-casino-for-ios" className="text-accent hover:underline">
                Royal X Casino for iOS guide
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* Forgot password */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Forgot password: reset by SMS code</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The reset only works if you still have the SIM for your registered number, because the code arrives by SMS.
            If you do, it takes about two minutes:
          </p>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            {RESET_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Troubleshooting */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            Royal X Casino login problems and solutions
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Most login failures come down to one of seven causes. Work through the matching section before you contact
            support.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-accent mb-2">Wrong password</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tap the eye icon to reveal what you typed and check for capitals, swapped digits or a stray space from
                autocorrect. If you are not sure, do not keep guessing; repeated failures lock the account. Use Forgot
                password and reset it with the SMS code instead.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-2">OTP not received</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The SMS code can take up to 2 minutes; wait the full time before tapping Resend. Check the number is in
                +92 format without a leading 0, that the phone has signal and that unknown senders are not filtered.
                Restarting the phone often clears a stuck SMS queue. If several resends fail, open live chat from the
                login screen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-2">Account locked after repeated attempts</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Repeated wrong passwords trigger a lock to protect the wallet, and trying again will not clear it.
                Contact in-app live chat, confirm your registered number and recent activity, and support will release
                the account. Reset the password straight afterwards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-2">&quot;Network error&quot; message</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Switch between Wi-Fi and mobile data, turn off any VPN or proxy and confirm other apps load. Then
                force-close Royal X Casino and reopen it. If the error continues, clear the app cache and confirm you
                are running {APP_INFO.version}; outdated builds are rejected in a way that can look like a connection
                fault.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-2">App crashes at the login screen</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A crash right after launch usually means the first-run assets are incomplete or storage is low. Keep
                roughly 600 MB free, let the download finish on Wi-Fi and close background apps on low-RAM phones. If it
                still crashes, reinstall the current APK and log in again; nothing is lost because the account is
                server-side.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-2">Number changed or SIM lost</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                You can still log in with the old number and password, but you cannot receive reset codes. If your
                network can reissue the same number on a new SIM, do that first. Otherwise contact live chat and be ready
                to prove ownership with details such as recent deposit records. Do not open a second account on the new
                number; one account per person is the rule.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent mb-2">Old app version rejected</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Older builds break login and payment features and miss security patches, so the server may refuse them.
                Install the current {APP_INFO.version} build from the{" "}
                <Link href="/royal-x-casino-download" className="text-accent hover:underline">
                  Royal X Casino download page
                </Link>{" "}
                over the existing app; if Android reports a signature conflict, uninstall the old build first. More on
                why we do not recommend them is on the{" "}
                <Link href="/royal-x-casino-old-versions" className="text-accent hover:underline">
                  old versions page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Live chat */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            When to contact live chat and what to have ready
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Use in-app live chat, available around the clock, when the account is locked, when OTPs fail after several
            resends, or when you have lost access to your number. For a forgotten password with the SIM in hand, use the
            reset flow instead. Have these ready:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>Your registered +92 mobile number.</li>
            <li>The exact error message or a screenshot of it.</li>
            <li>Your app version and phone model.</li>
            <li>Approximate dates and amounts of your last deposit or withdrawal, to prove ownership.</li>
          </ul>
          <p className="text-gray-300 text-sm leading-relaxed">
            Never send your password or an OTP in the chat; genuine support does not need either. This website is an
            independent guide and cannot access your account. To report a problem with our content, use the{" "}
            <Link href="/royal-x-casino-contact-us" className="text-accent hover:underline">
              contact page
            </Link>
            .
          </p>
        </section>

        {/* Security */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Keeping your login secure</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong className="text-white">Do not share OTPs.</strong> A code lets anyone reset your password and empty
              the wallet. Anyone asking for it on WhatsApp, Telegram or by phone is not support.
            </li>
            <li>
              <strong className="text-white">Log out on shared devices.</strong> On a friend&apos;s phone, a cyber cafe
              PC or an emulator you do not own, log out and clear the browser session when you finish.
            </li>
            <li>
              <strong className="text-white">Beware of fake login pages.</strong> Copycat sites and ads imitate the
              login screen to harvest numbers and passwords. Open the app or browser version only from the official link.
              Our article on{" "}
              <Link href="/blog/is-royal-x-casino-real-or-fake" className="text-accent hover:underline">
                whether Royal X Casino is real or fake
              </Link>{" "}
              covers how to spot impostors.
            </li>
            <li>
              <strong className="text-white">Use a unique password</strong> and change it if you ever enter it on a page
              you later doubt.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino login FAQs</h2>
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
              Get the latest Royal X Casino APK
            </a>
            <Disclosure />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            18+ only. Royal X Casino is a real-money gambling app and losses are possible. Keep sessions short and stakes
            small, and read our{" "}
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
