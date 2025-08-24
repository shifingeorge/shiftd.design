export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-white/60">
          © {year} shiftd — UI/UX Designer & Vibe Coder
        </p>
        <div className="text-white/60 text-sm">
          Built with React + Vite + Tailwind
        </div>
      </div>
    </footer>
  );
} 