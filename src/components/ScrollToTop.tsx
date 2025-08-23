// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop(): null {
  const { pathname, hash } = useLocation();
  const action = useNavigationType();

  useEffect(() => {
    // Preserve scroll on browser back/forward
    if (action === 'POP') return;

    if (hash) {
      const id = hash.slice(1);
      // Wait for DOM to paint the new route
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash, action]);

  return null;
}