# AGENTS.md — Watch Wishlist

## Stack
- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 (`@import 'tailwindcss'`, `@theme inline`, `@custom-variant dark`)
- shadcn/ui (new-york style), lucide-react icons
- `next-themes` (class-based dark mode via `.dark`)
- `@vercel/analytics` (production only)

## Package manager
pnpm (lockfile: `pnpm-lock.yaml`)

## Commands
| Command | What it does |
|---------|-------------|
| `pnpm dev` | Next.js dev server |
| `pnpm build` | `next build` |
| `pnpm start` | `next start` |
| `pnpm lint` | `tsc --noEmit` |
| `pnpm format` | `prettier --write "src/**/*.{ts,tsx}"` |

## Architecture
- Single static page at `src/app/page.tsx` — showcases all 3 watches
- Data lives in `src/data/watches.ts` (hardcoded collection)
- Wishlist persisted to `localStorage` via `src/hooks/use-wishlist.ts`
- Components in `src/components/` with shadcn primitives in `src/components/ui/`
- `/public/images/` contains watch images (Tank, Crash, Reverso)

## Known quirks
- **TypeScript errors are invisible to `next build`** — run `tsc --noEmit` for real type checking
- **`next --turbopack` does not run type-checking** — always run `tsc --noEmit` after build
- **Path alias `@/*`** maps to `./src/*` (not project root)
- **No test framework** in dependencies
- **Static site** — no API routes, no database, no backend
