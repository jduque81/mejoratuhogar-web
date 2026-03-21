/**
 * schemaTypes/index.ts — Schema registry
 *
 * Import order matches dependency order:
 *   siteSettings (no deps) → testimonial (no deps) → city (no deps)
 *   → property (depends on city) → service (no deps)
 *
 * To add a new schema: import it here and add it to the array.
 */

import { siteSettings } from './documents/siteSettings'
import { testimonial } from './documents/testimonial'
import { city } from './documents/city'
import { property } from './documents/property'
import { service } from './documents/service'

export const schemaTypes = [
  // ─── Global ──────────────────────────────────────────────────────────────
  siteSettings,

  // ─── Core content ────────────────────────────────────────────────────────
  testimonial,
  city,
  property,
  service,
]
