import React from 'react'
import Link from 'next/link'
import { HeaderSearch } from './components/HeaderSearch'
import { DiscordLogin } from './components/DiscordLogin'
import './styles.css'

export const metadata = {
  title: 'Voxta Unofficial Documentation',
  description: 'Unofficial community documentation for Voxta AI conversation platform with semantic search.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav>
            <Link href="/" className="logo">Voxta Unofficial Docs</Link>
            <HeaderSearch />
            <div className="nav-links">
              <Link href="/docs">Docs</Link>
              <Link href="/docs/developers">Developers</Link>
              <Link href="/docs/creators">Creators</Link>
              <Link href="/kb">KB</Link>
              <Link href="/leaderboard">Leaderboard</Link>
              <a href="https://voxta.ai" target="_blank" rel="noopener noreferrer">Official Site</a>
              <DiscordLogin />
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>
            Unofficial community documentation for <a href="https://voxta.ai" target="_blank" rel="noopener noreferrer">Voxta</a>.
            Not affiliated with Voxta AI.
          </p>
        </footer>
      </body>
    </html>
  )
}
