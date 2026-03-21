import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    // Replace with your real project ID from sanity.io/manage
    projectId: process.env.SANITY_PROJECT_ID ?? 'your-project-id',
    dataset: 'production',
  },
})
