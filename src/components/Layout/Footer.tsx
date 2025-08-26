export default function Footer() {
  const year = getYear();
  return (
    <footer className="border-t border-white/10">
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-white/60">
          © {year} shif.td
        </p>
        <div className="text-white/60 text-sm flex items-center gap-2">
          <span>Built with</span>
          <PixelHeart className="text-pink-400 drop-shadow-[0_0_8px_rgba(255,0,92,0.35)]" />
          <span>using React + Vite + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}

function getYear() {
  return new Date().getFullYear();
}

function PixelHeart({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 9 7"
      width="14"
      height="14"
      aria-hidden="true"
      className={className}
      shapeRendering="crispEdges"
      fill="currentColor"
    >
      {/* y=0 */}
      <rect x="1" y="0" width="1" height="1" />
      <rect x="2" y="0" width="1" height="1" />
      <rect x="6" y="0" width="1" height="1" />
      <rect x="7" y="0" width="1" height="1" />
      {/* y=1 */}
      <rect x="0" y="1" width="1" height="1" />
      <rect x="1" y="1" width="1" height="1" />
      <rect x="2" y="1" width="1" height="1" />
      <rect x="3" y="1" width="1" height="1" />
      <rect x="5" y="1" width="1" height="1" />
      <rect x="6" y="1" width="1" height="1" />
      <rect x="7" y="1" width="1" height="1" />
      <rect x="8" y="1" width="1" height="1" />
      {/* y=2 */}
      {Array.from({ length: 9 }).map((_, i) => (
        <rect key={`r2-${i}`} x={i} y="2" width="1" height="1" />
      ))}
      {/* y=3 */}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={`r3-${i}`} x={i + 1} y="3" width="1" height="1" />
      ))}
      {/* y=4 */}
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={`r4-${i}`} x={i + 2} y="4" width="1" height="1" />
      ))}
      {/* y=5 */}
      <rect x="3" y="5" width="1" height="1" />
      <rect x="4" y="5" width="1" height="1" />
      <rect x="5" y="5" width="1" height="1" />
      {/* y=6 */}
      <rect x="4" y="6" width="1" height="1" />
    </svg>
  );
}