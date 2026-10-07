# Royal X Casino Website

This is the official website for **Royal X Casino** – Pakistan's real money gaming app. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Your Content

### 1. Homepage content and images

- **Images:** Place your assets in `public/`:
  - `royal-x-casino.webp` – main app/logo (replace the current placeholder)
  - `royal-x-casino-logo.webp` – icon/logo (192x192, 512x512)
  - `feature/og-image.webp` – Open Graph image (1200x630) for social sharing
- **Homepage copy:** Edit `src/app/page.tsx` to update sections, features, games list, FAQs, and CTAs.

### 2. Download / APK link

- Set the real APK URL via environment variable:
  - Create `.env.local` and add:  
    `NEXT_PUBLIC_DOWNLOAD_URL=https://your-actual-download-link.com/royal-x-casino.apk`
- Or edit `DOWNLOAD_URL` in `src/lib/config.ts` (single source of truth, also holds `APP_INFO` version/size and `APP_RATING`).

### 3. Blog posts

- **New post:** Add a new folder under `src/app/blog/`, e.g. `src/app/blog/your-post-slug/page.tsx`.
- Use existing blog posts as a template (e.g. `src/app/blog/royal-x-casino-app-review-2026/page.tsx`).
- Register the post (slug, title ≤60 chars, description, date, category) in `src/lib/blog-posts.ts`; the blog index and schema read from it. `src/app/sitemap.ts` discovers blog folders automatically.

### 4. Contact email

- Contact email is set in `src/app/royal-x-casino-contact-us/page.tsx` as `support@royalexcasino.com.pk`. Change it there if you use a different address.

## Project structure

- `src/app/page.tsx` – Homepage
- `src/app/royal-x-casino-download/page.tsx` – Download APK page
- `src/app/royal-x-casino-deposit-guide/page.tsx` – Deposit guide
- `src/app/royal-x-casino-withdraw-guide/page.tsx` – Withdraw guide
- `src/app/blog/page.tsx` – Blog index (data from `src/lib/blog-posts.ts`)
- `src/app/royal-x-casino-about-us/page.tsx` – About
- `src/app/royal-x-casino-contact-us/page.tsx` – Contact
- `src/lib/config.ts` – Download URL, APP_INFO, APP_RATING, SITE_URL
- `next.config.js` – 301 redirects for legacy URLs, security headers
- `src/app/layout.tsx` – Root layout, metadata, favicon
- `src/components/Header.tsx`, `Footer.tsx`, `MobileNavigation.tsx` – Global UI
- `public/` – Static assets (images, favicon, manifest)

## Build & deploy

```bash
npm run build
npm start
```

For Vercel: connect the repo and deploy. Set `NEXT_PUBLIC_DOWNLOAD_URL` in the project environment variables if you use it.

## Domain / SEO

- Default canonical and metadata use `https://royalexcasino.com.pk`. Update in:
  - `src/app/layout.tsx` (metadataBase, canonical, Open Graph, Twitter)
  - `src/lib/config.ts` (`SITE_URL`, used by `src/app/sitemap.ts`)
  - `public/robots.txt` (Sitemap line) and `public/sitemap-index.xml`
  - Each page’s `metadata.alternates.canonical` if you change the domain.

## License

Private. All rights reserved.
