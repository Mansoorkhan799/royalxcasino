/**
 * Registry of every published blog post. The blog index, category menu and
 * related-post blocks read from here so titles and links stay consistent.
 * Titles are kept under 60 characters so they are not truncated in search.
 */
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: "Reviews & Safety" | "Guides" | "Bonuses & Tips" | "Games" | "Comparisons";
  datePublished: string;
  readMinutes: number;
  featured?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "royal-x-casino-app-review-2026",
    title: "Royal X Casino App Review 2026: Pros, Cons and Payout Speed",
    description:
      "An honest Royal X Casino app review for Pakistan: games, bonuses, deposit and withdrawal speed, real weaknesses and who the app does and does not suit.",
    category: "Reviews & Safety",
    datePublished: "2026-01-11",
    readMinutes: 12,
    featured: true,
  },
  {
    slug: "is-royal-x-casino-real-or-fake",
    title: "Is Royal X Casino Real or Fake? Evidence-Based Answer 2026",
    description:
      "How to tell the official Royal X Casino app from clones, what the payment records show and the red flags to check before depositing.",
    category: "Reviews & Safety",
    datePublished: "2026-01-03",
    readMinutes: 9,
  },
  {
    slug: "is-royal-x-casino-safe-legal-pakistan",
    title: "Is Royal X Casino Safe and Legal in Pakistan? 2026 Guide",
    description:
      "Pakistan's gambling law, how it applies to offshore apps, the real risks of playing and the steps that keep your money and data safer.",
    category: "Reviews & Safety",
    datePublished: "2026-01-11",
    readMinutes: 10,
  },
  {
    slug: "how-to-use-royal-x-casino-app-pakistan-guide-2026",
    title: "How to Use the Royal X Casino App in Pakistan (2026 Guide)",
    description:
      "From install to first withdrawal: navigation, free-trial modes, deposits, bonuses and the settings every new player should change.",
    category: "Guides",
    datePublished: "2026-01-11",
    readMinutes: 14,
  },
  {
    slug: "responsible-gaming-guide-royal-x-casino",
    title: "Responsible Gaming Guide for Royal X Casino Players",
    description:
      "Deposit limits, session timers, warning signs of problem play and what to do after a losing streak instead of chasing it.",
    category: "Reviews & Safety",
    datePublished: "2026-01-11",
    readMinutes: 10,
  },
  {
    slug: "royal-x-casino-bonuses-vip-guide",
    title: "Royal X Casino Bonuses: Welcome, Rebate and VIP Guide 2026",
    description:
      "Every Royal X Casino bonus explained with exact amounts: Rs. 10 welcome credit, 20 percent first-deposit rebate, referral pay and VIP levels.",
    category: "Bonuses & Tips",
    datePublished: "2026-01-11",
    readMinutes: 11,
  },
  {
    slug: "royal-x-casino-tips-10-smart-tricks",
    title: "Royal X Casino Tips: 10 Smart Tricks to Play Safe and Win",
    description:
      "Ten practical Royal X Casino tips: bankroll rules, game selection, bonus timing and withdrawal habits that reduce losses and keep winnings in your wallet.",
    category: "Bonuses & Tips",
    datePublished: "2026-01-11",
    readMinutes: 11,
  },
  {
    slug: "royal-x-casino-dragon-vs-tiger-andar-bahar-high-payout-games",
    title: "Royal X Casino High-Payout Games: Dragon Tiger, Andar Bahar",
    description:
      "Which Royal X Casino games pay best and why: Dragon vs Tiger, Andar Bahar, Teen Patti and Rummy compared on odds, pace and skill.",
    category: "Games",
    datePublished: "2026-01-11",
    readMinutes: 11,
  },
  {
    slug: "fishing-games-royal-x-casino-tutorial-2026",
    title: "Royal X Casino Fishing Games Tutorial: How to Play and Win",
    description:
      "Learn the fishing arcade games inside Royal X Casino: controls, cannon bet levels, room selection, boss fish multipliers and bankroll tips per session.",
    category: "Games",
    datePublished: "2026-03-03",
    readMinutes: 7,
  },
  {
    slug: "father-kim-slot-game-royal-x-casino-guide",
    title: "Father Kim Slot on Royal X Casino: Guide, Paylines, Tips",
    description:
      "How the Father Kim slot on Royal X Casino works: symbols, paylines, bonus features, bet range, volatility and how to size spins to your bankroll.",
    category: "Games",
    datePublished: "2026-03-03",
    readMinutes: 6,
  },
  {
    slug: "trump-it-slot-game-royal-x-casino-2026",
    title: "Trump IT Slot on Royal X Casino: Review, RTP and How to Play",
    description:
      "Trump IT slot review on Royal X Casino: theme, features, volatility, bet limits, where to find the RTP panel and whether it suits your bankroll.",
    category: "Games",
    datePublished: "2026-03-03",
    readMinutes: 6,
  },
  {
    slug: "3patti-blue-vs-royal-x-casino",
    title: "3Patti Blue vs Royal X Casino: Which Pays Better in 2026?",
    description:
      "3Patti Blue and Royal X Casino compared on bonuses, game variety, withdrawal speed and minimums so you can pick the right app.",
    category: "Comparisons",
    datePublished: "2026-01-11",
    readMinutes: 8,
  },
  {
    slug: "3patti-gold-vs-royal-x-casino",
    title: "3Patti Gold vs Royal X Casino: Bonuses, Games, Payouts",
    description:
      "A side-by-side look at 3Patti Gold and Royal X Casino for Pakistani players: welcome offers, Teen Patti variants, game depth, payout times and support.",
    category: "Comparisons",
    datePublished: "2026-01-11",
    readMinutes: 8,
  },
  {
    slug: "3patti-lucky-vs-royal-x-casino",
    title: "3Patti Lucky vs Royal X Casino: Honest 2026 Comparison",
    description:
      "3Patti Lucky versus Royal X Casino on bonuses, game range, withdrawal limits and safety, with a clear recommendation for each type of player.",
    category: "Comparisons",
    datePublished: "2026-01-11",
    readMinutes: 9,
  },
  {
    slug: "3patti-room-vs-royal-x-casino",
    title: "3Patti Room vs Royal X Casino: Which App Should You Pick?",
    description:
      "3Patti Room and Royal X Casino compared feature by feature: bonuses, games, payments, payout speed and who each app suits.",
    category: "Comparisons",
    datePublished: "2026-01-11",
    readMinutes: 8,
  },
];

export const BLOG_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
