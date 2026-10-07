import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import HowToSchema from "@/components/HowToSchema";
import ArticleSchema from "@/components/ArticleSchema";
import FaqSchema, { type FaqItem } from "@/components/FaqSchema";
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from "@/lib/config";

const PAGE_PATH = "/how-to-register-royal-x-casino";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "How to Register on Royal X Casino: Sign-Up Guide 2026";
const DESCRIPTION =
  "Register a Royal X Casino account in 2–3 minutes with a +92 mobile number, SMS OTP and password. Referral code tips, sign-up error fixes and what to do first.";
const OG_IMAGE = `${SITE_URL}/royal-x-casino-registration-page.webp`;

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
        alt: "Royal X Casino registration form with mobile number, OTP and password fields",
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

const REGISTER_STEPS = [
  {
    name: "Open the app and tap Register",
    text: "Launch Royal X Casino on your Android phone, or open the browser version on iPhone or PC, and tap Register on the welcome screen.",
  },
  {
    name: "Enter your Pakistani mobile number",
    text: "Type the number in +92 format and drop the leading 0, so 03XX becomes +92 3XX. Use a SIM that can receive SMS right now.",
  },
  {
    name: "Request and enter the SMS OTP",
    text: "Tap Get Code, wait up to 2 minutes for the SMS and type the code into the verification field. Tap Resend if nothing arrives after 2 minutes.",
  },
  {
    name: "Set a password and add a referral code",
    text: "Create a password you do not use on any other app. If a friend gave you an invite or referral code, enter it in the optional field now.",
  },
  {
    name: "Accept the terms and finish",
    text: "Confirm you are 18 or older, accept the terms and tap Register. The account opens with Rs. 10 welcome credit already in the wallet.",
  },
];

const SIGNUP_ERRORS = [
  {
    error: "OTP not received",
    cause: "Weak signal, SMS filtered by the phone, wrong number format or a short operator delay.",
    fix: "Wait the full 2 minutes, tap Resend, check there is no leading 0 after +92, move to better signal and restart the phone. If several resends fail, open live chat from the login screen.",
  },
  {
    error: "Number already registered",
    cause: "An account already exists for that SIM. One account per person and per number.",
    fix: "Go back and tap Log In. If you do not remember the password, use Forgot password and reset it with the SMS code.",
  },
  {
    error: "Invalid number format",
    cause: "Leading 0 kept, a digit missing, or spaces and dashes in the field.",
    fix: "Enter exactly 10 digits after +92 with no spaces or dashes.",
  },
  {
    error: "App stuck on loading or Register does nothing",
    cause: "Game assets still downloading, low storage or an outdated APK build.",
    fix: `Let the first-run download finish (keep roughly 600 MB free), clear the app cache and confirm you have the current ${APP_INFO.version} build.`,
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Is it free to register on Royal X Casino?",
    a: "Yes. Creating an account costs nothing and the app adds Rs. 10 welcome credit on completion. You only spend money if you choose to deposit; the minimum deposit is Rs. 100.",
  },
  {
    q: "How long does Royal X Casino sign-up take?",
    a: "Usually 2 to 3 minutes. Most of that is waiting for the SMS OTP, which can take up to 2 minutes. The form asks only for your mobile number, the code, a password and an optional referral code.",
  },
  {
    q: "Can I register with a non-Pakistani number?",
    a: "The registration form is built for Pakistani +92 numbers and the OTP is sent to that number by SMS. Use a Pakistani SIM that can receive text messages.",
  },
  {
    q: "Can I create more than one Royal X Casino account?",
    a: "No. The rule is one account per person and per mobile number. If the app says your number is already registered, log in to that account or reset its password.",
  },
  {
    q: "Where do I enter a Royal X Casino referral code?",
    a: "In the optional invite code field on the registration form. The person who shared it receives Rs. 20 when you register and up to Rs. 1,000 as your deposits reach Rs. 1,000. You get the Rs. 10 welcome credit with or without a code.",
  },
  {
    q: "The OTP never arrives. What should I do?",
    a: "Wait 2 minutes, then tap Resend. Check the number has no leading 0 after +92, that your phone has signal and that unknown senders are not blocked. If repeated resends fail, contact in-app live chat.",
  },
  {
    q: "Does my account name need to match my EasyPaisa or JazzCash name?",
    a: "Yes. Use exactly the name on the wallet you will withdraw to. A mismatch is a common reason a first withdrawal is delayed or rejected.",
  },
  {
    q: "Can I sign up on an iPhone or a PC?",
    a: "Yes. There is no native iOS or Windows app, but the browser version opens from the same link with the same form. The account works on any device you later log in from.",
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

export default function HowToRegisterRoyalXCasinoPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "How to Register", url: PAGE_PATH },
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
        name="How to register a Royal X Casino account"
        description="Create a Royal X Casino account with a Pakistani mobile number, SMS OTP and password in about 2 to 3 minutes."
        url={PAGE_PATH}
        image={OG_IMAGE}
        steps={REGISTER_STEPS}
      />
      <FaqSchema faqs={FAQS} />

      <article className="px-4 md:px-8 max-w-7xl mx-auto pb-12">
        {/* Hero */}
        <header className="py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            How to Register on Royal X Casino: <span className="text-[#FFA500]">Step-by-Step Sign-Up Guide</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-4">
            Signing up for Royal X Casino takes 2 to 3 minutes and needs only a Pakistani mobile number. The app sends an
            SMS code, you set a password, and the account is live with Rs. 10 welcome credit. This guide covers every
            screen, the referral code field and the sign-up errors people hit most often.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">
            If you have not installed the app yet, get the{" "}
            <Link href="/" className="text-accent hover:underline">
              Royal X Casino APK
            </Link>{" "}
            first; the install walkthrough is on the{" "}
            <Link href="/royal-x-casino-download" className="text-accent hover:underline">
              Royal X Casino download page
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

        {/* Before you start */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">What you need before you start</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong className="text-white">An Android phone with the APK installed</strong> ({APP_INFO.androidMin}),
              or the browser version on an iPhone, iPad or PC. Both use the same registration form.
            </li>
            <li>
              <strong className="text-white">An active +92 mobile number</strong> that can receive SMS. The one-time code
              goes to this number, and the number becomes your login ID.
            </li>
            <li>
              <strong className="text-white">You must be 18 or older.</strong> Royal X Casino is a real-money gambling
              app.
            </li>
            <li>
              <strong className="text-white">Optional: a referral or invite code</strong> from a friend, entered on the
              sign-up form.
            </li>
          </ul>
        </section>

        {/* Steps */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Royal X Casino sign-up steps</h2>
          <p className="text-gray-300 mb-6">
            The screenshot shows the form you will see after tapping Register. Follow the five steps in order.
          </p>
          <figure className="mb-8 rounded-lg overflow-hidden border border-gray-700 bg-[#0A1029]">
            <Image
              src="/royal-x-casino-registration-page.webp"
              alt="Royal X Casino registration form asking for a +92 mobile number, SMS verification code, password and optional invite code"
              width={1200}
              height={540}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto"
              priority
            />
            <figcaption className="px-4 py-2 text-sm text-gray-300">
              The Royal X Casino registration form: mobile number, OTP, password and the optional invite code field.
            </figcaption>
          </figure>
          <ol className="space-y-4">
            {REGISTER_STEPS.map((s, i) => (
              <li key={s.name} className="bg-[#0A1029] rounded-lg p-4 border-l-4 border-[#FFA500]">
                <h3 className="font-bold text-white mb-1">
                  Step {i + 1}: {s.name}
                </h3>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Password */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Choosing a strong password</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your password protects a wallet that will hold real rupees, so treat it like a banking password rather than a
            game login.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Mix letters, numbers and at least one symbol; avoid your name, mobile number or birth year.</li>
            <li>Do not reuse the password from your EasyPaisa, JazzCash, email or social accounts.</li>
            <li>Save it in your phone&apos;s password manager rather than a screenshot or chat message.</li>
            <li>
              If you forget it, Forgot password on the login screen sends an SMS code to your number. The{" "}
              <Link href="/how-to-login-royal-x-casino" className="text-accent hover:underline">
                Royal X Casino login guide
              </Link>{" "}
              covers the reset flow and other sign-in problems.
            </li>
          </ul>
        </section>

        {/* Referral code */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
            Where to enter a referral or invite code and what it gives
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The referral code field sits on the registration form, marked optional. Enter the code exactly as your
            friend sent it before you tap Register. Who gets what:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>
              <strong className="text-white">You</strong> receive the Rs. 10 welcome credit on registration. Every new
              account gets it, with or without a code.
            </li>
            <li>
              <strong className="text-white">The person who invited you</strong> receives Rs. 20 when you register with
              their code, and up to Rs. 1,000 more as your deposits reach Rs. 1,000.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Referral codes are different from promotional redeem codes, which you enter after sign-up under Promotions
            and Redeem Code. Our{" "}
            <Link href="/royal-x-casino-redeem-code" className="text-accent hover:underline">
              Royal X Casino redeem code guide
            </Link>{" "}
            explains where those codes are published and how to use them.
          </p>
        </section>

        {/* Verification */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Verifying your Royal X Casino account</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Verification at sign-up is a single SMS OTP sent to your +92 number. Once you enter it the account is
            active. Keep that SIM: if you lose access to the number you also lose the easy path to password resets.
          </p>
          <p className="text-gray-300 leading-relaxed">
            One detail matters more than it looks: when the app asks for your name, type the exact name on your
            EasyPaisa or JazzCash account. Withdrawals are paid only to a wallet whose name matches your account
            details, and a mismatch is a common reason a first payout is held. The{" "}
            <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">
              withdrawal guide
            </Link>{" "}
            explains the full check.
          </p>
        </section>

        {/* Errors table */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Common sign-up errors and how to fix them</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#0A1029] text-white">
                <tr>
                  {["Error", "Usual cause", "Fix"].map((h) => (
                    <th key={h} className="py-3 px-4 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {SIGNUP_ERRORS.map((row) => (
                  <tr key={row.error}>
                    <td className="py-3 px-4 font-medium text-white align-top">{row.error}</td>
                    <td className="py-3 px-4 align-top">{row.cause}</td>
                    <td className="py-3 px-4 align-top">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* After registering */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">What to do first after registering</h2>
          <ol className="list-decimal pl-6 text-gray-300 space-y-3">
            <li>
              <strong className="text-white">Check the Rs. 10 welcome credit.</strong> Open the wallet and confirm the
              balance. It is small, but it lets you open a table or spin a slot before depositing.
            </li>
            <li>
              <strong className="text-white">Try the free modes.</strong> Many games have a free-trial or demo mode; use
              it to learn the pace before real money is involved. The{" "}
              <Link
                href="/blog/how-to-use-royal-x-casino-app-pakistan-guide-2026"
                className="text-accent hover:underline"
              >
                guide to using the Royal X Casino app
              </Link>{" "}
              tours each section of the lobby.
            </li>
            <li>
              <strong className="text-white">Decide whether to deposit.</strong> Your first deposit earns a one-time 20%
              rebate, so Rs. 1,000 becomes Rs. 1,200 in play balance. Bonus credit may need betting turnover before
              withdrawal; check the in-app bonus terms. Methods and limits are in the{" "}
              <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline">
                Royal X Casino deposit guide
              </Link>
              .
            </li>
            <li>
              <strong className="text-white">Claim daily login rewards.</strong> The login calendar, weekly promotions
              and VIP levels are explained in the{" "}
              <Link href="/blog/royal-x-casino-bonuses-vip-guide" className="text-accent hover:underline">
                Royal X Casino bonuses and VIP guide
              </Link>
              .
            </li>
          </ol>
        </section>

        {/* Security */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">Account security tips</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Never share an OTP. Support does not need it; anyone asking for it is trying to take the account.</li>
            <li>Install the APK only from the official link. Modified or &quot;hack&quot; versions can capture your password.</li>
            <li>Log out when you finish on a shared or borrowed phone.</li>
            <li>Keep your SIM active and your phone locked; the number is the key to password resets.</li>
            <li>Update when a new version is released; older builds miss security patches and can fail at login and payment.</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="bg-secondary rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Royal X Casino registration FAQs</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
                <summary className="p-4 cursor-pointer text-white font-medium hover:text-[#FFA500]">{faq.q}</summary>
                <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Closing CTA + responsible gaming */}
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
            18+ only. Royal X Casino is a real-money gambling app and you can lose what you deposit. Set a budget before
            you play and read our{" "}
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
