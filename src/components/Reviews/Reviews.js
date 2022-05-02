import React from "react";
import "./Reviews.css";
import reviews1 from "../../images/reviews/pic-1.png";
import reviews2 from "../../images/reviews/pic-2.png";
import reviews3 from "../../images/reviews/pic-3.png";

const Reviews = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center pt-3 pb-lg-5">
        <h2>
          <span id="span">R</span>
          <span id="span">E</span>
          <span id="span">V</span>
          <span id="span">I</span>
          <span id="span">E</span>
          <span id="span">W</span>
          <span id="span">S</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid var(--green)",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3">
        <div className="col">
          <div className="review-box">
            <img src={reviews1} alt="" />
            <h3>John Deo</h3>
            <p>
              This information is mostly requested in an employment biodata.
              Employers usually ask applicants to highlight relevant skills in a
              job application.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="review-box">
            <img src={reviews2} alt="" />
            <h3>Risa Leo</h3>
            <p>
              This information is mostly requested in an employment biodata.
              Employers usually ask applicants to highlight relevant skills in a
              job application.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="review-box">
            <img src={reviews3} alt="" />
            <h3>David John</h3>
            <p>
              This information is mostly requested in an employment biodata.
              Employers usually ask applicants to highlight relevant skills in a
              job application.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
