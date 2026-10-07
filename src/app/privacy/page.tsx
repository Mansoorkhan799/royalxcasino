import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_URL = `${SITE_URL}/privacy`;
const TITLE = "Royal X Casino PK Privacy Policy: What Data We Collect";
const DESCRIPTION =
  "How royalexcasino.com.pk handles your data: contact form details, Google Analytics cookies when enabled, outbound referral links, and how to reach us.";
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
        alt: "Gold Royal X Casino logotype with a casino chip on the Royal X Casino PK privacy policy page",
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webPageSchema) }} />

      <div className="container mx-auto max-w-4xl">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Privacy Policy", url: "/privacy" },
          ]}
        />

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Royal X Casino PK Privacy Policy: What Data We Collect
          </h1>
          <p className="text-gray-400">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 space-y-10 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Who this policy covers</h2>
            <p className="leading-relaxed mb-3">
              This policy describes how royalexcasino.com.pk (&quot;we&quot;, &quot;the website&quot;) handles
              information when you browse the site or contact us. We are an independent informational website about the
              Royal X Casino Android app. We do not operate the app, and this policy does not cover anything you do
              inside it.
            </p>
            <p className="leading-relaxed">
              When you register, deposit, play or chat with support in the app, the operator collects your data under
              its own privacy policy, which you should read inside the app. We never receive your phone number,
              password, OTP, wallet details or transaction history from the operator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Information we collect</h2>
            <h3 className="text-lg font-semibold text-white mb-2">Contact form and email</h3>
            <p className="leading-relaxed mb-4">
              If you use the form on our{" "}
              <Link href="/royal-x-casino-contact-us" className="text-accent hover:underline">
                contact page
              </Link>{" "}
              or email us, we receive the name, email address, subject and message you provide. We use them only to
              read and answer your message. Please do not include passwords, OTP codes or wallet numbers; we do not need
              them and will not ask for them.
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Analytics and performance data</h3>
            <p className="leading-relaxed mb-4">
              When analytics is enabled on the site, we load Google Analytics (gtag.js). It sets cookies and records
              which pages are viewed, the approximate region, device and browser type, and Core Web Vitals performance
              metrics (how quickly pages load and respond). This data is aggregated and does not identify you by name.
              Google processes it under its own privacy policy. If analytics is not enabled in a given deployment, none
              of this is loaded.
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Server logs</h3>
            <p className="leading-relaxed">
              Like any website, our hosting provider may keep standard server logs (IP address, browser string, pages
              requested, time). They are used for security and error diagnosis only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">What we do not collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We have no user accounts, so we do not store usernames, passwords or profiles.</li>
              <li>We do not process payments and never see deposit or withdrawal details.</li>
              <li>We do not collect precise location, contacts, photos or device identifiers.</li>
              <li>We do not run third-party advertising networks or ad-tracking pixels on this site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Cookies</h2>
            <p className="leading-relaxed">
              The only cookies the website sets are those placed by Google Analytics when it is enabled. They are used
              to distinguish repeat visits in aggregate statistics. You can block or delete cookies in your browser
              settings, use a browser extension that blocks analytics, or enable your browser&apos;s tracking protection.
              The site works normally without cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Outbound referral links to the operator</h2>
            <p className="leading-relaxed mb-3">
              Download buttons on this site open the operator&apos;s referral link in a new tab. The link contains a
              referral identifier so the operator can attribute your registration to this website and may pay us a
              commission, as explained in our{" "}
              <Link href="/disclaimer" className="text-accent hover:underline">
                disclaimer
              </Link>
              .
            </p>
            <p className="leading-relaxed">
              Once you leave our site, the operator&apos;s website and app collect data under their own privacy policy,
              which we do not control. We do not receive your personal details from the operator; at most we may see
              anonymous counts of registrations attributed to our link.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">How we share data, and what we never do</h2>
            <p className="leading-relaxed mb-3">
              We do not sell, rent or trade your personal data to anyone. Contact form details are seen only by the
              website team. Analytics data is processed by Google as a service provider. We may disclose information if
              required by law or a valid request from a public authority in Pakistan.
            </p>
            <p className="leading-relaxed">Links to external sites such as review platforms follow their own privacy practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">How long we keep information</h2>
            <p className="leading-relaxed">
              Contact messages are kept for as long as needed to resolve your query and for a reasonable period
              afterwards in case you follow up, then deleted. Analytics data is retained according to the Google
              Analytics retention setting for the property. Server logs are rotated by the hosting provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Age limit</h2>
            <p className="leading-relaxed">
              This website describes a real-money gambling app and is intended for adults aged 18 and over. We do not
              knowingly collect information from anyone under 18. If you believe a minor has contacted us, email us and
              we will delete the message. Our{" "}
              <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">
                responsible gaming guide
              </Link>{" "}
              covers limits and where to find help.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Your choices and rights</h2>
            <p className="leading-relaxed mb-3">You can at any time:</p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>Ask what information we hold about you from contact form submissions.</li>
              <li>Ask us to correct or delete that information.</li>
              <li>Block analytics cookies in your browser so no usage data is sent to Google.</li>
              <li>Choose not to use the referral links and visit the operator directly.</li>
            </ul>
            <p className="leading-relaxed">
              Send requests to{" "}
              <a href="mailto:support@royalexcasino.com.pk" className="text-accent hover:underline">
                support@royalexcasino.com.pk
              </a>{" "}
              from the address you used to contact us, so we can confirm the request is yours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Changes to this policy</h2>
            <p className="leading-relaxed">
              We update this page when our practices change, for example if we add or remove an analytics tool. The
              &quot;Last updated&quot; date at the top shows the current version. Continued use of the site after a
              change means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-[#FFA500]">Contact</h2>
            <p className="leading-relaxed">
              Questions about this policy go to the website team at{" "}
              <a href="mailto:support@royalexcasino.com.pk" className="text-accent hover:underline">
                support@royalexcasino.com.pk
              </a>{" "}
              or through the{" "}
              <Link href="/royal-x-casino-contact-us" className="text-accent hover:underline">
                contact page
              </Link>
              . This is the website&apos;s address, not the operator&apos;s. Who we are and how we work is explained on
              the{" "}
              <Link href="/royal-x-casino-about-us" className="text-accent hover:underline">
                about page
              </Link>
              , and the app itself is covered on the{" "}
              <Link href="/" className="text-accent hover:underline">
                Royal X Casino APK
              </Link>{" "}
              page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
