import React from "react";
import "./Deal.css";
import dealImg from "../../images/books/deal-img.jpg";
import { Link } from "react-router-dom";

const Deal = () => {
  return (
    <div className="deal">
      <div className="container p-5">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col text-start">
            <div className="content">
              <h3>Deal Of The Day</h3>
              <h1>Upto 50% Off</h1>
              <p>
                You can do this by adding a negative line to the invoice and
                specifying the discount in the description. The negative line
                isn't a percentage, but equals the amount of the discount.
              </p>
              <Link to="#" className="shopBtn">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="image">
              <img className="img-fluid" src={dealImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
