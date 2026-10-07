import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqSchema, { type FaqItem } from '@/components/FaqSchema';
import { DOWNLOAD_URL, SITE_URL } from '@/lib/config';

const SLUG = 'royal-x-casino-bonuses-vip-guide';
const TITLE = 'Royal X Casino Bonuses: Welcome, Rebate and VIP Guide 2026';
const DESCRIPTION =
  'Every Royal X Casino bonus explained with exact amounts: Rs. 10 welcome credit, 20 percent first-deposit rebate, referral pay and VIP levels.';
const URL = `${SITE_URL}/blog/${SLUG}`;
const OG_IMAGE = `${SITE_URL}/royal-casino-daily-bonus.webp`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: URL,
    siteName: 'Royal X Casino',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 540,
        alt: 'Royal X Casino daily bonus calendar showing login rewards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const FAQS: FaqItem[] = [
  {
    q: 'How much is the Royal X Casino welcome bonus?',
    a: 'New accounts receive Rs. 10 of welcome credit after registration. It is a small trial amount, not a deposit match. The larger offer is the one-time 20 percent first-deposit rebate.',
  },
  {
    q: 'How does the 20 percent first-deposit rebate work?',
    a: 'Your first deposit earns a one-time 20 percent rebate. Deposit Rs. 1,000 and Rs. 200 is added, so you have Rs. 1,200 to play with. It applies to the first deposit only; later deposits do not get this rebate.',
  },
  {
    q: 'Can I withdraw bonus money straight away?',
    a: 'Bonus credit may carry turnover terms, so you may need to place some bets before the bonus portion can be withdrawn. Check the in-app bonus terms before you accept any offer.',
  },
  {
    q: 'How much does the referral bonus pay?',
    a: 'You receive Rs. 20 when a friend registers with your code, and further referral pay up to Rs. 1,000 as that friend\'s deposits reach Rs. 1,000. The exact schedule is shown on the in-app Refer and Earn screen.',
  },
  {
    q: 'What does VIP level V1 give me?',
    a: 'VIP levels start at V1 and rise with your betting volume. Each level-up pays a one-time bonus starting at Rs. 15, and VIP members receive a small monthly payment starting at Rs. 11 that rises with each level.',
  },
  {
    q: 'Where do I enter a Royal X Casino redeem code?',
    a: 'Open Promotions, then Redeem Code, and paste the code. Codes come from the official Telegram and WhatsApp channels and partner sites. Each code works once per account and amounts vary.',
  },
];

const BONUS_TABLE = [
  {
    bonus: 'Welcome credit',
    how: 'Register with a +92 number and verify the SMS OTP',
    amount: 'Rs. 10',
    notes: 'One per account; small trial balance',
  },
  {
    bonus: 'First-deposit rebate',
    how: 'Make your first deposit (min Rs. 100)',
    amount: '20% of the deposit',
    notes: 'One time only; Rs. 1,000 deposit = Rs. 200 extra',
  },
  {
    bonus: 'Daily login reward',
    how: 'Open the app and tap the daily bonus calendar',
    amount: 'Varies by day',
    notes: 'Resets if you miss a day',
  },
  {
    bonus: 'Weekly promotions / cashback',
    how: 'Check the Promotions tab each week',
    amount: 'Varies',
    notes: 'Terms differ per promotion',
  },
  {
    bonus: 'Referral bonus',
    how: 'Friend registers with your invite code',
    amount: 'Rs. 20, then up to Rs. 1,000',
    notes: 'Full amount as their deposits reach Rs. 1,000',
  },
  {
    bonus: 'VIP level-up bonus',
    how: 'Reach V1 and higher through betting volume',
    amount: 'From Rs. 15 per level',
    notes: 'One-time payment at each new level',
  },
  {
    bonus: 'Monthly VIP payment',
    how: 'Hold a VIP level at month end',
    amount: 'From Rs. 11, rising per level',
    notes: 'Paid monthly while you keep the level',
  },
  {
    bonus: 'Redeem / gift codes',
    how: 'Promotions, then Redeem Code',
    amount: 'Varies by code',
    notes: 'Single use per account; from official channels',
  },
];

export default function BlogRoyalXBonusesVIPGuide() {
  return (
    <div className="min-h-screen bg-[#060A20]">
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished="2026-01-11"
        dateModified="2026-10-08"
        image={OG_IMAGE}
      />
      <FaqSchema faqs={FAQS} />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#FFA500]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#FFA500]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Bonuses and VIP guide</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
            <time dateTime="2026-01-11">Published January 11, 2026</time>
            <span aria-hidden="true">|</span>
            <time dateTime="2026-10-08">Updated October 8, 2026</time>
            <span aria-hidden="true">|</span>
            <span>11 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The <Link href="/" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino APK</Link> gives
            new players a small welcome credit, a one-time first-deposit rebate, daily login rewards and a VIP ladder.
            None of these amounts are large, and some bonus credit may carry turnover terms before you can withdraw it.
            This guide lists every bonus with the real figures so you know what to expect before you deposit.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Royal X Casino bonus summary</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-700 text-gray-300">
              <thead>
                <tr className="bg-purple-900">
                  <th className="border border-gray-700 p-4 text-left text-white">Bonus</th>
                  <th className="border border-gray-700 p-4 text-left text-white">How to get it</th>
                  <th className="border border-gray-700 p-4 text-left text-white">Amount</th>
                  <th className="border border-gray-700 p-4 text-left text-white">Notes</th>
                </tr>
              </thead>
              <tbody>
                {BONUS_TABLE.map((row) => (
                  <tr key={row.bonus}>
                    <td className="border border-gray-700 p-4 font-semibold text-white">{row.bonus}</td>
                    <td className="border border-gray-700 p-4">{row.how}</td>
                    <td className="border border-gray-700 p-4">{row.amount}</td>
                    <td className="border border-gray-700 p-4">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Welcome credit: Rs. 10 on registration</h2>
          <p className="text-gray-300 mb-4">
            Every new account gets Rs. 10 of credit once registration is complete. You need a Pakistani +92 mobile
            number, the SMS OTP and a password; an invite code is optional. The whole process takes two to three
            minutes and is covered step by step in our{' '}
            <Link href="/how-to-register-royal-x-casino" className="text-[#FFA500] hover:underline font-semibold">
              Royal X Casino registration guide
            </Link>.
          </p>
          <p className="text-gray-300 mb-4">
            Rs. 10 is enough to try a few low-stake rounds or a demo-style session in a slot. Treat it as a way to look
            around the lobby, not as money you can cash out. One account per person and per number is allowed, so you
            cannot repeat the welcome credit with a second registration.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">First-deposit bonus explained</h2>
          <p className="text-gray-300 mb-4">
            The main offer for new players is a 20 percent rebate on your first deposit. It is paid once, on the first
            deposit only, and it is calculated on the amount you actually deposit.
          </p>
          <div className="bg-purple-800/30 border border-purple-600 rounded-lg p-6 my-8">
            <p className="text-white font-semibold mb-3">Worked example</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>You deposit Rs. 1,000 through EasyPaisa.</li>
              <li>The rebate is 20 percent of Rs. 1,000, which is Rs. 200.</li>
              <li>Your balance shows Rs. 1,200: Rs. 1,000 of your own money plus Rs. 200 of bonus credit.</li>
              <li>A later deposit of Rs. 1,000 earns no rebate, because the offer is one time only.</li>
            </ul>
          </div>
          <p className="text-gray-300 mb-4">
            The minimum deposit is Rs. 100 and the maximum is Rs. 50,000 per transaction, so the rebate ranges from
            Rs. 20 to Rs. 10,000 depending on how much you put in. Deposit only what you planned to play with; a bigger
            rebate is not a reason to deposit more than your budget. Payment steps are in the{' '}
            <Link href="/royal-x-casino-deposit-guide" className="text-[#FFA500] hover:underline font-semibold">
              Royal X Casino deposit guide
            </Link>.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Turnover terms:</strong> bonus credit may carry turnover terms, meaning you place a certain amount
            of bets before the bonus part becomes withdrawable. The operator shows the current terms in the app when you
            accept the offer. Read them before you deposit so the bonus does not lock up money you wanted to withdraw.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Daily login rewards</h2>
          <Image
            src="/royal-casino-daily-bonus.webp"
            alt="Royal X Casino daily login bonus calendar with a reward for each day of the week"
            width={1200}
            height={540}
            className="rounded-xl w-full h-auto my-6"
          />
          <p className="text-gray-300 mb-4">
            Opening the app each day and tapping the daily bonus calendar gives a small credit. The amount changes by
            day and the streak resets if you skip a day. It is not worth logging in only to collect it, but if you are
            playing anyway, claim it before you start so it is not forgotten.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Weekly promotions and cashback</h2>
          <p className="text-gray-300 mb-4">
            The Promotions tab lists time-limited offers that change weekly, including cashback-style promotions.
            Each one has its own conditions, such as which games count and any minimum activity, so open the detail
            page in the app rather than relying on the banner text.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Referral bonus: Rs. 20 per friend, up to Rs. 1,000</h2>
          <Image
            src="/royal-x-casino-refer-and-earn.webp"
            alt="Royal X Casino refer and earn screen with invite code and referral reward tiers"
            width={1200}
            height={540}
            className="rounded-xl w-full h-auto my-6"
          />
          <p className="text-gray-300 mb-4">
            Under Refer and Earn you get a personal invite code. When a friend registers with it, you receive Rs. 20.
            Further referral pay unlocks as that friend deposits, reaching a total of up to Rs. 1,000 once their
            deposits reach Rs. 1,000. The in-app screen shows how much each referred player has unlocked so far.
          </p>
          <p className="text-gray-300 mb-4">
            This is a modest reward for sharing a code with people who already intend to play. Do not present it to
            friends as a way to make money; they are being invited to a real-money gambling app, and the referral
            amounts are capped.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">VIP levels: V1 and upward</h2>
          <p className="text-gray-300 mb-4">
            VIP status is based on your betting volume over time. You start below V1 and move up as your total bets
            grow; the VIP page in the app shows your current level and the volume needed for the next one.
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>
              <strong>Level-up bonus:</strong> a one-time payment at each new level, starting at Rs. 15 for V1 and
              increasing at higher levels.
            </li>
            <li>
              <strong>Monthly VIP payment:</strong> a small recurring credit, starting at Rs. 11 per month and rising
              with each level you hold.
            </li>
            <li>
              <strong>Progress tracking:</strong> the VIP page shows your current level and the volume needed for
              the next one.
            </li>
          </ul>
          <p className="text-gray-300 mb-4">
            The amounts are small on purpose. Chasing the next VIP level by betting more than you intended costs far
            more than the bonus returns, so let VIP progress happen as a by-product of normal play.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Redeem codes and gift codes</h2>
          <p className="text-gray-300 mb-4">
            Codes are posted on the official Telegram and WhatsApp channels and on partner sites. Enter them under
            Promotions, then Redeem Code. Each code is single use per account and the credit varies. Anyone who sells you
            a code or asks for your password to apply one is not official. Our{' '}
            <Link href="/royal-x-casino-redeem-code" className="text-[#FFA500] hover:underline font-semibold">
              Royal X Casino redeem code page
            </Link>{' '}
            explains where to find current codes and how to enter them.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Withdrawing bonus money</h2>
          <p className="text-gray-300 mb-4">
            Bonus credit and your own deposit sit in the same balance, but the bonus portion may carry turnover terms
            before it can be withdrawn. Once those are met, withdrawals to EasyPaisa or JazzCash run from Rs. 600 to
            Rs. 50,000 per request and usually arrive in 10 to 30 minutes, longer at peak times or for a first
            withdrawal. The name on your wallet must match your account details. Steps and limits are in the{' '}
            <Link href="/royal-x-casino-withdraw-guide" className="text-[#FFA500] hover:underline font-semibold">
              Royal X Casino withdrawal guide
            </Link>.
          </p>
          <p className="text-gray-300 mb-4">
            For how bonuses fit into a sensible play routine, read{' '}
            <Link href="/blog/royal-x-casino-tips-10-smart-tricks" className="text-[#FFA500] hover:underline font-semibold">
              Royal X Casino Tips: 10 Smart Tricks to Play Safe and Win
            </Link>{' '}
            and, if you are new to the app,{' '}
            <Link
              href="/blog/how-to-use-royal-x-casino-app-pakistan-guide-2026"
              className="text-[#FFA500] hover:underline font-semibold"
            >
              How to Use the Royal X Casino App in Pakistan (2026 Guide)
            </Link>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently asked questions</h2>
          <div className="space-y-6 mb-10">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="text-xl font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-gray-300">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              Download Royal X Casino and claim the Rs. 10 welcome credit
            </a>
            <p className="text-xs text-gray-500 mt-3">
              This button opens the operator&apos;s referral link. We may earn a commission when you register through
              it, at no cost to you. See our{' '}
              <Link href="/disclaimer" className="underline hover:text-[#FFA500]">disclaimer</Link>.
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-10">
            Royal X Casino is a real-money gambling app for players aged 18 and over. Bonuses do not change the house
            edge, and you can lose the money you deposit. Set limits before you play; see the{' '}
            <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="underline hover:text-[#FFA500]">
              Responsible Gaming Guide for Royal X Casino Players
            </Link>.
          </p>
        </div>
      </article>
    </div>
  );
}
