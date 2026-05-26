import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';
import FloatingParticles from './components/FloatingParticles';
import FloatingButton from './components/FloatingButton';
import FloatingChatbot from './components/FloatingChatbot';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import { Menu, X } from 'lucide-react';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen bg-brand-black text-white selection:bg-brand-purple selection:text-white">
      <CustomCursor />
      <BackgroundEffect />
      <FloatingParticles />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <FloatingButton />
      {isHomePage && <FloatingChatbot />}
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Simulate initial loading for assets
    setFade(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`fixed inset-0 bg-brand-black flex flex-col items-center justify-center z-50 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-white text-2xl font-bold mb-4">
          Talent Tribe
        </div>
        <div className="w-[50px] h-[50px] border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
