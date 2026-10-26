import Icon from './Icon.jsx';

const base =
  'w-9 h-9 rounded-lg flex items-center justify-center border transition-all active:scale-90';

export default function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null;
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-12 pt-4">
      <button
        type="button"
        aria-label="Previous page"
        onClick={() => onChange(Math.max(1, page - 1))}
        className={`${base} bg-[#241a17] text-[#9e9188] border-[#382b26] hover:text-white hover:bg-[#382b26]`}
      >
        <Icon name="chevron_left" className="text-base" />
      </button>

      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={`${base} text-sm font-semibold ${
            page === n
              ? 'bg-[#ec5b13] text-white border-transparent shadow-md'
              : 'bg-[#241a17] text-[#9e9188] border-[#382b26] hover:bg-[#382b26] hover:text-white'
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        onClick={() => onChange(Math.min(pages, page + 1))}
        className={`${base} bg-[#241a17] text-[#9e9188] border-[#382b26] hover:text-white hover:bg-[#382b26]`}
      >
        <Icon name="chevron_right" className="text-base" />
      </button>
    </nav>
  );
}
