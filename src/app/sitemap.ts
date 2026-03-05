import { MetadataRoute } from 'next';
import { readdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://royalexcasino.com.pk';

/**
 * Dynamically discover blog slugs from the file system.
 * Excludes 'page.tsx' (the blog index) and any non-directory entries.
 */
function getBlogSlugs(): string[] {
  try {
    const blogPath = join(process.cwd(), 'src/app/blog');
    const entries = readdirSync(blogPath, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  } catch {
    // Fallback if fs fails (e.g. edge runtime)
    return [
      'royal-x-casino-app-review-2026',
      'is-royal-x-casino-real-or-fake',
      'how-to-use-royal-x-casino-app-pakistan-guide-2026',
      'royal-x-casino-create-account-and-login',
      'tips-to-win-big-in-royal-x-casino',
      'royal-x-casino-tips-10-smart-tricks',
      'royal-x-casino-dragon-vs-tiger-andar-bahar-high-payout-games',
      'royal-x-casino-bonuses-vip-guide',
      'is-royal-x-casino-safe-legal-pakistan',
      'responsible-gaming-guide-royal-x-casino',
      '3patti-blue-vs-royal-x-casino',
      '3patti-gold-vs-royal-x-casino',
      '3patti-lucky-vs-royal-x-casino',
      '3patti-room-vs-royal-x-casino',
      'daily-first-deposit-bonus-royal-x-casino',
      'royal-x-casino-login-problems-solutions',
      'trump-it-slot-game-royal-x-casino-2026',
      'how-to-recover-losses-royal-x-casino',
      'free-trial-game-modes-royal-x-casino',
      'father-kim-slot-game-royal-x-casino-guide',
      'fishing-games-royal-x-casino-tutorial-2026',
      'royal-x-casino-for-ios-download-2026',
      'royal-x-casino-old-versions-download-2026',
      'how-to-register-royal-x-casino-2026',
      'how-to-login-royal-x-casino-2026',
    ];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const mainPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/royal-x-casino-download`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/royal-x-casino-deposit-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/royal-x-casino-withdraw-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/royal-x-casino-for-pc`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/royal-x-casino-for-ios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/royal-x-casino-old-versions`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/how-to-register-royal-x-casino`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/how-to-login-royal-x-casino`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/royal-x-casino-about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/royal-x-casino-contact-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const blogSlugs = getBlogSlugs();
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...blogPages];
}
