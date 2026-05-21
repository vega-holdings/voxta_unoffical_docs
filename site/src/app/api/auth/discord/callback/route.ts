import { NextRequest, NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'

interface DiscordUser {
  id: string
  username: string
  global_name?: string
  avatar?: string
}

interface DiscordTokens {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
}

interface D1User {
  id: number
  discord_id: string
  username: string
  display_name: string
  avatar: string | null
  is_guild_member: number | null
  is_admin: number | null
}

interface DiscordGuild {
  id: string
  name: string
}

const VOXTA_GUILD_ID = '1125594592180445284'

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(new URL('/?error=no_code', request.url))
  }

  const clientId = process.env.DISCORD_CLIENT_ID
  const clientSecret = process.env.DISCORD_CLIENT_SECRET
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL || 'https://voxta.axailotl.ai'}/api/auth/discord/callback`

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(new URL('/?error=not_configured', request.url))
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
      return NextResponse.redirect(new URL('/?error=token_failed', request.url))
    }

    const tokens: DiscordTokens = await tokenResponse.json()

    // Get Discord user info
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    })

    if (!userResponse.ok) {
      return NextResponse.redirect(new URL('/?error=user_failed', request.url))
    }

    const discordUser: DiscordUser = await userResponse.json()
    const avatarUrl = discordUser.avatar
      ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
      : null
    const displayName = discordUser.global_name || discordUser.username
    const now = new Date().toISOString()

    // Check guild membership
    let isGuildMember = false
    try {
      const guildsResponse = await fetch('https://discord.com/api/users/@me/guilds', {
        headers: { Authorization: `Bearer ${tokens.access_token}` },
      })

      if (guildsResponse.ok) {
        const guilds: DiscordGuild[] = await guildsResponse.json()
        isGuildMember = guilds.some(g => g.id === VOXTA_GUILD_ID)
      } else {
        console.error('[Auth] Failed to fetch guilds:', guildsResponse.status)
      }
    } catch (e) {
      console.error('[Auth] Guild check error:', e)
    }

    // Use D1 directly instead of Payload (edge compatible)
    const { env } = await getCloudflareContext()
    const db = env.D1

    // Check if user exists
    const existing = await db.prepare(
      'SELECT id, discord_id, username, display_name, avatar, is_admin FROM discord_users WHERE discord_id = ?'
    ).bind(discordUser.id).first<D1User>()

    let userId: number

    if (existing) {
      // Update existing user
      await db.prepare(
        'UPDATE discord_users SET username = ?, display_name = ?, avatar = ?, is_guild_member = ?, last_login = ?, updated_at = ? WHERE id = ?'
      ).bind(discordUser.username, displayName, avatarUrl, isGuildMember ? 1 : 0, now, now, existing.id).run()
      userId = existing.id
    } else {
      // Create new user
      const result = await db.prepare(
        'INSERT INTO discord_users (discord_id, username, display_name, avatar, is_guild_member, edit_count, last_login, created_at, updated_at) VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?)'
      ).bind(discordUser.id, discordUser.username, displayName, avatarUrl, isGuildMember ? 1 : 0, now, now, now).run()
      userId = result.meta.last_row_id as number
    }

    // Auto-associate contributor name from scraper data
    try {
      // Check if this Discord user has a contributor mapping from the scraper
      const mapping = await db.prepare(
        'SELECT username, display_name FROM contributor_mappings WHERE discord_id = ?'
      ).bind(discordUser.id).first<{ username: string; display_name: string }>()

      if (mapping) {
        // Check if this contributor name is already claimed by anyone
        const alreadyClaimed = await db.prepare(
          'SELECT id FROM discord_users_claimed_contributor_names WHERE name = ?'
        ).bind(mapping.username).first()

        if (!alreadyClaimed) {
          // Get the max order for this user's claims
          const maxOrder = await db.prepare(
            'SELECT MAX(_order) as max_order FROM discord_users_claimed_contributor_names WHERE _parent_id = ?'
          ).bind(userId).first<{ max_order: number | null }>()

          const nextOrder = (maxOrder?.max_order ?? -1) + 1

          // Auto-claim the contributor name
          await db.prepare(
            'INSERT INTO discord_users_claimed_contributor_names (_order, _parent_id, id, name) VALUES (?, ?, ?, ?)'
          ).bind(nextOrder, userId, crypto.randomUUID(), mapping.username).run()

          console.log(`[Auth] Auto-claimed contributor name '${mapping.username}' for user ${discordUser.id}`)
        }
      }
    } catch (e) {
      // Non-fatal, continue with login
      console.error('[Auth] Auto-claim error:', e)
    }

    // Create session cookie
    const response = NextResponse.redirect(new URL('/leaderboard?login=success', request.url))

    // Check if user is admin
    const isAdmin = existing?.is_admin === 1

    response.cookies.set('discord_user', JSON.stringify({
      id: userId,
      discordId: discordUser.id,
      username: discordUser.username,
      displayName: displayName,
      avatar: avatarUrl,
      isGuildMember: isGuildMember,
      isAdmin: isAdmin,
    }), {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Discord auth error:', error)
    return NextResponse.redirect(new URL('/?error=auth_failed', request.url))
  }
}
