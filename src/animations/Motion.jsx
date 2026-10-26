import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from './variants.js';

/**
 * <Stagger> + <Item>: a parent that staggers its <Item> children.
 *  - inView (default true): plays when scrolled into view
 *  - inView={false}: plays immediately on mount (use for above-the-fold content)
 */
export function Stagger({
  children,
  gap = 0.1,
  delay = 0,
  inView = true,
  once = true,
  as = 'div',
  className = '',
  ...rest
}) {
  const Comp = motion[as];
  const trigger = inView
    ? { initial: 'hidden', whileInView: 'show', viewport: { once, margin: '-60px' } }
    : { initial: 'hidden', animate: 'show' };
  return (
    <Comp variants={staggerContainer(gap, delay)} className={className} {...trigger} {...rest}>
      {children}
    </Comp>
  );
}

export function Item({ children, variants = fadeUp, as = 'div', className = '', ...rest }) {
  const Comp = motion[as];
  return (
    <Comp variants={variants} className={className} {...rest}>
      {children}
    </Comp>
  );
}

/** <Reveal>: a single element that animates in when scrolled into view. */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  once = true,
  as = 'div',
  className = '',
  ...rest
}) {
  const Comp = motion[as];
  // A variant's own transition beats the `transition` prop, so merge the delay into it.
  const delayed = delay
    ? { ...variants, show: { ...variants.show, transition: { ...variants.show.transition, delay } } }
    : variants;
  return (
    <Comp
      variants={delayed}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
