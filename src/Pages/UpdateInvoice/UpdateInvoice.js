import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateInvoice.css";

const UpdateInvoice = () => {
  const { inventoryId } = useParams();
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${inventoryId}`)
      .then((res) => res.json())
      .then((json) => setInvoice(json));
  }, []);
  return (
    <div className="container py-lg-5">
      <div className="invoice text-start">
        <div className="invoice-banner">
          <img className="img-fluid" src={invoice.picture} alt="" />
        </div>
        <div className="invoice-details pt-3">
          <h2>
            <strong>Name:</strong> {invoice.name}
          </h2>
          <h5>
            <strong>Author:</strong> {invoice.supplier}
          </h5>
          <h5>
            <strong>Details:</strong>{" "}
            <span style={{ fontSize: "15px" }}>{invoice.description}</span>
          </h5>
          <p>
            <strong>Price:</strong> {invoice.price}
          </p>
          <p>
            <strong>Quantity:</strong> {invoice.quantity}
          </p>
        </div>
        <button className="deliveryBtn me-1">Delivery</button>
        <button className="deliveryBtn ms-1">Manage Inventory</button>
      </div>
    </div>
  );
};

export default UpdateInvoice;
