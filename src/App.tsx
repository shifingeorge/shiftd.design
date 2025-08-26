import useSmoothScroll from './hooks/useSmoothScroll';
import Hero from './components/Sections/Hero';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

export default function App() {
  // Smooth scrolling (tweak lerp to change inertia: higher = snappier, lower = floatier)
  useSmoothScroll({ lerp: 1.18, wheelMultiplier: 2, touchMultiplier: 1.1 });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="relative z-10 mx-auto max-w-2xl px-4 min-h-[100svh] md:min-h-[100dvh] flex items-center">
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      </div>
      <Footer />
    </div>
  );
}