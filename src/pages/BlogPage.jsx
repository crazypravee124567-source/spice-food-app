import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import FilterTabs from '../components/ui/FilterTabs.jsx';
import FeaturedPost from '../components/blog/FeaturedPost.jsx';
import BlogCard from '../components/blog/BlogCard.jsx';
import Newsletter from '../components/blog/Newsletter.jsx';
import { Reveal } from '../animations/Motion.jsx';
import { ARTICLES, BLOG_CATEGORIES, FEATURED_POST } from '../data/blog.js';

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const articles = useMemo(
    () => (filter === 'All' ? ARTICLES : ARTICLES.filter((a) => a.category === filter)),
    [filter],
  );

  return (
    <main className="w-full flex-grow py-6 sm:py-10 lg:py-16 bg-[#140e0c]">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <SectionHeading
          eyebrow="FROM OUR KITCHEN"
          title="Food Stories, Tips and Traditions"
          description="Discover recipes, behind-the-scenes moments, and the heritage that flavours everything we cook."
          className="max-w-3xl"
          titleClassName="text-2xl sm:text-4xl lg:text-5xl tracking-tight"
          descriptionClassName="text-xs sm:text-sm max-w-xl"
        />

        <FeaturedPost post={FEATURED_POST} />

        <Reveal className="flex justify-center w-full overflow-x-auto no-scrollbar pb-1">
          <FilterTabs options={BLOG_CATEGORIES} value={filter} onChange={setFilter} layoutId="blog-tab" variant="segmented" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {articles.map((a, i) => (
              <BlogCard key={a.id} article={a} index={i} />
            ))}
          </AnimatePresence>
        </div>

        <Newsletter />
      </div>
    </main>
  );
}
