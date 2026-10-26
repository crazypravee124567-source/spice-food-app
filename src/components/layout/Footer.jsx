import Icon from '../ui/Icon.jsx';
import { SITE } from '../../data/site.js';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#382b26] py-5 sm:py-6 bg-[#1a1412]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between text-[11px] sm:text-xs text-[#9e9188] gap-3 sm:gap-4 text-center md:text-left">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <Icon name="location_on" className="text-[#ec5b13] text-[16px] sm:text-[18px] shrink-0" />
          <span>{SITE.footerAddress}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          <span>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</span>
          <span className="text-[#382b26] hidden md:inline">•</span>
          <span className="text-[#ec5b13] font-medium">{SITE.footerTagline}</span>
        </div>
      </div>
    </footer>
  );
}
