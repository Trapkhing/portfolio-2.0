import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,  
  dataset: import.meta.env.VITE_SANITY_DATASET,     
  apiVersion: '2025-07-19',
  useCdn: true,                  
})
