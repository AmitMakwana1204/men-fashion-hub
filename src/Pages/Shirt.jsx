import React from "react";
import { useCart } from "./Cartcontext";
import './Shirt.css';

const products = [
  {
    id: 1,
    name: "Double Cuff Sky Blue Shirt",
    price: 499,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1813-03-M3138_55c1b4d9-546d-4b06-9452-8ecbda858518.jpg?v=1761547329&quality=80",
  },
  {
    id: 2,
    name: "Staunton Red Shirt",
    price: 549,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2671-06-M22.jpg?v=1703750561&quality=80",
  },
  {
    id: 3,
    name: "Green Slim Fit Shirt",
    price: 749,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4b6af9ad2084fd0737996336ef9aa53e.jpg?v=1734528534&quality=80",
  },
   {
    id: 5,
    name: "Olive Solid Twill Shirt",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/3a2365be06338b38469387644b409679.jpg?v=1731388602&quality=80",
  },
   {
    id: 6,
    name: "Black Stripes Slim Fit Shirt",
    price: 899,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 7,
    name: "Slim Fit Viscose Teal Shirt",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3993-04-M3.jpg?v=1750663918&quality=80",
  },
   {
    id: 8,
    name: "Slim Fit Viscose Cream Shirt",
    price: 1129,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3993-01-M26.jpg?v=1750663887&quality=80",
  },
   {
    id: 9,
    name: "Tan Solid Twill Shirt",
    price: 813,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/e6b2b86773943440209e0d4ea91c3e08.jpg?v=1729086731&quality=80",
  },
   {
    id: 10,
    name: "Coral Slim Fit Shirt",
    price: 1129,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/265e60289fe4063a6e2c0e783dcbbb64.jpg?v=1727500973&quality=80",
  },
   {
    id: 11,
    name: "White Slim Fit Single Pocket Kurta",
    price: 853,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/600c734040d2a9f385830c74112e3458.jpg?v=1734529040&quality=80",
  },
   {
    id: 12,
    name: "Maroon Slim Fit Shirt",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3421-04_1_ef70963f-5535-485c-91a1-6e0082a53b36.jpg?v=1743502379&quality=80",
  },
   {
    id: 13,
    name: "Navy Solid Slim Fit Shirt",
    price: 1219,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3421-05_1_d29cb6e5-e9a5-4af7-8354-b9913f83ca8d.jpg?v=1743014586&quality=80",
  },
   {
    id: 14,
    name: "Cream Plain Slim Fit Shirt",
    price: 1007,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4048-01_1_1b342ae0-dbfb-494f-b93c-a3705c46aa94.jpg?v=1745087141&quality=80",
  },
   {
    id: 15,
    name: "Estonia White Shirt",
    price: 1319,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2335-01-M57.jpg?v=1704365979&quality=80",
  },
   {
    id: 16,
    name: "Estonia Dark Green Shirt",
    price: 979,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2335-06-M47_a7176874-64f0-4939-acdb-afa13627d7b9.jpg?v=1732601112&quality=80",
  },
   {
    id: 17,
    name: "Light Grey Button Down Regular Fit Plus Size Shirt",
    price: 985,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_9bc312d1-90a5-4c2e-8703-f564d841a144.jpg?v=1751540370&quality=80",
  },
];

const Shirt = () => {
  const { addToCart } = useCart();

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


export default Shirt;