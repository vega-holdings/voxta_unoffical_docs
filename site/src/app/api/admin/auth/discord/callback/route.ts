import { NextRequest, NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { getPayload } from 'payload'
import config from '@/payload.config'
import crypto from 'crypto'

interface DiscordUser {
  id: string
  username: string
  global_name?: string
  avatar?: string
  email?: string
}

interface DiscordTokens {
  access_token: string
  token_type: string
}

interface D1AdminUser {
  id: number
  discord_id: string
  username: string
  display_name: string
  is_admin: number | null
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')
  const adminUrl = new URL('/admin', request.url)

  if (!code) {
    return NextResponse.redirect(new URL('/admin/login?error=no_code', request.url))
  }

  const clientId = process.env.DISCORD_CLIENT_ID
  const clientSecret = process.env.DISCORD_CLIENT_SECRET
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL || 'https://voxta.axailotl.ai'}/api/admin/auth/discord/callback`

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(new URL('/admin/login?error=not_configured', request.url))
  }

  try {
    // Exchange code for token
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
    })

    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', await tokenResponse.text())
      return NextResponse.redirect(new URL('/admin/login?error=token_failed', request.url))
    }

    const tokens: DiscordTokens = await tokenResponse.json()

    // Get Discord user info
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    })

    if (!userResponse.ok) {
      return NextResponse.redirect(new URL('/admin/login?error=user_failed', request.url))
    }

    const discordUser: DiscordUser = await userResponse.json()

    // Check if user is admin in discord_users table
    const { env } = await getCloudflareContext()
    const db = env.D1

    const adminCheck = await db.prepare(
      'SELECT id, discord_id, username, display_name, is_admin FROM discord_users WHERE discord_id = ? AND is_admin = 1'
    ).bind(discordUser.id).first<D1AdminUser>()

    if (!adminCheck) {
      console.log(`[Admin Auth] User ${discordUser.id} (${discordUser.username}) is not an admin`)
      return NextResponse.redirect(new URL('/admin/login?error=not_admin', request.url))
    }

    console.log(`[Admin Auth] Admin user ${discordUser.username} logging in`)

    // Get or create PayloadCMS user
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const email = `${discordUser.id}@discord.oauth`

    // Check if user exists in PayloadCMS
    const existingUsers = await payload.find({
      collection: 'users',
      where: { email: { equals: email } },
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      // Create new PayloadCMS user with a derived password
      const oauthSecret = process.env.PAYLOAD_SECRET || 'default-secret'
      const derivedPassword = crypto
        .createHash('sha256')
        .update(`${discordUser.id}:${oauthSecret}`)
        .digest('hex')
        .slice(0, 32)

      await payload.create({
        collection: 'users',
        data: {
          email,
          password: derivedPassword,
        },
      })
    }

    // Login the user - derive the same password
    const oauthSecret = process.env.PAYLOAD_SECRET || 'default-secret'
    const derivedPassword = crypto
      .createHash('sha256')
      .update(`${discordUser.id}:${oauthSecret}`)
      .digest('hex')
      .slice(0, 32)

    const loginResult = await payload.login({
      collection: 'users',
      data: {
        email,
        password: derivedPassword,
      },
    })

    if (!loginResult.token) {
      return NextResponse.redirect(new URL('/admin/login?error=login_failed', request.url))
    }

    // Set the payload-token cookie
    const response = NextResponse.redirect(adminUrl)

    response.cookies.set('payload-token', loginResult.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('Admin Discord auth error:', error)
    return NextResponse.redirect(new URL('/admin/login?error=auth_failed', request.url))
  }
}
