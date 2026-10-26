import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import CartModal from '../cart/CartModal.jsx';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#140e0c] text-[#f5f0eb] font-sans antialiased overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
      <CartModal />
    </div>
  );
}
