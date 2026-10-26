import { motion } from 'framer-motion';
import FloatingBadge from './FloatingBadge.jsx';
import { IMAGES, SOCIALS } from '../../data/site.js';
import { EASE } from '../../animations/variants.js';

export default function HeroVisual() {
  return (
    <div className="w-full lg:w-[56%] relative flex items-center justify-center lg:justify-end">
      <div className="relative w-full max-w-[620px] flex items-center justify-center pr-4 lg:pr-10">
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-[#ec5b13]/25 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none animate-glow" />

        {/* Main dish: scale-in once, then float forever */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="relative z-10"
        >
          <div className="animate-float transition-transform duration-500 hover:scale-105">
            <img
              alt="Authentic Dum Biryani in traditional brass handi"
              className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_25px_45px_rgba(236,91,19,0.35)]"
              src={IMAGES.hero}
            />
          </div>
        </motion.div>

        <FloatingBadge className="-top-2 right-2 sm:right-6 lg:right-8">
          <div className="px-4 py-3">
            <div className="flex items-center mb-1.5">
              <div className="flex -space-x-2 overflow-hidden">
                {IMAGES.avatars.map((src, i) => (
                  <img key={i} alt="Customer" src={src} className="inline-block h-7 w-7 rounded-full ring-2 ring-[#ec5b13] object-cover" />
                ))}
              </div>
              <span className="ml-2.5 text-xs font-bold text-[#f5f0eb]">20k+ Fans</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="text-[#ec5b13] text-xs font-bold">★ ★ ★ ★ ★</div>
              <span className="text-xs font-bold text-[#f5f0eb] ml-1">4.8</span>
              <span className="text-[10px] text-[#9e9188]">(1,420+ reviews)</span>
            </div>
          </div>
        </FloatingBadge>

        <FloatingBadge className="hidden sm:block bottom-4 left-0" delay={0.6}>
          <div className="flex items-center gap-2.5 px-4 py-2.5">
            <span className="text-lg">🌶️</span>
            <span className="text-xs font-semibold text-[#ec5b13] tracking-wide">Slow Dum Cooked In Brass Handi</span>
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
