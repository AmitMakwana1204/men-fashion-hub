import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import "./SignupForm.css";

const SignupForm = () => {

  const navigate = useNavigate();

  // ================= STATE =================
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {

    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
    } = form;

    // ================= VALIDATION =================
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password
    ) {
      return toast.error(
        "All fields are required"
      );
    }

    const name =
      `${firstName} ${lastName}`;

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      // ================= FAILED =================
      if (!response.ok) {
        throw new Error(
          data.message ||
          "Registration failed"
        );
      }

      // ================= SUCCESS =================
      toast.success(
        "Account created successfully!"
      );

      console.log(
        "User Registered:",
        data
      );

      navigate("/login");

    } catch (error) {

      console.error(
        "Signup Error:",
        error
      );

      toast.error(
        error.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="signup-page">

      <div className="signup-container">

        {/* ================= BRAND ================= */}
        <h1 className="brand-name">
          MEN FASHION HUB
        </h1>

        {/* ================= FORM ================= */}
        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          {/* ================= FIRST NAME ================= */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          {/* ================= LAST NAME ================= */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          {/* ================= EMAIL ================= */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* ================= PASSWORD ================= */}
          <div className="password-box">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <span
              className="show-password"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword
                ? "🙈"
                : "👁️"}
            </span>

          </div>

          {/* ================= BUTTON ================= */}
          <button
            type="submit"
            disabled={loading}
          >

            {loading
              ? "Creating Account..."
              : "SIGN UP"}

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

        {/* ================= LOGIN ================= */}
        <p className="login-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default SignupForm;