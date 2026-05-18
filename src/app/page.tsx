'use client'

import { useState } from 'react'
import { Hero } from '@/components/hero'
import { Header } from '@/components/header'
import { WatchCard } from '@/components/watch-card'
import { Footer } from '@/components/footer'
import { WishlistPanel } from '@/components/wishlist-panel'
import { useWishlist } from '@/hooks/use-wishlist'
import { watches } from '@/data/watches'

export default function HomePage() {
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const { entries } = useWishlist()

  return (
    <>
      <Header wishlistCount={entries.length} onWishlistClick={() => setWishlistOpen(true)} />

      <main className="min-h-screen">
        <Hero />

        <section className="px-6 pb-16 lg:px-16 xl:px-24">
          {watches.map((watch, index) => (
            <WatchCard key={watch.id} watch={watch} index={index + 1} />
          ))}
        </section>

        <Footer />
      </main>

      <WishlistPanel open={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    </>
  )
}
