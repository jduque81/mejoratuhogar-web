# NEXT STEPS — mejoratuhogar-web

Last updated: 2026-11-09

---

## Before the CRM — close the website phase

1. ~~Merge the `fix/zonas-sin-demo` PR (Peñíscola 404 links)~~ — DONE: PR #4, verified in production.
2. In Sanity Studio: rename "Calig" → "Càlig"; add properties to Peñíscola when available.
3. ~~Netlify: confirm Forms + notifications; delete `dynamic-phoenix-50f8ce`~~ — DONE 2026-11-09 (optional: confirm the notification emails arrive in the ventas@ inbox).

---

## Next objective — CRM for Iryna

Scope to be defined.

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

## Immediate action — Create 8 city documents in Sanity Studio

The fallback and dynamic code is ready. Càlig already exists in Sanity (fix its name to "Càlig" — it currently shows as "Calig"). The 8 remaining cities need to be created in Sanity Studio to go live:

| City | Slug to use |
|---|---|
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
