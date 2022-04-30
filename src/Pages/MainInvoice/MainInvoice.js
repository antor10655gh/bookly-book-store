import React from "react";
import "./MainInvoice.css";

const MainInvoice = (props) => {
  const { id, name, price, picture, description, supplier } = props.invoice;
  return (
    <div className="col text-start">
      <div className="card h-100">
        <div className="invoice-banner parent">
          <div className="child">
            <img className="img-fluid" src={picture} alt="" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
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

export default MainInvoice;
