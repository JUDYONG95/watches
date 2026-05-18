'use client'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Heart, List } from 'lucide-react'

interface HeaderProps {
  wishlistCount: number
  onWishlistClick: () => void
}

export function Header({ wishlistCount, onWishlistClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-16 xl:px-24">
        <a href="/" className="font-serif text-lg text-foreground tracking-tight">
          Watch Wishlist
        </a>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onWishlistClick} className="relative">
            <List className="h-4 w-4" />
            <span className="hidden sm:inline">My Wishlist</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground">
                {wishlistCount}
              </span>
            )}
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
