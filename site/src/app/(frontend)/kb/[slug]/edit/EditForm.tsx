'use client'

import { useState, useRef, lazy, Suspense } from 'react'
import { useRouter } from 'next/navigation'

const MilkdownEditor = lazy(() => import('@/components/MilkdownEditor').then(m => ({ default: m.MilkdownEditor })))

interface Attachment {
  id?: string
  file: number | { id: number; filename: string; url: string }
  label?: string
}

interface UploadedFile {
  id: number
  filename: string
  url: string
  label: string
}

interface EditFormProps {
  articleId: number
  slug: string
  initialTitle: string
  initialContent: string
  initialAttachments?: Attachment[]
}

export function EditForm({ articleId, slug, initialTitle, initialContent, initialAttachments = [] }: EditFormProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)
  const [attachments, setAttachments] = useState<UploadedFile[]>(() => {
    return initialAttachments.map(att => {
      const file = typeof att.file === 'object' ? att.file : null
      return {
        id: file?.id || (typeof att.file === 'number' ? att.file : 0),
        filename: file?.filename || '',
        url: file?.url || '',
        label: att.label || file?.filename || '',
      }
    }).filter(att => att.id > 0)
  })
  const [saving, setSaving] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

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
    setSaving(true)
    setError(null)

    try {
      const res = await fetch('/api/kb/edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId,
          title,
          content,
          attachments: attachments.map(a => ({ file: a.id, label: a.label })),
        }),
      })

      const data = await res.json() as { success?: boolean; error?: string }

      if (!res.ok) {
        setError(data.error || 'Failed to save')
        return
      }

      router.push(`/kb/${slug}`)
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Content (Markdown)</label>
        <Suspense fallback={<div className="form-textarea" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading editor...</div>}>
          <MilkdownEditor
            value={content}
            onChange={setContent}
            placeholder="Write your article content in Markdown..."
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

      {error && <p className="form-error">{error}</p>}

      <div className="form-actions">
        <button type="submit" disabled={saving || isUploading} className="save-button">
          {saving ? 'Saving...' : 'Save Changes'}
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
