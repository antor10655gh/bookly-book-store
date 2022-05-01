import React from "react";
import Banner from "../../components/Banner/Banner";
import Deal from "../../components/Deal/Deal";
import NewArrival from "../../components/NewArrival/NewArrival";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import OurService from "../../components/OurService/OurService";
import Reviews from "../../components/Reviews/Reviews";
import Gallery from "../Gallery/Gallery";
import HomeInvoices from "../HomeInvoices/HomeInvoices";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurService></OurService>
      <HomeInvoices></HomeInvoices>
      <NewsLetter></NewsLetter>
      <NewArrival></NewArrival>
      <Deal></Deal>
      <Reviews></Reviews>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
