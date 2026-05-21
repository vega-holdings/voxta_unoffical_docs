import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
  upload: {
    // These are not supported on Workers yet due to lack of sharp
    crop: false,
    focalPoint: false,
    mimeTypes: [
      'application/json',
      'text/javascript',
      'application/javascript',
      'text/markdown',
      'text/plain',
      'text/x-markdown',
      'image/png',
      'image/jpeg',
      'image/gif',
      'image/webp',
    ],
  },
}
