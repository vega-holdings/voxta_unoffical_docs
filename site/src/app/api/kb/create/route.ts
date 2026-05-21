import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

interface AttachmentInput {
  file: number
  label?: string
}

interface CreateRequest {
  title: string
  content: string
  category?: string
  type?: string
  attachments?: AttachmentInput[]
}

interface UserCookie {
  id: number
  discordId: string
  username: string
  displayName: string
  isGuildMember?: boolean
  isAdmin?: boolean
}

export async function POST(request: NextRequest) {
  // Get current user from cookie
  const userCookie = request.cookies.get('discord_user')
  if (!userCookie) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  let user: UserCookie
  try {
    user = JSON.parse(userCookie.value)
  } catch {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  // Check guild membership (admins can bypass)
  if (!user.isGuildMember && !user.isAdmin) {
    return NextResponse.json(
      { error: 'You must be a member of the Voxta Discord server to create articles' },
      { status: 403 }
    )
  }

  const body = await request.json() as CreateRequest
  const { title, content, category, type, attachments } = body

  if (!title || !content) {
    return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
  }

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 100)

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Check if slug already exists
    const existing = await payload.find({
      collection: 'kb-articles',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      return NextResponse.json({ error: 'An article with this title already exists' }, { status: 400 })
    }

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

    const now = new Date().toISOString()

    // Create the article - cast to bypass type checking for new fields
    const articleData: Record<string, unknown> = {
      title,
      slug,
      content,
      category: category || 'configuration',
      type: type || 'qa',
      confidence: 0.8,
      contributor: editorName,
      lastEditedByName: editorName,
      lastEditedByDiscordId: user.discordId,
      lastEditedAt: now,
    }

    // Add attachments if provided
    if (attachments && attachments.length > 0) {
      articleData.attachments = attachments
    }

    const article = await payload.create({
      collection: 'kb-articles',
      draft: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: articleData as any,
    })

    return NextResponse.json({ success: true, slug: article.slug })
  } catch (error) {
    console.error('Create error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: `Failed to create: ${errorMessage}` }, { status: 500 })
  }
}
