// Single source of truth for restaurant info, navigation and shared images.
export const SITE = {
  name: 'Spice Route',
  tagline: 'Biryani House • CBE',
  fullName: 'Spice Route Biryani House',
  footerAddress: 'Avinashi Road & RS Puram, Coimbatore, Tamil Nadu',
  address: 'RS Puram, Coimbatore, Tamil Nadu',
  phone: '+91 98765 43210',
  email: 'hello@spiceroute.in',
  footerTagline: 'Authentic Seeraga Samba & Hyderabadi Dum Biryani',
  hours: {
    weekdays: { label: 'Mon–Sat', time: '11:00am – 11:00pm' },
    sunday: { label: 'Sunday', time: '12:00pm – 10:00pm' },
  },
};

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About Us' },
  { to: '/book', label: 'Book a Table' },
  { to: '/blog', label: 'Blog' },
];

// Replace the "#" hrefs with real profile links.
export const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'Facebook', href: '#' },
];

export const IMAGES = {
  hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC7SBIJa4_d___x_UMH9gw_Beh5Z0sZRzujqPznE2AFQr2aSSZsufjcLS9jG28JR9rMtcg7pCDC-zk2b3Uc-37JNGeGvcWsDAbGgw_cQl4oLmDhwZLr4VPIXt7pI_nJGVmGKes1N6ABghmYbDKhGsRUJXq_9yC7jLh0uLuOa5OezAf_kkHe2m_MHczV6k4-pAqz7xyzeiA07282eO3_vXrr2OdnkYcM3jHZ5a3qglGGnoeleHsvoz97EQ',
  avatars: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  ],
  masterChef:
    'https://lh3.googleusercontent.com/aida/AEtjO1UuzSKc3hm6yv0yVjPO4yqnTHc1ShM0fMG2Lzaoy_dYIi88hAEQHzw12qMCr7_HHCRg8lrVu8aKfON_DtT3qgFmw_kI0GcA5VIe_Yf76JDrHY_9aX3SdPj7Oiq5eultCwK2P_RbKJmKjK4MF63twn-ofv3e4fyjuyNjgWacp7V9-qZwhYPhhWQT547y-Pgzx1fYzrczo4ZMkK7bETafj9wQL6X82dnhhmXXuaNqqKfYOzGdDmXPX1joGSs',
  restaurant:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA7b2zkEOgfAd93ei9Ipo7aQb7rYzyjvaxThLI7K8Min0CkdoVuzAMNwfPgLTEoeo5l7HbW_nsBvG30BF4ZfAI3ZR6g4jm9KNtV7vOvX66VCJEQuQTnr668ySoMY0b_IhGInI_qPZdUP6uIQnbukFwyRNj5q3zcaOG8yRyk8-5zEC9kd9pa6cPA09P3q96-ggDgMJMN8Z3Y6cbdbnxoj9enCb3HcFgcZZ7Dd2346ttQ_U29HjyCXyvkig',
};
