import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container-fluid footer">
      <div className="row row-cols-1 row-cols-lg-3 p-2 p-lg-4 pt-5 ">
        <div className="col">
          <div className="footer-left text-start">
            <div className="pb-2 pt-2 pt-lg-0">
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
      <hr />
      <div className="row row-cols-1 row-cols-lg-2 py-3 py-lg-2 d-flex justify-content-between align-items-center">
        <div className="col text-lg-start">
          <p className="px-3">
            Copyright © {year} All Rights Reserved by{" "}
            <span style={{ color: "var(--green)" }}>AM Antor.</span>.
          </p>
        </div>
        <div className="col">
          <div className="share px-3 text-lg-end">
            <Link to="#" className="fab fa-facebook-f"></Link>
            <Link to="#" className="fab fa-twitter"></Link>
            <Link to="#" className="fab fa-instagram"></Link>
            <Link to="#" className="fab fa-linkedin"></Link>
            <Link to="#" className="fab fa-pinterest"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
