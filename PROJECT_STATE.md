# PROJECT STATE — mejoratuhogar-web

Last updated: 2026-11-07

---

## Architecture

- **Frontend:** Astro (SSG — static site generation)
- **CMS:** Sanity (project ID: `d95eiezj`, dataset: `production`)
- **Hosting:** Netlify (site ID: `90f0dbb3-4bc2-4cae-833b-75b7e00f7963`)
- **Sanity Studio:** https://mejoratuhogar-web.sanity.studio/
- **Repository:** github.com/jduque81/mejoratuhogar-web (branch: `main`)

All data fetching is in `src/lib/sanity.ts`. No direct Sanity calls from pages/components.

---

## Completed

- Astro project setup with Tailwind CSS
- Sanity CMS connection (client, types, GROQ queries)
- All schemas in Sanity Studio: property, city, siteSettings, testimonial, service
- Sanity Studio deployed at mejoratuhogar-web.sanity.studio
- Pages: homepage, /comprar, /alquiler, /propiedades, /propiedades/[slug], /zonas/[slug], /vender, /ventanas-pvc, /contacto, /sobre-nosotros, /aviso-legal, /privacidad, /cookies, /blog (placeholder)
- Components: Header, Footer, HeroSection, PropertyCard, ContactForm, WhatsAppButton, CTABlock, TestimonialBlock, ServiceCard, SEO, CookieBanner
- Contact forms connected to Netlify Forms
- WhatsApp button with context
- Sitemap (@astrojs/sitemap)
- SEO meta tags (title, description, OG)
- Cookie banner
- Static fallback data (build does not fail if Sanity is unreachable)
- Property gallery: shows ALL images (no limit)
- Netlify deploy: originally manual (build → zip → API); Netlify now shows the site connected to GitHub (see Current Issues)
- Listings show all property statuses, with improved UX for non-available properties (2026-04-15)
- CMS access: Iryna added as Member to Sanity project

---

## Partially Implemented

- **Blog:** page exists (`/blog`) but shows placeholder — no Sanity schema or content yet
- **Zonas:** only 3 cities in Sanity (Benicarló, Peñíscola, Vinaròs) — needs more content
- **Similar properties:** shows up to 3 by operation type — no filtering by city or type yet

---

## Not Yet Done

- Admin panel integrated in the website (`/admin`) — decided to build later
- Blog full implementation (schema + content)
- Property search/filter on listing pages
- Google Analytics or any analytics integration
- Automatic Netlify deploy triggered from Sanity webhook (currently deploy is manual)

---

## Current Issues

- **Security (2026-11-07):** Netlify and Sanity tokens were exposed in the public repo via `.claude/settings.local.json`. File is now untracked and gitignored; follow-up items open. See `SECURITY_INCIDENTS.md` (INC-2026-001).
- **Deploy docs outdated (2026-11-07):** Netlify UI shows the site "Deploys from GitHub with Astro" (last published 2026-04-21). Pushes to `main` likely trigger a production deploy. Production branch, branch-deploy settings and build hooks not yet verified.
- **Build resilience:** in an environment where Sanity is unreachable at the network level (connection reset), `npm run build` crashes with an unhandled `ECONNRESET` — the static fallback does not cover this case. Not observed on Netlify.

---

## Working Features

| Feature | Status |
|---|---|
| Sanity CMS data on all pages | Working |
| Contact form (Netlify Forms) | Working |
| WhatsApp button | Working |
| Property detail page with full gallery | Working |
| Zonas pages (dynamic) | Working |
| Sitemap | Working |
| SEO meta tags | Working |
| Cookie banner | Working |
| Sanity Studio (Iryna access) | Working |
| Netlify deploy (manual) | Working |
