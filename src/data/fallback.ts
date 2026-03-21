/**
 * fallback.ts — Static mock data
 *
 * Used when Sanity is not yet connected (no project ID, empty dataset,
 * or network unavailable during build).
 *
 * All types mirror src/lib/sanity.ts exactly — pages work identically
 * whether data comes from the CMS or from here.
 *
 * Replace with real content before launch.
 */

import type { PropertyCard, PropertyFull, SanityImage, Testimonial } from '../lib/sanity'

// ─── Local image helper ───────────────────────────────────────────────────────
// Creates a SanityImage-compatible object backed by a local static file.
// sanityImageUrl() detects the url property and returns the path as-is.

function localImg(path: string, alt: string): SanityImage {
  return {
    _type: 'image',
    asset: { _ref: '', _type: 'reference', url: path } as unknown as SanityImage['asset'],
    alt,
  }
}

// ─── Local image definitions ──────────────────────────────────────────────────

const IMG_TERRAZA_PRINCIPAL = localImg(
  '/images/terraza-piso-benicarlo.jpg',
  'Terraza amplia con vistas en piso en Benicarló',
)
const IMG_TERRAZA_LATERAL = localImg(
  '/images/terraza-vistas-mar.jpg',
  'Terraza lateral con vistas al mar',
)
const IMG_BANO = localImg(
  '/images/bano-moderno.jpg',
  'Baño moderno reformado',
)
const IMG_COCINA = localImg(
  '/images/cocina.jpg',
  'Cocina amplia y bien equipada',
)

// ─── Fallback city objects (exported for zone page getStaticPaths + fallback) ─

export const FALLBACK_CITIES = [
  { _id: 'city-benicarlo', name: 'Benicarló', slug: { _type: 'slug' as const, current: 'benicarlo' } },
  { _id: 'city-vinaros',   name: 'Vinaròs',   slug: { _type: 'slug' as const, current: 'vinaros'   } },
  { _id: 'city-peniscola', name: 'Peñíscola',  slug: { _type: 'slug' as const, current: 'peniscola' } },
]

// ─── Fallback cities ──────────────────────────────────────────────────────────

const BENICARLO = {
  _id: 'city-benicarlo',
  name: 'Benicarló',
  slug: { _type: 'slug' as const, current: 'benicarlo' },
}
const VINAROS = {
  _id: 'city-vinaros',
  name: 'Vinaròs',
  slug: { _type: 'slug' as const, current: 'vinaros' },
}
const PENISCOLA = {
  _id: 'city-peniscola',
  name: 'Peñíscola',
  slug: { _type: 'slug' as const, current: 'peniscola' },
}

// ─── Fallback property cards (listing pages) ──────────────────────────────────

export const FALLBACK_PROPERTIES: PropertyCard[] = [
  {
    _id: 'prop-1',
    title: 'Piso luminoso en el centro de Benicarló',
    slug: { _type: 'slug', current: 'piso-luminoso-benicarlo' },
    operationType: 'sale',
    status: 'available',
    price: 125000,
    city: BENICARLO,
    propertyType: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    builtArea: 90,
    featuredImage: IMG_TERRAZA_PRINCIPAL,
    shortDescription: 'Piso reformado en el centro de Benicarló. Luminoso, bien comunicado y listo para entrar a vivir.',
    featured: true,
  },
  {
    _id: 'prop-2',
    title: 'Casa con jardín en Vinaròs',
    slug: { _type: 'slug', current: 'casa-jardin-vinaros' },
    operationType: 'sale',
    status: 'available',
    price: 195000,
    city: VINAROS,
    propertyType: 'house',
    bedrooms: 4,
    bathrooms: 2,
    builtArea: 165,
    featuredImage: IMG_TERRAZA_LATERAL,
    shortDescription: 'Amplia casa con jardín privado a 5 minutos del centro de Vinaròs. Ideal para familias.',
    featured: true,
  },
  {
    _id: 'prop-3',
    title: 'Ático con vistas al mar en Peñíscola',
    slug: { _type: 'slug', current: 'atico-vistas-peniscola' },
    operationType: 'sale',
    status: 'available',
    price: 210000,
    city: PENISCOLA,
    propertyType: 'penthouse',
    bedrooms: 3,
    bathrooms: 2,
    builtArea: 105,
    featuredImage: IMG_TERRAZA_PRINCIPAL,
    shortDescription: 'Espectacular ático con terraza privada y vistas al mar en primera línea de Peñíscola.',
    featured: true,
  },
  {
    _id: 'prop-4',
    title: 'Piso acogedor en Benicarló',
    slug: { _type: 'slug', current: 'piso-acogedor-benicarlo-2' },
    operationType: 'sale',
    status: 'available',
    price: 98000,
    city: BENICARLO,
    propertyType: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    builtArea: 72,
    featuredImage: IMG_TERRAZA_LATERAL,
    shortDescription: 'Piso bien distribuido en zona tranquila de Benicarló. Excelente relación calidad-precio.',
    featured: false,
  },
  {
    _id: 'prop-5',
    title: 'Piso moderno en alquiler en Vinaròs',
    slug: { _type: 'slug', current: 'piso-alquiler-vinaros' },
    operationType: 'rent',
    status: 'available',
    price: 650,
    city: VINAROS,
    propertyType: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    builtArea: 75,
    featuredImage: IMG_TERRAZA_PRINCIPAL,
    shortDescription: 'Piso moderno y bien equipado en alquiler en el centro de Vinaròs. Disponible de inmediato.',
    featured: true,
  },
  {
    _id: 'prop-6',
    title: 'Casa en alquiler cerca del mar en Peñíscola',
    slug: { _type: 'slug', current: 'casa-alquiler-peniscola' },
    operationType: 'rent',
    status: 'available',
    price: 850,
    city: PENISCOLA,
    propertyType: 'house',
    bedrooms: 3,
    bathrooms: 2,
    builtArea: 130,
    featuredImage: IMG_TERRAZA_LATERAL,
    shortDescription: 'Casa con jardín en alquiler a pocos minutos de la playa de Peñíscola. Perfecta para familias.',
    featured: false,
  },
]

// ─── Fallback full property (detail page) ────────────────────────────────────

export const FALLBACK_PROPERTIES_FULL: PropertyFull[] = FALLBACK_PROPERTIES.map((p) => ({
  ...p,
  address: `Zona ${p.city.name}`,
  features: [
    'Aire acondicionado',
    'Calefacción central',
    'Ascensor',
    'Trastero incluido',
    'Portero automático',
    'Comunidad bien mantenida',
  ],
  // Gallery images shown on the detail page
  images: [IMG_TERRAZA_LATERAL, IMG_BANO, IMG_COCINA],
  fullDescription: undefined, // Populated from Sanity when connected
}))

// ─── Fallback testimonials ────────────────────────────────────────────────────

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    _id: 'test-1',
    name: 'María García',
    city: 'Benicarló',
    serviceType: 'sell',
    text: 'Vendimos nuestro piso en menos de un mes. El equipo nos asesoró en todo momento y conseguimos el precio que esperábamos. Muy profesionales.',
    rating: 5,
    featured: true,
  },
  {
    _id: 'test-2',
    name: 'Carlos Fernández',
    city: 'Vinaròs',
    serviceType: 'buy',
    text: 'Encontramos la casa de nuestros sueños gracias a Mejora Tu Hogar. Rápidos, atentos y siempre disponibles. Los recomiendo sin dudarlo.',
    rating: 5,
    featured: true,
  },
  {
    _id: 'test-3',
    name: 'Ana Martínez',
    city: 'Peñíscola',
    serviceType: 'pvc-windows',
    text: 'Instalamos ventanas PVC en toda la casa y el cambio ha sido increíble. Menos ruido, más calor en invierno y la factura de la luz bajó mucho.',
    rating: 5,
    featured: true,
  },
]
