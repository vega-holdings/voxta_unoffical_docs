import type { CollectionConfig } from 'payload'

export const DiscordUsers: CollectionConfig = {
  slug: 'discord-users',
  admin: {
    useAsTitle: 'displayName',
    defaultColumns: ['displayName', 'username', 'isGuildMember', 'isAdmin', 'editCount', 'lastLogin'],
    listSearchableFields: ['displayName', 'username', 'discordId'],
    group: 'Users',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'discordId',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Discord user ID',
      },
    },
    {
      name: 'username',
      type: 'text',
      required: true,
      admin: {
        description: 'Discord username',
      },
    },
    {
      name: 'displayName',
      type: 'text',
      required: true,
      admin: {
        description: 'Display name (global_name or username)',
      },
    },
    {
      name: 'avatar',
      type: 'text',
      admin: {
        description: 'Discord avatar URL',
      },
    },
    {
      name: 'claimedContributorNames',
      type: 'array',
      admin: {
        description: 'Contributor names this user has claimed from KB articles',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'editCount',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Number of KB edits made',
      },
    },
    {
      name: 'lastLogin',
      type: 'date',
      admin: {
        description: 'Last login time',
      },
    },
    {
      name: 'isGuildMember',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Is a member of the official Voxta Discord server',
      },
    },
    {
      name: 'isAdmin',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Has admin privileges',
      },
    },
    {
      name: 'displayPreference',
      type: 'select',
      defaultValue: 'username',
      options: [
        { label: 'Username', value: 'username' },
        { label: 'Display Name', value: 'displayName' },
      ],
      admin: {
        description: 'How your name appears on contributions and edits',
      },
    },
    {
      name: 'favoriteKBArticles',
      type: 'relationship',
      relationTo: 'kb-articles',
      hasMany: true,
      admin: {
        description: 'Favorited KB articles',
      },
    },
    {
      name: 'favoriteDocsPages',
      type: 'relationship',
      relationTo: 'docs-pages',
      hasMany: true,
      admin: {
        description: 'Favorited documentation pages',
      },
    },
  ],
}
