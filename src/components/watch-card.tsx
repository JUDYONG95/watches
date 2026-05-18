'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useWishlist } from '@/hooks/use-wishlist'
import type { Watch } from '@/types/watch'

interface WatchCardProps {
  watch: Watch
  index: number
}

export function WatchCard({ watch, index }: WatchCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { isInWishlist, toggleWishlist } = useWishlist()
  const inWishlist = isInWishlist(watch.id)

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-8 border-b border-border py-12 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        <div className="hidden w-16 shrink-0 lg:block">
          <span className="font-serif text-6xl text-muted-foreground/20">
            {String(index).padStart(2, '0')}
          </span>
        </div>

        <div className="relative h-[400px] w-full shrink-0 overflow-hidden bg-card lg:h-[500px] lg:w-[400px]">
          <Image
            src={watch.imageSrc}
            alt={`${watch.brand} ${watch.name}`}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-4 flex items-center justify-between lg:mb-6">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {watch.brand}
            </span>
            <span className="text-xs text-muted-foreground">
              Est. {watch.year}
            </span>
          </div>

          <h2 className="font-serif text-4xl text-foreground lg:text-6xl xl:text-7xl">
            {watch.name}
          </h2>

          <p className="mt-4 max-w-xl text-sm italic text-muted-foreground lg:mt-6">
            {watch.notableFor}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:mt-6 lg:text-lg">
            {watch.description}
          </p>

          <div className="mt-6 flex items-center gap-6 lg:mt-8">
            <button
              onClick={() => toggleWishlist(watch.id)}
              className={`flex items-center gap-2 text-sm tracking-wide transition-colors ${
                inWishlist
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart
                className={`h-4 w-4 transition-all ${
                  inWishlist ? 'fill-accent scale-110' : ''
                }`}
              />
              {inWishlist ? 'In My Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
