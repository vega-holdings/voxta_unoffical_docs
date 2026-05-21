import type { CollectionConfig } from 'payload'
import { vectorizeAfterChange, vectorizeAfterDelete } from '../hooks/vectorize'
import { githubSyncAfterChange } from '../hooks/github-sync'

export const KBArticle: CollectionConfig = {
  slug: 'kb-articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'type', 'lastEditedByName', 'updatedAt'],
    listSearchableFields: ['title', 'content', 'contributor'],
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
        description: 'URL-friendly identifier',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Markdown content',
        rows: 15,
      },
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Q&A', value: 'qa' },
        { label: 'Troubleshooting', value: 'troubleshooting' },
        { label: 'Tip', value: 'tip' },
        { label: 'Reference', value: 'reference' },
      ],
      defaultValue: 'qa',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Configuration', value: 'configuration' },
        { label: 'Troubleshooting', value: 'troubleshooting' },
        { label: 'Integrations', value: 'integrations' },
        { label: 'Setup', value: 'setup' },
        { label: 'Scripting', value: 'scripting' },
        { label: 'LLM', value: 'llm' },
        { label: 'Performance', value: 'performance' },
        { label: 'Characters', value: 'characters' },
        { label: 'Scenarios', value: 'scenarios' },
        { label: 'Chat', value: 'chat' },
        { label: 'Events', value: 'events' },
        { label: 'Flags', value: 'flags' },
      ],
    },
    {
      name: 'topics',
      type: 'array',
      admin: {
        description: 'Topic tags',
      },
      fields: [
        {
          name: 'topic',
          type: 'text',
        },
      ],
    },
    {
      name: 'keywords',
      type: 'array',
      admin: {
        description: 'Search keywords',
      },
      fields: [
        {
          name: 'keyword',
          type: 'text',
        },
      ],
    },
    {
      name: 'confidence',
      type: 'number',
      min: 0,
      max: 1,
      admin: {
        description: 'Confidence score (0-1)',
        step: 0.1,
      },
    },
    {
      name: 'contributor',
      type: 'text',
      admin: {
        description: 'Original contributor name from Discord',
      },
    },
    {
      name: 'originalContributor',
      type: 'relationship',
      relationTo: 'discord-users',
      admin: {
        description: 'Linked Discord user who originally contributed',
      },
    },
    {
      name: 'lastEditedBy',
      type: 'relationship',
      relationTo: 'discord-users',
      admin: {
        description: 'Discord user who last edited this article',
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
        description: 'Discord ID of last editor (for attribution)',
      },
    },
    {
      name: 'lastEditedAt',
      type: 'date',
      admin: {
        description: 'When the article was last edited',
      },
    },
    {
      name: 'editHistory',
      type: 'array',
      admin: {
        description: 'History of edits',
      },
      fields: [
        {
          name: 'editor',
          type: 'relationship',
          relationTo: 'discord-users',
        },
        {
          name: 'editorName',
          type: 'text',
        },
        {
          name: 'editedAt',
          type: 'date',
        },
      ],
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
