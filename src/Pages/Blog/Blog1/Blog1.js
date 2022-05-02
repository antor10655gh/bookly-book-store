import React from "react";
import "./Blog1.css";
import blog1 from "../../../images/blog/blog1.png";
import blog2 from "../../../images/blog/blog2.png";

const Blog1 = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="pb-3">
        <h2>Difference between javascript and nodejs.</h2>
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
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development.
            </p>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="blog1-banner">
            <img width="300px" src={blog2} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="blog1-details">
            <h4>JavaScript:</h4>
            <p>
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
