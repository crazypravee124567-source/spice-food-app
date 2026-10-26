import { motion } from 'framer-motion';
import FloatingBadge from './FloatingBadge.jsx';
import { IMAGES, SOCIALS } from '../../data/site.js';
import { EASE } from '../../animations/variants.js';

export default function HeroVisual() {
  return (
    <div className="w-full lg:w-[56%] relative flex items-center justify-center lg:justify-end mt-2 sm:mt-6 lg:mt-0">
      <div className="relative w-full max-w-[580px] flex items-center justify-center pr-0 sm:pr-4 lg:pr-10">
        <div className="absolute w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-gradient-to-tr from-[#ec5b13]/25 via-transparent to-transparent rounded-full filter blur-2xl sm:blur-3xl pointer-events-none animate-glow" />

        {/* Main dish: scale-in once, then float forever */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="relative z-10 w-full flex items-center justify-center"
        >
          <div className="animate-float transition-transform duration-500 hover:scale-105 flex items-center justify-center">
            <img
              alt="Authentic Dum Biryani in traditional brass handi"
              className="w-full max-w-[320px] sm:max-w-[460px] lg:max-w-none h-auto max-h-[300px] sm:max-h-[420px] lg:max-h-[500px] object-contain drop-shadow-[0_15px_30px_rgba(236,91,19,0.3)] sm:drop-shadow-[0_25px_45px_rgba(236,91,19,0.35)]"
              src={IMAGES.hero}
            />
          </div>
        </motion.div>

        <FloatingBadge className="-top-3 right-0 sm:right-6 lg:right-8 scale-[0.88] sm:scale-100 origin-top-right">
          <div className="px-3 py-2 sm:px-4 sm:py-3">
            <div className="flex items-center mb-1">
              <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden">
                {IMAGES.avatars.map((src, i) => (
                  <img key={i} alt="Customer" src={src} className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-[#ec5b13] object-cover" />
                ))}
              </div>
              <span className="ml-2 text-[11px] sm:text-xs font-bold text-[#f5f0eb]">20k+ Fans</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="text-[#ec5b13] text-[11px] sm:text-xs font-bold">★ ★ ★ ★ ★</div>
              <span className="text-[11px] sm:text-xs font-bold text-[#f5f0eb] ml-1">4.8</span>
              <span className="text-[9px] sm:text-[10px] text-[#9e9188]">(1,420+ reviews)</span>
            </div>
          </div>
        </FloatingBadge>

        <FloatingBadge className="bottom-0 left-0 sm:bottom-4 scale-[0.85] sm:scale-100 origin-bottom-left" delay={0.6}>
          <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5">
            <span className="text-base sm:text-lg">🌶️</span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#ec5b13] tracking-wide">Slow Dum Cooked In Handi</span>
          </div>
        </FloatingBadge>
      </div>

      {/* Vertical socials */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-8 z-20"
      >
        <span className="w-[1px] h-10 bg-[#382b26]" />
        {SOCIALS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={href === '#' ? (e) => e.preventDefault() : undefined}
            className="vertical-rl rotate-180 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9e9188] hover:text-[#ec5b13] transition-colors py-1"
          >
            {label}
          </a>
        ))}
        <span className="w-[1px] h-10 bg-[#382b26]" />
      </motion.div>
    </div>
  );
}
