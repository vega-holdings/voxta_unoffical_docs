'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'

interface SearchResult {
  id: string
  score: number
  title: string
  slug: string
  collection: string
  url: string
}

export function HeaderSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = useCallback(async (value: string) => {
    setQuery(value)
    if (value.length < 2) {
      setResults([])
      setShowResults(false)
      return
    }

    setIsSearching(true)
    setShowResults(true)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(value)}&limit=5`)
      if (response.ok) {
        const data: { results: SearchResult[] } = await response.json()
        setResults(data.results)
      }
    } catch {
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }, [])

  return (
    <div className="header-search" ref={containerRef}>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => query.length >= 2 && setShowResults(true)}
        placeholder="Search..."
        className="header-search-input"
      />
      {showResults && (
        <div className="header-search-results">
          {isSearching && <div className="header-search-loading">Searching...</div>}
          {!isSearching && results.length === 0 && query.length >= 2 && (
            <div className="header-search-empty">No results</div>
          )}
          {results.map((result) => (
            <a
              key={result.id}
              href={result.url}
              className="header-search-item"
              onClick={() => setShowResults(false)}
            >
              <span className="header-search-title">{result.title}</span>
              <span className={`header-search-badge ${result.collection}`}>
                {result.collection === 'docs-pages' ? 'Doc' : 'KB'}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
