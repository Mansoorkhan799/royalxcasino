import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_URL = `${SITE_URL}/disclaimer`;
const TITLE = "Royal X Casino PK Disclaimer: Affiliate and Risk Notice";
const DESCRIPTION =
  "Royal X Casino PK is not the operator. Read how we earn referral commission, the risks of real-money gambling, Pakistani law and what we cannot verify.";
const LAST_UPDATED = "October 8, 2026";

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
        alt: "Gold Royal X Casino logotype with a casino chip on the Royal X Casino PK disclaimer page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/royal-x-casino-logo.webp`],
  },
  robots: { index: true, follow: true },
};

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": PAGE_URL,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  dateModified: "2026-10-08",
  isPartOf: { "@type": "WebSite", url: SITE_URL, name: "Royal X Casino" },
  publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Royal X Casino PK" },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webPageSchema) }} />

      <div className="container mx-auto max-w-4xl">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Disclaimer", url: "/disclaimer" },
          ]}
        />

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Disclaimer: Royal X Casino PK Is an Independent Affiliate Site
          </h1>
          <p className="text-gray-400">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 space-y-10 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Who we are and who we are not</h2>
            <p className="leading-relaxed mb-3">
              royalexcasino.com.pk is an independent informational and affiliate website about the Royal X Casino
              Android app. We are not the operator of the app and we are not affiliated with, endorsed by or acting on
              behalf of the operator. We do not run the games, hold player funds, process deposits or withdrawals, or
              have access to any player account.
            </p>
            <p className="leading-relaxed">
              The name Royal X Casino and its logo belong to their owner. We use them only to identify the app our
              guides describe. For account, payment or login problems you must use the app&apos;s in-app live chat or
              its official Telegram and WhatsApp channels; our{" "}
              <Link href="/royal-x-casino-contact-us" className="text-accent hover:underline">
                contact page
              </Link>{" "}
              reaches the website team only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Affiliate disclosure: how we earn money</h2>
            <p className="leading-relaxed mb-3">
              Download buttons and some text links on this site open the operator&apos;s referral link. When you
              register through that link, the operator may pay us a referral or affiliate commission. This costs you
              nothing extra and does not change the app, bonuses or limits you receive.
            </p>
            <p className="leading-relaxed">
              Because these are paid relationships, every such link carries the <code className="text-sm">rel=&quot;sponsored&quot;</code>{" "}
              attribute and a disclosure line sits under the first button on each page. Commission does not influence
              what we write; the{" "}
              <Link href="/royal-x-casino-about-us" className="text-accent hover:underline">
                about page
              </Link>{" "}
              explains our editorial standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Gambling risk, age limit and no guarantee of winnings</h2>
            <p className="leading-relaxed mb-3">
              Royal X Casino is a real-money gambling app. Gambling involves a risk of financial loss, and you can lose
              the full amount you deposit. Game outcomes are random or carry a house edge; no bonus, code, tip or
              strategy described on this site guarantees a win or an income. Any example figures we quote, such as a
              20% first-deposit rebate, are promotional terms shown by the app and not a prediction of what you will
              earn.
            </p>
            <p className="leading-relaxed">
              The app is for adults aged 18 and over. If gambling stops being entertainment for you, read our{" "}
              <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">
                responsible gaming guide
              </Link>{" "}
              for limits and support options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Legal status in Pakistan</h2>
            <p className="leading-relaxed">
              Gambling is restricted in Pakistan under the Prevention of Gambling Act 1977, and offshore online apps
              operate in a legal grey area. The legality of using such an app can vary by province and may change.
              You are solely responsible for knowing and complying with the law that applies to you before you
              install, register or deposit. Nothing on this site is legal advice. Our summary of the position is in{" "}
              <Link href="/blog/is-royal-x-casino-safe-legal-pakistan" className="text-accent hover:underline">
                Is Royal X Casino Safe and Legal in Pakistan? 2026 Guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">What we cannot verify</h2>
            <p className="leading-relaxed">
              The operator does not publish a licence number or the name of a regulator, and no Pakistani authority
              licenses offshore gambling apps. We therefore cannot verify that the operator is licensed, and we do not
              describe it as licensed, regulated or approved. Statements the operator makes about fairness, random
              number generation or security are the operator&apos;s claims unless we say otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Accuracy and changes</h2>
            <p className="leading-relaxed">
              We base our guides on the current app build, its in-app terms and community reports, and we update pages
              when we find changes. Even so, app menus, limits, bonuses, fees and processing times can change without
              notice, and information on this site may be out of date at any given moment. The in-app terms always take
              precedence over anything written here. Check them before you deposit or request a withdrawal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Limitation of liability</h2>
            <p className="leading-relaxed">
              You use this website and any third-party app or link at your own risk. To the extent permitted by law, we
              accept no liability for financial loss, account problems, legal consequences, device issues or any other
              damage arising from your use of the Royal X Casino app, the operator&apos;s services or the information
              on this site. Links to external websites are provided for reference; we do not control their content or
              privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Questions about this disclaimer</h2>
            <p className="leading-relaxed">
              Write to the website team through the{" "}
              <Link href="/royal-x-casino-contact-us" className="text-accent hover:underline">
                contact page
              </Link>{" "}
              or email{" "}
              <a href="mailto:support@royalexcasino.com.pk" className="text-accent hover:underline">
                support@royalexcasino.com.pk
              </a>
              . See our{" "}
              <Link href="/privacy" className="text-accent hover:underline">
                privacy policy
              </Link>{" "}
              for how we handle what you send, and the{" "}
              <Link href="/" className="text-accent hover:underline">
                Royal X Casino APK
              </Link>{" "}
              page for the app itself.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
