import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ name: string }>
}

interface ClaimedByUser {
  id: number
  displayName: string
  avatar: string | null
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params
  const decodedName = decodeURIComponent(name)
  return {
    title: `${decodedName} - Contributor Profile - Voxta Unofficial Docs`,
    description: `View contributions by ${decodedName} to the Voxta knowledge base`,
  }
}

export default async function ContributorPage({ params }: PageProps) {
  const { name } = await params
  const contributorName = decodeURIComponent(name)

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch articles by this contributor
  const articles = await payload.find({
    collection: 'kb-articles',
    where: {
      contributor: { equals: contributorName },
    },
    limit: 500,
    sort: '-updatedAt',
  })

  // Check if this contributor name is claimed by anyone
  // Fetch all discord users and check locally (array query not well supported)
  let claimedBy: ClaimedByUser | null = null
  try {
    const allUsers = await payload.find({
      collection: 'discord-users',
      limit: 100,
    })

    for (const user of allUsers.docs) {
      const claims = user.claimedContributorNames as Array<{ name: string }> | undefined
      if (claims?.some(c => c.name === contributorName)) {
        claimedBy = {
          id: user.id,
          displayName: user.displayName,
          avatar: user.avatar || null,
        }
        break
      }
    }
  } catch {
    // Query failed, continue without claim info
  }

  // Group articles by category
  const byCategory = new Map<string, typeof articles.docs>()
  for (const article of articles.docs) {
    const cat = article.category || 'uncategorized'
    if (!byCategory.has(cat)) {
      byCategory.set(cat, [])
    }
    byCategory.get(cat)!.push(article)
  }

  return (
    <div className="contributor-page">
      <Link href="/leaderboard" className="back-link">&larr; Back to Leaderboard</Link>

      <div className="contributor-header">
        {claimedBy?.avatar ? (
          <Image
            src={claimedBy.avatar}
            alt=""
            width={80}
            height={80}
            className="contributor-avatar"
            unoptimized
          />
        ) : (
          <div className="contributor-avatar-placeholder">
            {contributorName.charAt(0).toUpperCase()}
          </div>
        )}

        <div className="contributor-info">
          <h1>{contributorName}</h1>
          {claimedBy && (
            <p className="claimed-by">
              Claimed by <strong>{claimedBy.displayName}</strong>
            </p>
          )}
          <p className="contributor-stats">
            {articles.totalDocs} {articles.totalDocs === 1 ? 'article' : 'articles'} contributed
          </p>
        </div>

        {!claimedBy && (
          <p className="auto-claim-note">
            Discord users are auto-linked when they log in
          </p>
        )}
      </div>

      <div className="contributor-articles">
        <h2>Contributions</h2>

        {Array.from(byCategory.entries()).map(([category, catArticles]) => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category}</h3>
            <ul className="article-list">
              {catArticles.map((article) => (
                <li key={article.id}>
                  <Link href={`/kb/${article.slug}`}>{article.title}</Link>
                  {article.type && (
                    <span className="article-type">{article.type}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {articles.totalDocs === 0 && (
          <p className="no-articles">No articles found for this contributor.</p>
        )}
      </div>
    </div>
  )
}
