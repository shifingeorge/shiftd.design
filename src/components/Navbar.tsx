// src/components/Navbar.tsx
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from 'components/ThemeToggle';
import { cn } from 'utils/cn';
import site from 'lib/siteConfig';

type NavItem = { to: string; label: string };

const navLinks: NavItem[] = [
  { to: '/projects', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          <span className="gradient-text">shiftd.design</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm transition-colors',
                  isActive ? 'text-red-400' : 'text-foreground/80 hover:text-red-400'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          {site.availableForWork && (
            <span className="hidden lg:inline-flex items-center gap-2 text-xs rounded-full border border-white/10 px-3 py-1 text-foreground/80">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          )}

          <ThemeToggle />
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden btn-secondary p-2 rounded-lg"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden border-t border-white/10 bg-black/70 backdrop-blur transition-[max-height,opacity] duration-300 overflow-hidden',
          open ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
        )}
      >
        <div className="container py-2 flex flex-col gap-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'py-2',
                  isActive ? 'text-red-400' : 'text-foreground/80 hover:text-red-400'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-2">
            <ThemeToggle className="w-full justify-center" />
          </div>

          {site.availableForWork && (
            <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 px-3 py-1 w-fit text-foreground/80">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          )}
        </div>
      </div>
    </header>
  );
}