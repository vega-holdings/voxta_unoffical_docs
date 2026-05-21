import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params
  const docId = parseInt(id, 10)

  if (isNaN(docId)) {
    return NextResponse.json({ error: 'Invalid document ID' }, { status: 400 })
  }

  // Check if user is logged in
  const userCookie = request.cookies.get('discord_user')
  if (!userCookie) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  let user: { isGuildMember?: boolean; isAdmin?: boolean }
  try {
    user = JSON.parse(userCookie.value)
  } catch {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  // Only guild members can view version history (admins can bypass)
  if (!user.isGuildMember && !user.isAdmin) {
    return NextResponse.json({ error: 'Guild membership required' }, { status: 403 })
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Fetch versions for this doc
    const versions = await payload.findVersions({
      collection: 'docs-pages',
      where: {
        parent: { equals: docId },
      },
      sort: '-updatedAt',
      limit: 25,
    })

    // Map to simplified version info
    const versionList = versions.docs.map((v) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const version = v.version as any
      return {
        id: v.id,
        updatedAt: v.updatedAt,
        version: v.version,
        title: version?.title || 'Untitled',
        lastEditedByName: version?.lastEditedByName || 'Unknown',
      }
    })

    return NextResponse.json({ versions: versionList })
  } catch (error) {
    console.error('Versions fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch versions' }, { status: 500 })
  }
}
