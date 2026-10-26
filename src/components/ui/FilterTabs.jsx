import { motion } from 'framer-motion';

/**
 * Animated tab/pill filter. The orange highlight slides between tabs (shared layoutId).
 * Give each instance on a page its own `layoutId`.
 * variant: "pills" (separate bordered buttons) | "segmented" (inside a rounded bar)
 */
export default function FilterTabs({
  options,
  value,
  onChange,
  layoutId,
  variant = 'pills',
  className = '',
}) {
  const segmented = variant === 'segmented';

  const buttons = options.map((opt) => {
    const active = opt === value;
    return (
      <button
        key={opt}
        type="button"
        onClick={() => onChange(opt)}
        className={`relative rounded-lg font-medium transition-colors duration-200 capitalize whitespace-nowrap shrink-0 active:scale-95 ${
          segmented ? 'px-3 sm:px-4 py-1.5 text-xs font-semibold' : 'px-4 sm:px-6 py-2 text-xs sm:text-sm border'
        } ${
          active
            ? `text-white ${segmented ? '' : 'border-transparent font-semibold shadow-md'}`
            : `text-[#9e9188] hover:text-white ${segmented ? '' : 'bg-[#241a17] border-[#382b26] hover:bg-[#382b26]'}`
        }`}
      >
        {active && (
          <motion.span
            layoutId={layoutId}
            className="absolute inset-0 rounded-lg bg-[#ec5b13] shadow-md shadow-[#ec5b13]/25"
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          />
        )}
        <span className="relative z-10">{opt}</span>
      </button>
    );
  });

  if (segmented) {
    return (
      <div
        className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-[#241a17] p-1.5 rounded-lg border border-[#382b26] max-w-full ${className}`}
      >
        {buttons}
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 min-w-max mx-auto px-1 ${className}`}>
      {buttons}
    </div>
  );
}
