import { motion } from 'framer-motion';
import Button from '../ui/Button.jsx';

export default function ReservationSuccess({ data, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-12 text-center space-y-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
        className="w-16 h-16 bg-[#ec5b13]/20 border border-[#ec5b13] text-[#ec5b13] rounded-full flex items-center justify-center mx-auto"
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>
      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-2xl font-serif font-bold text-[#f5f0eb]">
        Table Reserved!
      </motion.h3>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-sm text-[#9e9188] max-w-md mx-auto">
        Thank you, {data.fullName || 'Guest'}. A confirmation has been prepared for {data.guestCount} on {data.reservationDate} at {data.reservationTime}.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
        <Button onClick={onReset} className="mt-4">Reserve Another Table</Button>
      </motion.div>
    </motion.div>
  );
}
