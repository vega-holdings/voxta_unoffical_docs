import { getCloudflareContext } from '@opennextjs/cloudflare'
import { NextResponse } from 'next/server'

interface VectorizeMatch {
  id: string
  score: number
  metadata?: {
    title?: string
    slug?: string
    collection?: string
    category?: string
    type?: string
  }
}

interface VectorizeQueryResult {
  matches: VectorizeMatch[]
  count: number
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 20)

  if (!query || query.length < 2) {
    return NextResponse.json(
      { error: 'Query parameter "q" is required and must be at least 2 characters' },
      { status: 400 }
    )
  }

  try {
    const { env } = await getCloudflareContext({ async: true })

    if (!env.AI || !env.VECTORIZE) {
      return NextResponse.json(
        { error: 'Search service not available' },
        { status: 503 }
      )
    }

    // Generate embedding for the search query
    const embeddingResult = await env.AI.run('@cf/baai/bge-small-en-v1.5', {
      text: [query],
    }) as { data: number[][] }

    if (!embeddingResult?.data?.[0]) {
      return NextResponse.json(
        { error: 'Failed to process search query' },
        { status: 500 }
      )
    }

    const queryEmbedding = embeddingResult.data[0]

    // Query Vectorize for similar documents
    const results: VectorizeQueryResult = await env.VECTORIZE.query(queryEmbedding, {
      topK: limit,
      returnMetadata: 'all',
    })

    // Format results
    const formattedResults = results.matches.map((match) => ({
      id: match.id,
      score: match.score,
      title: match.metadata?.title || 'Untitled',
      slug: match.metadata?.slug || '',
      collection: match.metadata?.collection || 'unknown',
      category: match.metadata?.category || '',
      type: match.metadata?.type || '',
      // Generate URL based on collection
      url: match.metadata?.collection === 'docs-pages'
        ? `/docs/${match.metadata?.slug}`
        : `/kb/${match.metadata?.slug}`,
    }))

    return NextResponse.json({
      query,
      count: formattedResults.length,
      results: formattedResults,
    })
  } catch (error) {
    console.error('[Search] Error:', error)
    return NextResponse.json(
      { error: 'Search failed' },
      { status: 500 }
    )
  }
}
