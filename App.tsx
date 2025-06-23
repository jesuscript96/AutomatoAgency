import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import UseCasesPage from './pages/UseCasesPage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage, { BlogPostDetail } from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';
import ChatbotWidget from './components/ChatbotWidget';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) { 
      window.scrollTo(0, 0);
    }
    // If there's a hash, the browser will attempt to scroll, 
    // but for SPAs, explicit scrolling might be needed after content loads if sections are dynamic.
    // For now, this is okay for direct hash links.
  }, [pathname, hash]);

  return null;
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex flex-1 justify-center py-5 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
          <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/casos-de-exito" element={<UseCasesPage />} />
              <Route path="/sobre-nosotros" element={<AboutUsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} /> {/* Ensure :id matches useParams in BlogPostDetail */}
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
        <ChatbotWidget />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;