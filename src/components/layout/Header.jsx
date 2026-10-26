import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo.jsx';
import Icon from '../ui/Icon.jsx';
import { NAV_LINKS, SITE } from '../../data/site.js';
import { useCart } from '../../context/CartContext.jsx';

const iconBtn =
  'w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#241a17] hover:bg-[#382b26] border border-[#382b26] flex items-center justify-center text-[#f5f0eb] hover:text-[#ec5b13] transition-all active:scale-90';

const NAV_ICONS = {
  '/': 'home',
  '/menu': 'restaurant_menu',
  '/about': 'auto_stories',
  '/book': 'calendar_month',
  '/blog': 'article',
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
    return undefined;
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    `relative transition-colors hover:text-[#ec5b13] ${isActive ? 'text-[#ec5b13]' : 'text-[#f5f0eb]'}`;

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-[68px] sm:h-[72px] bg-[#1a1412]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#382b26] flex items-center"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium font-poppins">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded bg-[#ec5b13]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-5">
          <button
            type="button"
            aria-label="Search menu"
            className={iconBtn}
            onClick={() => navigate('/menu')}
          >
            <Icon name="search" className="text-[18px] sm:text-[20px]" />
          </button>

          <Link to="/book" aria-label="Book a table" className={`${iconBtn} hidden sm:flex`}>
            <Icon name="calendar_today" className="text-[18px] sm:text-[20px]" />
          </Link>

          <button
            type="button"
            aria-label="Shopping cart"
            onClick={openCart}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#ec5b13]/10 border border-[#ec5b13]/40 flex items-center justify-center text-[#ec5b13] hover:bg-[#ec5b13] hover:text-white transition-all active:scale-90 focus:outline-none"
          >
            <Icon name="shopping_bag" className="text-[18px] sm:text-[20px]" />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.3, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#ec5b13] border-2 border-[#1a1412] text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
            className={`${iconBtn} md:hidden`}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="text-[20px] sm:text-[22px]" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-[68px] sm:top-[72px] bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[68px] sm:top-[72px] left-0 w-full bg-[#1a1412] border-b border-[#382b26] py-5 px-5 flex flex-col md:hidden shadow-2xl z-50 max-h-[calc(100vh-72px)] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-[#ec5b13]/15 text-[#ec5b13] font-bold border-l-4 border-[#ec5b13]'
                            : 'text-[#f5f0eb] hover:bg-[#241a17] hover:text-[#ec5b13]'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Icon name={NAV_ICONS[to] || 'circle'} className="text-[18px] opacity-75" />
                        <span>{label}</span>
                      </div>
                      <Icon name="chevron_right" className="text-[16px] text-[#9e9188]" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions in Mobile Menu */}
              <div className="mt-5 pt-4 border-t border-[#382b26] space-y-3">
                <Link
                  to="/book"
                  onClick={() => setMobileOpen(false)}
                  className="w-full h-11 bg-[#ec5b13] hover:bg-[#cf4c0a] text-white rounded-lg flex items-center justify-center gap-2 font-semibold text-sm shadow-lg shadow-[#ec5b13]/25 active:scale-98 transition-all"
                >
                  <Icon name="calendar_month" className="text-[18px]" />
                  <span>Reserve a Table</span>
                </Link>

                <div className="flex items-center justify-between text-xs text-[#9e9188] pt-2 px-1">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-1.5 hover:text-[#ec5b13] transition-colors"
                  >
                    <Icon name="call" className="text-[16px] text-[#ec5b13]" />
                    <span>{SITE.phone}</span>
                  </a>
                  <span className="text-[11px] text-[#ec5b13] font-medium">Open 11am – 11pm</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
