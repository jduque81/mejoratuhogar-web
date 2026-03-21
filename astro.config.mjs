import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://mejoratuhogar.es',
  integrations: [
    tailwind({
      // Prevents Astro from injecting a base style reset so we control it ourselves
      applyBaseStyles: false,
    }),
  ],
})
