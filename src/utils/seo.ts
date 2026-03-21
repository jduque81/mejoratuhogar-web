/**
 * seo.ts — SEO metadata builder
 *
 * Centralises all SEO logic. Pages pass minimal props;
 * this utility handles formatting, fallbacks, and OG data.
 */

import { SITE } from '../data/site'

export interface SEOProps {
  /** Page-specific title. Will be formatted as "Title | SiteName". */
  title?: string
  /** Page-specific meta description. Falls back to site default. */
  description?: string
  /** Absolute URL or path to OG image. Falls back to site default. */
  image?: string
  /** Set true on legal/thank-you pages that should not be indexed. */
  noindex?: boolean
  /** Explicit canonical URL. Defaults to current page URL. */
  canonicalURL?: string
}

export interface ResolvedSEO {
  title: string
  description: string
  image: string
  noindex: boolean
  canonicalURL: string | undefined
  ogType: string
}

/**
 * Resolves full SEO metadata from partial page props + site defaults.
 */
export function buildSEO(props: SEOProps = {}, currentURL?: string): ResolvedSEO {
  const title = props.title
    ? `${props.title} | ${SITE.name}`
    : SITE.defaultTitle

  const description = props.description || SITE.defaultDescription

  // Ensure image is always an absolute URL
  const rawImage = props.image || SITE.defaultOgImage
  const image = rawImage.startsWith('http') ? rawImage : `${SITE.url}${rawImage}`

  return {
    title,
    description,
    image,
    noindex: props.noindex ?? false,
    canonicalURL: props.canonicalURL ?? currentURL,
    ogType: 'website',
  }
}

/**
 * Builds a WhatsApp wa.me link with a pre-filled contextual message.
 */
export function buildWhatsAppURL(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}
