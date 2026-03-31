# PROJECT STATE — mejoratuhogar-web

Last updated: 2026-03-31

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
- Netlify deploy workflow: npm run build → zip dist/ → POST to Netlify API
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

- None blocking. Site builds and deploys cleanly.
- `.claude/settings.local.json` has uncommitted local changes (permissions) — not critical.

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
