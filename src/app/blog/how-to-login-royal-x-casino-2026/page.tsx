import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: 'How to Log in to an Account on Royal X Casino? [2026]',
  description: 'Learn how to log in to your Royal X Casino account. Use mobile number and password. Quick login guide for 2026.',
  keywords: ['Royal X Casino login', 'Royal X Casino sign in', 'Royal X Casino account login', 'Royal X Casino 2026'],
  openGraph: {
    title: 'How to Log in to an Account on Royal X Casino? [2026]',
    description: 'Log in to Royal X Casino with mobile number and password. Full guide 2026.',
    type: 'article',
    url: 'https://royalexcasino.com.pk/blog/how-to-login-royal-x-casino-2026',
    siteName: 'Royal X Casino',
  },
  alternates: { canonical: 'https://royalexcasino.com.pk/blog/how-to-login-royal-x-casino-2026' },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Log in to an Account on Royal X Casino? [2026]',
    description: 'Log in to Royal X Casino with mobile number and password. Full guide 2026.',
    images: ['https://royalexcasino.com.pk/royal-x-casino.webp'],
  },
};

export default function BlogHowToLogin() {
  return (
    <div className="min-h-screen bg-[#060A20]">
      <BlogPostSchema
        title="How to Log in to an Account on Royal X Casino? [2026]"
        description="Learn how to log in to your Royal X Casino account with mobile number and password."
        slug="how-to-login-royal-x-casino-2026"
        datePublished="2026-03-03"
        howToSteps={[
          { name: "Open the Royal X Casino app", text: "Open the Royal X Casino app on your device." },
          { name: "Tap Log In or Sign In", text: 'Tap "Log In" or "Sign In" on the welcome screen.' },
          { name: "Enter your mobile number", text: "Enter your mobile number (the one you used to register)." },
          { name: "Enter your password", text: "Enter your password." },
          { name: "Tap Log In", text: "Tap Log In to access your account." },
        ]}
      />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#FFA500]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#FFA500]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">How to Log in to Royal X Casino 2026</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How to Log in to an Account on Royal X Casino? [2026]
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <time dateTime="2026-03-03">March 3, 2026</time>
            <span>•</span>
            <span>4 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Already have a <Link href="/" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino</Link> account? Logging in is simple. Use your registered mobile number and password to access your account.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Login Steps</h2>
          <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-3">
            <li>Open the Royal X Casino app on your device.</li>
            <li>Tap <strong>Log In</strong> (or &quot;Sign In&quot;) on the welcome screen.</li>
            <li>Enter your <strong>mobile number</strong> (the one you used to register).</li>
            <li>Enter your <strong>password</strong>.</li>
            <li>Tap <strong>Log In</strong> to access your account.</li>
          </ol>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Forgot Password?</h2>
          <p className="text-gray-300 mb-4">
            If you forgot your password, tap &quot;Forgot Password&quot; on the login screen. Enter your mobile number and you&apos;ll receive an OTP to reset it. Follow the on-screen steps to set a new password.
          </p>

          <div className="bg-[#0A1029] rounded-xl p-6 my-8">
            <h3 className="text-xl font-semibold text-[#FFA500] mb-3">Security Tips</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Never share your password with anyone</li>
              <li>Use a strong, unique password</li>
              <li>Log out when using a shared device</li>
              <li>Only download from royalexcasino.com.pk</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog/royal-x-casino-login-problems-solutions" className="inline-block text-[#FFA500] hover:underline font-semibold">
              Having login issues? Read our solutions guide →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
