import Home from "./Pages/Home";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Shirt from "./Pages/Shirt";
import Pent from "./Pages/Pent";
import Login from "./Pages/login";
import SignupForm from "./Pages/SignupForm";
import Cart from "./Pages/cart";
import Payment from "./Pages/Payment";
import About from "./Pages/About";

import { CartProvider } from "./Pages/Cartcontext";

import { Toaster } from "react-hot-toast";

/* ================= SCROLL TO TOP ================= */
function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname]);

  return null;
}

/* ================= PROTECTED ROUTE ================= */
const ProtectedRoute = ({ children }) => {

  const isLogged =
    localStorage.getItem("user") || sessionStorage.getItem("user");

  return isLogged
    ? children
    : <Navigate to="/login" />;
};

/* ================= APP ================= */
function App() {

  return (

    <CartProvider>

      <Router>

        {/* ================= SCROLL TOP ================= */}
        <ScrollToTop />

        {/* ================= NAVBAR ================= */}
        <Navbar />

        {/* ================= TOASTER ================= */}
        <Toaster
          position="top-right"
          reverseOrder={false}
        />

        {/* ================= ROUTES ================= */}
        <Routes>

          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ================= SHIRT ================= */}
          <Route
            path="/shirt"
            element={<Shirt />}
          />

          {/* ================= PANT ================= */}
          <Route
            path="/pent"
            element={<Pent />}
          />

          {/* ================= LOGIN ================= */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* ================= SIGNUP ================= */}
          <Route
            path="/signupForm"
            element={<SignupForm />}
          />

          {/* ================= CART ================= */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          {/* ================= PAYMENT ================= */}
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />

          {/* ================= ABOUT ================= */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* ================= 404 PAGE ================= */}
          <Route
            path="*"
            element={
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "120px",
                }}
              >
                404 Page Not Found
              </h1>
            }
          />

        </Routes>

        {/* ================= FOOTER ================= */}
        <Footer />

      </Router>

    </CartProvider>

  );
}

export default App;