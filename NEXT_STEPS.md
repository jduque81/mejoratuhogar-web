# NEXT STEPS — mejoratuhogar-web

Last updated: 2026-03-31

---

## Priority 1 — Automatic deploy from Sanity (immediate)

When Iryna publishes a property in Sanity Studio, the site should rebuild automatically.

Steps:
1. Create a Netlify build hook (Netlify → Site → Settings → Build & Deploy → Build hooks → Add)
2. Copy the hook URL
3. Create a Sanity webhook (sanity.io/manage → project → API → Webhooks → Add)
   - URL: the Netlify hook URL
   - Dataset: production
   - Trigger on: create, update, delete
4. Test: publish something in Studio → site rebuilds in ~2 min

---

## Priority 2 — Blog

The `/blog` page exists but is a placeholder.

Steps:
1. Add `post` schema to Sanity Studio (title, slug, content, publishedAt, featuredImage)
2. Add types and GROQ queries in `src/lib/sanity.ts`
3. Create `src/pages/blog/[slug].astro` for individual posts
4. Update `/blog/index.astro` to list posts from Sanity

---

## Priority 3 — Admin panel in the website

Build a `/admin` section so Iryna can publish properties directly from mejoratuhogar without using Sanity Studio.

Approach to decide: Astro SSR + Sanity write API, or embed Sanity Studio inside the site.

---

## Lower priority

- Property search/filter on listing pages
- Analytics (Google Analytics or Plausible)
- More cities in Sanity
