import { defineField, defineType } from 'sanity'
import { seoFields } from '../objects/seoFields'

/**
 * property.ts — Property listings (sale + rental)
 *
 * Single content type for all properties.
 * operationType field distinguishes sale vs rent.
 * city is a reference — enables filtering, local SEO, and avoids duplicated strings.
 *
 * Powers: /comprar, /alquiler, /propiedades/[slug]
 */
export const property = defineType({
  name: 'property',
  title: 'Propiedades',
  type: 'document',
  icon: () => '🏠',

  groups: [
    { name: 'main', title: 'Principal', default: true },
    { name: 'details', title: 'Detalles' },
    { name: 'media', title: 'Imágenes' },
    { name: 'seo', title: 'SEO' },
  ],

  fields: [
    // ─── Core ──────────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ej: Piso luminoso en el centro de Benicarló.',
      validation: (Rule) => Rule.required(),
      group: 'main',
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
      group: 'main',
    }),

    // ─── Operation type (sale vs rent) ─────────────────────────────────────
    defineField({
      name: 'operationType',
      title: 'Tipo de operación',
      type: 'string',
      options: {
        list: [
          { title: 'Venta', value: 'sale' },
          { title: 'Alquiler', value: 'rent' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),

    // ─── Status ────────────────────────────────────────────────────────────
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'Disponible', value: 'available' },
          { title: 'Reservado', value: 'reserved' },
          { title: 'Vendido', value: 'sold' },
          { title: 'Alquilado', value: 'rented' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),

    // ─── Price ─────────────────────────────────────────────────────────────
    defineField({
      name: 'price',
      title: 'Precio (€)',
      type: 'number',
      description: 'Para venta: precio total. Para alquiler: precio mensual.',
      validation: (Rule) => Rule.required().positive(),
      group: 'main',
    }),

    // ─── Location ──────────────────────────────────────────────────────────
    defineField({
      name: 'city',
      title: 'Zona / Ciudad',
      type: 'reference',
      to: [{ type: 'city' }],
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),

    defineField({
      name: 'address',
      title: 'Dirección (opcional)',
      type: 'string',
      description: 'Dirección aproximada o barrio. No es necesario dar la dirección exacta.',
      group: 'main',
    }),

    // ─── Property type ─────────────────────────────────────────────────────
    defineField({
      name: 'propertyType',
      title: 'Tipo de inmueble',
      type: 'string',
      options: {
        list: [
          { title: 'Piso', value: 'apartment' },
          { title: 'Casa', value: 'house' },
          { title: 'Ático', value: 'penthouse' },
          { title: 'Dúplex', value: 'duplex' },
          { title: 'Estudio', value: 'studio' },
          { title: 'Local comercial', value: 'commercial' },
          { title: 'Terreno', value: 'land' },
          { title: 'Garaje', value: 'garage' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),

    // ─── Featured flag ─────────────────────────────────────────────────────
    defineField({
      name: 'featured',
      title: '¿Destacado?',
      type: 'boolean',
      description: 'Las propiedades destacadas aparecen en la página de inicio.',
      initialValue: false,
      group: 'main',
    }),

    // ─── Physical details ──────────────────────────────────────────────────
    defineField({
      name: 'bedrooms',
      title: 'Habitaciones',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
      group: 'details',
    }),

    defineField({
      name: 'bathrooms',
      title: 'Baños',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
      group: 'details',
    }),

    defineField({
      name: 'builtArea',
      title: 'Superficie construida (m²)',
      type: 'number',
      validation: (Rule) => Rule.positive(),
      group: 'details',
    }),

    defineField({
      name: 'plotArea',
      title: 'Superficie de parcela (m²)',
      type: 'number',
      description: 'Solo para casas o terrenos.',
      validation: (Rule) => Rule.positive(),
      group: 'details',
    }),

    // ─── Descriptions ──────────────────────────────────────────────────────
    defineField({
      name: 'shortDescription',
      title: 'Descripción corta',
      type: 'text',
      rows: 2,
      description: 'Resumen para listados y tarjetas. Máx. 200 caracteres.',
      validation: (Rule) => Rule.max(200),
      group: 'details',
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
      group: 'details',
    }),

    // ─── Features / Amenities ──────────────────────────────────────────────
    defineField({
      name: 'features',
      title: 'Características y extras',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ej: Garaje, Piscina, Aire acondicionado, Ascensor.',
      options: {
        layout: 'tags',
      },
      group: 'details',
    }),

    // ─── Images ────────────────────────────────────────────────────────────
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
          description: 'Describe la imagen (requerido para SEO y accesibilidad).',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
      group: 'media',
    }),

    defineField({
      name: 'images',
      title: 'Galería de imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            }),
          ],
        },
      ],
      group: 'media',
    }),

    // ─── SEO ───────────────────────────────────────────────────────────────
    ...seoFields,
  ],

  orderings: [
    {
      title: 'Más recientes',
      name: 'createdAtDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
    {
      title: 'Precio: menor a mayor',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }],
    },
    {
      title: 'Precio: mayor a menor',
      name: 'priceDesc',
      by: [{ field: 'price', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      operationType: 'operationType',
      status: 'status',
      price: 'price',
      city: 'city.name',
      media: 'featuredImage',
    },
    prepare: ({ title, operationType, status, price, city, media }) => {
      const typeLabel = operationType === 'sale' ? 'Venta' : 'Alquiler'
      const statusIcon = status === 'available' ? '🟢' : status === 'reserved' ? '🟡' : '🔴'
      return {
        title: `${statusIcon} ${title}`,
        subtitle: `${typeLabel} · ${city ?? '—'} · ${price ? `${price.toLocaleString('es-ES')} €` : '—'}`,
        media,
      }
    },
  },
})
