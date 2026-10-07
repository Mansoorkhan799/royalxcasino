import { MetadataRoute } from 'next';
import { readdirSync } from 'fs';
import { join } from 'path';
import { SITE_URL } from '@/lib/config';

/**
 * Last-modified dates are set by hand when a page's content actually changes.
 * Google ignores sitemaps whose lastmod is always "now", so keep these honest.
 */
const CONTENT_UPDATED = '2026-10-08';

const LAST_MODIFIED: Record<string, string> = {
  '/privacy': '2026-10-08',
  '/disclaimer': '2026-10-08',
};

/** Discover blog slugs from the file system so new posts are never missed. */
function getBlogSlugs(): string[] {
  try {
    const blogPath = join(process.cwd(), 'src/app/blog');
    return readdirSync(blogPath, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  } catch {
    return [
      '3patti-blue-vs-royal-x-casino',
      '3patti-gold-vs-royal-x-casino',
      '3patti-lucky-vs-royal-x-casino',
      '3patti-room-vs-royal-x-casino',
      'father-kim-slot-game-royal-x-casino-guide',
      'fishing-games-royal-x-casino-tutorial-2026',
      'how-to-use-royal-x-casino-app-pakistan-guide-2026',
      'is-royal-x-casino-real-or-fake',
      'is-royal-x-casino-safe-legal-pakistan',
      'responsible-gaming-guide-royal-x-casino',
      'royal-x-casino-app-review-2026',
      'royal-x-casino-bonuses-vip-guide',
      'royal-x-casino-dragon-vs-tiger-andar-bahar-high-payout-games',
      'royal-x-casino-tips-10-smart-tricks',
      'trump-it-slot-game-royal-x-casino-2026',
    ];
  }
}

const lastMod = (path: string) => LAST_MODIFIED[path] ?? CONTENT_UPDATED;

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: Array<[string, MetadataRoute.Sitemap[number]['changeFrequency'], number]> = [
    ['', 'weekly', 1],
    ['/royal-x-casino-download', 'monthly', 0.9],
    ['/royal-x-casino-deposit-guide', 'monthly', 0.9],
    ['/royal-x-casino-withdraw-guide', 'monthly', 0.9],
    ['/royal-x-casino-redeem-code', 'monthly', 0.9],
    ['/royal-x-casino-for-pc', 'monthly', 0.8],
    ['/royal-x-casino-for-ios', 'monthly', 0.8],
    ['/royal-x-casino-old-versions', 'monthly', 0.8],
    ['/how-to-register-royal-x-casino', 'monthly', 0.8],
    ['/how-to-login-royal-x-casino', 'monthly', 0.8],
    ['/blog', 'weekly', 0.7],
    ['/royal-x-casino-about-us', 'yearly', 0.5],
    ['/royal-x-casino-contact-us', 'yearly', 0.5],
    ['/privacy', 'yearly', 0.3],
    ['/disclaimer', 'yearly', 0.3],
  ];

  const mainPages: MetadataRoute.Sitemap = corePages.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastMod(path || '/'),
    changeFrequency,
    priority,
  }));

  const blogPages: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: lastMod(`/blog/${slug}`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...blogPages];
}
