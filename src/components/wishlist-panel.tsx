'use client'

import { X, Trash2 } from 'lucide-react'
import { useWishlist } from '@/hooks/use-wishlist'
import { watches } from '@/data/watches'
import { Button } from '@/components/ui/button'

interface WishlistPanelProps {
  open: boolean
  onClose: () => void
}

export function WishlistPanel({ open, onClose }: WishlistPanelProps) {
  const { entries, toggleWishlist, clearWishlist } = useWishlist()
  const wishlistWatches = watches.filter((w) => entries.some((e) => e.watchId === w.id))

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md border-l border-border bg-background shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-serif text-xl text-foreground">
              My Wishlist ({wishlistWatches.length})
            </h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {wishlistWatches.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Your wishlist is empty. Browse the collection and add watches you desire.
              </p>
            ) : (
              <div className="space-y-4">
                {wishlistWatches.map((watch) => (
                  <div
                    key={watch.id}
                    className="flex items-start gap-4 border-b border-border pb-4"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-card">
                      <img
                        src={watch.imageSrc}
                        alt={watch.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        {watch.brand}
                      </p>
                      <p className="font-serif text-lg text-foreground truncate">
                        {watch.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Est. {watch.year}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleWishlist(watch.id)}
                      className="text-muted-foreground hover:text-destructive shrink-0"
                      aria-label={`Remove ${watch.name} from wishlist`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {wishlistWatches.length > 0 && (
            <div className="border-t border-border px-6 py-4">
              <Button
                variant="outline"
                size="sm"
                onClick={clearWishlist}
                className="w-full"
              >
                <Trash2 className="h-4 w-4" />
                Clear Wishlist
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
