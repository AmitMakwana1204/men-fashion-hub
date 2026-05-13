import React, { useState } from "react";
import { useCart } from "./Cartcontext";
import "./Pent.css";

const products = [
  {
    id: "p1",
    name: "KOTTY Mens Regular Fit Jeans",
    price: 499,
    image:
      "https://m.media-amazon.com/images/I/61dFcpPdJkL._SY741_.jpg",
    category: "Regular Fit",
  },

  {
    id: "p2",
    name: "Cargo Jeans For Men",
    price: 599,
    image:
      "https://m.media-amazon.com/images/I/815gdBdQIOL._SY741_.jpg",
    category: "Cargo",
  },

  {
    id: "p3",
    name: "Urbano Slim Fit Washed Jeans",
    price: 549,
    image:
      "https://m.media-amazon.com/images/I/61Frlc0VnWL._SY741_.jpg",
    category: "Slim Fit",
  },

  {
    id: "p5",
    name: "INKAST Regular Fit Jeans",
    price: 399,
    image:
      "https://m.media-amazon.com/images/I/81iqWYMhlnL._SX569_.jpg",
    category: "Casual",
  },

  {
    id: "p6",
    name: "TAGAS Denim Jeans",
    price: 699,
    image:
      "https://m.media-amazon.com/images/I/51ZsLj2BwcL._SY741_.jpg",
    category: "Denim",
  },

  {
    id: "p7",
    name: "London Hills Slim Fit Jeans",
    price: 699,
    image:
      "https://m.media-amazon.com/images/I/61Jl2TZzurL._SY741_.jpg",
    category: "Premium",
  },
];

const Pent = () => {

  const { addToCart } = useCart();

  const [wishlist, setWishlist] = useState([]);

  // ================= WISHLIST =================
  const toggleWishlist = (id) => {

    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );

  };

  return (

    <div className="pant-container">

      {products.map((product) => (

        <div
          key={product.id}
          className="pant-card"
        >

          {/* ================= CATEGORY ================= */}
          <span className="pant-badge">
            {product.category}
          </span>

          {/* ================= WISHLIST ================= */}
          <span
            className="wishlist-icon"
            onClick={() =>
              toggleWishlist(product.id)
            }
          >
            {wishlist.includes(product.id)
              ? "❤️"
              : "🤍"}
          </span>

          {/* ================= IMAGE ================= */}
          <div className="pant-image-box">

            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
            />

          </div>

          {/* ================= INFO ================= */}
          <div className="pant-info">

            <h4>{product.name}</h4>

            <p className="pant-price">
              ₹{product.price}
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="pant-btn-group">

              <button
                className="cart-btn"
                onClick={() =>
                  addToCart(product)
                }
              >
                Add To Cart
              </button>

              <button
                className="buy-btn"
                onClick={() => {
                  addToCart(product);
                  alert("Proceeding to checkout");
                }}
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  );
};

export default Pent;