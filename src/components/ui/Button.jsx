import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

const VARIANTS = {
  primary:
    'bg-[#ec5b13] hover:bg-[#cf4c0a] text-white shadow-lg shadow-[#ec5b13]/25 hover:-translate-y-0.5',
  outline:
    'border-2 border-[#ec5b13] text-[#ec5b13] hover:bg-[#ec5b13] hover:text-white hover:-translate-y-0.5',
};

const SIZES = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

/**
 * <Button to="/menu"> renders a router Link, otherwise a <button>.
 * Pass `icon` (+ optional `iconPosition`) for a Material icon.
 */
export default function Button({
  to,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 active:scale-95 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const iconEl = icon ? (
    <Icon
      name={icon}
      className={`text-[18px] ${iconPosition === 'right' ? 'transition-transform group-hover:translate-x-1' : ''}`}
    />
  ) : null;

  const content = (
    <>
      {icon && iconPosition === 'left' && iconEl}
      <span>{children}</span>
      {icon && iconPosition === 'right' && iconEl}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
