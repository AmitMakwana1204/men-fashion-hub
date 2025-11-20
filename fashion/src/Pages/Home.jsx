import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import Shirt from "./Shirt";
import Pent from "./Pent";

const Home = () => {
  return (
    <>
      {/* ================= Banner Carousel ================= */}
      <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="https://i.pinimg.com/1200x/1e/1c/3e/1e1c3ebdccc66d783108d9f77b920a93.jpg" 
              className="d-block w-100" 
              alt="Slide 1" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://i.pinimg.com/1200x/8d/d9/3d/8dd93dd94e6e49e3754664d214f36b66.jpg" 
              className="d-block w-100" 
              alt="Slide 2" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://i.pinimg.com/1200x/95/f9/16/95f916f0e120311e8c76893a412e3077.jpg" 
              className="d-block w-100" 
              alt="Slide 3" 
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2"></button>
        </div>
      </div>

      {/* ================= Offer Banner ================= */}
      <div className="offer-banner text-center py-3">
        <h3>🔥 Flat 40% OFF on New Winter Collection</h3>
        <p>Limited Time Offer – Shop Now!</p>
      </div>

     {/* ================= Featured Categories ================= */}
<section className="featured-categories container mt-4">
  <h2 className="section-title">Featured Categories</h2>

  <div className="feature-btn-wrapper">
    <button className="feature-btn">Shirt</button>
    <button className="feature-btn">Pant</button>
  </div>
</section>


      {/* ================= Products Sections ================= */}
      <div className="home-product-grid">
      <div className="home-sections container">
        <section className="product-section">
          <h2 className="section-title">Shirts Collection</h2>
          <Shirt />
        </section>

        <section className="product-section">
          <h2 className="section-title">Pants Collection</h2>
          <Pent />
        </section>
      </div>
      </div>

      {/* ================= Testimonials ================= */}
      <section className="testimonials container mt-4">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4 testimonial-card">"Excellent quality! Must buy." </div>
          <div className="col-md-4 testimonial-card">"Fast delivery & good fitting." </div>
          <div className="col-md-4 testimonial-card">"Worth the money!" </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="footer text-center py-3 mt-4">
        <p>© 2025 My Clothing Store | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Home;