import { defineField, defineType } from 'sanity'

/**
 * testimonial.ts — Customer testimonials
 *
 * Used on: Home page, Sell page.
 * city is a plain string here (not a reference) — testimonials are
 * informal and don't require full SEO city pages.
 */
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonios',
  type: 'document',
  icon: () => '⭐',

  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'city',
      title: 'Ciudad',
      type: 'string',
      description: 'Ciudad o zona del cliente. Ej: Benicarló, Vinaròs.',
    }),

    defineField({
      name: 'serviceType',
      title: 'Servicio utilizado',
      type: 'string',
      options: {
        list: [
          { title: 'Compra de vivienda', value: 'buy' },
          { title: 'Venta de vivienda', value: 'sell' },
          { title: 'Alquiler', value: 'rent' },
          { title: 'Ventanas PVC', value: 'pvc-windows' },
          { title: 'Otro', value: 'other' },
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'text',
      title: 'Testimonio',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: 'rating',
      title: 'Valoración',
      type: 'number',
      description: 'Puntuación de 1 a 5.',
      options: {
        list: [1, 2, 3, 4, 5],
        layout: 'radio',
      },
      initialValue: 5,
    }),

    defineField({
      name: 'featured',
      title: '¿Destacado?',
      type: 'boolean',
      description: 'Marcar para mostrar en página de inicio y captación.',
      initialValue: false,
    }),
  ],

  orderings: [
    {
      title: 'Destacados primero',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: '_createdAt', direction: 'desc' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
      featured: 'featured',
    },
    prepare: ({ title, subtitle, featured }) => ({
      title: `${featured ? '⭐ ' : ''}${title}`,
      subtitle,
    }),
  },
})
