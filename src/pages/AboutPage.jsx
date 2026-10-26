import SectionHeading from '../components/ui/SectionHeading.jsx';
import Button from '../components/ui/Button.jsx';
import HighlightCard from '../components/about/HighlightCard.jsx';
import TeamCard from '../components/about/TeamCard.jsx';
import StatsBanner from '../components/about/StatsBanner.jsx';
import { Reveal, Stagger, Item } from '../animations/Motion.jsx';
import { fadeLeft, fadeRight, popIn } from '../animations/variants.js';
import { HIGHLIGHTS, TEAM } from '../data/team.js';
import { IMAGES } from '../data/site.js';

export default function AboutPage() {
  return (
    <main className="w-full flex-grow py-6 sm:py-10 lg:py-16 bg-[#140e0c]">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16">
        <SectionHeading
          eyebrow="WHO WE ARE"
          title="A Legacy of Taste, Tradition and Love"
          description="Born in Coimbatore, raised on authentic dum biryani recipes passed down through generations."
          className="max-w-4xl pt-1"
          titleClassName="text-2xl sm:text-4xl lg:text-5xl"
          descriptionClassName="text-xs sm:text-sm max-w-2xl mt-3"
        />

        {/* Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <Reveal variants={fadeLeft} className="lg:col-span-6 relative">
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[3/4] max-h-[360px] sm:max-h-none bg-[#241a17] border border-[#382b26]">
              <img
                alt="Indian master chef garnishing traditional biryani"
                src={IMAGES.masterChef}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <Reveal
              variants={popIn}
              delay={0.5}
              className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-4 bg-[#241a17]/95 backdrop-blur-md p-3 sm:p-5 rounded-lg shadow-2xl flex items-center gap-3 sm:gap-4 border-l-4 border-[#ec5b13] border-t border-r border-b border-t-[#382b26] border-r-[#382b26] border-b-[#382b26]"
            >
              <span className="font-serif text-3xl sm:text-5xl font-bold text-[#ec5b13] leading-none">8+</span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-[#f5f0eb] font-bold leading-tight">Years of</span>
                <span className="text-[10px] sm:text-xs text-[#9e9188] uppercase tracking-wider">Culinary Excellence</span>
              </div>
            </Reveal>
          </Reveal>

          <Stagger gap={0.12} className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 pt-3 lg:pt-0">
            <Item>
              <span className="text-[11px] sm:text-xs text-[#ec5b13] uppercase tracking-widest font-bold">OUR STORY</span>
              <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#f5f0eb] font-bold leading-snug mt-1.5 sm:mt-2">
                From a Small Kitchen to Coimbatore&apos;s Favourite Biryani House
              </h2>
            </Item>
            <Item as="p" className="text-xs sm:text-sm text-[#9e9188] leading-relaxed">
              Spice Route Biryani House was born in 2016 with a single mission — to bring the rich, aromatic flavours of authentic Hyderabadi and Chettinad dum biryani to the heart of Coimbatore.
            </Item>
            <Item as="p" className="text-xs sm:text-sm text-[#9e9188] leading-relaxed">
              Every grain of rice, every whole spice, and every layer of slow-cooked flavour tells a story of our heritage, passion, and dedication to quality.
            </Item>

            <Stagger gap={0.12} delay={0.1} className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
              {HIGHLIGHTS.map((h) => (
                <HighlightCard key={h.id} {...h} />
              ))}
            </Stagger>

            <Item className="pt-2">
              <Button to="/menu" icon="arrow_forward" className="w-full sm:w-auto">Explore Our Menu</Button>
            </Item>
          </Stagger>
        </section>

        <StatsBanner />

        {/* Team */}
        <section className="space-y-6 sm:space-y-8">
          <Stagger className="text-center space-y-2">
            <Item as="span" className="block text-[11px] sm:text-xs text-[#ec5b13] uppercase tracking-widest font-bold">MEET THE TEAM</Item>
            <Item as="h2" className="font-serif text-xl sm:text-3xl lg:text-4xl text-[#f5f0eb] font-bold">The People Behind Every Plate</Item>
            <Item as="p" className="text-xs sm:text-sm text-[#9e9188] max-w-xl mx-auto">
              Dedicated culinary masters and hospitality professionals crafting memorable dining moments in Coimbatore.
            </Item>
          </Stagger>

          <Stagger gap={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
            {TEAM.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </Stagger>
        </section>
      </div>
    </main>
  );
}
