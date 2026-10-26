import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext.jsx';

export const PAGE_SEQUENCE = [
  { path: '/', label: 'Home', number: '01', title: 'Authentic Dum Biryani' },
  { path: '/menu', label: 'Menu', number: '02', title: 'Our Signature Menu' },
  { path: '/about', label: 'About Us', number: '03', title: 'Our Story & Heritage' },
  { path: '/book', label: 'Book a Table', number: '04', title: 'Reserve Your Table' },
  { path: '/blog', label: 'Blog', number: '05', title: 'Food Stories & Recipes' },
];

const ScrollNavigationContext = createContext(null);

export function ScrollNavigationProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = useCart();
  const isCartOpen = cart?.isOpen;

  const [isNavigating, setIsNavigating] = useState(false);
  const isLockedRef = useRef(false);
  const touchStartYRef = useRef(null);

  const currentIndex = PAGE_SEQUENCE.findIndex((p) => p.path === location.pathname);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const currentPage = PAGE_SEQUENCE[safeIndex];

  const nextIndex = (safeIndex + 1) % PAGE_SEQUENCE.length;
  const nextPage = PAGE_SEQUENCE[nextIndex];

  const prevIndex = (safeIndex - 1 + PAGE_SEQUENCE.length) % PAGE_SEQUENCE.length;
  const prevPage = PAGE_SEQUENCE[prevIndex];

  const navigateTo = useCallback(
    (targetPath) => {
      if (isLockedRef.current || targetPath === location.pathname) return;
      isLockedRef.current = true;
      setIsNavigating(true);

      navigate(targetPath);
      window.scrollTo({ top: 0, behavior: 'instant' });

      setTimeout(() => {
        isLockedRef.current = false;
        setIsNavigating(false);
      }, 700);
    },
    [location.pathname, navigate],
  );

  const navigateNext = useCallback(() => {
    navigateTo(nextPage.path);
  }, [navigateTo, nextPage.path]);

  const navigatePrev = useCallback(() => {
    navigateTo(prevPage.path);
  }, [navigateTo, prevPage.path]);

  // Wheel listener: automatically navigate across pages when scrolling down
  useEffect(() => {
    const handleWheel = (e) => {
      if (isCartOpen || isLockedRef.current) return;

      // Ignore scroll events inside interactive form elements
      const target = e.target;
      if (
        target &&
        (target.tagName === 'TEXTAREA' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.closest?.('[data-no-page-scroll="true"]'))
      ) {
        return;
      }

      // User scrolls DOWN
      if (e.deltaY > 30) {
        if (location.pathname === '/') {
          navigateNext();
          return;
        }

        // On scrollable pages: check if at bottom of page
        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const isAtBottom = scrollPosition >= pageHeight - 35;

        if (isAtBottom) {
          navigateNext();
        }
      }
      // User scrolls UP at the very top of the page
      else if (e.deltaY < -40) {
        if (location.pathname !== '/' && window.scrollY <= 10) {
          navigatePrev();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isCartOpen, location.pathname, navigateNext, navigatePrev]);

  // Touch listener: touch swipe up at bottom / down at top
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      if (isCartOpen || isLockedRef.current || touchStartYRef.current === null) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY; // > 0 means swipe UP (scrolling down)

      if (deltaY > 75) {
        if (location.pathname === '/') {
          navigateNext();
        } else {
          const scrollPosition = window.innerHeight + window.scrollY;
          const pageHeight = document.documentElement.scrollHeight;
          if (scrollPosition >= pageHeight - 45) {
            navigateNext();
          }
        }
      } else if (deltaY < -75) {
        if (location.pathname !== '/' && window.scrollY <= 10) {
          navigatePrev();
        }
      }

      touchStartYRef.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isCartOpen, location.pathname, navigateNext, navigatePrev]);

  return (
    <ScrollNavigationContext.Provider
      value={{
        pages: PAGE_SEQUENCE,
        currentPage,
        currentIndex: safeIndex,
        nextPage,
        prevPage,
        isLastPage: safeIndex === PAGE_SEQUENCE.length - 1,
        isNavigating,
        navigateTo,
        navigateNext,
        navigatePrev,
      }}
    >
      {children}
    </ScrollNavigationContext.Provider>
  );
}

export const useScrollNavigation = () => useContext(ScrollNavigationContext);
