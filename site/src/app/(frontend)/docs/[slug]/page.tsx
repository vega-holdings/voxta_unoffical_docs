import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { MarkdownContent } from '@/components/MarkdownContent'
import { DownloadButton } from '../../components/DownloadButton'
import { FavoriteButton } from '../../components/FavoriteButton'
import { EditButton } from './EditButton'
import { VersionHistory } from '../../components/VersionHistory'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'docs-pages',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const doc = result.docs[0]
  if (!doc) return { title: 'Not Found - Voxta Unofficial Docs' }

  return {
    title: `${doc.title} - Voxta Unofficial Docs`,
    description: doc.content?.slice(0, 160) || '',
  }
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'docs-pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })

  const rawDoc = result.docs[0]
  if (!rawDoc) notFound()

  // Cast to include edit tracking fields and attachments that may not be in generated types
  const doc = rawDoc as typeof rawDoc & {
    lastEditedAt?: string
    lastEditedByName?: string
    attachments?: Array<{
      id?: string
      file: number | { id: number; filename: string; url: string }
      label?: string
    }>
  }

  // Check if user is logged in and is a guild member
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('discord_user')
  const isLoggedIn = !!userCookie
  let isGuildMember = false

  if (userCookie) {
    try {
      const user = JSON.parse(userCookie.value) as { isGuildMember?: boolean; isAdmin?: boolean }
      isGuildMember = user.isGuildMember || user.isAdmin || false
    } catch {
      // Invalid cookie
    }
  }

  // Format last edited date
  const lastEditedAt = doc.lastEditedAt ? new Date(doc.lastEditedAt).toLocaleDateString() : null

  // Get related KB articles if any
  const relatedKB = doc.relatedKB as Array<{ id: number; title: string; slug: string }> | undefined

  return (
    <div className="doc-page">
      <Link href="/docs" className="back-link">&larr; Back to Docs</Link>

      <div className="doc-header">
        <div>
          <h1>{doc.title}</h1>
          {lastEditedAt && doc.lastEditedByName && (
            <p className="last-edited">
              Last edited by {doc.lastEditedByName} on {lastEditedAt}
            </p>
          )}
        </div>
        <div className="doc-actions">
          <FavoriteButton type="docs" id={doc.id} />
          {isLoggedIn && <EditButton slug={doc.slug} />}
        </div>
      </div>

      <div className="doc-meta">
        {doc.category && <span>{doc.category}</span>}
        {doc.originalUrl && (
          <a href={doc.originalUrl} target="_blank" rel="noopener noreferrer">
            <span>Original</span>
          </a>
        )}
        <DownloadButton content={doc.content || ''} filename={doc.slug} title={doc.title} />
      </div>

      <div className="doc-content">
        <MarkdownContent content={doc.content || ''} />
      </div>

      {relatedKB && relatedKB.length > 0 && (
        <div className="related-kb">
          <h2>Related KB Articles</h2>
          <ul>
            {relatedKB.map((kb) => (
              <li key={kb.id}>
                <Link href={`/kb/${kb.slug}`}>{kb.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {doc.attachments && doc.attachments.length > 0 && (
        <div className="attachments">
          <h3>Attachments</h3>
          <ul>
            {doc.attachments.map((att, index) => {
              const file = typeof att.file === 'object' ? att.file : null
              if (!file) return null
              return (
                <li key={att.id || index}>
                  <a href={file.url} download={file.filename}>
                    {att.label || file.filename}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {isGuildMember && (
        <VersionHistory type="docs" id={doc.id} />
      )}
    </div>
  )
}
