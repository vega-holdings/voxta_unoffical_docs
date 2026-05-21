/**
 * Import markdown documentation into PayloadCMS
 *
 * Usage:
 *   npx tsx scripts/import-docs.ts
 *
 * Requires:
 *   - PayloadCMS running locally or PAYLOAD_API_URL env var
 *   - Admin user credentials (PAYLOAD_EMAIL, PAYLOAD_PASSWORD)
 */

import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const PAYLOAD_API_URL = process.env.PAYLOAD_API_URL || 'http://localhost:3000/api'
const PAYLOAD_EMAIL = process.env.PAYLOAD_EMAIL || 'admin@example.com'
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD || 'admin'

// Paths relative to the repo root (parent of site/)
const REPO_ROOT = path.resolve(process.cwd(), '..')
const DOCS_PATTERN = /^docs-.*\.md$/
const KB_DIR = path.join(REPO_ROOT, 'kb')

interface DocsFrontmatter {
  title?: string
  url?: string
  scraped_at?: string
}

interface KBFrontmatter {
  id?: string
  slug?: string
  type?: string
  title?: string
  topics?: string[]
  keywords?: string[]
  confidence?: number
  authority?: number
  contributor?: string
}

async function login(): Promise<string> {
  console.log('Logging in to PayloadCMS...')

  const response = await fetch(`${PAYLOAD_API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: PAYLOAD_EMAIL,
      password: PAYLOAD_PASSWORD,
    }),
  })

  if (!response.ok) {
    throw new Error(`Login failed: ${response.statusText}`)
  }

  const data = await response.json() as { token: string }
  console.log('Logged in successfully')
  return data.token
}

function slugFromFilename(filename: string): string {
  return filename
    .replace(/^docs-/, '')
    .replace(/\.md$/, '')
    .toLowerCase()
}

function categoryFromContent(content: string, filename: string): string {
  // Try to infer category from content or filename
  const lowerFilename = filename.toLowerCase()

  if (lowerFilename.includes('install') || lowerFilename.includes('update')) return 'installation'
  if (lowerFilename.includes('getting-started') || lowerFilename.includes('what-is')) return 'getting-started'
  if (lowerFilename.includes('faq')) return 'faq'
  if (lowerFilename.includes('scenario') || lowerFilename.includes('memory') || lowerFilename.includes('action') || lowerFilename.includes('event') || lowerFilename.includes('script')) return 'creator-studio'
  if (lowerFilename.includes('service') || lowerFilename.includes('llm') || lowerFilename.includes('tts') || lowerFilename.includes('stt')) return 'services'
  if (lowerFilename.includes('troubleshoot') || lowerFilename.includes('glossary') || lowerFilename.includes('parameter')) return 'articles'
  if (lowerFilename.includes('term') || lowerFilename.includes('patreon') || lowerFilename.includes('safety')) return 'about'

  return 'interface'
}

async function importDocsPages(token: string): Promise<void> {
  console.log('\n--- Importing Docs Pages ---')

  const files = await fs.readdir(REPO_ROOT)
  const docsFiles = files.filter(f => DOCS_PATTERN.test(f))

  console.log(`Found ${docsFiles.length} docs files`)

  let imported = 0
  let failed = 0

  for (const filename of docsFiles) {
    try {
      const filepath = path.join(REPO_ROOT, filename)
      const raw = await fs.readFile(filepath, 'utf-8')
      const { data, content } = matter(raw) as { data: DocsFrontmatter; content: string }

      const slug = slugFromFilename(filename)
      const title = data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

      const payload = {
        title,
        slug,
        content: content.trim(),
        category: categoryFromContent(content, filename),
        originalUrl: data.url || '',
        githubPath: filename,
      }

      const response = await fetch(`${PAYLOAD_API_URL}/docs-pages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`,
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        console.log(`  ✓ ${filename}`)
        imported++
      } else {
        const error = await response.text()
        // Check if it's a duplicate
        if (error.includes('unique') || error.includes('duplicate')) {
          console.log(`  ⊘ ${filename} (already exists)`)
        } else {
          console.error(`  ✗ ${filename}: ${error}`)
          failed++
        }
      }
    } catch (error) {
      console.error(`  ✗ ${filename}: ${error}`)
      failed++
    }
  }

  console.log(`\nDocs import complete: ${imported} imported, ${failed} failed`)
}

async function importKBArticles(token: string): Promise<void> {
  console.log('\n--- Importing KB Articles ---')

  const categories = await fs.readdir(KB_DIR)

  let imported = 0
  let failed = 0
  let total = 0

  for (const category of categories) {
    const categoryPath = path.join(KB_DIR, category)
    const stat = await fs.stat(categoryPath)

    if (!stat.isDirectory()) continue

    const files = await fs.readdir(categoryPath)
    const mdFiles = files.filter(f => f.endsWith('.md'))

    console.log(`\nCategory: ${category} (${mdFiles.length} files)`)
    total += mdFiles.length

    for (const filename of mdFiles) {
      try {
        const filepath = path.join(categoryPath, filename)
        const raw = await fs.readFile(filepath, 'utf-8')
        const { data, content } = matter(raw) as { data: KBFrontmatter; content: string }

        const slug = data.slug || filename.replace(/\.md$/, '')
        const title = data.title || slug.replace(/-/g, ' ')

        const payload = {
          title,
          slug,
          content: content.trim(),
          type: data.type || 'qa',
          category,
          topics: data.topics?.map(t => ({ topic: t })) || [],
          keywords: data.keywords?.map(k => ({ keyword: k })) || [],
          confidence: data.confidence || 0.5,
          contributor: data.contributor || '',
          githubPath: `kb/${category}/${filename}`,
        }

        const response = await fetch(`${PAYLOAD_API_URL}/kb-articles`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,
          },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          imported++
          if (imported % 50 === 0) {
            console.log(`  ... ${imported} imported`)
          }
        } else {
          const error = await response.text()
          if (!error.includes('unique') && !error.includes('duplicate')) {
            failed++
          }
        }
      } catch (error) {
        failed++
      }
    }
  }

  console.log(`\nKB import complete: ${imported} imported out of ${total}, ${failed} failed`)
}

async function main() {
  console.log('=== Voxta Docs Import Script ===\n')
  console.log(`API URL: ${PAYLOAD_API_URL}`)
  console.log(`Repo root: ${REPO_ROOT}`)

  try {
    const token = await login()

    await importDocsPages(token)
    await importKBArticles(token)

    console.log('\n=== Import Complete ===')
  } catch (error) {
    console.error('Import failed:', error)
    process.exit(1)
  }
}

main()
