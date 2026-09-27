import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/discover', label: 'Discover' },
  { to: '/collections', label: 'Ways of Living' },
  { to: '/journal', label: 'Field Notes' },
  { to: '/about', label: 'Method' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
        <div className="container-main h-[72px] flex items-center justify-between gap-6">
          <Link to="/" className="flex items-baseline gap-3" aria-label="KHOẢNG home">
            <span className="text-[1.1rem] font-semibold tracking-[-0.04em] text-text-bright">KHOẢNG</span>
            <span className="hidden sm:inline utility-label">Living Discovery</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `text-sm transition-colors ${isActive ? 'text-accent' : 'text-text hover:text-text-bright'}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Link to="/shortlist" className="text-sm text-text hover:text-text-bright">Shortlist</Link>
            <Link to="/consult" className="text-sm font-medium border-b border-text-bright pb-1 text-text-bright hover:text-accent hover:border-accent transition-colors">
              Start a conversation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="lg:hidden min-w-11 min-h-11 inline-flex items-center justify-center border border-border bg-transparent text-text-bright"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg pt-[96px] lg:hidden">
          <nav className="container-main flex flex-col" aria-label="Mobile navigation">
            {[...navLinks, { to: '/shortlist', label: 'Shortlist' }, { to: '/consult', label: 'Start a conversation' }].map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="flex items-center justify-between border-b border-border py-5 text-xl text-text-bright"
              >
                <span>{link.label}</span>
                <span className="utility-label">0{index + 1}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
