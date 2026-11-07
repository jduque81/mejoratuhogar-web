# CLAUDE CONTEXT — mejoratuhogar-web

Instructions for Claude when working on this project.

---

## Behavior

- **Minimal intervention:** do not modify code that is not directly related to the task asked.
- **Sequential work:** complete one thing fully before moving to the next.
- **No unnecessary refactoring:** if something works, leave it as is.
- **No extra features:** do not add functionality that was not explicitly requested.
- **Explain changes clearly:** before editing a file, say what you are going to change and why.
- **Always verify before suggesting:** read the file before proposing changes to it.

## Security

- **Never** put tokens/API keys in commands, files or docs. Read them from environment variables.
- `.claude/settings.local.json` is gitignored: Claude Code stores approved commands there verbatim (it leaked tokens once — see `SECURITY_INCIDENTS.md`).
## Deploy workflow

- Netlify is connected to GitHub ("Deploys from GitHub"). **Assume any push to `main` deploys to production.** Do not push to `main` without explicit approval.
- Legacy manual deploy (only if explicitly requested): `npm run build` → zip `dist/` → POST to Netlify API (site ID `90f0dbb3-4bc2-4cae-833b-75b7e00f7963`) with a token from an environment variable → poll until `"state": "ready"`.

## Key files

- `src/lib/sanity.ts` — ALL Sanity types and GROQ queries live here. Never call createClient() elsewhere.
- `studio-sanity/schemaTypes/` — Sanity Studio schemas. Changes here must be reflected in `src/lib/sanity.ts` types.
- `src/layouts/BaseLayout.astro` — base layout used by all pages.
- `src/data/fallback.ts` — static fallback data used when Sanity is unreachable during build.

## Environment

- Sanity project ID: `d95eiezj`, dataset: `production`
- Netlify site ID: `90f0dbb3-4bc2-4cae-833b-75b7e00f7963`
- Sanity Studio: https://mejoratuhogar-web.sanity.studio/
- GitHub repo: github.com/jduque81/mejoratuhogar-web, branch: main
