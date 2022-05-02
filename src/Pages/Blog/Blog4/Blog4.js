import React from "react";
import "./Blog4.css";
import blog7 from "../../../images/blog/blog7.jpeg";

const Blog4 = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="pb-3 pb-lg-5">
        <h2>What is the purpose of jwt and how does it work</h2>
      </header>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="blog1-banner">
            <img width="500px" src={blog7} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="blog1-details">
            <h4>JWT(JSON Web Token):</h4>
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </p>
            <h4>JWT Work:</h4>
            <p>
              JWT are mainly used for authentication. After a user logs in to an
              application, the application will create a JWT and send it back to
              the user. Subsequent requests by the user will include the JWT.
              The token tells the server what routes, services, and resources
              the user is allowed to access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
