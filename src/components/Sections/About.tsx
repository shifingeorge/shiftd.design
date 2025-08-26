import WordReveal from '../UI/WordReveal';

export default function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 min-h-[100svh] md:min-h-[100dvh] flex items-center">
        <div className="w-full">
          <h2 className="text-xs md:text-sm font-medium tracking-[0.16em] uppercase text-white/60">
            About
          </h2>

          <div className="mt-6">
            <WordReveal
              as="p"
              text="I’m Shifin — a product designer and vibe coder crafting calm, high‑contrast interfaces. I blend systems thinking with motion so digital tools feel effortlessly clear. My work favors accessibility, performance, and small delights that make products feel human."
              className="text-3xl md:text-4xl leading-[1.35] text-white/85 max-w-5xl"
              stagger={0.12}
              duration={1.25}
              ease="expo.out"
              y={56}
              start="top 95%"
              once
            />
          </div>
        </div>
      </div>
    </section>
  );
}