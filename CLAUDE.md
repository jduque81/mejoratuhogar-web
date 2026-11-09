# CLAUDE.md — mejoratuhogar-web

Project context and conventions for Claude Code sessions.

---

## Stack

- **Frontend:** Astro (SSG) + Tailwind CSS
- **CMS:** Sanity (project `d95eiezj`, dataset `production`)
- **Hosting:** Netlify — deploys trigger automatically via Sanity webhook
- **Sanity Studio:** https://mejoratuhogar-web.sanity.studio/

---

## Security

- Never put tokens or API keys in commands, files or docs — read them from environment variables.
- `.claude/settings.local.json` is gitignored and must stay untracked (it leaked tokens once).
- Full rules in `CLAUDE_CONTEXT.md`; incident history in `SECURITY_INCIDENTS.md`.

---

## Key conventions

### Data fetching
- All Sanity queries live in `src/lib/sanity.ts`. No direct client calls from pages or components.
- All queries have a `try/catch` with static fallback from `src/data/fallback.ts`.
- `FALLBACK_CITIES` in `fallback.ts` must mirror city documents in Sanity Studio (same slugs).

### Property listings
- `getPropertiesByOperationType` returns **all statuses** — no `status == "available"` filter.
- Status is shown via badge on every `PropertyCard`. Non-available cards get `opacity-70`, no operation badge, and CTA "Ver opciones similares".
- Status labels are feminine: Disponible, Reservada, Alquilada, Vendida (`src/utils/format.ts`).

### Cities / zones
- Cities are fully dynamic from Sanity. Adding a city document in Studio propagates automatically to zone pages, zone pills (/comprar, /alquiler), and the footer.
- `FALLBACK_CITIES` covers 12 cities with locked slugs — update it when adding new cities to Sanity.

### Minimal intervention
- Do not refactor code outside the scope of the current task.
- Do not add helpers, abstractions, or error handling for cases that don't exist yet.
- Do not add comments or docstrings to code that wasn't changed.

---

## Known behaviour

- **`astro dev` static path caching:** `getStaticPaths()` is cached at dev server start. Restart `npm run dev` after publishing a new property to Sanity to see it locally. Production builds are always fresh.

---

## Deploy workflow

1. Push to `main` on GitHub.
2. Publish anything in Sanity Studio → webhook fires → Netlify rebuilds automatically.
3. Manual trigger available from Netlify dashboard if needed.

---

## Project docs

- `PROJECT_STATE.md` — current feature status and working features table
- `NEXT_STEPS.md` — prioritised backlog
- `CHANGELOG_WORKING.md` — session-by-session log of what changed and why
