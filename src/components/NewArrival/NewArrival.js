import React from "react";
import "./NewArrival.css";
import book1 from "../../images/books/book-1.png";
import book2 from "../../images/books/book-2.png";
import book3 from "../../images/books/book-3.png";
import book4 from "../../images/books/book-4.png";
import book5 from "../../images/books/book-5.png";
import book6 from "../../images/books/book-6.png";
import book7 from "../../images/books/book-7.png";
import book8 from "../../images/books/book-8.png";
import book9 from "../../images/books/book-9.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center pt-3 pb-lg-4">
        <h2>
          <span id="span">A</span>
          <span id="span">R</span>
          <span id="span">R</span>
          <span id="span">I</span>
          <span id="span">V</span>
          <span id="span">A</span>
          <span id="span">L</span>
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
      <div className="row row-cols-1 row-cols-lg-3 g-4 pt-3 pt-lg-5">
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book1} alt="" />
              </div>
              <div className="content">
                <h3>The Art City</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book2} alt="" />
              </div>
              <div className="content">
                <h3>Your Name</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book3} alt="" />
              </div>
              <div className="content">
                <h3>Venice Kope</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book4} alt="" />
              </div>
              <div className="content">
                <h3>Sunny Barcelona</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book5} alt="" />
              </div>
              <div className="content">
                <h3>Give Thanks</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book6} alt="" />
              </div>
              <div className="content">
                <h3>Exciting Belgrade</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book7} alt="" />
              </div>
              <div className="content">
                <h3>Give Thanks</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book8} alt="" />
              </div>
              <div className="content">
                <h3>Exciting Belgrade</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="arrivals">
            <Link to="#" className="box">
              <div className="image">
                <img src={book9} alt="" />
              </div>
              <div className="content">
                <h3>Give Thanks</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
