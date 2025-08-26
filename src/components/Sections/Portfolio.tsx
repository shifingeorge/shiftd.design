import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects, type Platform } from '../../data/projects';

function platformLabel(p: Platform) {
  switch (p) {
    case 'behance': return 'Behance';
    case 'medium': return 'Medium';
    case 'dribbble': return 'Dribbble';
    default: return 'View';
  }
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white/90">Portfolio</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-12 md:gap-y-16">
          {projects.map((p) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title} on ${platformLabel(p.platform)}`}
              className="group block"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20, mass: 0.4 }}
            >
              {/* Meta row */}
              <div className="mb-3 grid grid-cols-1 md:grid-cols-[64px_1fr_auto] items-baseline gap-2 md:gap-3 px-2 md:px-4">
                <span className="text-xs md:text-sm text-white/50">{p.year}</span>
                <h3 className="text-lg md:text-xl font-medium">{p.title}</h3>
                <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
                  {p.roles.join(', ')}
                </div>
                <p className="md:col-span-3 text-sm md:text-base text-white/60">
                  {p.blurb}
                </p>
              </div>

              {/* Card with single cover */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                <img
                  src={p.cover}
                  alt={`${p.title} cover`}
                  className="w-full aspect-[16/9] md:aspect-[21/9] object-cover rounded-3xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />

                {/* Frame + hover shadow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                <div className="absolute inset-0 rounded-3xl transition shadow-none group-hover:shadow-[0_20px_80px_rgba(0,0,0,.45)]" />

                {/* Platform badge */}
                <div className="absolute right-3 top-3 z-20 flex items-center gap-2">
                  <span className="rounded-full bg-black/40 backdrop-blur border border-white/10 px-2 py-1 text-[11px] text-white/80">
                    {platformLabel(p.platform)}
                  </span>
                  <span className="rounded-full bg-black/40 backdrop-blur border border-white/10 p-1 text-white/80">
                    <ExternalLink size={16} />
                  </span>
                </div>

                {/* Optional accent ring */}
                {p.accent && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    style={{ boxShadow: `inset 0 0 0 1px ${p.accent}22` }}
                  />
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}