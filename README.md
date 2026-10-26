# Spice Route Biryani House

React + Vite + Tailwind + Framer Motion. Your single-file prototype, split into reusable components.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
```

## Structure

```
src/
  main.jsx / App.jsx        providers + animated routes
  data/                     site info, menu, blog, team (edit content here)
  context/                  CartContext, ToastContext
  animations/               variants.js, Motion.jsx (Stagger, Item, Reveal), CountUp.jsx
  components/
    ui/                     Button, Icon, SectionHeading, FilterTabs, Pagination, StatCard, FormField
    layout/                 Header, Footer, Logo, Layout, PageTransition, ScrollToTop
    cart/                   CartModal
    home/ menu/ about/ book/ blog/   page-specific pieces
  pages/                    HomePage, MenuPage, AboutPage, BookPage, BlogPage
```

## Animations

- All pages: fade/slide route transitions, header slide-in, animated nav underline, cart badge pop, toast spring.
- Home: staggered hero text, dish scale-in then float, floating badges, count-up stats.
- Menu: sliding filter pill, staggered cards, animated filtering.
- About: image/text slide-ins, stagger highlights, count-up stats, hover-lift team cards.
- Book: image zoom, staggered form fields, drawn-checkmark success state.
- Blog: featured scale-in, scroll-reveal cards, sliding filter pill, newsletter success.
- Respects the OS "reduce motion" setting (MotionConfig).
