import { Stagger, Item } from '../../animations/Motion.jsx';
import { scaleIn } from '../../animations/variants.js';
import StatCard from '../ui/StatCard.jsx';
import { ABOUT_STATS } from '../../data/team.js';

export default function StatsBanner() {
  return (
    <section className="w-full bg-[#241a17] rounded-lg py-10 px-6 sm:px-10 border border-[#382b26] shadow-xl">
      <Stagger gap={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 divide-y lg:divide-y-0 lg:divide-x divide-[#382b26] text-center">
        {ABOUT_STATS.map((s, i) => (
          <Item key={s.label} variants={scaleIn} className={i > 0 ? 'pt-6 sm:pt-0' : ''}>
            <StatCard {...s} variant="plain" />
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
