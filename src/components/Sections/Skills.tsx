export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold md:text-3xl">Skills</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-white/80">
          <li>Product thinking, UX strategy</li>
          <li>Design systems, UI libraries</li>
          <li>Prototyping, micro‑interactions</li>
          <li>React, TypeScript, Tailwind</li>
          <li>GSAP, Framer Motion, SVG</li>
          <li>Accessibility, performance</li>
        </ul>
      </div>
    </section>
  );
}