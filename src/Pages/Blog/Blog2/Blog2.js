import React from "react";
import "./Blog2.css";
import blog1 from "../../../images/blog/blog1.png";
import blog3 from "../../../images/blog/blog3.svg";

const Blog2 = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="pb-3">
        <h2>When should you use nodejs and when should you use mongodb?</h2>
      </header>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="blog1-banner">
            <img width="300px" src={blog1} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="blog1-details">
            <h4>NodeJS:</h4>
            <p>
              Node.js is an open-source and cross-platform runtime environment
              built on Chrome's V8 JavaScript engine for executing JavaScript
              code outside of a browser. You need to recollect that NodeJS isn't
              a framework, and it's not a programing language. It provides an
              event-driven, non-blocking (asynchronous) I/O and cross-platform
              runtime environment for building highly scalable server-side
              applications using JavaScript.
            </p>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="blog1-banner">
            <img width="300px" src={blog3} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="blog1-details">
            <h4>Mongodb:</h4>
            <p>
              MongoDB can be used in places that require simple queries, easy
              and fast integration of data and have data whose structure changes
              constantly with time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
