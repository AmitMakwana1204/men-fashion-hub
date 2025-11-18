import React from 'react';
import { useCart } from "./Cartcontext";
import './Pent.css';

const products = [
  {
    id: 1,
    name: "KOTTY Mens Regular Fit | Classic Design with Stylish Look | Day Comfort | Mid Rise Stretchable Jeans",
    price: 499,
    image: "https://m.media-amazon.com/images/I/61dFcpPdJkL._SY741_.jpg",
  },
  {
    id: 2,
    name: "Men Jeans || Jeans for Men || Cargo Jeans",
    price: 599,
    image: "https://m.media-amazon.com/images/I/815gdBdQIOL._SY741_.jpg",
  },
  {
    id: 3,
    name: "Urbano Fashion Men Mid Rise Slim Fit Washed Jeans Stretchable",
    price: 549,
    image: "https://m.media-amazon.com/images/I/61Frlc0VnWL._SY741_.jpg",
  },
  {
    id: 5,
    name: "INKAST Men's Solid Regular Fit Jeans",
    price: 399,
    image: "https://m.media-amazon.com/images/I/81iqWYMhlnL._SX569_.jpg",
  },
  {
    id: 6,
    name: "TAGAS Jeans for Men | Regular Fit Denim Jeans | Mens Jeans Pant",
    price: 699,
    image: "https://m.media-amazon.com/images/I/51ZsLj2BwcL._SY741_.jpg",
  },
  {
    id: 7,
    name: "London Hills Tapered Fit Mid Rise Classic Stretchable Jeans | Casual Denim Jeans for Men | Slim Fit Jeans for Men Blue",
    price: 699,
    image: "https://m.media-amazon.com/images/I/61Jl2TZzurL._SY741_.jpg",
  },
  {
    id: 8,
    name: "Urbano Fashion Men's Loose Mid Rise Baggy Fit Washed Cargo Jeans with 6 Pockets Non-Stretchable",
    price: 999,
    image: "https://m.media-amazon.com/images/I/719H9lrAnAL._SY741_.jpg",
  },
  {
    id: 9,
    name: "GRECIILOOKS Baggy Cargo Jeans for Men – Mid Rise Relaxed Fit Denim Cargo Pants | Streetwear Utility Pant with Multiple Pockets",
    price: 699,
    image: "https://m.media-amazon.com/images/I/613hmtm815L._SY741_.jpg",
  },
  {
    id: 10,
    name: "London Hills Men Jeans || Baggy Fit Jeans for Men || Loose Fit High Rise Denim || Stretchable Casual Wear Jeans",
    price: 499,
    image: "https://m.media-amazon.com/images/I/614ClgR9koL._SX679_.jpg",
  },
  {
    id: 11,
    name: "Men Jeans || Jeans for Men || Men Jeans Pants || Jeans Pant for Men",
    price: 499,
    image: "https://m.media-amazon.com/images/I/51L3klSDodL._SY741_.jpg",
  },
  {
    id: 12,
    name: "Mehrang Men's Stretchable Formal Pant Trousers | Stylish Slim Fit Men's Wear Trousers for Office or Party",
    price: 699,
    image: "https://m.media-amazon.com/images/I/71VcG9VD23L._SX679_.jpg",
  },
  {
    id: 13,
    name: "Dockstreet Men Baggy Denim Jeans in Pure 100% Cotton Denim || Stretchable Jeans || Unisex Designs",
    price: 899,
    image: "https://m.media-amazon.com/images/I/61f8ZKHW-IL._SY741_.jpg",
  },
  {
    id: 14,
    name: "Lymio Men Cargo || Men Cargo Pants Cotton || Casual Cargos Pant",
    price: 899,
    image: "https://m.media-amazon.com/images/I/61u5oAftaeL._SY741_.jpg",
  },
  {
    id: 15,
    name: "JVX Jeans for Men || Men Jeans || Men Jeans Pants || Denim Jeans",
    price: 699,
    image: "https://m.media-amazon.com/images/I/51ljBk8w8ML._SY741_.jpg",
  },
  {
    id: 16,
    name: "QNIM Men Jeans || Jeans for Men || Cargo Pant",
    price: 799,
    image: "https://m.media-amazon.com/images/I/71Y1Wrz2lpL._SY741_.jpg",
  },
  {
    id: 17,
    name: "GRECIILOOKS Men's Relaxed Fit Straight Leg Denim Jeans | Casual High-Waist Baggy Pant with Drawstring",
    price: 599,
    image: "https://m.media-amazon.com/images/I/71aDdbToIdL._SY741_.jpg",
  },
  
];

const Pent = () => {
  const { addToCart } = useCart(); // ✅ Added this line

  return (

<div className="container">
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.name} />
      <h6>{product.name}</h6>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  ))}
</div>
  );
};

export default Pent;