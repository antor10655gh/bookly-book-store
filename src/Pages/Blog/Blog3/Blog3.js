import React from "react";
import "./Blog3.css";
import blog5 from "../../../images/blog/blog5.jpg";
import blog6 from "../../../images/blog/blog6.jpg";

const Blog3 = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="pb-3">
        <h2>Differences between sql and nosql databases.</h2>
      </header>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="blog1-banner">
            <img width="300px" src={blog6} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="blog1-details">
            <h4>SQL:</h4>
            <ul className="text-start">
              <li>Relational Database Management System (RDBMS)</li>
              <li>These databases have fixed or static or predefined schema</li>
              <li>
                These databases are not suited for hierarchical data storage.
              </li>
              <li>These databases are best suited for complex queries</li>
              <li>Vertically Scalable</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="blog1-banner">
            <img width="300px" src={blog5} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="blog1-details">
            <h4>NoSQL:</h4>
            <ul className="text-start">
              <li>Non-relational or distributed database system.</li>
              <li>They have dynamic schema</li>
              <li>
                These databases are best suited for hierarchical data storage.
              </li>
              <li>These databases are not so good for complex queries</li>
              <li>Horizontally scalable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
