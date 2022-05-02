import React from "react";
import "./OurService.css";

const OurService = () => {
  return (
    <div className="container py-3">
      <header className="text-center pt-3 pt-lg-4 pb-lg-4">
        <h2>
          <span id="span">S</span>
          <span id="span">E</span>
          <span id="span">R</span>
          <span id="span">V</span>
          <span id="span">I</span>
          <span id="span">C</span>
          <span id="span">E</span>
          <span id="span">S</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid var(--green)",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-4 pt-5">
        <div className="col">
          <div className="icons">
            <i className="fas fa-shipping-fast"></i>
            <div className="content">
              <h3>free shipping</h3>
              <p>order over $100</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="icons">
            <i className="fas fa-lock"></i>
            <div className="content">
              <h3>secure payment</h3>
              <p>100 secure payment</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="icons">
            <i className="fas fa-redo-alt"></i>
            <div className="content">
              <h3>easy returns</h3>
              <p>10 days returns</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="icons">
            <i className="fas fa-headset"></i>
            <div className="content">
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
