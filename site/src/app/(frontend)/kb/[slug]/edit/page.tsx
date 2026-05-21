import React from 'react'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { cookies } from 'next/headers'
import { EditForm } from './EditForm'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  return {
    title: `Edit: ${slug} - Voxta KB`,
  }
}

export default async function EditKBPage({ params }: PageProps) {
  const { slug } = await params

  // Check if user is logged in
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('discord_user')
  if (!userCookie) {
    redirect(`/kb/${slug}?error=login_required`)
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'kb-articles',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })

  const article = result.docs[0] as typeof result.docs[0] & {
    attachments?: Array<{
      id?: string
      file: number | { id: number; filename: string; url: string }
      label?: string
    }>
  }
  if (!article) notFound()

  return (
    <div className="kb-edit-page">
      <Link href={`/kb/${slug}`} className="back-link">&larr; Back to Article</Link>

      <h1>Edit: {article.title}</h1>

      <EditForm
        articleId={article.id}
        slug={slug}
        initialTitle={article.title}
        initialContent={article.content || ''}
        initialAttachments={article.attachments}
      />
    </div>
  )
}
