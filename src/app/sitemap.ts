import { MetadataRoute } from 'next';

const BASE_URL = 'https://royalexcasino.com.pk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const mainPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/download`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/deposit-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/withdraw-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const blogSlugs = [
    'card-rummy-app-review-2026',
    'is-card-rummy-real-or-fake',
    'how-to-use-card-rummy-app-pakistan-guide-2026',
    'create-card-rummy-account-and-login',
    'tips-to-win-big-in-card-rummy',
    'card-rummy-tips-10-smart-tricks',
    'dragon-vs-tiger-andar-bahar-high-payout-games',
    'card-rummy-bonuses-vip-guide',
    'is-card-rummy-safe-legal-pakistan',
    'responsible-gaming-guide-card-rummy',
    '3patti-blue-vs-card-rummy',
    '3patti-gold-vs-card-rummy',
    '3patti-lucky-vs-card-rummy',
    '3patti-room-vs-card-rummy',
    'royal-x-casino-old-versions-download-2026',
    'royal-x-casino-for-ios-download-2026',
    'how-to-register-royal-x-casino-2026',
    'how-to-login-royal-x-casino-2026',
    'daily-first-deposit-bonus-royal-x-casino',
    'royal-x-casino-login-problems-solutions',
    'trump-it-slot-game-royal-x-casino-2026',
    'how-to-recover-losses-royal-x-casino',
    'free-trial-game-modes-royal-x-casino',
    'father-kim-slot-game-royal-x-casino-guide',
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...blogPages];
}
