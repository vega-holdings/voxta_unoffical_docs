'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface User {
  id: number
  discordId: string
  username: string
  displayName: string
  avatar?: string
}

export function DiscordLogin() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/me')
        const data = await res.json() as { user: User | null }
        setUser(data.user)
      } catch {
        // Not logged in
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) {
    return <span className="discord-login-loading">...</span>
  }

  if (user) {
    return (
      <div className="discord-user">
        <a href="/account" className="discord-user-link">
          {user.avatar && <Image src={user.avatar} alt="" width={24} height={24} className="discord-avatar" unoptimized />}
          <span className="discord-name">{user.displayName}</span>
        </a>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/api/auth/logout" className="discord-logout">Logout</a>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href="/api/auth/discord" className="discord-login-btn">
      Login with Discord
    </a>
  )
}
