/**
 * sanity.ts — Sanity CMS client + typed query layer
 *
 * All data fetching goes through this file.
 * Never call createClient() directly in a page or component.
 *
 * Sections:
 *   1. Client
 *   2. TypeScript types (mirrors Sanity schemas)
 *   3. GROQ queries (one function per data need)
 */

import { client } from 'sanity:client'

export const sanityClient = client

// ─── 2. TypeScript types ───────────────────────────────────────────────────────

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; width: number; height: number }
  alt?: string
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

// ─── SiteSettings ─────────────────────────────────────────────────────────────
export interface SiteSettings {
  _id: string
  businessName: string
  logo?: SanityImage
  phone?: string
  whatsapp?: string
  email?: string
  address?: string
  socialLinks?: {
    instagram?: string
    facebook?: string
  }
  defaultSeoTitle?: string
  defaultSeoDescription?: string
  defaultOgImage?: SanityImage
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
export interface Testimonial {
  _id: string
  name: string
  city?: string
  serviceType?: 'buy' | 'sell' | 'rent' | 'pvc-windows' | 'other'
  text: string
  rating?: number
  featured?: boolean
}

// ─── City ─────────────────────────────────────────────────────────────────────
export interface City {
  _id: string
  name: string
  slug: SanitySlug
  heroTitle?: string
  shortDescription?: string
  featuredImage?: SanityImage
  // seoContent is Portable Text — typed as any[] for now
  seoContent?: any[]
  seoTitle?: string
  seoDescription?: string
}

// ─── Property ─────────────────────────────────────────────────────────────────
export type OperationType = 'sale' | 'rent'
export type PropertyStatus = 'available' | 'reserved' | 'sold' | 'rented'
export type PropertyType =
  | 'apartment'
  | 'house'
  | 'penthouse'
  | 'duplex'
  | 'studio'
  | 'commercial'
  | 'land'
  | 'garage'

/** Lightweight version used in listing pages and cards */
export interface PropertyCard {
  _id: string
  title: string
  slug: SanitySlug
  operationType: OperationType
  status: PropertyStatus
  price: number
  city: Pick<City, '_id' | 'name' | 'slug'>
  propertyType: PropertyType
  bedrooms?: number
  bathrooms?: number
  builtArea?: number
  featuredImage?: SanityImage
  shortDescription?: string
  featured?: boolean
}

/** Full version used on property detail pages */
export interface PropertyFull extends PropertyCard {
  address?: string
  plotArea?: number
  fullDescription?: any[]
  features?: string[]
  images?: SanityImage[]
  seoTitle?: string
  seoDescription?: string
}

// ─── Service ──────────────────────────────────────────────────────────────────
export type ServiceType = 'buy' | 'sell' | 'rent' | 'pvc-windows'

export interface Service {
  _id: string
  title: string
  slug: SanitySlug
  serviceType: ServiceType
  shortDescription?: string
  fullDescription?: any[]
  benefits?: string[]
  ctaText?: string
  featuredImage?: SanityImage
  seoTitle?: string
  seoDescription?: string
}

// ─── 3. GROQ queries ───────────────────────────────────────────────────────────

// ─── Reusable field projections ───────────────────────────────────────────────

/** Fields returned for all listing / card views */
const PROPERTY_CARD_FIELDS = `
  _id,
  title,
  slug,
  operationType,
  status,
  price,
  city->{ _id, name, slug },
  propertyType,
  bedrooms,
  bathrooms,
  builtArea,
  featuredImage{ ..., asset->{ url } },
  shortDescription,
  featured
`

// ─── siteSettings ─────────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`)
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc)`
  )
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch(
    `*[_type == "testimonial"] | order(featured desc, _createdAt desc)`
  )
}

// ─── Cities ───────────────────────────────────────────────────────────────────

export async function getAllCities(): Promise<City[]> {
  return sanityClient.fetch(
    `*[_type == "city"] | order(name asc) { _id, name, slug, shortDescription, featuredImage }`
  )
}

export async function getCityBySlug(slug: string): Promise<City | null> {
  return sanityClient.fetch(
    `*[_type == "city" && slug.current == $slug][0]`,
    { slug }
  )
}

// ─── Properties ───────────────────────────────────────────────────────────────

export async function getPropertiesByOperationType(
  operationType: OperationType
): Promise<PropertyCard[]> {
  return sanityClient.fetch(
    `*[_type == "property" && operationType == $operationType && status == "available"]
      | order(_createdAt desc) { ${PROPERTY_CARD_FIELDS} }`,
    { operationType }
  )
}

export async function getFeaturedProperties(): Promise<PropertyCard[]> {
  return sanityClient.fetch(
    `*[_type == "property" && featured == true && status == "available"]
      | order(_createdAt desc) [0..5] { ${PROPERTY_CARD_FIELDS} }`
  )
}

export async function getPropertyBySlug(slug: string): Promise<PropertyFull | null> {
  return sanityClient.fetch(
    `*[_type == "property" && slug.current == $slug][0] {
      ${PROPERTY_CARD_FIELDS},
      address,
      plotArea,
      fullDescription,
      features,
      images[]{ ..., asset->{ url } },
      seoTitle,
      seoDescription
    }`,
    { slug }
  )
}

export async function getPropertiesByCity(
  cityId: string,
  operationType?: OperationType
): Promise<PropertyCard[]> {
  const typeFilter = operationType ? `&& operationType == "${operationType}"` : ''
  return sanityClient.fetch(
    `*[_type == "property" && city._ref == $cityId && status == "available" ${typeFilter}]
      | order(_createdAt desc) { ${PROPERTY_CARD_FIELDS} }`,
    { cityId }
  )
}

export async function getAllPropertySlugs(): Promise<{ slug: SanitySlug }[]> {
  return sanityClient.fetch(`*[_type == "property"]{ slug }`)
}

// ─── Services ─────────────────────────────────────────────────────────────────

export async function getServiceByType(serviceType: ServiceType): Promise<Service | null> {
  return sanityClient.fetch(
    `*[_type == "service" && serviceType == $serviceType][0]`,
    { serviceType }
  )
}

export async function getAllServices(): Promise<Service[]> {
  return sanityClient.fetch(`*[_type == "service"] | order(title asc)`)
}
