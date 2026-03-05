import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: 'How to Register an Account on Royal X Casino? [2026]',
  description: 'Step-by-step guide to register a Royal X Casino account in 2026. Create your account in minutes and start playing 200+ games for real money.',
  keywords: ['Royal X Casino register', 'Royal X Casino sign up', 'Royal X Casino account', 'Royal X Casino registration 2026'],
  openGraph: {
    title: 'How to Register an Account on Royal X Casino? [2026]',
    description: 'Create your Royal X Casino account in minutes. Full registration guide for 2026.',
    type: 'article',
  },
  alternates: { canonical: 'https://royalexcasino.com.pk/blog/how-to-register-royal-x-casino-2026' },
};

export default function BlogHowToRegister() {
  return (
    <main className="min-h-screen bg-[#060A20]">
      <BlogPostSchema
        title="How to Register an Account on Royal X Casino? [2026]"
        description="Step-by-step guide to register a Royal X Casino account in 2026."
        slug="how-to-register-royal-x-casino-2026"
        datePublished="2026-03-03"
      />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#FFA500]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#FFA500]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">How to Register on Royal X Casino 2026</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How to Register an Account on Royal X Casino? [2026]
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <time dateTime="2026-03-03">March 3, 2026</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Want to start playing <Link href="/" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino</Link> and earn real money? Registration is quick. Follow these steps to create your account in 2026.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Step-by-Step Registration</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFA500] text-[#06091F] rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Download the App</h3>
                <p className="text-gray-300"><Link href="/royal-x-casino-download" className="text-[#FFA500] hover:underline">Download Royal X Casino</Link> from royalexcasino.com.pk and install it on your Android device.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFA500] text-[#06091F] rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Tap Register or Sign Up</h3>
                <p className="text-gray-300">Open the app and tap &quot;Register&quot; or &quot;Sign Up&quot; on the welcome screen.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFA500] text-[#06091F] rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Enter Your Details</h3>
                <p className="text-gray-300">Provide your mobile number, create a password (min 6 characters), and enter the OTP sent via SMS.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFA500] text-[#06091F] rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Complete Registration</h3>
                <p className="text-gray-300">Tap &quot;Complete&quot; or &quot;Register&quot;. Your account is ready. You can deposit and start playing!</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-600 rounded-lg p-6 my-8">
            <p className="text-white font-semibold mb-2">🎁 Bonus</p>
            <p className="text-gray-300">New users often get a welcome bonus after first deposit. Check the app for current offers.</p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/royal-x-casino-download" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
              Download Royal X Casino
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
