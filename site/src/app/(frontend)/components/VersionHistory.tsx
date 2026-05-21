'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface Version {
  id: string
  updatedAt: string
  title: string
  lastEditedByName: string
}

interface VersionHistoryProps {
  type: 'kb' | 'docs'
  id: number
}

export function VersionHistory({ type, id }: VersionHistoryProps) {
  const [versions, setVersions] = useState<Version[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [restoring, setRestoring] = useState<string | null>(null)
  const router = useRouter()

  const fetchVersions = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/${type}/${id}/versions`)
      const data = await res.json() as { versions?: Version[]; error?: string }

      if (!res.ok) {
        setError(data.error || 'Failed to fetch versions')
        return
      }

      setVersions(data.versions || [])
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }, [type, id])

  useEffect(() => {
    if (expanded && versions.length === 0) {
      fetchVersions()
    }
  }, [expanded, fetchVersions, versions.length])

  const handleRestore = async (versionId: string) => {
    if (!confirm('Are you sure you want to restore this version? The current content will be replaced.')) {
      return
    }

    setRestoring(versionId)
    try {
      const res = await fetch(`/api/${type}/${id}/restore`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ versionId }),
      })

      const data = await res.json() as { success?: boolean; error?: string }

      if (!res.ok) {
        alert(data.error || 'Failed to restore version')
        return
      }

      router.refresh()
      setExpanded(false)
    } catch {
      alert('Network error')
    } finally {
      setRestoring(null)
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleString()
  }

  return (
    <div className="version-history">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="version-history-toggle"
      >
        {expanded ? 'Hide Version History' : 'Show Version History'}
      </button>

      {expanded && (
        <div className="version-history-content">
          {loading && <p className="loading">Loading versions...</p>}

          {error && <p className="error">{error}</p>}

          {!loading && !error && versions.length === 0 && (
            <p className="no-versions">No previous versions available.</p>
          )}

          {!loading && versions.length > 0 && (
            <ul className="version-list">
              {versions.map((version, index) => (
                <li key={version.id} className="version-item">
                  <div className="version-info">
                    <span className="version-date">{formatDate(version.updatedAt)}</span>
                    <span className="version-editor">by {version.lastEditedByName}</span>
                    {index === 0 && <span className="version-current">(current)</span>}
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRestore(version.id)}
                      disabled={restoring === version.id}
                      className="restore-button"
                    >
                      {restoring === version.id ? 'Restoring...' : 'Restore'}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
