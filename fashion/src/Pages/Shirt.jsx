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
    name: "Black Stripes Slim Fit Shirt",
    price: 799,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 6,
    name: "Double Cuff Maroon Shirt",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1813-08-M3008_4034dcd5-e4b6-4332-96b6-616a46edfa1c.jpg?v=1682190863&quality=80",
  },
   {
    id: 7,
    name: "Double Cuff Olive Shirt",
    price: 849,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1813-07-M2123_82bc8026-62e8-4749-a152-4e3d6ff4f01d.jpg?v=1682190824&quality=80",
  },
   {
    id: 8,
    name: "Double Cuff Peach Shirt",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1813-05-M2_ec3f85aa-fef5-4b78-9b27-01bb8beedec0.jpg?v=1762334817&quality=80",
  },
   {
    id: 9,
    name: "Double Cuff Sky Blue Shirt",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1813-03-M3138_55c1b4d9-546d-4b06-9452-8ecbda858518.jpg?v=1761547329&quality=80",
  },
   {
    id: 10,
    name: "Light Grey Plain Slim Fit Luxe Shirt",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MLX1004-07_1_b10ff8d0-c11d-40ee-9534-b51e814dac66.jpg?v=1745086664&quality=80",
  },
   {
    id: 11,
    name: "Beige Plain Slim Fit Luxe Shirt",
    price: 489,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MLX1004-04_1_6a49a8c7-91a4-4f97-a34d-fef9f4ef896c.jpg?v=1746613581&quality=80",
  },
   {
    id: 12,
    name: "Dark Brown Plain Slim Fit Luxe Shirt",
    price: 679,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MLX1004-03_1_0dc536d0-85ce-438e-adf3-1c0066d89565.jpg?v=1746613393&quality=80",
  },
   {
    id: 13,
    name: "Slim Fit Stretch Sky Blue Luxe Shirt",
    price: 589,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MLX1004-10_3_ab3738e2-7c9b-4656-8d43-c5300bc85671.jpg?v=1747918981&quality=80",
  },
   {
    id: 14,
    name: "Slim Fit Stretch Light Pink Luxe Shirt",
    price: 539,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MLX1004-05_6_fa57e098-3060-4e17-933d-49fd1d94782f.jpg?v=1747919118&quality=80",
  },
   {
    id: 15,
    name: "Slim Fit Plain Light Blue Shirt",
    price: 439,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4050-03-M13.jpg?v=1750664060&quality=80",
  },
   {
    id: 16,
    name: "Slim Fit Plain Mauve Shirt",
    price: 679,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS4050-04_1_8f6cf5db-79c2-4d62-af60-d7b8594d7e47.jpg?v=1746190822&quality=80",
  },
   {
    id: 17,
    name: "Light Grey Slim Fit Shirt",
    price: 485,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/a55376cfbdcc53ec2b87542758763de3.jpg?v=1734528674&quality=80",
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