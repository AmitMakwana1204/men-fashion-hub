import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

  return (

    <footer className="footer">

      {/* ================= TOP SECTION ================= */}
      <div className="footer-top container">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">

          <h2>
            Men Fashion Hub
          </h2>

          <p>
            Your trusted destination for premium men’s clothing,
            modern fashion trends, and stylish essentials.
          </p>

        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shirt">
                Shirts
              </Link>
            </li>

            <li>
              <Link to="/pent">
                Pants
              </Link>
            </li>

            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/cart">
                Cart
              </Link>
            </li>

          </ul>

        </div>

        {/* ================= HELP ================= */}
        <div className="footer-help">

          <h3>
            Customer Help
          </h3>

          <ul>

            <li>
              Order Status
            </li>

            <li>
              Shipping Policy
            </li>

            <li>
              Returns & Refund
            </li>

            <li>
              FAQs
            </li>

            <li>
              Support Center
            </li>

          </ul>

        </div>

        {/* ================= SOCIAL ================= */}
        <div className="footer-social">

          <h3>
            Follow Us
          </h3>

          <div className="social-icons">

            {/* ================= INSTAGRAM ================= */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >

              <img
                src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6z'/%3E%3C/svg%3E"
                alt="Instagram"
              />

            </a>

            {/* ================= FACEBOOK ================= */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >

              <img
                src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2.8.2v2h-1.6c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 3h-2.4v7A10 10 0 0 0 22 12z'/%3E%3C/svg%3E"
                alt="Facebook"
              />

            </a>

            {/* ================= WHATSAPP ================= */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >

              <img
                src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M20.5 3.5A11.8 11.8 0 0 0 12 0a11.8 11.8 0 0 0-11.5 13.8L0 24l10.5-2.1A11.8 11.8 0 0 0 24 11.8c0-3.1-1.3-6.1-3.5-8.3zM12 21.4c-1.7 0-3.4-.4-4.9-1.2l-.4-.2-6 1.2 1.2-5.9-.2-.4A9.5 9.5 0 1 1 12 21.4zm5-7.5c-.3.8-1.7 1.6-2.3 1.7-.6.1-1.3.1-2.1-.1-.5-.1-1.2-.4-2-.8a11.2 11.2 0 0 1-2.9-2.6c-.2-.3-.7-.9-.7-1.6s.4-1.2.5-1.4c.1-.2.2-.3.4-.4h.5c.2 0 .4 0 .6.4l.8 1.3c.2.4.1.5-.1.8l-.3.4-.1.2c-.1.1 0 .3.1.4a7 7 0 0 0 2.2 1.8c.3.1.5.1.6 0l.8-.9c.2-.2.4-.2.6-.1l1.5.6c.4.2.8.3.8.5z'/%3E%3C/svg%3E"
                alt="WhatsApp"
              />

            </a>

            {/* ================= YOUTUBE ================= */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >

              <img
                src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5s-4.9 0-8.6.4c-.4 0-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S0 8 0 9.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.6.4 7.6.4s4.9 0 8.6-.4c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.7.2-3.5V9.7c0-1.7-.2-3.5-.2-3.5zM9.7 14.6V7.9l6.3 3.4-6.3 3.3z'/%3E%3C/svg%3E"
                alt="YouTube"
              />

            </a>

          </div>

        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Men Fashion Hub |
          Created by Amit Makwana
        </p>

      </div>

    </footer>

  );
};

export default Footer;