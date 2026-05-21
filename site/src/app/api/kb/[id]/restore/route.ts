import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

interface RouteContext {
  params: Promise<{ id: string }>
}

interface RestoreRequest {
  versionId: string
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { id } = await context.params
  const articleId = parseInt(id, 10)

  if (isNaN(articleId)) {
    return NextResponse.json({ error: 'Invalid article ID' }, { status: 400 })
  }

  // Check if user is logged in
  const userCookie = request.cookies.get('discord_user')
  if (!userCookie) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  let user: { id: number; discordId: string; username: string; displayName: string; isGuildMember?: boolean; isAdmin?: boolean }
  try {
    user = JSON.parse(userCookie.value)
  } catch {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  // Only guild members can restore versions (admins can bypass)
  if (!user.isGuildMember && !user.isAdmin) {
    return NextResponse.json({ error: 'Guild membership required' }, { status: 403 })
  }

  const body = await request.json() as RestoreRequest
  const { versionId } = body

  if (!versionId) {
    return NextResponse.json({ error: 'Version ID required' }, { status: 400 })
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Restore the version
    await payload.restoreVersion({
      collection: 'kb-articles',
      id: versionId,
    })

    // Update the article with who restored it
    const now = new Date().toISOString()

    // Get user's display preference
    let editorName = user.username
    try {
      const discordUser = await payload.findByID({
        collection: 'discord-users',
        id: user.id,
      })
      if (discordUser) {
        const displayPref = (discordUser as { displayPreference?: string }).displayPreference || 'username'
        editorName = displayPref === 'displayName' ? user.displayName : user.username
      }
    } catch {
      // Use username as fallback
    }

    await payload.update({
      collection: 'kb-articles',
      id: articleId,
      data: {
        lastEditedByName: editorName,
        lastEditedByDiscordId: user.discordId,
        lastEditedAt: now,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Restore error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: `Failed to restore: ${errorMessage}` }, { status: 500 })
  }
}
