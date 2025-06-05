import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = (product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id)
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...prev, { product, quantity }]
    })
  }

  const removeFromCart = productId => {
    setItems(prev => prev.filter(i => i.product.id !== productId))
  }

  const clearCart = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}