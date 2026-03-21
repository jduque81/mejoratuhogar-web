import { defineField } from 'sanity'

/**
 * seoFields.ts — Shared SEO field definitions
 *
 * Spread into any document type that needs SEO metadata.
 * Usage: ...seoFields inside a defineType fields array.
 */
export const seoFields = [
  defineField({
    name: 'seoTitle',
    title: 'Título SEO',
    type: 'string',
    description: 'Sobreescribe el título en resultados de búsqueda. Máx. 60 caracteres.',
    validation: (Rule) => Rule.max(60),
    group: 'seo',
  }),
  defineField({
    name: 'seoDescription',
    title: 'Descripción SEO',
    type: 'text',
    rows: 2,
    description: 'Meta descripción en resultados de búsqueda. Máx. 155 caracteres.',
    validation: (Rule) => Rule.max(155),
    group: 'seo',
  }),
]
