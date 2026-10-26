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
    const onKey = (e) => e.key === 'Escape' && closeCart();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
          className="fixed inset-0 z-[55] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Your order summary"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="bg-[#241a17] border border-[#382b26] rounded-lg w-full max-w-md p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#382b26]">
              <div className="flex items-center gap-2">
                <Icon name="shopping_bag" className="text-[#ec5b13]" />
                <h3 className="font-serif text-lg font-bold text-[#f5f0eb]">Your Order Summary</h3>
              </div>
              <button type="button" onClick={closeCart} aria-label="Close" className="text-[#9e9188] hover:text-white transition-colors">
                <Icon name="close" />
              </button>
            </div>

            <div className="py-4 max-h-[280px] overflow-y-auto space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-8 text-[#9e9188] text-sm">
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
                      className="flex items-center justify-between gap-3 p-2.5 bg-[#1a1412] rounded-lg border border-[#382b26]"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-[#f5f0eb] truncate">{item.name}</div>
                        <div className="text-[11px] text-[#ec5b13] font-bold">₹{item.price * item.qty}</div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button type="button" aria-label="Decrease quantity" onClick={() => changeQty(item.id, -1)} className="w-6 h-6 rounded bg-[#241a17] border border-[#382b26] text-[#f5f0eb] hover:bg-[#382b26] flex items-center justify-center">
                          <Icon name="remove" className="text-sm" />
                        </button>
                        <span className="w-5 text-center text-xs font-semibold">{item.qty}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => changeQty(item.id, 1)} className="w-6 h-6 rounded bg-[#241a17] border border-[#382b26] text-[#f5f0eb] hover:bg-[#382b26] flex items-center justify-center">
                          <Icon name="add" className="text-sm" />
                        </button>
                        <button type="button" aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)} className="ml-1 text-[#9e9188] hover:text-red-400 p-1">
                          <Icon name="delete" className="text-sm" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {items.length > 0 && (
              <div className="pt-4 border-t border-[#382b26] space-y-3">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-[#9e9188]">Estimated Total:</span>
                  <span className="text-[#ec5b13] font-serif text-lg">₹{total}</span>
                </div>
                <Button onClick={checkout} className="w-full" size="sm">
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
