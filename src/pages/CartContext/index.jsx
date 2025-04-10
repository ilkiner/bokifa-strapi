// filepath: src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart, product];
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
      setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};