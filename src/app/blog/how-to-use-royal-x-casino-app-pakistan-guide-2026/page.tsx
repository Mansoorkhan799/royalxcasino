import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BlogPostSchema, { type HowToStep } from '@/components/BlogPostSchema';
import FaqSchema, { type FaqItem } from '@/components/FaqSchema';
import { DOWNLOAD_URL, SITE_URL, APP_INFO } from '@/lib/config';

const TITLE = 'How to Use the Royal X Casino App in Pakistan (2026 Guide)';
const DESCRIPTION =
  'From install to first withdrawal: navigation, free-trial modes, deposits, bonuses and the settings every new player should change.';
const SLUG = 'how-to-use-royal-x-casino-app-pakistan-guide-2026';
const URL = `${SITE_URL}/blog/${SLUG}`;

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
        url: `${SITE_URL}/royal-x-casino-app-landing-page.webp`,
        width: 1200,
        height: 540,
        alt: 'Royal X Casino app lobby on Android showing the main game categories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/royal-x-casino-app-landing-page.webp`],
  },
};

const overviewSteps: HowToStep[] = [
  {
    name: 'Install the APK',
    text: `Download the ${APP_INFO.size} Royal X Casino APK from the official link, allow your browser to install unknown apps, and open it on ${APP_INFO.androidMin}.`,
  },
  {
    name: 'Register with your +92 number',
    text: 'Enter your Pakistani mobile number, confirm the SMS OTP, set a password and add an optional invite code. Rs. 10 welcome credit is added after registration.',
  },
  {
    name: 'Practise in free-trial mode',
    text: 'Open a game in demo mode and learn the controls with practice credits before any real money is involved.',
  },
  {
    name: 'Deposit from Rs. 100',
    text: 'Use EasyPaisa, JazzCash, bank transfer or USDT. Minimum Rs. 100, maximum Rs. 50,000 per transaction, with a one-time 20 percent rebate on the first deposit.',
  },
  {
    name: 'Play with a limit set',
    text: 'Choose a low-stake room, set a session timer and stop at the loss limit you decided before opening the app.',
  },
  {
    name: 'Withdraw from Rs. 600',
    text: 'Request a payout to an EasyPaisa or JazzCash account in your own name. Payouts usually arrive in 10 to 30 minutes.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Do I need to deposit to try Royal X Casino?',
    a: 'No. After registering you can open many games in free-trial mode and play with practice credits. Those credits cannot be withdrawn and wins in demo mode are not real; they exist so you can learn the rules before deciding whether to deposit.',
  },
  {
    q: 'What is the minimum deposit and withdrawal?',
    a: 'Deposits start at Rs. 100 and go up to Rs. 50,000 per transaction with no deposit fee. Withdrawals to EasyPaisa or JazzCash run from Rs. 600 to Rs. 50,000 per request. USDT withdrawals start at Rs. 50,000.',
  },
  {
    q: 'How long does a withdrawal take?',
    a: 'Usually 10 to 30 minutes to EasyPaisa or JazzCash. The first withdrawal and peak evening periods can take longer because of verification and queue volume. The wallet must be in the same name as your account.',
  },
  {
    q: 'Which bonuses do new players actually get?',
    a: 'Rs. 10 welcome credit on registration, a one-time 20 percent rebate on the first deposit (deposit Rs. 1,000, receive Rs. 200 extra), daily login rewards and weekly promotions. Bonus credit may carry turnover terms, so check the in-app bonus terms before you plan a withdrawal.',
  },
  {
    q: 'Can I use Royal X Casino on iPhone or PC?',
    a: 'There is no iOS app and no Windows app. iPhone users play the browser version through Safari or Chrome via the same link. On a PC you can use the browser version or run the APK in an Android emulator such as BlueStacks.',
  },
];

export default function BlogHowToUseRoyalXGuide() {
  return (
    <div className="min-h-screen bg-[#060A20]">
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished="2026-01-11"
        dateModified="2026-10-08"
        image={`${SITE_URL}/royal-x-casino-app-landing-page.webp`}
        howToSteps={overviewSteps}
      />
      <FaqSchema faqs={faqs} />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#FFA500]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#FFA500]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">How to Use the Royal X Casino App</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{TITLE}</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <time dateTime="2026-01-11">January 11, 2026</time>
            <span>•</span>
            <span>Updated October 8, 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            This guide takes a first-time Android user through the{' '}
            <Link href="/" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino APK</Link>{' '}
            from install to first withdrawal: where things are in the lobby, how free-trial modes
            work, the real deposit and withdrawal limits, which bonuses exist and the settings
            worth changing on day one. It is a real-money gambling app for players 18 and over;
            every number below is the app&apos;s own, and nothing here is a way to earn.
          </p>

          <Image
            src="/royal-x-casino-app-landing-page.webp"
            alt="Royal X Casino lobby with Teen Patti, Rummy, Dragon vs Tiger, fishing and slot categories"
            width={1200}
            height={540}
            className="w-full h-auto rounded-xl my-8"
            priority
          />

          <div className="bg-gradient-to-r from-purple-800/50 to-orange-600/50 rounded-lg p-8 my-8">
            <h2 className="text-white text-2xl font-bold mb-4">The whole process in six steps</h2>
            <ol className="list-decimal pl-6 text-white space-y-2">
              {overviewSteps.map((s) => (
                <li key={s.name}>
                  <strong>{s.name}.</strong> {s.text}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col items-center my-8">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Download Royal X Casino APK {APP_INFO.version}
            </a>
            <p className="text-gray-400 text-sm mt-3 text-center">
              This button opens the operator&apos;s referral link. We may earn a commission when you
              register through it, at no cost to you. See our{' '}
              <Link href="/disclaimer" className="text-[#FFA500] hover:underline">disclaimer</Link>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 1: Download and install the Royal X Casino APK</h2>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Requirements</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>Android phone on {APP_INFO.androidMin}</li>
            <li>The APK is {APP_INFO.size}; keep roughly 600 MB free for game assets that download on first launch</li>
            <li>Stable Wi-Fi or 4G</li>
            <li>A Pakistani (+92) mobile number that can receive SMS</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Install steps</h3>
          <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-3">
            <li>Open the official link from our{' '}
              <Link href="/royal-x-casino-download" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino APK download page</Link>{' '}
              and tap Download. Ignore APK files forwarded on Telegram or WhatsApp.</li>
            <li>When Android blocks the install, open Settings, find your browser under &quot;Install unknown apps&quot; and allow it.</li>
            <li>Tap the downloaded file in your notifications or Downloads folder and press Install.</li>
            <li>Open the app; the first launch downloads game assets, so wait on Wi-Fi if you can.</li>
            <li>Go back and turn &quot;Install unknown apps&quot; off again for your browser.</li>
          </ol>

          <p className="text-gray-300 mb-4">
            Only the current {APP_INFO.version} release is linked. Older builds exist but break
            login and payments. There is no iOS app or Windows app; iPhone users play the browser
            version in Safari or Chrome, and PC users run the browser version or an Android
            emulator.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 2: Register with your mobile number</h2>

          <Image
            src="/royal-x-casino-registration-page.webp"
            alt="Royal X Casino registration screen with phone number, OTP, password and invite code fields"
            width={1200}
            height={540}
            className="w-full h-auto rounded-xl my-8"
          />

          <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-3">
            <li><strong>Tap Register</strong> on the welcome screen.</li>
            <li><strong>Enter your +92 mobile number.</strong> It becomes your login and receives every OTP, so use a number you control.</li>
            <li><strong>Request the SMS code.</strong> It can take up to 2 minutes to arrive; use Resend if it does not.</li>
            <li><strong>Set a password</strong> you do not use for your wallet or email.</li>
            <li><strong>Add an invite code</strong> if a friend gave you one. This is optional.</li>
            <li><strong>Confirm.</strong> Registration takes 2 to 3 minutes. One account per person and number; you must be 18 or over.</li>
          </ol>

          <div className="bg-green-900/30 border border-green-600 rounded-lg p-6 my-8">
            <p className="text-white font-semibold mb-2">Welcome credit</p>
            <p className="text-gray-300">
              Rs. 10 is credited after registration. It is enough to see how a real-money round
              works, not enough to matter. Bonus credit may carry turnover terms before withdrawal;
              check the in-app bonus terms.
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            A screenshot walkthrough of each field is on the{' '}
            <Link href="/how-to-register-royal-x-casino" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino registration page</Link>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 3: Find your way around the lobby</h2>

          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-3">
            <li><strong>Top bar:</strong> balance, wallet shortcut and notifications.</li>
            <li><strong>Banner strip:</strong> current promotions and weekly events.</li>
            <li><strong>Game grid:</strong> 200+ titles grouped as Teen Patti (Classic, AK47, Joker, Muflis), Rummy, Andar Bahar, Dragon vs Tiger, 7 Up Down, Roulette, Baccarat, crash and Aviator-style, fishing arcade rooms and slots such as Father Kim, Trump IT and Cashpot.</li>
            <li><strong>Bottom navigation:</strong> Home, Promotions (including Redeem Code), VIP and My Account, where transaction history and the live chat live.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Free-trial and demo modes: how to practise without depositing</h2>

          <p className="text-gray-300 mb-4">
            Many games in the lobby open in a free-trial or demo mode. The game runs exactly as it
            does for real money, but your bets use practice credits supplied by the app. This is
            the right place to spend your first few sessions, and the only place to learn a new
            game.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">How demo modes work</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-3">
            <li><strong>Practice credits are not money.</strong> They cannot be withdrawn, and a win in demo mode adds nothing to your real balance.</li>
            <li><strong>The rules and payout tables are the same.</strong> Use the trial to read the hand rankings in Teen Patti, see how the Tie bet pays in Dragon vs Tiger, or learn when to cash out in a crash game.</li>
            <li><strong>Pace is the lesson.</strong> Notice how fast a one-bet game resolves and how quickly practice credits disappear. Real money disappears at the same speed.</li>
            <li><strong>Switching to real money</strong> requires a verified account with a completed registration and a deposit. The app will prompt you; it never switches silently.</li>
            <li><strong>Not every title has a trial.</strong> If a game has no demo option, read its rules panel before betting the minimum stake.</li>
          </ul>

          <p className="text-gray-300 mb-4">
            A sensible rule: do not deposit for a game until you have played it in demo mode long
            enough to predict what the next screen will show. If a game is only fun when real
            money is on the line, that is worth noticing before you deposit, because it means the
            appeal is the risk rather than the play.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 4: Make your first deposit</h2>

          <Image
            src="/royal-x-casino-deposit-money-interface.webp"
            alt="Royal X Casino deposit interface with amount field and EasyPaisa, JazzCash, bank and USDT tabs"
            width={1200}
            height={540}
            className="w-full h-auto rounded-xl my-8"
          />

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-700">
              <thead>
                <tr className="bg-purple-900">
                  <th className="border border-gray-700 p-4 text-left text-white">Method</th>
                  <th className="border border-gray-700 p-4 text-left text-white">Limits per transaction</th>
                  <th className="border border-gray-700 p-4 text-left text-white">Credited</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="border border-gray-700 p-4">EasyPaisa</td>
                  <td className="border border-gray-700 p-4">Rs. 100 to Rs. 50,000</td>
                  <td className="border border-gray-700 p-4">Instantly to a few minutes</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4">JazzCash</td>
                  <td className="border border-gray-700 p-4">Rs. 100 to Rs. 50,000</td>
                  <td className="border border-gray-700 p-4">Instantly to a few minutes</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4">Bank transfer (deposits only)</td>
                  <td className="border border-gray-700 p-4">Rs. 100 to Rs. 50,000</td>
                  <td className="border border-gray-700 p-4">Up to about 30 minutes</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4">USDT</td>
                  <td className="border border-gray-700 p-4">Supported</td>
                  <td className="border border-gray-700 p-4">After network confirmation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-3">
            <li>Tap the wallet icon, then Deposit.</li>
            <li>Choose EasyPaisa, JazzCash, bank transfer or USDT.</li>
            <li>Enter an amount from Rs. 100. There is no deposit fee. Start with the minimum.</li>
            <li>Send the exact amount from your wallet app to the account shown, and keep the transaction ID.</li>
            <li>Return to the app, enter the transaction ID or upload the screenshot, and submit.</li>
          </ol>

          <div className="bg-purple-800/30 border border-purple-600 rounded-lg p-6 my-8">
            <p className="text-white font-semibold mb-2">First-deposit rebate</p>
            <p className="text-gray-300">
              A one-time 20 percent rebate applies to your first deposit: deposit Rs. 1,000 and
              Rs. 200 is added. Bonus credit may carry turnover terms, so check the in-app bonus
              terms before counting it as withdrawable.
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Each method&apos;s screens are covered in the{' '}
            <Link href="/royal-x-casino-deposit-guide" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino deposit guide</Link>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 5: Play with a limit already set</h2>

          <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-3">
            <li><strong>Decide the session loss limit and time limit</strong> before opening a game, and start a phone timer.</li>
            <li><strong>Pick a game you have already played in demo mode.</strong></li>
            <li><strong>Choose the lowest-stake room.</strong> Rooms are labelled by minimum bet; the smallest tables exist for exactly this stage.</li>
            <li><strong>Read the rules panel</strong> once more for the payout table.</li>
            <li><strong>Stop at the limit</strong>, whichever comes first, win or lose.</li>
          </ol>

          <div className="bg-green-900/30 border border-green-600 rounded-lg p-6 my-8">
            <p className="text-white font-semibold mb-2">A sensible first session</p>
            <p className="text-gray-300">
              Deposit the Rs. 100 minimum. Set a 30-minute timer and a loss limit of the whole
              Rs. 100, nothing more. Open a Teen Patti or Andar Bahar room you already know from
              demo mode, at the lowest stake shown. When the timer rings or the balance hits zero,
              close the app. If you finish above Rs. 600, request a withdrawal straight away so
              you have seen the payout process end to end before anything larger is at stake.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">What the main games ask of you</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-3">
            <li><strong>Teen Patti:</strong> three cards each, standard hand rankings, play Seen or Blind. Slower rounds and real decisions.</li>
            <li><strong>Rummy:</strong> form sets and sequences by drawing and discarding. The most skill-dependent game in the lobby.</li>
            <li><strong>Dragon vs Tiger and Andar Bahar:</strong> one bet, one outcome, a few seconds per round. Easiest to learn and easiest to overplay.</li>
            <li><strong>Crash and Aviator-style:</strong> cash out before the multiplier bursts. High variance; set a fixed cash-out point.</li>
            <li><strong>Fishing and slots:</strong> credits per shot or spin; set a spend cap before you start.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 6: Claim the bonuses that exist</h2>

          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-3">
            <li><strong>Daily login rewards:</strong> open the daily calendar under Promotions and tap Claim each day you play.</li>
            <li><strong>Weekly promotions and cashback:</strong> listed in the banner strip and Promotions tab; terms vary by week.</li>
            <li><strong>Referral:</strong> Rs. 20 when a friend registers with your code, rising to Rs. 1,000 as their deposits reach Rs. 1,000. Share from My Account.</li>
            <li><strong>Redeem codes:</strong> enter them under Promotions, then Redeem Code. Codes come from the official Telegram and WhatsApp channels and partner sites, are single-use per account and vary in value. See the{' '}
              <Link href="/royal-x-casino-redeem-code" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino redeem code page</Link>.</li>
            <li><strong>VIP levels:</strong> V1 upward, based on betting volume, with a one-time level-up bonus starting at Rs. 15 and a small monthly payment starting at Rs. 11. These amounts are small by design and are not a reason to bet more.</li>
          </ul>

          <p className="text-gray-300 mb-4">
            The full list with conditions is in{' '}
            <Link href="/blog/royal-x-casino-bonuses-vip-guide" className="text-[#FFA500] hover:underline font-semibold">
              Royal X Casino Bonuses: Welcome, Rebate and VIP Guide 2026
            </Link>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step 7: Withdraw your balance</h2>

          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>EasyPaisa and JazzCash: Rs. 600 to Rs. 50,000 per request, no operator fee</li>
            <li>USDT: Rs. 50,000 to Rs. 500,000, network fee applies</li>
            <li>Bank transfer is for deposits only</li>
            <li>The wallet must be in the same name as your account</li>
          </ul>

          <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-3">
            <li>Tap the wallet icon, then Withdraw.</li>
            <li>Choose EasyPaisa or JazzCash and enter the account number in your name.</li>
            <li>Enter an amount of Rs. 600 or more and submit.</li>
            <li>Confirm the SMS OTP.</li>
            <li>Wait. Payouts usually take 10 to 30 minutes; the first withdrawal and peak evenings can take longer.</li>
          </ol>

          <p className="text-gray-300 mb-4">
            Make your first withdrawal small and early, so you know the process works before any
            larger balance builds up. Details and screenshots are in the{' '}
            <Link href="/royal-x-casino-withdraw-guide" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino withdrawal guide</Link>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Settings every new player should change</h2>

          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-3">
            <li><strong>Turn off &quot;Install unknown apps&quot;</strong> for your browser after installing, so a clone cannot slip in later.</li>
            <li><strong>Use a unique password</strong> and change it if you ever typed it into a link someone sent you.</li>
            <li><strong>Mute promotional notifications</strong> in Android settings. Fewer prompts, fewer impulse sessions.</li>
            <li><strong>Set an app timer</strong> in Digital Wellbeing to cap daily use.</li>
            <li><strong>Save your withdrawal wallet</strong> once, in your own name, and do not change it casually.</li>
            <li><strong>Keep a two-line log</strong> of deposits and withdrawals; it is the only honest scoreboard.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Troubleshooting</h2>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">OTP or login problems</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>Wait up to 2 minutes for the SMS, then tap Resend</li>
            <li>Check the number is in +92 format with no leading zero issues</li>
            <li>Use Forgot Password on the login screen to get a reset code</li>
            <li>Repeated wrong attempts lock the account; open the in-app live chat to unlock it</li>
            <li>Update to {APP_INFO.version}, clear the app cache and check your connection</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Deposit not credited</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>Wallet deposits can take a few minutes; bank transfers up to about 30</li>
            <li>Confirm you sent the exact amount to the account shown</li>
            <li>Send the transaction ID and screenshot to live chat</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Withdrawal pending</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>Check the wallet name matches your account</li>
            <li>Allow extra time for a first withdrawal or a busy evening</li>
            <li>Check whether bonus credit with turnover terms is holding the request</li>
            <li>Contact live chat with the request ID</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Crashes or lag</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>Clear the app cache and free up storage toward the 600 MB recommendation</li>
            <li>Update to the latest version and restart the phone</li>
            <li>Switch from mobile data to Wi-Fi for the heavier fishing and slot rooms</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Getting support</h2>

          <p className="text-gray-300 mb-4">
            The operator&apos;s support is the 24/7 live chat inside the app plus its official
            Telegram and WhatsApp channels linked from the app. This website is independent of the
            operator; our contact form reaches us, not the casino, and we cannot move money or
            unlock accounts.
          </p>

          <div className="bg-orange-600/20 border border-orange-500 rounded-lg p-6 my-8">
            <p className="text-white font-semibold mb-2">Responsible gaming</p>
            <p className="text-gray-300">
              Royal X Casino is entertainment with a real cost, not an income. Decide your limits
              before you open the app and stop when you reach them. If play starts to feel
              compulsive, read{' '}
              <Link href="/blog/responsible-gaming-guide-royal-x-casino" className="text-[#FFA500] hover:underline font-semibold">
                Responsible Gaming Guide for Royal X Casino Players
              </Link>, including what to do after a losing streak.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently asked questions</h2>
          <div className="space-y-6 mb-8">
            {faqs.map((f) => (
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
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Download Royal X Casino APK {APP_INFO.version}
            </a>
          </div>
        </div>

        <aside className="mt-16 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Related guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/how-to-register-royal-x-casino" className="block p-6 bg-purple-800/30 rounded-lg hover:bg-purple-800/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">How to register a Royal X Casino account</h3>
              <p className="text-gray-400">Field-by-field registration walkthrough</p>
            </Link>
            <Link href="/blog/royal-x-casino-bonuses-vip-guide" className="block p-6 bg-purple-800/30 rounded-lg hover:bg-purple-800/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Royal X Casino Bonuses: Welcome, Rebate and VIP Guide 2026</h3>
              <p className="text-gray-400">Every bonus with its exact amount and conditions</p>
            </Link>
          </div>
        </aside>
      </article>
    </div>
  );
}
