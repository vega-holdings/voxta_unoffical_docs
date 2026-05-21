import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

interface AttachmentInput {
  file: number
  label?: string
}

interface EditRequest {
  docId: number
  title: string
  content: string
  attachments?: AttachmentInput[]
}

export async function POST(request: NextRequest) {
  // Get current user from cookie
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

  // Check guild membership (admins can bypass)
  if (!user.isGuildMember && !user.isAdmin) {
    return NextResponse.json(
      { error: 'You must be a member of the Voxta Discord server to edit documentation' },
      { status: 403 }
    )
  }

  const body = await request.json() as EditRequest
  const { docId, title, content, attachments } = body

  if (!docId || !title || !content) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Verify the discord user exists
    let discordUser = null
    try {
      discordUser = await payload.findByID({
        collection: 'discord-users',
        id: user.id,
      })
    } catch (e) {
      console.log('User lookup failed:', e)
      // User not found in DB - continue without relationship
    }

    // Get current doc page
    let doc
    try {
      doc = await payload.findByID({
        collection: 'docs-pages',
        id: docId,
      })
    } catch (e) {
      console.error('Doc lookup error:', e)
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    if (!doc) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    const now = new Date().toISOString()

    // Get user's display preference (default to username for consistency with contributor field)
    const displayPref = (discordUser as { displayPreference?: string } | null)?.displayPreference || 'username'
    const editorName = displayPref === 'displayName' ? user.displayName : user.username

    // Build update data
    const updateData: Record<string, unknown> = {
      title,
      content,
      lastEditedByName: editorName,
      lastEditedByDiscordId: user.discordId,
      lastEditedAt: now,
    }

    // Add attachments if provided
    if (attachments !== undefined) {
      updateData.attachments = attachments
    }

    console.log('Updating doc:', docId, 'with data keys:', Object.keys(updateData))

    // Update doc
    try {
      await payload.update({
        collection: 'docs-pages',
        id: docId,
        data: updateData,
      })
    } catch (updateError) {
      console.error('Payload update error:', updateError)
      throw updateError
    }

    // Increment user's edit count if user exists
    if (discordUser) {
      try {
        await payload.update({
          collection: 'discord-users',
          id: user.id,
          data: {
            editCount: (discordUser.editCount || 0) + 1,
          },
        })
      } catch (userUpdateError) {
        console.error('User edit count update error:', userUpdateError)
        // Non-fatal, don't throw
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Edit error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: `Failed to save: ${errorMessage}` }, { status: 500 })
  }
}
