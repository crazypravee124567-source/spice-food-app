import { motion } from 'framer-motion';

/** Glass badge that pops in and gently bobs. `delay` offsets the bob so badges don't move in sync. */
export default function FloatingBadge({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.7 + delay, type: 'spring', stiffness: 260, damping: 18 }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
        className="bg-[#241a17]/95 backdrop-blur-md border border-[#382b26] rounded-lg shadow-2xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
