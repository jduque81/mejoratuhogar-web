# NEXT STEPS — mejoratuhogar-web

Last updated: 2026-04-14

---

## ~~Priority 1 — Automatic deploy from Sanity~~ — DONE

Sanity webhook → Netlify build hook configured and working. Publishing in Studio triggers an automatic site rebuild.

---

## Priority 1 — Blog

The `/blog` page exists but is a placeholder.

Steps:
1. Add `post` schema to Sanity Studio (title, slug, content, publishedAt, featuredImage)
2. Add types and GROQ queries in `src/lib/sanity.ts`
3. Create `src/pages/blog/[slug].astro` for individual posts
4. Update `/blog/index.astro` to list posts from Sanity

---

## Priority 2 — Admin panel in the website

Build a `/admin` section so Iryna can publish properties directly from mejoratuhogar without using Sanity Studio.

Approach to decide: Astro SSR + Sanity write API, or embed Sanity Studio inside the site.

---

## ~~Càlig property issue~~ — RESOLVED

Property `adosado-en-alquiler-en-calig-larga-duracion` was published correctly in Sanity and Netlify deploy triggered as expected. Page was not visible in localhost only because Astro dev server cached static paths from before publication. Fix: restart `npm run dev`. No code changes needed. Full publish-to-live flow confirmed working.

---

## Immediate action — Create 9 city documents in Sanity Studio

The fallback and dynamic code is ready. The 9 new cities need to be created in Sanity Studio to go live:

| City | Slug to use |
|---|---|
| Càlig | `calig` |
| Sant Jordi | `sant-jordi` |
| Traiguera | `traiguera` |
| Alcalà de Xivert | `alcala-de-xivert` |
| Alcanar | `alcanar` |
| Ulldecona | `ulldecona` |
| Oropesa del Mar | `oropesa-del-mar` |
| Benicàssim | `benicassim` |
| Castellón | `castellon` |

Steps per city in Studio: New document → City → fill Name + Slug (use the slug above) → Publish.
Once published, the Sanity webhook fires → Netlify rebuilds → city page and zone pills go live automatically.

---

## Lower priority

- Property search/filter on listing pages
- Analytics (Google Analytics or Plausible)
