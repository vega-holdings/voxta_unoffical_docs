import type { CollectionConfig } from 'payload'
import { vectorizeAfterChange, vectorizeAfterDelete } from '../hooks/vectorize'
import { githubSyncAfterChange } from '../hooks/github-sync'

export const DocsPage: CollectionConfig = {
  slug: 'docs-pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'sortOrder', 'updatedAt'],
    listSearchableFields: ['title', 'content'],
    group: 'Content',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  // Versioning disabled until version tables are created via migrations
  // versions: {
  //   drafts: true,
  //   maxPerDoc: 25,
  // },
  hooks: {
    afterChange: [vectorizeAfterChange, githubSyncAfterChange],
    afterDelete: [vectorizeAfterDelete],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g., "getting-started")',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Markdown content',
        rows: 20,
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Documentation', value: 'documentation' },
        { label: 'Installing', value: 'installing' },
        { label: 'Interface', value: 'interface' },
        { label: 'Modules', value: 'modules' },
        { label: 'Developers', value: 'developers' },
        { label: 'Creators', value: 'creators' },
      ],
      admin: {
        description: 'Documentation category',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 100,
      admin: {
        position: 'sidebar',
        description: 'Order within category (lower = first)',
      },
    },
    {
      name: 'originalUrl',
      type: 'text',
      admin: {
        description: 'Original URL from official docs',
        readOnly: true,
      },
    },
    {
      name: 'githubPath',
      type: 'text',
      admin: {
        description: 'Path in GitHub repo for back-sync',
        readOnly: true,
      },
    },
    {
      name: 'relatedKB',
      type: 'relationship',
      relationTo: 'kb-articles',
      hasMany: true,
      admin: {
        description: 'Related KB articles',
      },
    },
    {
      name: 'lastEditedBy',
      type: 'relationship',
      relationTo: 'discord-users',
      admin: {
        description: 'Discord user who last edited this page',
      },
    },
    {
      name: 'lastEditedByName',
      type: 'text',
      admin: {
        description: 'Name of last editor (for display)',
      },
    },
    {
      name: 'lastEditedByDiscordId',
      type: 'text',
      admin: {
        description: 'Discord ID of last editor',
      },
    },
    {
      name: 'lastEditedAt',
      type: 'date',
      admin: {
        description: 'When the page was last edited',
      },
    },
    {
      name: 'attachments',
      type: 'array',
      admin: {
        description: 'File attachments (JSON, JS, MD templates/snippets)',
      },
      fields: [
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          admin: {
            description: 'Display name for download link',
          },
        },
      ],
    },
  ],
}
