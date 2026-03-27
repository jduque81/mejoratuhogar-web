import {defineType, defineField} from 'sanity'

export const city = defineType({
  name: 'city',
  title: 'Ciudades / Zonas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: {source: 'name', maxLength: 64},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título del hero',
      description: 'Ej: Inmobiliaria en Benicarló',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción corta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featuredImage',
      title: 'Imagen destacada',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'Título SEO (opcional)',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descripción SEO (opcional)',
      type: 'text',
      rows: 2,
    }),
  ],

  preview: {
    select: {title: 'name', media: 'featuredImage'},
    prepare({title, media}) {
      return {title: title ?? 'Sin nombre', media}
    },
  },
})
