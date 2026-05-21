'use client'

import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Transform official Voxta doc URLs to local paths
function transformUrl(href: string): { url: string; isExternal: boolean } {
  if (!href) return { url: href, isExternal: false }

  // Match official Voxta docs URLs
  const docsMatch = href.match(/^https?:\/\/doc\.voxta\.ai\/docs\/([^/]+)\/?(.*)$/)
  if (docsMatch) {
    const slug = docsMatch[1]
    const rest = docsMatch[2] || ''
    // Handle anchors
    const anchor = rest.startsWith('#') ? rest : rest.includes('#') ? '#' + rest.split('#')[1] : ''
    return { url: `/docs/${slug}${anchor}`, isExternal: false }
  }

  // External links
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return { url: href, isExternal: true }
  }

  // Relative links - keep as-is
  return { url: href, isExternal: false }
}

interface MarkdownLinkProps {
  href?: string
  children?: React.ReactNode
}

function MarkdownLink({ href, children }: MarkdownLinkProps) {
  const { url, isExternal } = transformUrl(href || '')

  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return <Link href={url}>{children}</Link>
}

interface MarkdownTableProps {
  children?: React.ReactNode
}

function MarkdownTable({ children }: MarkdownTableProps) {
  return (
    <div className="table-wrapper">
      <table>{children}</table>
    </div>
  )
}

interface MarkdownContentProps {
  content: string
  stripTitle?: boolean
}

export function MarkdownContent({ content, stripTitle = true }: MarkdownContentProps) {
  // Strip the first heading if requested (to avoid duplicate titles)
  const processedContent = stripTitle
    ? content.replace(/^#\s+.+\n+/, '')
    : content

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: MarkdownLink,
        table: MarkdownTable,
      }}
    >
      {processedContent}
    </ReactMarkdown>
  )
}
