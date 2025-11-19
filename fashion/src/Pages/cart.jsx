import React from "react";
import { useCart } from "./Cartcontext";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3 className="cart-empty">Cart is empty 😕</h3>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">

            {/* Product Image */}
            <img src={item.image} alt={item.name} className="cart-img" />

            {/* Product Name + Price */}
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            {/* Qty + Remove Btn */}
            <div className="cart-actions">
              <input
                type="number"
                value={item.qty}
                min="1"
                onChange={(e) =>
                  updateQty(item.id, Number(e.target.value))
                }
              />

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <h2 className="cart-total">Total: ₹{totalPrice}</h2>
    </div>
    </div>
  );
};

export default Cart;
