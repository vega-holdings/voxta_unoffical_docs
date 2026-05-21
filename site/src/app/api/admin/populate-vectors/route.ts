import { getCloudflareContext } from '@opennextjs/cloudflare'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'
import config from '@/payload.config'

export async function POST(request: Request) {
  const authHeader = request.headers.get('x-admin-secret')
  if (authHeader !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const collection = searchParams.get('collection') || 'all'
  const batchSize = Math.min(parseInt(searchParams.get('batch') || '50'), 100)
  const page = parseInt(searchParams.get('page') || '1')

  try {
    const { env } = await getCloudflareContext({ async: true })

    if (!env.AI || !env.VECTORIZE) {
      return NextResponse.json({ error: 'AI or Vectorize not available' }, { status: 503 })
    }

    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const results = { processed: 0, errors: [] as string[], hasMore: false }

    const processCollection = async (collectionSlug: 'docs-pages' | 'kb-articles') => {
      const data = await payload.find({
        collection: collectionSlug,
        limit: batchSize,
        page,
      })

      results.hasMore = data.hasNextPage

      for (const doc of data.docs) {
        try {
          const text = `${doc.title}\n${doc.content || ''}`.slice(0, 8000)
          const embeddingResult = await env.AI.run('@cf/baai/bge-small-en-v1.5', {
            text: [text],
          }) as { data: number[][] }

          if (embeddingResult?.data?.[0]) {
            const prefix = collectionSlug === 'docs-pages' ? 'docs' : 'kb'
            await env.VECTORIZE.upsert([{
              id: `${prefix}-${doc.id}`,
              values: embeddingResult.data[0],
              metadata: {
                title: doc.title,
                slug: doc.slug,
                collection: collectionSlug,
                category: doc.category || '',
                type: 'type' in doc ? doc.type || '' : '',
              }
            }])
            results.processed++
          }
        } catch (e) {
          results.errors.push(`${doc.id}: ${e instanceof Error ? e.message : String(e)}`)
        }
      }
    }

    if (collection === 'all' || collection === 'docs') {
      await processCollection('docs-pages')
    }
    if (collection === 'all' || collection === 'kb') {
      await processCollection('kb-articles')
    }

    return NextResponse.json({
      success: true,
      page,
      batchSize,
      processed: results.processed,
      hasMore: results.hasMore,
      nextPage: results.hasMore ? page + 1 : null,
      errors: results.errors.slice(0, 5),
    })
  } catch (error) {
    console.error('[PopulateVectors] Error:', error)
    return NextResponse.json(
      { error: 'Failed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
