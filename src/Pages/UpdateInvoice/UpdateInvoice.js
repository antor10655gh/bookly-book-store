import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateInvoice.css";

const UpdateInvoice = () => {
  const { inventoryId } = useParams();
  const [invoice, setInvoice] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${inventoryId}`)
      .then((res) => res.json())
      .then((json) => setInvoice(json));
  }, []);

  const decreaseQuantity = () => {
    fetch(`http://localhost:5000/inventory/minus/${inventoryId}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((json) => {
        setInvoice({ ...invoice, quantity: invoice.quantity - 1 });
      });
  };

  const handleRestock = async (e) => {
    e.preventDefault();
    const value = e.target.restock.value;

    fetch(`http://localhost:5000/inventory/plus/${inventoryId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: value }),
    })
      .then((res) => res.json())
      .then((json) => {
        setInvoice({
          ...invoice,
          quantity: parseInt(invoice.quantity) + parseInt(value),
        });
      });
    e.target.restock.value = "";
  };

  const handleManageInventoryBtn = () => {
    navigate("/manageitem");
  };

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
        <button className="deliveryBtn me-1" onClick={decreaseQuantity}>
          Delivery
        </button>
        <button
          onClick={handleManageInventoryBtn}
          className="manageInventoryBtn ms-1"
        >
          Manage Inventory
        </button>

        <div className="restock mt-3 py-3">
          <header>
            <h2>You can restock</h2>
          </header>
          <form onSubmit={handleRestock}>
            <input name="restock" type="number" />
            <br />
            <button className="restockBtn" type="submit">
              Restock
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInvoice;
