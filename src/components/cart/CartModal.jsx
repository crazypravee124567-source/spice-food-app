import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export default function CartModal() {
  const { isOpen, closeCart, items, total, changeQty, removeItem, clear } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && closeCart();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, closeCart]);

  const checkout = () => {
    showToast('Thank you! Your takeaway order has been sent to our chef.');
    clear();
    closeCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCart}
          className="fixed inset-0 z-[55] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Your order summary"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="bg-[#241a17] border-t sm:border border-[#382b26] rounded-t-2xl sm:rounded-lg w-full max-w-md p-5 sm:p-6 shadow-2xl max-h-[85vh] flex flex-col"
          >
            {/* Mobile Sheet grab handle */}
            <div className="w-10 h-1 bg-[#382b26] rounded-full mx-auto mb-3 sm:hidden shrink-0" />

            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#382b26] shrink-0">
              <div className="flex items-center gap-2">
                <Icon name="shopping_bag" className="text-[#ec5b13] text-[20px]" />
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#f5f0eb]">Your Order Summary</h3>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close"
                className="w-8 h-8 rounded-lg bg-[#1a1412] border border-[#382b26] text-[#9e9188] hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon name="close" className="text-[18px]" />
              </button>
            </div>

            <div className="py-3 sm:py-4 max-h-[48vh] sm:max-h-[280px] overflow-y-auto space-y-2.5 sm:space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-8 text-[#9e9188] text-xs sm:text-sm">
                  Your cart is empty. Explore our menu to add aromatic biryanis!
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30, height: 0, marginTop: 0 }}
                      className="flex items-center justify-between gap-3 p-2.5 sm:p-3 bg-[#1a1412] rounded-lg border border-[#382b26]"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-semibold text-[#f5f0eb] truncate">{item.name}</div>
                        <div className="text-xs text-[#ec5b13] font-bold">₹{item.price * item.qty}</div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => changeQty(item.id, -1)}
                          className="w-7 h-7 sm:w-6 sm:h-6 rounded bg-[#241a17] border border-[#382b26] text-[#f5f0eb] hover:bg-[#382b26] flex items-center justify-center active:scale-90"
                        >
                          <Icon name="remove" className="text-xs" />
                        </button>
                        <span className="w-5 text-center text-xs font-semibold">{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => changeQty(item.id, 1)}
                          className="w-7 h-7 sm:w-6 sm:h-6 rounded bg-[#241a17] border border-[#382b26] text-[#f5f0eb] hover:bg-[#382b26] flex items-center justify-center active:scale-90"
                        >
                          <Icon name="add" className="text-xs" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Remove ${item.name}`}
                          onClick={() => removeItem(item.id)}
                          className="ml-1 text-[#9e9188] hover:text-red-400 p-1.5"
                        >
                          <Icon name="delete" className="text-sm" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {items.length > 0 && (
              <div className="pt-3 sm:pt-4 border-t border-[#382b26] space-y-3 shrink-0">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#9e9188]">Estimated Total:</span>
                  <span className="text-[#ec5b13] font-serif text-lg sm:text-xl">₹{total}</span>
                </div>
                <Button onClick={checkout} className="w-full h-11 sm:h-auto" size="md">
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
