import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import "./login.css";

const Login = () => {

  const navigate = useNavigate();

  // ================= STATE =================
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {

    e.preventDefault();

    const email = formData.email.trim();
    const password = formData.password.trim();

    // ================= VALIDATION =================
    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {

      setLoading(true);

      const response = await fetch(
        "/api/users/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      // ================= LOGIN FAILED =================
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ================= SAVE TOKEN =================
      if (rememberMe) {

        localStorage.setItem("token", data.token);

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

      } else {

        sessionStorage.setItem("token", data.token);

        sessionStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }

      // ================= SUCCESS =================
      toast.success("Login successful!");

      console.log("Logged In User:", data);

      navigate("/");

    } catch (error) {

      console.error("Login Error:", error);

      toast.error(
        error.message || "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="login-page">

      <div className="login-container">

        {/* ================= BRAND ================= */}
        <h1 className="brand-name">
          MEN FASHION HUB
        </h1>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit}>

          {/* ================= EMAIL ================= */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* ================= PASSWORD ================= */}
          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />

            {/* ================= SHOW PASSWORD ================= */}
            <span
              className="show-password"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "🙈" : "👁️"}
            </span>

          </div>

          {/* ================= OPTIONS ================= */}
          <div className="login-options">

            {/* ================= REMEMBER ================= */}
            <label className="remember-me">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() =>
                  setRememberMe(!rememberMe)
                }
              />

              Remember me

            </label>

            {/* ================= FORGOT ================= */}
            <Link
              to="/forgot-password"
              className="forgot-link"
            >
              Forgot Password?
            </Link>

          </div>

          {/* ================= LOGIN BUTTON ================= */}
          <button
            type="submit"
            disabled={loading}
          >

            {loading
              ? "Logging in..."
              : "LOGIN"}

          </button>

        </form>

        {/* ================= DIVIDER ================= */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* ================= GOOGLE BUTTON ================= */}
        <button className="google-btn">
          Continue with Google
        </button>

        {/* ================= SIGNUP ================= */}
        <p className="signup-text">

          Don’t have an account?

          <Link to="/SignupForm">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;