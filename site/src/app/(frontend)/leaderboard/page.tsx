import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Top Contributors - Voxta Unofficial Docs',
  description: 'Leaderboard of top knowledge base contributors',
}

interface ContributorStats {
  name: string
  count: number
  categories: Set<string>
}

export default async function LeaderboardPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all KB articles (need high limit since there are 1000+)
  const articles = await payload.find({
    collection: 'kb-articles',
    limit: 2000,
    depth: 0,
  })

  // Aggregate by contributor
  const contributorMap = new Map<string, ContributorStats>()

  for (const article of articles.docs) {
    const contributor = article.contributor || 'Unknown'

    if (!contributorMap.has(contributor)) {
      contributorMap.set(contributor, {
        name: contributor,
        count: 0,
        categories: new Set(),
      })
    }

    const stats = contributorMap.get(contributor)!
    stats.count++
    if (article.category) {
      stats.categories.add(article.category)
    }
  }

  // Sort by count and take top 10
  const topContributors = Array.from(contributorMap.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  // Medal emojis for top 3
  const medals = ['🥇', '🥈', '🥉']

  return (
    <div className="leaderboard-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>

      <h1>Top KB Contributors</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Recognizing the community members who have contributed to the knowledge base.
        <br />
        Total articles: {articles.docs.length} | Total contributors: {contributorMap.size}
      </p>

      <div className="leaderboard">
        {topContributors.map((contributor, index) => (
          <div
            key={contributor.name}
            className="leaderboard-entry"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: index < 3 ? 'var(--bg-card)' : 'transparent',
              borderRadius: '8px',
              marginBottom: '0.5rem',
              borderLeft: index < 3 ? `4px solid ${index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : '#CD7F32'}` : 'none',
            }}
          >
            <span style={{
              fontSize: index < 3 ? '2rem' : '1.5rem',
              minWidth: '3rem',
              textAlign: 'center',
            }}>
              {index < 3 ? medals[index] : `#${index + 1}`}
            </span>

            <div style={{ flex: 1 }}>
              <Link
                href={`/contributor/${encodeURIComponent(contributor.name)}`}
                style={{
                  fontWeight: index < 3 ? 'bold' : 'normal',
                  fontSize: index < 3 ? '1.25rem' : '1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                className="contributor-link"
              >
                {contributor.name}
              </Link>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                {contributor.categories.size} {contributor.categories.size === 1 ? 'category' : 'categories'}
              </div>
            </div>

            <div style={{
              fontSize: index < 3 ? '1.5rem' : '1.25rem',
              fontWeight: 'bold',
              color: 'var(--primary)',
            }}>
              {contributor.count}
              <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--text-muted)', marginLeft: '0.25rem' }}>
                {contributor.count === 1 ? 'article' : 'articles'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {topContributors.length === 0 && (
        <p style={{ color: 'var(--text-muted)' }}>No contributors found yet.</p>
      )}
    </div>
  )
}
