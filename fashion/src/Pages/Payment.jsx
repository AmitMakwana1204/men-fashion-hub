import React from "react";
import "./payment.css";

const Payment = () => {
  return (
    <div className="payment-page">
      <div className="payment-box">
        <h1>Payment</h1>
        <p>Please select your payment method</p>

        <div className="payment-methods">
          <button className="pay-option">UPI / PhonePe / GPay</button>
          <button className="pay-option">Credit / Debit Card</button>
          <button className="pay-option">Cash on Delivery</button>
        </div>

        <button className="final-pay-btn">Confirm & Pay</button>
      </div>
    </div>
  );
};

export default Payment;
