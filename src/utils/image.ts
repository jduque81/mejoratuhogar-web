 /**
 * image.ts — Sanity image URL builder
 *
 * Constructs Sanity CDN image URLs without @sanity/image-url.
 * Handles two cases:
 *   1. asset._ref (raw) → constructs CDN URL from ref format
 *   2. asset.url (dereferenced via GROQ asset->{ url }) → uses directly
 */

import type { SanityImage } from '../lib/sanity'

interface ImageOptions {
  width?: number
  height?: number
  quality?: number
}

/**
 * Returns a Sanity CDN URL for an image asset, with optional resize params.
 * Falls back to a local placeholder if the image is missing.
 */
export function sanityImageUrl(
  image: SanityImage | undefined | null,
  options: ImageOptions = {}
): string {
  if (!image?.asset) return '/images/placeholder.svg'

  // Case 1: asset URL already resolved by GROQ (asset->{ url })
  const assetWithUrl = image.asset as { _ref?: string; url?: string }
  if (assetWithUrl.url) {
    // Local static files (e.g. /images/…) — return as-is; query params don't resize them
    if (assetWithUrl.url.startsWith('/')) return assetWithUrl.url
    return applyParams(assetWithUrl.url, options)
  }

  // Case 2: construct from _ref
  const ref = image.asset._ref
  if (!ref) return '/images/placeholder.svg'

  const projectId = 'd95eiezj'
const dataset = 'production'

  // _ref format: "image-{assetId}-{width}x{height}-{ext}"
  // CDN format:  "{assetId}-{width}x{height}.{ext}"
  const withoutPrefix = ref.replace(/^image-/, '')
  const filename = withoutPrefix.replace(/-([a-zA-Z0-9]+)$/, '.$1')
  const base = `https://cdn.sanity.io/images/${projectId}/${dataset}/${filename}`

  return applyParams(base, options)
}

function applyParams(url: string, options: ImageOptions): string {
  const params = new URLSearchParams({ auto: 'format' })
  if (options.width) params.set('w', String(options.width))
  if (options.height) params.set('h', String(options.height))
  if (options.quality) params.set('q', String(options.quality))
  if (options.width || options.height) params.set('fit', 'crop')
  return `${url}?${params}`
}
