import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NewDocForm } from './NewDocForm'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return {
    title: 'New Documentation Page - Voxta Unofficial Docs',
    description: 'Create a new documentation page',
  }
}

interface UserCookie {
  id: number
  discordId: string
  username: string
  displayName: string
  isGuildMember?: boolean
}

export default async function NewDocPage() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('discord_user')

  if (!userCookie) {
    redirect('/docs?error=login_required')
  }

  let user: UserCookie
  try {
    user = JSON.parse(userCookie.value)
  } catch {
    redirect('/docs?error=invalid_session')
  }

  if (!user.isGuildMember) {
    return (
      <div className="docs-new-page">
        <Link href="/docs" className="back-link">&larr; Back to Documentation</Link>
        <h1>Create New Documentation Page</h1>
        <div className="error-message">
          <p>You must be a member of the Voxta Discord server to create documentation.</p>
          <p>
            <a href="https://discord.gg/voxta" target="_blank" rel="noopener noreferrer">
              Join the Voxta Discord
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="docs-new-page">
      <Link href="/docs" className="back-link">&larr; Back to Documentation</Link>
      <h1>Create New Documentation Page</h1>
      <p className="page-description">
        Add new documentation to help the Voxta community. Write your content using Markdown.
      </p>
      <NewDocForm />
    </div>
  )
}
