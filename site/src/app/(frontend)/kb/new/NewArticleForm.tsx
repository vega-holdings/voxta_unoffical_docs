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
  { label: 'Configuration', value: 'configuration' },
  { label: 'Troubleshooting', value: 'troubleshooting' },
  { label: 'Integrations', value: 'integrations' },
  { label: 'Setup', value: 'setup' },
  { label: 'Scripting', value: 'scripting' },
  { label: 'LLM', value: 'llm' },
  { label: 'Performance', value: 'performance' },
  { label: 'Characters', value: 'characters' },
  { label: 'Scenarios', value: 'scenarios' },
  { label: 'Chat', value: 'chat' },
  { label: 'Events', value: 'events' },
  { label: 'Flags', value: 'flags' },
]

const types = [
  { label: 'Q&A', value: 'qa' },
  { label: 'Troubleshooting', value: 'troubleshooting' },
  { label: 'Tip', value: 'tip' },
  { label: 'Reference', value: 'reference' },
]

export function NewArticleForm() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('configuration')
  const [type, setType] = useState('qa')
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
      const res = await fetch('/api/kb/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          category,
          type,
          attachments: attachments.map(a => ({ file: a.id, label: a.label })),
        }),
      })

      const data = await res.json() as { error?: string; slug?: string }

      if (!res.ok) {
        setError(data.error || 'Failed to create article')
        return
      }

      router.push(`/kb/${data.slug}`)
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
          placeholder="Enter article title..."
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
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {types.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
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

      <div className="form-actions">
        <button type="submit" disabled={isSubmitting || isUploading} className="save-button">
          {isSubmitting ? 'Creating...' : 'Create Article'}
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
