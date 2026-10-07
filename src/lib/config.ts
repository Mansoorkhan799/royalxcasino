export const DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_DOWNLOAD_URL ||
  "https://xrefer.cc?refer_id=101141302616";

export const SITE_URL = "https://royalexcasino.com.pk";

/**
 * Single source of truth for APK facts shown on the homepage and emitted in
 * SoftwareApplication JSON-LD. Update here after verifying a new build so the
 * visible table, "What's new" line and schema always match.
 */
export const APP_INFO = {
  name: "Royal X Casino",
  alsoKnownAs: "Royal X Casino 777, RoyalX777",
  version: "v2.54.7",
  size: "8.9 MB",
  updated: "January 2026",
  updatedISO: "2026-01",
  androidMin: "Android 5.0+",
  category: "Casino, Cards, Real Money Games",
} as const;

/**
 * Rating shown in the visible rating block AND in AggregateRating schema.
 * Both must stay identical. Replace with your real collected numbers.
 */
export const APP_RATING = {
  value: "4.5",
  best: "5",
  count: "12480",
} as const;

export const RATING_COUNT_DISPLAY = Number(APP_RATING.count).toLocaleString("en-US");
