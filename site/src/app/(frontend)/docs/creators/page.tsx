import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Creator Documentation - Voxta Unofficial Docs',
  description: 'Guides for content creators using Voxta',
}

interface UserCookie {
  isGuildMember?: boolean
}

export default async function CreatorsPage() {
  // Check if user is logged in and is a guild member
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('discord_user')
  let isGuildMember = false

  if (userCookie) {
    try {
      const user = JSON.parse(userCookie.value) as UserCookie
      isGuildMember = user.isGuildMember || false
    } catch {
      // Invalid cookie
    }
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const docs = await payload.find({
    collection: 'docs-pages',
    where: {
      category: { equals: 'creators' },
    },
    limit: 200,
    sort: 'sortOrder',
  })

  // Sort docs by sortOrder then title
  const sortedDocs = docs.docs.sort((a, b) => {
    const orderA = (a.sortOrder as number) ?? 100
    const orderB = (b.sortOrder as number) ?? 100
    if (orderA !== orderB) return orderA - orderB
    return (a.title || '').localeCompare(b.title || '')
  })

  return (
    <div className="docs-list-page">
      <div className="docs-header-row">
        <h1>Creator Documentation</h1>
        {isGuildMember && (
          <Link href="/docs/new" className="new-article-btn">
            + New Doc
          </Link>
        )}
      </div>

      <p className="page-description">
        Guides for creating characters, scenarios, and content with Voxta.
      </p>

      <div className="docs-grid">
        {sortedDocs.map((doc) => (
          <div key={doc.id} className="doc-card">
            <Link href={`/docs/${doc.slug}`}>
              <h3>{doc.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      {docs.docs.length === 0 && (
        <p style={{ color: 'var(--text-muted)' }}>No creator documentation yet.</p>
      )}
    </div>
  )
}
