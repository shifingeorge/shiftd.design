import Reveal from '../UI/Reveal';

export default function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <Reveal y={12} blur={8}>
          <h2 className="text-xl md:text-2xl font-semibold text-white/90">About</h2>
        </Reveal>

        <div className="mt-6 space-y-6">
          <Reveal y={18} delay={0.05}>
            <p className="text-white/70 max-w-3xl">
              I’m Shiftd (Shifin) — a product designer and vibe coder focused on calm, high‑contrast
              interfaces. I blend systems thinking with tasteful motion to make digital tools feel
              effortless, not exhausting.
            </p>
          </Reveal>

          <Reveal y={18} delay={0.1}>
            <p className="text-white/70 max-w-3xl">
              My work spans UX strategy, interface design, and front‑end implementation. I care about
              clear structure, accessible patterns, and micro‑interactions that serve the task.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal y={20} delay={0.12}>
              <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.02]">
                <h3 className="font-medium text-white/90">Strengths</h3>
                <ul className="mt-3 space-y-2 text-white/70 text-sm">
                  <li>• Product thinking and UX flows</li>
                  <li>• Design systems and component libraries</li>
                  <li>• Prototyping and micro‑interactions</li>
                  <li>• React + TypeScript implementation</li>
                </ul>
              </div>
            </Reveal>

            <Reveal y={20} delay={0.16}>
              <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.02]">
                <h3 className="font-medium text-white/90">Principles</h3>
                <ul className="mt-3 space-y-2 text-white/70 text-sm">
                  <li>• Human‑first: reduce friction</li>
                  <li>• Contrast and clarity over clutter</li>
                  <li>• Motion that communicates</li>
                  <li>• Ship clean, measurable value</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal y={18} delay={0.18}>
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <span className="rounded-full border border-white/10 px-3 py-1">Open to collab</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Freelance</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Systems & Motion</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}