import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition, useMediaQuery } from '../../hooks';
import { AetherLogo } from '../ui';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/listings', label: 'Estates' },
  { to: '/listings?type=penthouse', label: 'Projects' },
  { to: '/contact', label: 'Inquire' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isScrolled = scrollY > 40;

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Bỏ qua đến nội dung chính
      </a>
      
      {/* Top floating pill navbar matching sky-estate__image.webp */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 sm:pt-6 px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 w-full max-w-[860px] px-5 sm:px-6 py-2.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? 'bg-[#180a33]/85 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(10,3,25,0.6)]'
              : 'bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)]'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo matching reference: 4-petal flower + Aether Lane */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-full" 
            aria-label="Aether Lane Home"
          >
            <div className="w-7 h-7 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <AetherLogo className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            </div>
            <span className="text-[17px] font-medium tracking-tight text-white font-['Outfit',sans-serif]">
              Aether Lane
            </span>
          </Link>

          {/* Desktop nav links */}
          {!isMobile && (
            <div className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 rounded-full text-[14px] font-normal transition-all duration-300 font-['Outfit',sans-serif] ${
                      isActive
                        ? 'text-white font-medium bg-white/[0.12] shadow-inner'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}

          {/* Right CTA button: Pill "Get in touch" */}
          {!isMobile && (
            <Link
              to="/contact"
              className="shrink-0 px-5 py-2 rounded-full bg-white text-[#2a174f] text-[13.5px] font-semibold tracking-tight shadow-md hover:bg-white/90 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 font-['Outfit',sans-serif]"
              id="nav-get-in-touch"
            >
              Get in touch
            </Link>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-10 h-10 flex items-center justify-center cursor-pointer z-50 text-white rounded-full bg-white/[0.08] hover:bg-white/[0.15] transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-[1.5px] bg-white rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="block w-5 h-[1.5px] bg-white rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-[1.5px] bg-white rounded-full"
                />
              </div>
            </button>
          )}
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#120726]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-7" aria-label="Mobile Navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ delay: i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-['Outfit',sans-serif] font-medium transition-colors ${
                        isActive ? 'text-white underline underline-offset-8 decoration-purple-400' : 'text-white/70 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.35 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#2a174f] text-base font-semibold shadow-xl hover:scale-105 transition-all font-['Outfit',sans-serif]"
                >
                  Get in touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
