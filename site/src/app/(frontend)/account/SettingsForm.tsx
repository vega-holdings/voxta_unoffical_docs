'use client'

import { useState } from 'react'

interface SettingsFormProps {
  currentPreference: string
  username: string
  displayName: string
}

export function SettingsForm({ currentPreference, username, displayName }: SettingsFormProps) {
  const [preference, setPreference] = useState(currentPreference)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const handleSave = async () => {
    setSaving(true)
    setMessage('')
    try {
      const res = await fetch('/api/user/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayPreference: preference }),
      })
      if (res.ok) {
        setMessage('Saved!')
        setTimeout(() => setMessage(''), 2000)
      } else {
        setMessage('Failed to save')
      }
    } catch {
      setMessage('Error saving')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="account-section">
      <h2>Settings</h2>
      <div className="setting-row">
        <label className="setting-label">Show my name as:</label>
        <div className="setting-options">
          <label className="setting-option">
            <input
              type="radio"
              name="displayPreference"
              value="username"
              checked={preference === 'username'}
              onChange={() => setPreference('username')}
            />
            <span>{username}</span>
          </label>
          <label className="setting-option">
            <input
              type="radio"
              name="displayPreference"
              value="displayName"
              checked={preference === 'displayName'}
              onChange={() => setPreference('displayName')}
            />
            <span>{displayName}</span>
          </label>
        </div>
      </div>
      <div className="setting-actions">
        <button
          onClick={handleSave}
          disabled={saving || preference === currentPreference}
          className="save-button"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
        {message && <span className="setting-message">{message}</span>}
      </div>
    </div>
  )
}
