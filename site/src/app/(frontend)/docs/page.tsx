import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Documentation - Voxta Unofficial Docs',
  description: 'Browse all Voxta documentation pages',
}

interface UserCookie {
  isGuildMember?: boolean
  isAdmin?: boolean
}

// Ordered list of categories with display labels
// Main docs page shows only these core categories (not developers/creators)
const categoryOrder = [
  { value: 'documentation', label: 'Documentation' },
  { value: 'installing', label: 'Installing' },
  { value: 'interface', label: 'Interface' },
  { value: 'modules', label: 'Modules' },
]

const categoryLabels: Record<string, string> = Object.fromEntries(
  categoryOrder.map(c => [c.value, c.label])
)

export default async function DocsListPage() {
  // Check if user is logged in and is a guild member
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('discord_user')
  let isGuildMember = false

  if (userCookie) {
    try {
      const user = JSON.parse(userCookie.value) as UserCookie
      isGuildMember = user.isGuildMember || user.isAdmin || false
    } catch {
      // Invalid cookie
    }
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const docs = await payload.find({
    collection: 'docs-pages',
    limit: 200,
    sort: 'sortOrder',
  })

  // Group docs by category
  const grouped = docs.docs.reduce((acc, doc) => {
    const category = doc.category || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(doc)
    return acc
  }, {} as Record<string, typeof docs.docs>)

  // Sort docs within each category by sortOrder then title
  for (const category of Object.keys(grouped)) {
    grouped[category].sort((a, b) => {
      const orderA = (a.sortOrder as number) ?? 100
      const orderB = (b.sortOrder as number) ?? 100
      if (orderA !== orderB) return orderA - orderB
      return (a.title || '').localeCompare(b.title || '')
    })
  }

  // Get ordered categories (only those with docs)
  const orderedCategories = categoryOrder
    .map(c => c.value)
    .filter(c => grouped[c]?.length > 0)

  // Add any uncategorized at the end
  const otherCategories = Object.keys(grouped).filter(
    c => !categoryOrder.find(co => co.value === c)
  )

  return (
    <div className="docs-list-page">
      <div className="docs-header-row">
        <h1>Documentation</h1>
        {isGuildMember && (
          <Link href="/docs/new" className="new-article-btn">
            + New Doc
          </Link>
        )}
      </div>

      {[...orderedCategories, ...otherCategories].map((category) => (
        <section key={category} style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
            {categoryLabels[category] || category}
          </h2>
          <div className="docs-grid">
            {grouped[category].map((doc) => (
              <div key={doc.id} className="doc-card">
                <Link href={`/docs/${doc.slug}`}>
                  <h3>{doc.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}

      {docs.docs.length === 0 && (
        <p style={{ color: 'var(--text-muted)' }}>No documentation pages yet.</p>
      )}
    </div>
  )
}
