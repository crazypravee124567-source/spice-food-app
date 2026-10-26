import { motion } from 'framer-motion';
import { Item } from '../../animations/Motion.jsx';

export default function TeamCard({ member }) {
  return (
    <Item as="div">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-[#241a17] rounded-lg p-5 sm:p-7 border border-[#382b26] hover:border-[#ec5b13]/60 transition-colors flex flex-col items-center text-center group h-full"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md ring-4 ring-[#ec5b13]/20 group-hover:ring-[#ec5b13] transition-all mb-3.5 sm:mb-4">
          <img alt={member.name} src={member.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <h3 className="font-serif text-base sm:text-lg text-[#f5f0eb] font-bold">{member.name}</h3>
        <span className="text-[10px] sm:text-[11px] text-[#ec5b13] uppercase tracking-wider font-bold mt-1">{member.role}</span>
        <p className="text-xs text-[#9e9188] mt-2.5 sm:mt-3 leading-relaxed">{member.bio}</p>
      </motion.div>
    </Item>
  );
}
