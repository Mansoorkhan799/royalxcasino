# Royal X Casino Website

This is the official website for **Royal X Casino** – Pakistan's real money gaming app. Built with Next.js 15, TypeScript, and Tailwind CSS. Cloned and adapted from the [card-rummy](https://github.com/Mansoorkhan799/card-rummy) repository.

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
- Or edit `src/app/download/page.tsx` and replace the `DOWNLOAD_URL` constant.

### 3. Blog posts

- **New post:** Add a new folder under `src/app/blog/`, e.g. `src/app/blog/your-post-slug/page.tsx`.
- Use existing blog posts as a template (e.g. `src/app/blog/card-rummy-app-review-2026/page.tsx`).
- Add the new post to the list on `src/app/blog/page.tsx` and to `src/app/api/sitemap/route.ts` if you use the API sitemap.

### 4. Contact email

- Contact email is set in `src/app/contact-us/page.tsx` as `support@royalexcasino.com.pk`. Change it there if you use a different address.

## Project structure

- `src/app/page.tsx` – Homepage
- `src/app/download/page.tsx` – Download APK page
- `src/app/deposit-guide/page.tsx` – Deposit guide
- `src/app/withdraw-guide/page.tsx` – Withdraw guide
- `src/app/blog/page.tsx` – Blog index
- `src/app/about-us/page.tsx` – About
- `src/app/contact-us/page.tsx` – Contact
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
  - `src/app/api/sitemap/route.ts` (baseUrl)
  - `src/app/api/robots/route.ts` (baseUrl)
  - Each page’s `metadata.alternates.canonical` if you change the domain.

## License

Private. All rights reserved.
