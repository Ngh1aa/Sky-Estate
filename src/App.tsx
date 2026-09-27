import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const ListingsPage = lazy(() => import('./pages/ListingsPage'));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage'));
const CollectionsPage = lazy(() => import('./pages/CollectionsPage'));
const JournalPage = lazy(() => import('./pages/JournalPage'));
const ShortlistPage = lazy(() => import('./pages/ShortlistPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        Reading the space…
      </div>
    </div>
  );
}

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.24 },
};

function LegacyResidenceRedirect() {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/residences/${id ?? ''}`} replace />;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
            className="flex-1"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/discover" element={<ListingsPage />} />
              <Route path="/residences/:id" element={<PropertyDetailPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/shortlist" element={<ShortlistPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/consult" element={<ContactPage />} />
              <Route path="/listings" element={<Navigate to="/discover" replace />} />
              <Route path="/listings/:id" element={<LegacyResidenceRedirect />} />
              <Route path="/contact" element={<Navigate to="/consult" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </div>
  );
}
