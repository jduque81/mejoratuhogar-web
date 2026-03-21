import { defineField, defineType } from 'sanity'
import { seoFields } from '../objects/seoFields'

/**
 * service.ts — Business service pages
 *
 * One document per service type. The frontend queries by serviceType
 * to populate the corresponding page with CMS-managed content.
 *
 * Powers: /vender, /comprar, /alquiler, /ventanas-pvc
 */
export const service = defineType({
  name: 'service',
  title: 'Servicios',
  type: 'document',
  icon: () => '🛠️',

  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'seo', title: 'SEO' },
  ],

  fields: [
    // ─── Identity ──────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Título del servicio',
      type: 'string',
      description: 'Ej: Vende tu vivienda con nosotros.',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    // ─── Service type (used by frontend to query the right page) ──────────
    defineField({
      name: 'serviceType',
      title: 'Tipo de servicio',
      type: 'string',
      options: {
        list: [
          { title: 'Comprar vivienda', value: 'buy' },
          { title: 'Vender vivienda', value: 'sell' },
          { title: 'Alquiler', value: 'rent' },
          { title: 'Ventanas PVC', value: 'pvc-windows' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    // ─── Descriptions ──────────────────────────────────────────────────────
    defineField({
      name: 'shortDescription',
      title: 'Descripción corta',
      type: 'text',
      rows: 2,
      description: 'Subtítulo o tagline del servicio. Máx. 200 caracteres.',
      validation: (Rule) => Rule.max(200),
      group: 'content',
    }),

    defineField({
      name: 'fullDescription',
      title: 'Descripción completa',
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
      group: 'content',
    }),

    // ─── Benefits (bullet list for the page) ──────────────────────────────
    defineField({
      name: 'benefits',
      title: 'Beneficios / Puntos clave',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de ventajas mostrada en la página. Ej: Sin comisiones ocultas.',
      options: { layout: 'tags' },
      group: 'content',
    }),

    // ─── CTA ───────────────────────────────────────────────────────────────
    defineField({
      name: 'ctaText',
      title: 'Texto del CTA principal',
      type: 'string',
      description: 'Ej: Solicitar valoración gratuita.',
      group: 'content',
    }),

    // ─── Hero image ────────────────────────────────────────────────────────
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
          validation: (Rule) => Rule.required(),
        }),
      ],
      group: 'content',
    }),

    // ─── SEO ───────────────────────────────────────────────────────────────
    ...seoFields,
  ],

  preview: {
    select: {
      title: 'title',
      serviceType: 'serviceType',
      media: 'featuredImage',
    },
    prepare: ({ title, serviceType, media }) => {
      const icons: Record<string, string> = {
        buy: '🏡',
        sell: '💰',
        rent: '🔑',
        'pvc-windows': '🪟',
      }
      return {
        title: `${icons[serviceType] ?? '🛠️'} ${title}`,
        subtitle: serviceType,
        media,
      }
    },
  },
})
