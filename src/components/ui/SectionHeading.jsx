import { Stagger, Item } from '../../animations/Motion.jsx';

/** Centered page/section heading: eyebrow with side bars, title, optional description. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  titleClassName = 'text-2xl sm:text-4xl lg:text-5xl',
  descriptionClassName = 'text-xs sm:text-sm',
}) {
  return (
    <Stagger inView={false} gap={0.12} className={`text-center mx-auto px-1 ${className}`}>
      <Item className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-2">
        <span className="w-5 sm:w-8 h-[2px] bg-[#ec5b13]" />
        <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-bold text-[#ec5b13]">{eyebrow}</span>
        <span className="w-5 sm:w-8 h-[2px] bg-[#ec5b13]" />
      </Item>
      <Item as="h1" className={`font-serif font-bold text-[#f5f0eb] leading-tight mb-2.5 sm:mb-3 ${titleClassName}`}>
        {title}
      </Item>
      {description && (
        <Item as="p" className={`text-[#9e9188] mx-auto leading-relaxed ${descriptionClassName}`}>
          {description}
        </Item>
      )}
    </Stagger>
  );
}
