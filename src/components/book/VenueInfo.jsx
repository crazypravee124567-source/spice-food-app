import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import { fadeLeft } from '../../animations/variants.js';
import { IMAGES, SITE } from '../../data/site.js';

const Row = ({ icon, children }) => (
  <div className="flex items-center space-x-3.5 text-xs">
    <Icon name={icon} className="text-[#ec5b13] text-[18px]" />
    <span className="text-[#f5f0eb]">{children}</span>
  </div>
);

export default function VenueInfo() {
  const { weekdays, sunday } = SITE.hours;
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="show"
      className="w-full lg:w-[45%] flex flex-col space-y-6"
    >
      <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl border border-[#382b26]">
        <motion.img
          alt="Warm restaurant dining table"
          src={IMAGES.restaurant}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-4 left-4 bg-[#1a1412]/90 backdrop-blur-md rounded-lg p-3 px-4 shadow-xl flex items-center space-x-3 border border-[#382b26]"
        >
          <Icon name="schedule" className="text-[#ec5b13] text-[20px]" />
          <p className="text-xs font-semibold text-[#f5f0eb]">
            {weekdays.label} {weekdays.time} · {sunday.label} {sunday.time}
          </p>
        </motion.div>
      </div>

      <div className="bg-[#241a17] rounded-lg p-5 border border-[#382b26] space-y-3">
        <Row icon="location_on">{SITE.address}</Row>
        <Row icon="call">{SITE.phone}</Row>
        <Row icon="mail">{SITE.email}</Row>
      </div>
    </motion.div>
  );
}
