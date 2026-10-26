import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import { useScrollNavigation } from '../../context/ScrollNavigationContext.jsx';

export default function BottomPageScrollBanner() {
  const { nextPage, isLastPage, navigateNext } = useScrollNavigation();

  return (
    <section className="w-full border-t border-[#382b26]/70 bg-gradient-to-b from-[#140e0c] via-[#1a1412] to-[#140e0c] pt-14 pb-28 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#ec5b13]">
          CONTINUE THE JOURNEY
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5f0eb]">
          {isLastPage ? 'Back to Where It All Began' : `Next: ${nextPage.title} (${nextPage.label})`}
        </h3>

        <p className="text-sm text-[#9e9188] max-w-md">
          Scroll down or click the button below to seamlessly transition to the next page.
        </p>

        <button
          type="button"
          onClick={navigateNext}
          className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#ec5b13] hover:bg-[#d84e0b] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(236,91,19,0.35)] hover:shadow-[0_15px_30px_rgba(236,91,19,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-95 focus:outline-none"
        >
          <span>{isLastPage ? 'Return to Home' : `Scroll Down to ${nextPage.label}`}</span>
          <motion.span
            animate={isLastPage ? { y: [0, -3, 0] } : { y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            <Icon
              name={isLastPage ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              className="text-lg"
            />
          </motion.span>
        </button>
      </div>
    </section>
  );
}
