import React, { useState } from "react";
import { useCart } from "./Cartcontext";
import "./Shirt.css";

const products = [
  {
    id: "s1",
    name: "Double Cuff Sky Blue Shirt",
    price: 499,
    image:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1813-03-M3138_55c1b4d9-546d-4b06-9452-8ecbda858518.jpg?v=1761547329&quality=80",
    category: "Formal",
  },

  {
    id: "s2",
    name: "Staunton Red Shirt",
    price: 549,
    image:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2671-06-M22.jpg?v=1703750561&quality=80",
    category: "Casual",
  },

  {
    id: "s3",
    name: "Green Slim Fit Shirt",
    price: 749,
    image:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4b6af9ad2084fd0737996336ef9aa53e.jpg?v=1734528534&quality=80",
    category: "Slim Fit",
  },

  {
    id: "s4",
    name: "Black Stripes Slim Fit Shirt",
    price: 799,
    image:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
    category: "Premium",
  },
];

const Shirt = () => {
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
    <div className="shirt-container">

      {products.map((product) => (

        <div
          key={product.id}
          className="shirt-card"
        >

          {/* ================= CATEGORY ================= */}
          <span className="shirt-badge">
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
          <div className="shirt-image-box">

            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
            />

          </div>

          {/* ================= INFO ================= */}
          <div className="shirt-info">

            <h4>{product.name}</h4>

            <p className="shirt-price">
              ₹{product.price}
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="shirt-btn-group">

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

export default Shirt;