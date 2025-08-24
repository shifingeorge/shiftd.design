export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-36">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Portfolio</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
          UI/UX Designer <span className="text-white/60">&</span> Vibe Coder
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          I design delightful interfaces and code smooth, animated experiences.
          Clean systems, high contrast, tasteful motion.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#portfolio" className="rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:opacity-90">
            View Work
          </a>
          <a href="#contact" className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}