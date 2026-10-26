import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useToast } from './ToastContext.jsx';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { showToast } = useToast();
  const [items, setItems] = useState([]); // [{ id, name, price, qty }]
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback(
    (item) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
        return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }];
      });
      showToast(`${item.name} added to cart!`);
    },
    [showToast],
  );

  const changeQty = useCallback((id, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const removeItem = useCallback((id) => setItems((prev) => prev.filter((i) => i.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      changeQty,
      removeItem,
      clear,
    }),
    [items, isOpen, addItem, changeQty, removeItem, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
