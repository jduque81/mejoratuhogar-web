import {defineType, defineField} from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Propiedades',
  type: 'document',
  fields: [
    // ─── Identidad ───────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    // ─── Clasificación ────────────────────────────────────────────────────────
    defineField({
      name: 'operationType',
      title: 'Tipo de operación',
      type: 'string',
      options: {
        list: [
          {title: 'Venta', value: 'sale'},
          {title: 'Alquiler', value: 'rent'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          {title: 'Disponible', value: 'available'},
          {title: 'Reservada', value: 'reserved'},
          {title: 'Vendida', value: 'sold'},
          {title: 'Alquilada', value: 'rented'},
        ],
        layout: 'radio',
      },
      initialValue: 'available',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'propertyType',
      title: 'Tipo de inmueble',
      type: 'string',
      options: {
        list: [
          {title: 'Piso / Apartamento', value: 'apartment'},
          {title: 'Casa / Chalet', value: 'house'},
          {title: 'Ático', value: 'penthouse'},
          {title: 'Dúplex', value: 'duplex'},
          {title: 'Estudio', value: 'studio'},
          {title: 'Local comercial', value: 'commercial'},
          {title: 'Terreno', value: 'land'},
          {title: 'Garaje', value: 'garage'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // ─── Precio y ubicación ───────────────────────────────────────────────────
    defineField({
      name: 'price',
      title: 'Precio (€)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'city',
      title: 'Ciudad / Zona',
      type: 'reference',
      to: [{type: 'city'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Dirección (opcional)',
      type: 'string',
    }),

    // ─── Características ──────────────────────────────────────────────────────
    defineField({
      name: 'bedrooms',
      title: 'Habitaciones',
      type: 'number',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Baños',
      type: 'number',
    }),
    defineField({
      name: 'builtArea',
      title: 'Superficie construida (m²)',
      type: 'number',
    }),
    defineField({
      name: 'plotArea',
      title: 'Superficie útil (m²)',
      type: 'number',
    }),
    defineField({
      name: 'features',
      title: 'Características adicionales',
      description: 'Ej: Aire acondicionado, Ascensor, Piscina...',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),

    // ─── Descripción ──────────────────────────────────────────────────────────
    defineField({
      name: 'shortDescription',
      title: 'Descripción corta',
      description: 'Resumen para tarjetas de listado (1-2 frases)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullDescription',
      title: 'Descripción completa',
      type: 'array',
      of: [{type: 'block'}],
    }),

    // ─── Imágenes ─────────────────────────────────────────────────────────────
    defineField({
      name: 'featuredImage',
      title: 'Imagen principal',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo (SEO)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Galería de imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    // ─── Destacada ────────────────────────────────────────────────────────────
    defineField({
      name: 'featured',
      title: 'Propiedad destacada',
      description: 'Aparece en la portada',
      type: 'boolean',
      initialValue: false,
    }),

    // ─── SEO ──────────────────────────────────────────────────────────────────
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
    select: {
      title: 'title',
      city: 'city.name',
      status: 'status',
      media: 'featuredImage',
    },
    prepare({title, city, status, media}) {
      const statusLabels: Record<string, string> = {
        available: 'Disponible',
        reserved: 'Reservada',
        sold: 'Vendida',
        rented: 'Alquilada',
      }
      return {
        title: title ?? 'Sin título',
        subtitle: [city, statusLabels[status]].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
