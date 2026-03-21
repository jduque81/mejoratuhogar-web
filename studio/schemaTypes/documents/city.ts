import { defineField, defineType } from 'sanity'
import { seoFields } from '../objects/seoFields'

/**
 * city.ts — Local area / zone pages
 *
 * Used for:
 *   - Local SEO landing pages (/zonas/benicarlo, etc.)
 *   - Referenced by property documents for filtering
 *
 * seoContent is a rich text field so editors can write keyword-rich
 * introductory paragraphs for each zone page.
 */
export const city = defineType({
  name: 'city',
  title: 'Zonas',
  type: 'document',
  icon: () => '📍',

  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'seo', title: 'SEO' },
  ],

  fields: [
    // ─── Identity ──────────────────────────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Nombre de la zona',
      type: 'string',
      description: 'Ej: Benicarló, Vinaròs, Peñíscola.',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    // ─── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Título del hero',
      type: 'string',
      description: 'Ej: Propiedades en Benicarló. Aparece en el encabezado de la página.',
      group: 'content',
    }),

    defineField({
      name: 'shortDescription',
      title: 'Descripción corta',
      type: 'text',
      rows: 2,
      description: 'Resumen breve de la zona. Usado en tarjetas y previews.',
      group: 'content',
    }),

    defineField({
      name: 'featuredImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Describe la imagen para accesibilidad y SEO.',
          validation: (Rule) => Rule.required(),
        }),
      ],
      group: 'content',
    }),

    // ─── SEO Content (rich text for keyword density) ───────────────────────
    defineField({
      name: 'seoContent',
      title: 'Contenido SEO',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      description: 'Texto para SEO sobre la zona. Incluye palabras clave locales.',
      group: 'content',
    }),

    // ─── SEO Meta ──────────────────────────────────────────────────────────
    ...seoFields,
  ],

  preview: {
    select: { title: 'name', media: 'featuredImage' },
    prepare: ({ title, media }) => ({ title, media }),
  },
})
