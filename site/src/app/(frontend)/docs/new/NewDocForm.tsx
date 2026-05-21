'use client'

import { useState, useRef, lazy, Suspense } from 'react'
import { useRouter } from 'next/navigation'

const MilkdownEditor = lazy(() => import('@/components/MilkdownEditor').then(m => ({ default: m.MilkdownEditor })))

interface UploadedFile {
  id: number
  filename: string
  url: string
  label: string
}

const categories = [
  { label: 'Documentation', value: 'documentation' },
  { label: 'Installing', value: 'installing' },
  { label: 'Interface', value: 'interface' },
  { label: 'Modules', value: 'modules' },
  { label: 'Developers', value: 'developers' },
  { label: 'Creators', value: 'creators' },
]

export function NewDocForm() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('documentation')
  const [sortOrder, setSortOrder] = useState(100)
  const [attachments, setAttachments] = useState<UploadedFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    setError(null)

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        const data = await res.json() as { error?: string; media?: { id: number; filename: string; url: string } }

        if (!res.ok) {
          setError(data.error || 'Upload failed')
          continue
        }

        if (data.media) {
          setAttachments(prev => [...prev, {
            id: data.media!.id,
            filename: data.media!.filename,
            url: data.media!.url,
            label: file.name,
          }])
        }
      }
    } catch {
      setError('Upload failed')
    } finally {
      setIsUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const removeAttachment = (id: number) => {
    setAttachments(prev => prev.filter(a => a.id !== id))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/docs/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          category,
          sortOrder,
          attachments: attachments.map(a => ({ file: a.id, label: a.label })),
        }),
      })

      const data = await res.json() as { error?: string; slug?: string }

      if (!res.ok) {
        setError(data.error || 'Failed to create documentation')
        return
      }

      router.push(`/docs/${data.slug}`)
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="kb-edit-form">
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter page title..."
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sortOrder">Sort Order</label>
          <input
            id="sortOrder"
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(parseInt(e.target.value) || 100)}
            min={0}
            max={9999}
          />
          <small>Lower values appear first within the category</small>
        </div>
      </div>

      <div className="form-group">
        <label>Content (Markdown)</label>
        <Suspense fallback={<div className="form-textarea" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading editor...</div>}>
          <MilkdownEditor
            value={content}
            onChange={setContent}
            placeholder="Write your documentation content in Markdown..."
          />
        </Suspense>
      </div>

      <div className="form-group">
        <label>Attachments (JSON, JS, MD files)</label>
        <div className="file-upload-area">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,.js,.md,.txt"
            multiple
            onChange={handleFileUpload}
            disabled={isUploading}
          />
          {isUploading && <span className="uploading-text">Uploading...</span>}
        </div>
        {attachments.length > 0 && (
          <ul className="attachment-list">
            {attachments.map(att => (
              <li key={att.id} className="attachment-item">
                <span>{att.label}</span>
                <button
                  type="button"
                  onClick={() => removeAttachment(att.id)}
                  className="remove-attachment"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" disabled={isSubmitting || isUploading} className="save-button">
          {isSubmitting ? 'Creating...' : 'Create Page'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="cancel-button"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
