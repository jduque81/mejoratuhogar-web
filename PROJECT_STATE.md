# PROJECT STATE — mejoratuhogar-web

Last updated: 2026-11-09

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
- Sanity → Netlify auto-deploy: Sanity webhook triggers Netlify build hook on publish — site rebuilds automatically when content is created, updated, or deleted in Studio
- CMS access: Iryna added as Member to Sanity project
- City/zones fully dynamic: zone pages, zone pills on /comprar and /alquiler, and footer city links all driven by Sanity — adding a city in the CMS automatically propagates everywhere
- Supported city set defined in `FALLBACK_CITIES` (12 cities): Benicarló, Vinaròs, Peñíscola, Càlig, Sant Jordi, Traiguera, Alcalà de Xivert, Alcanar, Ulldecona, Oropesa del Mar, Benicàssim, Castellón — city documents must be created in Sanity Studio to activate them on the live site
- Property listings show all statuses (available, reserved, rented, sold) — no status filter in queries, zone pages included (PR #3)
- PropertyCard displays status badge on all cards; non-available cards have reduced opacity, no operation badge, and CTA "Ver opciones similares"
- Status labels use feminine forms: Disponible, Reservada, Alquilada, Vendida
- Listing count text is neutral ("X propiedades") — no longer says "disponibles"

---

## Partially Implemented

- **Blog:** page exists (`/blog`) but shows placeholder — no Sanity schema or content yet
- **Similar properties:** shows up to 3 by operation type — no filtering by city or type yet

---

## Not Yet Done

- Admin panel integrated in the website (`/admin`) — decided to build later
- Blog full implementation (schema + content)
- Property search/filter on listing pages
- Google Analytics or any analytics integration
- 8 new cities created in Sanity Studio (Sant Jordi, Traiguera, Alcalà de Xivert, Alcanar, Ulldecona, Oropesa del Mar, Benicàssim, Castellón) — fallback defined, Sanity documents pending

---

## Known Behaviour — Not a Bug

- **`astro dev` static path caching:** `getStaticPaths()` is computed once at dev server start and cached for the session. If a property is published in Sanity after the dev server started, its route won't exist until the server is restarted (`npm run dev`). This is normal Astro SSG behaviour — the production build always fetches fresh and is not affected.

---

## Current Issues

- **Security (2026-11-07):** Netlify and Sanity tokens were exposed in the public repo via `.claude/settings.local.json`. File is now untracked and gitignored; follow-up items open. See `SECURITY_INCIDENTS.md` (INC-2026-001).
- **Deploy (2026-11-07):** Netlify site `mejoratuhogar-web` (domain mejoratuhogar.es) deploys from GitHub; PR #1 produced a successful Deploy Preview. Pushes to `main` deploy to production. Build hooks / Sanity webhook not verified.
- **Second Netlify site (2026-11-07):** `dynamic-phoenix-50f8ce` (auto-named, outdated content) was also linked to this repo; owner unlinked it. Deletion pending (check Forms/domain first).
- **Peñíscola demo properties (2026-11-09):** zone pages filled cities with no Sanity properties with `FALLBACK_PROPERTIES`, linking to 2 non-existent pages (404). Fixed on branch `fix/zonas-sin-demo` — pending PR review/merge.
- **Càlig name (2026-11-09):** stored in Sanity as "Calig" (no accent) — fix in Studio.
- **Netlify Forms (2026-11-09):** forms render with `form-name` on production; registration/notifications in the Netlify dashboard not verified (needs owner login). No test submission sent.
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
| Netlify deploy from GitHub (push to `main`) | Working — `main@275e0a6` Published (2026-11-09) |
| Production check 2026-11-09: 24 sitemap pages, footer zone links, Càlig rented property | Working (except Peñíscola 404 links, see Current Issues) |
| Sanity → Netlify auto-deploy (webhook) | Working |
| City/zones fully dynamic (no hardcoding) | Working |
| 12-city expansion (fallback defined) | Partial — 4 live in Sanity (Benicarló, Càlig, Peñíscola, Vinaròs), 8 pending Studio creation |
| Property publish → live site (Càlig test) | Confirmed working end-to-end |
| All-status property listings | Working |
| Status badge on all property cards | Working |
