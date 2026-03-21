import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'mejoratuhogar',
  title: 'MejoraTuHogar CMS',

  // Replace with your real project ID from sanity.io/manage
  projectId: process.env.SANITY_PROJECT_ID ?? 'your-project-id',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    // Vision: GROQ query playground — useful during development
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
