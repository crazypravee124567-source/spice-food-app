import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import FilterTabs from '../components/ui/FilterTabs.jsx';
import Pagination from '../components/ui/Pagination.jsx';
import MenuCard from '../components/menu/MenuCard.jsx';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu.js';
import { useCart } from '../context/CartContext.jsx';

const PAGE_SIZE = 6;

export default function MenuPage() {
  const { addItem } = useCart();
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (category === 'all' ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === category)),
    [category],
  );
  const pages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const changeCategory = (c) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <main className="w-full flex-grow py-6 sm:py-10 lg:py-14 bg-[#140e0c]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <SectionHeading
          eyebrow="ROYAL KITCHEN DELIGHTS"
          title="Our Signature Menu"
          description="Handpicked royal recipes cooked fresh daily with unadulterated cold pressed ingredients."
          className="max-w-2xl mb-6 sm:mb-8"
        />

        <div className="w-full overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8">
          <FilterTabs options={MENU_CATEGORIES} value={category} onChange={changeCategory} layoutId="menu-tab" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} onAdd={addItem} />
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {visible.length === 0 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center text-[#9e9188] py-16"
            >
              Nothing here yet — our chefs are working on it. Check back soon!
            </motion.p>
          )}
        </AnimatePresence>

        <Pagination page={page} pages={pages} onChange={setPage} />
      </div>
    </main>
  );
}
