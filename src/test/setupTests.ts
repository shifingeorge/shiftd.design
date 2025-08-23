// src/test/setupTests.ts

import '@testing-library/jest-dom';

// Let React Testing Library know we're in an act-enabled env
// (quiets React 18/19 act() warnings)
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

// matchMedia stub (used by responsive code / Tailwind dark mode checks)
if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    })
  });
}

// scrollTo stub (used by ScrollToTop and in-page anchors)
if (!window.scrollTo) {
  // @ts-expect-error jsdom doesn't provide scrollTo
  window.scrollTo = jest.fn();
}

// requestAnimationFrame (used by framer-motion/animations)
if (!window.requestAnimationFrame) {
  // @ts-expect-error polyfill
  window.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 0) as unknown as number;
}
if (!window.cancelAnimationFrame) {
  // @ts-expect-error polyfill
  window.cancelAnimationFrame = (id: number) => clearTimeout(id as unknown as NodeJS.Timeout);
}

// ResizeObserver polyfill (charts/components may rely on it)
class RO {
  observe() {}
  unobserve() {}
  disconnect() {}
}
if (!('ResizeObserver' in window)) {
  // @ts-expect-error polyfill
  window.ResizeObserver = RO;
}

// IntersectionObserver polyfill (lazy images/animations)
class IO {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
  root = null;
  rootMargin = '';
  thresholds: number[] = [];
}
if (!('IntersectionObserver' in window)) {
  // @ts-expect-error polyfill
  window.IntersectionObserver = IO;
}

// TextEncoder/TextDecoder (rarely needed, but handy if libs expect them)
import { TextEncoder, TextDecoder } from 'util';
if (!(global as any).TextEncoder) {
  (global as any).TextEncoder = TextEncoder;
}
if (!(global as any).TextDecoder) {
  (global as any).TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
}