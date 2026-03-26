import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sanity from '@sanity/astro'

export default defineConfig({
  site: 'https://mejoratuhogar.es',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: 'd95eiezj',
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    }),
  ],
})