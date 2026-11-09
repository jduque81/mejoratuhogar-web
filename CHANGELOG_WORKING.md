# CHANGELOG — Working sessions

---

## 2026-11-09

### Merged and deployed
- PR #2 (`fda3200`): footer city links from Sanity, 12 fallback cities, `CLAUDE.md`, docs.
- PR #3 (`275e0a6`): zone pages show all property statuses; neutral count/SEO text ("X propiedades").
- Netlify production: `main@275e0a6` Published.

### Production verification (mejoratuhogar.es)
- 24 sitemap pages return 200; footer shows 4 zone links (Benicarló, Calig, Peñíscola, Vinaròs) on every page, all resolve.
- `/zonas/calig`: 1 property (`adosado-en-alquiler-en-calig-larga-duracion`) with "Alquilada" badge and "Ver opciones similares".
- Forms (contacto, vender, ventanas-pvc, property contact) render with Netlify `form-name`; not submitted.
- Git: no secrets in tracked files or recent history; `.claude/settings.local.json` untracked and gitignored.

### Fixed — Peñíscola 404 links (branch `fix/zonas-sin-demo`, pending PR)
- Cause: `/zonas/[slug]` used `FALLBACK_PROPERTIES` whenever a Sanity city had 0 properties; Peñíscola has none, so it showed 2 demo cards linking to non-generated pages.
- Fix: demo fallback only when the city can't be loaded from Sanity; otherwise the existing empty state is shown.

---

## 2026-11-07

### Security
- Incident INC-2026-001: Netlify + Sanity tokens found in public repo (`.claude/settings.local.json`, commit `0bbe223`). Details in `SECURITY_INCIDENTS.md`.
- Sanity token `claude-setup` deleted by owner.
- `.claude/settings.local.json` removed from Git tracking (local copy kept) and added to `.gitignore`.
- Full repo + history scan: no other credentials found.
- Owner revoked Netlify token `render-blobs`; Netlify token `claude` had already expired (2026-04-03).

### Docs
- `PROJECT_STATE.md`, `CLAUDE_CONTEXT.md`: deploy now documented as GitHub-connected; added security rules and current issues.

### Netlify
- Found second Netlify site `dynamic-phoenix-50f8ce` linked to the repo; owner unlinked it from GitHub.

### Integration
- Changes integrated into `main` via PR #1 (deploys to production; no build inputs changed).

### Not done (by decision)
- Git history not rewritten. CRM not started.

---

## 2026-04-15

### Fixed — Property listing status filter
- `getPropertiesByOperationType` (`src/lib/sanity.ts`) — removed `&& status == "available"` filter; all properties now returned regardless of status
- Root cause: Càlig property (`adosado-en-alquiler-en-calig-larga-duracion`) was published but had status ≠ `available`, so it appeared on its detail page but was excluded from every listing

### Improved — PropertyCard UX for non-available properties (`src/components/PropertyCard.astro`)
- Operation badge (Venta/Alquiler) hidden when property is not available
- Status badge always shown on all cards
- Non-available cards rendered at `opacity-70` for visual distinction
- CTA text: `"Ver propiedad"` → `"Ver opciones similares"` for non-available

### Fixed — Status labels (`src/utils/format.ts`)
- Labels corrected to feminine: `Reservada`, `Alquilada`, `Vendida`

### Fixed — Listing count text (`comprar.astro`, `alquiler.astro`, `propiedades/index.astro`)
- Removed "disponibles" from count — now neutral: "X propiedades"

### Commits
- `335ce93` show all property statuses in listings and fix status badge labels
- `61a9cbb` improve UX for non-available property cards in listings

---

## 2026-04-14 (session 2)

### Confirmed working (no code changes)
- Sanity publish → Netlify webhook → site rebuild flow tested end-to-end with real property (`adosado-en-alquiler-en-calig-larga-duracion` in Càlig). Property appeared correctly on live site after Netlify rebuild.
- Localhost 404 for new property was not a bug: Astro dev server caches `getStaticPaths()` results at startup. Restarting `npm run dev` after publishing resolves it. Production unaffected.

---

## 2026-04-14 (session 1)

### Configured (external)
- Sanity → Netlify auto-deploy confirmed working: publishing in Studio triggers automatic site rebuild via webhook + build hook. No manual deploys needed.

### Made dynamic (code)
- `comprar.astro` — zone filter pills now built from `getAllCities()` at build time (fallback: FALLBACK_CITIES)
- `alquiler.astro` — same
- `Footer.astro` — city links now built from `getAllCities()` at build time (fallback: FALLBACK_CITIES)
- Adding a city in Sanity Studio now propagates automatically to: zone page, zone pills on /comprar and /alquiler, footer links

### Expanded city set
- `src/data/fallback.ts` — FALLBACK_CITIES expanded from 3 to 12 cities
- New cities defined (slugs locked): Càlig (`calig`), Sant Jordi (`sant-jordi`), Traiguera (`traiguera`), Alcalà de Xivert (`alcala-de-xivert`), Alcanar (`alcanar`), Ulldecona (`ulldecona`), Oropesa del Mar (`oropesa-del-mar`), Benicàssim (`benicassim`), Castellón (`castellon`)
- **Pending:** 9 city documents must be created in Sanity Studio to activate them on the live site

### Commits
- `0bbe223` save project state before restart

---

## 2026-03-27 / 2026-03-28

### Fixed
- Removed `.slice(0, 8)` from property gallery — all images now displayed (no limit)
- `getAllPropertySlugs` query now filters out properties without a defined slug (`defined(slug.current)`)
- `plotArea` field label in Sanity Studio: "Superficie parcela" → "Superficie útil"
- Sanity schemas aligned with frontend GROQ queries (previous session)

### Configured
- Sanity Studio deployed to **https://mejoratuhogar-web.sanity.studio/**
- `appId: 'lzuhtv3dyyvwoknkwa10zex2'` saved in `studio-sanity/sanity.cli.ts` (avoids hostname prompt on next deploy)
- Iryna added as **Member** to Sanity project — can create/edit/publish content

### Deployed
- Netlify production deploy: all changes live

### Commits
- `6429f88` add Sanity Studio appId for mejoratuhogar-web.sanity.studio
- `f323f42` remove 8-photo gallery limit + fix slug query + rename plotArea label
- `7b94125` fix Sanity schemas to match frontend GROQ queries
- `9c4fef0` add sitemap integration (@astrojs/sitemap)
