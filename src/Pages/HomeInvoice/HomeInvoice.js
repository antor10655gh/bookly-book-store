import React from "react";
import "./HomeInvoice.css";

const HomeInvoice = (props) => {
  const { id, name, price, picture, description, supplier } = props.invoice;
  return (
    <div className="col text-start">
      <div class="card h-100">
        <div className="invoice-banner parent">
          <div className="child">
            <img className="img-fluid" src={picture} alt="" />
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div class="card-footer">
          <div className="footer-details d-flex justify-content-between align-items-center">
            <span>{supplier}</span>
            <span style={{ color: "var(--green)" }}>{price}</span>
          </div>
        </div>
        <button className="updateBtn">Update Invoice</button>
      </div>
    </div>
  );
};

export default HomeInvoice;
