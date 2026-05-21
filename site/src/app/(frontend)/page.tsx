import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { SearchForm } from './components/SearchForm'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Get recent docs (excluding developers/creators categories)
  const recentDocs = await payload.find({
    collection: 'docs-pages',
    where: {
      category: {
        not_in: ['developers', 'creators'],
      },
    },
    limit: 6,
    sort: '-updatedAt',
  })

  // Get recent KB articles
  const recentKB = await payload.find({
    collection: 'kb-articles',
    limit: 6,
    sort: '-updatedAt',
  })

  // Get developer docs
  const developerDocs = await payload.find({
    collection: 'docs-pages',
    where: {
      category: { equals: 'developers' },
    },
    limit: 6,
    sort: '-updatedAt',
  })

  // Get creator docs
  const creatorDocs = await payload.find({
    collection: 'docs-pages',
    where: {
      category: { equals: 'creators' },
    },
    limit: 6,
    sort: '-updatedAt',
  })

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Voxta Unofficial Documentation</h1>
        <p className="tagline">
          Unofficial community documentation for the Voxta AI conversation platform.
          Search across all docs and knowledge base articles.
        </p>
        <SearchForm />
        <div className="quick-links">
          <Link href="/docs">Documentation</Link>
          <Link href="/docs/developers">Developers</Link>
          <Link href="/docs/creators">Creators</Link>
          <Link href="/kb">Knowledge Base</Link>
          <Link href="/leaderboard">Leaderboard</Link>
        </div>
      </section>

      <section className="content-grid">
        <div className="section">
          <Link href="/docs" className="section-title-link"><h2>Documentation</h2></Link>
          <p className="section-desc">Official guides and references</p>
          <ul className="item-list">
            {recentDocs.docs.map((doc) => (
              <li key={doc.id}>
                <Link href={`/docs/${doc.slug}`}>
                  <span className="item-title">{doc.title}</span>
                  {doc.category && <span className="item-category">{doc.category}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <Link href="/kb" className="section-title-link"><h2>Knowledge Base</h2></Link>
          <p className="section-desc">Community Q&A and troubleshooting</p>
          <ul className="item-list">
            {recentKB.docs.map((article) => (
              <li key={article.id}>
                <Link href={`/kb/${article.slug}`}>
                  <span className="item-title">{article.title}</span>
                  {article.type && <span className="item-type">{article.type}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid">
        <div className="section">
          <Link href="/docs/developers" className="section-title-link"><h2>Developers</h2></Link>
          <p className="section-desc">SDK guides and API documentation</p>
          <ul className="item-list">
            {developerDocs.docs.length > 0 ? (
              developerDocs.docs.map((doc) => (
                <li key={doc.id}>
                  <Link href={`/docs/${doc.slug}`}>
                    <span className="item-title">{doc.title}</span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="empty-state">No developer docs yet</li>
            )}
          </ul>
        </div>

        <div className="section">
          <Link href="/docs/creators" className="section-title-link"><h2>Creators</h2></Link>
          <p className="section-desc">Character and scenario creation</p>
          <ul className="item-list">
            {creatorDocs.docs.length > 0 ? (
              creatorDocs.docs.map((doc) => (
                <li key={doc.id}>
                  <Link href={`/docs/${doc.slug}`}>
                    <span className="item-title">{doc.title}</span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="empty-state">No creator docs yet</li>
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}
