import {defineType, defineField} from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Propiedades',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'operation',
      title: 'Operación',
      type: 'string',
      options: {
        list: [
          {title: 'Venta', value: 'venta'},
          {title: 'Alquiler', value: 'alquiler'},
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Precio (€)',
      type: 'number',
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    }),
    defineField({
      name: 'rooms',
      title: 'Habitaciones',
      type: 'number',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Baños',
      type: 'number',
    }),
    defineField({
      name: 'surface',
      title: 'Metros cuadrados',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      title: 'Destacada',
      type: 'boolean',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
    }),
    defineField({
      name: 'images',
      title: 'Galería',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
  ],
})