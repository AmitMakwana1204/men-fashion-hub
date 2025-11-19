import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/images/logo.png";
import cart from "../Assets/images/cart.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Men Fashion Hub</p>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Items */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shirt" onClick={() => setMenuOpen(false)}>
            Shirts
          </NavLink>
        </li>
        <li>
          <NavLink to="/pent" onClick={() => setMenuOpen(false)}>
            Pants
          </NavLink>
        </li>
      </ul>

      {/* Right side: Login + Cart */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/cart" className="cart-box">
          <img src={cart} alt="Cart" />
          <span className="cart-count">0</span>
        </Link>
      </div>
    </nav>
  );
};


export default Navbar;