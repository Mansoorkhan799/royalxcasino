import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

const PAGE_URL = `${SITE_URL}/royal-x-casino-contact-us`;
const TITLE = "Contact Royal X Casino PK: Support and Questions";
const DESCRIPTION =
  "Reach the Royal X Casino PK website team by form or email. For account, deposit or withdrawal problems use the app's 24/7 live chat or official channels.";

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
        url: `${SITE_URL}/royal-x-casino-logo.webp`,
        width: 1000,
        height: 1000,
        alt: "Gold Royal X Casino logotype with a casino chip on the Royal X Casino PK contact page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/royal-x-casino-logo.webp`],
  },
};

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": PAGE_URL,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Royal X Casino PK",
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@royalexcasino.com.pk",
      contactType: "website support",
      availableLanguage: ["English", "Urdu"],
    },
  },
};

const BEFORE_YOU_CONTACT = [
  {
    href: "/how-to-login-royal-x-casino",
    label: "Login and password reset guide",
    text: "OTP not arriving, wrong password, locked account, +92 number format.",
  },
  {
    href: "/royal-x-casino-deposit-guide",
    label: "EasyPaisa and JazzCash deposit guide",
    text: "Rs. 100 minimum, Rs. 50,000 maximum, crediting times and bank transfer rules.",
  },
  {
    href: "/royal-x-casino-withdraw-guide",
    label: "Withdrawal guide",
    text: "Rs. 600 minimum, 10 to 30 minute payouts, name matching and first-withdrawal checks.",
  },
  {
    href: "/royal-x-casino-download",
    label: "APK download and install guide",
    text: "Install blocked, app not installed, parse error, updating to the current version.",
  },
  {
    href: "/#faqs",
    label: "Royal X Casino FAQs",
    text: "Common questions about safety, payments, bonuses and the Google Play listing.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(contactPageSchema) }} />

      <div className="container mx-auto max-w-4xl">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Contact Us", url: "/royal-x-casino-contact-us" },
          ]}
        />

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Contact Royal X Casino PK: Support and Questions
          </h1>
          <p className="text-lg text-gray-400">Reach the team behind this website, not the app operator</p>
        </div>

        <section className="bg-amber-900/20 rounded-2xl p-6 md:p-8 border border-amber-700/50 mb-8">
          <h2 className="text-xl font-bold mb-3 text-amber-400">Who this form reaches</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            royalexcasino.com.pk is an independent informational website about the Royal X Casino app. The form and
            email on this page reach the website team only. We cannot see your player account, release a withdrawal,
            credit a deposit or reset your password.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For anything involving your account or money, use the app&apos;s <strong className="text-white">in-app live
            chat</strong>, which runs 24/7 and can see your transactions, or the operator&apos;s official Telegram and
            WhatsApp channels linked inside the app. Do not send us your password, OTP or wallet details; we never ask for
            them.
          </p>
        </section>

        <section className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Before you contact us</h2>
          <p className="text-gray-300 mb-4">
            Most questions we receive are already answered in these guides. Checking them first is faster than waiting
            for a reply.
          </p>
          <ul className="space-y-3 text-gray-300">
            {BEFORE_YOU_CONTACT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-accent hover:underline font-semibold">
                  {item.label}
                </Link>
                <span className="text-sm text-gray-400"> – {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">What you can contact the website team about</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
            <li>
              A limit, step or screenshot on this site (for example on the{" "}
              <Link href="/" className="text-accent hover:underline">Royal X Casino APK</Link> page) that no longer
              matches the app
            </li>
            <li>A broken link or a page that does not load</li>
            <li>Questions about how we review the app or how we earn commission (see the{" "}
              <Link href="/royal-x-casino-about-us" className="text-accent hover:underline">about page</Link>)</li>
            <li>Privacy requests covered by our{" "}
              <Link href="/privacy" className="text-accent hover:underline">privacy policy</Link></li>
            <li>Partnership or content enquiries</li>
          </ul>
          <p className="text-gray-300">
            You can also email{" "}
            <a href="mailto:support@royalexcasino.com.pk" className="text-accent hover:underline font-semibold">
              support@royalexcasino.com.pk
            </a>{" "}
            directly. Include the page URL you are writing about so we can check it quickly.
          </p>
        </section>

        <ContactForm />

        <p className="text-gray-400 text-xs leading-relaxed mt-8 text-center max-w-2xl mx-auto">
          Royal X Casino is a real-money gambling app for players aged 18 and over; you can lose what you deposit. If
          play has stopped feeling like entertainment, our{" "}
          <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-[#0ea5e9] underline underline-offset-2">
            responsible gaming guide
          </Link>{" "}
          lists limits and support options.
        </p>
      </div>
    </div>
  );
}
