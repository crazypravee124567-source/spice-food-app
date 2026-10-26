import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import { useScrollNavigation } from '../../context/ScrollNavigationContext.jsx';

export default function HeroScrollIndicator() {
  const { navigateNext, nextPage } = useScrollNavigation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="w-full flex flex-col items-center justify-center pt-8 pb-2 relative z-20"
    >
      <button
        type="button"
        onClick={navigateNext}
        className="group flex flex-col items-center justify-center gap-2 cursor-pointer focus:outline-none"
        aria-label={`Scroll down to navigate to ${nextPage.label}`}
      >
        {/* Badge Pill */}
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1a1412]/85 border border-[#382b26] group-hover:border-[#ec5b13]/70 group-hover:bg-[#241a17] transition-all duration-300 shadow-xl group-hover:shadow-[0_0_20px_rgba(236,91,19,0.25)]">
          <span className="w-2 h-2 rounded-full bg-[#ec5b13] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9e9188] group-hover:text-[#f5f0eb] transition-colors">
            Scroll Down
          </span>
          <span className="text-xs text-[#ec5b13] font-semibold hidden sm:inline">
            • Explore Menu
          </span>
        </div>

        {/* Animated Mouse Icon */}
        <div className="w-5 h-8 rounded-full border-2 border-[#ec5b13]/60 group-hover:border-[#ec5b13] flex justify-center pt-1.5 transition-colors shadow-[0_0_15px_rgba(236,91,19,0.2)]">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.25, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-[#ec5b13]"
          />
        </div>

        {/* Bouncing Chevron */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="-mt-1 text-[#ec5b13] flex items-center justify-center"
        >
          <Icon name="keyboard_arrow_down" className="text-xl" />
        </motion.div>
      </button>
    </motion.div>
  );
}
