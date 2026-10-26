import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import CartModal from '../cart/CartModal.jsx';
import FloatingScrollNav from './FloatingScrollNav.jsx';
import BottomPageScrollBanner from './BottomPageScrollBanner.jsx';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#140e0c] text-[#f5f0eb] font-sans antialiased overflow-x-hidden relative">
      <ScrollToTop />
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      {pathname !== '/' && <BottomPageScrollBanner />}
      <Footer />
      <FloatingScrollNav />
      <CartModal />
    </div>
  );
}
