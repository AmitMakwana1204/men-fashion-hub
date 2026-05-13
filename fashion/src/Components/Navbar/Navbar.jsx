import React, { useState } from "react";
import {
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";

import "./Navbar.css";

import logo from "../Assets/images/logo.png";
import cart from "../Assets/images/cart.png";

import { useCart } from "../../Pages/Cartcontext";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const { totalItems } = useCart();

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user") || "null"
  );

  /* ================= LOGOUT ================= */
  const handleLogout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      {/* ================= LOGO ================= */}
      <Link
        to="/"
        className="nav-logo"
      >

        <img
          src={logo}
          alt="Men Fashion Hub Logo"
        />

        <p>
          Men Fashion Hub
        </p>

      </Link>

      {/* ================= HAMBURGER ================= */}
      <div
        className={`hamburger ${
          menuOpen ? "open" : ""
        }`}
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        <span></span>
        <span></span>
        <span></span>

      </div>

      {/* ================= NAV MENU ================= */}
      <ul
        className={`nav-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <li>

          <NavLink
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/shirt"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Shirts
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/pent"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Pants
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/about"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            About Us
          </NavLink>

        </li>

      </ul>

      {/* ================= RIGHT SECTION ================= */}
      <div className="nav-login-cart">

        {/* ================= USER ================= */}
        {user ? (

          <div className="nav-user">

            <span className="user-name">

              Hi,
              {" "}
              {user.name.split(" ")[0]}

            </span>

            <button
              className="login-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        ) : (

          <Link to="/login">

            <button className="login-btn">
              Login
            </button>

          </Link>

        )}

        {/* ================= CART ================= */}
        <Link
          to="/cart"
          className="cart-box"
        >

          <img
            src={cart}
            alt="Shopping Cart"
          />

          <span className="cart-count">
            {totalItems}
          </span>

        </Link>

      </div>

    </nav>

  );
};

export default Navbar;