import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button.jsx';
import { Reveal } from '../../animations/Motion.jsx';

export default function Newsletter({ onSubscribe }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    onSubscribe?.(email);
  };

  return (
    <Reveal as="section" className="w-full">
      <div className="relative overflow-hidden bg-[#241a17] rounded-lg p-5 sm:p-8 lg:p-12 text-center text-[#f5f0eb] border border-[#382b26] shadow-xl">
        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
          <motion.div
            animate={{ rotate: [0, -8, 8, -4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3.5 }}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#ec5b13]/10 border border-[#ec5b13]/30 flex items-center justify-center mb-3 text-[#ec5b13]"
          >
            <Icon name="mail" className="text-[22px] sm:text-[24px]" />
          </motion.div>
          <h2 className="font-serif text-xl sm:text-3xl font-bold mb-2">Get Fresh Stories in Your Inbox</h2>
          <p className="text-xs sm:text-sm text-[#9e9188] mb-5 sm:mb-6">
            Subscribe for secret heritage recipes, weekly specials, and discounts at our Coimbatore outlet.
          </p>

          <AnimatePresence mode="wait" initial={false}>
            {subscribed ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#ec5b13]/20 border border-[#ec5b13] text-[#ec5b13] py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold"
              >
                🎉 Thank you for subscribing! Check your email for special welcome offers.
              </motion.div>
            ) : (
              <motion.form key="form" exit={{ opacity: 0, y: -8 }} onSubmit={submit} className="w-full flex flex-col sm:flex-row items-center gap-2.5">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full sm:flex-1 bg-[#1a1412] border border-[#382b26] text-[#f5f0eb] placeholder-[#9e9188]/60 px-4 sm:px-5 py-3 rounded-lg text-base sm:text-xs focus:outline-none focus:border-[#ec5b13] focus:ring-0"
                />
                <Button type="submit" size="sm" className="w-full sm:w-auto shrink-0 h-11 sm:h-auto py-3">Subscribe</Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}
