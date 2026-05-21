import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NewArticleForm } from './NewArticleForm'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return {
    title: 'New KB Article - Voxta Unofficial Docs',
    description: 'Create a new knowledge base article',
  }
}

interface UserCookie {
  id: number
  discordId: string
  username: string
  displayName: string
  isGuildMember?: boolean
}

export default async function NewKBArticlePage() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('discord_user')

  if (!userCookie) {
    redirect('/kb?error=login_required')
  }

  let user: UserCookie
  try {
    user = JSON.parse(userCookie.value)
  } catch {
    redirect('/kb?error=invalid_session')
  }

  if (!user.isGuildMember) {
    return (
      <div className="kb-new-page">
        <Link href="/kb" className="back-link">&larr; Back to Knowledge Base</Link>
        <h1>Create New Article</h1>
        <div className="error-message">
          <p>You must be a member of the Voxta Discord server to create articles.</p>
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
    <div className="kb-new-page">
      <Link href="/kb" className="back-link">&larr; Back to Knowledge Base</Link>
      <h1>Create New Article</h1>
      <p className="page-description">
        Share your knowledge with the Voxta community. Write your article using Markdown.
      </p>
      <NewArticleForm />
    </div>
  )
}
