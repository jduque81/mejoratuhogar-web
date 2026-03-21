/**
 * site.ts — Global business constants
 *
 * Single source of truth for business data used across the entire site.
 * Update these values once; they propagate everywhere automatically.
 */

export const SITE = {
  // ─── Identity ──────────────────────────────────────────────────────────────
  name: 'Mejora Tu Hogar',
  fullName: 'Mejora Tu Hogar',
  domain: 'mejoratuhogar.es',
  url: 'https://mejoratuhogar.es',
  locale: 'es_ES',
  lang: 'es',

  // ─── Contact ───────────────────────────────────────────────────────────────
  phone: '+34 637 057 109',
  // E.164 format without '+' — used in wa.me links
  whatsapp: '34637057109',
  email: 'ventas@mejoratuhogar.es',
  address: 'Avenida de Méndez Núñez 50, 12580 Benicarló (Castellón)',

  // ─── Default SEO ───────────────────────────────────────────────────────────
  defaultTitle: 'Mejora Tu Hogar – Inmobiliaria en Benicarló, Vinaròs y Peñíscola',
  defaultDescription:
    'Inmobiliaria en Benicarló, Vinaròs y Peñíscola. Compra, vende y alquila viviendas en Castellón. Especialistas en ventanas y puertas PVC. Contacta hoy.',
  defaultOgImage: '/og-image.jpg',

  // ─── WhatsApp contextual messages ──────────────────────────────────────────
  // Used by WhatsAppButton component per page (whatsapp.md strategy)
  whatsappMessages: {
    default: 'Hola, estoy interesado en mejorar mi vivienda. ¿Podrían asesorarme?',
    buy: 'Hola, estoy interesado en comprar una vivienda en la zona.',
    sell: 'Hola, quiero vender mi vivienda. ¿Pueden hacer una valoración gratuita?',
    rent: 'Hola, estoy buscando una vivienda en alquiler en la zona.',
    property: 'Hola, estoy interesado en esta propiedad y me gustaría recibir más información.',
    pvc: 'Hola, quiero información y presupuesto sobre ventanas y puertas PVC.',
    contact: 'Hola, me gustaría recibir más información sobre sus servicios.',
  },
} as const

export type WhatsAppContext = keyof typeof SITE.whatsappMessages
