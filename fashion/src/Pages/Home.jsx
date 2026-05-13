import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Home.css";

import Shirt from "./Shirt";
import Pent from "./Pent";

const Home = () => {

  return (

    <>

      {/* ================= HERO CAROUSEL ================= */}
      <div
        id="bannerCarousel"
        className="carousel slide hero-carousel"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >

        {/* ================= INDICATORS ================= */}
        <div className="carousel-indicators">

          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="2"
          ></button>

        </div>

        {/* ================= SLIDES ================= */}
        <div className="carousel-inner">

          {/* ================= SLIDE 1 ================= */}
          <div className="carousel-item active">

            <img
              src="https://i.pinimg.com/1200x/1e/1c/3e/1e1c3ebdccc66d783108d9f77b920a93.jpg"
              className="d-block w-100 carousel-image"
              alt="Fashion Banner"
            />

            <div className="carousel-caption">

              <h1>
                MEN FASHION HUB
              </h1>

              <p>
                Premium Collection For Modern Men
              </p>

              <button className="shop-btn">
                Shop Now
              </button>

            </div>

          </div>

          {/* ================= SLIDE 2 ================= */}
          <div className="carousel-item">

            <img
              src="https://i.pinimg.com/1200x/8d/d9/3d/8dd93dd94e6e49e3754664d214f36b66.jpg"
              className="d-block w-100 carousel-image"
              alt="Winter Collection"
            />

            <div className="carousel-caption">

              <h1>
                Winter Collection
              </h1>

              <p>
                Trending Styles With Premium Quality
              </p>

              <button className="shop-btn">
                Explore
              </button>

            </div>

          </div>

          {/* ================= SLIDE 3 ================= */}
          <div className="carousel-item">

            <img
              src="https://i.pinimg.com/1200x/95/f9/16/95f916f0e120311e8c76893a412e3077.jpg"
              className="d-block w-100 carousel-image"
              alt="New Arrival"
            />

            <div className="carousel-caption">

              <h1>
                New Arrivals
              </h1>

              <p>
                Upgrade Your Fashion Style
              </p>

              <button className="shop-btn">
                Buy Now
              </button>

            </div>

          </div>

        </div>

        {/* ================= CONTROLS ================= */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      {/* ================= OFFER BANNER ================= */}
      <section className="offer-banner">

        <h3>
          🔥 Flat 40% OFF On Winter Collection
        </h3>

        <p>
          Limited Time Offer — Shop Today
        </p>

      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="featured-categories container">

        <h2 className="section-title">
          Featured Categories
        </h2>

        <div className="feature-btn-wrapper">

          <button className="feature-btn">
            Shirts
          </button>

          <button className="feature-btn">
            Pants
          </button>

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}
      <div className="home-product-grid">

        <div className="home-sections container">

          {/* ================= SHIRTS ================= */}
          <section className="product-section">

            <div className="section-header">

              <h2 className="section-title">
                Shirts Collection
              </h2>

              <button className="view-all-btn">
                View All
              </button>

            </div>

            <Shirt />

          </section>

          {/* ================= PANTS ================= */}
          <section className="product-section">

            <div className="section-header">

              <h2 className="section-title">
                Pants Collection
              </h2>

              <button className="view-all-btn">
                View All
              </button>

            </div>

            <Pent />

          </section>

        </div>

      </div>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials container">

        <h2 className="section-title">
          Customer Reviews
        </h2>

        <div className="row g-4">

          <div className="col-md-4">

            <div className="testimonial-card">

              <p>
                "Excellent quality and premium fitting."
              </p>

              <h5>
                — Rahul
              </h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="testimonial-card">

              <p>
                "Fast delivery and amazing fabric quality."
              </p>

              <h5>
                — Amit
              </h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="testimonial-card">

              <p>
                "Best fashion store for men’s outfits."
              </p>

              <h5>
                — Jay
              </h5>

            </div>

          </div>

        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="newsletter">

        <h2>
          Subscribe For Latest Fashion Updates
        </h2>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <h3>
          MEN FASHION HUB
        </h3>

        <p>
          Premium Fashion Store For Modern Men
        </p>

        <div className="footer-links">

          <a href="/">
            Home
          </a>

          <a href="/">
            Shirts
          </a>

          <a href="/">
            Pants
          </a>

          <a href="/">
            Contact
          </a>

        </div>

        <p className="copyright">
          © 2026 MEN FASHION HUB | All Rights Reserved
        </p>

      </footer>

    </>

  );
};

export default Home;