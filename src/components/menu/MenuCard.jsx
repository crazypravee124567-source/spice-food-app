import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button.jsx';

export default function MenuCard({ item, index = 0, onAdd }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-[#241a17] rounded-lg overflow-hidden border border-[#382b26] hover:border-[#ec5b13]/60 shadow-lg transition-colors"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1a1412]">
        <img
          alt={item.name}
          loading="lazy"
          src={item.image}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-[#ec5b13] text-white text-[11px] sm:text-xs tracking-wide font-bold shadow-md">
          {item.badge}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5 justify-between">
        <div>
          <h3 className="font-serif text-lg sm:text-xl text-[#f5f0eb] font-bold tracking-tight mb-1.5 sm:mb-2 group-hover:text-[#ec5b13] transition-colors">
            {item.name}
          </h3>
          <p className="text-xs text-[#9e9188] line-clamp-2 leading-relaxed">{item.desc}</p>
        </div>

        <div className="flex items-center justify-between pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-[#382b26]">
          <span className="font-serif text-xl sm:text-2xl text-[#ec5b13] font-bold tracking-tight">₹{item.price}</span>
          <Button size="sm" onClick={() => onAdd(item)} className="h-9 px-3.5 text-xs sm:text-sm">
            <Icon name="add" className="text-[16px] -ml-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
