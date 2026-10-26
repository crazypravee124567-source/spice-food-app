import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';

export default function BlogCard({ article, index = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.18 } }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="bg-[#241a17] rounded-lg overflow-hidden border border-[#382b26] hover:border-[#ec5b13]/50 transition-colors flex flex-col justify-between group shadow-lg"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1412]">
          <img alt={article.title} src={article.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
          <span className="absolute top-3 left-3 bg-[#ec5b13] text-white text-[10px] uppercase px-2.5 py-1 rounded-lg font-bold shadow-md">{article.category}</span>
        </div>
        <div className="p-5 space-y-2">
          <h3 className="font-serif text-lg text-[#f5f0eb] group-hover:text-[#ec5b13] transition-colors line-clamp-2 font-bold">{article.title}</h3>
          <p className="text-xs text-[#9e9188] line-clamp-2 leading-relaxed">{article.desc}</p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#382b26]/50 mt-2">
        <div className="flex flex-col">
          <span className="text-xs text-[#f5f0eb] font-semibold">{article.author}</span>
          <span className="text-[10px] text-[#9e9188]">{article.date}</span>
        </div>
        <span className="text-xs text-[#ec5b13] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Read <Icon name="arrow_forward" className="text-[14px]" />
        </span>
      </div>
    </motion.article>
  );
}
