import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CaseStudiesHub from './pages/case-studies-hub-project-storytelling';
import WorkWithMeCollaborationHub from './pages/work-with-me-collaboration-hub';
import HomepageCreativePortfolioHub from './pages/homepage-creative-portfolio-hub';
import AboutProcessEvolution from './pages/about-process-evolution';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CaseStudiesHub />} />
        <Route path="/case-studies-hub-project-storytelling" element={<CaseStudiesHub />} />
        <Route path="/work-with-me-collaboration-hub" element={<WorkWithMeCollaborationHub />} />
        <Route path="/homepage-creative-portfolio-hub" element={<HomepageCreativePortfolioHub />} />
        <Route path="/about-process-evolution" element={<AboutProcessEvolution />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;