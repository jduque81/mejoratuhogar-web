import type { StructureResolver } from 'sanity/structure'

/**
 * structure.ts — Custom Sanity Studio desk layout
 *
 * - siteSettings is a singleton (one document, no list view)
 * - All other types are grouped logically for non-technical editors
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      // ─── Singleton: site-wide settings ─────────────────────────────────
      S.listItem()
        .title('⚙️ Ajustes del sitio')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // ─── Properties ────────────────────────────────────────────────────
      S.listItem()
        .title('🏠 Propiedades')
        .schemaType('property')
        .child(S.documentTypeList('property').title('Propiedades')),

      // ─── Cities / Areas ─────────────────────────────────────────────────
      S.listItem()
        .title('📍 Zonas')
        .schemaType('city')
        .child(S.documentTypeList('city').title('Zonas')),

      // ─── Services ───────────────────────────────────────────────────────
      S.listItem()
        .title('🛠️ Servicios')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Servicios')),

      // ─── Testimonials ───────────────────────────────────────────────────
      S.listItem()
        .title('⭐ Testimonios')
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Testimonios')),
    ])
