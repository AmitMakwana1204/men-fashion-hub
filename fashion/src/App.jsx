import Home from './Pages/Home';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Shirt from './Pages/Shirt';
import Pent from './Pages/Pent';
import Login from './Pages/login';
import SignupForm from './Pages/SignupForm';
import Cart from './Pages/cart';
import { CartProvider } from './Pages/Cartcontext';
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Payment from './Pages/Payment';
import About from './Pages/About';
import Footer from './Components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Protected Route
const ProtectedRoute = ({ children }) => {
  const isLogged = localStorage.getItem("user");
  return isLogged ? children : <Navigate to="/login" />;
};

function App() {

  return (
    <CartProvider>
      <Router>
        <Navbar />
        

        {/* 🔥 Toaster Notifier */}
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shirt" element={<Shirt />} />
          <Route path="/Pent" element={<Pent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupForm" element={<SignupForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
        </Routes>
         <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
