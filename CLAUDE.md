# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/portfolio website for **Psikolog Asya Özcan**, a psychologist in İzmit, Turkey. Next.js 16 (App Router) + React 19 + Tailwind v4, fully static/SSG, no database or backend. All copy is in Turkish. SEO is a first-class concern here — see `docs/seo_implementation_2026-07.md` before touching metadata, schema, or sitemap logic.

## Commands

```
npm run dev      # start dev server
npm run build    # production build (SSG)
npm run start    # run production build
npm run lint     # eslint (eslint-config-next core-web-vitals + typescript)
```

No test suite exists. Verify changes via `npm run build` (catches TS/route errors) and manual browser check of the affected route.

## Architecture

**Two content types, both driven by static data files — no CMS, no database:**

1. **Service pages** (`/hizmetler/[slug]`) — sourced entirely from the `SERVICE_PAGES` array in `src/lib/services.ts`. Adding a service = adding one object to that array; it automatically appears in the `/hizmetler` list, `sitemap.xml`, the footer, and any other service's "related services" block (via `relatedSlugs`). Each entry also declares `relatedPostSlugs` to cross-link blog posts. See `docs/seo_implementation_2026-07.md` §5.1 for the full field guide and content-length guidance (500+ words to avoid thin-content penalties).

2. **Blog posts** (`/blog/[slug]`) — MDX files in `src/content/blog/`, read via Node `fs` at build time (`src/lib/blog.ts`, using `gray-matter` for frontmatter). Fully static, no admin UI. Adding a post = adding a `.mdx` file with the right frontmatter. Full authoring rules (slug/filename must match, no H1 in body, `.webp` images only, tag reuse for "related posts" matching, description length, etc.) are documented in `docs/blog_documentation.md` — read it before adding or editing posts.

**SEO/metadata is centralized and structural, not per-page boilerplate:**
- `src/lib/constants.ts` holds `SITE_URL`, `GBP_URL` (Google Business Profile), nav links, services summary, testimonials, contact info — single source of truth referenced across metadata, schema, and sitemap generation.
- `src/app/layout.tsx` emits the root JSON-LD `@graph` (Psychologist + Person + WebSite).
- `src/app/hizmetler/[slug]/page.tsx` emits per-page JSON-LD (Service + BreadcrumbList + FAQPage) built from the service's own data — pattern to follow if adding new dynamic route types.
- `src/app/sitemap.ts` and `src/app/feed.xml/route.ts` auto-derive from `getAllPosts()` / `getAllServiceSlugs()` — new content appears without touching these files. `sitemap.ts`'s `lastModified` for static pages intentionally uses the latest post date rather than build time, to avoid noisy "changed every build" signals — preserve that pattern if adding static routes.
- Known intentional omissions (do not "fix" without reading why first): no `aggregateRating` schema, no `HowTo` schema, no tag/category pages yet, no hreflang/i18n routes. Rationale in `docs/seo_implementation_2026-07.md` §4.
- **No real phone number exists anywhere in the site yet** (`docs/seo_implementation_2026-07.md` §2) — this is a known, tracked gap (NAP consistency for local SEO), not an oversight. If a real number is ever provided, the doc lists every file that needs it (`constants.ts`, `ContactInfo.tsx`, `layout.tsx` schema, WhatsApp link).

**Styling:** Tailwind v4 with theme tokens defined in `src/app/globals.css` (`@theme` block) — `--color-primary`, `--color-accent`, `--color-text-dark`, `--color-text-light`, `--color-bg-light`, etc. Use these tokens (`bg-accent`, `text-text-light`, ...) rather than raw hex values to stay consistent with the rest of the site.

**Icons:** FontAwesome (`@fortawesome/react-fontawesome` + free-solid/free-brands icon sets), referenced as icon objects in data files like `constants.ts`, not inline SVGs.

**Contact form:** `src/components/ui/ContactForm.tsx` uses EmailJS (`@emailjs/browser`), configured via `NEXT_PUBLIC_EMAILJS_*` env vars (see `.env.example`). Includes a honeypot field for spam protection and inline success/error UI (not `alert()`).

**Images:** all images are `.webp` for consistency and performance — this is an enforced convention, not a suggestion (see blog doc's "common mistakes" section). The root-level `archive-*` files/images (`archive-README.md`, `archive-index.html`, etc.) are leftovers from the pre-Next.js static HTML/Bootstrap version of this site — not part of the active app, do not build features on them.

**Security headers** are set globally in `next.config.ts` for all routes (`/:path*`) — check for conflicts before adding new routes (e.g. API/webhook routes needing different CORS behavior).

## Path alias

`@/*` maps to `src/*` (see `tsconfig.json`).
