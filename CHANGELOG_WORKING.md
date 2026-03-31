# CHANGELOG — Working sessions

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
