import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { getCloudflareContext } from '@opennextjs/cloudflare'

/**
 * Generate embedding and upsert to Vectorize on document save
 */
export const vectorizeAfterChange: CollectionAfterChangeHook = async ({
  doc,
  collection,
  operation,
}) => {
  // Skip during local development without Cloudflare bindings
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Vectorize] Skipping in dev mode: ${doc.title}`)
    return doc
  }

  try {
    const { env } = await getCloudflareContext({ async: true })

    if (!env.AI || !env.VECTORIZE) {
      console.warn('[Vectorize] AI or VECTORIZE binding not available')
      return doc
    }

    // Combine title and content for embedding
    const textToEmbed = `${doc.title}\n\n${doc.content || ''}`

    // Truncate to ~500 tokens (~2000 chars) for the embedding model
    const truncatedText = textToEmbed.slice(0, 2000)

    // Generate embedding using Workers AI
    const embeddingResult = await env.AI.run('@cf/baai/bge-small-en-v1.5', {
      text: [truncatedText],
    }) as { data: number[][] }

    if (!embeddingResult?.data?.[0]) {
      console.error('[Vectorize] Failed to generate embedding')
      return doc
    }

    const embedding = embeddingResult.data[0]

    // Prepare metadata for search results
    const metadata: Record<string, string> = {
      title: doc.title,
      slug: doc.slug,
      collection: collection.slug,
    }

    // Add optional fields
    if (doc.category) metadata.category = doc.category
    if (doc.type) metadata.type = doc.type

    // Upsert to Vectorize
    await env.VECTORIZE.upsert([
      {
        id: `${collection.slug}:${doc.id}`,
        values: embedding,
        metadata,
      },
    ])

    console.log(`[Vectorize] ${operation} embedding for: ${doc.title}`)
  } catch (error) {
    console.error('[Vectorize] Error:', error)
  }

  return doc
}

/**
 * Delete vector from Vectorize when document is deleted
 */
export const vectorizeAfterDelete: CollectionAfterDeleteHook = async ({
  doc,
  collection,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    return doc
  }

  try {
    const { env } = await getCloudflareContext({ async: true })

    if (!env.VECTORIZE) {
      return doc
    }

    await env.VECTORIZE.deleteByIds([`${collection.slug}:${doc.id}`])
    console.log(`[Vectorize] Deleted embedding for: ${doc.title}`)
  } catch (error) {
    console.error('[Vectorize] Delete error:', error)
  }

  return doc
}
