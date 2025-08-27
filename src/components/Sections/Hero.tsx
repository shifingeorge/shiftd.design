import { useEffect, useState } from 'react';
import LogoVideo from '../UI/LogoVideo';
import MagneticButton from '../UI/MagneticButton';
import Draggable from '../UI/Draggable';
import { FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [edit, setEdit] = useState(false);

  // Toggle edit with Cmd/Ctrl + Shift + D
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.shiftKey && e.key.toLowerCase() === 'd') setEdit((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const btnClass =
    'group !rounded-full !px-8 !py-4 !text-lg ' +
    'sm:!px-9 sm:!py-4 sm:!text-xl ' +
    'md:!px-10 md:!py-5 md:!text-2xl';

  const Arrow = ({ className = '' }: { className?: string }) => (
    <ArrowUpRight
      size={20}
      className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
    />
  );

  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:min-h-[100dvh] bg-black text-white font-bricolage overflow-hidden"
    >
      {/* Edit toggle */}
      <div className="absolute right-4 top-4 md:right-6 md:top-6 z-20">
        <button
          onClick={() => setEdit((v) => !v)}
          className="rounded-full px-3 py-1.5 text-xs md:text-sm font-medium bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur"
        >
          {edit ? 'Done' : 'Edit layout'}
        </button>
      </div>

      {/* Blurb */}
      <Draggable
        id="hero-blurb"
        defaultPct={{ x: 6, y: 8 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-1' : ''}
      >
        <div className="max-w-[28ch] font-semibold leading-tight text-2xl md:text-3xl">
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
        defaultPct={{ x: 46, y: 36 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md' : ''}
      >
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-md overflow-hidden ring-4 ring-white/30 bg-white/20">
          <LogoVideo src="/media/logo.mp4" className="h-full w-full object-cover" />
        </div>
      </Draggable>

      {/* Wordmark */}
      <Draggable
        id="hero-wordmark"
        defaultPct={{ x: 6, y: 74 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md px-1' : ''}
      >
        <h1 className="font-extrabold tracking-tight leading-none text-[18vw] md:text-[14vw]">
          Shif.td
        </h1>
      </Draggable>

      {/* About button (separate) */}
      <Draggable
        id="hero-btn-about"
        defaultPct={{ x: 36, y: 54 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-2' : ''}
      >
        <MagneticButton href="#about" ariaLabel="Go to About" strength={36} className={btnClass}>
          <span className="inline-flex items-center gap-2">
            About <Arrow />
          </span>
        </MagneticButton>
      </Draggable>

      {/* Portfolio button (separate) */}
      <Draggable
        id="hero-btn-portfolio"
        defaultPct={{ x: 36, y: 64 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-2' : ''}
      >
        <MagneticButton href="#portfolio" ariaLabel="Go to Portfolio" strength={36} className={btnClass}>
          <span className="inline-flex items-center gap-2">
            Portfolio <Arrow />
          </span>
        </MagneticButton>
      </Draggable>

      {/* Social links (separate) */}
      <Draggable
        id="hero-socials"
        defaultPct={{ x: 76, y: 46 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-2' : ''}
      >
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white/85 hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub className="text-5xl md:text-5xl" />
          </a>
        </div>
      </Draggable>

      <Draggable
        id="hero-socials"
        defaultPct={{ x: 76, y: 46 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-2' : ''}
      >
        <div className="flex flex-col gap-3">
          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white/85 hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram className="text-5xl md:text-5xl" />
          </a>
        </div>

      </Draggable>

      <Draggable
        id="hero-socials"
        defaultPct={{ x: 76, y: 46 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-2' : ''}
      >
        <div className="flex flex-col gap-3">
          <a
            href="https://x.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white/85 hover:text-white transition"
            aria-label="Twitter/X"
          >
            <FaXTwitter className="text-5xl md:text-5xl" />
          </a>
        </div>

      </Draggable>

      <Draggable
        id="hero-socials"
        defaultPct={{ x: 76, y: 46 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-2' : ''}
      >
        <div className="flex flex-col gap-3">
          <a
            href="https://medium.com/@your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white/85 hover:text-white transition"
            aria-label="Medium"
          >
            <FaMedium className="text-5xl md:text-5xl" />
          </a>
        </div>

      </Draggable>

      {/* Email button (separate) */}
      <Draggable
        id="hero-btn-email"
        defaultPct={{ x: 76, y: 66 }}
        disabled={!edit}
        className={edit ? 'ring-1 ring-white/50 rounded-md p-2' : ''}
      >
        <MagneticButton
          href="mailto:hello@yourdomain.com?subject=Hey%20Shif.td&body=Yo%2C%20let%27s%20jam%20on%20something%20cool."
          ariaLabel="Email me"
          strength={40}
          className={btnClass}
        >
          <span className="inline-flex items-center gap-2">
            Email me <Arrow />
          </span>
        </MagneticButton>
      </Draggable>
    </section>
  );
}