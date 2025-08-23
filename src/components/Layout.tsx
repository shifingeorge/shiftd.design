// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout(): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Accessibility: skip to main content */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:px-3 focus:py-2 focus:rounded-md focus:bg-white/10 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="content" role="main" className="container px-4 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}