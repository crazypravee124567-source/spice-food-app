import { SITE } from '../../data/site.js';

export default function OpenHours() {
  const { weekdays, sunday } = SITE.hours;
  return (
    <div className="pt-4 sm:pt-5 border-t border-[#382b26] space-y-1.5">
      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#9e9188]">WE ARE OPEN FROM</div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-xs sm:text-sm text-[#f5f0eb] font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span><strong className="font-semibold text-white">{weekdays.label}:</strong> {weekdays.time}</span>
        </div>
        <div className="text-[#9e9188] hidden sm:inline">•</div>
        <span className="pl-4 sm:pl-0"><strong className="font-semibold text-white">{sunday.label}:</strong> {sunday.time}</span>
      </div>
    </div>
  );
}
