import React from "react";
import { useCart } from "./Cartcontext";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const {
    cart,
    removeFromCart,
    updateQty
  } = useCart();

  const navigate = useNavigate();

  // ================= TOTAL PRICE =================
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );

  // ================= PAYMENT =================
  const handlePayment = () => {

    navigate("/payment");

  };

  return (

    <div className="cart-page">

      <div className="cart-container">

        {/* ================= TITLE ================= */}
        <h1 className="cart-title">
          Shopping Cart
        </h1>

        {/* ================= EMPTY CART ================= */}
        {cart.length === 0 ? (

          <div className="cart-empty-box">

            <h3 className="cart-empty">
              Your Cart is Empty 😕
            </h3>

            <p>
              Add some stylish products to continue shopping.
            </p>

          </div>

        ) : (

          <>
            {/* ================= CART ITEMS ================= */}
            {cart.map((item) => (

              <div
                key={item.id}
                className="cart-item"
              >

                {/* ================= IMAGE ================= */}
                <div className="cart-image-box">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-img"
                  />

                </div>

                {/* ================= INFO ================= */}
                <div className="cart-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p className="cart-price">
                    ₹{item.price}
                  </p>

                </div>

                {/* ================= ACTIONS ================= */}
                <div className="cart-actions">

                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={(e) =>
                      updateQty(
                        item.id,
                        Number(e.target.value)
                      )
                    }
                  />

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

            {/* ================= TOTAL ================= */}
            <div className="cart-footer">

              <h2 className="cart-total">
                Total: ₹{totalPrice}
              </h2>

              {/* ================= PAYMENT BUTTON ================= */}
              <button
                className="pay-btn"
                onClick={handlePayment}
              >
                Proceed to Payment
              </button>

            </div>

          </>

        )}

      </div>

    </div>

  );
};

export default Cart;