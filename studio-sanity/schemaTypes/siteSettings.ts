import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  // Singleton — only one document of this type
  fields: [
    defineField({
      name: 'businessName',
      title: 'Nombre del negocio',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp (solo números, sin +)',
      description: 'Ej: 34637057109',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email de contacto',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
    }),
    defineField({
      name: 'defaultSeoTitle',
      title: 'Título SEO por defecto',
      type: 'string',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Descripción SEO por defecto',
      type: 'text',
      rows: 2,
    }),
  ],

  preview: {
    select: {title: 'businessName'},
    prepare({title}) {
      return {title: title ?? 'Configuración del sitio'}
    },
  },
})
