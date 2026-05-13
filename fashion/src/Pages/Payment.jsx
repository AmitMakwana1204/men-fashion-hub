import React, { useState } from "react";
import "./payment.css";

const Payment = () => {

  const [selectedMethod, setSelectedMethod] =
    useState("");

  const handlePayment = () => {

    if (!selectedMethod) {

      alert("Please select a payment method");

      return;
    }

    alert(
      `Payment Successful with ${selectedMethod} 🎉`
    );

  };

  return (

    <div className="payment-page">

      <div className="payment-box">

        {/* ================= TITLE ================= */}
        <h1>
          Secure Payment
        </h1>

        <p>
          Please select your preferred payment method
        </p>

        {/* ================= PAYMENT METHODS ================= */}
        <div className="payment-methods">

          <button
            className={
              selectedMethod === "UPI"
                ? "pay-option active"
                : "pay-option"
            }
            onClick={() =>
              setSelectedMethod("UPI")
            }
          >
            UPI / PhonePe / GPay
          </button>

          <button
            className={
              selectedMethod === "Card"
                ? "pay-option active"
                : "pay-option"
            }
            onClick={() =>
              setSelectedMethod("Card")
            }
          >
            Credit / Debit Card
          </button>

          <button
            className={
              selectedMethod === "COD"
                ? "pay-option active"
                : "pay-option"
            }
            onClick={() =>
              setSelectedMethod("COD")
            }
          >
            Cash on Delivery
          </button>

        </div>

        {/* ================= PAYMENT SUMMARY ================= */}
        <div className="payment-summary">

          <h3>
            Order Summary
          </h3>

          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹1999
            </span>

          </div>

          <div className="summary-row">

            <span>
              Delivery
            </span>

            <span>
              Free
            </span>

          </div>

          <div className="summary-row total">

            <span>
              Total
            </span>

            <span>
              ₹1999
            </span>

          </div>

        </div>

        {/* ================= FINAL BUTTON ================= */}
        <button
          className="final-pay-btn"
          onClick={handlePayment}
        >
          Confirm & Pay
        </button>

      </div>

    </div>

  );
};

export default Payment;