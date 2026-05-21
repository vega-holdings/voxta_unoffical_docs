import React from 'react'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { cookies } from 'next/headers'
import { EditDocForm } from './EditDocForm'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  return {
    title: `Edit: ${slug} - Voxta Docs`,
  }
}

export default async function EditDocPage({ params }: PageProps) {
  const { slug } = await params

  // Check if user is logged in
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('discord_user')
  if (!userCookie) {
    redirect(`/docs/${slug}?error=login_required`)
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'docs-pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })

  const doc = result.docs[0] as typeof result.docs[0] & {
    attachments?: Array<{
      id?: string
      file: number | { id: number; filename: string; url: string }
      label?: string
    }>
  }
  if (!doc) notFound()

  return (
    <div className="docs-edit-page">
      <Link href={`/docs/${slug}`} className="back-link">&larr; Back to Document</Link>

      <h1>Edit: {doc.title}</h1>

      <EditDocForm
        docId={doc.id}
        slug={slug}
        initialTitle={doc.title}
        initialContent={doc.content || ''}
        initialAttachments={doc.attachments}
      />
    </div>
  )
}
