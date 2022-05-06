import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeInvoice.css";

const HomeInvoice = (props) => {
  const { _id, name, price, quantity, picture, description, supplier } =
    props.invoice;
  const navigate = useNavigate();

  const handleUpdateBtn = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col text-start">
      <div className="card h-100">
        <div className="invoice-banner parent">
          <div className="child">
            <img className="img-fluid" src={picture} alt="" />
          </div>
        </div>
        <div className="card-body quantity-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <span id="quantity">{quantity}</span>
        </div>
        <div className="card-footer">
          <div className="footer-details d-flex justify-content-between align-items-center">
            <span>{supplier}</span>
            <span style={{ color: "var(--green)" }}>${price}</span>
          </div>
        </div>
        <button onClick={() => handleUpdateBtn(_id)} className="updateBtn">
          Update Invoice
        </button>
      </div>
    </div>
  );
};

export default HomeInvoice;
