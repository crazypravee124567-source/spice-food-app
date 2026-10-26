import { Stagger, Item } from '../../animations/Motion.jsx';
import { scaleIn } from '../../animations/variants.js';
import StatCard from '../ui/StatCard.jsx';
import { ABOUT_STATS } from '../../data/team.js';

export default function StatsBanner() {
  return (
    <section className="w-full bg-[#241a17] rounded-lg py-8 sm:py-10 px-4 sm:px-10 border border-[#382b26] shadow-xl">
      <Stagger gap={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-2 sm:gap-x-6 text-center">
        {ABOUT_STATS.map((s, i) => (
          <Item
            key={s.label}
            variants={scaleIn}
            className={`flex flex-col items-center justify-center ${
              i % 2 === 0 ? 'border-r border-[#382b26] lg:border-r' : 'lg:border-r'
            } ${i === ABOUT_STATS.length - 1 ? 'lg:border-r-0' : ''}`}
          >
            <StatCard {...s} variant="plain" />
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
