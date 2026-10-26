import CountUp from '../../animations/CountUp.jsx';

/** Number + label. variant "box" = bordered card (home), "plain" = bare (about banner). */
export default function StatCard({ value, suffix = '', decimals = 0, label, variant = 'box', className = '' }) {
  const box = variant === 'box';
  return (
    <div className={`${box ? 'bg-[#241a17] p-2 sm:p-3 rounded-lg border border-[#382b26] text-center' : 'flex flex-col items-center justify-center px-2 sm:px-4'} ${className}`}>
      <div className={`font-serif font-bold text-[#ec5b13] tracking-tight ${box ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-2xl sm:text-4xl'}`}>
        <CountUp to={value} decimals={decimals} suffix={suffix} />
      </div>
      <div className={`text-[#9e9188] font-medium ${box ? 'text-[10px] sm:text-xs tracking-tight mt-0.5 leading-tight' : 'text-xs sm:text-sm mt-1'}`}>{label}</div>
    </div>
  );
}
