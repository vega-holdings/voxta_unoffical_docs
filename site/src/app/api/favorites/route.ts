import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

interface FavoriteRequest {
  type: 'kb' | 'docs'
  id: number
}

interface UserCookie {
  id: number
  discordId: string
  username: string
  displayName: string
  isGuildMember?: boolean
}

// GET - Get user's favorites
export async function GET(request: NextRequest) {
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

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const discordUser = await payload.findByID({
      collection: 'discord-users',
      id: user.id,
      depth: 1,
    })

    if (!discordUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const userData = discordUser as unknown as Record<string, unknown>
    return NextResponse.json({
      favoriteKBArticles: userData.favoriteKBArticles || [],
      favoriteDocsPages: userData.favoriteDocsPages || [],
    })
  } catch (error) {
    console.error('Favorites fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch favorites' }, { status: 500 })
  }
}

// POST - Add favorite
export async function POST(request: NextRequest) {
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

  const body = await request.json() as FavoriteRequest
  const { type, id } = body

  if (!type || !id || !['kb', 'docs'].includes(type)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const discordUser = await payload.findByID({
      collection: 'discord-users',
      id: user.id,
    })

    if (!discordUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const userData = discordUser as unknown as Record<string, unknown>
    const fieldName = type === 'kb' ? 'favoriteKBArticles' : 'favoriteDocsPages'
    const currentFavorites = (userData[fieldName] as number[] | undefined) || []

    // Check if already favorited
    if (currentFavorites.includes(id)) {
      return NextResponse.json({ success: true, message: 'Already favorited' })
    }

    // Add to favorites
    await payload.update({
      collection: 'discord-users',
      id: user.id,
      data: {
        [fieldName]: [...currentFavorites, id],
      } as Record<string, unknown>,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Favorite add error:', error)
    return NextResponse.json({ error: 'Failed to add favorite' }, { status: 500 })
  }
}

// DELETE - Remove favorite
export async function DELETE(request: NextRequest) {
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

  const body = await request.json() as FavoriteRequest
  const { type, id } = body

  if (!type || !id || !['kb', 'docs'].includes(type)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const discordUser = await payload.findByID({
      collection: 'discord-users',
      id: user.id,
    })

    if (!discordUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const userData = discordUser as unknown as Record<string, unknown>
    const fieldName = type === 'kb' ? 'favoriteKBArticles' : 'favoriteDocsPages'
    const currentFavorites = (userData[fieldName] as number[] | undefined) || []

    // Remove from favorites
    const newFavorites = currentFavorites.filter(fav => fav !== id)

    await payload.update({
      collection: 'discord-users',
      id: user.id,
      data: {
        [fieldName]: newFavorites,
      } as Record<string, unknown>,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Favorite remove error:', error)
    return NextResponse.json({ error: 'Failed to remove favorite' }, { status: 500 })
  }
}
