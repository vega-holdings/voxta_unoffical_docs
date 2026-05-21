'use client'

import React, { useState, useCallback } from 'react'

interface SearchResult {
  id: string
  score: number
  title: string
  slug: string
  collection: string
  category?: string
  type?: string
  url: string
}

interface SearchResponse {
  query: string
  count: number
  results: SearchResult[]
}

export function SearchForm() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim() || query.length < 2) return

    setIsSearching(true)
    setError(null)
    setHasSearched(true)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=10`)
      if (!response.ok) {
        throw new Error('Search failed')
      }
      const data: SearchResponse = await response.json()
      setResults(data.results)
    } catch (_err) {
      setError('Search is currently unavailable. Please try again later.')
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }, [query])

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          className="search-input"
          minLength={2}
        />
        <button type="submit" disabled={isSearching || query.length < 2} className="search-button">
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className="search-error">{error}</p>}

      {hasSearched && !isSearching && results.length === 0 && !error && (
        <p className="search-no-results">No results found for &quot;{query}&quot;</p>
      )}

      {results.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          <ul className="results-list">
            {results.map((result) => (
              <li key={result.id} className="result-item">
                <a href={result.url}>
                  <span className="result-title">{result.title}</span>
                  <span className="result-meta">
                    <span className={`result-collection ${result.collection}`}>
                      {result.collection === 'docs-pages' ? 'Docs' : 'KB'}
                    </span>
                    {result.category && <span className="result-category">{result.category}</span>}
                    {result.type && <span className="result-type">{result.type}</span>}
                    <span className="result-score">{Math.round(result.score * 100)}% match</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
