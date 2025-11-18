import React from "react";
import { useCart } from "./Cartcontext";
import "./Cart.css"; // ✅ CSS file import

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3 className="cart-empty">Cart is empty 😕</h3>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <div>
              <input
                type="number"
                value={item.qty}
                min="1"
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
              />
            </div>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h2 className="cart-total">Total: ₹{totalPrice}</h2>
    </div>
  );
};

export default Cart;