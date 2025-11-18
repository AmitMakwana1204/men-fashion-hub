import React from 'react'
import './Navbar.css'
import logo from '../Assets/images/logo.png'
import cart from'../Assets/images/cart.png'
import { Link } from 'react-router-dom'

const Navbar = ()  => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Men Fashion Hub</p>
        </div>
        <ul className='nav-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shirt">Shirts</Link></li>
            <li><Link to="/pent">Pants</Link></li>

        </ul>
        <div className='nav-login-cart'>
            <Link to="/login">
            <button>Login</button>
            </Link>
            <Link to="/cart"><img src={cart} alt="" /></Link>
        </div>
    </div>
  );
};



export default Navbar;