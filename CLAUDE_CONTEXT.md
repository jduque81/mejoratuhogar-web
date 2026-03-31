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

## Deploy workflow

1. `npm run build` — build Astro static site
2. `zip -r /tmp/mejoratuhogar-dist.zip dist/ -x "*.DS_Store"` — zip the dist folder
3. POST zip to Netlify API with site ID `90f0dbb3-4bc2-4cae-833b-75b7e00f7963`
4. Poll deploy status until `"state": "ready"`

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
