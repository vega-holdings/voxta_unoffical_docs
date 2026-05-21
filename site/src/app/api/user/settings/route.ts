import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

interface SettingsRequest {
  displayPreference: 'username' | 'displayName'
}

export async function POST(request: NextRequest) {
  const userCookie = request.cookies.get('discord_user')
  if (!userCookie) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  let user: { id: number }
  try {
    user = JSON.parse(userCookie.value)
  } catch {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  const body = await request.json() as SettingsRequest
  const { displayPreference } = body

  if (!displayPreference || !['username', 'displayName'].includes(displayPreference)) {
    return NextResponse.json({ error: 'Invalid preference' }, { status: 400 })
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    await payload.update({
      collection: 'discord-users',
      id: user.id,
      data: {
        displayPreference,
      } as Record<string, unknown>,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Settings update error:', error)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
