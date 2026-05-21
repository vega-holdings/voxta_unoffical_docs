import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { SettingsForm } from './SettingsForm'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return {
    title: 'My Account - Voxta Unofficial Docs',
    description: 'View your profile, contributions, and settings',
  }
}

interface UserCookie {
  id: number
  discordId: string
  username: string
  displayName: string
  avatar: string | null
}

export default async function AccountPage() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('discord_user')

  if (!userCookie) {
    redirect('/?error=not_logged_in')
  }

  let user: UserCookie
  try {
    user = JSON.parse(userCookie.value)
  } catch {
    redirect('/?error=invalid_session')
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Get user from DB for latest data
  let dbUser = null
  try {
    dbUser = await payload.findByID({
      collection: 'discord-users',
      id: user.id,
    })
  } catch {
    // User not in DB yet
  }

  // Auto-claim contributor name if not already done (fallback for users who logged in before auto-claim was deployed)
  if (dbUser && user.discordId) {
    const currentClaims = (dbUser.claimedContributorNames as Array<{ name: string }>) || []
    if (currentClaims.length === 0) {
      try {
        // Check contributor_mappings via direct query through payload's db
        const { env } = await (await import('@opennextjs/cloudflare')).getCloudflareContext()
        const mapping = await env.D1.prepare(
          'SELECT username FROM contributor_mappings WHERE discord_id = ?'
        ).bind(user.discordId).first<{ username: string }>()

        if (mapping) {
          // Check if this name is already claimed by anyone
          const existingClaim = await env.D1.prepare(
            'SELECT id FROM discord_users_claimed_contributor_names WHERE name = ?'
          ).bind(mapping.username).first()

          if (!existingClaim) {
            // Add the claim
            await env.D1.prepare(
              'INSERT INTO discord_users_claimed_contributor_names (_order, _parent_id, id, name) VALUES (0, ?, ?, ?)'
            ).bind(user.id, crypto.randomUUID(), mapping.username).run()

            // Refresh dbUser to get updated claims
            dbUser = await payload.findByID({
              collection: 'discord-users',
              id: user.id,
            })
          }
        }
      } catch (e) {
        console.error('[Account] Auto-claim fallback error:', e)
      }
    }
  }

  // Get articles where user is the original contributor (by claimed names)
  const claimedNames = (dbUser?.claimedContributorNames as Array<{ name: string }>) || []
  const contributorNames = claimedNames.map(c => c.name)

  let originalContributions: Array<{ id: number; title: string; slug: string; category: string | null }> = []
  if (contributorNames.length > 0) {
    const results = await payload.find({
      collection: 'kb-articles',
      where: {
        contributor: { in: contributorNames },
      },
      limit: 500,
      sort: '-updatedAt',
    })
    originalContributions = results.docs.map(doc => ({
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      category: doc.category || null,
    }))
  }

  // Get articles edited by this user
  const editedArticles = await payload.find({
    collection: 'kb-articles',
    where: {
      lastEditedBy: { equals: user.id },
    },
    limit: 100,
    sort: '-lastEditedAt',
  })

  // Get user's favorites with depth to get titles
  let favoriteKBArticles: Array<{ id: number; title: string; slug: string }> = []
  let favoriteDocsPages: Array<{ id: number; title: string; slug: string }> = []

  if (dbUser) {
    const userWithFavorites = await payload.findByID({
      collection: 'discord-users',
      id: user.id,
      depth: 1,
    }) as unknown as Record<string, unknown>

    if (userWithFavorites?.favoriteKBArticles) {
      favoriteKBArticles = (userWithFavorites.favoriteKBArticles as Array<{ id: number; title: string; slug: string }>)
        .filter(f => f && typeof f === 'object')
    }
    if (userWithFavorites?.favoriteDocsPages) {
      favoriteDocsPages = (userWithFavorites.favoriteDocsPages as Array<{ id: number; title: string; slug: string }>)
        .filter(f => f && typeof f === 'object')
    }
  }

  const editCount = dbUser?.editCount || 0
  const isAdmin = (dbUser as { isAdmin?: boolean } | null)?.isAdmin || false
  const displayPreference = (dbUser as { displayPreference?: string } | null)?.displayPreference || 'username'

  return (
    <div className="account-page">
      <Link href="/" className="back-link">&larr; Back to Home</Link>

      <div className="account-header">
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt=""
            width={100}
            height={100}
            className="account-avatar"
            unoptimized
          />
        ) : (
          <div className="account-avatar-placeholder">
            {user.displayName.charAt(0).toUpperCase()}
          </div>
        )}

        <div className="account-info">
          <h1>{user.displayName}</h1>
          {isAdmin && <span className="admin-badge">Admin</span>}
        </div>
      </div>

      <div className="account-stats">
        <div className="stat-card">
          <div className="stat-value">{originalContributions.length}</div>
          <div className="stat-label">Original Contributions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{editCount}</div>
          <div className="stat-label">Edits Made</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{contributorNames.length}</div>
          <div className="stat-label">Claimed Names</div>
        </div>
      </div>

      {contributorNames.length > 0 && (
        <div className="account-section">
          <h2>Claimed Contributor Names</h2>
          <div className="claimed-names">
            {contributorNames.map(name => (
              <Link key={name} href={`/contributor/${encodeURIComponent(name)}`} className="claimed-name-tag">
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="account-section">
        <h2>Original Contributions ({originalContributions.length})</h2>
        {originalContributions.length > 0 ? (
          <ul className="contribution-list">
            {originalContributions.slice(0, 20).map(article => (
              <li key={article.id}>
                <Link href={`/kb/${article.slug}`}>{article.title}</Link>
                {article.category && <span className="article-category">{article.category}</span>}
              </li>
            ))}
            {originalContributions.length > 20 && (
              <li className="more-link">
                And {originalContributions.length - 20} more...
              </li>
            )}
          </ul>
        ) : (
          <p className="no-contributions">
            No original contributions linked yet.
            {contributorNames.length === 0 && ' Log in with Discord to auto-link your contributor name.'}
          </p>
        )}
      </div>

      <div className="account-section">
        <h2>Recent Edits ({editedArticles.totalDocs})</h2>
        {editedArticles.docs.length > 0 ? (
          <ul className="contribution-list">
            {editedArticles.docs.map(article => (
              <li key={article.id}>
                <Link href={`/kb/${article.slug}`}>{article.title}</Link>
                {article.lastEditedAt && (
                  <span className="edit-date">
                    {new Date(article.lastEditedAt).toLocaleDateString()}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-contributions">No edits yet.</p>
        )}
      </div>


      {(favoriteKBArticles.length > 0 || favoriteDocsPages.length > 0) && (
        <div className="favorites-section">
          <h2>Favorites</h2>

          {favoriteKBArticles.length > 0 && (
            <div className="account-section">
              <h3>KB Articles ({favoriteKBArticles.length})</h3>
              <div className="favorites-grid">
                {favoriteKBArticles.map(article => (
                  <div key={article.id} className="favorite-card">
                    <Link href={`/kb/${article.slug}`}>{article.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {favoriteDocsPages.length > 0 && (
            <div className="account-section">
              <h3>Documentation ({favoriteDocsPages.length})</h3>
              <div className="favorites-grid">
                {favoriteDocsPages.map(doc => (
                  <div key={doc.id} className="favorite-card">
                    <Link href={`/docs/${doc.slug}`}>{doc.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <SettingsForm
        currentPreference={displayPreference}
        username={user.username}
        displayName={user.displayName}
      />

      <div className="account-actions">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/api/auth/logout" className="logout-button">Log Out</a>
      </div>
    </div>
  )
}
