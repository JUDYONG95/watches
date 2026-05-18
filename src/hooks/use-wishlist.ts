'use client'

import { useState, useEffect, useCallback } from 'react'
import type { WishlistEntry } from '@/types/watch'

const STORAGE_KEY = 'watch-wishlist'

export function useWishlist() {
  const [entries, setEntries] = useState<WishlistEntry[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setEntries(JSON.parse(stored))
      } catch {}
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    }
  }, [entries, loaded])

  const isInWishlist = useCallback(
    (watchId: string) => entries.some((e) => e.watchId === watchId),
    [entries]
  )

  const toggleWishlist = useCallback((watchId: string) => {
    setEntries((prev) => {
      const existing = prev.find((e) => e.watchId === watchId)
      if (existing) {
        return prev.filter((e) => e.watchId !== watchId)
      }
      return [...prev, { watchId, addedAt: new Date().toISOString() }]
    })
  }, [])

  const clearWishlist = useCallback(() => {
    setEntries([])
  }, [])

  return { entries, loaded, isInWishlist, toggleWishlist, clearWishlist }
}
