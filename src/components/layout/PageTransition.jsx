import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/** Wrap each routed page: uniform smooth vertical slide/fade animation for scroll navigation */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="flex flex-col flex-grow w-full"
    >
      {children}
    </motion.div>
  );
}
