/// <reference path="../.astro/types.d.ts" />
/**
 * env.d.ts — TypeScript environment declarations
 *
 * Declares:
 *   - Astro client types (required for Astro to work)
 *   - import.meta.env variables (PUBLIC_* are exposed to the browser)
 *   - Window interface augmentation for GA tracking helpers
 */

/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Sanity CMS — server-only (never exposed to the browser)
  readonly SANITY_PROJECT_ID: string
  readonly SANITY_DATASET: string

  // Google Analytics 4 measurement ID — PUBLIC prefix exposes it to client JS
  readonly PUBLIC_GA_ID: string

  // Form submission endpoint — Netlify Forms path, Formspree URL, or similar.
  // When empty or unset, ContactForm falls back to '#' (inline success demo mode).
  // Example values:
  //   Netlify Forms: leave blank — the `data-netlify` attribute handles it at build time
  //   Formspree:     https://formspree.io/f/your_form_id
  readonly PUBLIC_FORM_ACTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// ─── GA tracking helpers (defined in BaseLayout; GA loaded by CookieBanner) ──
// Declared here so TypeScript doesn't flag these window properties as unknown.
interface Window {
  dataLayer: unknown[]
  gtag?: (...args: unknown[]) => void
  trackWhatsApp?: (context: string) => void
  trackFormSubmit?: (formId: string) => void
}
