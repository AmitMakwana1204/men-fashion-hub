import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 1. Add/Increment Quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        // If product exists, increment its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // If product is new, add it with quantity 1
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  // 2. Decrement Quantity or Remove
  const decreaseQty = (id) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === id) {
          // If quantity is more than 1, decrement it
          if (item.qty > 1) {
            acc.push({ ...item, qty: item.qty - 1 });
          }
          // If quantity is 1, simply skip pushing it to remove the item
        } else {
          // Keep other items as they are
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  // 3. Remove Item completely
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 4. Update Quantity directly (already present, kept for completeness)
  const updateQty = (id, qty) => {
    if (qty <= 0) {
      // If the new quantity is 0 or less, remove the item
      removeFromCart(id);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: qty } : item
      )
    );
  };
  
  // 5. Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Advanced Feature: Calculation (using useMemo for optimization)
  const cartSummary = useMemo(() => {
    const totalItems = cart.reduce((total, item) => total + item.qty, 0);

    // Assuming each product object has a 'price' property
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );

    return { totalItems, totalPrice };
  }, [cart]); // Recalculate only when the cart state changes

  const contextValue = {
    cart,
    ...cartSummary, // totalItems and totalPrice
    addToCart,
    decreaseQty,
    removeFromCart,
    updateQty,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);