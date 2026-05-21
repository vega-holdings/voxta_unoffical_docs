'use client'

import { useState, useEffect } from 'react'

interface FavoriteButtonProps {
  type: 'kb' | 'docs'
  id: number
}

export function FavoriteButton({ type, id }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if favorited
    fetch('/api/favorites')
      .then(res => {
        if (res.status === 401) {
          setIsLoggedIn(false)
          setIsLoading(false)
          return null
        }
        setIsLoggedIn(true)
        return res.json()
      })
      .then((data: { favoriteKBArticles?: Array<{ id: number } | number>; favoriteDocsPages?: Array<{ id: number } | number> } | null) => {
        if (!data) return
        const favorites = type === 'kb' ? data.favoriteKBArticles : data.favoriteDocsPages
        const ids = (favorites || []).map((f: { id: number } | number) =>
          typeof f === 'object' ? f.id : f
        )
        setIsFavorited(ids.includes(id))
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [type, id])

  const toggleFavorite = async () => {
    if (!isLoggedIn) return

    setIsLoading(true)
    try {
      const method = isFavorited ? 'DELETE' : 'POST'
      const res = await fetch('/api/favorites', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id }),
      })

      if (res.ok) {
        setIsFavorited(!isFavorited)
      }
    } catch (error) {
      console.error('Failed to toggle favorite:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <button
      onClick={toggleFavorite}
      disabled={isLoading}
      className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
      title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorited ? '★' : '☆'}
    </button>
  )
}
