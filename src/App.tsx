import useSmoothScroll from './hooks/useSmoothScroll';

import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';

import Footer from './components/Layout/Footer';
import DockBar from './components/Layout/DockBar';

export default function App() {
  // Smooth scrolling (tweak lerp to change inertia: higher = snappier, lower = floatier)
  useSmoothScroll({ lerp: 1.18, wheelMultiplier: 1, touchMultiplier: 1.1 });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <DockBar />
    </div>
  );
}