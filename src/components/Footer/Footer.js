import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row row-cols-1 row-cols-lg-3 p-2 p-lg-4">
        <div className="col">
          <div className="footer-left text-start">
            <div className="pb-2">
              <i className="fas fa-book"></i>{" "}
              <span
                style={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}
              >
                Bookly
              </span>
            </div>
            <p className="text-justify">
              This is so much popular warehouse. Warehouses are central
              locations that manage both inbound and outbound products.
              Maintaining a warehouse is crucial for any business that sells
              physical goods!
            </p>
          </div>
        </div>
        <div className="col">
          <h3 className="text-start text-lg-center">Link</h3>
          <nav className="mt-lg-5 mb-2 mb-lg-0">
            <Link to="/home">Home</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
        <div className="col text-start">
          <h3 className="pb-3">Contact</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                id="footer-input"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button className="submit-btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
