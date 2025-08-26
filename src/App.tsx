import useSmoothScroll from './hooks/useSmoothScroll';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';
import DockBar from './components/Layout/DockBar';

export default function App() {
  useSmoothScroll({ lerp: 0.12, wheelMultiplier: 1 }); // tweak to taste

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <main className="pt-0">
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <DockBar />
    </div>
  );
}