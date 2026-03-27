import {defineType, defineField} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonios',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del cliente',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Ciudad',
      type: 'string',
    }),
    defineField({
      name: 'serviceType',
      title: 'Servicio utilizado',
      type: 'string',
      options: {
        list: [
          {title: 'Compra', value: 'buy'},
          {title: 'Venta', value: 'sell'},
          {title: 'Alquiler', value: 'rent'},
          {title: 'Ventanas PVC', value: 'pvc-windows'},
          {title: 'Otro', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'text',
      title: 'Testimonio',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Valoración (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5).integer(),
    }),
    defineField({
      name: 'featured',
      title: 'Destacado en portada',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {title: 'name', subtitle: 'city'},
    prepare({title, subtitle}) {
      return {title: title ?? 'Sin nombre', subtitle: subtitle ?? ''}
    },
  },
})
