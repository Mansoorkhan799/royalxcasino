# Royal X Casino – Site Audit Report
**Date:** March 3, 2026

---

## Executive Summary

The site has been rebranded from Card Rummy to Royal X Casino. Core SEO and performance are solid, but several **Critical** and **High** issues remain: wrong domain and branding in metadata, contact info, and some pages.

---

## Issues by Priority

### 🔴 Critical

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 1 | Wrong domain in metadata | `privacy/page.tsx`, `disclaimer/page.tsx` | Change `cardrummyapp.com.pk` → `royalexcasino.com.pk` in canonical, Open Graph, schema |
| 2 | Wrong domain in content | `privacy/page.tsx` L37, L165, L216, L223; `disclaimer/page.tsx` L61 | Update all `www.cardrummyapp.com.pk` links and references |
| 3 | Contact page email mismatch | `contact-us/page.tsx` | Visible text shows `support@cardrummyapp.com.pk` (L51) but `mailto:` uses `support@royalexcasino.com.pk` (L45). Schema (L115) uses old email |
| 4 | Contact page schema | `contact-us/page.tsx` L112, L115 | Change `url` and `email` in Organization schema to Royal X Casino |

### 🟠 High

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 5 | 404 page branding | `not-found.tsx` | Change title/description from "Card Rummy" to "Royal X Casino" |
| 6 | Privacy page branding | `privacy/page.tsx` | Update title, description, keywords, OG, content from Card Rummy to Royal X Casino |
| 7 | Disclaimer page branding | `disclaimer/page.tsx` | Update title, description, OG, schema, content from Card Rummy to Royal X Casino |
| 8 | Broken internal link | `blog/card-rummy-bonuses-vip-guide/page.tsx` L131 | Change `/deposit-money-in-card-rummy` → `/deposit-guide` |
| 9 | Legacy links (redirect hops) | `deposit-money-in-card-rummy`, `withdraw-money-from-card-rummy`, `card-rummy-for-pc` | These pages redirect but still contain old content. Update internal links to canonical URLs (`/deposit-guide`, `/withdraw-guide`, `/download`) |
| 10 | Redirected pages still in codebase | `download-card-rummy`, `deposit-money-in-card-rummy`, `withdraw-money-from-card-rummy`, `card-rummy-for-pc` | Pages exist with Card Rummy branding; redirects work but files are dead code and may confuse future edits. Consider removing and keeping only redirects |

### 🟡 Medium

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 11 | Footer Download link | `Footer.tsx` | Uses external `DOWNLOAD_URL`; Header uses internal `/download`. Align both (prefer internal `/download`) |
| 12 | Legacy docs | `SEO_AUDIT_REPORT.md`, `SEO_STRATEGY.md` | Update or remove for Royal X Casino |

### 🟢 Low

| # | Issue | Location | Note |
|---|-------|----------|------|
| 13 | Blog URL slugs | All blog pages | Keep `card-rummy-*` slugs for SEO; no action unless adding redirects |
| 14 | Orphan page | `blog/create-account-login` | No nav/sitemap; redirects to `create-card-rummy-account-and-login`. Add redirect if needed |

---

## What's Working Well ✅

### SEO
- Root layout: solid meta, Open Graph, Twitter cards, metadata template
- Organization & SoftwareApplication schema in layout
- FAQ schema on homepage
- Blog: Article + BreadcrumbList via `BlogPostSchema`
- Canonical URLs on main pages
- Dynamic sitemap (`app/sitemap.ts`) – main pages + 14 blog posts
- Image sitemap at `public/image-sitemap.xml`
- 301 redirects for old URLs → new URLs
- BreadcrumbList on download, deposit-guide, withdraw-guide, about-us, contact-us, blog

### Technical
- Preconnect/dns-prefetch for GTM
- WebVitals tracking (CLS, FCP, LCP, TTFB, INP)
- Next.js image optimization (WebP)
- Lazy loading for non-priority images
- Security headers (HSTS, X-Content-Type-Options)
- Viewport & mobile meta tags
- Tailwind responsive classes
- `optimizePackageImports` for react-icons

### Structure
- Header and Footer cover main sections
- Breadcrumbs on key pages

---

## Quick Reference: Files Needing Updates

| File | Changes |
|------|---------|
| `contact-us/page.tsx` | Fix visible email (L51) and schema (L112, L115) to `royalexcasino.com.pk` and `support@royalexcasino.com.pk` |
| `privacy/page.tsx` | Replace all Card Rummy / cardrummyapp.com.pk with Royal X Casino / royalexcasino.com.pk |
| `disclaimer/page.tsx` | Same as privacy |
| `not-found.tsx` | Change title/description to Royal X Casino |
| `blog/card-rummy-bonuses-vip-guide/page.tsx` | `/deposit-money-in-card-rummy` → `/deposit-guide` |

---

## Recommendations

1. **Immediate:** Fix Critical issues (contact, privacy, disclaimer, domain references).
2. **Short term:** Update 404 page, fix broken/legacy internal links in blog.
3. **Optional:** Align Footer Download with Header; clean up or update old docs.
