import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: 'A Detailed Guide to Father Kim Slot Game on Royal X Casino',
  description: 'Father Kim slot game on Royal X Casino: gameplay, features, paylines, and tips. Complete guide for Pakistan players 2026.',
  keywords: ['Father Kim slot', 'Royal X Casino slots', 'Father Kim game', 'Royal X Casino slot guide'],
  openGraph: {
    title: 'A Detailed Guide to Father Kim Slot Game on Royal X Casino',
    description: 'Complete guide to Father Kim slot on Royal X Casino. Gameplay and tips 2026.',
    type: 'article',
    url: 'https://royalexcasino.com.pk/blog/father-kim-slot-game-royal-x-casino-guide',
    siteName: 'Royal X Casino',
  },
  alternates: { canonical: 'https://royalexcasino.com.pk/blog/father-kim-slot-game-royal-x-casino-guide' },
  twitter: {
    card: 'summary_large_image',
    title: 'A Detailed Guide to Father Kim Slot Game on Royal X Casino',
    description: 'Complete guide to Father Kim slot on Royal X Casino. Gameplay and tips 2026.',
    images: ['https://royalexcasino.com.pk/royal-x-casino.webp'],
  },
};

export default function BlogFatherKimSlot() {
  return (
    <div className="min-h-screen bg-[#060A20]">
      <BlogPostSchema
        title="A Detailed Guide to Father Kim Slot Game on Royal X Casino"
        description="Father Kim slot game on Royal X Casino: gameplay, features, and tips."
        slug="father-kim-slot-game-royal-x-casino-guide"
        datePublished="2026-03-03"
      />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#FFA500]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#FFA500]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Father Kim Slot Game Guide</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Detailed Guide to Father Kim Slot Game on Royal X Casino
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <time dateTime="2026-03-03">March 3, 2026</time>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            <strong>Father Kim</strong> is a themed slot game available on <Link href="/" className="text-[#FFA500] hover:underline font-semibold">Royal X Casino</Link>. With unique visuals and bonus features, it&apos;s a popular choice among slot players in Pakistan.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Game Overview</h2>
          <p className="text-gray-300 mb-4">
            Father Kim is a video slot with reels, paylines, and special symbols. The game has a distinct theme and offers wilds, scatters, and bonus rounds. Bet sizes are flexible to suit different bankrolls.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>Themed graphics and sound</li>
            <li>Wild symbols to substitute for others</li>
            <li>Scatter symbols for free spins or bonuses</li>
            <li>Multiple bet levels</li>
            <li>Fast spins and smooth gameplay</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How to Play</h2>
          <p className="text-gray-300 mb-4">
            Select your bet per line, tap Spin, and watch the reels. Wins are paid when matching symbols land on active paylines. Bonus rounds trigger when you get the required scatter or bonus symbols. Check the in-game paytable for exact rules.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Tips</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
            <li>Start with smaller bets to learn the game</li>
            <li>Check the paytable before playing</li>
            <li>Set a budget and stop when you reach it</li>
            <li>Use free/practice mode if available</li>
          </ul>

          <div className="mt-12 text-center">
            <Link href="/royal-x-casino-download" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
              Play Father Kim on Royal X Casino
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
