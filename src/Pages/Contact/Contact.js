import React from "react";
import "./Contact.css";
import contactImg from "../../images/contact/contact.jpg";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center pt-3 pt-lg-2 pb-lg-3 pb-3">
        <h2>
          <span id="span">C</span>
          <span id="span">O</span>
          <span id="span">N</span>
          <span id="span">T</span>
          <span id="span">A</span>
          <span id="span">C</span>
          <span id="span">T</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid var(--green)",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="about-banner">
            <img className="img-fluid" src={contactImg} alt="" />
          </div>
        </div>
        <div className="col text-start">
          <h2 className="fw-bold">
            Contact <span style={{ color: "var(--green)" }}>Me</span>
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your mobile "
                required
              />
            </Form.Group>

            <Button className="contactBtn" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
