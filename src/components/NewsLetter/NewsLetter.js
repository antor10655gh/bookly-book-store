import React from "react";
import { Button, Form } from "react-bootstrap";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h3 className="pb-3">Subscribe For Latest Updates</h3>
          <Form.Control
            id="footer-input"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Button className="submit-btn" variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </div>
  );
};

export default NewsLetter;
