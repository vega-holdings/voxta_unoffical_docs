import type { CollectionAfterChangeHook } from 'payload'
import { getCloudflareContext } from '@opennextjs/cloudflare'

/**
 * Sync document changes back to GitHub repository
 */
export const githubSyncAfterChange: CollectionAfterChangeHook = async ({
  doc,
  collection,
  operation: _operation,
}) => {
  // Only sync if document has a GitHub path
  if (!doc.githubPath) {
    return doc
  }

  // Skip during local development
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[GitHub] Skipping sync in dev mode: ${doc.githubPath}`)
    return doc
  }

  try {
    const { env } = await getCloudflareContext({ async: true })

    const githubToken = env.GITHUB_TOKEN
    const owner = env.GITHUB_OWNER || 'vega-holdings'
    const repo = env.GITHUB_REPO || 'voxta_unoffical_docs'

    if (!githubToken) {
      console.warn('[GitHub] GITHUB_TOKEN not configured')
      return doc
    }

    // Generate markdown content
    const markdownContent = generateMarkdown(doc, collection.slug)

    // Get current file SHA (required for updates)
    const currentFile = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${doc.githubPath}`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Voxta-Docs-CMS',
        },
      }
    )

    let sha: string | undefined
    if (currentFile.ok) {
      const fileData = await currentFile.json() as { sha: string }
      sha = fileData.sha
    }

    // Update or create file
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${doc.githubPath}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
          'User-Agent': 'Voxta-Docs-CMS',
        },
        body: JSON.stringify({
          message: `Update ${doc.title} via Voxta Docs CMS`,
          content: btoa(unescape(encodeURIComponent(markdownContent))),
          sha,
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error(`[GitHub] Sync failed: ${error}`)
    } else {
      console.log(`[GitHub] Synced: ${doc.githubPath}`)
    }
  } catch (error) {
    console.error('[GitHub] Sync error:', error)
  }

  return doc
}

/**
 * Generate markdown from document data
 */
function generateMarkdown(doc: Record<string, unknown>, collectionSlug: string): string {
  const frontmatter: Record<string, unknown> = {
    title: doc.title,
  }

  if (collectionSlug === 'docs-pages') {
    if (doc.originalUrl) frontmatter.url = doc.originalUrl
    frontmatter.scraped_at = new Date().toISOString()
  } else if (collectionSlug === 'kb-articles') {
    if (doc.type) frontmatter.type = doc.type
    if (doc.category) frontmatter.category = doc.category
    if (doc.topics) frontmatter.topics = (doc.topics as Array<{topic: string}>).map(t => t.topic)
    if (doc.keywords) frontmatter.keywords = (doc.keywords as Array<{keyword: string}>).map(k => k.keyword)
    if (doc.confidence) frontmatter.confidence = doc.confidence
    if (doc.contributor) frontmatter.contributor = doc.contributor
    frontmatter.updated = new Date().toISOString()
  }

  const frontmatterYaml = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}:\n${value.map(v => `  - ${v}`).join('\n')}`
      }
      if (typeof value === 'string' && (value.includes(':') || value.includes('"'))) {
        return `${key}: "${value.replace(/"/g, '\\"')}"`
      }
      return `${key}: ${value}`
    })
    .join('\n')

  return `---\n${frontmatterYaml}\n---\n\n${doc.content || ''}`
}
