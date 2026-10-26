import { Reveal } from '../../animations/Motion.jsx';
import { scaleIn } from '../../animations/variants.js';
import Icon from '../ui/Icon.jsx';

export default function FeaturedPost({ post }) {
  return (
    <Reveal as="section" variants={scaleIn} className="w-full">
      <article className="bg-[#241a17] rounded-lg shadow-2xl border border-[#382b26] overflow-hidden grid grid-cols-1 lg:grid-cols-12 group transition-colors duration-300 hover:border-[#ec5b13]/50">
        <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[200px] sm:min-h-[260px] lg:min-h-full overflow-hidden bg-[#1a1412]">
          <img alt="Master chef finishing dum biryani" src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>

        <div className="lg:col-span-6 p-5 sm:p-7 lg:p-10 flex flex-col justify-between">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <span className="bg-[#ec5b13] text-white text-[10px] sm:text-[11px] uppercase px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg font-bold tracking-wider">Featured</span>
              <span className="text-[11px] sm:text-xs text-[#9e9188]">Editorial Spotlight</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#f5f0eb] group-hover:text-[#ec5b13] transition-colors leading-snug sm:leading-tight font-bold">{post.title}</h2>
            <p className="text-xs sm:text-sm text-[#9e9188] line-clamp-3 leading-relaxed">{post.excerpt}</p>
          </div>

          <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#382b26] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <img alt={post.author} src={post.authorImage} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-[#ec5b13]/30 shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#f5f0eb]">{post.author}</div>
                <div className="text-[10px] sm:text-[11px] text-[#9e9188]">{post.date} • {post.readTime}</div>
              </div>
            </div>
            <span className="text-xs text-[#ec5b13] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Article <Icon name="arrow_forward" className="text-[16px]" />
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
