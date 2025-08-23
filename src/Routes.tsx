import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import ScrollToTop from 'components/ScrollToTop';
import ErrorBoundary from 'components/ErrorBoundary';
import NotFound from 'pages/NotFound';

import Home from 'pages/home';
import Projects from 'pages/projects';
import About from 'pages/about';
import Contact from 'pages/contact';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route element={<Layout />}>
            {/* Primary routes */}
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legacy paths (kept for backward compatibility) */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default AppRoutes;