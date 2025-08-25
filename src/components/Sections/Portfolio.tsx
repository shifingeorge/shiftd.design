import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// 1) Inline data (no slug needed)
type Platform = 'behance' | 'medium' | 'dribbble' | 'site';

type Item = {
  id: string;               // stable key (can be title-year)
  year: number;
  title: string;
  blurb: string;
  roles: string[];
  cover: string;            // main wide image
  background?: string;      // optional texture/bg
  overlay?: {               // optional small overlay card on the right/left
    src: string;
    alt?: string;
    position?: 'left' | 'right';
    width?: number;         // px (default 360)
  };
  platform: Platform;
  url: string;              // external link
  accent?: string;          // optional project accent color
};

// Put your images under public/media/case-studies/<whatever>/...
const items: Item[] = [
  {
    id: 'native-ed-2024',
    year: 2024,
    title: 'Native Ed',
    blurb: 'A website simplifying access to Native American educational resources.',
    roles: ['UX/UI', 'Web dev', 'Branding'],
    cover: '/media/case-studies/native-ed/cover.jpg',
    background: '/media/case-studies/native-ed/bg.jpg',
    overlay: {
      src: '/media/case-studies/native-ed/overlay.jpg',
      alt: 'Lesson card detail',
      position: 'right',
      width: 360,
    },
    platform: 'behance',
    url: 'https://www.behance.net/your-native-ed',
    accent: '#ef4444',
  },
  {
    id: 'calm-reads-2023',
    year: 2023,
    title: 'Calm Reads',
    blurb: 'A distraction‑free reading experience with high contrast and rhythm.',
    roles: ['Product', 'UX', 'UI'],
    cover: '/media/case-studies/calm-reads/cover.jpg',
    platform: 'medium',
    url: 'https://medium.com/@you/calm-reads',
  },
  // Add more here…
];

// 2) Small helpers
function platformLabel(p: Platform) {
  switch (p) {
    case 'behance': return 'Behance';
    case 'medium': return 'Medium';
    case 'dribbble': return 'Dribbble';
    default: return 'View';
  }
}

function CaseCard({ cs, idx }: { cs: Item; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax
  const yBg = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const yCover = useTransform(scrollYProgress, [0, 1], ['-2%', '2%']);
  const yOverlay = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <article
      className="relative sticky top-16 md:top-20"
      style={{ zIndex: 50 - 1 }}
      aria-label={`${cs.title} case study`}
      ref={ref}
    >
      <a
        href={cs.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus:outline-none"
        aria-label={`Open ${cs.title} on ${platformLabel(cs.platform)}`}
      >
        {/* Row above the card, like the reference layout */}
        <div className="mb-3 grid grid-cols-1 md:grid-cols-[64px_1fr_auto] items-baseline gap-2 md:gap-3 px-2 md:px-4">
          <span className="text-xs md:text-sm text-white/50">{cs.year}</span>
          <h3 className="text-lg md:text-xl font-medium">{cs.title}</h3>
          <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
            {cs.roles.join(', ')}
          </div>
          <p className="md:col-span-3 text-sm md:text-base text-white/60">{cs.blurb}</p>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          {/* Optional background texture */}
          {cs.background && (
            <motion.img
              src={cs.background}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              style={{ y: yBg }}
              aria-hidden="true"
            />
          )}

          {/* Cover image */}
          <motion.img
            src={cs.cover}
            alt={`${cs.title} cover`}
            className="relative z-10 w-full h-[56svh] md:h-[65svh] object-cover rounded-3xl"
            style={{ y: yCover }}
          />

          {/* Optional overlay card image */}
          {cs.overlay && (
            <motion.div
              className={`absolute z-20 bottom-6 ${cs.overlay.position === 'left' ? 'left-6' : 'right-6'}`}
              style={{ y: yOverlay }}
            >
              <div className="rounded-2xl bg-neutral-950/90 backdrop-blur border border-white/20 shadow-xl overflow-hidden">
                <img
                  src={cs.overlay.src}
                  alt={cs.overlay.alt ?? ''}
                  className="block w-full h-auto max-w-full"
                  style={{ width: (cs.overlay.width ?? 360) + 'px' }}
                />
              </div>
            </motion.div>
          )}

          {/* Affordances */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />

          {/* Platform badge + external icon */}
          <div className="absolute right-3 top-3 z-30 flex items-center gap-2">
            <span className="rounded-full bg-black/40 backdrop-blur border border-white/10 px-2 py-1 text-[11px] text-white/80">
              {platformLabel(cs.platform)}
            </span>
            <span className="rounded-full bg-black/40 backdrop-blur border border-white/10 p-1 text-white/80">
              <ExternalLink size={16} />
            </span>
          </div>

          {/* Hover depth */}
          <div className="absolute inset-0 rounded-3xl transition shadow-none group-hover:shadow-[0_20px_80px_rgba(0,0,0,.45)]" />
        </div>
      </a>
    </article>
  );
}

// 3) Section
export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-semibold text-white/90">Recent work</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>

        {/* Stacked sticky list */}
        <div className="relative">
          <div className="space-y-12 md:space-y-24">
            {items.map((cs, idx) => (
              <CaseCard key={cs.id || cs.url} cs={cs} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}