import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_URL = `${SITE_URL}/royal-x-casino-about-us`;
const TITLE = "About Royal X Casino PK: Who We Are and How We Review";
const DESCRIPTION =
  "Royal X Casino PK is an independent informational site about the Royal X Casino app, not the operator. How we gather facts, our standards and how we earn.";

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
        alt: "Gold Royal X Casino logotype with a casino chip, used as the Royal X Casino PK site logo",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Royal X Casino PK",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/royal-x-casino-logo.webp`,
    width: 1000,
    height: 1000,
  },
  description:
    "Independent informational and affiliate website about the Royal X Casino Android app for players in Pakistan. Not operated by or affiliated with the app operator.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@royalexcasino.com.pk",
    contactType: "website support",
    availableLanguage: ["English", "Urdu"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }} />

      <div className="container mx-auto max-w-4xl">
        <Breadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "About Us", url: "/royal-x-casino-about-us" },
          ]}
        />

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            About Royal X Casino PK: Who We Are and How We Review
          </h1>
          <p className="text-lg text-gray-400">An independent guide to the Royal X Casino app, written for players in Pakistan</p>
        </div>

        <section className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-lg overflow-hidden bg-[#0A1029] border border-gray-700">
                <Image
                  src="/royal-x-casino-logo.webp"
                  alt="Gold Royal X Casino logotype with a casino chip, used as the Royal X Casino PK site logo"
                  width={1000}
                  height={1000}
                  sizes="(max-width: 768px) 160px, 200px"
                  className="object-contain p-4 w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">What this website is</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                royalexcasino.com.pk is an independent informational and affiliate website about the Royal X Casino
                Android app. We are not the operator of the app, we do not run its servers, wallets or games, and we
                cannot see or change any player account. If you have a problem with a deposit, withdrawal or login, the
                operator&apos;s in-app live chat is the only place that can fix it.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What we do is explain the app in plain language: how to install the{" "}
                <Link href="/" className="text-accent hover:underline">
                  Royal X Casino APK
                </Link>
                , how registration and login work, what the{" "}
                <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline">
                  EasyPaisa and JazzCash deposit limits
                </Link>{" "}
                are, how long{" "}
                <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">
                  withdrawals
                </Link>{" "}
                take, which bonuses exist and what the risks are.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">How we gather information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every guide on this site is based on four sources, in this order of weight:
          </p>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-4">
            <li>
              <strong className="text-white">Installing and using the app.</strong> We install the current APK on an
              Android phone, register an account and walk through each screen we describe.
            </li>
            <li>
              <strong className="text-white">Checking the payment flows.</strong> We read the deposit and withdrawal
              screens, limits and in-app terms as the app shows them, and we record the minimums and maximums exactly.
            </li>
            <li>
              <strong className="text-white">Reading community feedback.</strong> We follow player reports in public
              groups and on review platforms to find recurring problems, such as delayed first withdrawals or OTP issues.
            </li>
            <li>
              <strong className="text-white">Updating when the app changes.</strong> When a new build changes a menu,
              a limit or a bonus, we update the affected page and its date.
            </li>
          </ol>
          <p className="text-gray-300 text-sm">
            Where the app or the operator does not publish a number, we say so instead of guessing.
          </p>
        </section>

        <section className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Editorial standards</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong className="text-white">Facts over hype.</strong> We quote the limits, fees and bonus amounts the
              app shows. We do not publish income claims or promise that anyone will win.
            </li>
            <li>
              <strong className="text-white">We state what we cannot verify.</strong> The operator does not publish a
              licence number or regulator, and no Pakistani authority licenses offshore gambling apps. We say this on
              every page where it matters rather than calling the app &quot;licensed&quot; or &quot;approved&quot;.
              Our reasoning is in{" "}
              <Link href="/blog/is-royal-x-casino-safe-legal-pakistan" className="text-accent hover:underline">
                Is Royal X Casino Safe and Legal in Pakistan? 2026 Guide
              </Link>
              .
            </li>
            <li>
              <strong className="text-white">We disclose referral commission.</strong> Every download button that opens
              the operator&apos;s referral link is marked as sponsored and carries a disclosure line under it.
            </li>
            <li>
              <strong className="text-white">We correct mistakes.</strong> If you spot an outdated limit or a wrong
              step, tell us through the contact page and we will check and fix it.
            </li>
          </ul>
        </section>

        <section className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">How we make money</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This site is funded by referral and affiliate commission. When you open the operator&apos;s download link
            from one of our buttons and register, the operator may pay us a commission. You pay nothing extra, and the
            app, bonuses and limits are the same as they would be without our link.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Commission does not change what we write. We describe the risk of loss, the unverified licence and the legal
            position in Pakistan on the same pages that carry the download button. The full statement is in our{" "}
            <Link href="/disclaimer" className="text-accent hover:underline">
              disclaimer
            </Link>
            .
          </p>
        </section>

        <section className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Our stance on responsible gambling</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Royal X Casino is a real-money gambling app for adults aged 18 and over. Gambling is restricted under
            Pakistan&apos;s Prevention of Gambling Act 1977, and you are responsible for the law that applies to you.
            Money you deposit can be lost, and no bonus or strategy changes that.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We publish a{" "}
            <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-accent hover:underline">
              responsible gaming guide
            </Link>{" "}
            with budget limits, warning signs and where to get help, and we link it from every core page. Treat any
            deposit as entertainment spending, never as income.
          </p>
        </section>

        <section className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">How to reach us</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            For corrections, questions about this website or partnership enquiries, use the form on our{" "}
            <Link href="/royal-x-casino-contact-us" className="text-accent hover:underline">
              contact page
            </Link>{" "}
            or email{" "}
            <a href="mailto:support@royalexcasino.com.pk" className="text-accent hover:underline">
              support@royalexcasino.com.pk
            </a>
            . This address belongs to the website team, not the operator. Account, deposit and withdrawal issues must go
            to the app&apos;s 24/7 live chat or its official Telegram and WhatsApp channels. How we handle the details you
            send us is explained in our{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              privacy policy
            </Link>
            .
          </p>
          <Link
            href="/royal-x-casino-contact-us"
            className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact the website team
          </Link>
        </section>
      </div>
    </div>
  );
}
