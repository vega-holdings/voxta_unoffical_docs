import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { MarkdownContent } from '@/components/MarkdownContent'
import { cookies } from 'next/headers'
import { EditButton } from './EditButton'
import { FavoriteButton } from '../../components/FavoriteButton'
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
    collection: 'kb-articles',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const article = result.docs[0]
  if (!article) return { title: 'Not Found - Voxta Unofficial Docs' }

  return {
    title: `${article.title} - Voxta KB`,
    description: article.content?.slice(0, 160) || '',
  }
}

export default async function KBArticlePage({ params }: PageProps) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'kb-articles',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })

  const rawArticle = result.docs[0]
  if (!rawArticle) notFound()

  // Cast to include attachments field that may not be in generated types
  const article = rawArticle as typeof rawArticle & {
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

  // Parse topics and keywords
  const topics = article.topics as Array<{ topic: string }> | undefined
  const keywords = article.keywords as Array<{ keyword: string }> | undefined

  // Format last edited date
  const lastEditedAt = article.lastEditedAt ? new Date(article.lastEditedAt).toLocaleDateString() : null

  return (
    <div className="kb-page">
      <Link href="/kb" className="back-link">&larr; Back to Knowledge Base</Link>

      <div className="kb-header">
        <div>
          <h1>{article.title}</h1>
          {lastEditedAt && article.lastEditedByName && (
            <p className="last-edited">
              Last edited by {article.lastEditedByName} on {lastEditedAt}
            </p>
          )}
        </div>
        <div className="kb-actions">
          <FavoriteButton type="kb" id={article.id} />
          {isLoggedIn && <EditButton slug={slug} />}
        </div>
      </div>

      <div className="kb-meta">
        {article.type && <span>{article.type}</span>}
        {article.category && <span>{article.category}</span>}
        {article.confidence && <span>{Math.round(article.confidence * 100)}% confidence</span>}
        {article.contributor && (
          <Link href={`/contributor/${encodeURIComponent(article.contributor)}`}>
            By {article.contributor}
          </Link>
        )}
      </div>

      <div className="kb-content">
        <MarkdownContent content={article.content || ''} />
      </div>

      {topics && topics.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <strong>Topics:</strong>{' '}
          {topics.map((t, i) => (
            <span key={i} style={{
              background: 'var(--bg-card)',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              marginRight: '0.5rem',
              fontSize: '0.875rem'
            }}>
              {t.topic}
            </span>
          ))}
        </div>
      )}

      {keywords && keywords.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Keywords:</strong>{' '}
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            {keywords.map(k => k.keyword).join(', ')}
          </span>
        </div>
      )}

      {article.attachments && article.attachments.length > 0 && (
        <div className="attachments">
          <h3>Attachments</h3>
          <ul>
            {article.attachments.map((att, index) => {
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
        <VersionHistory type="kb" id={article.id} />
      )}
    </div>
  )
}
