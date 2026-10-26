import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo.jsx';
import Icon from '../ui/Icon.jsx';
import { NAV_LINKS } from '../../data/site.js';
import { useCart } from '../../context/CartContext.jsx';

const iconBtn =
  'w-9 h-9 rounded-lg bg-[#241a17] hover:bg-[#382b26] border border-[#382b26] flex items-center justify-center text-[#f5f0eb] hover:text-[#ec5b13] transition-all active:scale-90';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => setMobileOpen(false), [pathname]);

  const linkClass = ({ isActive }) =>
    `relative transition-colors hover:text-[#ec5b13] ${isActive ? 'text-[#ec5b13]' : 'text-[#f5f0eb]'}`;

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-[72px] bg-[#1a1412]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#382b26] flex items-center"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex items-center justify-between">
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

        <div className="flex items-center space-x-4 lg:space-x-5">
          <button type="button" aria-label="Search" className={iconBtn} onClick={() => navigate('/menu')}>
            <Icon name="search" className="text-[20px]" />
          </button>

          <Link to="/book" aria-label="Account" className={`${iconBtn} hidden sm:flex`}>
            <Icon name="person" className="text-[20px]" />
          </Link>

          <button
            type="button"
            aria-label="Shopping cart"
            onClick={openCart}
            className="relative w-9 h-9 rounded-lg bg-[#ec5b13]/10 border border-[#ec5b13]/40 flex items-center justify-center text-[#ec5b13] hover:bg-[#ec5b13] hover:text-white transition-all active:scale-90 focus:outline-none"
          >
            <Icon name="shopping_bag" className="text-[20px]" />
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
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className={`${iconBtn} md:hidden`}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="text-[22px]" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="absolute top-[72px] left-0 w-full bg-[#1a1412] border-b border-[#382b26] py-4 px-6 flex flex-col md:hidden shadow-2xl z-50"
          >
            {NAV_LINKS.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block text-base py-3 border-b border-[#382b26]/50 hover:text-[#ec5b13] ${isActive ? 'text-[#ec5b13]' : 'text-[#f5f0eb]'}`
                  }
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
