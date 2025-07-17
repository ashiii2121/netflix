import React from "react";
import "./Hero.css";

function Hero({ children }) {
  return (
    <div className="hero-container">
      <div className="content">
        <h1 className="heading">Unlimited movies, TV shows, and more</h1>
        <p className="para">Starts at ₹149. Cancel at any time.</p>
        <div className="form-container">
          {children} {/* This will place the Form inside the hero */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
