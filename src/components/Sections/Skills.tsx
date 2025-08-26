// src/components/Sections/Skills.tsx
import { skills } from '../../data/skills';
import FallingChips from '../UI/FallingChips';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 min-h-[100svh] md:min-h-[100dvh] flex items-center">
        <div className="w-full">
          {/* Heading like About */}
          <h2 className="text-xs md:text-sm font-medium tracking-[0.16em] uppercase text-white/60">
            Skills
          </h2>

          {/* Neon-stroke arena */}
          <div className="mt-6 neon-stroke rounded-3xl">
            <FallingChips
              items={skills}
              trigger="scroll"
              height="360px"
              gravity={0.56}
              // Optional: tweak chip base style
              chipClassName="rounded-xl border px-3 py-2 md:px-4 md:py-3 text-sm md:text-base font-medium"
              // mouseDrag // uncomment to allow dragging chips
              className="bg-transparent"
              mouseDrag={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}