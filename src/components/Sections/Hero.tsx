import { useState, useEffect } from 'react';
import LogoVideo from '../UI/LogoVideo';
import Draggable from '../UI/Draggable';

export default function Hero() {
  const [edit, setEdit] = useState(false);

  // Optional: toggle edit with Cmd/Ctrl + Shift + D
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.shiftKey && e.key.toLowerCase() === 'd') {
        setEdit((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:min-h-[100dvh] bg-[#000000] text-white overflow-hidden"
    >
      {/* Edit toggle UI */}
      <div className="absolute right-4 top-4 md:right-6 md:top-6 z-20">
        <button
          onClick={() => setEdit((v) => !v)}
          className={[
            'rounded-full px-3 py-1.5 text-xs md:text-sm font-medium',
            'bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur',
          ].join(' ')}
        >
          {edit ? 'Done' : 'Edit layout'}
        </button>
      </div>

      {/* Top-left blurb */}
      <Draggable
        id="hero-blurb"
        defaultPct={{ x: 6, y: 7 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-1' : ''}
      >
        <div className="max-w-[28ch] font-bricolage font-semibold leading-tight text-2xl md:text-3xl">
          Product designer & vibe coder
          <br />
          crafting calm, high-contrast
          <br />
          interfaces.
        </div>
      </Draggable>

      {/* Center square (logo) */}
      <Draggable
        id="hero-square"
        defaultPct={{ x: 46, y: 38 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md' : ''}
      >
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-md overflow-hidden ring-4 ring-white/30 bg-white/20">
          <LogoVideo src="/media/logo.mp4" className="h-full w-full object-cover" />
        </div>
      </Draggable>

      {/* Big wordmark */}
      <Draggable
        id="hero-wordmark"
        defaultPct={{ x: 8, y: 76 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md px-1' : ''}
      >
        <h1 className="font-bricolage font-extrabold tracking-tight leading-none text-[18vw] md:text-[14vw]">
          Shif.td
        </h1>
      </Draggable>
    </section>
  );
}