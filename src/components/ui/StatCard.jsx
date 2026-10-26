import CountUp from '../../animations/CountUp.jsx';

/** Number + label. variant "box" = bordered card (home), "plain" = bare (about banner). */
export default function StatCard({ value, suffix = '', decimals = 0, label, variant = 'box', className = '' }) {
  const box = variant === 'box';
  return (
    <div className={`${box ? 'bg-[#241a17] p-3 rounded-lg border border-[#382b26]' : 'flex flex-col items-center justify-center px-4'} ${className}`}>
      <div className={`font-serif font-bold text-[#ec5b13] tracking-tight ${box ? 'text-2xl lg:text-3xl' : 'text-3xl sm:text-4xl'}`}>
        <CountUp to={value} decimals={decimals} suffix={suffix} />
      </div>
      <div className={`text-xs text-[#9e9188] font-medium ${box ? 'tracking-tight mt-0.5' : 'mt-1'}`}>{label}</div>
    </div>
  );
}
