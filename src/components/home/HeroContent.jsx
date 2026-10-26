import { Stagger, Item } from '../../animations/Motion.jsx';
import Button from '../ui/Button.jsx';
import StatCard from '../ui/StatCard.jsx';
import OpenHours from './OpenHours.jsx';
import { HOME_STATS } from '../../data/team.js';

export default function HeroContent() {
  return (
    <Stagger inView={false} gap={0.12} delay={0.15} className="w-full lg:w-[44%] flex flex-col justify-center space-y-7">
      <Item className="flex items-center space-x-3.5">
        <span className="w-9 h-[2px] bg-[#ec5b13]" />
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#ec5b13]">WELCOME TO OUR RESTAURANT</span>
      </Item>

      <Item as="h1" className="font-serif text-4xl sm:text-6xl xl:text-[64px] text-[#f5f0eb] font-bold leading-[1.12] tracking-tight">
        Taste Authentic and <span className="italic font-normal text-[#ec5b13]">Aromatic Biryani.</span>
      </Item>

      <Item as="p" className="text-[#9e9188] text-base leading-relaxed">
        Slow-simmered in heirloom brass handis with vintage aged spices, tender farm cuts, and fragrant seeraga samba rice. Experience royalty in Coimbatore.
      </Item>

      <Item className="flex flex-wrap items-center gap-4 pt-2">
        <Button to="/menu" size="lg" icon="arrow_forward">Order Now</Button>
        <Button to="/book" size="lg" variant="outline">Book a Table</Button>
      </Item>

      <Item><OpenHours /></Item>

      <Item className="grid grid-cols-3 gap-4 pt-4 border-t border-[#382b26]">
        {HOME_STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </Item>
    </Stagger>
  );
}
