'use client'

import Link from 'next/link'

interface EditButtonProps {
  slug: string
}

export function EditButton({ slug }: EditButtonProps) {
  return (
    <Link href={`/docs/${slug}/edit`} className="edit-button">
      Edit
    </Link>
  )
}
