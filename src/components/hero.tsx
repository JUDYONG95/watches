export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-center px-6 pt-32 pb-16 lg:min-h-[70vh] lg:px-16 xl:px-24">
      <div className="max-w-5xl">
        <p className="mb-6 text-xs tracking-[0.4em] uppercase text-muted-foreground lg:mb-8">
          A Curated Collection
        </p>

        <h1 className="font-serif text-5xl leading-[0.9] tracking-tight text-foreground sm:text-6xl lg:text-8xl xl:text-9xl">
          Watches
          <br />
          <span className="italic">I Wish For</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mt-12 lg:text-xl">
          Three iconic timepieces that represent the pinnacle of horological design —
          each with a story as compelling as the craftsmanship behind it.
        </p>
      </div>
    </section>
  )
}
