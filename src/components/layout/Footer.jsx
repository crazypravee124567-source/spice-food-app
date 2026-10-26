import Icon from '../ui/Icon.jsx';
import { SITE } from '../../data/site.js';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#382b26] py-6 bg-[#1a1412]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between text-xs text-[#9e9188] gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <Icon name="location_on" className="text-[#ec5b13] text-[18px]" />
          <span>{SITE.footerAddress}</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</span>
          <span className="text-[#382b26] hidden md:inline">•</span>
          <span className="text-[#ec5b13] font-medium">{SITE.footerTagline}</span>
        </div>
      </div>
    </footer>
  );
}
