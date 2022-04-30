import React from "react";
import "./OurService.css";

const OurService = () => {
  return (
    <div className="container">
      <header className="text-center pt-lg-5 pb-lg-4">
        <h2>
          Our <span style={{ color: "var(--green)" }}>Service</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid var(--green)",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-4 py-5">
        <div className="col">
          <div class="icons">
            <i class="fas fa-shipping-fast"></i>
            <div class="content">
              <h3>free shipping</h3>
              <p>order over $100</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="icons">
            <i class="fas fa-lock"></i>
            <div class="content">
              <h3>secure payment</h3>
              <p>100 secure payment</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="icons">
            <i class="fas fa-redo-alt"></i>
            <div class="content">
              <h3>easy returns</h3>
              <p>10 days returns</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="icons">
            <i class="fas fa-headset"></i>
            <div class="content">
              <h3>24/7 support</h3>
              <p>call us anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
