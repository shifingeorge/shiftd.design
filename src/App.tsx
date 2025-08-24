import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';

import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}