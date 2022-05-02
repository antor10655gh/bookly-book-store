import React from "react";
import "./ManageItems.css";
import useInventory from "../../hooks/useInventory/useInventory";
import { Button } from "react-bootstrap";

const ManageItems = () => {
  const [invoices] = useInventory();
  return (
    <div className="container py-3 py-lg-5">
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {invoices.map((invoice) => (
          <div className="col" key={invoice._id}>
            <div
              className="card h-100 invoice-wrapper"
              style={{ border: "1px solid gray" }}
            >
              <div className="card-body invoice-banner">
                <img className="img-fluid" src={invoice.picture} alt="" />
              </div>
              <div className="card-footer invoice-details pt-3">
                <h2>
                  <strong>Name:</strong> {invoice.name}
                </h2>
                <h5>
                  <strong>Author:</strong> {invoice.supplier}
                </h5>
                <h5>
                  <strong>Details:</strong>{" "}
                  <span style={{ fontSize: "15px" }}>
                    {invoice.description}
                  </span>
                </h5>
                <p>
                  <strong>Price:</strong> {invoice.price}
                </p>
                <p>
                  <strong>Quantity:</strong> {invoice.quantity}
                </p>
              </div>
              <Button className="deleteBtn">Remove Item</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
