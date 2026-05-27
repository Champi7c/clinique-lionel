import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TopBar } from './components/TopBar';
import { SiteNavbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { SanteTravail } from './pages/SanteTravail';
import { Activites } from './pages/Activites';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
      offset: 72,
      easing: 'ease-out-cubic',
    });
  }, []);

  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <TopBar />
      <SiteNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sante-travail" element={<SanteTravail />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <SiteProvider>
        <AppContent />
      </SiteProvider>
    </BrowserRouter>
  );
}

export default App;
