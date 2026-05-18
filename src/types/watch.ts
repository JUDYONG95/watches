export interface Watch {
  id: string
  name: string
  brand: string
  year: string
  description: string
  imageSrc: string
  origin: string
  notableFor: string
}

export interface WishlistEntry {
  watchId: string
  addedAt: string
}
