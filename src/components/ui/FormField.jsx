export const inputClass =
  'w-full bg-[#1a1412] border border-[#382b26] rounded-lg px-3.5 sm:px-4 text-base sm:text-sm text-[#f5f0eb] placeholder-[#9e9188]/60 focus:border-[#ec5b13] focus:outline-none focus:ring-1 focus:ring-[#ec5b13] transition-colors';

/** Label + control wrapper used by the reservation form. */
export default function FormField({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs font-semibold text-[#9e9188] uppercase tracking-wide mb-1.5"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
