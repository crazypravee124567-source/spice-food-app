import HeroContent from '../components/home/HeroContent.jsx';
import HeroVisual from '../components/home/HeroVisual.jsx';

export default function HomePage() {
  return (
    <main className="flex-grow flex items-center relative py-6 sm:py-10 lg:py-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-tr from-[#ec5b13]/10 via-[#ec5b13]/5 to-transparent rounded-full filter blur-[80px] sm:blur-[100px] pointer-events-none animate-glow" />
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-8 min-h-0 lg:min-h-[580px]">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </main>
  );
}
