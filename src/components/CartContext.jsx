import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // [{id, title, price, qty, ...}]
  // opcional: persistir en localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (product, quantity) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + quantity } : p
        );
      }
      return [...prev, { ...product, qty: quantity }];
    });
  };

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clear = () => setCart([]);
  const getTotalQty = () => cart.reduce((s, p) => s + p.qty, 0);
  const getTotalPrice = () => cart.reduce((s, p) => s + p.qty * p.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, getTotalQty, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
