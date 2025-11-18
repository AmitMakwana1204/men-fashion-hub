import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import Shirt from "./Shirt";
import Pent from "./Pent";


const Home = () => {
  return (
    <>
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.pinimg.com/1200x/1e/1c/3e/1e1c3ebdccc66d783108d9f77b920a93.jpg" className="d-block w-100" alt="Slide 1" />
       
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/1200x/8d/d9/3d/8dd93dd94e6e49e3754664d214f36b66.jpg" className="d-block w-100" alt="Slide 2" />
         
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/1200x/95/f9/16/95f916f0e120311e8c76893a412e3077.jpg" className="d-block w-100" alt="Slide 3" />
          
        </div>
      </div>

      {/* Navigation Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>

       </div>
       </div>
        <div className="home-sections">
         <section className="product-section">
           <h2>Shirts Collection</h2>
           <Shirt />
         </section>

         <section className="product-section">
           <h2>Pants Collection</h2>
         <Pent />
         </section>
          </div>
   </>
    
  );
};

export default Home;