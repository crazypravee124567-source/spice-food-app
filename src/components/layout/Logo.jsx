import { Link } from 'react-router-dom';
import Icon from '../ui/Icon.jsx';
import { SITE } from '../../data/site.js';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
      <span className="w-10 h-10 rounded-lg bg-[#ec5b13]/10 border border-[#ec5b13]/30 flex items-center justify-center text-[#ec5b13] group-hover:scale-105 group-hover:rotate-6 transition-transform">
        <Icon name="local_fire_department" className="text-[24px]" />
      </span>
      <div className="flex flex-col">
        <span className="font-serif font-bold text-xl lg:text-2xl tracking-tight text-[#f5f0eb] leading-tight">
          Spice <span className="text-[#ec5b13]">Route</span>
        </span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#9e9188]">
          {SITE.tagline}
        </span>
      </div>
    </Link>
  );
}
