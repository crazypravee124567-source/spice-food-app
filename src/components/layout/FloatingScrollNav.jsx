import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import { useScrollNavigation } from '../../context/ScrollNavigationContext.jsx';

export default function FloatingScrollNav() {
  const {
    pages,
    currentIndex,
    nextPage,
    isLastPage,
    isNavigating,
    navigateTo,
    navigateNext,
  } = useScrollNavigation();

  return (
    <motion.aside
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      aria-label="Page scroll navigation dock"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[94vw]"
    >
      <div className="flex items-center gap-2.5 sm:gap-4 px-3 sm:px-4 py-2 rounded-full bg-[#1a1412]/92 backdrop-blur-md border border-[#382b26]/90 shadow-[0_10px_35px_rgba(0,0,0,0.65)] hover:border-[#ec5b13]/50 transition-all duration-300">
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Pages list">
          {pages.map((p, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={p.path}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to ${p.label}`}
                onClick={() => navigateTo(p.path)}
                disabled={isNavigating}
                className={`relative transition-all duration-300 focus:outline-none rounded-full ${
                  isActive
                    ? 'w-6 h-2 bg-[#ec5b13] shadow-[0_0_10px_rgba(236,91,19,0.7)]'
                    : 'w-2 h-2 bg-[#382b26] hover:bg-[#9e9188]'
                }`}
                title={p.label}
              />
            );
          })}
        </div>

        <span className="w-[1px] h-4 bg-[#382b26]" />

        {/* Scroll Down Action Button */}
        <button
          type="button"
          onClick={navigateNext}
          disabled={isNavigating}
          className="group flex items-center gap-2 text-xs font-semibold text-[#f5f0eb] hover:text-[#ec5b13] transition-colors focus:outline-none pl-1"
          aria-label={isLastPage ? 'Scroll to Home' : `Scroll down to ${nextPage.label}`}
        >
          <span className="text-[10px] sm:text-xs tracking-wider uppercase text-[#9e9188] group-hover:text-[#f5f0eb] transition-colors">
            {isLastPage ? 'Loop' : 'Scroll Down'}
          </span>
          <span className="text-[#ec5b13] font-bold text-xs">
            {isLastPage ? 'Home' : nextPage.label}
          </span>

          <motion.span
            animate={isLastPage ? { y: [0, -3, 0] } : { y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            className="w-5 h-5 rounded-full bg-[#ec5b13]/15 text-[#ec5b13] flex items-center justify-center group-hover:bg-[#ec5b13] group-hover:text-white transition-all shadow-sm"
          >
            <Icon
              name={isLastPage ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              className="text-[15px]"
            />
          </motion.span>
        </button>
      </div>
    </motion.aside>
  );
}
