import { defineField, defineType } from 'sanity'

/**
 * siteSettings.ts — Global site configuration (singleton)
 *
 * One document only. Managed via custom structure (no list view).
 * All business contact data and default SEO live here.
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',

  // Single group for clean editor UX
  groups: [
    { name: 'contact', title: 'Contacto' },
    { name: 'branding', title: 'Marca' },
    { name: 'seo', title: 'SEO por defecto' },
  ],

  fields: [
    // ─── Identity ──────────────────────────────────────────────────────────
    defineField({
      name: 'businessName',
      title: 'Nombre del negocio',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'branding',
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
      group: 'branding',
    }),

    // ─── Contact ───────────────────────────────────────────────────────────
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      description: 'Formato: +34 600 000 000',
      group: 'contact',
    }),

    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'Solo números, sin + ni espacios. Ej: 34600000000',
      validation: (Rule) => Rule.regex(/^\d+$/, { name: 'Solo números' }),
      group: 'contact',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
      group: 'contact',
    }),

    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
      group: 'contact',
    }),

    // ─── Social ────────────────────────────────────────────────────────────
    defineField({
      name: 'socialLinks',
      title: 'Redes sociales',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
      ],
    }),

    // ─── Default SEO ───────────────────────────────────────────────────────
    defineField({
      name: 'defaultSeoTitle',
      title: 'Título SEO por defecto',
      type: 'string',
      description: 'Usado en páginas sin título SEO propio. Máx. 60 caracteres.',
      validation: (Rule) => Rule.max(60),
      group: 'seo',
    }),

    defineField({
      name: 'defaultSeoDescription',
      title: 'Descripción SEO por defecto',
      type: 'text',
      rows: 2,
      description: 'Usada en páginas sin descripción SEO propia. Máx. 155 caracteres.',
      validation: (Rule) => Rule.max(155),
      group: 'seo',
    }),

    defineField({
      name: 'defaultOgImage',
      title: 'Imagen OG por defecto',
      type: 'image',
      description: 'Imagen compartida en redes cuando una página no tiene imagen propia.',
      group: 'seo',
    }),
  ],

  preview: {
    select: { title: 'businessName' },
    prepare: ({ title }) => ({ title: title ?? 'Ajustes del sitio' }),
  },
})
