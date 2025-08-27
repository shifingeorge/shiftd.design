import useSmoothScroll from './hooks/useSmoothScroll';
import Hero from './components/Sections/Hero';

export default function App() {
  // Smooth scrolling (tweak lerp to change inertia: higher = snappier, lower = floatier)
  useSmoothScroll({ lerp: 1.18, wheelMultiplier: 1, touchMultiplier: 1.1 });

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <main>
        <Hero />
      </main>
    </div>
  );
}