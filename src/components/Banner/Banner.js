import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import book1 from "../../images/books/book-1.png";
import book2 from "../../images/books/book-2.png";
import book3 from "../../images/books/book-3.png";
import book4 from "../../images/books/book-4.png";
import book5 from "../../images/books/book-5.png";
import book6 from "../../images/books/book-6.png";
import stand from "../../images/books/stand.png";

const Banner = () => {
  return (
    <div className="mt-3">
      <section className="home" id="home">
        <div className="row row-cols-1 row-cols-lg-2 mx-3 pt-5">
          <div className="col d-flex align-items-center text-start">
            <div className="content py-4 px-lg-4 py-lg-0">
              <h1>
                Upto 73% <span style={{ color: "var(--green)" }}>Off</span>
              </h1>
              <p>
                This is the one of the most popular book shop in the world. We
                always think about the satisfaction of our customer. When our
                customer happy then we are also be happy!!!
              </p>
              <button className="shopBtn mt-3">shop now</button>
            </div>
          </div>

          <div className="col">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="mx-1">
                <Link to="#" className="swiper-slide">
                  <img src={book1} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="mx-1">
                <Link to="#" className="swiper-slide">
                  <img src={book2} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="mx-1">
                <Link to="#" className="swiper-slide">
                  <img src={book3} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="mx-1">
                <Link to="#" className="swiper-slide">
                  <img src={book4} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="mx-1">
                <Link to="#" className="swiper-slide">
                  <img src={book3} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="mx-1">
                <Link to="#" className="swiper-slide">
                  <img src={book6} alt="" />
                </Link>
              </SwiperSlide>
            </Swiper>
            <img src={stand} className="stand" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
