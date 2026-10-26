import HeroContent from '../components/home/HeroContent.jsx';
import HeroVisual from '../components/home/HeroVisual.jsx';

export default function HomePage() {
  return (
    <main className="flex-grow flex items-center relative py-6 lg:py-12 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#ec5b13]/10 via-[#ec5b13]/5 to-transparent rounded-full filter blur-[100px] pointer-events-none animate-glow" />
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[540px]">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </main>
  );
}
