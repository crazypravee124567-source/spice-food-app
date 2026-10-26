import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import { fadeLeft } from '../../animations/variants.js';
import { IMAGES, SITE } from '../../data/site.js';

const Row = ({ icon, children, href }) => {
  const content = (
    <div className="flex items-center space-x-3 text-xs">
      <Icon name={icon} className="text-[#ec5b13] text-[18px] shrink-0" />
      <span className="text-[#f5f0eb]">{children}</span>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block hover:opacity-90 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
};

export default function VenueInfo() {
  const { weekdays, sunday } = SITE.hours;
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="show"
      className="w-full lg:w-[45%] flex flex-col space-y-4 sm:space-y-6"
    >
      <div className="relative w-full h-[220px] sm:h-[340px] lg:h-[480px] rounded-lg overflow-hidden shadow-2xl border border-[#382b26]">
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
          className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#1a1412]/90 backdrop-blur-md rounded-lg p-2.5 sm:p-3 sm:px-4 shadow-xl flex items-center space-x-2.5 sm:space-x-3 border border-[#382b26]"
        >
          <Icon name="schedule" className="text-[#ec5b13] text-[18px] sm:text-[20px] shrink-0" />
          <p className="text-[11px] sm:text-xs font-semibold text-[#f5f0eb]">
            {weekdays.label} {weekdays.time} · {sunday.label} {sunday.time}
          </p>
        </motion.div>
      </div>

      <div className="bg-[#241a17] rounded-lg p-4 sm:p-5 border border-[#382b26] space-y-3">
        <Row icon="location_on">{SITE.address}</Row>
        <Row icon="call" href={`tel:${SITE.phone}`}>{SITE.phone}</Row>
        <Row icon="mail" href={`mailto:${SITE.email}`}>{SITE.email}</Row>
      </div>
    </motion.div>
  );
}
