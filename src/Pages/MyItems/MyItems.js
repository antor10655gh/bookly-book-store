import React, { useEffect, useState } from "react";
import "./MyItems.css";
import { Button } from "react-bootstrap";

const MyItems = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("https://warm-castle-28299.herokuapp.com/myitem", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setInvoices(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id) => {
    const proceed = window.confirm("Are you sure to remove?");
    if (proceed) {
      const url = `https://warm-castle-28299.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = invoices.filter((invoice) => invoice._id !== id);
          setInvoices(remaining);
        });
    }
  };
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center pb-lg-5">
        <h2>
          <span id="span">M</span>
          <span id="span">Y</span>
          <span id="span">I</span>
          <span id="span">T</span>
          <span id="span">E</span>
          <span id="span">M</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid var(--green)",
            margin: "0 auto",
          }}
        ></div>
      </header>
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
                <h3 style={{ color: "black" }}>
                  <strong>Name:</strong> {invoice.name}
                </h3>
                <h6>
                  <strong>Author:</strong> {invoice.supplier}
                </h6>
                <h6>
                  <strong>Details:</strong>{" "}
                  <span style={{ fontSize: "15px" }}>
                    {invoice.description}
                  </span>
                </h6>
                <p>
                  <strong>Price:</strong> {invoice.price}
                </p>
                <p>
                  <strong>Quantity:</strong> {invoice.quantity}
                </p>
              </div>
              <Button
                onClick={() => handleRemove(invoice._id)}
                className="deleteBtn"
              >
                Remove Item
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
